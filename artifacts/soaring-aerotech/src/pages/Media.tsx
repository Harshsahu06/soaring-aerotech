import { motion } from "framer-motion";
import { Newspaper, Trophy, ExternalLink, Award } from "lucide-react";

const achievements = [
  {
    caption:
      "Successfully contributed to the Drone Didi Initiative, promoting women empowerment through drone technology training.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=500&fit=crop",
    label: "Drone Didi Initiative",
  },
  {
    caption:
      "Recognized in leading newspapers such as City Bhaskar, Yash Bharat, and other regional media platforms for innovative drone technology initiatives.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop",
    label: "Media Coverage",
  },
  {
    caption:
      "Conducted drone awareness and skill development programs focused on creating employment and entrepreneurship opportunities.",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&h=500&fit=crop",
    label: "Skill Development",
  },
  {
    caption:
      "Actively supporting women empowerment through drone pilot training and certification programs.",
    img: "https://images.unsplash.com/photo-1573496799515-eebbb63814f2?w=800&h=500&fit=crop",
    label: "Women Empowerment",
  },
  {
    caption:
      "Featured for contributions towards advancing drone technology adoption across various sectors.",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&h=500&fit=crop",
    label: "Technology Adoption",
  },
  {
    caption:
      "Promoting drone-based solutions for infrastructure monitoring, surveying, agriculture, and industrial applications.",
    img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=800&h=500&fit=crop",
    label: "Industry Applications",
  },
  {
    caption:
      "Working towards building a skilled workforce for India's rapidly growing drone ecosystem.",
    img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop",
    label: "Workforce Development",
  },
  {
    caption:
      "Recognized for industry-academia collaboration in drone research, training, and innovation.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=500&fit=crop",
    label: "Industry-Academia",
  },
  {
    caption:
      "Contributing to the development of next-generation UAV technologies through research and practical implementation.",
    img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=500&fit=crop",
    label: "R&D Innovation",
  },
  {
    caption:
      "Supporting government and industry initiatives through drone-based training and technology solutions.",
    img: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=800&h=500&fit=crop",
    label: "Government Partnerships",
  },
];

export default function Media() {
  const mediaMentions = [
    {
      source: "Tech Crunch India",
      type: "Article",
      title:
        "Soaring Aerotech pioneers automated thermal inspections for solar parks.",
      date: "Nov 2024",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=260&fit=crop",
    },
    {
      source: "Aviation Week",
      type: "Interview",
      title:
        "Interview with CEO on the future of DGCA certified drone training in India.",
      date: "Oct 2024",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=260&fit=crop",
    },
    {
      source: "Startup India",
      type: "Recognition",
      title: "Recognized as Top 50 Aerospace Startups to watch in 2024.",
      date: "Aug 2024",
      img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?w=400&h=260&fit=crop",
    },
    {
      source: "The Economic Times",
      type: "Feature",
      title: "How drones are transforming Indian agriculture yields.",
      date: "Jul 2024",
      img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=400&h=260&fit=crop",
    },
  ];

  const awards = [
    {
      title: "Best Aerospace Startup 2023",
      org: "State Tech Awards, Madhya Pradesh",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=500&h=350&fit=crop",
    },
    {
      title: "Excellence in Drone Education",
      org: "AIC Prestige, Atal Innovation Mission",
      img: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&h=350&fit=crop",
    },
    {
      title: "Top Innovator: Agri-Tech",
      org: "India Innovation Summit 2024",
      img: "https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?w=500&h=350&fit=crop",
    },
    {
      title: "DGCA Certified Premium Partner",
      org: "Directorate General of Civil Aviation",
      img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=350&fit=crop",
    },
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
      <section className="bg-[#F5F5F5] border-b border-border py-14">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <div className="section-label">PRESS · AWARDS · GALLERY</div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight mb-4">
              Media & <span className="text-primary">Recognition</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-xl">
              Our journey covered by leading publications, and the awards that validate our commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Achievements ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-14">
            <div className="section-label">ACHIEVEMENTS</div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Our Journey & Impact
            </h2>
          </div>
        </div>

        <div className="space-y-0">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} border-b border-border`}
            >
              {/* Image side */}
              <div className="md:w-3/5 relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5">
                  <span className="bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                    {item.label}
                  </span>
                </div>
                <div className="absolute bottom-5 right-5 text-white/20 font-display font-black text-5xl leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Text side */}
              <div
                className={`md:w-2/5 flex items-center px-8 py-10 md:py-0 bg-white ${i % 2 === 0 ? "" : ""}`}
              >
                <div>
                  <div className="w-8 h-px bg-primary mb-6" />
                  <p className="font-display text-lg md:text-xl text-foreground leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
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
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
