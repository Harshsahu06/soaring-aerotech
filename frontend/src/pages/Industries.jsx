import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { ArrowRight, Tractor, Map, Factory, Eye, Building2, HardHat, Sun, Building, GraduationCap, Shield, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgIndustryAgriculture from "@/assets/industry-agriculture.jpg";
import imgIndustryDefence from "@/assets/industry-defence.png";
import imgIndustrySurvey from "@/assets/industry-survey-construction.jpg";
import imgIndustryConstruction from "@/assets/industry-construction.png";
import imgIndustryGovt from "@/assets/industry-govt.png";
import imgIndustryEducation from "@/assets/industry-education.jpg";
import imgIndustryLogistics from "@/assets/industry-logistics.png";
import imgMpebInspection from "@/assets/mpeb-inspection.jpg";

export default function Industries() {
  const [active, setActive] = useState(0);
  const industries = [
    {
      name: "Agriculture",
      icon: <Tractor className="w-7 h-7" />,
      img: imgIndustryAgriculture,
      desc: "Crop health monitoring using multispectral NDVI analysis, precision spraying, yield estimation, and irrigation planning for farms of any scale.",
      services: ["Crop Health Mapping", "Precision Spraying", "Yield Estimation"],
    },
    {
      name: "Survey & Mapping",
      icon: <Map className="w-7 h-7" />,
      img: imgIndustrySurvey,
      desc: "High-accuracy topographic surveys, orthomosaic maps, 3D models, and volumetric analysis for land developers, NHAI, and infrastructure projects.",
      services: ["Topographic Surveys", "3D Modeling", "Land Record Mapping"],
    },
    {
      name: "Infrastructure Inspection",
      icon: <Building2 className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      desc: "Detailed visual and thermal inspection of bridges, highways, railways, and towers without disrupting daily operations or risking human life.",
      services: ["Bridge Inspection", "Tower Audit", "Railway Inspection"],
    },
    {
      name: "Surveillance & Security",
      icon: <Eye className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
      desc: "Perimeter surveillance, crowd monitoring, border patrol support, and real-time security feeds for industrial facilities, events, and sensitive locations.",
      services: ["Perimeter Patrol", "Industrial Security", "Event Monitoring"],
    },
    {
      name: "Industrial Monitoring",
      icon: <Factory className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
      desc: "Continuous monitoring of industrial plants, refineries, and manufacturing facilities for safety compliance, environmental monitoring, and asset tracking.",
      services: ["Plant Monitoring", "Emissions Tracking", "Asset Inspection"],
    },
    {
      name: "Construction",
      icon: <HardHat className="w-7 h-7" />,
      img: imgIndustryConstruction,
      desc: "Site mapping, weekly progress tracking, stockpile volumetrics, and BIM comparison for large-scale construction and real estate development projects.",
      services: ["Progress Tracking", "Stockpile Analysis", "BIM Integration"],
    },
    {
      name: "Solar Energy",
      icon: <Sun className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
      desc: "Automated thermal drone inspections to identify hotspots, diode failures, and soiling across vast solar farms — inspecting MWs of panels in hours.",
      services: ["Thermal Inspection", "Fault Detection", "Predictive Maintenance"],
    },
    {
      name: "Government & Smart Cities",
      icon: <Building className="w-7 h-7" />,
      img: imgIndustryGovt,
      desc: "Land record digitization, urban planning data, disaster assessment, boundary surveys, and compliance monitoring for municipal and state authorities.",
      services: ["Land Surveys", "Disaster Response", "Urban Planning"],
    },
    {
      name: "Education & Research",
      icon: <GraduationCap className="w-7 h-7" />,
      img: imgIndustryEducation,
      desc: "Academic partnerships providing institutions and universities with drone labs, DGCA training curricula, and hands-on aerospace engineering programs.",
      services: ["Campus Drone Labs", "DGCA Curriculum", "Research Projects"],
    },
    {
      name: "Defense & Security Forces",
      icon: <Shield className="w-7 h-7" />,
      img: imgIndustryDefence,
      desc: "Surveillance and reconnaissance UAVs, FPV drones, specialized defense drone training for police and military, and custom defense payload development.",
      services: ["Surveillance UAVs", "Defense Training", "Custom Payloads"],
    },
    {
      name: "Logistics & Delivery",
      icon: <Truck className="w-7 h-7" />,
      img: imgIndustryLogistics,
      desc: "Proof-of-concept drone delivery systems, last-mile logistics studies, and cargo drone solutions for remote and inaccessible locations.",
      services: ["Last-Mile Delivery", "Remote Logistics", "Cargo Drones"],
    },
    {
      name: "Power & Utilities",
      icon: <Zap className="w-7 h-7" />,
      img: imgMpebInspection,
      desc: "Inspection of high-voltage transmission lines, substations, and wind turbines in difficult terrain — faster and safer than traditional climbing crews.",
      services: ["Powerline Audit", "Substation Inspection", "Wind Turbine Survey"],
    },
  ];

  return (
    <main className="min-h-screen pt-16 sm:pt-20">
      <SEO
        title="Industries We Serve"
        description="Soaring Aerotech provides drone services across 12 major sectors in India, including Agriculture, Solar Energy, Power Utilities, Construction, Smart Cities, and Defense."
        keywords="drones in agriculture, drones in solar, drone mapping construction, defense UAVs India, telecom tower drone inspections"
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] border-b border-border py-8 sm:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">12 INDUSTRIES · PAN INDIA</div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              Soaring Aerotech delivers UAV intelligence and certified pilots across every major industry in India — from agriculture and defence to logistics and smart cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Industries interactive grid ────────────── */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: grid of circles */}
            <div className="lg:col-span-7 w-full overflow-hidden">
              <div className="section-label">ALL INDUSTRIES</div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground mb-8">12 Sectors We Serve</h2>

              <div className="flex overflow-x-auto md:grid md:grid-cols-4 lg:grid-cols-3 gap-x-6 md:gap-x-4 gap-y-8 pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory">
                {industries.map((ind, i) => {
                  const isActive = active === i;
                  return (
                    <div
                      key={i}
                      onClick={() => setActive(i)}
                      className="flex-shrink-0 w-20 md:w-auto flex flex-col items-center group cursor-pointer snap-center"
                    >
                      <div
                        className={`w-14 h-14 sm:w-20 sm:h-20 rounded-full flex items-center justify-center border transition-all duration-300 relative ${isActive
                          ? "border-primary bg-primary/8 text-primary shadow-lg shadow-primary/15 scale-105"
                          : "border-border bg-slate-50 text-foreground/50 group-hover:border-foreground/30 group-hover:text-foreground group-hover:bg-slate-100 group-hover:scale-102"
                          }`}
                      >
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full border border-primary/20 animate-ping pointer-events-none" />
                        )}
                        <div className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                          {ind.icon}
                        </div>
                      </div>
                      <span
                        className={`text-center text-[10px] sm:text-xs font-display font-semibold mt-2 md:mt-3 leading-tight tracking-tight max-w-[75px] md:max-w-[110px] transition-colors duration-200 line-clamp-2 md:line-clamp-none ${isActive ? "text-primary font-bold" : "text-muted-foreground group-hover:text-foreground"
                          }`}
                      >
                        {ind.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right / Bottom: active industry card */}
            <div className="lg:col-span-5 sticky top-24 w-full">
              <AnimatePresence mode="wait">
                {active !== -1 && (
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="bg-slate-50 border border-border rounded-3xl overflow-hidden shadow-md flex flex-col p-4 lg:p-0"
                  >
                    {/* Mobile layout (flex-row for title & thumbnail, compact spacing) */}
                    <div className="flex flex-row items-center gap-4 lg:hidden">
                      <img
                        src={industries[active].img}
                        alt={industries[active].name}
                        className="w-16 h-16 rounded-xl object-cover border border-border shrink-0"
                      />
                      <div>
                        <h3 className="font-display text-lg text-foreground font-bold">
                          {industries[active].name}
                        </h3>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {industries[active].services.slice(0, 2).map((s, j) => (
                            <span key={j} className="text-[9px] px-2 py-0.5 rounded bg-white border border-border text-foreground/60">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Desktop layout (large image, absolute title) */}
                    <div className="hidden lg:block relative overflow-hidden aspect-[4/3] w-full rounded-t-3xl">
                      <img
                        src={industries[active].img}
                        alt={industries[active].name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="font-display text-2xl text-white font-bold">
                          {industries[active].name}
                        </h3>
                      </div>
                    </div>

                    {/* Description & Rest of Info */}
                    <div className="mt-3 lg:mt-0 lg:p-6">
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 lg:mb-6">
                        {industries[active].desc}
                      </p>

                      {/* Desktop only full services list */}
                      <div className="hidden lg:block mb-6">
                        <div className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase mb-3">
                          Key Solutions & Services
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {industries[active].services.map((s, j) => (
                            <span
                              key={j}
                              className="px-3.5 py-1.5 rounded-full bg-white border border-border text-foreground/75 text-xs font-medium shadow-sm hover:border-primary/30 transition-colors"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Link href="/contact" className="w-full block">
                        <Button className="w-full rounded-xl h-10 lg:h-12 text-xs lg:text-sm font-bold gap-2">
                          Enquire for {industries[active].name} <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=500&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-white mb-3">Your Industry Not Listed?</h2>
          <p className="text-white/50 mb-6 max-w-lg mx-auto text-sm">
            Drone technology is sector-agnostic. Contact us to discuss how UAVs can solve your specific operational challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-12 px-8 text-base font-semibold">Discuss Your Use Case</Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
