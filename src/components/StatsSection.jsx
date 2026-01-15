import { motion } from "framer-motion";
import {
  Users,
  Youtube,
  Video,
  Radio,
  MessageCircle,
  GraduationCap,
  Music
} from "lucide-react";

const stats = [
  {
    label: "Μέλη Κοινότητας",
    value: "33K+",
    sub: "Σε όλες τις πλαρφόρμες",
    icon: <Users className="h-8 w-8" />,
    big: true,
  },
  {
    label: "YouTube Subs",
    value: "13K",
    icon: <Youtube className="h-6 w-6" />,
    sub: "Απολαμβάνουν Δωρεάν Υλικό",
  },
  {
    label: "Full Courses",
    value: "10+",
    icon: <GraduationCap className="h-6 w-6" />,
    sub: "Πρακτικά & Δομημένα Μαθήματα"
  },
  {
    label: "YouTube Videos",
    value: "750+",
    icon: <Video className="h-6 w-6" />,
    sub: "Δωρεάν Tutorials Προγραμματισμού",
  },
  {
    label: "TikTok",
    value: "20K",
    icon: (<i className="fa-brands fa-tiktok text-2xl text-[hsl(var(--accent))]" />),
    sub: "Καθημερινά tips προγραμματισμού"
  },
  {
    label: "Spotify",
    value: "200",
    icon: <Radio className="h-6 w-6" />,
    sub: "Podcasts για developers"
  },
  {
    label: "Discord",
    value: "1100+",
    icon: <MessageCircle className="h-6 w-6" />,
    sub: "Μέλη συζητάνε καθημερινά",
  },
  
];

const StatCard = ({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    whileHover={{ y: -6, scale: 1.02 }}
    className={`
      relative rounded-2xl p-6
      bg-[hsl(var(--card)/0.6)]
      backdrop-blur-xl
      dark:hover:shadow-[0_5px_32px_0_hsl(var(--primary)/0.35)]
      shadow-lg hover:shadow-2xl
      border border-white/5
      transition-all duration-300
      ${stat.big ? "md:col-span-2" : ""}
    `}
  >
    <div className="flex items-center gap-4 mb-4 text-[hsl(var(--accent))]">
      <div className="p-3 rounded-xl bg-[hsl(var(--accent)/0.15)]">
        {stat.icon}
      </div>
      <div>
        <h3 className="text-sm text-muted-foreground">{stat.label}</h3>
        <p className="text-3xl font-bold text-foreground">
          {stat.value}
        </p>
      </div>
    </div>

    {stat.sub && (
      <p className="text-sm text-muted-foreground">{stat.sub}</p>
    )}

    {/* glow effect */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent)/0.15)] to-transparent" />
    </div>
  </motion.div>
);

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Η Κοινότητα του <span className="gradient-text">CodeGRow</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.01 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
        >
          Χιλιάδες προγραμματιστές μαθαίνουν καθημερινά μέσα από videos,
          courses και την κοινότητά μας.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
