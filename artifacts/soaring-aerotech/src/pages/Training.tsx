import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, CheckCircle2, ShieldCheck, Clock, BookOpen, Users, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Training() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6 uppercase"
          >
            <ShieldCheck className="w-4 h-4" /> DGCA APPROVED RPTO
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Become a Certified <br className="hidden md:block"/>
            <span className="text-primary">Drone Pilot</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 max-w-3xl mx-auto mb-10"
          >
            India's DGCA-approved RPTO offering Remote Pilot Certificate (RPC) programs — bridging classroom theory with hands-on flight operations for a high-demand industry career.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
              Apply for Next Batch <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="section-label">PROGRAMS</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Training Programs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">From foundational DGCA certification to advanced specialization — we train pilots for every segment of the drone industry.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Course */}
            <div className="p-8 md:p-12 rounded-3xl bg-white border-l-4 border-primary shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 transition-opacity">
                <ShieldCheck className="w-32 h-32 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-mono text-sm font-bold mb-6">
                  DGCA CERTIFIED · BASIC & ADVANCED
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">Remote Pilot Certificate (RPC)</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  The official DGCA certification required to commercially fly drones in India. Covers both theoretical ground school and rigorous practical flight operations as mandated by India's drone rules.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="text-sm text-muted-foreground font-mono">DURATION</div>
                      <div className="font-bold text-foreground">5 Days (Basic) / Extended (Advanced)</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    <div>
                      <div className="text-sm text-muted-foreground font-mono">ELIGIBILITY</div>
                      <div className="font-bold text-foreground">18+ Years, 10th Pass</div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-sm font-mono text-primary mb-3 uppercase font-bold">Curriculum Covers</div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-foreground/80">Aviation Regulations & Airspace Management</span></li>
                    <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-foreground/80">Meteorology & Flight Principles</span></li>
                    <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-foreground/80">Drone Maintenance & Safety Protocols</span></li>
                    <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-foreground/80">NPNT Compliance & Digital Sky Platform</span></li>
                    <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-foreground/80">Simulator-Based Flight Training</span></li>
                    <li className="flex items-start gap-3"><BookOpen className="w-5 h-5 text-primary shrink-0" /><span className="text-foreground/80">Practical Flight Operations (Dual Control)</span></li>
                  </ul>
                </div>

                <Button className="w-full h-12 rounded-xl text-base" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                  Apply Now
                </Button>
              </div>
            </div>

            {/* Advanced Courses */}
            <div className="flex flex-col gap-6">
              {[
                { title: "Advanced Survey & Mapping", desc: "Master Pix4D, DroneDeploy, and RTK/PPK data collection. Ideal for land surveyors and GIS professionals entering the drone economy.", tag: "SKILL COURSE" },
                { title: "Precision Agriculture Operations", desc: "Multispectral imaging, NDVI analysis, crop health indices, and drone-based spraying. Designed for agriculture professionals and agri-tech firms.", tag: "SKILL COURSE" },
                { title: "Industrial Inspection & Surveillance", desc: "Thermal imaging, confined space navigation, and automated inspection workflows for infrastructure, power, and industrial facility monitoring.", tag: "SKILL COURSE" },
                { title: "Corporate & Institutional Training", desc: "Customized drone training programs for Government, Police, Army, and institutions. We design DGCA-aligned curricula for your specific operational requirements.", tag: "CORPORATE" },
              ].map((course, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white border border-border shadow-sm flex-1 flex flex-col justify-center group hover:border-primary/30 transition-colors">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary font-mono text-xs font-bold mb-3">{course.tag}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.desc}</p>
                  <button className="inline-flex items-center text-primary font-semibold transition-colors mt-auto w-fit text-sm" onClick={() => document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' })}>
                    Request Details <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">TARGET AUDIENCE</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Who Should Enroll?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Users className="w-8 h-8 text-primary" />, title: "Aspiring Drone Pilots", desc: "Individuals looking to build a high-income career as a DGCA-certified commercial drone pilot in agriculture, surveillance, or industrial inspection." },
              { icon: <Building2 className="w-8 h-8 text-primary" />, title: "Industry Professionals", desc: "Engineers, surveyors, farmers, and inspectors who want to add aerial data collection to their skill set and multiply their professional value." },
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Government & Defense", desc: "Police, military, disaster management, and government agencies requiring DGCA-compliant drone operators for surveillance and field missions." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl bg-[#F5F4F0] border border-border text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="section-label justify-center">ROADMAP</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Training Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Registration", desc: "Documentation, medical clearance & DGCA portal enrollment" },
              { step: "02", title: "Ground School", desc: "Aviation theory, regulations, NPNT & Digital Sky" },
              { step: "03", title: "Simulator", desc: "Virtual flight mechanics & emergency procedures" },
              { step: "04", title: "Practical Flight", desc: "Hands-on dual-control flying with expert instructors" },
              { step: "05", title: "RPC Certification", desc: "DGCA evaluation & Remote Pilot Certificate" },
            ].map((step, i) => (
              <div key={i} className="relative p-6 rounded-2xl bg-white shadow-sm border border-border text-center group transition-all">
                <div className="text-5xl font-black text-foreground/10 mb-4 font-mono">{step.step}</div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
                {i < 4 && <ChevronRight className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-primary z-10" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enroll" className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12 border-t-4 border-primary border border-border">
            <h2 className="text-3xl font-bold text-foreground mb-2 text-center">Enrollment Enquiry</h2>
            <p className="text-muted-foreground text-center mb-8">Leave your details and our training coordinator will contact you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <input type="text" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Your full name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email Address</label>
                <input type="email" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="you@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Interested Program</label>
                <select className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                  <option value="">Select a program...</option>
                  <option value="rpc-basic">Remote Pilot Certificate — Basic</option>
                  <option value="rpc-advanced">Remote Pilot Certificate — Advanced</option>
                  <option value="survey">Advanced Survey & Mapping</option>
                  <option value="agriculture">Precision Agriculture Operations</option>
                  <option value="inspection">Industrial Inspection & Surveillance</option>
                  <option value="corporate">Corporate / Institutional Training</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Organization / Background (Optional)</label>
                <textarea rows={4} className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your background or institutional requirements..."></textarea>
              </div>
              <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold">
                Submit Enquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
