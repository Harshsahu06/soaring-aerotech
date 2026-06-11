import { motion } from "framer-motion";
import { Map, Tractor, Eye, Factory, Sun, Zap, Settings, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: <Map className="w-7 h-7" />,
    title: "Aerial Survey & Mapping",
    bullets: ["Centimetre-accurate data", "Orthomosaics & 3D models", "GIS-ready outputs"],
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    id: "survey",
    stat: "±2cm accuracy",
  },
  {
    icon: <Sun className="w-7 h-7" />,
    title: "Solar Plant Inspection",
    bullets: ["Thermal hotspot detection", "GPS-tagged fault reports", "MW-scale in hours"],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    id: "solar",
    stat: "450+ faults found",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Power Substation Inspection",
    bullets: ["Zero shutdown required", "Thermal anomaly detection", "Safe remote ops"],
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    id: "substation",
    stat: "No downtime",
  },
  {
    icon: <Tractor className="w-7 h-7" />,
    title: "Precision Agriculture",
    bullets: ["NDVI crop health maps", "Targeted precision spraying", "10,000+ acre scale"],
    img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=600&h=400&fit=crop",
    id: "agriculture",
    stat: "18% yield increase",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "AI Surveillance & Security",
    bullets: ["24/7 autonomous patrol", "Thermal night detection", "Live command feed"],
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
    id: "surveillance",
    stat: "24/7 autonomous",
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: "Disaster Assessment",
    bullets: ["Rapid aerial recon", "Thermal survivor detection", "GPS damage mapping"],
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    id: "disaster",
    stat: "Rapid response",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    title: "Infrastructure Inspection",
    bullets: ["Bridges, towers, chimneys", "No scaffolding needed", "Micro-crack detection"],
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    id: "infrastructure",
    stat: "5× faster",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Custom Drone Solutions",
    bullets: ["Purpose-built hardware", "Custom payload engineering", "Concept to deployment"],
    img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&h=400&fit=crop",
    id: "custom",
    stat: "End-to-end",
  },
];

const clients = ["Government Departments", "Smart City Projects", "Builders & Real Estate", "Solar Energy Companies", "Agriculture Firms", "Infrastructure Companies", "Defence & Police", "Disaster Management"];

export default function Services() {
  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> B2B Drone Services · Industrial Solutions
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-5 leading-tight">
            8 Industrial<br /><span className="text-primary">Drone Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/50 max-w-lg text-lg mb-8">
            B2B solutions for government, infrastructure, energy, agriculture, and defence — deployed with precision.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="flex flex-wrap gap-3">
            {["Survey & Mapping", "Solar Inspection", "AI Surveillance", "Precision Agriculture", "Infrastructure Audit"].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-white/50 text-sm">
                <CheckCircle className="w-3 h-3 text-primary" /> {t}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Service cards with images ─────────────── */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">OUR SERVICES</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Specialized Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                  <div className="absolute top-3 right-3 bg-primary/90 text-white text-[10px] font-bold font-mono px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {s.stat}
                  </div>
                  <div className="absolute bottom-3 left-3 text-primary/80">{s.icon}</div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-base text-foreground leading-tight mb-3">{s.title}</h3>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />{b}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/contact?service=${s.id}`} className="inline-flex items-center gap-1.5 text-primary text-xs font-bold mt-auto">
                    Get Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature showcase ──────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="section-label">WHY SOARING AEROTECH</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">Precision You Can Measure</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">Every mission we fly generates quantifiable outcomes — from cm-accurate survey data to thermal fault reports with GPS coordinates. We don't just fly drones; we deliver intelligence.</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "±2cm", label: "Survey accuracy" },
                  { val: "80%", label: "Time savings" },
                  { val: "100+", label: "Missions completed" },
                  { val: "450+", label: "Faults detected" },
                ].map((s, i) => (
                  <div key={i} className="bg-[#F5F5F5] rounded-xl p-4 border border-border">
                    <div className="font-display text-2xl text-primary font-black">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=700&h=500&fit=crop" alt="Drone in operation" className="w-full h-80 object-cover rounded-3xl shadow-xl" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Client sectors ───────────────────────── */}
      <section className="py-20 bg-[#F5F5F5] border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-4">CLIENT SECTORS</div>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Who We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {clients.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-white border border-border rounded-xl p-4 text-sm font-semibold text-foreground text-center hover:border-primary/30 hover:shadow-sm transition-all cursor-default">
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#111111]/88" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Our manufacturing capability means we can build whatever you need.</p>
          <Link href="/contact"><Button size="lg" className="rounded-full h-13 px-8 text-base font-bold">Consult Our Team</Button></Link>
        </div>
      </section>

    </main>
  );
}
