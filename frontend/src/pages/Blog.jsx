import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Blog() {
  const posts = [
    {
      title: "How to Become a Certified Drone Pilot in India (2025 Guide)",
      category: "Career",
      date: "Oct 15, 2024",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop",
      excerpt: "Everything you need to know about getting your DGCA Remote Pilot Certificate — eligibility, training, costs, and what to expect.",
    },
    {
      title: "Drone Pilot Salary in India: What to Expect in 2025",
      category: "Industry",
      date: "Oct 02, 2024",
      img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=800&h=500&fit=crop",
      excerpt: "Breaking down earnings across agriculture, survey, surveillance, and defence sectors for certified drone operators in India.",
    },
    {
      title: "Decoding the New DGCA Drone Regulations",
      category: "Compliance",
      date: "Sep 28, 2024",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=500&fit=crop",
      excerpt: "A plain-language breakdown of the latest DGCA drone rules — what's changed, what it means for operators, and how to stay compliant.",
    },
    {
      title: "The Future of Precision Agriculture with Drones in India",
      category: "Technology",
      date: "Sep 15, 2024",
      img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=500&fit=crop",
      excerpt: "How NDVI mapping, precision spraying, and multispectral imaging are transforming Indian farming and boosting yields.",
    },
    {
      title: "Airspace Zones Explained: Red, Yellow, and Green",
      category: "Regulations",
      date: "Sep 05, 2024",
      img: "https://images.unsplash.com/photo-1571701374025-3eb9abc53de2?w=800&h=500&fit=crop",
      excerpt: "A complete guide to India's drone airspace classification — where you can fly, where you need permission, and where you can't go.",
    },
    {
      title: "Top 10 High-Paying Drone Applications Today",
      category: "Industry",
      date: "Aug 20, 2024",
      img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
      excerpt: "From thermal solar inspections to defence surveillance — the highest-value drone applications and how to build a career around them.",
    },
  ];

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="min-h-screen">
      <SEO 
        title="Drone Industry Insights & Blog"
        description="Stay updated with the latest trends in the Indian drone industry. Read about DGCA regulations, drone pilot career guides, agricultural drone innovations, and pilot salaries."
        keywords="drone guide India, DGCA drone rules, drone pilot salary, precision agriculture, drone tech trends 2025"
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1600&h=900&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-[#111111]/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 text-center">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-6 uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Drone Industry · Insights
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-7xl text-white mb-5 leading-tight">
            Insights & <span className="text-primary">Resources</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="text-white/50 text-lg max-w-xl mx-auto">
            Industry analysis, regulatory updates, and career advice from India's leading drone experts.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 md:px-6">

          {/* Featured post */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all mb-12 cursor-pointer"
          >
            <div className="relative h-72 lg:h-auto overflow-hidden">
              <img src={featured.img} alt={featured.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full">{featured.category}</span>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Featured Article</div>
              <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">{featured.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                  <Calendar className="w-3 h-3" /> {featured.date}
                </div>
                <Link href="#" className="inline-flex items-center text-primary font-semibold text-sm">
                  Read Article <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </motion.article>

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border group flex flex-col hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded-full">{post.category}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="font-display text-lg text-foreground mb-3 leading-snug group-hover:text-primary transition-colors flex-1">{post.title}</h2>
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <Link href="#" className="inline-flex items-center text-primary font-semibold text-xs">
                      Read <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
