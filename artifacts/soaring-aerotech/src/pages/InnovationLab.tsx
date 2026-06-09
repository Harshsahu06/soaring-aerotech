import { motion } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Cpu, Code, Users2, Trophy } from "lucide-react";
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
            <span>RESEARCH & DEVELOPMENT</span>
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
            Where theoretical concepts become flyable reality. Pushing the boundaries of autonomous flight, AI integration, and custom payload engineering.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { title: "Hardware Prototyping", icon: <Cpu className="w-6 h-6" />, desc: "Custom frame design, 3D printing, and flight controller integration." },
              { title: "Software & AI", icon: <Code className="w-6 h-6" />, desc: "Computer vision, edge computing, and autonomous mission planning algorithms." },
              { title: "Student Hackathons", icon: <Users2 className="w-6 h-6" />, desc: "24-hour intense problem-solving events for aspiring aerospace engineers." },
              { title: "Industry R&D", icon: <Trophy className="w-6 h-6" />, desc: "Collaborative research projects solving specific enterprise pain points." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="left-accent-card bg-white p-6 shadow-sm"
              >
                <div className="bg-primary/10 p-3 rounded-lg w-fit text-primary mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F4F0] border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="section-label justify-center">GALLERY</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Inside the Lab</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Prototyping Bay" },
              { title: "National Hackathon 2024" },
              { title: "Autonomous Indoor Testing" },
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-white border border-border flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <span className="text-muted-foreground/30 font-mono text-sm">IMAGE PLACEHOLDER</span>
                <div className="absolute bottom-6 left-6 text-lg font-bold text-white z-20">{img.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Partner With Our Lab</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Are you a college looking to set up a Center of Excellence? Or an enterprise needing custom R&D?
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
              Discuss Collaboration
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
