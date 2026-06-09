import { motion } from "framer-motion";
import { Zap, Map, Tractor, Eye, Factory, HardHat, ChevronRight, Shield, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "surveillance",
      icon: <Eye className="w-10 h-10 text-primary" />,
      title: "Aerial Surveillance & Security Monitoring",
      problem: "Ground-based security systems have blind spots, high manpower costs, and slow response times for large perimeters.",
      solution: "Autonomous drone patrols providing 360° aerial surveillance with real-time video feeds, thermal detection, and alert systems.",
      benefits: ["24/7 perimeter monitoring with minimal manpower", "Thermal imaging for night and low-visibility operations", "Real-time alert integration with command centers"],
      tech: "FPV Patrol Drones, Thermal Cameras, Live Feed Transmission",
      tag: "RECENTLY DEPLOYED"
    },
    {
      id: "inspection",
      icon: <Factory className="w-10 h-10 text-primary" />,
      title: "Industrial Site Monitoring & Asset Inspection",
      problem: "Inspecting large industrial facilities, factories, and critical infrastructure manually is expensive, time-consuming, and risky.",
      solution: "Scheduled drone inspections using high-resolution and thermal cameras to monitor assets, detect faults, and generate detailed reports.",
      benefits: ["Eliminate scaffolding and rope access costs", "Detect micro-cracks, corrosion, and thermal anomalies", "Reduce inspection time by up to 80%"],
      tech: "High-Zoom Payloads, Thermal Imaging, Automated Reporting"
    },
    {
      id: "survey",
      icon: <Map className="w-10 h-10 text-primary" />,
      title: "Survey, Mapping & 3D Modeling",
      problem: "Traditional surveying is slow, labor-intensive, and often unsafe in difficult or restricted terrain.",
      solution: "Rapid aerial data collection producing high-resolution orthomosaics, topographic maps, and 3D digital elevation models.",
      benefits: ["Up to 80% faster data collection vs traditional methods", "Millimeter-level accuracy with RTK/PPK GNSS", "Zero human risk in hazardous or remote areas"],
      tech: "RTK/PPK Drones, Pix4D, LiDAR Sensors, GIS Integration"
    },
    {
      id: "agriculture",
      icon: <Tractor className="w-10 h-10 text-primary" />,
      title: "Precision Agriculture & Crop Monitoring",
      problem: "Inefficient fertilizer and water distribution, late detection of crop disease, and lack of field-level data.",
      solution: "Multispectral drone imaging for NDVI-based crop health analysis, water stress mapping, and precision spraying operations.",
      benefits: ["Identify plant stress before visible symptoms appear", "Optimize fertilizer, pesticide, and water usage", "Scalable from small farms to 10,000+ acre operations"],
      tech: "DJI Agras Series, Multispectral Sensors, NDVI Analysis"
    },
    {
      id: "infrastructure",
      icon: <HardHat className="w-10 h-10 text-primary" />,
      title: "Infrastructure & Construction Monitoring",
      problem: "Inspecting bridges, towers, and construction sites requires scaffolding or dangerous manual access.",
      solution: "High-resolution drone photography and thermal imaging capturing structural details from safe distances, with progress reporting.",
      benefits: ["Accurate volumetric measurements and stockpile analysis", "Visual evidence for project stakeholders", "Early detection of structural deviations and defects"],
      tech: "DJI Enterprise Series, DroneDeploy, BIM Integration"
    },
    {
      id: "daas",
      icon: <Radio className="w-10 h-10 text-primary" />,
      title: "Drone-as-a-Service (DaaS)",
      problem: "Organizations — especially government and defense — need drone capabilities but lack in-house operators and equipment.",
      solution: "We deploy, operate, and maintain complete drone fleets on-site, providing turnkey aerial data and surveillance solutions.",
      benefits: ["No upfront hardware or training investment needed", "Dedicated Soaring Aerotech operators on-site", "Scalable from one-time missions to ongoing contracts"],
      tech: "Custom Fleet Configuration, On-Site Operations, Data Reporting"
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-28 bg-[#0D1B2A] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Drone Solutions for <br className="hidden md:block"/>
            <span className="text-primary">Every Industry</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            From aerial surveillance and industrial inspection to precision agriculture and Drone-as-a-Service — we deploy proven UAV solutions that deliver measurable results.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="left-accent-card bg-white p-8 md:p-12 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-1/3">
                    <div className="mb-4 inline-block">
                      {service.icon}
                    </div>
                    {service.tag && (
                      <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-xs font-bold mb-4">{service.tag}</div>
                    )}
                    <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <div className="mt-8">
                      <div className="text-sm font-mono text-primary mb-2 uppercase font-bold">Technology Used</div>
                      <div className="text-foreground/80 font-medium">{service.tech}</div>
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <div className="section-label mb-2">THE PROBLEM</div>
                        <p className="text-muted-foreground">{service.problem}</p>
                      </div>
                      <div>
                        <div className="section-label mb-2 mt-6 text-primary">OUR SOLUTION</div>
                        <p className="text-muted-foreground">{service.solution}</p>
                      </div>
                    </div>
                    
                    <div className="bg-[#F5F4F0] rounded-2xl p-6 border border-border">
                      <h4 className="text-lg font-bold text-foreground mb-4">Key Benefits</h4>
                      <ul className="space-y-4">
                        {service.benefits.map((benefit, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <ChevronRight className="w-5 h-5 text-primary shrink-0" />
                            <span className="text-foreground/80">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 pt-6 border-t border-border">
                        <Link href={`/contact?service=${service.id}`}>
                          <Button variant="outline" className="w-full">Request Quote</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Need a Custom Drone Solution?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our engineering team can design custom UAV workflows, deploy surveillance fleets, or develop specialized drones for your requirements.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
              Consult an Expert
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
