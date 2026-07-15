import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { 
  ArrowRight, Tractor, Map, Factory, Eye, Building2, HardHat, Sun, Building, 
  GraduationCap, Shield, Truck, Zap, Mountain, Box, MapPin, Droplet, 
  TrendingUp, Radio, Lock, Camera, Wind, CheckSquare, Calendar, Layers, 
  Compass, Thermometer, AlertTriangle, Wrench, Landmark, Cpu, BookOpen, 
  Target, Package, Activity 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import imgIndustryAgriculture from "@/assets/industry-agriculture.jpg";
import imgIndustryDefence from "@/assets/industry-defence.png";
import imgIndustrySurvey from "@/assets/industry-survey-construction.jpg";
import imgIndustryConstruction from "@/assets/industry-construction.png";
import imgIndustryGovt from "@/assets/industry-govt.png";
import imgIndustryEducation from "@/assets/industry-education.jpg";
import imgIndustryLogistics from "@/assets/industry-logistics.png";
import imgMpebInspection from "@/assets/mpeb-inspection.jpg";
import imgThermalInspection from "@/assets/thermal-inspection.jpg";
import imgSolarThermalInspection from "@/assets/solar-thermal-inspection.jpg";

export default function Industries() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Sectors" },
    { id: "survey_infra", label: "Infrastructure & Survey" },
    { id: "security_defense", label: "Security & Defense" },
    { id: "energy_industry", label: "Energy & Utilities" },
    { id: "agri_logistics", label: "Agriculture & Logistics" },
    { id: "education", label: "Education & R&D" },
  ];

  const industries = [
    {
      name: "Agriculture",
      icon: <Tractor className="w-5 h-5" />,
      img: imgIndustryAgriculture,
      slogan: "Precision farming & crop intelligence",
      desc: "Crop health monitoring using multispectral NDVI analysis, precision spraying, yield estimation, and irrigation planning for farms of any scale.",
      services: [
        { name: "Crop Health Mapping", icon: <TrendingUp className="w-6 h-6" /> },
        { name: "Precision Spraying", icon: <Droplet className="w-6 h-6" /> },
        { name: "Yield Estimation", icon: <Tractor className="w-6 h-6" /> }
      ],
      categories: ["agri_logistics"],
    },
    {
      name: "Survey & Mapping",
      icon: <Map className="w-5 h-5" />,
      img: imgIndustrySurvey,
      slogan: "High-precision aerial survey solutions",
      desc: "Accurate topographic surveys, orthomosaic maps, 3D models, and volumetric analysis for land developers, NHAI, and infrastructure projects.",
      services: [
        { name: "Topographic Surveys", icon: <Mountain className="w-6 h-6" /> },
        { name: "3D Modelling", icon: <Box className="w-6 h-6" /> },
        { name: "Land Record Mapping", icon: <MapPin className="w-6 h-6" /> }
      ],
      categories: ["survey_infra"],
    },
    {
      name: "Infrastructure Inspection",
      icon: <Building2 className="w-5 h-5" />,
      img: imgThermalInspection,
      slogan: "Non-disruptive structural inspection",
      desc: "Detailed visual and thermal inspection of bridges, highways, railways, and towers without disrupting daily operations or risking human life.",
      services: [
        { name: "Bridge Inspection", icon: <Layers className="w-6 h-6" /> },
        { name: "Tower Audit", icon: <Radio className="w-6 h-6" /> },
        { name: "Railway Inspection", icon: <Compass className="w-6 h-6" /> }
      ],
      categories: ["survey_infra"],
    },
    {
      name: "Surveillance & Security",
      icon: <Eye className="w-5 h-5" />,
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
      slogan: "Real-time surveillance & security monitoring",
      desc: "Perimeter surveillance, crowd monitoring, border patrol support, and real-time security feeds for industrial facilities, events, and sensitive locations.",
      services: [
        { name: "Perimeter Patrol", icon: <Eye className="w-6 h-6" /> },
        { name: "Industrial Security", icon: <Lock className="w-6 h-6" /> },
        { name: "Event Monitoring", icon: <Camera className="w-6 h-6" /> }
      ],
      categories: ["security_defense"],
    },
    {
      name: "Industrial Monitoring",
      icon: <Factory className="w-5 h-5" />,
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      slogan: "Compliance & asset safety tracking",
      desc: "Continuous monitoring of industrial plants, refineries, and manufacturing facilities for safety compliance, environmental monitoring, and asset tracking.",
      services: [
        { name: "Plant Monitoring", icon: <Factory className="w-6 h-6" /> },
        { name: "Emissions Tracking", icon: <Wind className="w-6 h-6" /> },
        { name: "Asset Inspection", icon: <CheckSquare className="w-6 h-6" /> }
      ],
      categories: ["energy_industry"],
    },
    {
      name: "Construction",
      icon: <HardHat className="w-5 h-5" />,
      img: imgIndustryConstruction,
      slogan: "Stockpile & progress tracking solutions",
      desc: "Site mapping, weekly progress tracking, stockpile volumetrics, and BIM comparison for large-scale construction and real estate development projects.",
      services: [
        { name: "Progress Tracking", icon: <Calendar className="w-6 h-6" /> },
        { name: "Stockpile Analysis", icon: <Layers className="w-6 h-6" /> },
        { name: "BIM Integration", icon: <Compass className="w-6 h-6" /> }
      ],
      categories: ["survey_infra"],
    },
    {
      name: "Solar Energy",
      icon: <Sun className="w-5 h-5" />,
      img: imgSolarThermalInspection,
      slogan: "Hotspot & diode fault mapping",
      desc: "Automated thermal drone inspections to identify hotspots, diode failures, and soiling across vast solar farms — inspecting MWs of panels in hours.",
      services: [
        { name: "Thermal Inspection", icon: <Thermometer className="w-6 h-6" /> },
        { name: "Fault Detection", icon: <AlertTriangle className="w-6 h-6" /> },
        { name: "Predictive Maintenance", icon: <Wrench className="w-6 h-6" /> }
      ],
      categories: ["energy_industry"],
    },
    {
      name: "Government & Smart Cities",
      icon: <Building className="w-5 h-5" />,
      img: imgIndustryGovt,
      slogan: "Digitized land records & urban data",
      desc: "Land record digitization, urban planning data, disaster assessment, boundary surveys, and compliance monitoring for municipal and state authorities.",
      services: [
        { name: "Land Surveys", icon: <Landmark className="w-6 h-6" /> },
        { name: "Disaster Response", icon: <AlertTriangle className="w-6 h-6" /> },
        { name: "Urban Planning", icon: <Building className="w-6 h-6" /> }
      ],
      categories: ["survey_infra"],
    },
    {
      name: "Education & Research",
      icon: <GraduationCap className="w-5 h-5" />,
      img: imgIndustryEducation,
      slogan: "Academic partnerships & drone curricula",
      desc: "Academic partnerships providing institutions and universities with drone labs, DGCA training curricula, and hands-on aerospace engineering programs.",
      services: [
        { name: "Campus Drone Labs", icon: <Cpu className="w-6 h-6" /> },
        { name: "DGCA Curriculum", icon: <BookOpen className="w-6 h-6" /> },
        { name: "Research Projects", icon: <GraduationCap className="w-6 h-6" /> }
      ],
      categories: ["education"],
    },
    {
      name: "Defense & Security Forces",
      icon: <Shield className="w-5 h-5" />,
      img: imgIndustryDefence,
      slogan: "Tactical reconnaissance & defense systems",
      desc: "Surveillance and reconnaissance UAVs, FPV drones, specialized defense drone training for police and military, and custom defense payload development.",
      services: [
        { name: "Surveillance UAVs", icon: <Shield className="w-6 h-6" /> },
        { name: "Defense Training", icon: <Target className="w-6 h-6" /> },
        { name: "Custom Payloads", icon: <Package className="w-6 h-6" /> }
      ],
      categories: ["security_defense"],
    },
    {
      name: "Logistics & Delivery",
      icon: <Truck className="w-5 h-5" />,
      img: imgIndustryLogistics,
      slogan: "Cargo UAVs & last-mile delivery solutions",
      desc: "Proof-of-concept drone delivery systems, last-mile logistics studies, and cargo drone solutions for remote and inaccessible locations.",
      services: [
        { name: "Last-Mile Delivery", icon: <Truck className="w-6 h-6" /> },
        { name: "Remote Logistics", icon: <Map className="w-6 h-6" /> },
        { name: "Cargo Drones", icon: <Package className="w-6 h-6" /> }
      ],
      categories: ["agri_logistics"],
    },
    {
      name: "Power & Utilities",
      icon: <Zap className="w-5 h-5" />,
      img: imgMpebInspection,
      slogan: "Transmission line & substation auditing",
      desc: "Inspection of high-voltage transmission lines, substations, and wind turbines in difficult terrain — faster and safer than traditional climbing crews.",
      services: [
        { name: "Powerline Audit", icon: <Zap className="w-6 h-6" /> },
        { name: "Substation Inspection", icon: <Activity className="w-6 h-6" /> },
        { name: "Wind Turbine Survey", icon: <Wind className="w-6 h-6" /> }
      ],
      categories: ["energy_industry", "survey_infra"],
    },
  ];

  const filteredIndustries = selectedCategory === "all"
    ? industries
    : industries.filter(ind => ind.categories.includes(selectedCategory));

  return (
    <main className="min-h-screen pt-16 sm:pt-20 bg-slate-50/50">
      <SEO
        title="Industries We Serve"
        description="Soaring Aerotech provides drone services across 12 major sectors in India, including Agriculture, Solar Energy, Power Utilities, Construction, Smart Cities, and Defense."
        keywords="drones in agriculture, drones in solar, drone mapping construction, defense UAVs India, telecom tower drone inspections"
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-white border-b border-border/80 py-10 sm:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 16 }} 
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="section-label">12 INDUSTRIES · PAN INDIA</div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4 font-bold">
              Industries We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Soaring Aerotech delivers UAV intelligence and certified pilots across every major industry in India — from agriculture and defence to logistics and smart cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Filter & Cards Grid ────────────────────── */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Category Filter Selector */}
          <div className="mb-10 sm:mb-14">
            <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-start">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`snap-center shrink-0 px-5 py-2.5 rounded-full text-xs font-semibold border transition-all duration-200 ${
                      isSelected
                        ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                        : "bg-white border-slate-200 text-muted-foreground hover:bg-slate-50 hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredIndustries.map((ind) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  key={ind.name}
                  className="group bg-white rounded-[28px] border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Card Image header */}
                  <div className="relative h-44 sm:h-64 overflow-hidden shrink-0">
                    <img
                      src={ind.img}
                      alt={ind.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                    
                    {/* Slogan & Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <span className="font-display text-xl sm:text-2xl text-white font-bold tracking-tight block">
                        {ind.name}
                      </span>
                      <div className="w-8 h-0.5 sm:h-1 bg-primary mt-1.5 mb-1.5 sm:mt-2 sm:mb-2" />
                      <p className="text-white/90 text-[10px] sm:text-sm font-medium">
                        {ind.slogan}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-3.5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 sm:line-clamp-none">
                        {ind.desc}
                      </p>

                      {/* 3-Column horizontal grid for services */}
                      <div className="grid grid-cols-3 divide-x divide-slate-100 border-y border-slate-100 py-3 sm:py-6 mb-4 sm:mb-6">
                        {ind.services.map((s, j) => (
                          <div key={j} className="flex flex-col items-center text-center px-1">
                            <div className="text-primary mb-1.5 sm:mb-2 flex justify-center items-center scale-90 sm:scale-100">
                              {s.icon}
                            </div>
                            <span className="text-[8px] sm:text-[11px] font-medium text-foreground leading-tight">
                              {s.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link href={`/contact?subject=${encodeURIComponent("Enquiry for " + ind.name)}`} className="w-full block">
                      <Button 
                        className="w-full rounded-2xl h-10 sm:h-12 text-xs sm:text-sm font-bold gap-1.5 bg-primary hover:bg-primary/95 text-white transition-all duration-200 flex items-center justify-center border-none shadow-sm"
                      >
                        <span className="inline sm:hidden">Enquire Now</span>
                        <span className="hidden sm:inline">Enquire for {ind.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 ml-0.5" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-t border-border">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=500&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-3 font-bold">Your Industry Not Listed?</h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
            Drone technology is sector-agnostic. Contact us to discuss how UAVs can solve your specific operational challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-12 px-8 text-sm sm:text-base font-semibold shadow-lg shadow-primary/20">Discuss Your Use Case</Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
