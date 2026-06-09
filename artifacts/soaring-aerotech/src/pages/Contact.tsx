import { motion } from "framer-motion";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Whether you want to enroll in a course, discuss an enterprise project, or explore academic partnerships, we're ready to talk.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-border">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Headquarters</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Tech Park, Block B, Innovation Wing<br />
                        Indore, Madhya Pradesh<br />
                        India 452001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-border">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Phone</h4>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-muted-foreground">+91 98765 43211</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-sm border border-border">
                    <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground">hello@soaringaerotech.com</p>
                      <p className="text-muted-foreground">training@soaringaerotech.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-64 rounded-2xl bg-[#F5F4F0] border border-border flex items-center justify-center relative overflow-hidden group">
                 <div className="text-center relative z-10">
                   <MapPin className="w-10 h-10 text-primary mx-auto mb-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                   <p className="text-muted-foreground font-mono text-sm">INTERACTIVE MAP VIEW</p>
                 </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl border border-border shadow-md"
            >
              <h2 className="text-3xl font-bold text-foreground mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <input type="text" required className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number *</label>
                    <input type="tel" required className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject / Inquiry Type *</label>
                  <select required className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none">
                    <option value="">Select an option...</option>
                    <option value="training">Drone Training & Courses</option>
                    <option value="services">Enterprise Drone Services</option>
                    <option value="lab">Innovation Lab / College Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message *</label>
                  <textarea required rows={5} className="w-full bg-[#F5F4F0] border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"></textarea>
                </div>

                <Button type="submit" className="w-full h-14 rounded-xl text-lg font-bold gap-2">
                  <Send className="w-5 h-5" /> Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">Need immediate assistance?</p>
                <a href="#" className="inline-flex items-center justify-center w-full h-14 rounded-xl text-lg font-bold bg-[#25D366] hover:bg-[#1ebe57] text-white transition-colors gap-2">
                  <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
