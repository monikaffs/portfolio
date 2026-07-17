"use client";

import { motion } from "motion/react";
import { Briefcase, Database } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const EXPERIENCES = [
  {
    title: "AI Automation Intern",
    company: "Labdox Pvt Ltd",
    date: "Mar - May 2026",
    type: "Full-time Internship",
    emoji: "🤖",
    color: "blue" as const,
    icon: Briefcase,
    bullets: [
      "Architected custom AI automation systems from scratch for internal business workflows.",
      "Built and optimized custom RAG (Retrieval-Augmented Generation) pipelines for document intelligence.",
      "Integrated large language models (LLMs) via REST APIs (OpenAI, Gemini) into production systems.",
      "Designed Python automation scripts to streamline and accelerate business data operations.",
    ],
    tags: ["Python", "LLMs", "RAG", "OpenAI API", "Automation"],
  },
  {
    title: "Database Administration Intern",
    company: "Jamna Travels",
    date: "Apr - May 2026",
    type: "Full-time Internship",
    emoji: "🗄️",
    color: "sage" as const,
    icon: Database,
    bullets: [
      "Optimized relational database schemas and complex SQL queries for improved performance.",
      "Developed high-performance SQL queries powering business logging and analytical dashboards.",
      "Improved system query latency by identifying and resolving bottlenecks in critical paths.",
      "Managed schema migrations and designed robust backup and recovery plans.",
    ],
    tags: ["SQL", "MySQL", "Schema Design", "Query Optimization", "Database Admin"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Ambient blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-blue/7 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-sage/7 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="02"
          title="Experience"
          subtitle="Real-world roles where I've shipped AI systems and optimised databases."
        />

        <div className="relative mt-4 pl-6 md:pl-16">
          {/* Timeline spine (left-aligned) */}
          <div className="absolute left-2 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sage via-blue to-transparent" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => {
              return (
                <div key={i} className="relative">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.1, type: "spring", stiffness: 300 }}
                    className={`absolute left-[-16px] md:left-[-40px] top-8 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-4 border-bg flex items-center justify-center text-xs md:text-base shadow-lg z-10 ${
                      exp.color === "blue" ? "bg-blue" : "bg-sage"
                    }`}
                  >
                    {exp.emoji}
                  </motion.div>

                  {/* Card on the right */}
                  <ExperienceCard exp={exp} i={i} direction="right" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Card sub-component ─────────────────────────────────────── */

function ExperienceCard({
  exp,
  i,
  direction,
}: {
  exp: (typeof EXPERIENCES)[0];
  i: number;
  direction: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -28 : 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="group bg-card border border-border rounded-2xl p-6 hover:border-sage/50 hover:shadow-xl transition-all duration-400 overflow-hidden relative"
    >
      {/* Gradient corner accent */}
      <div
        className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${
          exp.color === "blue" ? "bg-blue" : "bg-sage"
        }`}
      />

      {/* Header */}
      <div className="relative flex items-start justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl leading-none md:hidden">{exp.emoji}</span>
            <h3 className="font-heading font-bold text-charcoal text-base leading-tight">
              {exp.title}
            </h3>
          </div>
          <p
            className={`text-sm font-semibold ${
              exp.color === "blue" ? "text-blue" : "text-sage"
            }`}
          >
            {exp.company}
          </p>
        </div>
        <div className="text-right flex-shrink-0">
          <span
            className={`inline-block text-[10px] font-mono font-bold px-2.5 py-1 rounded-lg ${
              exp.color === "blue"
                ? "bg-blue/10 text-blue"
                : "bg-sage/10 text-sage"
            }`}
          >
            {exp.date}
          </span>
          <p className="text-[10px] text-muted mt-1">{exp.type}</p>
        </div>
      </div>

      {/* Bullets */}
      <ul className="relative space-y-2 mb-4">
        {exp.bullets.map((b, j) => (
          <li key={j} className="flex items-start gap-2 text-sm text-charcoal/75 leading-relaxed">
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                exp.color === "blue" ? "bg-blue" : "bg-sage"
              }`}
            />
            {b}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="relative flex flex-wrap gap-1.5">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono font-medium px-2.5 py-0.5 bg-bg border border-border rounded-full text-charcoal/70 hover:border-sage/50 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
