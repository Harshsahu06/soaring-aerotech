import { motion } from "framer-motion";
import { Link } from "wouter";
import { Tractor, Map, Factory, Eye, Building2, HardHat, Sun, Building, GraduationCap, Shield, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Industries() {
  const industries = [
    { 
      name: "Agriculture", 
      icon: <Tractor className="w-8 h-8" />, 
      desc: "Crop health monitoring using multispectral NDVI analysis, precision spraying, yield estimation, and irrigation planning for farms of any scale.",
      services: ["Crop Health Mapping", "Precision Spraying", "Yield Estimation"]
    },
    { 
      name: "Survey & Mapping", 
      icon: <Map className="w-8 h-8" />, 
      desc: "High-accuracy topographic surveys, orthomosaic maps, 3D models, and volumetric analysis for land developers, NHAI, and infrastructure projects.",
      services: ["Topographic Surveys", "3D Modeling", "Land Record Mapping"]
    },
    { 
      name: "Infrastructure Inspection", 
      icon: <Building2 className="w-8 h-8" />, 
      desc: "Detailed visual and thermal inspection of bridges, highways, railways, and towers without disrupting daily operations or risking human life.",
      services: ["Bridge Inspection", "Tower Audit", "Railway Inspection"]
    },
    { 
      name: "Surveillance & Security", 
      icon: <Eye className="w-8 h-8" />, 
      desc: "Perimeter surveillance, crowd monitoring, border patrol support, and real-time security feeds for industrial facilities, events, and sensitive locations.",
      services: ["Perimeter Patrol", "Industrial Security", "Event Monitoring"]
    },
    { 
      name: "Industrial Monitoring", 
      icon: <Factory className="w-8 h-8" />, 
      desc: "Continuous monitoring of industrial plants, refineries, and manufacturing facilities for safety compliance, environmental monitoring, and asset tracking.",
      services: ["Plant Monitoring", "Emissions Tracking", "Asset Inspection"]
    },
    { 
      name: "Construction", 
      icon: <HardHat className="w-8 h-8" />, 
      desc: "Site mapping, weekly progress tracking, stockpile volumetrics, and BIM comparison for large-scale construction and real estate development projects.",
      services: ["Progress Tracking", "Stockpile Analysis", "BIM Integration"]
    },
    { 
      name: "Solar Energy", 
      icon: <Sun className="w-8 h-8" />, 
      desc: "Automated thermal drone inspections to identify hotspots, diode failures, and soiling across vast solar farms — inspecting MWs of panels in hours.",
      services: ["Thermal Inspection", "Fault Detection", "Predictive Maintenance"]
    },
    { 
      name: "Government & Smart Cities", 
      icon: <Building className="w-8 h-8" />, 
      desc: "Land record digitization, urban planning data, disaster assessment, boundary surveys, and compliance monitoring for municipal and state authorities.",
      services: ["Land Surveys", "Disaster Response", "Urban Planning"]
    },
    { 
      name: "Education & Research", 
      icon: <GraduationCap className="w-8 h-8" />, 
      desc: "Academic partnerships providing institutions and universities with drone labs, DGCA training curricula, and hands-on aerospace engineering programs.",
      services: ["Campus Drone Labs", "DGCA Curriculum", "Research Projects"]
    },
    { 
      name: "Defense & Security Forces", 
      icon: <Shield className="w-8 h-8" />, 
      desc: "Surveillance and reconnaissance UAVs, FPV drones, specialized defense drone training for police and military, and custom defense payload development.",
      services: ["Surveillance UAVs", "Defense Training", "Custom Payloads"]
    },
    { 
      name: "Logistics & Delivery", 
      icon: <Truck className="w-8 h-8" />, 
      desc: "Proof-of-concept drone delivery systems, last-mile logistics studies, and cargo drone solutions for remote and inaccessible locations.",
      services: ["Last-Mile Delivery", "Remote Logistics", "Cargo Drones"]
    },
    { 
      name: "Power & Utilities", 
      icon: <Zap className="w-8 h-8" />, 
      desc: "Inspection of high-voltage transmission lines, substations, and wind turbines in difficult terrain — faster and safer than traditional climbing crews.",
      services: ["Powerline Audit", "Substation Inspection", "Wind Turbine Survey"]
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Industries We <span className="text-primary">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Soaring Aerotech creates skilled drone operators and delivers commercial UAV solutions across every major sector in India — from agriculture and defense to logistics and smart cities.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-3xl bg-white shadow-sm border border-border transition-all group hover:shadow-md hover:border-primary/20 cursor-pointer"
              >
                <div className="bg-primary/10 p-4 rounded-xl w-fit mb-4 text-primary group-hover:scale-105 transition-transform">
                  {ind.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{ind.name}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.services.map((s, j) => (
                    <span key={j} className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold border border-primary/10">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Your Industry Not Listed?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Drone technology is sector-agnostic. Contact us to discuss how UAVs can solve your specific operational challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
              Discuss Your Use Case
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
