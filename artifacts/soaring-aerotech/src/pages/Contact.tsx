import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Indore, Madhya Pradesh · India
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-5 leading-tight">
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/50 text-lg max-w-xl mx-auto">
            Whether you want to enroll in a course, discuss an enterprise project, or explore academic partnerships — we're ready to talk.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Info */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <div>
                <div className="section-label mb-6">CONTACT INFORMATION</div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F5F5F5] border border-border hover:border-primary/20 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0"><MapPin className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Headquarters</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">Tech Park, Block B, Innovation Wing<br />Indore, Madhya Pradesh<br />India 452001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F5F5F5] border border-border hover:border-primary/20 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0"><Phone className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground text-sm">+91 78699 18736</p>
                      <p className="text-muted-foreground text-sm">+91 98765 43210</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F5F5F5] border border-border hover:border-primary/20 transition-colors">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0"><Mail className="w-5 h-5" /></div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm">hello@soaringaerotech.com</p>
                      <p className="text-muted-foreground text-sm">training@soaringaerotech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Aerial image of Indore area */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=500&fit=crop"
                  alt="Indore, Madhya Pradesh"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#111111]/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <MapPin className="w-8 h-8 text-primary" />
                  <p className="text-white font-bold">Indore, Madhya Pradesh</p>
                  <p className="text-white/50 text-xs font-mono">TECH PARK · BLOCK B</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-lg">
              <div className="section-label mb-6">SEND A MESSAGE</div>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Full Name *</label>
                    <input type="text" required className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-sm" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                    <input type="tel" required className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-sm" placeholder="+91 78699 18736" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <input type="email" className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-sm" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Subject / Inquiry Type *</label>
                  <select required className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none text-sm">
                    <option value="">Select an option...</option>
                    <option value="training">Drone Training & Courses</option>
                    <option value="services">Enterprise Drone Services</option>
                    <option value="manufacturing">UAV Manufacturing Inquiry</option>
                    <option value="partnership">Partnership & Research</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Message *</label>
                  <textarea required rows={5} placeholder="Tell us about your project or inquiry..." className="w-full bg-[#F5F5F5] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none text-sm"></textarea>
                </div>
                <Button type="submit" className="w-full h-13 rounded-xl text-base font-bold gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
              <div className="mt-6 pt-6 border-t border-border">
                <a href="https://wa.me/917869918736" className="inline-flex items-center justify-center w-full h-13 rounded-xl text-base font-bold bg-[#25D366] hover:bg-[#1ebe57] text-white transition-colors gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Visual CTA strip ─────────────────────── */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=500&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#111111]/88" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest mb-2">Response Time</p>
              <h3 className="font-display text-2xl text-white">We respond within <span className="text-primary">24 hours</span></h3>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+917869918736">
                <Button variant="outline" className="rounded-full px-6 h-12 font-semibold border-white/20 text-white hover:bg-white/10">
                  <Phone className="w-4 h-4 mr-2" /> Call Now
                </Button>
              </a>
              <a href="mailto:hello@soaringaerotech.com">
                <Button className="rounded-full px-6 h-12 font-semibold">
                  <Mail className="w-4 h-4 mr-2" /> Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
