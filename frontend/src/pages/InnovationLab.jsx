import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Lightbulb, Cpu, Brain, Zap, Anchor, Shield, Crosshair, Truck, Factory } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgManufacturing from "@/assets/uav-manufacturing.jpg";
import imgInnovationLab from "@/assets/innovation-lab.jpg";

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
      <section className="py-12 sm:py-24 bg-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 2px 2px,rgba(255,255,255,.8) 1px,transparent 0)", backgroundSize: "28px 28px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-5 uppercase tracking-widest">
            <Lightbulb className="w-3.5 h-3.5" /> R&D · Manufacturing · Made in India
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-3xl sm:text-5xl md:text-7xl text-white mb-4">
            Innovation Lab<br /><span className="text-primary">&amp; Manufacturing</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/45 max-w-md mx-auto">
            6 active R&D streams. 50,000 sq ft. Defence, logistics & surveillance drones — Made in India.
          </motion.p>
        </div>
      </section>

      {/* ── R&D — hover reveal cards ──────────────── */}
      <section className="py-10 sm:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">ACTIVE R&D</div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">6 Research Projects</h2>
            <p className="text-muted-foreground mt-2 text-sm">Explore our active research streams below</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Left Column: Innovation Lab Facility Image */}
            <div className="lg:col-span-1 rounded-2xl overflow-hidden border border-border shadow-sm relative group min-h-[320px] lg:min-h-0 flex flex-col justify-between">
              <img 
                src={imgInnovationLab} 
                alt="Soaring Aerotech Innovation Lab" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6 z-10">
                <span className="text-primary font-mono text-[10px] uppercase tracking-widest font-bold mb-1">State-of-the-Art facility</span>
                <h3 className="font-display text-xl text-white font-bold leading-tight">Advanced UAV R&D Lab</h3>
                <p className="text-white/70 text-xs mt-2 leading-relaxed">
                  Our advanced prototyping facility equipped with state-of-the-art simulation labs, telemetry analysis consoles, and hardware-in-the-loop testing suites.
                </p>
              </div>
            </div>

            {/* Right Column: 6 Research Project Cards in 2 columns */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {rdProjects.map((p, i) => (
                <div key={i} className="reveal-card relative h-56 rounded-2xl overflow-hidden cursor-pointer border border-border shadow-sm">
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
        </div>
      </section>

      {/* ── Manufacturing ────────────────────────── */}
      <section className="py-10 sm:py-24 bg-[#111111]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="section-label" style={{ color: "rgba(255,255,255,0.3)" }}>UAV MANUFACTURING</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4">50,000 Sq Ft.<br /><span className="text-primary">Made in India.</span></h2>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                One of Central India's largest drone manufacturing setups — producing indigenous UAVs for commercial, government, and defence with national &amp; international collaborations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["50,000 sq ft Facility", "National Collaborations", "International Partnerships", "Made in India", "PLI Aligned"].map((b, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full border border-white/10 text-white/40 text-xs font-medium">{b}</span>
                ))}
              </div>
              <div className="mt-8 relative overflow-hidden rounded-2xl aspect-[16/10] border border-white/10 group">
                <img
                  src={imgManufacturing}
                  alt="UAV Manufacturing Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
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
      <section className="py-10 sm:py-20 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">Collaborate With Us</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">College, research institution, or defence agency? Let's build together.</p>
          <div className="flex flex-row gap-3 justify-center w-full max-w-md mx-auto">
            <Link href="/contact" className="flex-1"><Button size="lg" className="rounded-full h-11 sm:h-13 px-3 sm:px-8 text-xs sm:text-base font-bold w-full">Discuss Collaboration</Button></Link>
            <Link href="/training" className="flex-1"><Button size="lg" variant="outline" className="rounded-full h-11 sm:h-13 px-3 sm:px-8 text-xs sm:text-base font-semibold w-full">View Training</Button></Link>
          </div>
        </div>
      </section>

    </main>
  );
}
