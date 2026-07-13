import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, Trash2, Copy, Phone, Mail, Search, MessageCircle, Calendar, 
  Check, RefreshCw, Clipboard, User, Bell, CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const API_BASE = "https://soaring-aerotech-two.vercel.app";

export default function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("all"); // all, new, contact, training
  const [copiedId, setCopiedId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [, setLocation] = useLocation();

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

  // Filter submissions by tab and search query
  useEffect(() => {
    let result = submissions;

    // Tab filter
    if (activeTab === "new") {
      result = result.filter(sub => sub.read === false);
    } else if (activeTab !== "all") {
      result = result.filter(sub => sub.type === activeTab);
    }

    // Search query filter
    if (search.trim() !== "") {
      const query = search.toLowerCase();
      result = result.filter(sub => 
        (sub.name && sub.name.toLowerCase().includes(query)) ||
        (sub.email && sub.email.toLowerCase().includes(query)) ||
        (sub.phone && sub.phone.toLowerCase().includes(query)) ||
        (sub.subject && sub.subject.toLowerCase().includes(query)) ||
        (sub.program && sub.program.toLowerCase().includes(query)) ||
        (sub.message && sub.message.toLowerCase().includes(query))
      );
    }

    setFilteredSubmissions(result);
  }, [search, activeTab, submissions]);

  // Copy details to clipboard
  const handleCopyDetails = (sub) => {
    const text = `
Lead Details:
-----------------------------
Status: ${sub.read ? "READ" : "NEW/UNREAD"}
Type: ${sub.type.toUpperCase()}
Name: ${sub.name}
Phone: ${sub.phone}
Email: ${sub.email || "N/A"}
Date: ${new Date(sub.createdAt).toLocaleDateString()}
${sub.program ? `Program: ${sub.program}` : ""}
${sub.subject ? `Subject: ${sub.subject}` : ""}
Message: ${sub.message || "N/A"}
-----------------------------
    `.trim();

    navigator.clipboard.writeText(text);
    setCopiedId(sub._id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Update lead read/unread status
  const handleMarkRead = async (id, readStatus = true) => {
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
      console.error("Failed to update status", err);
    }
  };

  // Delete submission
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

  // Count leads by category
  const countTotal = submissions.length;
  const countNew = submissions.filter(s => s.read === false).length;
  const countContact = submissions.filter(s => s.type === "contact").length;
  const countTraining = submissions.filter(s => s.type === "training").length;

  return (
    <div className="min-h-screen bg-[#08080a] text-white flex flex-col">
      {/* ── Navbar ──────────────────────────────── */}
      <header className="border-b border-white/5 bg-[#0b0b0e]/95 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight">
              Soaring <span className="text-primary">Aerotech</span>
            </span>
            <span className="h-4 w-[1px] bg-white/20 hidden sm:inline" />
            <span className="text-white/40 font-mono text-[10px] sm:text-xs uppercase tracking-widest hidden sm:inline">
              Admin Dashboard
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => fetchSubmissions(localStorage.getItem("soaring_admin_token"))}
              className="p-2 text-white/60 hover:text-white rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              title="Refresh Leads"
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

      {/* ── Main Dashboard Workspace ────────────── */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", count: countTotal, color: "from-primary/20 to-primary/5", border: "border-primary/10", icon: <Clipboard className="w-5 h-5 text-primary" /> },
            { label: "New Leads", count: countNew, color: "from-blue-500/20 to-blue-500/5", border: "border-blue-500/10", icon: <Bell className={`w-5 h-5 text-blue-400 ${countNew > 0 ? "animate-bounce" : ""}`} />, highlight: countNew > 0 },
            { label: "Contact Us", count: countContact, color: "from-slate-500/10 to-slate-500/5", border: "border-white/5", icon: <Mail className="w-5 h-5 text-white/60" /> },
            { label: "Training Programs", count: countTraining, color: "from-emerald-500/20 to-emerald-500/5", border: "border-emerald-500/10", icon: <User className="w-5 h-5 text-emerald-400" /> }
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

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 bg-[#0f0f13] border border-white/5 p-4 rounded-2xl backdrop-blur-md">
          {/* Tabs */}
          <div className="flex gap-1 bg-white/5 p-1 rounded-xl w-full md:w-auto overflow-x-auto">
            {[
              { id: "all", label: "All" },
              { id: "new", label: `Unread (${countNew})` },
              { id: "contact", label: "Contact Us" },
              { id: "training", label: "Training" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap w-full md:w-auto ${
                  activeTab === tab.id 
                    ? tab.id === "new" 
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-primary text-white shadow-md" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute inset-y-0 left-3 my-auto w-4.5 h-4.5 text-white/30" />
            <input
              type="text"
              placeholder="Search by name, email, phone or message..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:border-primary/50 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Leads Workspace Container */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <RefreshCw className="w-8 h-8 text-primary animate-spin" />
            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Loading leads...</p>
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
            <p className="text-white/30 text-sm">No leads match your active filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      : "border-white/5"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div className="flex items-center gap-2">
                        <span className={`px-2.5 py-0.5 rounded-full font-mono text-[9px] uppercase tracking-widest font-bold ${
                          sub.type === "training" 
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                            : "bg-slate-500/10 text-white/80 border border-white/10"
                        }`}>
                          {sub.type === "training" ? "Training" : "Contact Query"}
                        </span>
                        {sub.read === false && (
                          <span className="px-2 py-0.5 rounded-full text-[9px] bg-blue-500/20 text-blue-300 border border-blue-400/30 animate-pulse font-bold tracking-wider">
                            NEW
                          </span>
                        )}
                      </div>
                      
                      <span className="text-white/30 text-xs flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(sub.createdAt).toLocaleDateString("en-IN", { 
                          day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
                        })}
                      </span>
                    </div>

                    {/* Lead Bio info */}
                    <h4 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                      {sub.name}
                    </h4>
                    
                    <div className="space-y-1.5 text-xs text-white/60 mb-4 font-mono">
                      <p className="flex items-center gap-2">
                        <span className="text-white/20">Phone:</span>
                        <a 
                          href={`tel:${sub.phone}`} 
                          onClick={() => handleMarkRead(sub._id, true)}
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
                            onClick={() => handleMarkRead(sub._id, true)}
                            className="hover:text-primary transition-colors text-white/80"
                          >
                            {sub.email}
                          </a>
                        ) : (
                          <span className="text-white/30">N/A</span>
                        )}
                      </p>
                      {sub.program && (
                        <p className="flex items-start gap-2">
                          <span className="text-white/20 shrink-0">Course:</span>
                          <span className="text-emerald-400 font-bold font-sans bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 inline-block">
                            {sub.program}
                          </span>
                        </p>
                      )}
                      {sub.subject && (
                        <p className="flex items-center gap-2">
                          <span className="text-white/20">Subject:</span>
                          <span className="text-white/80 font-sans">{sub.subject}</span>
                        </p>
                      )}
                    </div>

                    {/* Message Box */}
                    {sub.message && (
                      <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-xs text-white/70 leading-relaxed mb-4 whitespace-pre-line">
                        {sub.message}
                      </div>
                    )}
                  </div>

                  {/* Actions Panel */}
                  <div className="pt-3.5 border-t border-white/5 flex items-center justify-between gap-2">
                    {/* Comm actions */}
                    <div className="flex gap-1.5">
                      <a 
                        href={`https://wa.me/91${sub.phone.replace(/[^0-9]/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => handleMarkRead(sub._id, true)}
                        className="p-2 text-emerald-400 hover:text-white rounded-lg bg-emerald-500/5 border border-emerald-500/10 hover:bg-emerald-500/10 transition-colors flex items-center justify-center"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <a 
                        href={`tel:${sub.phone}`}
                        onClick={() => handleMarkRead(sub._id, true)}
                        className="p-2 text-blue-400 hover:text-white rounded-lg bg-blue-500/5 border border-blue-500/10 hover:bg-blue-500/10 transition-colors flex items-center justify-center"
                        title="Direct Call"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Copy/Delete/Read utility */}
                    <div className="flex gap-1.5 items-center">
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
