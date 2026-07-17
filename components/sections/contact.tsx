"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const SOCIAL_LINKS = [
  {
    icon: Mail,
    label: "Email",
    handle: "monika.dangi127@gmail.com",
    href: "mailto:monika.dangi127@gmail.com",
    color: "#EA4335",
    bg: "#EA433515",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "linkedin.com/in/monika-dangi",
    href: "https://www.linkedin.com/in/monika-dangi/",
    color: "#0A66C2",
    bg: "#0A66C215",
  },
  {
    icon: Github,
    label: "GitHub",
    handle: "github.com/monikaffs",
    href: "https://github.com/monikaffs",
    color: "#24292F",
    bg: "#24292F15",
  },
];

// 👇 Replace this with your own Formspree endpoint after signing up at https://formspree.io
// Example: https://formspree.io/f/xpwzgkda
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mkoljblb";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/3 to-transparent -z-10" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          number="06"
          title="Get In Touch"
          subtitle="I'm actively looking for internship and full-time opportunities. Let's connect!"
        />

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* ——— Left: Contact Form ——— */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border p-5 sm:p-6 shadow-sm"
          >
            <h3 className="font-heading font-bold text-charcoal text-lg mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-muted mb-6">
              I&apos;ll get back to you within 24 hours.
            </p>

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h4 className="font-heading font-bold text-charcoal text-lg mb-2">
                  Message Sent!
                </h4>
                <p className="text-sm text-muted">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-xs font-bold text-sage hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal/80 mb-1.5 uppercase tracking-wide">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-bg dark:bg-stone-800 border border-border dark:border-stone-700 rounded-xl text-sm text-charcoal placeholder-[#9CA3AF] focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-charcoal/80 mb-1.5 uppercase tracking-wide">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 bg-bg dark:bg-stone-800 border border-border dark:border-stone-700 rounded-xl text-sm text-charcoal placeholder-[#9CA3AF] focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-charcoal/80 mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Hi Monika, I'd love to connect about..."
                    className="w-full px-4 py-3 bg-bg dark:bg-stone-800 border border-border dark:border-stone-700 rounded-xl text-sm text-charcoal placeholder-[#9CA3AF] focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-500 font-semibold">
                    ⚠️ Something went wrong. Please try emailing me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-charcoal dark:bg-bg text-bg dark:text-charcoal rounded-xl font-bold text-sm hover:bg-sage dark:hover:bg-sage dark:hover:text-bg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>


          {/* ——— Right: Info + Social Cards ——— */}
          <div className="space-y-6">
            {/* Quick info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-sm text-charcoal/80">
                <div className="w-8 h-8 rounded-xl bg-sage/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-sage" />
                </div>
                <span>India · Pune</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal/80">
                <div className="w-8 h-8 rounded-xl bg-sage/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-sage" />
                </div>
                <span>Usually responds within 24 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-charcoal/80">
                <div className="w-8 h-8 rounded-xl bg-sage/10 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 bg-sage rounded-full animate-pulse" />
                </div>
                <span className="text-sage font-semibold">Open to Opportunities</span>
              </div>
            </motion.div>

            {/* Social link cards */}
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-sage hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: link.bg }}
                  >
                    <link.icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-charcoal">
                      {link.label}
                    </div>
                    <div className="text-[11px] text-muted truncate">
                      {link.handle}
                    </div>
                  </div>
                  <div
                    className="text-[11px] font-bold uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                    style={{ color: link.color }}
                  >
                    Connect →
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
