"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Trophy, Award, Star, ChevronDown, ChevronUp, ExternalLink, X, ZoomIn } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const FEATURED = [
  {
    title: "Intern of the Month",
    org: "Labdox Pvt Ltd",
    date: "2026",
    type: "Award",
    emoji: "🌟",
    image: "/labdox-intern.png",
    gradient: "from-[#1d4ed8]/40 via-[#1e40af]/30 to-blue/10",
    accentColor: "#1d4ed8",
    desc: "Recognized as Intern of the Month for outstanding contributions in AI Automation at Labdox Pvt Ltd.",
    actionText: "View linkedin post by company",
    link: "https://www.linkedin.com/posts/labdox_internofthemonth-futureleaders-growth-activity-7451166525602021376-1gEU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXsV1sBShFo2m9dDr4nCtePDJ-Gf6ZJ9G0",
  },
  {
    title: "1st Place — Smart India Hackathon",
    subtitle: "Hackathon Project— KrishiLens",
    org: "Symbiosis Institute of Computer Studies and Research",
    date: "Sept 2025",
    type: "Award",
    emoji: "🏆",
    image: "/sih-winner.png",
    gradient: "from-[#dc2626]/40 via-[#ef4444]/30 to-red/10",
    accentColor: "#dc2626",
    desc: "Developed the KrishiLens Smart Farming Assistant project for this hackathon, utilizing AI image analysis and weather forecasting.",
    actionText: "View Project",
    link: "https://github.com/harshdeepsinghofficial/KrishiLens",
  }
];

const ALL_CERTIFICATES = [
  {
    title: "AI Automation Internship Completion",
    org: "Labdox Pvt Ltd",
    date: "May 2026",
    emoji: "🤖",
    image: "/labdox-ai-automation-cert.png",
    rating: "4.5",
    score: "90%",
  },
  { title: "Data Analytics Virtual Experience", org: "Deloitte / Forage", date: "July 2025", emoji: "📊", image: "/deloitte-cert.png" },
  { title: "Introduction to Cybersecurity Awareness", org: "HP LIFE / HP Foundation", date: "Mar 2025", emoji: "🔒", image: "/hp-life-cert.png" },
  { title: "Digital Skills: User Experience", org: "FutureLearn / Accenture", date: "Feb 2025", emoji: "🎨", image: "/accenture-ux-cert.png", imagePosition: "object-center" },
  { title: "Blockchain Developer Training", org: "Simplilearn SkillUp", date: "June 2024", emoji: "⛓️", image: "/simplilearn-blockchain-cert.png" },
  { title: "Python for Machine Learning", org: "Great Learning Academy", date: "June 2024", emoji: "🤖", image: "/great-learning-ml-cert.png", imagePosition: "object-center" },
  { title: "Web Development Virtual Internship", org: "CodSoft", date: "June 2024", emoji: "💻", image: "/codsoft-internship.png", imagePosition: "object-top" },
];

const LEARNING_BADGES = [
  { label: "Microsoft Learn", emoji: "💙", count: "12 modules" },
  { label: "Azure", emoji: "☁️", count: "3 certs" },
  { label: "Kaggle", emoji: "📊", count: "5 courses" },
  { label: "Google Cloud", emoji: "🌐", count: "4 courses" },
  { label: "DeepLearning.AI", emoji: "🤖", count: "2 specializations" },
  { label: "Hackathons", emoji: "🏆", count: "3 events" },
  { label: "Coursera", emoji: "🎓", count: "6 courses" },
  { label: "freeCodeCamp", emoji: "🔥", count: "2 certs" },
];

function FeaturedCard({ item, index }: { item: (typeof FEATURED)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12 }}
      className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-sage hover:shadow-xl hover:shadow-sage/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Gradient top or Image */}
      <div className={`${item.image ? "" : "h-28"} w-full bg-gradient-to-br ${item.gradient} flex items-center justify-center relative overflow-hidden`}>
        {item.image ? (
          <img src={item.image} alt={item.title} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <span className="text-5xl group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
        )}
        <div className={`absolute inset-0 bg-gradient-to-t from-card to-transparent ${item.image ? "opacity-10" : "opacity-50"}`} />
        <span
          className="absolute top-3 right-3 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md text-white shadow-sm"
          style={{ backgroundColor: item.accentColor }}
        >
          {item.type}
        </span>
      </div>

      <div className="p-5">
        <h3 className={`font-heading font-bold text-charcoal mb-1 ${item.title === "Intern of the Month" ? "text-xl" : "text-sm"}`}>
          {item.title}
        </h3>
        {(item as any).subtitle && (
          <p className="text-xs font-semibold text-charcoal/90 mb-1">{(item as any).subtitle}</p>
        )}
        <p className="text-[11px] text-muted mb-3">
          {item.org} · {item.date}
        </p>
        <p className="text-[12px] text-charcoal/80 leading-relaxed">
          {item.desc}
        </p>
        {!(item as any).hideAction && (
          item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="mt-4 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide hover:gap-2 transition-all w-fit cursor-pointer" style={{ color: item.accentColor }}>
              {item.actionText || "View Credential"} <ExternalLink className="w-3 h-3" />
            </a>
          ) : (
            <button className="mt-4 flex items-center gap-1 text-[11px] font-bold uppercase tracking-wide hover:gap-2 transition-all cursor-pointer" style={{ color: item.accentColor }}>
              {item.actionText || "View Credential"} <ExternalLink className="w-3 h-3" />
            </button>
          )
        )}
      </div>
    </motion.div>
  );
}

function CertCard({ cert, index, onImageClick }: { cert: (typeof ALL_CERTIFICATES)[0]; index: number; onImageClick?: (src: string) => void }) {
  const hasImage = !!(cert as any).image;

  if (hasImage) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.25, delay: index * 0.04 }}
        className="group bg-card rounded-xl border border-border overflow-hidden hover:border-sage hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
        onClick={() => onImageClick?.((cert as any).image)}
      >
        {/* Certificate image preview (aspect-ratio preserved) */}
        <div className="relative overflow-hidden bg-white/50 dark:bg-black/10 aspect-[1.414] w-full flex items-center justify-center">
          <img
            src={(cert as any).image}
            alt={cert.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {/* Hover zoom overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <ZoomIn className="w-4 h-4 text-charcoal" />
            </div>
          </div>
        </div>
        {/* Text info */}
        <div className="p-3 flex items-start gap-2">
          <div className="w-7 h-7 rounded-lg bg-sage/10 flex items-center justify-center text-sm flex-shrink-0">
            {cert.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-charcoal text-xs leading-snug truncate">{cert.title}</h4>
            <p className="text-[10px] text-muted mt-0.5 truncate">{cert.org}</p>
            <div className="flex items-center gap-2 mt-1.5 flex-wrap">
              <span className="text-[10px] font-mono text-sage">{cert.date}</span>
              {(cert as any).rating && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-md">
                  ★ {(cert as any).rating} Rating
                </span>
              )}
              {(cert as any).score && (
                <span className="text-[9px] font-bold px-1.5 py-0.5 bg-blue/10 text-blue dark:text-blue-400 rounded-md">
                  {(cert as any).score} Score
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      className="group bg-card rounded-xl border border-border p-4 hover:border-sage hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3"
    >
      <div className="w-9 h-9 rounded-xl bg-sage/10 flex items-center justify-center text-lg flex-shrink-0">
        {cert.emoji}
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-charcoal text-xs leading-snug truncate">
          {cert.title}
        </h4>
        <p className="text-[10px] text-muted mt-0.5 truncate">
          {cert.org}
        </p>
        <p className="text-[10px] font-mono text-sage mt-0.5">{cert.date}</p>
      </div>
    </motion.div>
  );
}

export function Achievements() {
  const [showAll, setShowAll] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const INITIAL_COUNT = 3;
  const visibleCerts = showAll ? ALL_CERTIFICATES : ALL_CERTIFICATES.slice(0, INITIAL_COUNT);

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-bg/50 dark:bg-transparent">
      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/85 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-5 right-5 w-10 h-10 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              src={lightboxImg}
              alt="Certificate"
              className="max-w-full max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="05"
          title="Achievements"
          subtitle="Certifications, awards, and milestones from my learning journey."
        />

        {/* ——— 1. Featured Achievements ——— */}
        <div className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-6">
            🌟 Featured
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-5">
            {FEATURED.map((item, i) => (
              <FeaturedCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* ——— 2. Certificate Gallery ——— */}
        <div id="certificate-gallery" className="mb-16">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-6">
            🏅 Certificate Gallery
          </h3>

          <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <AnimatePresence mode="popLayout">
              {visibleCerts.map((cert, i) => (
                <CertCard key={cert.title} cert={cert} index={i} onImageClick={(src) => setLightboxImg(src)} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Expand / Collapse button */}
          {ALL_CERTIFICATES.length > INITIAL_COUNT && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={() => {
                  if (showAll) {
                    document.getElementById("certificate-gallery")?.scrollIntoView({ behavior: "smooth" });
                  }
                  setShowAll((prev) => !prev);
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-sage/30 rounded-xl text-sm font-bold text-sage hover:bg-sage hover:text-bg hover:border-sage transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {showAll ? (
                  <>
                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    View All Certificates ({ALL_CERTIFICATES.length - INITIAL_COUNT} more)
                  </>
                )}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
