import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, ShieldCheck, Target, Users, BookOpen } from "lucide-react";
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
            India's premier drone technology, innovation, projects, and careers ecosystem. We mean business.
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
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Building the Indian Drone Ecosystem</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Soaring Aerotech was founded with a singular vision: to position India as a global hub for drone technology. We recognized a critical gap between theoretical training and real-world industrial application.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we are more than a training institute. We are an end-to-end ecosystem providing enterprise solutions, fostering innovation, and shaping the careers of the next generation of aerospace professionals.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-border">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground">To empower industries and individuals through cutting-edge drone technology.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm border border-border">
                  <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground">To be the undisputed leader in India's drone revolution.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden"
            >
              <img src="/images/hero-bg.png" alt="Drone in action" className="w-full h-full object-cover grayscale opacity-80" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row">
            <div className="w-full md:w-2/5 relative">
              <img src="/images/team-founder.png" alt="Founder" className="w-full h-full object-cover min-h-[400px] grayscale" />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
              <Award className="w-12 h-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Founder's Vision</h2>
              <blockquote className="text-xl text-foreground/80 italic mb-8 leading-relaxed">
                "The drone industry is not just about flying hardware; it's about solving complex industrial problems, capturing unseen data, and building an entirely new technological workforce. At Soaring Aerotech, we are not just participating in this revolution—we are leading it."
              </blockquote>
              <div>
                <h4 className="text-lg font-bold text-foreground">Rajeev Sharma</h4>
                <p className="text-primary font-mono text-sm">FOUNDER & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">OUR PEOPLE</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Leadership Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Priya Desai", role: "CHIEF OPERATING OFFICER", img: "/images/team-1.png", exp: "15+ years in aerospace manufacturing and enterprise operations." },
              { name: "Arjun Mehta", role: "HEAD OF TRAINING", img: "/images/team-2.png", exp: "Former military aviator. Over 5000 hours of UAV flight experience." },
              { name: "Vikram Singh", role: "CHIEF INNOVATION OFFICER", img: "/images/team-founder.png", exp: "AI and autonomous systems expert. Leads the Innovation Lab." },
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-md border border-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale transition-all duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-mono text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.exp}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
