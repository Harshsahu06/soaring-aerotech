import { motion } from "framer-motion";
import {
  Map,
  Tractor,
  Eye,
  Factory,
  Sun,
  Zap,
  Settings,
  AlertTriangle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  {
    icon: <Map className="w-7 h-7" />,
    title: "Aerial Survey & Mapping",
    bullets: [
      "Centimetre-accurate data",
      "Orthomosaics & 3D models",
      "GIS-ready outputs",
    ],
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    id: "survey",
    stat: "±2cm accuracy",
  },
  {
    icon: <Sun className="w-7 h-7" />,
    title: "Solar Plant Inspection",
    bullets: [
      "Thermal hotspot detection",
      "GPS-tagged fault reports",
      "MW-scale in hours",
    ],
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    id: "solar",
    stat: "450+ faults found",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Power Substation Inspection",
    bullets: [
      "Zero shutdown required",
      "Thermal anomaly detection",
      "Safe remote ops",
    ],
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
    id: "substation",
    stat: "No downtime",
  },
  {
    icon: <Tractor className="w-7 h-7" />,
    title: "Precision Agriculture",
    bullets: [
      "NDVI crop health maps",
      "Targeted precision spraying",
      "10,000+ acre scale",
    ],
    img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=600&h=400&fit=crop",
    id: "agriculture",
    stat: "18% yield increase",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "AI Surveillance & Security",
    bullets: [
      "24/7 autonomous patrol",
      "Thermal night detection",
      "Live command feed",
    ],
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
    id: "surveillance",
    stat: "24/7 autonomous",
  },
  {
    icon: <AlertTriangle className="w-7 h-7" />,
    title: "Disaster Assessment",
    bullets: [
      "Rapid aerial recon",
      "Thermal survivor detection",
      "GPS damage mapping",
    ],
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    id: "disaster",
    stat: "Rapid response",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    title: "Infrastructure Inspection",
    bullets: [
      "Bridges, towers, chimneys",
      "No scaffolding needed",
      "Micro-crack detection",
    ],
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
    id: "infrastructure",
    stat: "5× faster",
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: "Custom Drone Solutions",
    bullets: [
      "Purpose-built hardware",
      "Custom payload engineering",
      "Concept to deployment",
    ],
    img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&h=400&fit=crop",
    id: "custom",
    stat: "End-to-end",
  },
];

const clients = [
  "Government Departments",
  "Smart City Projects",
  "Builders & Real Estate",
  "Solar Energy Companies",
  "Agriculture Firms",
  "Infrastructure Companies",
  "Defence & Police",
  "Disaster Management",
];

export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] border-b border-border py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="section-label">B2B DRONE SERVICES · INDUSTRIAL SOLUTIONS</div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
                Industrial<br /><span className="text-primary">Drone Services</span>
              </h1>
              <p className="text-muted-foreground text-base max-w-lg mb-6">
                B2B solutions for government, infrastructure, energy, agriculture, and defence — deployed with precision.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Survey & Mapping", "Solar Inspection", "AI Surveillance", "Precision Agriculture", "Infrastructure Audit"].map((t, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border text-foreground/60 text-xs font-medium">
                    <CheckCircle className="w-3 h-3 text-primary" /> {t}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] hidden lg:block"
            >
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop" alt="Industrial drone services" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Service cards ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="section-label">OUR SERVICES</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Specialized Solutions
              </h2>
            </div>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 text-primary font-bold text-sm"
            >
              Get a Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/10" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">
                    {s.stat}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl text-white leading-tight mb-4">
                    {s.title}
                  </h3>
                  <Link
                    href={`/contact?service=${s.id}`}
                    className="inline-flex items-center gap-1.5 text-white/65 text-sm hover:text-white transition-colors"
                  >
                    Get Quote <ArrowRight className="w-3.5 h-3.5" />
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
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">
                Precision You Can Measure
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Every mission we fly generates quantifiable outcomes — from
                cm-accurate survey data to thermal fault reports with GPS
                coordinates. We don't just fly drones; we deliver intelligence.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { val: "±2cm", label: "Survey accuracy" },
                  { val: "80%", label: "Time savings" },
                  { val: "100+", label: "Missions completed" },
                  { val: "450+", label: "Faults detected" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="bg-[#F5F5F5] rounded-xl p-4 border border-border"
                  >
                    <div className="font-display text-2xl text-primary font-black">
                      {s.val}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=700&h=500&fit=crop"
                alt="Drone in operation"
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Client sectors ───────────────────────── */}
      <section className="py-20 bg-[#F5F5F5] border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-4">CLIENT SECTORS</div>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
            Who We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {clients.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-border rounded-xl p-4 text-sm font-semibold text-foreground text-center hover:border-primary/30 hover:shadow-sm transition-all cursor-default"
              >
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=700&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">
            Our manufacturing capability means we can build whatever you need.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full h-13 px-8 text-base font-bold"
            >
              Consult Our Team
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
