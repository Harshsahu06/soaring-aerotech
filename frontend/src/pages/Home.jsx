import { Link } from "wouter";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Wrench,
  Lightbulb,
  Factory,
  ArrowDown,
  MapPin,
  Award,
  Quote,
  Phone,
  Newspaper,
  Tv,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import photoHimanshu from "@/assets/himanshu.png";
import photoManoj from "@/assets/manoj.png";
import logoNhai from "@/assets/nhai-logo.png";
import logoMprdc from "@/assets/mprdc-logo.png";
import logoMpeb from "@/assets/mpeb-logo.png";
import logoIitIndore from "@/assets/iit-indore-logo.png";
import logoIitGandhinagar from "@/assets/iit-gandhinagar-logo.png";
import logoDgca from "@/assets/dgca-logo.png";
import logoDpiit from "@/assets/dpiit-logo.png";
import logoMsme from "@/assets/msme-logo.png";
import logoAic from "@/assets/aic-logo.png";

// New Gallery Image Imports
import imgNflTraining from "@/assets/nfl-training.jpg";
import imgDroneFieldDemo from "@/assets/drone-field-demo.jpg";
import imgDroneDidiGroup from "@/assets/drone-didi-group.jpg";
import imgNewsTearGas from "@/assets/news-tear-gas.png";
import imgNewsForestSecurity from "@/assets/news-forest-security.png";

const galleryRow1 = [
  {
    src: imgNflTraining,
    label: "NFL Corporate Training",
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=480&h=320&fit=crop",
    label: "Aerial Survey",
  },
  {
    src: imgDroneFieldDemo,
    label: "Field Demonstration",
  },
  {
    src: "https://images.unsplash.com/photo-1579829366561-207feb2ee402?w=480&h=320&fit=crop",
    label: "Precision Mapping",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=480&h=320&fit=crop",
    label: "Manufacturing",
  },
  {
    src: imgNewsTearGas,
    label: "Media: Patrika News",
  },
  {
    src: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=480&h=320&fit=crop",
    label: "Aerial Imaging",
  },
];

const galleryRow2 = [
  {
    src: "https://images.unsplash.com/photo-1601979031925-424e53b6caaa?w=480&h=320&fit=crop",
    label: "DGCA Training",
  },
  {
    src: imgDroneDidiGroup,
    label: "Drone Didi Program",
  },
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=480&h=320&fit=crop",
    label: "Solar Inspection",
  },
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=480&h=320&fit=crop",
    label: "R&D Lab",
  },
  {
    src: imgNewsForestSecurity,
    label: "Media: Forest Security",
  },
  {
    src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=480&h=320&fit=crop",
    label: "UAV Build",
  },
  {
    src: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=480&h=320&fit=crop",
    label: "Agriculture Mission",
  },
  {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=480&h=320&fit=crop",
    label: "Tower Inspection",
  },
];

function Marquee({
  items,
  reverse = false,
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        className="flex gap-4 w-max"
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="relative w-72 h-48 rounded-2xl overflow-hidden shrink-0 group"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/40 transition-colors duration-300" />
            <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xs font-semibold font-mono bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return (
    <div ref={ref}>
      {count}
      {suffix}
    </div>
  );
}

const pillars = [
  {
    icon: <GraduationCap className="w-7 h-7" />,
    tag: "TRAIN",
    title: "DGCA Pilot Training",
    desc: "India's premier DGCA-approved RPTO offering 8 specialized drone pilot programs. Get your Remote Pilot Certificate and fly commercially.",
    points: [
      "DGCA Certified RPTO",
      "8 Specialized Programs",
      "RPC Certification",
      "Corporate Batches",
    ],
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=700&h=460&fit=crop",
    link: "/training",
  },
  {
    icon: <Wrench className="w-7 h-7" />,
    tag: "SERVE",
    title: "Drone Services",
    desc: "End-to-end aerial solutions for government, enterprise, and defence. Survey, map, inspect, and surveil with precision-grade UAVs.",
    points: [
      "Survey & Mapping",
      "AI Surveillance",
      "Solar Inspection",
      "Agricultural Missions",
    ],
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=700&h=460&fit=crop",
    link: "/services",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    tag: "INNOVATE",
    title: "R&D & Innovation",
    desc: "Cutting-edge research into disaster UAVs, AI/ML drone systems, tethered platforms, and advanced payload engineering.",
    points: [
      "Disaster UAVs",
      "AI/ML Systems",
      "Tethered Drones",
      "Quantum Research",
    ],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=460&fit=crop",
    link: "/innovation-lab",
  },
  {
    icon: <Factory className="w-7 h-7" />,
    tag: "BUILD",
    title: "UAV Manufacturing",
    desc: "50,000 sq ft state-of-the-art facility producing indigenous defence drones, logistics UAVs, and custom platforms for national projects.",
    points: [
      "50,000 sq ft Facility",
      "Defence Drones",
      "Logistics UAVs",
      "International Collabs",
    ],
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=700&h=460&fit=crop",
    link: "/about",
  },
];

const stats = [
  { target: 1000, suffix: "+", label: "Pilots Trained", sub: "DGCA Certified" },
  {
    target: 50,
    suffix: "K sqft",
    label: "Manufacturing",
    sub: "State-of-the-Art Facility",
  },
  {
    target: 100,
    suffix: "+",
    label: "Drone Missions",
    sub: "Completed Projects",
  },
  {
    target: 20,
    suffix: "+",
    label: "Industry Partners",
    sub: "Govt · Defence · Enterprise",
  },
];

const partners = [
  {
    name: "NHAI",
    full: "National Highways Authority of India",
    type: "Client",
    logo: logoNhai,
  },
  {
    name: "MPRDC",
    full: "MP Road Development Corporation",
    type: "Client",
    logo: logoMprdc,
  },
  {
    name: "MPEB",
    full: "MP Electricity Board",
    type: "Client",
    logo: logoMpeb,
  },
  {
    name: "IIT Indore",
    full: "Indian Institute of Technology, Indore",
    type: "Academic",
    logo: logoIitIndore,
  },
  {
    name: "IIT Gandhinagar",
    full: "Indian Institute of Technology, Gandhinagar",
    type: "Academic",
    logo: logoIitGandhinagar,
  },
  {
    name: "MP Police",
    full: "Madhya Pradesh Police",
    type: "Govt.",
  },
  {
    name: "Smart City",
    full: "Smart Cities Mission, Govt. of India",
    type: "Govt.",
  },
  {
    name: "DRDO",
    full: "Defence R&D Organisation",
    type: "Defence",
  },
  {
    name: "DGCA",
    full: "Directorate General of Civil Aviation",
    type: "Regulator",
    logo: logoDgca,
  },
  {
    name: "AIC Prestige",
    full: "Atal Incubation Centre — NITI Aayog",
    type: "Incubator",
    logo: logoAic,
  },
  {
    name: "Startup India",
    full: "Govt. of India Initiative",
    type: "Government",
    logo: logoDpiit,
  },
  {
    name: "MSME",
    full: "Ministry of MSME",
    type: "Government",
    logo: logoMsme,
  },
];

const projects = [
  {
    cat: "NHAI · SURVEY & MAPPING",
    title: "NHAI Highway Corridor Mapping",
    result: "200+ km mapped with ±2cm accuracy",
    img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
  },
  {
    cat: "MPRDC · ROAD SURVEY",
    title: "MPRDC State Highway Survey",
    result: "GIS-ready outputs delivered on schedule",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
  },
  {
    cat: "MPEB · INSPECTION",
    title: "MPEB Power Grid Inspection",
    result: "Fault detection without line shutdown",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
  },
  {
    cat: "GOVT. INITIATIVE",
    title: "Drone Didi — Women Pilot Program",
    result: "Rural women trained & deployed",
    img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=600&h=400&fit=crop",
  },
  {
    cat: "SMART CITY · SURVEY",
    title: "Smart City Urban Survey",
    result: "3D city model for urban planning",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
  },
];

const directors = [
  {
    name: "Mr. Himanshu Jain",
    role: "Director",
    quote:
      "We are building a complete drone innovation ecosystem — from R&D to manufacturing to defence applications.",
    img: photoHimanshu,
  },
  {
    name: "Dr Manojkumar Deshpande",
    role: "Director",
    quote:
      "Our 50,000 sq ft facility and active defence UAV R&D positions Soaring Aerotech as a full-cycle drone technology company.",
    img: photoManoj,
  },
];

const testimonials = [
  {
    name: "Rahul Verma",
    role: "DGCA Certified Pilot",
    text: "Cleared RPC in first attempt. Now flying commercially full-time in MP.",
    span: "md:col-span-2",
  },
  {
    name: "Sneha Patil",
    role: "Agricultural Drone Operator",
    text: "Connected my farming background with drone technology.",
    span: "",
  },
  {
    name: "Amit Kumar",
    role: "Engineering Graduate",
    text: "Real defence drone hardware access — nowhere else in Central India.",
    span: "",
  },
  {
    name: "Priya Desai",
    role: "GIS Analyst",
    text: "The mapping & GIS course gave me a career shift I didn't expect.",
    span: "md:col-span-2",
  },
];

const homeIndustries = [
  {
    label: "Agriculture & Farming",
    img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=1000&fit=crop",
  },
  {
    label: "Defence & Security",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=1000&fit=crop",
  },
  {
    label: "Survey & Mapping",
    img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1000&fit=crop",
  },
  {
    label: "Solar & Energy",
    img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=1000&fit=crop",
  },
  {
    label: "Infrastructure",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=1000&fit=crop",
  },
  {
    label: "Construction",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=1000&fit=crop",
  },
  {
    label: "Government & Smart Cities",
    img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=1000&fit=crop",
  },
  {
    label: "Power & Utilities",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=1000&fit=crop",
  },
];

function IndustriesSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="py-20 bg-white border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading + numbered list */}
          <div>
            <div className="section-label">WHO WE SERVE</div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              Industries We Power
            </h2>
            <div className="divide-y divide-border">
              {homeIndustries.map((ind, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full flex items-center justify-between py-4 text-left transition-colors ${active === i ? "text-foreground" : "text-foreground/35 hover:text-foreground/65"}`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`text-xs font-mono tabular-nums ${active === i ? "text-primary" : "text-foreground/20"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-display text-lg leading-tight ${active === i ? "font-semibold" : "font-normal"}`}
                    >
                      {ind.label}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-opacity ${active === i ? "text-primary opacity-100" : "opacity-0"}`}
                  />
                </button>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm"
              >
                View All 12 Industries <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          {/* Right: active image card */}
          <div className="sticky top-24">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-3xl aspect-[4/3]"
            >
              <img
                src={homeIndustries[active].img}
                alt={homeIndustries[active].label}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/10" />
              <div className="absolute top-5 left-5">
                <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">
                  INDUSTRY
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-display text-3xl text-white leading-tight">
                  {homeIndustries[active].label}
                </h3>
                <p className="text-white/50 text-sm mt-2">
                  UAV intelligence solutions
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [telemetry, setTelemetry] = useState({
    altitude: 120.4,
    velocity: 14.8,
    lat: 22.7196,
    lng: 75.8577,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTelemetry((prev) => ({
        altitude: +(prev.altitude + (Math.random() * 0.4 - 0.2)).toFixed(1),
        velocity: +(prev.velocity + (Math.random() * 0.6 - 0.3)).toFixed(1),
        lat: +(prev.lat + (Math.random() * 0.0002 - 0.0001)).toFixed(4),
        lng: +(prev.lng + (Math.random() * 0.0002 - 0.0001)).toFixed(4),
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* ── Hero ───────  const [activeMode, setActiveMode] = useState("academy");
  const [selectedSpec, setSelectedSpec] = useState("autopilot");

  return (
    <main className="min-h-screen">
      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-[#02040a] text-white">
        
        {/* Soft, professional background gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Central ambient glow behind the content */}
          <motion.div 
            animate={{ 
              scale: [1, 1.08, 0.96, 1],
              opacity: [0.25, 0.4, 0.3, 0.25]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ 
              scale: [0.95, 1.1, 1, 0.95],
              opacity: [0.15, 0.3, 0.2, 0.15]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px]"
          />

          {/* Clean CAD dot grid */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:32px_32px] opacity-80" />

          {/* Fine structural lines */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
          <div className="absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
          <div className="absolute right-12 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center flex flex-col items-center">
          
          {/* Centered Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-bold font-mono tracking-[0.25em] text-slate-300">
              ✦ SYSTEM STATUS: NOMINAL // ONLINE
            </span>
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-8xl leading-[1.02] mb-6 tracking-tight max-w-5xl"
          >
            SOARING AEROTECH
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-500 to-amber-500 font-extrabold shadow-sm">
              AEROSPACE SYSTEM PORTAL
            </span>
          </motion.h1>

          {/* Subtitle description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-slate-400 text-xs sm:text-sm md:text-base mb-10 leading-relaxed max-w-2xl font-mono uppercase tracking-wider"
          >
            Madhya Pradesh's premier DGCA certified drone pilot academy, defense-grade UAV manufacturing, and strategic mapping network.
          </motion.p>

          {/* Tactical Mode Selector Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md"
          >
            <button
              onClick={() => setActiveMode("academy")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                activeMode === "academy"
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              [ 01 / PILOT ACADEMY ]
            </button>
            <button
              onClick={() => setActiveMode("manufacturing")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                activeMode === "manufacturing"
                  ? "bg-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              [ 02 / UAV ENGINEERING ]
            </button>
            <button
              onClick={() => setActiveMode("operations")}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                activeMode === "operations"
                  ? "bg-amber-500 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              [ 03 / AERIAL MISSION CONTROL ]
            </button>
          </motion.div>

          {/* Interactive Widescreen Control Dashboard */}
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-[0_0_80px_rgba(0,0,0,0.9)] p-6 md:p-8 relative min-h-[440px] flex items-center"
          >
            {/* Ambient inner console glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />

            <div className="grid md:grid-cols-12 gap-8 items-center text-left w-full">
              
              {/* Dynamic Interactive Left Panel depending on activeMode */}
              <div className="md:col-span-7">
                {activeMode === "academy" && (
                  <div className="relative aspect-[16/10] bg-[#020408] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-center items-center p-6">
                    {/* Decorative cyber grid background */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c101b_1px,transparent_1px),linear-gradient(to_bottom,#0c101b_1px,transparent_1px)] [background-size:24px_24px]" />
                    
                    {/* Dynamic scan line */}
                    <motion.div
                      animate={{ translateY: ["0px", "240px", "0px"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-px bg-emerald-500/20 shadow-[0_0_10px_#10b981] pointer-events-none"
                    />
                    
                    {/* Regional Grid Dots */}
                    <svg className="w-full h-full max-h-[200px] text-slate-700 relative z-10" viewBox="0 0 300 200" fill="none">
                      {/* Regional borders simulated */}
                      <path d="M50 50 L120 25 L200 40 L250 80 L210 160 L120 180 L40 120 Z" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3 3" />
                      
                      {/* Indore Training Node */}
                      <g>
                        <circle cx="80" cy="110" r="10" className="fill-emerald-500/10 stroke-emerald-400 stroke-1 animate-ping" />
                        <circle cx="80" cy="110" r="4" className="fill-emerald-400" />
                        <text x="92" y="113" fill="#cbd5e1" fontSize="9" fontFamily="monospace">INDORE_RPTO</text>
                      </g>
                      
                      {/* Bhopal Training Node */}
                      <g>
                        <circle cx="150" cy="95" r="10" className="fill-emerald-500/10 stroke-emerald-400 stroke-1 animate-ping" style={{ animationDelay: "1s" }} />
                        <circle cx="150" cy="95" r="4" className="fill-emerald-400" />
                        <text x="162" y="98" fill="#cbd5e1" fontSize="9" fontFamily="monospace">BHOPAL_RPTO</text>
                      </g>

                      {/* Jabalpur Training Node */}
                      <g>
                        <circle cx="210" cy="120" r="10" className="fill-emerald-500/10 stroke-emerald-400 stroke-1 animate-ping" style={{ animationDelay: "2s" }} />
                        <circle cx="210" cy="120" r="4" className="fill-emerald-400" />
                        <text x="222" y="123" fill="#cbd5e1" fontSize="9" fontFamily="monospace">JABALPUR_RPTO</text>
                      </g>
                    </svg>
                    <div className="absolute bottom-4 left-4 text-[9px] font-mono text-emerald-400">
                      GPS_REF_STATIONS: OK // 3 ACTIVE TRAINING CENTERS
                    </div>
                  </div>
                )}

                {activeMode === "manufacturing" && (
                  <div className="relative aspect-[16/10] bg-[#020408] rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-center items-center p-6">
                    {/* Decorative blueprint grids */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(34,211,238,0.02)_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    {/* Interactive Blueprint Vector Drawing */}
                    <svg viewBox="0 0 200 200" className="w-full h-full text-slate-500 max-h-[220px] relative z-10" fill="none" stroke="currentColor" strokeWidth="0.75">
                      {/* Frame structural vectors */}
                      <line x1="100" y1="100" x2="50" y2="50" strokeWidth="1" stroke="rgba(255,255,255,0.15)" />
                      <line x1="100" y1="100" x2="150" y2="50" strokeWidth="1" stroke="rgba(255,255,255,0.15)" />
                      <line x1="100" y1="100" x2="50" y2="150" strokeWidth="1" stroke="rgba(255,255,255,0.15)" />
                      <line x1="100" y1="100" x2="150" y2="150" strokeWidth="1" stroke="rgba(255,255,255,0.15)" />
                      
                      {/* Central core hub */}
                      <circle cx="100" cy="100" r="22" fill="#030712" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="100" cy="100" r="10" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="3 2" />

                      {/* Rotating Propellers simulation */}
                      <circle cx="50" cy="50" r="18" stroke="currentColor" strokeDasharray="3 3" className="animate-[spin_6s_linear_infinite]" />
                      <circle cx="50" cy="50" r="2" fill="currentColor" />
                      
                      <circle cx="150" cy="50" r="18" stroke="currentColor" strokeDasharray="3 3" className="animate-[spin_6s_linear_infinite_reverse]" />
                      <circle cx="150" cy="50" r="2" fill="currentColor" />
                      
                      <circle cx="50" cy="150" r="18" stroke="currentColor" strokeDasharray="3 3" className="animate-[spin_6s_linear_infinite_reverse]" />
                      <circle cx="50" cy="150" r="2" fill="currentColor" />
                      
                      <circle cx="150" cy="150" r="18" stroke="currentColor" strokeDasharray="3 3" className="animate-[spin_6s_linear_infinite]" />
                      <circle cx="150" cy="150" r="2" fill="currentColor" />

                      {/* Interactive Spec Nodes */}
                      {/* Node 1: Autopilot */}
                      <g className="cursor-pointer" onClick={() => setSelectedSpec("autopilot")}>
                        <circle cx="100" cy="100" r="7" className="fill-cyan-500/20 stroke-cyan-400 stroke-1 animate-pulse" />
                        <text x="96" y="103" fill="#22d3ee" fontSize="10" fontWeight="bold">+</text>
                      </g>
                      
                      {/* Node 2: Propulsion */}
                      <g className="cursor-pointer" onClick={() => setSelectedSpec("propulsion")}>
                        <circle cx="150" cy="50" r="7" className="fill-cyan-500/20 stroke-cyan-400 stroke-1 animate-pulse" />
                        <text x="146" y="53" fill="#22d3ee" fontSize="10" fontWeight="bold">+</text>
                      </g>

                      {/* Node 3: Payload */}
                      <g className="cursor-pointer" onClick={() => setSelectedSpec("payload")}>
                        <circle cx="100" cy="122" r="7" className="fill-cyan-500/20 stroke-cyan-400 stroke-1 animate-pulse" />
                        <text x="96" y="125" fill="#22d3ee" fontSize="10" fontWeight="bold">+</text>
                      </g>
                    </svg>

                    <div className="absolute bottom-4 left-4 text-[9px] font-mono text-cyan-400 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                      MODEL: HEXA_UAV_STRUCTURE // CLICK HOTSPOTS
                    </div>
                  </div>
                )}

                {activeMode === "operations" && (
                  <div className="relative aspect-[16/10] bg-[#020408] rounded-2xl border border-white/5 overflow-hidden p-6 flex flex-col justify-between">
                    {/* Tactical radar grids */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(245,158,11,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />
                    
                    <div className="flex justify-between items-start z-10">
                      <div className="text-[9px] font-mono text-amber-500 uppercase tracking-wider">
                        Tactical Map Tracker
                      </div>
                      <div className="text-[9px] font-mono text-slate-400 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
                        SATELLITE_LINK: ESTABLISHED
                      </div>
                    </div>

                    {/* Sweeping radar graphics */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-25 pointer-events-none">
                      <svg className="w-[160px] h-[160px] text-amber-500" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_50s_linear_infinite]" />
                        <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="0.25" />
                        <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.25" />
                        <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.25" />
                      </svg>
                    </div>

                    {/* Flight coordinates overlay */}
                    <div className="z-10 bg-black/70 border border-white/10 p-3 rounded-lg backdrop-blur-md font-mono text-[9px] text-slate-300 w-[180px] space-y-1.5 shadow-xl">
                      <div>COORD_LAT: {telemetry.lat.toFixed(4)}°N</div>
                      <div>COORD_LNG: {telemetry.lng.toFixed(4)}°E</div>
                      <div>CURR_ALT: {telemetry.altitude} m</div>
                      <div>CURR_VEL: {telemetry.velocity} m/s</div>
                    </div>

                    <div className="z-10 flex justify-between items-end">
                      <span className="text-[8px] font-mono text-amber-500/60 uppercase">ACTIVE_MISSION: SURVEY_TRACKING</span>
                      <span className="text-[8px] font-mono text-slate-400">FLIGHT_ID: SOAR_94</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Dynamic Right Panel depending on activeMode */}
              <div className="md:col-span-5">
                {activeMode === "academy" && (
                  <div className="flex flex-col justify-between h-full space-y-6">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white mb-2 font-mono">[ DGCA TRAINING ACADEMY ]</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Become a professional certified drone pilot. We operate top-tier DGCA-approved Remote Pilot Training Organizations (RPTO) across Madhya Pradesh.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                          <div className="text-[9px] font-mono text-slate-400 uppercase">CERTIFIED PILOTS</div>
                          <div className="text-2xl font-black text-emerald-400 mt-1 font-mono">1,250+</div>
                        </div>
                        <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl">
                          <div className="text-[9px] font-mono text-slate-400 uppercase">EXAM SUCCESS</div>
                          <div className="text-2xl font-black text-white mt-1 font-mono">99.4%</div>
                        </div>
                      </div>

                      <div className="border border-white/10 rounded-xl p-3 bg-white/[0.01] flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-mono">COURSES:</span>
                        <span className="font-bold text-white font-mono">RPC BASIC, AGRI & MAPPING</span>
                      </div>
                    </div>

                    <Link href="/training">
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-xs font-mono uppercase tracking-wider h-11 rounded-lg">
                        Apply For Pilot Certification
                      </Button>
                    </Link>
                  </div>
                )}

                {activeMode === "manufacturing" && (
                  <div className="flex flex-col justify-between h-full space-y-6">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white mb-2 font-mono">[ UAV ENGINEERING HUB ]</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Aerospace-grade UAV design and assembly. We build industrial payload drone systems tailored for defense, agriculture, and high-altitude mapping.
                      </p>
                    </div>

                    {/* Hotspot details panel */}
                    <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl min-h-[145px] flex flex-col justify-between">
                      <div>
                        <div className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest mb-1">SELECTED COMPONENT</div>
                        <div className="text-base font-bold text-white mb-1.5">
                          {selectedSpec === "autopilot" && "SA-FLIGHT AUTOPILOT V3"}
                          {selectedSpec === "propulsion" && "T-MOTOR BRUSHLESS DRIVE F80"}
                          {selectedSpec === "payload" && "MULTISPECTRAL SENSOR SYSTEM"}
                        </div>
                        <p className="text-slate-400 text-[11px] leading-relaxed">
                          {selectedSpec === "autopilot" && "Features triple-redundant IMU processors, obstacle avoidance sensors, and RTK accuracy for centimetre positioning."}
                          {selectedSpec === "propulsion" && "High-efficiency brushless motors with carbon fiber composite props, yielding 15kg max thrust per rotor."}
                          {selectedSpec === "payload" && "5-band multispectral survey camera combined with optical/thermal payloads for analytical field mapping."}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-2.5 mt-2.5 border-t border-white/5 text-[9px] font-mono text-slate-400">
                        <div>STATUS: <span className="text-emerald-400 font-bold">NOMINAL</span></div>
                        <div>WEIGHT: <span className="text-white">
                          {selectedSpec === "autopilot" && "420g"}
                          {selectedSpec === "propulsion" && "850g/rotor"}
                          {selectedSpec === "payload" && "1.2kg"}
                        </span></div>
                      </div>
                    </div>

                    <Link href="/services">
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-500 text-xs font-mono uppercase tracking-wider h-11 rounded-lg">
                        View Technical Catalog
                      </Button>
                    </Link>
                  </div>
                )}

                {activeMode === "operations" && (
                  <div className="flex flex-col justify-between h-full space-y-6">
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-white mb-2 font-mono">[ AERIAL MISSIONS ]</h3>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        Deploy drone infrastructure for real-time field data operations. We cater to high-accuracy surveys, mapping, and crop monitoring.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/[0.01] border border-white/5 rounded-xl p-4 space-y-2.5 text-xs font-mono">
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-slate-400">ACTIVE FLEET:</span>
                          <span className="text-white font-bold">14 active units</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-2">
                          <span className="text-slate-400">TOTAL SURVEYED:</span>
                          <span className="text-white">12,500+ Hectares</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">PARTNERS:</span>
                          <span className="text-amber-400 font-bold">NHAI, MPRDC, MPEB</span>
                        </div>
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className="w-full bg-amber-600 hover:bg-amber-500 text-xs font-mono uppercase tracking-wider h-11 rounded-lg">
                        Request Mission Operations
                      </Button>
                    </Link>
                  </div>
                )}
              </div>

            </div>

          </motion.div>

        </div>

        {/* Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-slate-500"
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>

      </section>

      {/* ── Trust bar marquee ────────────────────── */}
      <section className="py-3 bg-white border-b border-border overflow-hidden">
        <div
          className="flex w-max"
          style={{ animation: "trustMarquee 20s linear infinite" }}
        >
          {[...Array(4)].map((_, copy) => (
            <div key={copy} className="flex items-center shrink-0">
              {[
                "DGCA Approved RPTO",
                "Startup India Recognised",
                "MSME Registered",
                "AIC Prestige Incubated",
                "50,000 sq ft Facility",
                "Indore, Madhya Pradesh",
              ].map((label, i) => (
                <div key={i} className="flex items-center">
                  <span className="px-7 text-[11px] font-bold text-foreground/50 tracking-widest uppercase whitespace-nowrap">
                    {label}
                  </span>
                  <span className="text-primary text-xs select-none">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <style>{`
          @keyframes trustMarquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── Stats ────────────────────────────────── */}
      <section className="bg-[#111111]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/8">
            {stats.map((s, i) => (
              <div
                key={i}
                className="py-14 px-8 text-center group hover:bg-white/5 transition-colors"
              >
                <div className="font-display text-5xl md:text-6xl text-white mb-2 group-hover:text-primary transition-colors">
                  <Counter target={s.target} suffix={s.suffix} />
                </div>
                <div className="text-white/60 text-sm font-bold uppercase tracking-widest">
                  {s.label}
                </div>
                <div className="text-white/25 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 Pillars ────────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label">WHAT WE DO</div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
                Four Pillars of Excellence
              </h2>
              <p className="text-muted-foreground text-sm max-w-lg">
                A complete drone ecosystem — training, services, R&D, and
                manufacturing under one roof.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4]"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-black/10" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">
                    {s.tag}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-primary mb-3">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-xl text-white leading-tight mb-2">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-3 line-clamp-2">
                    {s.desc}
                  </p>
                  <Link
                    href={s.link}
                    className="inline-flex items-center gap-1.5 text-white/70 text-sm hover:text-white transition-colors"
                  >
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manufacturing Showcase ────────────────── */}
      <section className="py-20 bg-white border-y border-border overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-label">UAV MANUFACTURING</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5">
                50,000 sq ft. Indigenous. Defence-Grade.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Soaring Aerotech isn't just a training company — we manufacture
                UAVs. Our facility produces indigenous logistics drones,
                surveillance UAVs, and custom defence platforms, with active R&D
                partnerships with DRDO and international collaborators.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-7">
                {[
                  { label: "Logistics Drones", val: "Long-range cargo UAVs" },
                  { label: "Defence Drones", val: "Surveillance & recon" },
                  { label: "Custom UAVs", val: "Payload-specific builds" },
                  { label: "Intl. Collabs", val: "Global partnerships" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-muted/30 hover:bg-muted/60 transition-colors rounded-2xl p-5 border border-border/80 shadow-sm"
                  >
                    <div className="text-xs text-primary font-mono font-bold uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-foreground font-semibold">
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <Button className="rounded-full px-8 h-12 font-bold">
                  See Our Facility <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=380&fit=crop",
                "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=500&h=380&fit=crop",
                "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=500&h=380&fit=crop",
                "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=380&fit=crop",
              ].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative overflow-hidden rounded-2xl aspect-square"
                >
                  <img
                    src={img}
                    alt="Manufacturing"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── R&D Innovation ───────────────────────── */}
      <section className="py-20 bg-[#111111] overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop"
                alt="R&D Lab"
                className="w-full h-80 object-cover rounded-3xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
            </div>
            <div>
              <div
                className="section-label"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                INNOVATION LAB
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-5">
                Research That Creates Technology
              </h2>
              <p className="text-white/50 leading-relaxed mb-6">
                We don't just fly drones — we build the future of drone
                technology. Our Innovation Lab runs active research in
                disaster-response UAVs, AI/ML aerial systems, tethered drone
                platforms, and quantum computing applications for autonomous
                flight.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  {
                    title: "Disaster Management UAVs",
                    desc: "Rapid deployment systems for flood, fire & search ops",
                  },
                  {
                    title: "AI/ML Autonomous Drones",
                    desc: "Computer vision & edge-AI for autonomous missions",
                  },
                  {
                    title: "Tethered Drone Platforms",
                    desc: "Persistent surveillance with unlimited flight time",
                  },
                  {
                    title: "Defence Payload Engineering",
                    desc: "Custom payloads for military & police applications",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl border border-white/8 hover:border-primary/30 hover:bg-white/5 transition-all"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <div className="text-white/80 text-sm font-bold">
                        {item.title}
                      </div>
                      <div className="text-white/35 text-xs mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/innovation-lab">
                <Button className="rounded-full px-8 h-12 font-bold">
                  Explore Lab & R&D <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Case Studies ──────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label">CASE STUDIES</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                Real Missions. Real Impact.
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:inline-flex items-center gap-2 text-primary font-bold text-sm"
            >
              All Projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base text-white leading-tight mb-1">
                      {p.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/projects">
              <Button
                variant="outline"
                className="rounded-full px-8 h-12 font-bold"
              >
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Clients & Collaborations ─────────────── */}
      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <div className="section-label justify-center">
              CLIENTS & COLLABORATIONS
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-3">
              Trusted by Government, Defence & Academia
            </h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              From national highway authorities to IITs — India's most important
              organisations fly with Soaring Aerotech.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-border bg-white hover:border-primary/30 hover:shadow-md transition-all cursor-default min-h-[175px]"
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 overflow-hidden">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-xl bg-[#111111] flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <span className="text-white font-display text-[9px] font-black tracking-tight text-center leading-tight px-1">
                        {p.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-center flex flex-col justify-between flex-1">
                  <div className="text-[10px] font-bold text-foreground/65 leading-snug">
                    {p.full}
                  </div>
                  <div className="text-[9px] font-mono text-primary/60 uppercase tracking-widest mt-1">
                    {p.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries we serve ───────────────────── */}
      <IndustriesSection />

      {/* ── Gallery marquee ──────────────────────── */}
      <section className="py-16 bg-muted/20 overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 md:px-6 mb-10">
          <div className="flex items-end justify-between">
            <div>
              <div className="section-label">GALLERY</div>
              <h2 className="font-display text-4xl md:text-5xl text-foreground">
                In Action
              </h2>
            </div>
            <Link
              href="/media"
              className="text-sm font-semibold text-primary hover:underline hidden md:block"
            >
              View all →
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <Marquee items={galleryRow1} />
          <Marquee items={galleryRow2} reverse />
        </div>
      </section>

      {/* ── Leadership ───────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div>
              <div className="section-label">LEADERSHIP</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                The Visionaries Behind Soaring
              </h2>
              <p className="text-muted-foreground text-sm">
                Built by entrepreneurs who understand drone technology, Indian
                industry, and the future of autonomous systems.
              </p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
              {directors.map((d, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group bg-muted/40 rounded-3xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col hover:-translate-y-1"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="font-display font-bold text-white text-base">
                        {d.name}
                      </div>
                      <div className="text-primary text-xs font-mono tracking-wide">
                        {d.role}, SOARING AEROTECH
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex-1">
                    <Quote className="w-5 h-5 text-primary mb-3 opacity-60" />
                    <p className="text-sm text-foreground/70 italic leading-relaxed">
                      "{d.quote}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────── */}
      <section className="py-20 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-4">STUDENT SUCCESS</div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">
            What Our Pilots Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${t.span} bg-white rounded-2xl p-7 border border-border relative overflow-hidden group hover:border-foreground/20 transition-colors hover:shadow-md`}
              >
                <div className="absolute top-4 right-6 font-display text-7xl text-foreground/5 leading-none select-none">
                  "
                </div>
                <Award className="w-5 h-5 text-primary mb-4 opacity-70" />
                <p className="text-foreground font-medium mb-5 leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                <div className="font-bold text-sm text-foreground">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {t.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media Recognition ────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="section-label">MEDIA & PRESS</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground">
                In the News
              </h2>
            </div>
            <Link
              href="/media"
              className="hidden md:inline-flex items-center gap-2 text-primary font-bold text-sm"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                outlet: "City Bhaskar",
                type: "Print Media",
                headline:
                  "Indore startup training India's drone pilots with DGCA approval",
                icon: <Newspaper className="w-5 h-5" />,
              },
              {
                outlet: "Yash Bharat",
                type: "News Channel",
                headline:
                  "Soaring Aerotech — Central India's drone technology pioneer",
                icon: <Tv className="w-5 h-5" />,
              },
              {
                outlet: "Dainik Bhaskar",
                type: "Print Media",
                headline:
                  "Drone Didi: Women trained as professional drone pilots in MP",
                icon: <Newspaper className="w-5 h-5" />,
              },
              {
                outlet: "TV Coverage",
                type: "Television",
                headline:
                  "Defence-grade UAV manufacturing facility launched in Indore",
                icon: <Tv className="w-5 h-5" />,
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group p-6 rounded-2xl border border-border/85 bg-muted/40 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#111111] group-hover:bg-primary transition-colors flex items-center justify-center text-white shrink-0">
                    {m.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-foreground">
                      {m.outlet}
                    </div>
                    <div className="text-[10px] font-mono text-primary/60 uppercase tracking-widest">
                      {m.type}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-foreground/65 leading-relaxed italic">
                  "{m.headline}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571701374025-3eb9abc53de2?w=1800&h=700&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#111111]/90" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-3">
                Ready to Join
                <br />
                <span className="text-primary">India's Drone</span>
                <br />
                Revolution?
              </h2>
              <p className="text-white/40 text-sm max-w-sm">
                1000+ certified pilots. 100+ missions. Defence-grade
                manufacturing. All from Central India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/training">
                <Button
                  size="lg"
                  className="h-14 px-8 rounded-full text-base font-bold"
                >
                  Enroll Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-8 rounded-full text-base font-semibold border-white/20 text-white hover:bg-white/10"
                >
                  Talk to Expert
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-6">
            {[
              {
                icon: <MapPin className="w-4 h-4 text-primary shrink-0" />,
                text: "Tech Park, Block B, Indore, Madhya Pradesh 452001",
              },
              {
                icon: <Phone className="w-4 h-4 text-primary shrink-0" />,
                text: "+91 78699 18736",
              },
              {
                icon: <ShieldCheck className="w-4 h-4 text-primary shrink-0" />,
                text: "DGCA Approved RPTO · Startup India · MSME Registered · AIC Prestige",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/35 text-sm"
              >
                {item.icon}
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
