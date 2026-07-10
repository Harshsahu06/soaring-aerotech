import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { ArrowRight, Tractor, Map, Factory, Eye, Building2, HardHat, Sun, Building, GraduationCap, Shield, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import imgIndustryAgriculture from "@/assets/industry-agriculture.jpg";
import imgIndustryDefence from "@/assets/industry-defence.jpg";
import imgIndustrySurvey from "@/assets/industry-survey-construction.jpg";
import imgIndustryConstruction from "@/assets/industry-construction.jpg";
import imgIndustryGovt from "@/assets/industry-govt.jpg";
import imgIndustryEducation from "@/assets/industry-education.jpg";
import imgIndustryLogistics from "@/assets/industry-logistics.jpg";

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
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop",
      desc: "Inspection of high-voltage transmission lines, substations, and wind turbines in difficult terrain — faster and safer than traditional climbing crews.",
      services: ["Powerline Audit", "Substation Inspection", "Wind Turbine Survey"],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <SEO
        title="Industries We Serve"
        description="Soaring Aerotech provides drone services across 12 major sectors in India, including Agriculture, Solar Energy, Power Utilities, Construction, Smart Cities, and Defense."
        keywords="drones in agriculture, drones in solar, drone mapping construction, defense UAVs India, telecom tower drone inspections"
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="bg-[#F5F5F5] border-b border-border py-14">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">12 INDUSTRIES · PAN INDIA</div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Industries We <span className="text-primary">Serve</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-2xl">
              Soaring Aerotech delivers UAV intelligence and certified pilots across every major industry in India — from agriculture and defence to logistics and smart cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Industries interactive list ───────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: numbered list */}
            <div>
              <div className="section-label">ALL INDUSTRIES</div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">12 Sectors We Serve</h2>
              <div className="divide-y divide-border">
                {industries.map((ind, i) => (
                  <button key={i} onClick={() => setActive(i)}
                    className={`w-full flex items-center justify-between py-4 text-left transition-colors ${active === i ? "text-foreground" : "text-foreground/35 hover:text-foreground/65"}`}
                  >
                    <div className="flex items-center gap-5">
                      <span className={`text-xs font-mono tabular-nums ${active === i ? "text-primary" : "text-foreground/20"}`}>{String(i + 1).padStart(2, "0")}</span>
                      <span className={`font-display text-lg leading-tight ${active === i ? "font-semibold" : "font-normal"}`}>{ind.name}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 shrink-0 transition-opacity ${active === i ? "text-primary opacity-100" : "opacity-0"}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: active industry card */}
            <div className="sticky top-24">
              <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-3xl aspect-[4/3]"
              >
                <img src={industries[active].img} alt={industries[active].name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-black/10" />
                <div className="absolute top-5 left-5">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded">Industry</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">

                  <h3 className="font-display text-3xl text-white leading-tight mb-3">{industries[active].name}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mb-5">{industries[active].desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {industries[active].services.map((s, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/75 text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-14 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=500&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-3">Your Industry Not Listed?</h2>
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
