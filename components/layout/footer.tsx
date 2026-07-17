"use client";

import { motion } from "motion/react";
import { Mail, Linkedin, Github, Code2, Database, Heart } from "lucide-react";

const SOCIAL = [
  { icon: Mail, href: "mailto:monika.dangi127@gmail.com", label: "Email" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/monika-dangi/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/monikaffs", label: "GitHub" },
];

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2937] dark:bg-[#0D0C0B] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b border-white/10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sage to-blue flex items-center justify-center text-white font-bold text-base font-heading">
                M
              </div>
              <div>
                <div className="font-heading font-bold text-white text-base">Monika Dangi</div>
                <div className="text-xs text-white/50">BCA Student</div>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Building solutions, learning continuously, and growing one project at a time.
            </p>
          </motion.div>

          {/* Nav links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 hover:text-sage transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {SOCIAL.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-sage flex items-center justify-center transition-colors"
                >
                  <s.icon className="w-4 h-4 text-white/70" />
                </motion.a>
              ))}
            </div>
            <div className="text-xs text-white/50 space-y-1">
              <p>📍 Pune</p>
              <p>🎓 BCA Class of &apos;26</p>
              <p className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-sage rounded-full inline-block animate-pulse" />
                Open to opportunities
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {year} Monika Dangi. All rights reserved.</p>
          <p className="font-heading font-bold text-white/50 tracking-widest uppercase">Monika Dangi</p>
        </div>
      </div>
    </footer>
  );
}
