"use client";

import { useEffect, useRef } from "react";

/**
 * CursorSpotlight — renders a soft radial gradient that follows the mouse.
 * The gradient is painted on a full-screen fixed overlay (pointer-events: none)
 * so it never blocks clicks. Works in both light and dark mode.
 */
export function CursorSpotlight() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (!overlay) return;
        overlay.style.background = `radial-gradient(
          600px circle at ${e.clientX}px ${e.clientY}px,
          rgba(8, 145, 178, 0.07) 0%,
          rgba(79, 70, 229, 0.04) 40%,
          transparent 70%
        )`;
      });
    };

    // Reset when mouse leaves the window
    const handleMouseLeave = () => {
      if (overlay) overlay.style.background = "transparent";
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="fixed inset-0 z-30 pointer-events-none transition-[background] duration-100"
    />
  );
}
