"use client";

import { motion } from "motion/react";
import { SectionHeader } from "@/components/ui/section-header";

const SKILLS = [
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "SQL", icon: "https://img.icons8.com/color/48/database.png" },
  { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "REST APIs", icon: "https://img.icons8.com/color/48/api.png" },
  { name: "Gemini API", icon: "https://img.icons8.com/color/48/gemini-ai.png" },
  { name: "OpenRouter", icon: "https://cdn.simpleicons.org/openrouter", invertDark: true },
  { name: "Streamlit", icon: "https://cdn.simpleicons.org/streamlit" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Power BI", icon: "https://img.icons8.com/color/48/power-bi.png" },
  { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "XAMPP", icon: "https://img.icons8.com/color/48/xampp.png" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel", invertDark: true },
  { name: "Canva", icon: "https://img.icons8.com/color/48/canva.png" },
];

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-bg/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="04"
          title="Technical Skills"
          subtitle="Technologies I work with across the full stack."
        />

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2 sm:gap-3">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.08 }}
              className="group flex flex-col items-center gap-1.5 sm:gap-2.5 p-2 sm:p-4 bg-card border border-border rounded-xl sm:rounded-2xl hover:border-sage/60 hover:shadow-lg hover:shadow-sage/10 transition-all duration-300 cursor-default"
            >
              <div className="w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={`w-7 h-7 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform duration-300 ${
                    'invertDark' in skill && skill.invertDark ? "dark:invert" : ""
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `<span class="text-base sm:text-xl font-bold text-sage">${skill.name.slice(0, 2).toUpperCase()}</span>`;
                    }
                  }}
                />
              </div>
              <span className="text-[9px] sm:text-[11px] font-semibold text-charcoal/70 dark:text-bg/60 text-center leading-tight group-hover:text-sage transition-colors duration-200">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
