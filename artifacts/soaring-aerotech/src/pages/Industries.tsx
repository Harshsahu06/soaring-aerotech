import { motion } from "framer-motion";
import { Link } from "wouter";
import { Tractor, Map, Factory, Eye, Building2, HardHat, Sun, Building, GraduationCap, Shield, Truck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Industries() {
  const industries = [
    {
      name: "Agriculture",
      icon: <Tractor className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=600&h=400&fit=crop",
      desc: "Crop health monitoring using multispectral NDVI analysis, precision spraying, yield estimation, and irrigation planning for farms of any scale.",
      services: ["Crop Health Mapping", "Precision Spraying", "Yield Estimation"],
    },
    {
      name: "Survey & Mapping",
      icon: <Map className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
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
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop",
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
      img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop",
      desc: "Land record digitization, urban planning data, disaster assessment, boundary surveys, and compliance monitoring for municipal and state authorities.",
      services: ["Land Surveys", "Disaster Response", "Urban Planning"],
    },
    {
      name: "Education & Research",
      icon: <GraduationCap className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      desc: "Academic partnerships providing institutions and universities with drone labs, DGCA training curricula, and hands-on aerospace engineering programs.",
      services: ["Campus Drone Labs", "DGCA Curriculum", "Research Projects"],
    },
    {
      name: "Defense & Security Forces",
      icon: <Shield className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=600&h=400&fit=crop",
      desc: "Surveillance and reconnaissance UAVs, FPV drones, specialized defense drone training for police and military, and custom defense payload development.",
      services: ["Surveillance UAVs", "Defense Training", "Custom Payloads"],
    },
    {
      name: "Logistics & Delivery",
      icon: <Truck className="w-7 h-7" />,
      img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=600&h=400&fit=crop",
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

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/40" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> 12 Industries · Pan India
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-5 leading-tight">
            Industries We <span className="text-primary">Serve</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/50 text-lg max-w-2xl mx-auto">
            Soaring Aerotech delivers UAV intelligence and certified pilots across every major industry in India — from agriculture and defence to logistics and smart cities.
          </motion.p>
        </div>
      </section>

      {/* ── Industries grid with images ───────────── */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary backdrop-blur-sm">
                      {ind.icon}
                    </div>
                    <h3 className="font-display text-lg text-white">{ind.name}</h3>
                  </div>
                </div>
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{ind.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {ind.services.map((s, j) => (
                      <span key={j} className="inline-block px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold border border-primary/10">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#111111]/88" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-5">Your Industry Not Listed?</h2>
          <p className="text-white/50 mb-10 max-w-2xl mx-auto">
            Drone technology is sector-agnostic. Contact us to discuss how UAVs can solve your specific operational challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">Discuss Your Use Case</Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
