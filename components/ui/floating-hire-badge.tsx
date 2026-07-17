"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * FloatingHireBadge — appears in the bottom-right corner after the user
 * scrolls past the hero section (~100vh). Pulses to draw attention.
 * Clicking it scrolls smoothly to the contact section.
 */
export function FloatingHireBadge() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 80% of one viewport height
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="hire-badge"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={scrollToContact}
          aria-label="Open to Opportunities — Click to go to contact section"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-2xl shadow-sage/30 border border-sage/30 backdrop-blur-md cursor-pointer group"
          style={{
            background: "linear-gradient(135deg, rgba(8,145,178,0.15) 0%, rgba(79,70,229,0.12) 100%)",
          }}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          {/* Pulsing dot */}
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="absolute inline-flex h-full w-full rounded-full bg-sage opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sage" />
          </span>

          {/* Text */}
          <span className="text-xs font-bold text-charcoal dark:text-foreground whitespace-nowrap tracking-wide">
            🎓 Open to Opportunities
          </span>

          {/* Arrow hint on hover */}
          <motion.span
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-sage text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:inline"
          >
            →
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
