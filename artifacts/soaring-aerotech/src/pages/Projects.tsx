import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Clock, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "NH-47 Highway Expansion Survey",
      category: "Road Survey",
      img: "/images/project-road.png",
      challenge: "A 50km stretch required accurate topographic data for road widening, but heavy traffic made traditional surveying hazardous and slow.",
      solution: "Deployed fixed-wing VTOL drones equipped with PPK GNSS modules to capture high-resolution imagery without disrupting traffic.",
      results: [
        { label: "Time Saved", value: "65%" },
        { label: "Cost Reduced", value: "40%" },
        { label: "Accuracy", value: "±2cm" }
      ]
    },
    {
      title: "Vidarbha Precision Agriculture Initiative",
      category: "Agriculture Mapping",
      img: "/images/project-agri.png",
      challenge: "A 1000-acre cotton farm faced unexplained yield drops. Manual soil and crop inspection was physically impossible at scale.",
      solution: "Conducted weekly multispectral drone flights to generate NDVI maps, identifying exact zones of water stress and pest infestation.",
      results: [
        { label: "Yield Increase", value: "18%" },
        { label: "Chemicals Saved", value: "30%" },
        { label: "Scan Time", value: "4 Hrs" }
      ]
    },
    {
      title: "Bhadla Solar Park Thermal Audit",
      category: "Solar Inspection",
      img: "/images/project-solar.png",
      challenge: "Manual inspection of a 200MW solar section was taking months, allowing faulty panels to cause significant energy loss.",
      solution: "Automated thermal drone mapping identified defective cells, string failures, and soiling issues with precise GPS coordinates.",
      results: [
        { label: "Faults Found", value: "450+" },
        { label: "Inspection Time", value: "-80%" },
        { label: "ROI", value: "3 Months" }
      ]
    },
    {
      title: "Metro Rail Pillar Inspection",
      category: "Construction Monitoring",
      img: "/images/project-construction.png",
      challenge: "Inspecting high concrete pillars over active urban areas required expensive scaffolding and traffic diversions.",
      solution: "High-resolution drone photography captured millimeter-level detail of concrete integrity without ground disruption.",
      results: [
        { label: "Risk Reduction", value: "99%" },
        { label: "Cost Saved", value: "Rs 5L+" },
        { label: "Uptime", value: "100%" }
      ]
    },
    {
      title: "High-Voltage Powerline Audit",
      category: "Powerline Inspection",
      img: "/images/project-powerline.png",
      challenge: "Routine inspection of 132kV transmission lines in mountainous terrain was dangerous for climbing crews.",
      solution: "Drones with high-zoom payloads flew parallel to the lines, detecting insulator damage and vegetation encroachment safely.",
      results: [
        { label: "Speed", value: "5x Faster" },
        { label: "Safety", value: "Zero Incidents" },
        { label: "Data Points", value: "10k+" }
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
            Real-world challenges. Cutting-edge UAV solutions. Measurable industrial impact. Explore our case studies.
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
            Contact our project engineering team to discuss how drones can solve your specific industrial challenges.
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
