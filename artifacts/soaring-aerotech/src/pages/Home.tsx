import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronRight, ArrowRight, ShieldCheck, GraduationCap, Wrench, Lightbulb, Factory, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return <div ref={ref}>{count}{suffix}</div>;
}

const pillars = [
  {
    num: "01", tag: "TRAIN", title: "Skill\nDevelopment",
    icon: <GraduationCap className="w-10 h-10" />,
    frontBg: "from-[#0D1B2A] to-[#1a2e45]",
    backBg: "bg-primary",
    points: ["DGCA Certified RPTO", "8 Specialized Programs", "Corporate & Institutional Training"],
    link: "/training"
  },
  {
    num: "02", tag: "SOLVE", title: "Industrial\nServices",
    icon: <Wrench className="w-10 h-10" />,
    frontBg: "from-[#1a2e45] to-[#0f2233]",
    backBg: "bg-[#1a4a2e]",
    points: ["Aerial Survey & Mapping", "AI Surveillance", "Solar & Power Inspection"],
    link: "/services"
  },
  {
    num: "03", tag: "INNOVATE", title: "Research\n& Development",
    icon: <Lightbulb className="w-10 h-10" />,
    frontBg: "from-[#0f2233] to-[#1a1a3a]",
    backBg: "bg-[#2d1a4a]",
    points: ["Disaster Management UAVs", "AI/ML Operations", "Payload Engineering"],
    link: "/innovation-lab"
  },
  {
    num: "04", tag: "BUILD", title: "UAV\nManufacturing",
    icon: <Factory className="w-10 h-10" />,
    frontBg: "from-[#1a1a3a] to-[#2a1a0a]",
    backBg: "bg-[#4a2a0a]",
    points: ["50,000 sq ft Facility", "Defence & Logistics Drones", "National & International Collabs"],
    link: "/innovation-lab"
  },
];

const stats = [
  { target: 500, suffix: "+", label: "Pilots Trained" },
  { target: 8, suffix: "+", label: "Programs" },
  { target: 100, suffix: "+", label: "Drone Missions" },
  { target: 50000, suffix: " sqft", label: "Manufacturing" },
];

const flowSteps = [
  { label: "TRAIN", sub: "DGCA Pilots", color: "border-primary text-primary" },
  { label: "CERTIFY", sub: "RPC License", color: "border-blue-500 text-blue-500" },
  { label: "SERVE", sub: "B2B Projects", color: "border-green-500 text-green-500" },
  { label: "MANUFACTURE", sub: "Indigenous UAVs", color: "border-purple-500 text-purple-500" },
  { label: "DEFEND", sub: "Defence Grade", color: "border-red-500 text-red-500" },
];

const clients = ["Government","Defence & Police","Smart Cities","Solar Companies","Agriculture","Infrastructure","Research Labs","Startups"];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent" />
        </div>

        {/* animated grid lines */}
        <div className="absolute inset-0 z-0 opacity-5" style={{backgroundImage:'linear-gradient(rgba(255,120,0,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,120,0,.5) 1px,transparent 1px)', backgroundSize:'60px 60px'}} />

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#F5F4F0] z-10" style={{clipPath:'polygon(0 100%,100% 100%,100% 0)'}} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="max-w-3xl">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary font-mono text-xs mb-8 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Central India · Drone Innovation Ecosystem
            </motion.div>

            <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:0.12}} className="font-display text-6xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tight">
              We Build<br/><span className="text-primary">the Drone</span><br/>Industry.
            </motion.h1>

            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.22}} className="flex flex-wrap gap-2 mb-10">
              {["DGCA Training","Drone Services","R&D","UAV Manufacturing"].map((t,i)=>(
                <span key={i} className="px-4 py-1.5 rounded-full border border-white/15 text-white/60 text-sm font-medium backdrop-blur-sm">{t}</span>
              ))}
            </motion.div>

            <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="flex flex-wrap gap-4">
              <Link href="/training">
                <Button size="lg" className="h-14 px-8 rounded-full text-base font-semibold group">
                  Explore Programs <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base border-white/20 text-white hover:bg-white/10">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2}} className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-white/30 flex flex-col items-center gap-1">
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Trust bar */}
      <section className="py-8 bg-white border-b border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {icon:<ShieldCheck className="w-3.5 h-3.5"/>, label:"DGCA Approved RPTO"},
              {label:"🚀 Startup India"},
              {label:"🏭 MSME Registered"},
              {label:"🎓 AIC Prestige Incubated"},
              {label:"🏗️ 50,000 sq ft Manufacturing"},
            ].map((item,i)=>(
              <motion.div key={i} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:i*0.07}} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-semibold text-foreground/60 tracking-wide">
                {item.icon}{item.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats counter */}
      <section className="py-20 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {stats.map((s,i)=>(
              <div key={i} className="bg-[#F5F4F0] text-center py-12 px-4">
                <div className="font-display text-4xl md:text-6xl font-black text-foreground mb-2">
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Pillars — Flip Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">4 PILLARS</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground">What We Do</h2>
            <p className="text-muted-foreground mt-3 text-sm">Hover each card to explore</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="flip-card h-64 cursor-pointer">
                <div className="flip-card-inner rounded-2xl shadow-md">
                  {/* Front */}
                  <div className={`flip-card-front rounded-2xl bg-gradient-to-br ${p.frontBg} flex flex-col justify-between p-7`}>
                    <div className="flex items-start justify-between">
                      <span className="text-white/20 font-display font-black text-5xl leading-none">{p.num}</span>
                      <span className="text-xs font-bold font-mono text-primary/80 bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">{p.tag}</span>
                    </div>
                    <div>
                      <div className="text-white/50 mb-4">{p.icon}</div>
                      <h3 className="font-display text-xl font-black text-white leading-tight whitespace-pre-line">{p.title}</h3>
                    </div>
                  </div>
                  {/* Back */}
                  <div className={`flip-card-back rounded-2xl ${p.backBg} flex flex-col justify-between p-7`}>
                    <div>
                      <span className="text-xs font-bold font-mono text-white/60 uppercase tracking-widest">{p.tag}</span>
                      <h3 className="font-display text-lg font-black text-white mt-2 mb-4 leading-tight whitespace-pre-line">{p.title}</h3>
                      <ul className="space-y-2">
                        {p.points.map((pt,j)=>(
                          <li key={j} className="flex items-start gap-2 text-sm text-white/80">
                            <span className="w-1 h-1 rounded-full bg-white/60 mt-1.5 shrink-0" />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={p.link} className="inline-flex items-center gap-1.5 text-white text-sm font-bold mt-2">
                      Explore <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Flowchart */}
      <section className="py-24 bg-[#0D1B2A] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label" style={{color:'rgba(255,255,255,0.4)'}}>THE PIPELINE</div>
            <h2 className="font-display text-4xl md:text-5xl font-black text-white">Full-Cycle Ecosystem</h2>
          </div>

          <div className="relative">
            {/* Desktop flow */}
            <div className="hidden md:flex items-center justify-between gap-2">
              {flowSteps.map((step, i) => (
                <div key={i} className="flex items-center flex-1 min-w-0">
                  <motion.div
                    initial={{opacity:0,scale:0.8}}
                    whileInView={{opacity:1,scale:1}}
                    viewport={{once:true}}
                    transition={{delay:i*0.15, type:'spring', stiffness:120}}
                    className={`flex-1 border-2 ${step.color} rounded-2xl p-5 text-center`}
                  >
                    <div className={`font-display text-xs font-black uppercase tracking-widest mb-1 ${step.color.split(' ')[1]}`}>{step.label}</div>
                    <div className="text-white/50 text-xs">{step.sub}</div>
                  </motion.div>
                  {i < flowSteps.length - 1 && (
                    <motion.div
                      initial={{scaleX:0}}
                      whileInView={{scaleX:1}}
                      viewport={{once:true}}
                      transition={{delay:i*0.15+0.3, duration:0.4}}
                      className="w-8 shrink-0 flex items-center justify-center"
                      style={{originX:0}}
                    >
                      <ArrowRight className="w-5 h-5 text-white/20" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile flow */}
            <div className="md:hidden space-y-2">
              {flowSteps.map((step, i) => (
                <div key={i}>
                  <motion.div
                    initial={{opacity:0,x:-20}}
                    whileInView={{opacity:1,x:0}}
                    viewport={{once:true}}
                    transition={{delay:i*0.1}}
                    className={`border-2 ${step.color} rounded-xl p-4 flex items-center justify-between`}
                  >
                    <span className={`font-display text-sm font-black uppercase tracking-widest ${step.color.split(' ')[1]}`}>{step.label}</span>
                    <span className="text-white/50 text-xs">{step.sub}</span>
                  </motion.div>
                  {i < flowSteps.length - 1 && <div className="flex justify-center py-1"><ArrowDown className="w-4 h-4 text-white/20" /></div>}
                </div>
              ))}
            </div>
          </div>

          <motion.p initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:0.8}} className="text-white/30 text-sm text-center mt-10 font-mono tracking-wide">
            TRAINING → CERTIFICATION → SERVICES → MANUFACTURING → DEFENCE
          </motion.p>
        </div>
      </section>

      {/* Who we serve */}
      <section className="py-20 bg-[#F5F4F0] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">WHO WE SERVE</div>
          <div className="flex flex-wrap gap-3">
            {clients.map((c,i)=>(
              <motion.span key={i} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.05}} className="px-5 py-2.5 rounded-full bg-white border border-border text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition-colors cursor-default">
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — staggered sizes */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-12">WHAT PEOPLE SAY</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name:"Rahul Verma", role:"DGCA Certified Pilot", text:"Cleared RPC in first attempt. Now flying commercially full-time.", size:"md:col-span-2" },
              { name:"Sneha Patil", role:"Agricultural Drone Operator", text:"Connected my farming background with drone technology.", size:"" },
              { name:"Amit Kumar", role:"Engineering Graduate", text:"Real defence drone hardware access. Nowhere else in MP.", size:"" },
              { name:"Priya Desai", role:"GIS Analyst", text:"The mapping & GIS course gave me a career shift I didn't expect.", size:"md:col-span-2" },
            ].map((t,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className={`${t.size} bg-[#F5F4F0] rounded-2xl p-8 border border-border relative overflow-hidden group hover:border-primary/30 transition-colors`}>
                <div className="font-display absolute top-4 right-6 text-7xl font-black text-foreground/5 select-none leading-none group-hover:text-primary/5 transition-colors">"</div>
                <p className="text-foreground font-medium mb-6 leading-relaxed relative z-10">{t.text}</p>
                <div className="font-bold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{t.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 2px 2px, rgba(255,120,0,0.8) 1px, transparent 0)', backgroundSize:'32px 32px'}} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
                Ready to Join<br/><span className="text-primary">India's Drone</span><br/>Revolution?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/training"><Button size="lg" className="h-14 px-8 rounded-full text-base font-bold">Enroll Now</Button></Link>
              <Link href="/contact"><Button size="lg" variant="outline" className="h-14 px-8 rounded-full text-base font-bold border-white/20 text-white hover:bg-white/10">Talk to Expert</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
