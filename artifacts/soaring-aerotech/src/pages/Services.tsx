import { motion } from "framer-motion";
import { Map, Tractor, Eye, Factory, Sun, Zap, Settings, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const services = [
  { icon:<Map className="w-8 h-8"/>, title:"Aerial Survey\n& 2D/3D Mapping", color:"bg-blue-600", lightColor:"bg-blue-50", bullets:["Centimetre-accurate data","Orthomosaics & 3D models","GIS-ready outputs"], id:"survey" },
  { icon:<Sun className="w-8 h-8"/>, title:"Solar Plant\nInspection", color:"bg-yellow-500", lightColor:"bg-yellow-50", bullets:["Thermal hotspot detection","GPS-tagged fault reports","MW-scale in hours"], id:"solar" },
  { icon:<Zap className="w-8 h-8"/>, title:"Power Substation\nInspection", color:"bg-orange-500", lightColor:"bg-orange-50", bullets:["Zero shutdown required","Thermal anomaly detection","Safe remote ops"], id:"substation" },
  { icon:<Tractor className="w-8 h-8"/>, title:"Precision\nAgriculture", color:"bg-green-600", lightColor:"bg-green-50", bullets:["NDVI crop health maps","Targeted spraying","10,000+ acre scale"], id:"agriculture" },
  { icon:<Eye className="w-8 h-8"/>, title:"AI Surveillance\n& Security", color:"bg-purple-600", lightColor:"bg-purple-50", bullets:["24/7 autonomous patrol","Thermal night detection","Live command feed"], id:"surveillance" },
  { icon:<AlertTriangle className="w-8 h-8"/>, title:"Disaster\nAssessment", color:"bg-red-600", lightColor:"bg-red-50", bullets:["Rapid aerial recon","Thermal survivor detection","GPS damage mapping"], id:"disaster" },
  { icon:<Factory className="w-8 h-8"/>, title:"Infrastructure\nInspection", color:"bg-slate-700", lightColor:"bg-slate-100", bullets:["Bridges, towers, chimneys","No scaffolding needed","Micro-crack detection"], id:"infrastructure" },
  { icon:<Settings className="w-8 h-8"/>, title:"Custom Drone\nSolutions", color:"bg-indigo-600", lightColor:"bg-indigo-50", bullets:["Purpose-built hardware","Custom payload engineering","Concept to deployment"], id:"custom" },
];

const clients = ["Government Departments","Smart City Projects","Builders & Real Estate","Solar Energy Companies","Agriculture Firms","Infrastructure Companies","Defence & Police","Disaster Management"];

export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'linear-gradient(rgba(255,120,0,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,120,0,.5) 1px,transparent 1px)', backgroundSize:'40px 40px'}} />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="font-display text-5xl md:text-7xl font-black text-white mb-4">
            8 Industrial<br/><span className="text-primary">Drone Services</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="text-white/50 max-w-md mx-auto">
            B2B solutions for government, infrastructure, energy, agriculture, and defence.
          </motion.p>
        </div>
      </section>

      {/* Hover-reveal service cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">OUR SERVICES</div>
            <h2 className="font-display text-3xl md:text-4xl font-black text-foreground">Specialized Solutions</h2>
            <p className="text-muted-foreground mt-2 text-sm">Hover each service to learn more</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s,i)=>(
              <motion.div key={i} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}} className="reveal-card relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-border group">
                {/* Base: light bg + colored icon + title */}
                <div className={`absolute inset-0 ${s.lightColor} flex flex-col justify-between p-6`}>
                  <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center text-white`}>
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black text-foreground leading-tight whitespace-pre-line">{s.title}</h3>
                    <div className="mt-2 text-xs text-muted-foreground font-mono uppercase tracking-wider">Hover to explore →</div>
                  </div>
                </div>
                {/* Reveal overlay */}
                <div className={`reveal-overlay absolute inset-0 ${s.color} flex flex-col justify-between p-6`}>
                  <div>
                    <h3 className="font-display text-lg font-black text-white leading-tight whitespace-pre-line mb-4">{s.title}</h3>
                    <ul className="space-y-2">
                      {s.bullets.map((b,j)=>(
                        <li key={j} className="flex items-start gap-2 text-sm text-white/90">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-1.5 shrink-0"/>{b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/contact?service=${s.id}`} className="inline-flex items-center gap-1.5 text-white text-sm font-bold">
                    Get Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client sectors — visual grid */}
      <section className="py-20 bg-[#F5F4F0] border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-8">CLIENT SECTORS</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {clients.map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,scale:0.95}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.05}} className="bg-white border border-border rounded-xl p-4 text-sm font-semibold text-foreground text-center hover:border-primary hover:text-primary transition-colors cursor-default">
                {c}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-display text-3xl md:text-4xl font-black text-foreground mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto text-sm">Our manufacturing capability means we can build whatever you need.</p>
          <Link href="/contact"><Button size="lg" className="rounded-full h-13 px-8 text-base font-bold">Consult Our Team</Button></Link>
        </div>
      </section>
    </main>
  );
}
