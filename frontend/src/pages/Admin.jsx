import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, Trash2, Copy, Phone, Mail, Search, MessageCircle, Calendar, 
  Check, RefreshCw, Clipboard, User, Bell, CheckCircle2,
  FileText, MessageSquare, Clock, Save, X, PlusCircle, AlertCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const API_BASE = "https://soaring-aerotech-two.vercel.app";

export default function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  
  // Dual Filters
  const [activeTypeTab, setActiveTypeTab] = useState("all"); // all, contact, training
  const [activeStatusTab, setActiveStatusTab] = useState("all"); // all, unread, contacted, callback, closed, junk

  // Copy/Delete states
  const [copiedId, setCopiedId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [, setLocation] = useLocation();

  // CRM Inline Edit States
  const [crmEditingId, setCrmEditingId] = useState(null);
  const [editStatus, setEditStatus] = useState("new");
  const [editNotes, setEditNotes] = useState("");
  const [editFollowUpDate, setEditFollowUpDate] = useState("");
  const [editClientResponse, setEditClientResponse] = useState("");
  const [crmSavingId, setCrmSavingId] = useState(null);

  // Load and verify session
  useEffect(() => {
    const token = localStorage.getItem("soaring_admin_token");
    if (!token) {
      setLocation("/login");
      return;
    }
    fetchSubmissions(token);
  }, [setLocation]);

  const fetchSubmissions = async (token) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_BASE}/api/forms/submissions`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.status === 401) {
        localStorage.removeItem("soaring_admin_token");
        setLocation("/login");
        return;
      }
      const data = await res.json();
      if (data.success) {
        setSubmissions(data.data);
        setFilteredSubmissions(data.data);
      } else {
        setError(data.error || "Failed to load submissions.");
      }
    } catch (err) {
      setError("Unable to connect to the backend server.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Log Out
  const handleLogout = () => {
    localStorage.removeItem("soaring_admin_token");
    setLocation("/login");
  };

  // Filter submissions
  useEffect(() => {
    let result = submissions;

    // Filter by type
    if (activeTypeTab !== "all") {
      result = result.filter(sub => sub.type === activeTypeTab);
    }

    // Filter by status
    if (activeStatusTab === "unread") {
      result = result.filter(sub => sub.read === false);
    } else if (activeStatusTab !== "all") {
      result = result.filter(sub => sub.status === activeStatusTab);
    }

    // Filter by search
    if (search.trim() !== "") {
      const query = search.toLowerCase();
      result = result.filter(sub => 
        (sub.name && sub.name.toLowerCase().includes(query)) ||
        (sub.email && sub.email.toLowerCase().includes(query)) ||
        (sub.phone && sub.phone.toLowerCase().includes(query)) ||
        (sub.subject && sub.subject.toLowerCase().includes(query)) ||
        (sub.program && sub.program.toLowerCase().includes(query)) ||
        (sub.message && sub.message.toLowerCase().includes(query)) ||
        (sub.notes && sub.notes.toLowerCase().includes(query)) ||
        (sub.clientResponse && sub.clientResponse.toLowerCase().includes(query))
      );
    }

    setFilteredSubmissions(result);
  }, [search, activeTypeTab, activeStatusTab, submissions]);

  // Copy details
  const handleCopyDetails = (sub) => {
    const text = `
Lead Details:
-----------------------------
Type: ${sub.type.toUpperCase()}
Status: ${(sub.status || "new").toUpperCase()}
Name: ${sub.name}
Phone: ${sub.phone}
Email: ${sub.email || "N/A"}
Date: ${new Date(sub.createdAt).toLocaleDateString()}
${sub.program ? `Course Program: ${sub.program}` : ""}
${sub.subject ? `Subject: ${sub.subject}` : ""}
Message: ${sub.message || "N/A"}
-----------------------------
CRM Logs:
Notes: ${sub.notes || "None"}
Response: ${sub.clientResponse || "None"}
Follow-Up: ${sub.followUpDate ? new Date(sub.followUpDate).toLocaleDateString() : "Not Scheduled"}
-----------------------------
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedId(sub._id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Toggle Read Status
  const handleMarkRead = async (id, readStatus) => {
    const token = localStorage.getItem("soaring_admin_token");
    try {
      const res = await fetch(`${API_BASE}/api/forms/submissions/${id}/read`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ read: readStatus })
      });
      const data = await res.json();
      if (data.success) {
        setSubmissions(prev => prev.map(sub => sub._id === id ? { ...sub, read: readStatus } : sub));
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Triggered when client is contacted (marks read + updates status to contacted)
  const handleAutoContact = async (sub) => {
    const token = localStorage.getItem("soaring_admin_token");
    const updates = {};
    let shouldUpdate = false;

    if (sub.read === false) {
      updates.read = true;
      shouldUpdate = true;
    }
    if (!sub.status || sub.status === "new") {
      updates.status = "contacted";
      shouldUpdate = true;
    }

    if (!shouldUpdate) return;

    try {
      // First update read status
      if (updates.read) {
        await fetch(`${API_BASE}/api/forms/submissions/${sub._id}/read`, {
          method: "PUT",
          headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ read: true })
        });
      }

      // Then update status
      if (updates.status) {
        const res = await fetch(`${API_BASE}/api/forms/submissions/${sub._id}/crm`, {
          method: "PUT",
          headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            status: "contacted",
            notes: sub.notes || "",
            clientResponse: sub.clientResponse || "",
            followUpDate: sub.followUpDate || null
          })
        });
        const data = await res.json();
        if (data.success) {
          setSubmissions(prev => prev.map(s => s._id === sub._id ? { ...s, read: true, status: "contacted" } : s));
          return;
        }
      }

      setSubmissions(prev => prev.map(s => s._id === sub._id ? { ...s, read: true } : s));
    } catch (err) {
      console.error(err);
    }
  };

  // Start CRM edit session
  const startCrmEdit = (sub) => {
    setCrmEditingId(sub._id);
    setEditStatus(sub.status || "new");
    setEditNotes(sub.notes || "");
    setEditFollowUpDate(sub.followUpDate ? new Date(sub.followUpDate).toISOString().split('T')[0] : "");
    setEditClientResponse(sub.clientResponse || "");
  };

  // Save CRM edit
  const saveCrmEdit = async (id) => {
    const token = localStorage.getItem("soaring_admin_token");
    setCrmSavingId(id);
    try {
      const res = await fetch(`${API_BASE}/api/forms/submissions/${id}/crm`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          status: editStatus,
          notes: editNotes,
          followUpDate: editFollowUpDate || null,
          clientResponse: editClientResponse
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmissions(prev => prev.map(sub => sub._id === id ? { 
          ...sub, 
          status: editStatus,
          notes: editNotes,
          clientResponse: editClientResponse,
          followUpDate: editFollowUpDate ? new Date(editFollowUpDate).toISOString() : null,
          read: true // Automatically mark read when managed
        } : sub));
        setCrmEditingId(null);
      } else {
        alert("Failed to update CRM tracking logs.");
      }
    } catch (err) {
      alert("Error saving CRM updates.");
    } finally {
      setCrmSavingId(null);
    }
  };

  // Delete lead
  const handleDelete = async (id) => {
    const token = localStorage.getItem("soaring_admin_token");
    setDeletingId(id);
    try {
      const res = await fetch(`${API_BASE}/api/forms/submissions/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setSubmissions(prev => prev.filter(sub => sub._id !== id));
      } else {
        alert(data.error || "Failed to delete submission");
      }
    } catch (err) {
      alert("Error deleting submission.");
    } finally {
      setDeletingId(null);
    }
  };

  // Stats Counters
  const countTotal = submissions.length;
  const countNew = submissions.filter(s => s.read === false).length;
  const countCallbacks = submissions.filter(s => s.status === "callback").length;
  const countClosed = submissions.filter(s => s.status === "closed").length;

  // CRM Helper status badges
  const getStatusBadge = (status) => {
    const styles = {
      new: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      contacted: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      callback: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      closed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      junk: "bg-red-500/10 text-red-400 border-red-500/20",
    };
    const labels = {
      new: "New Lead",
      contacted: "Contacted",
      callback: "Callback Scheduled",
      closed: "Deal Closed",
      junk: "Spam / Junk",
    };
    return (
      <span className={`px-2 py-0.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-wider border ${styles[status || "new"]}`}>
        {labels[status || "new"]}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col">
      {/* ── Header ──────────────────────────────── */}
      <header className="border-b border-white/5 bg-[#0b0b0e]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight">
              Soaring <span className="text-primary">Aerotech</span>
            </span>
            <span className="h-4 w-[1px] bg-white/20 hidden sm:inline" />
            <span className="text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-widest hidden sm:inline">
              CRM Portal & Dashboard
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => fetchSubmissions(localStorage.getItem("soaring_admin_token"))}
              className="p-2 text-white/60 hover:text-white rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              title="Refresh CRM Logs"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <Button 
              onClick={handleLogout} 
              variant="outline" 
              className="border-white/10 bg-transparent text-white/80 hover:text-white hover:bg-white/5 flex items-center gap-2 rounded-xl text-xs sm:text-sm font-semibold"
            >
              <LogOut className="w-4 h-4" /> Log Out
            </Button>
          </div>
        </div>
      </header>

      {/* ── Main Workspace ──────────────────────── */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", count: countTotal, color: "from-slate-500/10 to-slate-500/5", border: "border-white/5", icon: <Clipboard className="w-5 h-5 text-white/60" /> },
            { label: "Unread Leads", count: countNew, color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/10", icon: <Bell className={`w-5 h-5 text-blue-400 ${countNew > 0 ? "animate-bounce" : ""}`} />, highlight: countNew > 0 },
            { label: "Callbacks Pending", count: countCallbacks, color: "from-amber-500/20 to-amber-500/5", border: "border-amber-500/10", icon: <Clock className="w-5 h-5 text-amber-400" /> },
            { label: "Deals Closed", count: countClosed, color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/10", icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" /> }
          ].map((stat, i) => (
            <div key={i} className={`p-5 rounded-2xl bg-gradient-to-br ${stat.color} border ${stat.border} shadow-lg backdrop-blur-md flex items-center justify-between transition-transform hover:scale-[1.01]`}>
              <div>
                <p className="text-white/40 text-[10px] sm:text-xs font-mono uppercase tracking-wider">{stat.label}</p>
                <h3 className={`text-2xl sm:text-3xl font-extrabold mt-1 ${stat.highlight ? "text-blue-400" : "text-white"}`}>{stat.count}</h3>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 shrink-0 ml-2">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Dual Filter Toolbar */}
        <div className="bg-[#0f0f13] border border-white/5 p-4 rounded-2xl backdrop-blur-md mb-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Search */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute inset-y-0 left-3 my-auto w-4.5 h-4.5 text-white/30" />
              <input
                type="text"
                placeholder="Search leads, phone numbers, courses or CRM notes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-primary/50 focus:outline-none transition-colors"
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-1.5 bg-white/5 p-1 rounded-xl overflow-x-auto self-start md:self-auto">
              {[
                { id: "all", label: "All Forms" },
                { id: "contact", label: "Contact Us" },
                { id: "training", label: "Training" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTypeTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    activeTypeTab === tab.id 
                      ? "bg-primary text-white shadow-md" 
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* CRM Status Filter tabs */}
          <div className="border-t border-white/5 pt-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block mb-2">Filter by Status</span>
            <div className="flex gap-1.5 overflow-x-auto pb-1">
              {[
                { id: "all", label: "All Statuses", style: "border-white/10 text-white/60 hover:text-white" },
                { id: "unread", label: `Unread (${countNew})`, style: "border-blue-500/20 text-blue-400 bg-blue-500/5 hover:bg-blue-500/10" },
                { id: "contacted", label: "Contacted", style: "border-purple-500/20 text-purple-400 bg-purple-500/5 hover:bg-purple-500/10" },
                { id: "callback", label: `Callbacks (${countCallbacks})`, style: "border-amber-500/20 text-amber-400 bg-amber-500/5 hover:bg-amber-500/10" },
                { id: "closed", label: `Closed (${countClosed})`, style: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10" },
                { id: "junk", label: "Spam / Junk", style: "border-red-500/20 text-red-400 bg-red-500/5 hover:bg-red-500/10" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStatusTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs border font-bold transition-all whitespace-nowrap ${
                    activeStatusTab === tab.id 
                      ? "bg-white text-[#08080a] border-white shadow-md" 
                      : tab.style
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Workspace Layout */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <RefreshCw className="w-8 h-8 text-primary animate-spin" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Loading CRM workspace...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20 max-w-md mx-auto">
            <p className="text-red-400 text-sm mb-4">{error}</p>
            <Button onClick={() => fetchSubmissions(localStorage.getItem("soaring_admin_token"))} className="bg-white/5 border border-white/10 text-white hover:bg-white/10">
              Retry
            </Button>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-[#0f0f13]/30">
            <p className="text-white/30 text-sm">No leads match your current CRM filter criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredSubmissions.map((sub) => (
                <motion.div
                  key={sub._id}
                  layoutId={sub._id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className={`bg-[#0f0f13] border rounded-2xl p-5 hover:border-white/15 transition-all shadow-lg flex flex-col justify-between relative overflow-hidden ${
                    sub.read === false 
                      ? "border-l-4 border-l-blue-500 border-white/10 ring-1 ring-blue-500/20" 
                      : sub.status === "callback"
                      ? "border-l-4 border-l-amber-500 border-white/5"
                      : sub.status === "closed"
                      ? "border-l-4 border-l-emerald-500 border-white/5"
                      : "border-white/5"
                  }`}
                >
                  <div>
                    {/* Top Row: Tag, Badge & Date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-widest font-bold ${
                          sub.type === "training" 
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                            : "bg-slate-500/10 text-white/80 border border-white/10"
                        }`}>
                          {sub.type === "training" ? "Training" : "Contact Query"}
                        </span>
                        {getStatusBadge(sub.status)}
                        {sub.read === false && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] bg-blue-500/20 text-blue-300 border border-blue-400/30 animate-pulse font-bold tracking-wider">
                            NEW
                          </span>
                        )}
                      </div>
                      
                      <span className="text-white/30 text-xs flex items-center gap-1 font-mono shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(sub.createdAt).toLocaleDateString("en-IN", { 
                          day: "numeric", month: "short", year: "numeric"
                        })}
                      </span>
                    </div>

                    {/* Client Core Profile */}
                    <h4 className="text-lg font-bold text-white mb-2">{sub.name}</h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-white/60 mb-4 font-mono">
                      <p className="flex items-center gap-2">
                        <span className="text-white/20">Phone:</span>
                        <a 
                          href={`tel:${sub.phone}`} 
                          onClick={() => handleAutoContact(sub)}
                          className="hover:text-primary transition-colors text-white/80"
                        >
                          {sub.phone}
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span className="text-white/20">Email:</span>
                        {sub.email ? (
                          <a 
                            href={`mailto:${sub.email}`} 
                            onClick={() => handleAutoContact(sub)}
                            className="hover:text-primary transition-colors text-white/80"
                          >
                            {sub.email}
                          </a>
                        ) : (
                          <span className="text-white/30">N/A</span>
                        )}
                      </p>
                      {sub.program && (
                        <p className="flex items-start gap-2 sm:col-span-2">
                          <span className="text-white/20 shrink-0">Course:</span>
                          <span className="text-emerald-400 font-bold font-sans bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 inline-block">
                            {sub.program}
                          </span>
                        </p>
                      )}
                      {sub.subject && (
                        <p className="flex items-center gap-2 sm:col-span-2">
                          <span className="text-white/20">Subject:</span>
                          <span className="text-white/80 font-sans">{sub.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Client Message */}
                    {sub.message && (
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-xs text-white/70 leading-relaxed mb-4 whitespace-pre-line">
                        <span className="text-[10px] text-white/30 font-mono block mb-1 uppercase tracking-wider">Client Inquiry:</span>
                        {sub.message}
                      </div>
                    )}

                    {/* CRM Logs Panel (Displays current logs) */}
                    {(sub.notes || sub.clientResponse || sub.followUpDate) && (
                      <div className="mt-4 p-3.5 bg-blue-500/5 border border-blue-500/10 rounded-xl space-y-2 text-xs">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold">
                          <FileText className="w-3.5 h-3.5" />
                          CRM Logs
                        </div>
                        {sub.clientResponse && (
                          <p className="text-white/80">
                            <span className="text-white/40">Client Response:</span> "{sub.clientResponse}"
                          </p>
                        )}
                        {sub.notes && (
                          <p className="text-white/70 whitespace-pre-line">
                            <span className="text-white/40">Internal Notes:</span> {sub.notes}
                          </p>
                        )}
                        {sub.followUpDate && (
                          <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-mono mt-2 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg w-fit">
                            <Clock className="w-3.5 h-3.5 shrink-0" />
                            Next Follow-Up: {new Date(sub.followUpDate).toLocaleDateString("en-IN", {
                              day: "numeric", month: "short", year: "numeric"
                            })}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Inline CRM Editing Form Drawer */}
                  {crmEditingId === sub._id && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 p-4 border-t border-white/10 bg-[#16161c] rounded-2xl space-y-4 text-sm"
                    >
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="font-bold text-white text-xs font-mono uppercase tracking-wider">CRM Client Lead Manager</span>
                        <button onClick={() => setCrmEditingId(null)} className="text-white/40 hover:text-white">
                          <X className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Status row select */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-white/40">Lead Status</label>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-1.5">
                          {[
                            { id: "new", label: "New", active: "bg-blue-600 border-blue-500 text-white", inactive: "hover:bg-blue-500/10 text-blue-400 border-blue-500/20" },
                            { id: "contacted", label: "Contacted", active: "bg-purple-600 border-purple-500 text-white", inactive: "hover:bg-purple-500/10 text-purple-400 border-purple-500/20" },
                            { id: "callback", label: "Callback", active: "bg-amber-600 border-amber-500 text-white", inactive: "hover:bg-amber-500/10 text-amber-400 border-amber-500/20" },
                            { id: "closed", label: "Closed", active: "bg-emerald-600 border-emerald-500 text-white", inactive: "hover:bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
                            { id: "junk", label: "Junk", active: "bg-red-600 border-red-500 text-white", inactive: "hover:bg-red-500/10 text-red-400 border-red-500/20" }
                          ].map(opt => (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setEditStatus(opt.id)}
                              className={`py-1.5 px-2 rounded-lg text-xs font-bold border transition-colors ${editStatus === opt.id ? opt.active : opt.inactive}`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Client Response */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-white/40">Client Response / Feedback</label>
                        <input
                          type="text"
                          value={editClientResponse}
                          onChange={(e) => setEditClientResponse(e.target.value)}
                          placeholder="e.g. Interested in Drone Pilot training, wants pricing catalog."
                          className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none"
                        />
                      </div>

                      {/* Discussion Notes */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-white/40">Internal Notes / Discussion Log</label>
                        <textarea
                          rows={3}
                          value={editNotes}
                          onChange={(e) => setEditNotes(e.target.value)}
                          placeholder="Write key discussion details here. (e.g. Sent brochure on WhatsApp, discussed batch timings)"
                          className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-blue-500/50 focus:outline-none resize-none"
                        />
                      </div>

                      {/* Follow-up Date */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-white/40 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          Next Follow-Up Reminder Date
                        </label>
                        <input
                          type="date"
                          value={editFollowUpDate}
                          onChange={(e) => setEditFollowUpDate(e.target.value)}
                          className="w-full px-3 py-2 text-xs rounded-xl bg-white/5 border border-white/10 text-white focus:border-blue-500/50 focus:outline-none"
                        />
                      </div>

                      {/* Save action buttons */}
                      <div className="flex justify-end gap-2 pt-2">
                        <Button 
                          type="button" 
                          onClick={() => setCrmEditingId(null)}
                          className="px-4 py-2 text-xs rounded-xl border border-white/10 bg-transparent text-white/80 hover:bg-white/5 hover:text-white"
                        >
                          Cancel
                        </Button>
                        <Button 
                          type="button"
                          disabled={crmSavingId === sub._id}
                          onClick={() => saveCrmEdit(sub._id)}
                          className="px-4 py-2 text-xs rounded-xl bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5"
                        >
                          {crmSavingId === sub._id ? (
                            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Save className="w-3.5 h-3.5" />
                          )}
                          Save Logs
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Actions Panel */}
                  <div className="pt-3.5 mt-4 border-t border-white/5 flex items-center justify-between gap-2">
                    {/* Direct Call/WhatsApp integrations */}
                    <div className="flex gap-1.5">
                      <a 
                        href={`https://wa.me/91${sub.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleAutoContact(sub)}
                        className="p-2 text-emerald-400 hover:text-white rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors flex items-center justify-center"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <a 
                        href={`tel:${sub.phone}`}
                        onClick={() => handleAutoContact(sub)}
                        className="p-2 text-blue-400 hover:text-white rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition-colors flex items-center justify-center"
                        title="Direct Call"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Copy/Delete/Read & CRM Management Actions */}
                    <div className="flex gap-1.5 items-center">
                      {crmEditingId !== sub._id && (
                        <button
                          onClick={() => startCrmEdit(sub)}
                          className="px-2.5 py-2 text-xs font-semibold rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 hover:text-white text-white/70 transition-all flex items-center gap-1.5"
                          title="Manage Lead CRM Logs"
                        >
                          <PlusCircle className="w-3.5 h-3.5" />
                          Follow Up
                        </button>
                      )}

                      {sub.read === false ? (
                        <button
                          onClick={() => handleMarkRead(sub._id, true)}
                          className="p-2 text-blue-400 hover:text-white rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition-colors flex items-center justify-center"
                          title="Mark as Read"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleMarkRead(sub._id, false)}
                          className="p-2 text-white/30 hover:text-white/60 rounded-lg transition-colors flex items-center justify-center"
                          title="Mark as Unread"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        onClick={() => handleCopyDetails(sub)}
                        className={`px-2.5 py-2 rounded-lg transition-all border flex items-center gap-1 text-xs font-semibold ${
                          copiedId === sub._id 
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" 
                            : "bg-white/5 text-white/50 border-white/5 hover:text-white hover:bg-white/10"
                        }`}
                        title="Copy Details"
                      >
                        <Copy className="w-3 h-3" />
                        {copiedId === sub._id ? "Copied" : "Copy"}
                      </button>

                      <button
                        disabled={deletingId === sub._id}
                        onClick={() => {
                          if (window.confirm("Are you sure you want to delete this enquiry?")) {
                            handleDelete(sub._id);
                          }
                        }}
                        className="p-2 text-red-400 hover:text-white rounded-lg bg-red-500/5 border border-red-500/10 hover:bg-red-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
}
