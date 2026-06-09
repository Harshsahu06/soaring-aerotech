import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, ShieldCheck, Clock, Map, Cpu, Brain, Wrench, Tractor, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  {
    tag: "DGCA CERTIFIED",
    title: "Drone Flying — RPC",
    icon: <ShieldCheck className="w-7 h-7" />,
    duration: "5 Days / Extended",
    color: "from-primary to-orange-600",
    topics: ["Aviation Regulations", "NPNT & Digital Sky", "Meteorology", "Simulator Training", "Practical Flight", "RPC Certification"],
    featured: true,
  },
  { tag:"SKILL COURSE", title:"Mapping & Surveying", icon:<Map className="w-7 h-7"/>, duration:"3–5 Days", color:"from-blue-600 to-blue-800", topics:["Aerial Land Survey","2D/3D Mapping","RTK/PPK GNSS","Pix4D & DroneDeploy","Client Deliverables","GIS Outputs"] },
  { tag:"SKILL COURSE", title:"GIS & Geospatial", icon:<Target className="w-7 h-7"/>, duration:"3–5 Days", color:"from-cyan-600 to-blue-700", topics:["GIS Fundamentals","Land Record Mapping","Urban Planning Data","ArcGIS / QGIS","Spatial Analysis","Government Applications"] },
  { tag:"SKILL COURSE", title:"Thermal & Multispectral", icon:<Cpu className="w-7 h-7"/>, duration:"3–4 Days", color:"from-purple-600 to-indigo-700", topics:["Thermal Camera Ops","NDVI / NDWI Analysis","Solar Inspection","Power Line Audit","Crop Health Imaging","Report Generation"] },
  { tag:"ADVANCED", title:"AI/ML for Drones", icon:<Brain className="w-7 h-7"/>, duration:"5–7 Days", color:"from-violet-600 to-purple-800", topics:["Computer Vision","Object Detection","Autonomous Flight","Edge Computing","Mission AI","Surveillance AI"] },
  { tag:"SKILL COURSE", title:"Precision Agriculture", icon:<Tractor className="w-7 h-7"/>, duration:"3–4 Days", color:"from-green-600 to-emerald-800", topics:["Crop Health Mapping","Precision Spraying","Irrigation Analysis","Yield Estimation","NDVI Reports","Farm Operations"] },
  { tag:"SKILL COURSE", title:"Assembly & Maintenance", icon:<Wrench className="w-7 h-7"/>, duration:"3–5 Days", color:"from-slate-600 to-slate-800", topics:["Frame Assembly","Flight Controller","ESC Calibration","Battery Management","Pre-flight Checks","Field Repair"] },
  { tag:"ENTREPRENEURSHIP", title:"Drone Entrepreneurship", icon:<TrendingUp className="w-7 h-7"/>, duration:"2–3 Days", color:"from-yellow-500 to-orange-600", topics:["DGCA Compliance","Business Models","Client Acquisition","Pricing Strategy","Government Tenders","Scaling"] },
];

const steps = [
  { n:"01", title:"Registration", desc:"Docs, medical clearance, DGCA portal" },
  { n:"02", title:"Ground School", desc:"Regulations, NPNT, Digital Sky" },
  { n:"03", title:"Simulator", desc:"Virtual flight & emergency drills" },
  { n:"04", title:"Practical Flight", desc:"Dual-control with expert instructors" },
  { n:"05", title:"Certification", desc:"DGCA evaluation & RPC issued" },
];

export default function Training() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'linear-gradient(rgba(255,120,0,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,120,0,.5) 1px,transparent 1px)', backgroundSize:'40px 40px'}} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-5 uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> DGCA APPROVED RPTO — 8 PROGRAMS
          </motion.div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            8 Drone Training<br/><span className="text-primary">Programs</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-white/50 max-w-md mx-auto mb-8">
            DGCA certification to AI/ML — every skill the drone economy needs.
          </motion.p>
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.3}}>
            <Button size="lg" className="rounded-full h-13 px-8 text-base font-bold" onClick={()=>document.getElementById('enroll')?.scrollIntoView({behavior:'smooth'})}>
              Apply Now <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Featured RPC */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">FLAGSHIP PROGRAM</div>
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="rounded-2xl overflow-hidden border border-border shadow-lg">
            <div className="bg-gradient-to-r from-primary to-orange-600 p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <span className="text-xs font-bold font-mono text-white/70 uppercase tracking-widest">DGCA Certified</span>
                <h2 className="font-display text-3xl md:text-4xl font-black text-white mt-1">Remote Pilot Certificate (RPC)</h2>
                <p className="text-white/70 mt-2 text-sm">The official DGCA certification to fly drones commercially in India.</p>
              </div>
              <div className="flex gap-4 text-white/80 text-sm">
                <div className="text-center"><div className="font-display text-2xl font-black text-white">5</div><div className="font-mono text-xs">DAYS</div></div>
                <div className="w-px bg-white/20" />
                <div className="text-center"><div className="font-display text-2xl font-black text-white">18+</div><div className="font-mono text-xs">AGE</div></div>
                <div className="w-px bg-white/20" />
                <div className="text-center"><div className="font-display text-2xl font-black text-white">10th</div><div className="font-mono text-xs">PASS</div></div>
              </div>
            </div>
            <div className="bg-[#F5F4F0] p-8 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
                {["Aviation Regulations","NPNT & Digital Sky","Meteorology","Drone Maintenance","Simulator Training","Practical Flight"].map((t,i)=>(
                  <div key={i} className="bg-white border border-border rounded-xl p-3 text-center text-xs font-semibold text-foreground/80">{t}</div>
                ))}
              </div>
              <Button className="rounded-full px-8 h-12 font-bold" onClick={()=>document.getElementById('enroll')?.scrollIntoView({behavior:'smooth'})}>Apply for RPC</Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reveal-on-hover program cards */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">ALL PROGRAMS</div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">Specialized Courses</h2>
            <p className="text-muted-foreground mt-2 text-sm">Hover a card to see the curriculum</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.filter(p=>!p.featured).map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="reveal-card relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm">
                {/* Base */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} flex flex-col justify-between p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="text-white/60">{p.icon}</div>
                    <span className="text-xs font-bold font-mono text-white/50 uppercase tracking-wider">{p.tag}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-black text-white leading-tight">{p.title}</h3>
                    <div className="flex items-center gap-1.5 mt-2 text-white/50 text-xs"><Clock className="w-3 h-3"/>{p.duration}</div>
                  </div>
                </div>
                {/* Overlay */}
                <div className="reveal-overlay absolute inset-0 bg-[#0D1B2A]/95 backdrop-blur-sm flex flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-base font-black text-white mb-4">{p.title}</h3>
                    <ul className="space-y-1.5">
                      {p.topics.map((t,j)=>(
                        <li key={j} className="flex items-center gap-2 text-xs text-white/70">
                          <span className="w-1 h-1 rounded-full bg-primary shrink-0"/>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="text-primary text-xs font-bold font-mono flex items-center gap-1" onClick={()=>document.getElementById('enroll')?.scrollIntoView({behavior:'smooth'})}>
                    ENQUIRE <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process — visual timeline */}
      <section className="py-20 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-10">TRAINING PROCESS</div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-border z-0" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {steps.map((s,i)=>(
                <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.12}} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[#F5F4F0] border-2 border-border flex items-center justify-center mb-4 font-display text-lg font-black text-foreground group-hover:border-primary transition-colors">
                    {s.n}
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-1">{s.title}</h4>
                  <p className="text-xs text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">CORPORATE & INSTITUTIONAL</div>
              <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">Training for Organizations</h2>
              <p className="text-muted-foreground mb-6 text-sm">Custom DGCA-aligned programs for government, defence, police, and institutions.</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Government","Army & Defence","Police Forces","Universities","Smart Cities","Corporates"].map((o,i)=>(
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white border border-border text-sm font-medium">{o}</span>
                ))}
              </div>
              <Link href="/contact"><Button className="rounded-full px-8 h-12 font-bold">Request Corporate Proposal</Button></Link>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {[
                {n:"01", title:"Custom Batch Size", desc:"5 to 100+ participants"},
                {n:"02", title:"On-Site or Our Facility", desc:"We come to you, or train at our MP facility"},
                {n:"03", title:"DGCA Compliant", desc:"All programs meet government standards"},
              ].map((item,i)=>(
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-border items-start">
                  <span className="font-display text-2xl font-black text-border leading-none mt-0.5">{item.n}</span>
                  <div><div className="font-bold text-sm text-foreground mb-0.5">{item.title}</div><div className="text-xs text-muted-foreground">{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enroll */}
      <section id="enroll" className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary border border-border">
            <h2 className="font-display text-2xl font-black text-foreground mb-1 text-center">Enrollment Enquiry</h2>
            <p className="text-xs text-muted-foreground text-center mb-7">Our coordinator contacts you within 24 hours.</p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">Full Name</label><input type="text" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Your name"/></div>
                <div><label className="text-xs font-semibold text-foreground block mb-1.5">Phone</label><input type="tel" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="+91 98765 43210"/></div>
              </div>
              <div><label className="text-xs font-semibold text-foreground block mb-1.5">Email</label><input type="email" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="you@example.com"/></div>
              <div><label className="text-xs font-semibold text-foreground block mb-1.5">Program</label>
                <select className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-primary appearance-none">
                  <option value="">Select a program...</option>
                  {programs.map((p,i)=><option key={i}>{p.title}</option>)}
                  <option>Corporate / Institutional</option>
                </select>
              </div>
              <Button type="submit" className="w-full h-12 rounded-xl text-base font-bold">Submit Enquiry</Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
