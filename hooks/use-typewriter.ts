"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  strings: string[];
  typeSpeed?: number;     // ms per character while typing
  deleteSpeed?: number;   // ms per character while deleting
  pauseAfterType?: number; // ms to pause after fully typed
  pauseAfterDelete?: number; // ms to pause after fully deleted
}

export function useTypewriter({
  strings,
  typeSpeed = 80,
  deleteSpeed = 45,
  pauseAfterType = 1800,
  pauseAfterDelete = 400,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (strings.length === 0) return;

    const currentString = strings[currentIndex];

    if (isPaused) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayText.length < currentString.length) {
          setDisplayText(currentString.slice(0, displayText.length + 1));
        } else {
          // Fully typed — pause before deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseAfterType);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Fully deleted — pause then move to next string
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % strings.length);
          }, pauseAfterDelete);
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isPaused, currentIndex, strings, typeSpeed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return { displayText, isDeleting };
}
