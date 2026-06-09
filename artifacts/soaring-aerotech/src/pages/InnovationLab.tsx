import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Cpu, Brain, Zap, Anchor, Shield, Crosshair, Truck, Factory, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const rdProjects = [
  { icon:<Zap className="w-7 h-7"/>, title:"Disaster Management UAV", status:"ACTIVE R&D", color:"bg-red-500", lightColor:"bg-red-50", desc:"Flood/fire assessment, search & rescue." },
  { icon:<Anchor className="w-7 h-7"/>, title:"Tethered Drone Systems", status:"ACTIVE R&D", color:"bg-blue-600", lightColor:"bg-blue-50", desc:"Unlimited flight time for persistent surveillance." },
  { icon:<Lightbulb className="w-7 h-7"/>, title:"Agricultural UAV", status:"PROTOTYPING", color:"bg-green-600", lightColor:"bg-green-50", desc:"Purpose-built for Indian precision farming." },
  { icon:<Brain className="w-7 h-7"/>, title:"AI/ML UAV Operations", status:"ACTIVE R&D", color:"bg-purple-600", lightColor:"bg-purple-50", desc:"Computer vision & autonomous mission AI." },
  { icon:<Cpu className="w-7 h-7"/>, title:"Quantum Computing", status:"RESEARCH", color:"bg-indigo-600", lightColor:"bg-indigo-50", desc:"Swarm coordination & encrypted comms research." },
  { icon:<Zap className="w-7 h-7"/>, title:"Advanced Payload Dev", status:"ACTIVE R&D", color:"bg-orange-500", lightColor:"bg-orange-50", desc:"Hyperspectral, gas detection, custom sensors." },
];

const manufacturing = [
  { icon:<Shield className="w-8 h-8"/>, title:"Defence Drones", desc:"Surveillance & recon UAVs for military & security.", color:"from-slate-800 to-slate-900" },
  { icon:<Crosshair className="w-8 h-8"/>, title:"Surveillance Drones", desc:"Long-endurance UAVs for perimeter & border monitoring.", color:"from-blue-800 to-blue-900" },
  { icon:<Truck className="w-8 h-8"/>, title:"Logistics Drones", desc:"Last-mile delivery for urban and remote areas.", color:"from-green-800 to-green-900" },
  { icon:<Factory className="w-8 h-8"/>, title:"Custom UAV Design", desc:"End-to-end from concept to production.", color:"from-orange-700 to-orange-900" },
];

export default function InnovationLab() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 2px 2px,rgba(255,120,0,.8) 1px,transparent 0)', backgroundSize:'28px 28px'}} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-5 uppercase tracking-widest">
            <Lightbulb className="w-3.5 h-3.5"/> R&D · UAV Manufacturing · Made in India
          </motion.div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="font-display text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
            Innovation Lab<br/><span className="text-primary">&amp; Manufacturing</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.2}} className="text-white/50 max-w-md mx-auto">
            6 active R&D streams. 50,000 sq ft. Defence, logistics, and surveillance drones — Made in India.
          </motion.p>
        </div>
      </section>

      {/* R&D — mixed-size grid with reveal cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">ACTIVE R&D</div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">6 Research Projects</h2>
            <p className="text-muted-foreground mt-2 text-sm">Hover each card to learn more</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rdProjects.map((p,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="reveal-card relative h-56 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-border">
                {/* Base */}
                <div className={`absolute inset-0 ${p.lightColor} flex flex-col justify-between p-6`}>
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center text-white`}>{p.icon}</div>
                    <span className={`text-xs font-bold font-mono ${p.color.replace('bg-','text-')} bg-white border border-current px-2.5 py-1 rounded-full opacity-70`}>{p.status}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black text-foreground leading-tight">{p.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{p.desc}</p>
                  </div>
                </div>
                {/* Reveal */}
                <div className={`reveal-overlay absolute inset-0 ${p.color} flex flex-col justify-between p-6`}>
                  <div>
                    <span className="text-xs font-bold font-mono text-white/60 uppercase tracking-wider">{p.status}</span>
                    <h3 className="font-display text-xl font-black text-white mt-2 mb-3 leading-tight">{p.title}</h3>
                    <p className="text-sm text-white/80 leading-relaxed">{p.desc}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-white text-sm font-bold">
                    Collaborate → 
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing — dark gradient cards */}
      <section className="py-24 bg-[#0D1B2A]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <div className="section-label" style={{color:'rgba(255,255,255,0.4)'}}>UAV MANUFACTURING</div>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white mb-4">50,000 Sq Ft.<br/><span className="text-primary">Made in India.</span></h2>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                One of Central India's largest drone manufacturing setups — producing indigenous UAVs for commercial, government, and defence markets with national & international collaborations.
              </p>
              <div className="flex flex-wrap gap-2">
                {["50,000 sq ft Facility","National Collaborations","International Partnerships","Made in India","PLI Aligned"].map((b,i)=>(
                  <span key={i} className="px-3 py-1.5 rounded-full border border-white/15 text-white/60 text-xs font-medium">{b}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {manufacturing.map((m,i)=>(
                <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className={`bg-gradient-to-br ${m.color} rounded-2xl p-6 border border-white/10 hover:scale-[1.02] transition-transform cursor-default`}>
                  <div className="text-white/60 mb-4">{m.icon}</div>
                  <h3 className="font-display text-lg font-black text-white mb-2">{m.title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed">{m.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">Collaborate With Us</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">College, research institution, or defence agency? Let's build together.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact"><Button size="lg" className="rounded-full h-13 px-8 text-base font-bold">Discuss Collaboration</Button></Link>
            <Link href="/training"><Button size="lg" variant="outline" className="rounded-full h-13 px-8 text-base font-bold">View Training</Button></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
