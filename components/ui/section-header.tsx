"use client";

import { motion } from "motion/react";

interface SectionHeaderProps {
  number?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ number, title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-8 sm:mb-12 md:mb-16"
    >
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span
            className="text-xs font-bold text-sage bg-sage/10 px-2.5 py-1 rounded-md tracking-wider"
            style={{ fontFamily: "'Times New Roman', Times, serif" }}
          >
            {number}
          </span>
        )}
        <div className="h-px flex-1 bg-gradient-to-r from-sage/40 to-transparent" />
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-[#1F2937] dark:text-[#F8F5F0] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-[#6B7280] dark:text-stone-400 max-w-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
