import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Award, ArrowRight, GraduationCap, Wrench, Lightbulb, Factory, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import dgcaLogo from "@/assets/dgca-logo.png";
import dpiitLogo from "@/assets/dpiit-logo.png";
import aicLogo from "@/assets/aic-logo.png";
import photoHimanshu from "@/assets/himanshu.jpeg";
import photoManoj from "@/assets/manoj.png";
import photoLalit from "@/assets/lalit.png";
import photoAditya from "@/assets/aditya.png";
import photoAbhishek from "@/assets/abhishek.png";
import photoVaibhav from "@/assets/team-vaibhav.png";
import photoAshish from "@/assets/ashish.png";
import photoAlisha from "@/assets/team-alisha.png";
import photoHarsh from "@/assets/team-harsh.jpeg";
import photoDevendra from "@/assets/team-devendra.jpg";
import imgStudentTraining from "@/assets/student-training.jpg";
import imgDroneSolutions from "@/assets/drone-services-pillar.png";
import imgRdInnovation from "@/assets/rd-innovation.jpg";
import imgTechAdoption from "@/assets/tech-adoption.jpg";
import imgManufacturing from "@/assets/uav-manufacturing.jpg";
import imgExhibitionBooth from "@/assets/exhibition-booth.jpg";
import imgDroneFieldDemo from "@/assets/drone-field-demo.jpg";
import imgAboutHeroTeam from "@/assets/about-hero-team.jpg";
import imgAboutTrainPillar from "@/assets/about-train-pillar.jpg";
import imgAboutInnovatePillar from "@/assets/rd-lab-drone.jpg";
import imgPrestigeLogo from "@/assets/prestige-logo.png";
import imgPrestigeInspiration from "@/assets/prestige-inspiration.jpg";
import imgPrestigeLeaders from "@/assets/prestige-leaders.png";

const pillars = [
  {
    n: "01", tag: "TRAIN", icon: <GraduationCap className="w-6 h-6" />, title: "RPTO Training",
    items: ["DGCA RPTO", "8 Programs", "RPC Certification", "Corporate Training"],
    img: imgAboutTrainPillar,
    desc: "India's most comprehensive DGCA-approved pilot training ecosystem, producing certified drone operators for every sector.",
    link: "/training"
  },
  {
    n: "02", tag: "SOLVE", icon: <Wrench className="w-6 h-6" />, title: "Drone Services",
    items: ["Survey & Mapping", "AI Surveillance", "Solar Inspection", "Custom Solutions"],
    img: imgDroneSolutions,
    desc: "End-to-end aerial intelligence solutions deployed across government, energy, agriculture, and defence sectors.",
    link: "/services"
  },
  {
    n: "03", tag: "INNOVATE", icon: <Lightbulb className="w-6 h-6" />, title: "R&D",
    items: ["Disaster UAVs", "Tethered Drones", "AI/ML Systems", "Payload Dev"],
    img: imgAboutInnovatePillar,
    desc: "Active research into disaster-response UAVs, AI/ML drone systems, and advanced payload engineering for next-gen applications.",
    link: "/innovation-lab"
  },
  {
    n: "04", tag: "BUILD", icon: <Factory className="w-6 h-6" />, title: "Manufacturing",
    items: ["50,000 sq ft", "Defence Drones", "Logistics UAVs", "Intl. Collabs"],
    img: imgManufacturing,
    desc: "50,000 sq ft state-of-the-art facility producing indigenous UAVs for defence, logistics, and commercial applications.",
    link: "/innovation-lab"
  },
];

const creds = [
  {
    logo: dgcaLogo,
    title: "DGCA Approved RPTO",
    desc: "Authorized Remote Pilot Training Organisation",
    bg: "bg-white",
  },
  {
    logo: dpiitLogo,
    title: "Startup India",
    desc: "DPIIT recognised startup under Government of India",
    bg: "bg-white",
  },
  {
    logo: (
      <div className="flex flex-col items-center justify-center text-primary">
        <ShieldCheck className="w-8 h-8 sm:w-12 sm:h-12" />
        <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider mt-0.5 sm:mt-1 text-foreground/80">PVT. LTD.</span>
      </div>
    ),
    title: "Incorporated Pvt. Ltd.",
    desc: "Registered under the Ministry of Corporate Affairs, Govt. of India",
    bg: "bg-white",
  },
  {
    logo: aicLogo,
    title: "AIC Prestige",
    desc: "Atal Incubation Centre — NITI Aayog, Govt. of India",
    bg: "bg-white",
  },
];

const directors = [
  {
    name: "Mr. Himanshu Jain",
    role: "Director",
    img: photoHimanshu,
    quote: "We are building a complete drone innovation ecosystem — from R&D to manufacturing for civil and defence applications.",
  },
  {
    name: "Dr. Manojkumar Deshpande",
    role: "Director",
    img: photoManoj,
    quote: "Our 50,000 sq ft facility and active defence UAV R&D positions Soaring Aerotech as a full-cycle drone technology company.",
  },
];

const teamMembers = [
  {
    name: "Mr. Lalit Nagapurkar",
    role: "R&D Manager & Drone Instructor",
    img: photoLalit,
  },
  {
    name: "Mr. Aditya Agrawal",
    role: "Drone Instructor & Accountable Manager",
    img: photoAditya,
  },
  {
    name: "Mr. Vaibhav Sawarkar",
    role: "Business Development Executive",
    img: photoVaibhav,
  },
  {
    name: "Mr. Abhishek Chourasiya",
    role: "R&D Engineer & Remote Pilot",
    img: photoAbhishek,
  },
  {
    name: "Mr. Ashish Bamnawat",
    role: "Training Co-coordinator & Remote Pilot",
    img: photoAshish,
  },
];

const softwareTeam = [
  
  {
    name: "Mr. Harsh Sahu",
    role: "Software Engineer",
    img: photoHarsh,
  },
  {
    name: "Mr. Devendra Singh Sengar",
    role: "Software Engineer",
    img: photoDevendra,
  },
  {
    name: "Ms. Alisha Batham",
    role: "Software Engineer",
    img: photoAlisha,
  },
];

export default function About() {
  return (
    <main className="min-h-screen pt-16 sm:pt-20">
      <SEO
        title="About Us"
        description="Learn more about Soaring Aerotech Pvt. Ltd., Central India's complete drone ecosystem. From DGCA training to commercial UAV services and advanced defence manufacturing."
        keywords="about Soaring Aerotech, drone startup Indore, Himanshu Jain, Manojkumar Deshpande, UAV team, RPTO Madhya Pradesh, drone developers"
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] border-b border-border py-8 sm:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
              <div className="section-label">OUR STORY</div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4">
                Central India's Complete<br /><span className="text-primary">Drone Company.</span>
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base max-w-lg mb-6">
                Training the pilots. Flying the missions. Researching the future. Manufacturing the machines — all from Madhya Pradesh.
              </p>
              <div className="flex flex-wrap gap-2">
                {["100+ Pilots Trained", "50,000 sqft Facility", "8+ Programs", "DGCA Approved"].map((b, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full bg-white border border-border text-foreground/60 text-xs font-medium">{b}</span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] mt-8 lg:mt-0 block"
            >
              <img src={imgAboutHeroTeam} alt="Drone operations" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Story section ────────────────────────── */}
      <section className="py-8 sm:py-16 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div>
              <div className="section-label">OUR STORY</div>
              <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-foreground mb-4">Born in Central India. Built for the World.</h2>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-3">
                Soaring Aerotech was founded with a single mission: build India's most complete drone ecosystem from the ground up. What started as a DGCA training organisation in Indore has grown into a full-cycle company encompassing pilot training, commercial drone services, active R&D, and indigenous UAV manufacturing.
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-4">
                Operating from a 50,000 sq ft facility in Madhya Pradesh, we serve government bodies, defence organisations, agriculture firms, solar companies, and infrastructure builders — delivering precision aerial intelligence and purpose-built UAVs.
              </p>
            </div>
            <div className="relative w-full">
              <img
                src={imgDroneFieldDemo}
                alt="Drone operations"
                className="w-full h-44 sm:h-64 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Inspiration ──────────────────────── */}
      <section className="py-8 sm:py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="section-label">OUR INSPIRATION</div>
              <h2 className="font-display text-xl sm:text-3xl md:text-4xl text-foreground mb-4 sm:mb-6">
                Powered by the Legacy of <br className="hidden sm:inline" /><span className="text-primary">Prestige Group</span>
              </h2>
              
              <div className="flex items-center gap-3 sm:gap-6 mb-5">
                <div className="bg-white border border-border rounded-xl p-2 sm:p-3 w-24 sm:w-36 flex items-center justify-center shrink-0">
                  <img src={imgPrestigeLogo} alt="Prestige Group Logo" className="max-h-8 sm:max-h-12 w-auto object-contain" />
                </div>
                <div className="text-muted-foreground text-[10px] sm:text-xs font-mono uppercase tracking-wider leading-snug">
                  Nurturing Excellence<br />& Innovation
                </div>
              </div>
              
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4">
                Soaring Aerotech proudly operates under the Prestige Group, drawing inspiration from its long-standing commitment to excellence, innovation, and transformative education. The Group's vision of nurturing future-ready talent and fostering technological advancement serves as the foundation of our journey.
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed">
                With this strong legacy behind us, we continue to advance drone technology, aerospace innovation, industry-driven training, and research that creates meaningful impact across industries.
              </p>
            </div>

            <div className="lg:col-span-5 w-full">
              <div className="aspect-[16/10] lg:aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-md border border-border bg-white">
                <img
                  src={imgPrestigeInspiration}
                  alt="Prestige Group Meeting and Inspiration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* Full-width Prestige Leaders Grid */}
          <div className="mt-8 pt-8 border-t border-border/60">
            <div className="text-center mb-6">
              <h3 className="font-display text-lg sm:text-xl md:text-2xl text-foreground font-semibold">
                Prestige Group Leadership
              </h3>
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm border border-border bg-white p-3 sm:p-6 hover:shadow-md transition-shadow">
              <img
                src={imgPrestigeLeaders}
                alt="Prestige Group Leadership & Board of Directors"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </section>
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="section-label">FOUR PILLARS</div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground">Everything We Do</h2>
            </div>
          </div>
          <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <Link key={i} href={p.link} className="block shrink-0 w-[80vw] max-w-[320px] sm:w-auto sm:max-w-none snap-center">
                <div
                  className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] w-full"
                >
                  <img src={p.img} alt={p.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/10" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">{p.tag}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="text-white/20 font-display font-black text-4xl leading-none mb-1 select-none">{p.n}</div>
                    <h3 className="font-display text-xl text-white leading-tight mb-2">{p.title}</h3>
                    <div className="flex items-center gap-1.5 text-white/60 text-sm">Learn more <ArrowRight className="w-3.5 h-3.5" /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership & Team ──────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">

          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-label justify-center">PEOPLE BEHIND SOARING</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
              Leadership & Expert Team
            </h2>
            <p className="text-muted-foreground text-sm">
              Meet the visionaries, R&D engineers, and certified instructors building Central India's premier drone ecosystem.
            </p>
          </div>

          {/* Directors Grid */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-6 text-center">
              Board of Directors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {directors.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-row hover:-translate-y-1"
                >
                  <div className="w-24 xs:w-28 sm:w-36 md:w-40 relative shrink-0 overflow-hidden bg-slate-100">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-3.5 xs:p-4 sm:p-5 flex flex-col justify-center flex-1">
                 
                    <blockquote className="text-xs sm:text-sm text-foreground/75 italic mb-2 sm:mb-3 leading-relaxed">
                      "{d.quote}"
                    </blockquote>
                    <div className="font-display font-bold text-foreground text-sm sm:text-base leading-tight">
                      {d.name}
                    </div>
                    <div className="text-[9px] sm:text-xs text-primary font-mono tracking-wide mt-0.5 uppercase">
                      {d.role}, SOARING AEROTECH PVT. LTD.
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Team Grid */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-6 text-center">
              Core Engineering & Training Team
            </h3>
            <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {teamMembers.map((m, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 shrink-0 w-[60vw] max-w-[220px] sm:w-auto sm:max-w-none snap-center"
                >
                  <div className="relative h-44 sm:h-64 overflow-hidden bg-slate-100">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="font-display font-bold text-foreground text-sm sm:text-lg leading-tight">
                      {m.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-primary font-mono tracking-wide mt-1 uppercase">
                      {m.role}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-medium">
                      Soaring Aerotech Pvt. Ltd.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Department Grid */}
          <div className="max-w-5xl mx-auto mt-16">
            <h3 className="text-xs font-mono font-bold tracking-widest text-primary uppercase mb-6 text-center">
              Software Department
            </h3>
            <div className="flex sm:grid overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:justify-center">
              {softwareTeam.map((m, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 shrink-0 w-[60vw] max-w-[220px] sm:w-auto sm:max-w-none snap-center"
                >
                  <div className="relative h-44 sm:h-64 overflow-hidden bg-slate-100">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="font-display font-bold text-foreground text-sm sm:text-lg leading-tight">
                      {m.name}
                    </div>
                    <div className="text-[10px] sm:text-xs text-primary font-mono tracking-wide mt-1 uppercase">
                      {m.role}
                    </div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-medium">
                      Soaring Aerotech Pvt. Ltd.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Credentials with logos ───────────────── */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-2">CREDENTIALS & AFFILIATIONS</div>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Recognised By India's Leading Bodies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {creds.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-3 sm:p-6 rounded-2xl bg-white border border-border text-center hover:border-primary/30 hover:shadow-md transition-all flex flex-col items-center gap-2 sm:gap-4"
              >
                <div className={`w-full h-16 sm:h-24 rounded-xl ${c.bg} flex items-center justify-center overflow-hidden p-2 sm:p-3 border border-border/50`}>
                  {typeof c.logo === "string" ? (
                    <img src={c.logo} alt={c.title} className="max-h-12 sm:max-h-18 max-w-[95%] sm:max-w-[90%] object-contain" />
                  ) : (
                    c.logo
                  )}
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-foreground mb-1">{c.title}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground leading-snug">{c.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visual CTA ───────────────────────────── */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src={imgDroneFieldDemo} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-3">Ready to be part of India's<br /><span className="text-primary">Drone Revolution?</span></h2>
          <p className="text-white/50 mb-6 max-w-md mx-auto text-sm">Join 500+ certified pilots or bring your enterprise projects to us.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/training"><Button size="lg" className="rounded-full px-8 h-12 font-bold">Get Certified</Button></Link>
            <Link href="/contact"><Button size="lg" variant="outline" className="rounded-full px-8 h-12 font-bold border-white/20 text-white hover:bg-white/10">Contact Us</Button></Link>
          </div>
        </div>
      </section>

    </main>
  );
}
