import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Lightbulb, Cpu, Brain, Zap, Anchor, Shield, Crosshair, Truck, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";

const rdProjects = [
  { icon: <Zap className="w-6 h-6" />,     title: "Disaster Management UAV",   status: "ACTIVE R&D",   desc: "Flood/fire assessment, search & rescue coordination." },
  { icon: <Anchor className="w-6 h-6" />,  title: "Tethered Drone Systems",    status: "ACTIVE R&D",   desc: "Unlimited flight time for persistent surveillance." },
  { icon: <Lightbulb className="w-6 h-6" />, title: "Agricultural UAV",        status: "PROTOTYPING",  desc: "Purpose-built for Indian precision farming." },
  { icon: <Brain className="w-6 h-6" />,   title: "AI/ML UAV Operations",      status: "ACTIVE R&D",   desc: "Computer vision & autonomous mission AI." },
  { icon: <Cpu className="w-6 h-6" />,     title: "Quantum Computing",         status: "RESEARCH",     desc: "Swarm coordination & encrypted comms research." },
  { icon: <Zap className="w-6 h-6" />,     title: "Advanced Payload Dev",      status: "ACTIVE R&D",   desc: "Hyperspectral, gas detection, LiDAR, custom sensors." },
];

const manufacturing = [
  { icon: <Shield className="w-7 h-7" />,    title: "Defence Drones",    desc: "Surveillance & recon UAVs for military and security forces." },
  { icon: <Crosshair className="w-7 h-7" />, title: "Surveillance Drones", desc: "Long-endurance UAVs for perimeter and border monitoring." },
  { icon: <Truck className="w-7 h-7" />,     title: "Logistics Drones",  desc: "Last-mile delivery for urban and remote areas." },
  { icon: <Factory className="w-7 h-7" />,   title: "Custom UAV Design", desc: "End-to-end from concept to production." },
];

export default function InnovationLab() {
  return (
    <main className="min-h-screen">
      <SEO 
        title="Innovation Lab & UAV Manufacturing"
        description="Explore Soaring Aerotech's 50,000 sq ft drone manufacturing facility. Learn about our active R&D streams in disaster UAVs, tethered drones, AI/ML swarms, and custom payloads."
        keywords="drone manufacturing facility India, UAV R&D, tethered drones, custom payload design, drone swarm research, defense drone manufacturer"
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px,rgba(255,255,255,.8) 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-5 uppercase tracking-widest">
            <Lightbulb className="w-3.5 h-3.5" /> R&D · Manufacturing · Made in India
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-4">
            Innovation Lab<br /><span className="text-primary">&amp; Manufacturing</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/45 max-w-md mx-auto">
            6 active R&D streams. 50,000 sq ft. Defence, logistics & surveillance drones — Made in India.
          </motion.p>
        </div>
      </section>

      {/* ── R&D — hover reveal cards ──────────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">ACTIVE R&D</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">6 Research Projects</h2>
            <p className="text-muted-foreground mt-2 text-sm">Hover each card to learn more</p>
          </div>
          <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rdProjects.map((p, i) => (
              <div key={i} className="reveal-card relative h-56 rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm shrink-0 w-[80vw] max-w-[320px] sm:w-auto sm:max-w-none snap-center">
                {/* Base */}
                <div className="absolute inset-0 bg-[#F5F5F5] flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white border border-border flex items-center justify-center text-foreground/45">{p.icon}</div>
                    <span className="text-xs font-bold font-mono text-muted-foreground bg-white border border-border px-2.5 py-1 rounded-full">{p.status}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground leading-tight">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </div>
                {/* Reveal — uniform dark navy */}
                <div className="reveal-overlay absolute inset-0 bg-[#111111] flex flex-col justify-between p-6">
                  <div>
                    <span className="text-xs font-bold font-mono text-primary/60 uppercase tracking-widest">{p.status}</span>
                    <h3 className="font-display text-xl text-white mt-2 mb-3">{p.title}</h3>
                    <p className="text-sm text-white/55 leading-relaxed">{p.desc}</p>
                  </div>
                  <Link href="/contact" className="text-primary text-sm font-bold">Collaborate →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing ────────────────────────── */}
      <section className="py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>UAV MANUFACTURING</div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-4">50,000 Sq Ft.<br /><span className="text-primary">Made in India.</span></h2>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                One of Central India's largest drone manufacturing setups — producing indigenous UAVs for commercial, government, and defence with national &amp; international collaborations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["50,000 sq ft Facility", "National Collaborations", "International Partnerships", "Made in India", "PLI Aligned"].map((b, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-white/10 text-white/40 text-xs font-medium">{b}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {manufacturing.map((m, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border border-white/10 rounded-2xl p-6 hover:border-white/25 hover:bg-white/5 transition-all cursor-default">
                  <div className="text-white/35 mb-4">{m.icon}</div>
                  <h3 className="font-display text-base text-white mb-2">{m.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Collaborate With Us</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">College, research institution, or defence agency? Let's build together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button size="lg" className="rounded-full h-13 px-8 text-base font-bold">Discuss Collaboration</Button></Link>
            <Link href="/training"><Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-base font-semibold">View Training</Button></Link>
          </div>
        </div>
      </section>

    </main>
  );
}
