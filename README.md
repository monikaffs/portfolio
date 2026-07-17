# 🌐 Monika Dangi — Personal Portfolio

> A modern, fully responsive portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Showcasing projects, experience, skills, and achievements in AI, Cloud, and Full Stack Development.

**Live Site →** [monikaffs.github.io](https://monikaffs.github.io) *(coming soon)*  
**GitHub →** [github.com/monikaffs](https://github.com/monikaffs)  
**LinkedIn →** [linkedin.com/in/monika-dangi](https://www.linkedin.com/in/monika-dangi/)

---

## ✨ Features

- ⚡ **Next.js 15 App Router** — fast, server-first rendering
- 🎨 **Dark / Light Mode** — smooth theme toggle with persistence
- 📱 **Fully Responsive** — optimized for phone, tablet, and desktop
- 🌀 **Framer Motion Animations** — smooth scroll-triggered transitions
- 🖋️ **Typewriter Effect** — animated role titles in the hero section
- 📊 **Animated Counters** — live stat counters for projects, CGPA, internships
- 🖼️ **Project Gallery** — image carousel with lightbox in detail overlay
- 🏅 **Certificate Lightbox** — click to zoom certificates full screen
- 📬 **Contact Form** — connected to Formspree for real email delivery
- 🔖 **Scroll Progress Bar** — gradient progress bar at the top
- 🎯 **Floating CTA Badge** — "Open to Opportunities" sticky button
- 🌟 **Cursor Spotlight** — subtle ambient glow following the cursor

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion (motion/react) |
| Icons | Lucide React |
| Forms | Formspree |
| Fonts | Inter, Outfit, JetBrains Mono, Playfair Display |
| Deployment | Vercel / GitHub Pages |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/monikaffs/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Add your GEMINI_API_KEY to .env.local

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles & CSS variables
│   ├── layout.tsx           # Root layout with fonts & metadata
│   └── page.tsx             # Main page composition
├── components/
│   ├── layout/
│   │   ├── header.tsx       # Sticky navbar with mobile hamburger
│   │   └── footer.tsx       # Footer with nav + social links
│   ├── sections/
│   │   ├── hero.tsx         # Hero with typewriter + stats dashboard
│   │   ├── about.tsx        # About with tabbed story + interests
│   │   ├── experience.tsx   # Timeline of internships
│   │   ├── projects.tsx     # Filterable project grid + detail overlay
│   │   ├── skills.tsx       # Tech skills icon grid
│   │   ├── achievements.tsx # Awards, certificates, learning badges
│   │   └── contact.tsx      # Contact form + social links
│   └── ui/
│       ├── cursor-spotlight.tsx
│       ├── floating-hire-badge.tsx
│       ├── scroll-progress.tsx
│       └── section-header.tsx
├── hooks/
│   └── use-typewriter.ts    # Custom typewriter animation hook
├── public/
│   ├── favicon.png          # MD monogram favicon
│   └── *.png                # Project screenshots & certificates
└── lib/
    └── utils.ts
```

---

## 🎨 Colour Palette

The site uses the **Midnight Cyber** palette:

| Token | Light | Dark |
|---|---|---|
| Background | `#F0F4F8` | `#0B0F19` |
| Foreground | `#0F172A` | `#F3F4F6` |
| Card | `#FFFFFF` | `#161B2B` |
| Accent (Sage) | `#0891B2` | `#06B6D4` |
| Blue | `#4F46E5` | `#6366F1` |
| Muted | `#64748B` | `#9CA3AF` |

---

## 📬 Contact Form Setup

The contact form uses [Formspree](https://formspree.io). To use your own endpoint:

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL
3. Replace `FORMSPREE_ENDPOINT` in `components/sections/contact.tsx`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Monika Dangi**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/monika-dangi/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/monikaffs)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:monika.dangi127@gmail.com)

</div>
