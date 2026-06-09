import { motion } from "framer-motion";
import { Zap, Map, Tractor, Sun, Factory, HardHat, ChevronRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Services() {
  const services = [
    {
      id: "survey",
      icon: <Map className="w-10 h-10 text-primary" />,
      title: "Survey & Mapping",
      problem: "Traditional surveying is slow, labor-intensive, and often dangerous in difficult terrain.",
      solution: "Rapid aerial data collection producing high-resolution orthomosaics and 3D models.",
      benefits: ["Up to 80% faster data collection", "Millimeter-level accuracy with RTK/PPK", "Zero human risk in hazardous areas"],
      tech: "DJI Matrice 350 RTK, Pix4D, LiDAR Sensors"
    },
    {
      id: "construction",
      icon: <HardHat className="w-10 h-10 text-primary" />,
      title: "Construction Monitoring",
      problem: "Lack of real-time project visibility leads to delays and budget overruns.",
      solution: "Weekly aerial progress reports, volumetric measurements, and BIM comparisons.",
      benefits: ["Accurate stockpile volume calculations", "Visual evidence for stakeholders", "Early detection of design deviations"],
      tech: "DJI Mavic 3 Enterprise, DroneDeploy"
    },
    {
      id: "agriculture",
      icon: <Tractor className="w-10 h-10 text-primary" />,
      title: "Precision Agriculture",
      problem: "Inefficient resource distribution and late detection of crop disease.",
      solution: "Multispectral imaging for crop health analysis and variable rate spraying.",
      benefits: ["Optimize fertilizer and water usage", "Identify plant stress before visual symptoms", "Increase overall crop yield"],
      tech: "DJI Agras Series, Multispectral Sensors"
    },
    {
      id: "solar",
      icon: <Sun className="w-10 h-10 text-primary" />,
      title: "Solar Inspection",
      problem: "Manual inspection of large solar parks is incredibly slow and misses subtle cell defects.",
      solution: "Automated thermal drone flights to instantly identify hotspots and diode failures.",
      benefits: ["Inspect MWs of panels in hours, not weeks", "Precise GPS tagging of faulty panels", "Prevent significant energy loss"],
      tech: "Zenmuse H20T Thermal Camera, FLIR Analysis"
    },
    {
      id: "infrastructure",
      icon: <Factory className="w-10 h-10 text-primary" />,
      title: "Infrastructure Inspection",
      problem: "Inspecting bridges, towers, and chimneys requires scaffolding or rope access, risking lives.",
      solution: "High-zoom visual and thermal inspection from safe distances.",
      benefits: ["Eliminate scaffolding costs", "Zero operational downtime required", "Detect micro-cracks and corrosion"],
      tech: "Zenmuse H20N, High-Zoom Payloads"
    }
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
            <span className="text-primary">Modern Industries</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            We deploy enterprise-grade UAVs to capture critical data, mitigate risks, and dramatically improve operational efficiency across sectors.
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
                    <div className="mb-6 inline-block">
                      {service.icon}
                    </div>
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
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Our engineering team can design custom UAV workflows tailored to your specific industrial requirements.
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
