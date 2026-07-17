"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Target,
  Lightbulb,
  BookOpen,
  MapPin,
  Calendar,
  Code2,
  Cpu,
  Database,
  Cloud,
  Sparkles,
  User,
  Briefcase,
  Heart,
  Brain,
  Sprout,
  FileText,
  Terminal,
  BarChart3,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

/* ── data ─────────────────────────────────────────────────── */

const STATS = [
  { label: "Projects Built", value: "8+", icon: Code2 },
  { label: "CGPA", value: "8.15", icon: GraduationCap },
  { label: "Internships", value: "2", icon: Briefcase },
  { label: "Technologies", value: "15+", icon: Cpu },
];

const INTERESTS = [
  {
    icon: Brain,
    label: "AI & Machine Learning",
    desc: "Building intelligent systems that automate workflows and solve real-world problems using Python, NLP, and deep learning.",
    gradient: "from-blue to-blue/60",
  },
  {
    icon: Terminal,
    label: "Software Development",
    desc: "Crafting clean, functional applications — from backend logic to user-facing features — using Java, Python, and Flask.",
    gradient: "from-sage to-sage/60",
  },
  {
    icon: BarChart3,
    label: "Data Analytics",
    desc: "Turning raw datasets into meaningful insights through analysis, visualization, and pattern recognition.",
    gradient: "from-[#4f46e5]/40 to-[#9333ea]/20",
  },
  {
    icon: Sprout,
    label: "AgriTech & Social Impact",
    desc: "Building tech that matters — like Krishi Lens, which helps farmers identify crop diseases using AI.",
    gradient: "from-[#14532d]/40 to-[#166534]/20",
  },
  {
    icon: FileText,
    label: "Research & Innovation",
    desc: "Exploring the cutting edge — with an LSTM-based research paper accepted for IEEE publication.",
    gradient: "from-[#0f766e]/40 to-[#115e59]/20",
  },
  {
    icon: Database,
    label: "Database & System Design",
    desc: "Designing efficient, structured data systems that power reliable and scalable applications.",
    gradient: "from-blue to-sage",
  },
];

type Tab = "story" | "interests";

/* ── component ────────────────────────────────────────────── */

export function About() {
  const [activeTab, setActiveTab] = useState<Tab>("story");

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "story", label: "My Story", icon: User },
    { id: "interests", label: "Interests", icon: Heart },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Ambient background blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sage/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="01"
          title="About Me"
          subtitle="A passionate BCA student building a path in software engineering, AI, and cloud."
        />

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.88 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group relative bg-card border border-border rounded-2xl p-5 text-center overflow-hidden hover:border-sage/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sage/5 to-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <s.icon className="w-5 h-5 text-sage mx-auto mb-2 opacity-70" />
                <p className="font-heading font-black text-2xl gradient-text">{s.value}</p>
                <p className="text-[11px] text-muted mt-0.5 font-medium">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Main layout ── */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 sm:gap-8 lg:gap-10">

          {/* ── Left: profile card ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col gap-5"
          >
            {/* Avatar card */}
            <div className="group relative bg-card border border-border rounded-2xl p-6 text-center overflow-hidden hover:border-sage/40 hover:shadow-xl transition-all duration-500">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-sage to-blue blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              {/* Avatar */}
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-sage to-blue flex items-center justify-center text-2xl font-heading font-black text-white shadow-lg">
                  MD
                </div>
                <span className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-green-400 border-2 border-card rounded-full shadow" />
              </div>
              <h3 className="font-heading font-bold text-charcoal text-base">Monika Dangi</h3>
              <p className="text-xs text-sage font-semibold mt-0.5">BCA Student & Developer</p>
              <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted">
                <MapPin className="w-3 h-3" />
                <span>Pune, India</span>
              </div>

              <div className="my-4 border-t border-border" />

              <ul className="space-y-2 text-left">
                {[
                  { icon: GraduationCap, label: "SICSR, Pune", sub: "Class of '26" },
                  { icon: Calendar, label: "Available for Opportunities", sub: "Open to Work" },
                  { icon: Code2, label: "Full-Stack + AI", sub: "Focus Area" },
                ].map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-3.5 h-3.5 text-sage" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-charcoal leading-none">{f.label}</p>
                      <p className="text-[10px] text-muted mt-0.5">{f.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card border border-border rounded-2xl p-5 hover:border-blue/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-blue/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-blue" />
                </div>
                <span className="text-xs font-semibold text-muted uppercase tracking-wider">Education</span>
              </div>
              <p className="text-sm font-bold text-charcoal font-heading leading-tight">
                Bachelor of Computer Applications
              </p>
              <p className="text-[11px] text-muted mt-0.5">
                Symbiosis Institute of Computer Studies and Research
              </p>
              <div className="flex items-center gap-3 mt-3">
                <span className="text-xs font-mono font-bold bg-sage/10 text-sage px-2.5 py-1 rounded-lg">
                  CGPA: 8.15 / 10
                </span>
                <span className="text-[10px] text-muted">2023 – 2026</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["DSA", "AI", "Cloud", "DBMS", "OS", "Networks"].map((c) => (
                  <span
                    key={c}
                    className="text-[10px] font-medium px-2 py-0.5 bg-bg border border-border rounded-md text-charcoal/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: tabbed content ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="bg-card border border-border rounded-2xl overflow-hidden"
          >
            {/* Tab bar */}
            <div className="flex border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-4 text-xs font-semibold transition-colors duration-200 flex-1 justify-center sm:flex-initial ${
                    activeTab === tab.id ? "text-sage" : "text-muted hover:text-charcoal"
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sage to-blue"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab panels */}
            <div className="p-4 sm:p-6 lg:p-8 min-h-[320px] sm:min-h-[380px]">
              <AnimatePresence mode="wait">
                {activeTab === "story" && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <h4 className="text-base font-heading font-bold text-charcoal flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-sage" />
                      Who I Am
                    </h4>
                    <div className="space-y-4 text-sm text-charcoal/75 leading-relaxed">
                      <p>
                        I&apos;m a <strong>BCA graduate from Symbiosis Institute of Computer Studies and Research (SICSR), Pune</strong>,{" "}
                        with a passion for building intelligent systems and solving real-world problems through technology.
                      </p>

                      <p>
                        With hands-on experience in <strong>AI automation, database management, and full-stack development</strong>,{" "}
                        I bring both academic depth <strong>(8.15 CGPA)</strong> and practical exposure from internships and live projects.{" "}
                        During my time at <strong>Labdox Pvt. Ltd.</strong>, I worked on AI-powered automation tools — including an{" "}
                        <strong>intelligent interview platform</strong> — and discovered just how much I love building things that{" "}
                        actually work in the real world.
                      </p>

                      <p>
                        I&apos;ve also explored the intersection of <strong>agriculture and AI</strong> through <strong>Krishi Lens</strong>,{" "}
                        a crop disease detection system that reminded me why I got into tech in the first place — to create something{" "}
                        meaningful. On the research side, I have a paper on <strong>LSTM-based systems accepted for IEEE publication</strong>,{" "}
                        a milestone I&apos;m genuinely proud of.
                      </p>

                      <p>
                        I&apos;m currently looking for opportunities where I can keep learning, keep building, and contribute to a team{" "}
                        that cares about what they make. Whether it&apos;s a <strong>data pipeline, an AI feature, or a backend system</strong> —{" "}
                        I show up <strong>curious and ready to figure it out.</strong>
                      </p>
                    </div>

                    {/* Tech pills */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {["Python", "Java", "Flask", "MySQL", "PostgreSQL", "HTML/CSS", "JavaScript", "LSTM", "Git", "Jupyter"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-sage/10 text-sage border border-sage/20 hover:bg-sage/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>
                  </motion.div>
                )}

                {activeTab === "interests" && (
                  <motion.div
                    key="interests"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                  >
                    <h4 className="text-base font-heading font-bold text-charcoal flex items-center gap-2 mb-6">
                      <Heart className="w-4 h-4 text-sage" />
                      What I Love
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {INTERESTS.map((item, i) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.07 }}
                          whileHover={{ y: -3 }}
                          className="group relative p-4 bg-bg border border-border rounded-xl hover:border-sage/50 hover:shadow-md transition-all duration-300 overflow-hidden cursor-default"
                        >
                          <div
                            className={`absolute -top-6 -right-6 w-16 h-16 rounded-full bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}
                          />
                          <div className="relative flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sage/20 transition-colors duration-200">
                              <item.icon className="w-4 h-4 text-sage" />
                            </div>
                            <div>
                              <h5 className="text-xs font-bold text-charcoal mb-1">{item.label}</h5>
                              <p className="text-[11px] text-muted leading-snug">{item.desc}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
