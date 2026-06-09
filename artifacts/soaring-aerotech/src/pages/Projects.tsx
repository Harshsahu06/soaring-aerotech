import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Industrial Facility Drone Surveillance",
      category: "Surveillance & Security",
      img: "/images/project-road.png",
      challenge: "A large industrial facility required continuous security monitoring across a wide perimeter, but deploying adequate ground-based security was cost-prohibitive and left significant blind spots.",
      solution: "Deployed a fleet of surveillance drones on automated patrol routes, providing 24/7 aerial monitoring with live feeds transmitted to the facility's security command center.",
      results: [
        { label: "Coverage", value: "Full Perimeter" },
        { label: "Mode", value: "24/7 Operations" },
        { label: "Security Cost", value: "↓ 40%" }
      ]
    },
    {
      title: "Highway Corridor Survey & Mapping",
      category: "Survey & Mapping",
      img: "/images/project-road.png",
      challenge: "A major road expansion project required accurate topographic data across a 50km stretch, but heavy traffic made traditional surveying hazardous and time-consuming.",
      solution: "Deployed fixed-wing VTOL drones with PPK GNSS modules to capture high-resolution imagery, producing centimeter-accurate orthomosaics and elevation models without disrupting traffic.",
      results: [
        { label: "Time Saved", value: "65%" },
        { label: "Cost Reduced", value: "40%" },
        { label: "Accuracy", value: "±2cm" }
      ]
    },
    {
      title: "Precision Agriculture — Cotton Farms",
      category: "Agriculture Mapping",
      img: "/images/project-agri.png",
      challenge: "A large cotton farm in Madhya Pradesh faced unexplained yield drops. Manual field inspection across 1000+ acres was physically impossible at the required scale and frequency.",
      solution: "Weekly multispectral drone flights generating NDVI and NDWI maps identified exact zones of water stress, soil variation, and early-stage pest infestation — enabling targeted intervention.",
      results: [
        { label: "Yield Increase", value: "18%" },
        { label: "Chemicals Saved", value: "30%" },
        { label: "Scan Time", value: "4 Hrs" }
      ]
    },
    {
      title: "Solar Plant Thermal Inspection",
      category: "Solar Inspection",
      img: "/images/project-solar.png",
      challenge: "Manual inspection of a 200MW solar section was taking months, allowing faulty panels to continue generating energy losses without being identified or repaired.",
      solution: "Automated thermal drone mapping covered the entire installation in two days — identifying hotspots, string failures, diode faults, and soiling with precise GPS coordinates for repair teams.",
      results: [
        { label: "Faults Found", value: "450+" },
        { label: "Inspection Time", value: "↓ 80%" },
        { label: "ROI Recovery", value: "3 Months" }
      ]
    },
    {
      title: "High-Altitude UAV Development & Testing",
      category: "UAV Manufacturing",
      img: "/images/project-construction.png",
      challenge: "Developing UAVs capable of reliable operation at high altitudes requires extensive field testing in low-pressure, low-temperature conditions that are difficult and expensive to simulate.",
      solution: "Soaring Aerotech's R&D team conducted high-altitude drone testing missions, validating airframe performance, motor efficiency, and electronics reliability for future defense and surveillance applications.",
      results: [
        { label: "Altitude Tested", value: "High-Altitude" },
        { label: "Application", value: "Defense Grade" },
        { label: "Status", value: "Ongoing R&D" }
      ]
    },
    {
      title: "Infrastructure Tower Inspection",
      category: "Infrastructure Inspection",
      img: "/images/project-powerline.png",
      challenge: "Routine inspection of telecom and power transmission towers in mountainous terrain was dangerous for climbing crews and required expensive access equipment.",
      solution: "High-zoom payload drones flew systematic inspection routes along tower structures, detecting corrosion, loose hardware, and insulator damage from safe distances with GPS-tagged photographic evidence.",
      results: [
        { label: "Speed", value: "5× Faster" },
        { label: "Safety", value: "Zero Incidents" },
        { label: "Data Points", value: "10,000+" }
      ]
    }
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
            Mission <span className="text-primary">Archives</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Real deployments. Measurable impact. From industrial surveillance and agricultural mapping to high-altitude UAV development — our field results speak for themselves.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {projects.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white rounded-3xl overflow-hidden shadow-sm border border-border"
              >
                <div className={`h-full min-h-[300px] relative ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute top-6 left-6 inline-flex px-4 py-1.5 rounded-full bg-white text-foreground font-mono text-sm font-bold shadow-md">
                    {project.category.toUpperCase()}
                  </div>
                </div>
                
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-foreground mb-8">{project.title}</h2>
                  
                  <div className="space-y-6 mb-10">
                    <div>
                      <div className="section-label mb-2">THE CHALLENGE</div>
                      <p className="text-muted-foreground text-lg">{project.challenge}</p>
                    </div>
                    <div>
                      <div className="section-label mb-2 mt-6 text-primary">OUR SOLUTION</div>
                      <p className="text-muted-foreground text-lg">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {project.results.map((res, j) => (
                      <div key={j} className="bg-primary/10 text-primary text-xs font-bold px-4 py-2 rounded-full flex items-center gap-2">
                        {res.label}: {res.value}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-border text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Have a Complex Project?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Whether it's surveillance, mapping, inspection, or a custom UAV solution — contact our team to discuss how we can deploy drones for your specific challenge.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
