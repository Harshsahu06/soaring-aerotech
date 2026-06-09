import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Cpu, Code, Shield, Zap, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InnovationLab() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6 uppercase"
          >
            <Lightbulb className="w-4 h-4" />
            <span>UAV R&D · MANUFACTURING · DEFENSE</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Drone <span className="text-primary">Innovation Lab</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Where India's next generation of UAVs are designed, built, and tested. Indigenous drone development spanning FPV systems, surveillance UAVs, defense drones, and high-altitude reconnaissance platforms.
          </motion.p>
        </div>
      </section>

      {/* Core R&D Areas */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="section-label">DEVELOPMENT VERTICALS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What We Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">Soaring Aerotech is advancing beyond training and services into indigenous UAV manufacturing — building drones for commercial, industrial, and defense applications.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "FPV Drone Development", 
                icon: <Zap className="w-6 h-6" />, 
                desc: "Custom first-person-view drones engineered for agility and precision. Designed for inspection, racing, and tactical applications requiring high-speed maneuverability." 
              },
              { 
                title: "Surveillance UAVs", 
                icon: <Shield className="w-6 h-6" />, 
                desc: "Long-endurance surveillance drones with high-resolution and thermal imaging payloads. Deployed for industrial facility monitoring, perimeter security, and area reconnaissance." 
              },
              { 
                title: "Defense & Reconnaissance Drones", 
                icon: <Crosshair className="w-6 h-6" />, 
                desc: "Indigenous defense-grade UAVs for surveillance and reconnaissance missions. Engineered for durability, reliability, and operation in demanding field conditions." 
              },
              { 
                title: "High-Altitude Drone Testing", 
                icon: <Lightbulb className="w-6 h-6" />, 
                desc: "Active R&D and field testing of UAVs at high altitudes — validating performance of airframes, motors, and electronics in low-pressure, low-temperature environments." 
              },
              { 
                title: "Custom Payload Engineering", 
                icon: <Cpu className="w-6 h-6" />, 
                desc: "Design and integration of specialized sensors, cameras, and mission-specific hardware onto custom drone platforms for unique operational requirements." 
              },
              { 
                title: "Software & Autonomous Systems", 
                icon: <Code className="w-6 h-6" />, 
                desc: "Mission planning software, computer vision algorithms, and autonomous flight systems that enable drones to operate intelligently without constant human control." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="left-accent-card bg-white p-6 shadow-sm border border-border"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit text-primary mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-24 bg-[#F5F4F0] border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label">WHY THIS MATTERS</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Beyond Training: Building India's Drone Future</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                India's drone policy reforms have created a massive opportunity for indigenous UAV manufacturing. The government's Production Linked Incentive (PLI) scheme for drones and the push for import substitution make this the right moment to build domestic capacity.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Soaring Aerotech's R&D activities position us at the intersection of training, services, and manufacturing — creating a self-sustaining drone ecosystem where our trained pilots fly our own manufactured drones on commercial and defense contracts.
              </p>
              <ul className="space-y-0">
                {[
                  "Recent high-altitude drone testing completed successfully",
                  "FPV and surveillance drone prototypes in development",
                  "Defense drone engineering for specialized applications",
                  "Open to collaboration with colleges and research institutions",
                  "AIC Prestige incubated — supported R&D infrastructure"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-6 border-t border-border pt-6 mt-0">
                    <span className="text-primary font-mono font-bold mt-1">0{i+1}</span>
                    <span className="text-foreground font-medium pb-6">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <div className="text-sm font-mono text-primary mb-3 uppercase font-bold">Lab Gallery</div>
                {[
                  { title: "Prototyping Bay" },
                  { title: "High-Altitude Field Testing" },
                  { title: "Defense Drone Assembly" },
                ].map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-[16/7] relative bg-[#F5F4F0] border border-border flex items-center justify-center mb-4 last:mb-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                    <span className="text-muted-foreground/30 font-mono text-xs">IMAGE PLACEHOLDER</span>
                    <div className="absolute bottom-3 left-4 text-sm font-bold text-white z-20">{img.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Collaborate With Our R&D Team</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Looking to set up a drone Centre of Excellence at your college? Need custom UAV engineering for a defense or industrial project? Let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
                Discuss Collaboration
              </Button>
            </Link>
            <Link href="/training">
              <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-base font-semibold">
                View Training Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
