import { motion } from "framer-motion";
import { Newspaper, Trophy, ExternalLink, Award } from "lucide-react";

export default function Media() {
  const mediaMentions = [
    { source: "Tech Crunch India", type: "Article", title: "Soaring Aerotech pioneers automated thermal inspections for solar parks.", date: "Nov 2024", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=260&fit=crop" },
    { source: "Aviation Week", type: "Interview", title: "Interview with CEO on the future of DGCA certified drone training in India.", date: "Oct 2024", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=260&fit=crop" },
    { source: "Startup India", type: "Recognition", title: "Recognized as Top 50 Aerospace Startups to watch in 2024.", date: "Aug 2024", img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=400&h=260&fit=crop" },
    { source: "The Economic Times", type: "Feature", title: "How drones are transforming Indian agriculture yields.", date: "Jul 2024", img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=400&h=260&fit=crop" },
  ];

  const awards = [
    { title: "Best Aerospace Startup 2023", org: "State Tech Awards, Madhya Pradesh", img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=350&fit=crop" },
    { title: "Excellence in Drone Education", org: "AIC Prestige, Atal Innovation Mission", img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=350&fit=crop" },
    { title: "Top Innovator: Agri-Tech", org: "India Innovation Summit 2024", img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=500&h=350&fit=crop" },
    { title: "DGCA Certified Premium Partner", org: "Directorate General of Civil Aviation", img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=350&fit=crop" },
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571701374025-3eb9abc53de2?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=600&h=400&fit=crop",
  ];

  return (
    <main className="min-h-screen pt-20">

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Press · Awards · Gallery
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-5 leading-tight">
            Media & <span className="text-primary">Recognition</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/50 text-lg max-w-xl mx-auto">
            Our journey covered by leading publications, and the awards that validate our commitment to excellence.
          </motion.p>
        </div>
      </section>

      {/* ── Press Mentions ───────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <Newspaper className="w-7 h-7 text-primary" />
            <div>
              <div className="section-label mb-0">PRESS MENTIONS</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mediaMentions.map((item, i) => (
              <motion.a
                href="#"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group block overflow-hidden rounded-2xl border border-border bg-[#F5F5F5] hover:shadow-lg transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-[#111111]/60" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-primary font-bold font-mono text-sm bg-[#111111]/70 border border-primary/30 backdrop-blur-sm px-3 py-1 rounded-full">{item.source}</span>
                    <span className="text-white/50 text-xs bg-white/10 px-2 py-1 rounded-full">{item.type}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">{item.title}</h3>
                  <span className="text-xs text-muted-foreground font-mono bg-white px-2.5 py-1 rounded-full border border-border">{item.date}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards ───────────────────────────────── */}
      <section className="py-20 bg-[#F5F5F5] border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <Trophy className="w-7 h-7 text-primary" />
            <div className="section-label mb-0">AWARDS & RECOGNITION</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {awards.map((award, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={award.img} alt={award.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Award className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="bg-primary/10 text-primary text-[10px] font-bold px-2.5 py-1 rounded-full w-fit mb-3 font-mono uppercase tracking-wider">AWARD</div>
                  <p className="font-display text-sm text-foreground leading-snug mb-1">{award.title}</p>
                  <p className="text-xs text-muted-foreground">{award.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Gallery ─────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="section-label mb-10">PHOTO GALLERY</div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative overflow-hidden rounded-2xl aspect-video group cursor-pointer"
              >
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
