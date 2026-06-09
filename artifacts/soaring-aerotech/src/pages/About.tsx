import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, ShieldCheck, Globe, Rocket, GraduationCap, Wrench, Lightbulb, Factory } from "lucide-react";

const pillars = [
  { n: "01", tag: "TRAIN",    icon: <GraduationCap className="w-6 h-6" />, title: "Skill Development", items: ["DGCA RPTO", "8 Programs", "RPC Certification", "Corporate Training"] },
  { n: "02", tag: "SOLVE",    icon: <Wrench className="w-6 h-6" />,        title: "Drone Services",    items: ["Survey & Mapping", "AI Surveillance", "Solar Inspection", "Custom Solutions"] },
  { n: "03", tag: "INNOVATE", icon: <Lightbulb className="w-6 h-6" />,    title: "R&D",               items: ["Disaster UAVs", "Tethered Drones", "AI/ML Systems", "Payload Dev"] },
  { n: "04", tag: "BUILD",    icon: <Factory className="w-6 h-6" />,       title: "Manufacturing",     items: ["50,000 sq ft", "Defence Drones", "Logistics UAVs", "Intl. Collabs"] },
];

const creds = [
  { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "DGCA Approved RPTO", desc: "Authorized Remote Pilot Training Organisation" },
  { icon: <Globe className="w-7 h-7 text-primary" />,        title: "Startup India",       desc: "Government of India recognized startup" },
  { icon: <Award className="w-7 h-7 text-primary" />,        title: "MSME Registered",     desc: "Ministry of MSME registered entity" },
  { icon: <Rocket className="w-7 h-7 text-primary" />,       title: "AIC Prestige",        desc: "Atal Incubation Centre incubated" },
];

const directors = [
  { name: "Himanshu Jain",       role: "Director", img: "/images/team-founder.png", quote: "We are not just a training institute. We are building a complete drone innovation ecosystem — from R&D to manufacturing to defence applications." },
  { name: "Manojkumar Deshpande", role: "Director", img: "/images/team-1.png",       quote: "Our 50,000 sq ft facility and active defence UAV R&D positions Soaring Aerotech as a full-cycle drone technology company." },
];

export default function About() {
  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Central India · Drone Ecosystem
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
              Central India's<br />Complete<br /><span className="text-primary">Drone Company.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/45 text-lg max-w-lg">
              Training the pilots. Flying the missions. Researching the future. Manufacturing the machines. All from Madhya Pradesh.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── 4 Pillars — vertical timeline ────────── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-12">FOUR PILLARS</div>
          <div className="relative">
            <div className="hidden lg:block absolute left-[19px] top-4 bottom-4 w-px bg-border z-0" />
            <div className="space-y-5">
              {pillars.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-5">
                  <div className="hidden lg:flex shrink-0 z-10">
                    <div className="w-10 h-10 rounded-full border-2 border-border bg-white flex items-center justify-center font-display text-sm text-foreground">{p.n}</div>
                  </div>
                  <div className="flex-1 bg-[#F5F4F0] border border-border rounded-2xl p-5 hover:bg-white hover:border-foreground/20 transition-all">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-3 sm:w-52 shrink-0">
                        <span className="text-xs font-bold font-mono text-primary bg-primary/8 border border-primary/15 px-2.5 py-1 rounded-full">{p.tag}</span>
                        <div className="flex items-center gap-2 text-foreground/40">{p.icon}<span className="font-display text-base text-foreground">{p.title}</span></div>
                      </div>
                      <div className="flex flex-wrap gap-2 flex-1">
                        {p.items.map((item, j) => (
                          <span key={j} className="px-3 py-1 rounded-full bg-white border border-border text-xs font-medium text-foreground/60">{item}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Directors ────────────────────────────── */}
      <section className="py-20 bg-[#F5F4F0] border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-10">LEADERSHIP</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {directors.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="w-full sm:w-32 h-44 sm:h-auto relative shrink-0 overflow-hidden">
                  <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <Award className="w-5 h-5 text-primary mb-3" />
                  <blockquote className="text-sm text-foreground/75 italic mb-4 leading-relaxed">"{d.quote}"</blockquote>
                  <div className="font-display font-bold text-foreground text-sm">{d.name}</div>
                  <div className="text-xs text-primary font-mono tracking-wide mt-0.5">{d.role}, SOARING AEROTECH</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ──────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">CREDENTIALS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {creds.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-[#F5F4F0] border border-border text-center hover:border-foreground/20 transition-colors">
                <div className="flex justify-center mb-3">{c.icon}</div>
                <div className="font-bold text-sm text-foreground mb-1">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
