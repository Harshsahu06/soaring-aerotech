import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, ShieldCheck, Target, Rocket, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Who We Are
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Soaring Aerotech is a DGCA-approved RPTO and drone technology company building India's complete drone ecosystem — from pilot training to indigenous UAV manufacturing and defense applications.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">More Than a Training Institute</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Soaring Aerotech was founded to address a critical gap in India's rapidly growing drone sector — the need for properly trained, DGCA-certified pilots equipped with real-world operational skills, not just theoretical knowledge.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                As an approved RPTO (Remote Pilot Training Organisation) under India's drone regulations, we offer Remote Pilot Certificate programs with a comprehensive curriculum covering aviation regulations, meteorology, NPNT, Digital Sky platform usage, simulator training, and hands-on flight operations.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, Soaring Aerotech has expanded into a complete drone ecosystem: commercial drone services for industry, indigenous UAV engineering, FPV and defense drone development, and Drone-as-a-Service solutions for government and corporate clients.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-border">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To build India's drone workforce and deliver cutting-edge UAV solutions across training, services, manufacturing, and defense.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-border">
                  <Rocket className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To position India as a global drone technology hub through an end-to-end ecosystem: Training → Certification → Services → Manufacturing → Defense.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <img src="/images/hero-bg.png" alt="Soaring Aerotech drone operations" className="w-full h-full object-cover grayscale opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">OUR ECOSYSTEM</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">A Complete Drone Business Model</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Unlike standalone training institutes, we generate revenue and impact across the entire drone lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "DGCA Pilot Training (RPTO)", desc: "DGCA-approved Remote Pilot Certificate programs. Basic and advanced training covering aviation regulations, NPNT, Digital Sky, and practical flight operations." },
              { num: "02", title: "Skill Development", desc: "Advanced courses in Survey & Mapping, Agriculture, Industrial Inspection, and Surveillance — creating employable, industry-ready drone professionals." },
              { num: "03", title: "Corporate Training", desc: "Customized drone training programs for Government, Army, Police, and institutions. DGCA-aligned curricula for operational requirements." },
              { num: "04", title: "Commercial Drone Services", desc: "Aerial surveillance, security monitoring, asset inspection, industrial site monitoring, survey & mapping, and precision agriculture for industry clients." },
              { num: "05", title: "Drone Manufacturing", desc: "Indigenous development of FPV drones, surveillance UAVs, and defense-grade reconnaissance systems. High-altitude drone testing and UAV engineering." },
              { num: "06", title: "Defense & Government", desc: "Surveillance and reconnaissance systems, specialized defense drones, and DaaS (Drone-as-a-Service) contracts for government and security agencies." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="left-accent-card bg-white p-8 shadow-sm border border-border">
                <div className="text-4xl font-black text-foreground/10 mb-4 font-mono">{item.num}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 relative">
              <img src="/images/team-founder.png" alt="Founder" className="w-full h-full object-cover min-h-[400px] grayscale" />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Founder's Vision</h2>
              <blockquote className="text-xl text-foreground/80 italic mb-8 leading-relaxed">
                "The drone industry in India is at an inflection point. We are not just training pilots — we are building the workforce, the technology, and the ecosystem that will power India's drone revolution. From DGCA certification to indigenous defense UAVs, Soaring Aerotech is the complete answer."
              </blockquote>
              <div>
                <h4 className="text-lg font-bold text-foreground">Founder & CEO</h4>
                <p className="text-primary font-mono text-sm">SOARING AEROTECH</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registrations & Recognition */}
      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">CREDENTIALS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Registered & Recognized</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "DGCA Approved RPTO", desc: "Authorized Remote Pilot Training Organisation under India's drone regulations." },
              { icon: <Globe className="w-8 h-8 text-primary" />, title: "Startup India", desc: "Recognized under the Government of India's Startup India initiative." },
              { icon: <Award className="w-8 h-8 text-primary" />, title: "MSME Registered", desc: "Registered under the Ministry of Micro, Small & Medium Enterprises." },
              { icon: <Rocket className="w-8 h-8 text-primary" />, title: "AIC Prestige Incubated", desc: "Incubated at Atal Incubation Centre, supporting our R&D and product development." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-[#F5F4F0] border border-border text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
