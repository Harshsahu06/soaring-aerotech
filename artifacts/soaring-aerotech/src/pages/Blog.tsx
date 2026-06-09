import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const posts = [
    { title: "How to Become a Certified Drone Pilot in India (2024 Guide)", category: "Career", date: "Oct 15, 2024", img: "/images/hero-bg.png" },
    { title: "Drone Pilot Salary in India: What to Expect", category: "Industry", date: "Oct 02, 2024", img: "/images/hero-bg.png" },
    { title: "Decoding the New DGCA Drone Regulations", category: "Compliance", date: "Sep 28, 2024", img: "/images/hero-bg.png" },
    { title: "The Future of Precision Agriculture in India", category: "Technology", date: "Sep 15, 2024", img: "/images/project-agri.png" },
    { title: "Airspace Zones Explained: Red, Yellow, and Green", category: "Regulations", date: "Sep 05, 2024", img: "/images/hero-bg.png" },
    { title: "Top 10 High-Paying Drone Applications Today", category: "Industry", date: "Aug 20, 2024", img: "/images/hero-bg.png" },
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
            Insights & <span className="text-primary">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/70 max-w-3xl mx-auto"
          >
            Industry analysis, regulatory updates, and career advice from India's leading drone experts.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border group flex flex-col"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full w-fit mb-4">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold text-foreground mb-4 leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono mb-6 mt-auto">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                  </div>
                  <Link href="#" className="inline-flex items-center text-primary font-semibold text-sm">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
