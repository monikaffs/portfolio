"use client";

import { motion } from "motion/react";
import { Download, FileText } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-y border-stone-200 dark:border-stone-800 py-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2 className="text-2xl font-serif text-foreground mb-2">
              Review my trajectory.
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm max-w-md">
              Comprehensive details on my academic achievements, technical qualifications, and development experience.
            </p>
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Resume download would trigger here.");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 dark:bg-stone-200 text-ivory dark:text-stone-900 border border-stone-800 dark:border-stone-200 uppercase tracking-wider text-[10px] font-bold rounded-sm hover:invert transition-colors"
          >
            <Download className="w-4 h-4" /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
