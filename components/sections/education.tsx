"use client";

import { motion } from "motion/react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function Education() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            <h2 className="text-xs font-black tracking-[0.2em] uppercase whitespace-nowrap">Education</h2>
            <div className="h-px w-full bg-stone-200 dark:bg-stone-800"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-50 dark:bg-stone-900/50 p-6 border border-stone-200 dark:border-stone-800 rounded-sm"
        >
          <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
            <div>
              <p className="text-lg font-bold text-foreground">Bachelor of Computer Applications (BCA)</p>
              <p className="text-sm text-stone-500 font-medium">Symbiosis Institute of Computer Studies and Research</p>
            </div>
            <div className="text-left md:text-right">
              <span className="text-xs font-mono bg-stone-200 dark:bg-stone-800 px-2 py-1 rounded-sm">Class of '26</span>
              <p className="text-xs text-stone-500 mt-2 font-mono">CGPA: 8.9 / 10</p>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold text-stone-400 mb-3 uppercase tracking-wider">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2">
              {["Data Structures", "Algorithms", "Database Management", "Artificial Intelligence", "Operating Systems", "Cloud Computing", "Software Engineering"].map(course => (
                <span key={course} className="text-xs font-medium text-stone-600 dark:text-stone-300">
                  {course}{" "}
                  <span className="text-stone-300 dark:text-stone-700 mx-1">•</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
