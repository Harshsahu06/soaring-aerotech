import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Industrial Facility Drone Surveillance",
      category: "Surveillance & Security",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=900&h=600&fit=crop",
      challenge: "A large industrial facility required continuous security monitoring across a wide perimeter, but deploying adequate ground-based security was cost-prohibitive and left significant blind spots.",
      solution: "Deployed a fleet of surveillance drones on automated patrol routes, providing 24/7 aerial monitoring with live feeds transmitted to the facility's security command center.",
      results: [{ label: "Coverage", value: "Full Perimeter" }, { label: "Mode", value: "24/7 Operations" }, { label: "Security Cost", value: "↓ 40%" }],
    },
    {
      title: "Highway Corridor Survey & Mapping",
      category: "Survey & Mapping",
      img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=900&h=600&fit=crop",
      challenge: "A major road expansion project required accurate topographic data across a 50km stretch, but heavy traffic made traditional surveying hazardous and time-consuming.",
      solution: "Deployed fixed-wing VTOL drones with PPK GNSS modules to capture high-resolution imagery, producing centimeter-accurate orthomosaics and elevation models without disrupting traffic.",
      results: [{ label: "Time Saved", value: "65%" }, { label: "Cost Reduced", value: "40%" }, { label: "Accuracy", value: "±2cm" }],
    },
    {
      title: "Precision Agriculture — Cotton Farms",
      category: "Agriculture Mapping",
      img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=900&h=600&fit=crop",
      challenge: "A large cotton farm in Madhya Pradesh faced unexplained yield drops. Manual field inspection across 1000+ acres was physically impossible at the required scale and frequency.",
      solution: "Weekly multispectral drone flights generating NDVI and NDWI maps identified exact zones of water stress, soil variation, and early-stage pest infestation — enabling targeted intervention.",
      results: [{ label: "Yield Increase", value: "18%" }, { label: "Chemicals Saved", value: "30%" }, { label: "Scan Time", value: "4 Hrs" }],
    },
    {
      title: "Solar Plant Thermal Inspection",
      category: "Solar Inspection",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&h=600&fit=crop",
      challenge: "Manual inspection of a 200MW solar section was taking months, allowing faulty panels to continue generating energy losses without being identified or repaired.",
      solution: "Automated thermal drone mapping covered the entire installation in two days — identifying hotspots, string failures, diode faults, and soiling with precise GPS coordinates for repair teams.",
      results: [{ label: "Faults Found", value: "450+" }, { label: "Inspection Time", value: "↓ 80%" }, { label: "ROI Recovery", value: "3 Months" }],
    },
    {
      title: "High-Altitude UAV Development & Testing",
      category: "UAV Manufacturing",
      img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=900&h=600&fit=crop",
      challenge: "Developing UAVs capable of reliable operation at high altitudes requires extensive field testing in low-pressure, low-temperature conditions that are difficult and expensive to simulate.",
      solution: "Soaring Aerotech's R&D team conducted high-altitude drone testing missions, validating airframe performance, motor efficiency, and electronics reliability for future defense and surveillance applications.",
      results: [{ label: "Altitude Tested", value: "High-Altitude" }, { label: "Application", value: "Defense Grade" }, { label: "Status", value: "Ongoing R&D" }],
    },
    {
      title: "Infrastructure Tower Inspection",
      category: "Infrastructure Inspection",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=900&h=600&fit=crop",
      challenge: "Routine inspection of telecom and power transmission towers in mountainous terrain was dangerous for climbing crews and required expensive access equipment.",
      solution: "High-zoom payload drones flew systematic inspection routes along tower structures, detecting corrosion, loose hardware, and insulator damage from safe distances with GPS-tagged photographic evidence.",
      results: [{ label: "Speed", value: "5× Faster" }, { label: "Safety", value: "Zero Incidents" }, { label: "Data Points", value: "10,000+" }],
    },
  ];

  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571701374025-3eb9abc53de2?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/40" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Real Deployments · Measurable Impact
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-5 leading-tight">
            Mission <span className="text-primary">Archives</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/50 text-lg max-w-2xl mx-auto">
            From industrial surveillance and agricultural mapping to high-altitude UAV development — our field results speak for themselves.
          </motion.p>
        </div>
      </section>

      {/* ── Projects ─────────────────────────────── */}
      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-12">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch bg-white rounded-3xl overflow-hidden shadow-sm border border-border group hover:shadow-xl transition-shadow"
              >
                <div className={`relative min-h-[320px] overflow-hidden ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-white text-foreground font-mono text-xs font-bold shadow-md">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                  {/* Result pills on image */}
                  <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
                    {project.results.map((res, j) => (
                      <div key={j} className="bg-primary/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {res.label}: {res.value}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-7">{project.title}</h2>
                  <div className="space-y-5 mb-6">
                    <div>
                      <div className="section-label mb-2">THE CHALLENGE</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <div className="section-label mb-2 mt-4">OUR SOLUTION</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link">
                    Discuss Similar Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&h=700&fit=crop" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#111111]/88" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-5">Have a Complex Project?</h2>
          <p className="text-white/50 mb-10 max-w-2xl mx-auto">
            Whether it's surveillance, mapping, inspection, or a custom UAV solution — contact our team to discuss your specific challenge.
          </p>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-14 px-8 text-base font-semibold">Start a Conversation</Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
