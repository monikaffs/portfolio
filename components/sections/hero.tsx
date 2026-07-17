"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { useTypewriter } from "@/hooks/use-typewriter";

const STATS = [
  { label: "Projects Completed", value: 8, suffix: "+" },
  { label: "Certifications", value: 6, suffix: "" },
  { label: "Current CGPA", value: 8.15, suffix: "/10", isDecimal: true },
  { label: "Hackathon Winner", value: 1, suffix: "" },
  { label: "Internships", value: 2, suffix: "" },
];

const FOCUS_PILLS = [
  { emoji: "☁️", label: "Cloud Computing" },
  { emoji: "🤖", label: "AI Applications" },
  { emoji: "📊", label: "Data Analytics" },
  { emoji: "💻", label: "Full Stack Dev" },
];

function AnimatedCounter({
  value,
  suffix,
  isDecimal,
  inView,
}: {
  value: number;
  suffix: string;
  isDecimal?: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, value);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const display = isDecimal ? count.toFixed(2) : Math.floor(count);
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}
const ROLE_TITLES = [
  "AI Application Builder",
  "Cloud Developer",
  "Full Stack Developer",
  "Data Analytics Enthusiast",
  "BCA Student @ SICSR",
];

function TypewriterSubtitle() {
  const { displayText } = useTypewriter({
    strings: ROLE_TITLES,
    typeSpeed: 75,
    deleteSpeed: 40,
    pauseAfterType: 2000,
    pauseAfterDelete: 350,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="space-y-3 mt-6"
    >
      {/* Typewriter line */}
      <p className="text-xl sm:text-2xl font-heading font-bold text-charcoal min-h-[2rem] flex items-center gap-1">
        <span>{displayText}</span>
        <span className="inline-block w-0.5 h-6 bg-sage animate-[cursor-blink_1s_step-end_infinite] ml-0.5 rounded-sm" />
      </p>
      {/* Static description */}
      <p className="text-sm sm:text-base text-muted leading-relaxed max-w-lg break-words">
        Building AI-powered applications, cloud projects, and modern software
        solutions while continuously learning new technologies.
      </p>
    </motion.div>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeStatsInView = mounted && statsInView;

  return (
    <section
      id="home"
      className="min-h-screen pt-20 pb-12 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background blobs — smaller on mobile */}
      <div className="absolute top-1/4 -right-24 sm:-right-48 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-sage/15 rounded-full blur-[80px] sm:blur-[120px] -z-10 animate-float" />
      <div
        className="absolute bottom-1/4 -left-24 sm:-left-48 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-blue/10 rounded-full blur-[70px] sm:blur-[100px] -z-10"
        style={{ animationDelay: "2s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-sage/5 rounded-full blur-[100px] sm:blur-[150px] -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* ——— Left: Text Content ——— */}
        <div className="space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-sage/10 border border-sage/20 rounded-full text-sage text-xs font-semibold mb-4 sm:mb-6">
              <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
              Open to Opportunities
            </div>

            <h1 className="leading-tight pb-2">
              <span className="font-heading font-black text-4xl sm:text-5xl xl:text-7xl text-muted block">
                Hey, I&apos;m
              </span>
              <span className="font-serif italic font-medium text-5xl sm:text-6xl xl:text-[5.5rem] gradient-text block tracking-tight mt-1 sm:mt-2 pb-1">
                Monika Dangi
              </span>
            </h1>
          </motion.div>

          <TypewriterSubtitle />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-charcoal dark:bg-bg text-bg dark:text-charcoal rounded-xl font-semibold text-sm hover:bg-sage dark:hover:bg-sage dark:hover:text-bg transition-all duration-300 shadow-lg shadow-charcoal/20"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume.pdf"
              className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-card border-2 border-border text-charcoal rounded-xl font-semibold text-sm hover:border-sage hover:text-sage transition-all duration-300 shadow-md"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </motion.div>

          {/* Focus Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="space-y-2"
          >
            <p className="text-xs font-semibold text-muted uppercase tracking-widest">
              Current Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {FOCUS_PILLS.map((pill, i) => (
                <motion.span
                  key={pill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-card border border-border rounded-lg text-xs font-medium text-charcoal/80 shadow-sm hover:border-sage hover:text-sage transition-colors cursor-default"
                >
                  <span>{pill.emoji}</span>
                  {pill.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="space-y-3 pt-2"
          >
            <p className="text-xs font-semibold text-muted uppercase tracking-widest">
              Connect
            </p>
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.linkedin.com/in/monika-dangi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 bg-card border border-border rounded-xl text-xs font-bold text-charcoal/80 shadow-sm hover:border-[#0A66C2] hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/monikaffs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 bg-card border border-border rounded-xl text-xs font-bold text-charcoal/80 shadow-sm hover:border-sage hover:text-sage transition-all duration-300 hover:-translate-y-0.5"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="mailto:monika.dangi127@gmail.com"
                className="flex items-center gap-1.5 px-3.5 py-2 bg-card border border-border rounded-xl text-xs font-bold text-charcoal/80 shadow-sm hover:border-[#EA4335] hover:text-[#EA4335] dark:hover:text-[#EA4335] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
            </div>
          </motion.div>
        </div>

        {/* ——— Right: Dashboard Stats Card ——— */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >


          {/* Main dashboard card */}
          <div className="relative bg-card rounded-2xl border border-border p-6 shadow-2xl shadow-charcoal/10">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div>
                <h3 className="font-heading font-bold text-charcoal text-sm">
                  Portfolio Dashboard
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  Monika Dangi · BCA &apos;26
                </p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 bg-red-400 rounded-full" />
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />
                <div className="w-2.5 h-2.5 bg-sage rounded-full" />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {STATS.slice(0, 4).map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={activeStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group p-4 rounded-xl bg-bg dark:bg-stone-800/50 border border-border hover:border-sage hover:bg-sage/5 transition-all duration-300 cursor-default"
                >
                  <div className="text-2xl font-heading font-black text-charcoal mb-1 gradient-text">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      isDecimal={stat.isDecimal}
                      inView={activeStatsInView}
                    />
                  </div>
                  <div className="text-[11px] font-medium text-[#6B7280] dark:text-stone-400 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 5th stat — full width */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={activeStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="group p-4 rounded-xl bg-gradient-to-r from-sage/10 to-blue/10 border border-sage/20 hover:border-sage/50 transition-all duration-300 cursor-default"
            >
              <div className="text-2xl font-heading font-black gradient-text mb-1">
                <AnimatedCounter
                  value={STATS[4].value}
                  suffix={STATS[4].suffix}
                  inView={activeStatsInView}
                />
              </div>
              <div className="text-[11px] font-medium text-muted leading-tight">
                {STATS[4].label}
              </div>
            </motion.div>

            {/* Status bar */}
            <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
              <div className="w-2 h-2 bg-sage rounded-full animate-pulse" />
              <span className="text-[11px] text-muted font-medium">
                Actively learning · Cloud &amp; AI focused
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
