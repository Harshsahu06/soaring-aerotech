import { Link } from "wouter";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, ShieldCheck, CheckCircle2, Navigation, Target, Activity, Zap, ArrowUpRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 1. Hero */}
      <section className="relative h-screen min-h-[640px] flex items-center pt-24 overflow-hidden bg-[#0D1B2A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.png" 
            alt="Cinematic aerial drone shot over Indian landscape" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-overlay"
          />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#F5F4F0] z-10" style={{clipPath: 'polygon(0 100%, 100% 100%, 100% 0)'}} />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-sm mb-6 uppercase"
            >
              INDIA'S DRONE ECOSYSTEM
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight"
            >
              Building the Future of <br className="hidden md:block"/>
              <span className="text-primary">Drone Technology</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl font-light leading-relaxed"
            >
              DGCA Certified Drone Training <span className="text-primary mx-2">•</span> Survey & Mapping <span className="text-primary mx-2">•</span> Industrial Inspection <span className="text-primary mx-2">•</span> Drone Innovation
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/training">
                <Button size="lg" className="w-full sm:w-auto text-base h-14 px-8 rounded-full transition-all group" data-testid="btn-hero-training">
                  Explore Training Programs
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-base h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 transition-all" data-testid="btn-hero-consult">
                  Request Consultation
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label justify-center">RECOGNIZED BY</div>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/80">
              <ShieldCheck className="w-5 h-5" /> DGCA
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/80">
               Startup India
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/80">
               MSME
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/80">
               AIC Prestige
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground/80">
               Academic Partners
            </div>
          </div>
        </div>
      </section>

      {/* 3. Numbers That Matter */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">BY THE NUMBERS</div>
          <div className="flex flex-wrap items-center justify-center divide-x divide-border">
            {[
              { num: "500+", label: "Students Trained" },
              { num: "100+", label: "Drone Missions" },
              { num: "20+", label: "Industry Collabs" },
              { num: "10+", label: "Colleges Partnered" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-8 md:px-12 text-center"
              >
                <h3 className="text-5xl md:text-6xl font-black text-foreground font-mono">{stat.num}</h3>
                <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16">
            <div className="section-label">CORE SERVICES</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Drone Pilot Training",
                desc: "Become a DGCA Certified pilot with comprehensive theoretical knowledge and rigorous hands-on flying experience.",
                icon: <Navigation className="w-8 h-8 text-foreground" />,
                link: "/training"
              },
              {
                title: "Survey & Mapping",
                desc: "Accurate aerial data collection, 3D modeling, and topographic mapping for infrastructure, mining, and agriculture.",
                icon: <Target className="w-8 h-8 text-foreground" />,
                link: "/services"
              },
              {
                title: "Industrial Inspection",
                desc: "High-resolution infrastructure and asset monitoring for powerlines, solar farms, bridges, and cellular towers.",
                icon: <Zap className="w-8 h-8 text-foreground" />,
                link: "/services"
              },
              {
                title: "Drone Innovation Lab",
                desc: "Research, development & emerging applications exploring the frontiers of autonomous flight and AI integration.",
                icon: <Activity className="w-8 h-8 text-foreground" />,
                link: "/innovation-lab"
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="left-accent-card bg-white p-8 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <div className="absolute top-6 right-8 text-5xl font-black text-border">0{i+1}</div>
                <div className="mb-6 inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 pr-12">{service.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{service.desc}</p>
                <Link href={service.link} className="inline-flex items-center text-primary font-semibold transition-colors" data-testid={`link-service-${i}`}>
                  Explore <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">OUR EDGE</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                Why India's Top Enterprises Choose Us
              </h2>
              <ul className="space-y-0">
                {[
                  "DGCA-aligned rigorous training standards",
                  "Instructors are active industry experts",
                  "Extensive hands-on flying experience",
                  "Exposure to real-world industrial projects",
                  "Dedicated career-focused placement assistance"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-6 border-t border-border pt-6 mt-0">
                    <span className="text-muted-foreground font-mono font-bold mt-1">0{i+1}</span>
                    <span className="text-lg text-foreground font-medium pb-6">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border flex items-center justify-center relative overflow-hidden">
               <div className="text-center z-10 relative">
                  <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
                  <div className="text-3xl font-bold font-mono text-foreground mb-2">SOARING</div>
                  <div className="text-primary font-mono tracking-[0.2em] text-lg">AEROTECH</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">MISSION ARCHIVES</div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Highway Survey & Mapping", img: "/images/project-road.png", metric: "60% faster" },
              { title: "Precision Agriculture", img: "/images/project-agri.png", metric: "18% yield increase" },
              { title: "Solar Plant Inspection", img: "/images/project-solar.png", metric: "450+ faults found" },
            ].map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-2xl mb-6 relative">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white text-sm font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                    {project.metric}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <Button variant="link" className="p-0 h-auto text-primary justify-start" data-testid={`btn-case-study-${i}`}>
                  View Case Study <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Student Testimonials */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label">WHAT STUDENTS SAY</div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: "Rahul Verma", role: "Commercial Drone Pilot", text: "The hands-on flight hours and expert instructors gave me the confidence to start my own aerial mapping business." },
              { name: "Sneha Patil", role: "GIS Analyst", text: "Soaring Aerotech bridged the gap between my academic knowledge and what the industry actually requires." },
              { name: "Amit Kumar", role: "Engineering Student", text: "The innovation lab provided me access to hardware and mentorship that transformed my final year project." }
            ].map((test, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                <div className="text-8xl font-black text-primary leading-none h-16 opacity-50">"</div>
                <p className="text-lg text-foreground font-medium mb-8 leading-relaxed">
                  {test.text}
                </p>
                <div className="w-12 h-px bg-border mb-6" />
                <div className="font-bold text-foreground">{test.name}</div>
                <div className="text-sm text-muted-foreground">{test.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="py-24 bg-white border-t-4 border-primary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
                Ready to Start Your Drone Journey?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <Link href="/training">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold" data-testid="btn-cta-enroll">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full text-base font-semibold border-border text-foreground hover:bg-muted" data-testid="btn-cta-talk">
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
