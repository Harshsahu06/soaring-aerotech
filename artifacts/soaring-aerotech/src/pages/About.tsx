import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, ShieldCheck, Globe, Rocket, GraduationCap, Wrench, Lightbulb, Factory, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    n: "01", tag: "TRAIN", icon: <GraduationCap className="w-6 h-6" />, title: "Skill Development",
    items: ["DGCA RPTO", "8 Programs", "RPC Certification", "Corporate Training"],
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=700&h=460&fit=crop",
    desc: "India's most comprehensive DGCA-approved pilot training ecosystem, producing certified drone operators for every sector.",
  },
  {
    n: "02", tag: "SOLVE", icon: <Wrench className="w-6 h-6" />, title: "Drone Services",
    items: ["Survey & Mapping", "AI Surveillance", "Solar Inspection", "Custom Solutions"],
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&h=460&fit=crop",
    desc: "End-to-end aerial intelligence solutions deployed across government, energy, agriculture, and defence sectors.",
  },
  {
    n: "03", tag: "INNOVATE", icon: <Lightbulb className="w-6 h-6" />, title: "R&D",
    items: ["Disaster UAVs", "Tethered Drones", "AI/ML Systems", "Payload Dev"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=460&fit=crop",
    desc: "Active research into disaster-response UAVs, AI/ML drone systems, and advanced payload engineering for next-gen applications.",
  },
  {
    n: "04", tag: "BUILD", icon: <Factory className="w-6 h-6" />, title: "Manufacturing",
    items: ["50,000 sq ft", "Defence Drones", "Logistics UAVs", "Intl. Collabs"],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&h=460&fit=crop",
    desc: "50,000 sq ft state-of-the-art facility producing indigenous UAVs for defence, logistics, and commercial applications.",
  },
];

const creds = [
  { icon: <ShieldCheck className="w-7 h-7 text-primary" />, title: "DGCA Approved RPTO", desc: "Authorized Remote Pilot Training Organisation" },
  { icon: <Globe className="w-7 h-7 text-primary" />, title: "Startup India", desc: "Government of India recognized startup" },
  { icon: <Award className="w-7 h-7 text-primary" />, title: "MSME Registered", desc: "Ministry of MSME registered entity" },
  { icon: <Rocket className="w-7 h-7 text-primary" />, title: "AIC Prestige", desc: "Atal Incubation Centre incubated" },
];

const directors = [
  { name: "Himanshu Jain", role: "Director", img: "/images/team-founder.png", quote: "We are not just a training institute. We are building a complete drone innovation ecosystem — from R&D to manufacturing to defence applications." },
  { name: "Manojkumar Deshpande", role: "Director", img: "/images/team-1.png", quote: "Our 50,000 sq ft facility and active defence UAV R&D positions Soaring Aerotech as a full-cycle drone technology company." },
];

export default function About() {
  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/40" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Central India · Drone Ecosystem
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white leading-tight mb-6">
              Central India's<br />Complete<br /><span className="text-primary">Drone Company.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/55 text-lg max-w-lg mb-8">
              Training the pilots. Flying the missions. Researching the future. Manufacturing the machines. All from Madhya Pradesh.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="flex flex-wrap gap-3">
              {["500+ Pilots Trained", "50,000 sqft Facility", "8+ Programs", "DGCA Approved"].map((b, i) => (
                <span key={i} className="px-4 py-2 rounded-full border border-white/15 text-white/60 text-sm font-medium">{b}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Story section ────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">OUR STORY</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">Born in Central India. Built for the World.</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Soaring Aerotech was founded with a single mission: build India's most complete drone ecosystem from the ground up. What started as a DGCA training organisation in Indore has grown into a full-cycle company encompassing pilot training, commercial drone services, active R&D, and indigenous UAV manufacturing.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Operating from a 50,000 sq ft facility in Madhya Pradesh, we serve government bodies, defence organisations, agriculture firms, solar companies, and infrastructure builders — delivering precision aerial intelligence and purpose-built UAVs.
              </p>
              <Link href="/contact"><Button className="rounded-full px-8 h-12 font-bold">Work With Us <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1571701374025-3eb9abc53de2?w=700&h=500&fit=crop"
                alt="Drone operations"
                className="w-full h-80 object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display text-3xl font-black">500+</div>
                <div className="text-sm font-semibold opacity-90">Pilots Certified</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-[#111111] text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display text-3xl font-black">50K</div>
                <div className="text-sm font-semibold opacity-70">sq ft Facility</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 Pillars — image cards ───────────────── */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-4">FOUR PILLARS</div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">Everything We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-primary bg-[#111111]/70 border border-primary/30 backdrop-blur-sm px-3 py-1.5 rounded-full">{p.tag}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white flex items-center gap-2">
                    <span className="text-foreground/20 font-display text-4xl font-black leading-none text-white/20">{p.n}</span>
                    <h3 className="font-display text-xl text-white">{p.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.items.map((item, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-[#F5F5F5] border border-border text-xs font-medium text-foreground/60">{item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Directors ────────────────────────────── */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-10">LEADERSHIP</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {directors.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-[#F5F5F5] rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                <div className="w-full sm:w-36 h-48 sm:h-auto relative shrink-0 overflow-hidden">
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
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">CREDENTIALS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {creds.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl bg-white border border-border text-center hover:border-primary/30 hover:shadow-md transition-all">
                <div className="flex justify-center mb-3">{c.icon}</div>
                <div className="font-bold text-sm text-foreground mb-1">{c.title}</div>
                <div className="text-xs text-muted-foreground">{c.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual CTA ───────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=1600&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#111111]/85" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Ready to be part of India's<br /><span className="text-primary">Drone Revolution?</span></h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Join 500+ certified pilots or bring your enterprise projects to us.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/training"><Button size="lg" className="rounded-full px-8 h-13 font-bold">Get Certified</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="rounded-full px-8 h-13 font-bold border-white/20 text-white hover:bg-white/10">Contact Us</Button></Link>
          </div>
        </div>
      </section>

    </main>
  );
}
