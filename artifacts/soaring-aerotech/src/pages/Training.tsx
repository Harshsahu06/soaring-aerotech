import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ShieldCheck, Clock, Map, Cpu, Brain, Wrench, Tractor, TrendingUp, Target, MapPin, Phone, FileText, User, Calendar, IndianRupee, BadgeCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  { tag: "SKILL COURSE", title: "Mapping & Surveying", icon: <Map className="w-7 h-7" />, duration: "3–5 Days", img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=260&fit=crop", topics: ["Aerial Land Survey", "2D/3D Mapping", "RTK/PPK GNSS", "Pix4D / DroneDeploy", "Client Deliverables", "GIS Outputs"] },
  { tag: "SKILL COURSE", title: "GIS & Geospatial", icon: <Target className="w-7 h-7" />, duration: "3–5 Days", img: "https://images.unsplash.com/photo-1571701374025-3eb9abc53de2?w=400&h=260&fit=crop", topics: ["GIS Fundamentals", "Land Record Mapping", "Urban Planning", "ArcGIS / QGIS", "Spatial Analysis", "Gov Applications"] },
  { tag: "SKILL COURSE", title: "Thermal & Multispectral", icon: <Cpu className="w-7 h-7" />, duration: "3–4 Days", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=260&fit=crop", topics: ["Thermal Camera Ops", "NDVI / NDWI", "Solar Inspection", "Power Line Audit", "Crop Imaging", "Report Generation"] },
  { tag: "ADVANCED", title: "AI/ML for Drones", icon: <Brain className="w-7 h-7" />, duration: "5–7 Days", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=260&fit=crop", topics: ["Computer Vision", "Object Detection", "Autonomous Flight", "Edge Computing", "Mission AI", "Surveillance AI"] },
  { tag: "SKILL COURSE", title: "Precision Agriculture", icon: <Tractor className="w-7 h-7" />, duration: "3–4 Days", img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=400&h=260&fit=crop", topics: ["Crop Health Mapping", "Precision Spraying", "Irrigation Analysis", "Yield Estimation", "NDVI Reports", "Farm Ops"] },
  { tag: "SKILL COURSE", title: "Assembly & Maintenance", icon: <Wrench className="w-7 h-7" />, duration: "3–5 Days", img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=400&h=260&fit=crop", topics: ["Frame Assembly", "Flight Controller", "ESC Calibration", "Battery Management", "Pre-flight Checks", "Field Repair"] },
  { tag: "ENTREPRENEURSHIP", title: "Drone Entrepreneurship", icon: <TrendingUp className="w-7 h-7" />, duration: "2–3 Days", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=260&fit=crop", topics: ["DGCA Compliance", "Business Models", "Client Acquisition", "Pricing", "Government Tenders", "Scaling"] },
];

const steps = [
  { n: "01", title: "Registration", desc: "Submit documents & pay fees via online banking / RTGS" },
  { n: "02", title: "Theory Classes", desc: "2 days — online or offline, UAS training summary provided" },
  { n: "03", title: "Theory Test", desc: "Conducted after ground school session" },
  { n: "04", title: "Simulator & Assembly", desc: "3 days at flying site — Indore City SAPL" },
  { n: "05", title: "RPC Issued", desc: "10-year certificate issued by Soaring Aerotech" },
];

const docs = [
  { icon: <FileText className="w-4 h-4" />, label: "Aadhar / Voter Card / Driving Licence / Passport (Original)" },
  { icon: <FileText className="w-4 h-4" />, label: "10th Certificate or Marksheet (Copy)" },
  { icon: <FileText className="w-4 h-4" />, label: "Medical Certificate of Fitness — from certified MBBS Doctor" },
  { icon: <User className="w-4 h-4" />, label: "4 Passport-sized photos (white background)" },
];

export default function Training() {
  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] border-b border-border py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="section-label">DGCA APPROVED RPTO · INDORE, MP</div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
                DGCA Drone Training<br /><span className="text-primary">Get Certified.</span>
              </h1>
              <p className="text-muted-foreground text-base mb-6 max-w-lg">
                Small Category · Rotorcraft · VLOS — 5-day program, RPC valid for 10 years. India's premier DGCA-approved RPTO.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <Button size="lg" className="rounded-full h-12 px-7 font-bold" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>
                  Apply Now <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <a href="tel:+917869918736">
                  <Button size="lg" variant="outline" className="rounded-full h-12 px-7 font-semibold border-border text-foreground hover:bg-white">
                    <Phone className="w-4 h-4 mr-2" /> +91 78699 18736
                  </Button>
                </a>
              </div>
              <div className="flex gap-6">
                {[{ v: "500+", l: "Pilots Certified" }, { v: "10 Yrs", l: "RPC Validity" }, { v: "5 Days", l: "Duration" }].map((s, i) => (
                  <div key={i}>
                    <div className="font-display text-2xl text-foreground font-black">{s.v}</div>
                    <div className="text-muted-foreground text-xs">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] hidden lg:block"
            >
              <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop" alt="Drone pilot training" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Pricing cards ────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">DGCA CERTIFIED PROGRAM</div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">Remote Pilot Certificate (RPC)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            {/* Small Class */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border-2 border-primary overflow-hidden shadow-sm">
              <div className="relative h-40 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=600&h=300&fit=crop" alt="Small Class" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#111111]/75" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest mb-1">Small Category</span>
                  <h3 className="font-display text-2xl text-white">Small Class — Rotorcraft</h3>
                  <p className="text-white/40 text-xs mt-1">VLOS · Class: Small · Category: Rotorcraft</p>
                </div>
              </div>
              <div className="p-6 bg-[#F5F5F5]">
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display text-4xl text-foreground">₹25,000</span>
                  <span className="text-sm text-muted-foreground mb-1">+ GST / candidate</span>
                </div>
                <p className="text-xs text-muted-foreground mb-5">Fooding & accommodation extra</p>
                <Button className="w-full rounded-xl h-11 font-bold" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>Enquire — Small Class</Button>
              </div>
            </motion.div>

            {/* Multirotor */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-2xl border border-border overflow-hidden shadow-sm">
              <div className="relative h-40 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop" alt="Multirotor" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#111111]/75" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <span className="text-xs font-bold font-mono text-white/40 uppercase tracking-widest mb-1">Advanced</span>
                  <h3 className="font-display text-2xl text-white">Multirotor — DGCA</h3>
                  <p className="text-white/40 text-xs mt-1">DGCA-Certified Multirotor Training</p>
                </div>
              </div>
              <div className="p-6 bg-[#F5F5F5]">
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display text-4xl text-foreground">₹35,000</span>
                  <span className="text-sm text-muted-foreground mb-1">+ GST / candidate</span>
                </div>
                <p className="text-xs text-muted-foreground mb-5">Fooding & accommodation extra</p>
                <Button variant="outline" className="w-full rounded-xl h-11 font-bold" onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}>Enquire — Multirotor</Button>
              </div>
            </motion.div>
          </div>

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: <Clock className="w-4 h-4 text-primary" />, label: "Duration", value: "5 Days Total" },
              { icon: <MapPin className="w-4 h-4 text-primary" />, label: "Location", value: "Indore City, SAPL" },
              { icon: <BadgeCheck className="w-4 h-4 text-primary" />, label: "RPC Validity", value: "10 Years" },
              { icon: <Calendar className="w-4 h-4 text-primary" />, label: "Eligibility", value: "18–65 yrs, 10th Pass" },
            ].map((f, i) => (
              <div key={i} className="bg-[#F5F5F5] border border-border rounded-xl p-4 flex gap-3 items-start">
                <div className="mt-0.5 shrink-0">{f.icon}</div>
                <div>
                  <div className="text-xs text-muted-foreground">{f.label}</div>
                  <div className="font-bold text-sm text-foreground mt-0.5">{f.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course structure with images ─────────── */}
      <section className="py-20 bg-[#F5F5F5] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">COURSE STRUCTURE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border border-border rounded-2xl overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop" alt="Theory Classes" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#111111]/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-display font-bold text-white text-lg mx-auto mb-2">1</div>
                    <div className="text-white font-bold">Theory Classes</div>
                    <div className="text-white/50 text-xs font-mono">02 DAYS</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {["Online or Offline mode available", "Aviation regulations & NPNT", "Meteorology & airspace rules", "UAS Training Summary provided", "Theory test conducted after session"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white border border-border rounded-2xl overflow-hidden">
              <div className="relative h-44 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=300&fit=crop" alt="Practical Flying" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#111111]/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center font-display font-bold text-white text-lg mx-auto mb-2">2</div>
                    <div className="text-white font-bold">Simulator & Practical</div>
                    <div className="text-white/50 text-xs font-mono">03 DAYS · AT FLYING SITE</div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {["Simulator training & drills", "Drone assembly & components", "Practical flying — VLOS", "Dual-control with instructors", "Final evaluation by DGCA norms"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />{t}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Process timeline ─────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-10">HOW IT WORKS</div>
          <div className="relative">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-border z-0" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F5F5F5] border-2 border-border flex items-center justify-center font-display text-sm text-foreground mb-4 hover:border-primary hover:text-primary transition-colors">{s.n}</div>
                  <div className="font-bold text-sm text-foreground mb-1">{s.title}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Other programs ────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="section-label">MORE PROGRAMS</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">Skill Development Courses</h2>
            </div>
            <button onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })} className="hidden md:inline-flex items-center gap-2 text-primary font-bold text-sm">
              Enquire Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
                onClick={() => document.getElementById("enroll")?.scrollIntoView({ behavior: "smooth" })}
              >
                <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">{p.tag}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-1.5 text-white/50 text-[10px] font-mono uppercase tracking-wider mb-2">
                    <Clock className="w-3 h-3" />{p.duration}
                  </div>
                  <h3 className="font-display text-lg text-white leading-tight mb-3">{p.title}</h3>
                  <div className="flex items-center gap-1.5 text-white/60 text-sm">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate ────────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=700&h=500&fit=crop" alt="Corporate Training" className="w-full h-72 object-cover rounded-3xl shadow-xl" />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-2xl p-5 shadow-xl">
                <div className="font-display text-3xl font-black">100+</div>
                <div className="text-sm font-semibold opacity-90">Corporate Batches</div>
              </div>
            </div>
            <div>
              <div className="section-label">CORPORATE & INSTITUTIONAL</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Training for Organizations</h2>
              <p className="text-muted-foreground mb-6 text-sm">Custom DGCA-aligned batch programs for government bodies, defence, police, and institutions — on-site or at our Indore facility.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Government", "Army & Defence", "Police Forces", "Universities", "Smart Cities", "Corporates"].map((o, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-[#F5F5F5] border border-border text-sm font-medium">{o}</span>
                ))}
              </div>
              <Link href="/contact"><Button className="rounded-full px-8 h-12 font-bold">Request Corporate Proposal</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Eligibility & Docs ───────────────────── */}
      <section className="py-20 bg-[#F5F5F5] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl border border-border p-7">
              <div className="section-label mb-5">ELIGIBILITY</div>
              <div className="space-y-4">
                {[
                  { icon: <User className="w-4 h-4 text-primary" />, label: "Age", value: "18 to 65 years" },
                  { icon: <FileText className="w-4 h-4 text-primary" />, label: "Education", value: "10th Pass (minimum)" },
                  { icon: <BadgeCheck className="w-4 h-4 text-primary" />, label: "Medical", value: "Fitness certificate from MBBS Doctor" },
                  { icon: <IndianRupee className="w-4 h-4 text-primary" />, label: "Payment", value: "Full fees before registration date" },
                ].map((e, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-lg bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">{e.icon}</div>
                    <div>
                      <div className="text-xs text-muted-foreground">{e.label}</div>
                      <div className="font-semibold text-sm text-foreground mt-0.5">{e.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl border border-border p-7">
              <div className="section-label mb-5">DOCUMENTS REQUIRED</div>
              <ul className="space-y-3">
                {docs.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#F5F5F5] border border-border flex items-center justify-center shrink-0 text-foreground/40 mt-0.5">{d.icon}</div>
                    <span className="text-sm text-foreground/75 leading-snug">{d.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-border">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Payment Mode:</span> Online Banking or RTGS. Training certificate issued only after receipt of payment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Enroll form ──────────────────────────── */}
      <section id="enroll" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary border border-border">
              <h2 className="font-display text-2xl text-foreground mb-1 text-center">Enrollment Enquiry</h2>
              <p className="text-xs text-muted-foreground text-center mb-7">Our training coordinator will contact you within 24 hours.</p>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div><label className="text-xs font-semibold text-foreground block mb-1.5">Full Name</label><input type="text" className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your name" /></div>
                  <div><label className="text-xs font-semibold text-foreground block mb-1.5">Phone</label><input type="tel" className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="+91 78699 18736" /></div>
                </div>
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">Email</label><input type="email" className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="you@example.com" /></div>
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">Program</label>
                  <select className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary appearance-none">
                    <option value="">Select a program...</option>
                    <option>RPC — Small Class Rotorcraft (₹25,000 + GST)</option>
                    <option>RPC — Multirotor DGCA Certified (₹35,000 + GST)</option>
                    <option>Mapping & Surveying</option>
                    <option>GIS & Geospatial</option>
                    <option>Thermal & Multispectral</option>
                    <option>AI/ML for Drones</option>
                    <option>Precision Agriculture</option>
                    <option>Assembly & Maintenance</option>
                    <option>Drone Entrepreneurship</option>
                    <option>Corporate / Institutional Batch</option>
                  </select>
                </div>
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">City / Location</label><input type="text" className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your city" /></div>
                <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold">Submit Enquiry</Button>
              </form>
              <div className="mt-6 pt-5 border-t border-border flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>Or call us directly: <a href="tel:+917869918736" className="font-bold text-foreground hover:text-primary transition-colors">+91 78699 18736</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
