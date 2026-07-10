import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Newspaper, Trophy, ExternalLink, Award, ChevronLeft, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";

import imgDidiInitiative from "@/assets/didi-initiative.jpg";
import imgPilotAwareness from "@/assets/pilot-awareness.jpg";
import imgWomenEmpowerment from "@/assets/women-empowerment.jpg";
import imgSkilledWorkforce from "@/assets/skilled-workforce.jpg";
import imgMediaCoverage from "@/assets/media-coverage.jpg";
import imgTechAdoption from "@/assets/tech-adoption.jpg";
import imgDroneSolutions from "@/assets/drone-solutions.jpg";
import imgIndustryAcademia from "@/assets/industry-academia.jpg";
import imgRdInnovation from "@/assets/rd-innovation.jpg";

// New local assets for gallery, mentions, and awards
import imgNflTraining from "@/assets/nfl-training.jpg";
import imgDroneFieldDemo from "@/assets/drone-field-demo.jpg";
import imgDroneDidiGroup from "@/assets/drone-didi-group.jpg";
import imgNewsTearGas from "@/assets/news-tear-gas.png";
import imgNewsForestSecurity from "@/assets/news-forest-security.png";
import imgExhibitionBooth from "@/assets/exhibition-booth.jpg";
import imgSimulationLab from "@/assets/simulation-lab-project.jpg";
import imgSimulatorTraining2 from "@/assets/simulator-training-2.jpg";
import imgPoliceTraining from "@/assets/police-training.jpg";
import imgSolar from "@/assets/solar-project.jpg";
import imgAgriculture from "@/assets/agriculture-project.jpg";
import imgIndustrySurvey from "@/assets/industry-survey-construction.jpg";

const achievements = [
  {
    caption:
      "Successfully contributed to the Drone Didi Initiative, promoting women empowerment through drone technology training.",
    img: imgDidiInitiative,
    label: "Drone Didi Initiative",
  },
  {
    caption:
      "Recognized in leading newspapers such as Dainik Bhaskar, City Bhaskar, Yash Bharat, and other regional media platforms for innovative drone technology initiatives.",
    img: imgMediaCoverage,
    label: "Media Coverage",
  },
  {
    caption:
      "Conducted drone awareness and skill development programs focused on creating employment and entrepreneurship opportunities.",
    img: imgPilotAwareness,
    label: "Drone Awareness & Skill Development",
  },
  {
    caption:
      "Actively supporting women empowerment through drone pilot training and certification programs.",
    img: imgWomenEmpowerment,
    label: "Women Empowerment",
  },
  {
    caption:
      "Featured for contributions towards advancing drone technology adoption across various sectors.",
    img: imgTechAdoption,
    label: "Technology Adoption",
  },
  {
    caption:
      "Promoting drone-based solutions for infrastructure monitoring, surveying, agriculture, and industrial applications.",
    img: imgDroneSolutions,
    label: "Industry Applications",
  },
  {
    caption:
      "Working towards building a skilled workforce for India's rapidly growing drone ecosystem.",
    img: imgSkilledWorkforce,
    label: "Skilled Workforce Development",
  },
  {
    caption:
      "Recognized for industry-academia collaboration in drone research, training, and innovation.",
    img: imgIndustryAcademia,
    label: "Industry-Academia",
  },
  {
    caption:
      "Contributing to the development of next-generation UAV technologies through research and practical implementation.",
    img: imgRdInnovation,
    label: "R&D Innovation",
  },
  {
    caption:
      "Supporting government and industry initiatives through drone-based training and technology solutions.",
    img: imgExhibitionBooth,
    label: "Government Partnerships",
  },
];

export default function Media() {
  const mediaMentions = [
    {
      source: "Tech Crunch India",
      type: "Article",
      title:
        "Soaring Aerotech pioneers automated thermal inspections for solar parks.",
      date: "Nov 2024",
      img: imgSolar,
    },
    {
      source: "Aviation Week",
      type: "Interview",
      title:
        "Interview with CEO on the future of DGCA certified drone training in India.",
      date: "Oct 2024",
      img: imgDroneFieldDemo,
    },
    {
      source: "Startup India",
      type: "Recognition",
      title: "Recognized as Top 50 Aerospace Startups to watch in 2024.",
      date: "Aug 2024",
      img: imgTechAdoption,
    },
    {
      source: "The Economic Times",
      type: "Feature",
      title: "How drones are transforming Indian agriculture yields.",
      date: "Jul 2024",
      img: imgAgriculture,
    },
  ];

  const awards = [
    {
      title: "Best Aerospace Startup 2023",
      org: "State Tech Awards, Madhya Pradesh",
      img: imgSimulationLab,
    },
    {
      title: "Excellence in Drone Education",
      org: "AIC Prestige, Atal Innovation Mission",
      img: imgExhibitionBooth,
    },
    {
      title: "Top Innovator: Agri-Tech",
      org: "India Innovation Summit 2024",
      img: imgAgriculture,
    },
    {
      title: "DGCA Certified Premium Partner",
      org: "Directorate General of Civil Aviation",
      img: imgSkilledWorkforce,
    },
  ];

  const galleryItems = [
    { src: imgNflTraining, label: "NFL Corporate Drone Training" },
    { src: imgDroneFieldDemo, label: "DGCA Flight Field Demonstration" },
    { src: imgDroneDidiGroup, label: "Drone Didi Group Training Session" },
    { src: imgNewsTearGas, label: "Tear Gas Payload Testing Coverage" },
    { src: imgNewsForestSecurity, label: "Forest Fire Monitoring Coverage" },
    { src: imgExhibitionBooth, label: "National Drone Exhibition Booth" },
    { src: imgSimulationLab, label: "R&D Simulation & Testing Lab" },
    { src: imgSimulatorTraining2, label: "Flight Simulator Training Class" },
    { src: imgPoliceTraining, label: "Security & FPV Tactical Training" },
    { src: imgIndustrySurvey, label: "Industrial Survey & Mapping Operations" }
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryItems.length);
    }, 4000);
  };

  useEffect(() => {
    if (!paused) startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused]);

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
    if (!paused) startTimer();
  };

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
    if (!paused) startTimer();
  };

  return (
    <main className="min-h-screen pt-20">
      <SEO 
        title="Media Coverage & Awards"
        description="Read the latest news and press coverage about Soaring Aerotech. Discover our achievements, awards, and our contributions to the Drone Didi Initiative."
        keywords="drone startup news, Soaring Aerotech awards, Drone Didi Initiative training, drone technology adoption, aerospace startup India"
      />
      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] border-b border-border py-14">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">PRESS · AWARDS · GALLERY</div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Media & <span className="text-primary">Recognition</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-xl">
              Our journey covered by leading publications, and the awards that validate our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Achievements ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14">
            <div className="section-label">ACHIEVEMENTS</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Our Journey & Impact
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} border-b border-border`}
            >
              {/* Image side */}
              <div className="md:w-3/5 relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {item.label}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 text-white/20 font-display font-black text-5xl leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Text side */}
              <div className="md:w-2/5 flex items-center px-8 py-10 md:py-0 bg-white">
                <div>
                  <div className="w-8 h-px bg-primary mb-6" />
                  <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Media Mentions ────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">IN THE PRESS</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Media Mentions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaMentions.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={m.img}
                    alt={m.source}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/90 text-white text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded">
                      {m.type}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-muted-foreground uppercase mb-2">
                      {m.source} · {m.date}
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm leading-snug line-clamp-3">
                      {m.title}
                    </h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-xs text-primary font-bold">
                    <span>Read Article</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards & Recognition ─────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <div className="section-label">AWARDS</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">Awards & Recognition</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#F5F5F5] rounded-2xl overflow-hidden border border-border/80 flex flex-col"
              >
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary/95 text-white p-1.5 rounded-full inline-block">
                      <Trophy className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-foreground text-base leading-snug mb-1">
                      {a.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                      {a.org}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery Slider ──────────────────── */}
      <section className="py-20 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <div className="section-label">PHOTO GALLERY</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mt-2">
                Soaring Aerotech in Action
              </h2>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div 
            className="relative overflow-hidden rounded-3xl border border-border/80 shadow-md bg-white"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Slider track */}
            <div className="relative aspect-[16/10] md:aspect-[16/7] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 1.01 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <img
                    src={galleryItems[current].src}
                    alt={galleryItems[current].label}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle vignette/gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />
                  
                  {/* Slide text */}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white">
                    <div className="text-[10px] md:text-xs font-mono font-bold tracking-widest text-primary uppercase mb-2">
                      GALLERY ITEM {current + 1} OF {galleryItems.length}
                    </div>
                    <h3 className="font-display font-bold text-lg md:text-2xl tracking-wide max-w-2xl leading-snug">
                      {galleryItems[current].label}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {galleryItems.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (timerRef.current) clearInterval(timerRef.current);
                  setCurrent(i);
                  if (!paused) startTimer();
                }}
                className={`h-2 rounded-full transition-all duration-300 ${current === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/30"}`}
              />
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
