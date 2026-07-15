import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Lock, User, Eye, EyeOff, Loader2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, error, success
  const [errorMsg, setErrorMsg] = useState("");
  const [, setLocation] = useLocation();

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("soaring_admin_token");
    if (token) {
      setLocation("/admin");
    }
  }, [setLocation]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const apiBase = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
        ? "http://localhost:3001"
        : "https://soaring-aerotech-two.vercel.app";
      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("soaring_admin_token", data.token);
        setStatus("success");
        setTimeout(() => {
          setLocation("/admin");
        }, 800);
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Invalid username or password");
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to connect to authentication server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#08080a] flex flex-col justify-center items-center relative overflow-hidden px-4">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      {/* Floating back button to website */}
      <button 
        onClick={() => setLocation("/")}
        className="absolute top-6 left-6 text-white/50 hover:text-white flex items-center gap-2 text-xs font-mono tracking-wider transition-colors uppercase"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Site
      </button>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        {/* Logo/Brand Header */}
        <div className="text-center mb-8">
          <h2 className="text-white font-display text-3xl font-extrabold tracking-tight">
            Soaring <span className="text-primary">Aerotech</span>
          </h2>
          <p className="text-white/40 text-xs font-mono uppercase tracking-widest mt-2">
            Admin Console Login
          </p>
        </div>

        {/* Card */}
        <div className="bg-[#111115]/80 border border-white/5 rounded-3xl p-8 backdrop-blur-xl shadow-2xl relative">
          <form onSubmit={handleLogin} className="space-y-5">
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-white/60 text-xs font-mono uppercase tracking-wider block">
                Username
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-white/30 pointer-events-none">
                  <User className="w-4.5 h-4.5" />
                </span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-white/60 text-xs font-mono uppercase tracking-wider block">
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-white/30 pointer-events-none">
                  <Lock className="w-4.5 h-4.5" />
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:border-primary/50 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/30 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {status === "error" && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs leading-relaxed"
              >
                {errorMsg}
              </motion.div>
            )}

            {/* Success Message */}
            {status === "success" && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }} 
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs leading-relaxed text-center"
              >
                Login successful! Redirecting...
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full py-6 rounded-xl font-bold bg-primary hover:bg-primary/90 text-white transition-all text-sm mt-2 relative flex items-center justify-center gap-2"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Logging in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-white/20 text-[10px] font-mono tracking-wider">
            SECURED ENDPOINT · SOARING AEROTECH PVT. LTD.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
