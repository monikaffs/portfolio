"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Star,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Zap,
  Layers,
  X,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const CATEGORIES = ["All", "AI", "Web Development", "Java", "Python"];

const PROJECTS = [
  {
    id: 13,
    title: "CreditIQ — Credit Risk & Loan Default Predictor",
    description:
      "An interpretable machine learning web app that predicts the probability a loan applicant will default, and explains every decision using SHAP — built for transparent credit risk assessment.",
    longDescription:
      "CreditIQ is a full-stack machine learning application built on 150,000 real loan applicant records from the Give Me Some Credit Kaggle dataset. It goes beyond a basic ML model — it includes exploratory data analysis, model comparison, SHAP explainability, batch prediction, and an interactive threshold tuner, all wrapped in a clean multi-page Streamlit dashboard. The project solves a real business problem: banks lose billions annually to loan defaults. CreditIQ helps lenders identify high-risk applicants early, while explaining why an applicant is flagged — making AI decisions transparent and fair.",
    gradient: "from-[#0284c7]/40 via-[#0d9488]/30 to-[#10b981]/10",
    images: [
      "/creditiq-1.png",
      "/creditiq-2.png",
      "/creditiq-3.png",
      "/creditiq-4.png",
      "/creditiq-5.png",
      "/creditiq-6.png",
      "/creditiq-7.png",
      "/creditiq-8.png",
      "/creditiq-9.png",
      "/creditiq-10.png",
      "/creditiq-11.png",
      "/creditiq-12.png",
    ],
    captions: [
      "CreditIQ – Single Applicant default risk predictor with real-time feedback",
      "Interactive slider controls for entering financial details and credit history",
      "Color-coded risk gauge indicating low, medium, or high default probability",
      "SHAP explainability dashboard visualizing feature contributions for a prediction",
      "SHAP waterfall chart showing positive and negative impacts on the risk score",
      "Batch CSV Prediction – Processing pipeline for handling multiple applicant profiles",
      "Uploaded batch results summary table with risk categorization",
      "Interactive Threshold Tuner – Real-time visualization of Precision-Recall trade-offs",
      "Recall vs Precision and F1-score performance curves under varying thresholds",
      "EDA Dashboard – Distribution of Kaggle Give Me Some Credit dataset features",
      "Exploratory Data Analysis – Analysis of age, income, and late payment metrics",
      "Model Comparison – Logistic Regression, Random Forest, and XGBoost ROC curves",
    ],
    tags: [
      "Machine Learning",
      "Python",
      "XGBoost",
      "SHAP",
      "Streamlit",
      "Data Science",
      "FinTech",
      "Credit Risk",
      "Explainable AI",
      "Data Visualization",
    ],
    category: "Python",
    features: [
      "⚡ Single Applicant Risk Prediction: Input 10 financial details and get default probability instantly with a color-coded gauge.",
      "🔍 SHAP Explainability: Explains every decision transparently using dynamic SHAP waterfall charts.",
      "📁 Batch CSV Prediction: Process multiple applicant records simultaneously and download predictions as a structured CSV.",
      "⚙️ Interactive Threshold Tuner: Adjust classification thresholds dynamically to optimize Precision, Recall, and F1.",
      "📊 EDA Dashboard: Full visual analysis of the 150K dataset covering class imbalances, correlation heatmaps, and outlier caps.",
      "⚔️ Model Comparison: Side-by-side performance comparison of XGBoost, Random Forest, and Logistic Regression.",
      "⚖️ Class Imbalance Optimization: Handled 93% non-default imbalance using scale_pos_weight in XGBoost.",
    ],
    github: "https://github.com/monikaffs/creditiq",
    live: "https://creditiq-risk-predictor.streamlit.app/",
    featured: true,
    aspectRatio: "aspect-[17/10]",
  },
  {
    id: 1,
    title: "AI Powered Automated Interview Platform",
    description:
      "A full-stack AI platform that automates interview processes through voice and text-based interactions, real-time evaluation, and intelligent candidate analytics.",
    longDescription:
      "An AI-powered automated interview platform built as a full-stack application using Python (FastAPI) for the backend and ReactJS for the frontend. The platform automates interview workflows through AI-driven voice and text interactions, offering real-time candidate evaluation, performance analysis, automated report generation, and intelligent recruiter dashboards. Integrates Gemini API and OpenRouter Llama for advanced AI response evaluation.",
    gradient: "from-[#0f172a]/60 via-[#1e1b4b]/40 to-[#312e81]/20",
    images: [
      "/ai-interview-1.png",
      "/ai-interview-2.png",
      "/ai-interview-3.png",
      "/ai-interview-4.png",
    ],
    captions: [
      "AI Hire — landing interface",
      "Candidate interview dashboard",
      "Recruiter analytics and candidate management interface",
      "Supabase database integration for AI Hire platform",
    ],
    tags: ["Python", "FastAPI", "ReactJS", "NLP / AI Models", "Node.js", "Figma", "Gemini API", "OpenRouter Llama"],
    category: "AI",
    features: [
      "🤖 AI-driven voice & text-based interview automation",
      "📊 Real-time candidate performance evaluation & scoring",
      "📋 Automated report generation for recruiters",
      "🧠 Integrated Gemini API & OpenRouter Llama for response analysis",
      "🎨 Responsive UI designed with Figma",
      "🔗 Full-stack integration with FastAPI backend & ReactJS frontend",
    ],
    github: "https://github.com/monikaffs/ai-interview-platform-ver2",
    live: "",
    featured: true,
  },
  {
    id: 2,
    title: "KrishiLens - Smart Farming Assistant",
    description:
      "A smart agriculture support application that helps farmers make informed decisions using AI image analysis and weather forecasting.",
    longDescription:
      "Krishi Lens is a smart agriculture support application that helps farmers make informed decisions using AI image analysis, weather forecasting, and location-based insights. The platform allows users to upload crop images to analyze crop health, detect maturity stages, and identify potential issues, while also providing soil insights, crop suitability recommendations, and irrigation guidance based on location. With a user-friendly interface and multi-language support, Krishi Lens aims to make modern farming technology accessible to farmers across India.",
    gradient: "from-[#14532d]/40 via-[#166534]/30 to-green/10",
    images: [
      "/krishi-2.png",
      "/krishi-1.png",
      "/krishi-3.png",
      "/krishi-4.png",
      "/krishi-5.png",
    ],
    captions: [
      "Dashboard with Location Details",
      "KrishiLens Multilingual Support",
      "Detailed Soil and Crop Insights",
      "Location Based Weather Forecast",
      "AI Crop Health Analysis Report",
    ],
    tags: ["Kotlin", "Android SDK", "WebView", "WebChromeClient", "ValueCallback"],
    category: "AI",
    features: [
      "🏆 Smart India Hackathon Winner",
      "📸 AI Image Analysis for crop health, maturity, and disease detection",
      "🌍 Multilingual Support making it accessible to farmers across India",
      "🌦️ Real-time Weather Forecasting and location-based insights",
      "🌱 Soil insights, crop suitability, and irrigation guidance",
    ],
    github: "https://github.com/harshdeepsinghofficial/KrishiLens",
    live: "",
    featured: true,
  },
  {
    id: 3,
    title: "CareerPilot AI",
    description:
      "An intelligent career development platform featuring AI-powered resume analysis, ATS compatibility scoring, and personalized learning roadmaps.",
    longDescription:
      "CareerPilot AI is an intelligent career development platform designed to bridge the gap between academic learning and industry expectations. By leveraging AI-powered resume analysis, the platform evaluates a user's profile, identifies strengths and weaknesses, detects missing skills, and provides actionable recommendations tailored to their target career path. Users can upload their resumes, select a desired role, and optionally compare their profile against a real job description. CareerPilot AI then generates ATS compatibility scores, job match analysis, personalized learning roadmaps, curated learning resources, and role-specific interview preparation guidance. The platform transforms a static resume into a comprehensive career growth strategy, helping students and professionals understand what skills they need, what to learn next, and how to improve their chances of securing their dream job.",
    gradient: "from-[#0284c7]/40 via-[#0369a1]/20 to-sky/10",
    images: [
      "/careerpilot-1.png",
      "/careerpilot-2.png",
      "/careerpilot-3.png",
      "/careerpilot-4.png",
      "/careerpilot-5.png",
    ],
    captions: [
      "CareerPilot AI Landing Interface — Navigate Your Career with Precision AI",
      "Intelligent Career Dashboard — ATS Compatibility, Job Match & Skill Gaps",
      "Features Overview — ATS Optimization, Skill Gap Analysis & Roadmap Generation",
      "How it Works — Three simple steps to career clarity",
      "Start Your Journey — Transition from static resumes to dynamic roadmaps",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Google Gemini AI", "jsPDF", "PDF Parsing", "Vercel"],
    category: "AI",
    features: [
      "📊 ATS Analysis & Job Description Matching",
      "🔍 Skill Gap Detection & Career Roadmap Generation",
      "💬 Role-specific Interview Question Generation",
      "📚 Curated Learning Resource Recommendations",
      "📄 PDF Export System utilizing jsPDF",
      "⚡ Fully responsive frontend built with Next.js & Tailwind CSS",
    ],
    github: "https://github.com/monikaffs/careerpilotai",
    live: "https://careerpilotai-two.vercel.app/",
    featured: true,
  },
  {
    id: 4,
    title: "LabDox LMS — Career OS Platform",
    description:
      "A web-based learning management system designed to simulate a modern career-oriented platform, bridging the gap between learning and employability.",
    longDescription:
      "LabDox LMS (Career OS) is a web-based learning platform developed during my internship at LabDox, designed to simulate a modern career-oriented learning management system. The platform focuses on bridging the gap between learning and employability, offering a structured environment where users can explore content and register for opportunities.",
    gradient: "from-[#4f46e5]/40 via-[#9333ea]/20 to-purple/10",
    images: [
      "/labdox-lms-1.png",
      "/labdox-lms-2.png",
      "/labdox-lms-3.png",
      "/labdox-lms-4.png",
      "/labdox-lms-5.png",
      "/labdox-lms-6.png",
      "/labdox-lms-7.png",
    ],
    captions: [
      "Home — Career OS landing page",
      "About the Learning Management System",
      "Course Catalog — enroll, drop, or request courses",
      "Profile Overview — courses, achievements, badges & skills analytics",
      "Mentor Portal — upload and manage course content",
      "Course Curriculum with AI chatbot assistance",
      "Supabase backend — real-time PostgreSQL database",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL"],
    category: "AI",
    features: [
      "⚡ Built a complete LMS-style platform from scratch using core web technologies",
      "🔗 Integrated Supabase backend for real-time data handling",
      "🌐 Deployed across multiple platforms (GitHub Pages + Swipe Pages)",
      "🧩 Designed with a Career OS concept (learning → leveling up → job readiness)",
      "📦 Implemented user data capture via structured database",
    ],
    github: "https://github.com/monikaffs/labdox-lms",
    live: "https://monikaffs.github.io/labdox-lms/",
    featured: true,
  },
  {
    id: 5,
    title: "Salary Se Stability Tak",
    description:
      "A modern, highly engaging landing page built to calculate financial runway and stability for salaried professionals.",
    longDescription:
      "A modern, highly engaging landing page built to calculate financial runway and stability. Includes an interactive assessment tool for salaried professionals who want to understand their financial health and plan for long-term stability.",
    gradient: "from-[#1e3a8a]/40 via-[#312e81]/30 to-blue/10",
    images: [
      "/stability-landing-page.png",
      "/stability-landing-page-2.png",
      "/stability-landing-page-3.png",
      "/stability-landing-page-4.png",
      "/stability-landing-page-5.png",
    ],
    captions: [
      "Landing page — financial stability for salaried professionals",
      "What financial stability really means",
      "Your experience & career journey",
      "Key learnings and financial insights",
      "Registration — start your stability journey",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Swipepages"],
    category: "Web Development",
    features: [
      "🧮 90-second interactive stability test",
      "📊 Salaried runway calculator",
      "🌙 Sleek, responsive dark-theme design",
      "⚡ Optimised for conversion and engagement",
    ],
    github: "https://github.com/monikaffs/-Salary-Se-Stability-Tak---Landing-Page",
    live: "https://monikaffs.github.io/-Salary-Se-Stability-Tak---Landing-Page/",
    featured: false,
  },
  {
    id: 6,
    title: "Research Paper: Cloud-Enabled LSTM Diabetes Risk Prediction",
    description:
      "A cloud-enabled LSTM-based framework for real-time diabetes risk prediction using the MIMIC-III clinical dataset.",
    longDescription: (
      <>
        Developed a cloud-enabled LSTM-based framework for real-time diabetes risk prediction using the MIMIC-III clinical dataset. The system leverages deep learning and temporal data analysis to identify high-risk patients with improved accuracy over traditional machine learning models, supporting scalable and efficient healthcare decision-making. <strong>Selected for publication by IEEE.</strong>
      </>
    ),
    gradient: "from-[#0f766e]/40 via-[#115e59]/30 to-teal/10",
    images: [
      "/mimic-iii.png",
    ],
    captions: [
      "Research Paper – Cloud-Enabled LSTM Diabetes Risk Prediction",
    ],
    tags: ["Python", "LSTM", "Deep Learning", "Cloud Computing", "MIMIC-III Dataset", "Healthcare Analytics"],
    category: "AI",
    features: [
      "📊 Developed an LSTM-based deep learning framework for diabetes risk prediction",
      "☁️ Cloud-enabled architecture for scalable and efficient healthcare decision-making",
      "📈 Real-time temporal data analysis using the MIMIC-III clinical dataset",
      <>🏅 <strong>Selected for publication by IEEE.</strong></>,
    ],
    github: "",
    live: "",
    featured: false,
  },
  {
    id: 7,
    title: "BNI MCM Performance Tracker",
    description:
      "A web-based dashboard for BNI MCM to monitor member activities, contributions, and key performance metrics in real time.",
    longDescription:
      "A web-based performance tracking application developed for BNI MCM to monitor member activities, contributions, and key performance metrics in real time. The application provides an organised dashboard interface for tracking performance-related data efficiently — covering member management, real-time analytics, and a weekly leaderboard. Built with modern web technologies and deployed on Vercel and Cloudflare.",
    gradient: "from-[#1a0000]/60 via-[#3b0a0a]/40 to-[#7f1d1d]/20",
    images: [
      "/bni-mcm-1.png",
      "/bni-mcm-2.png",
      "/bni-mcm-3.png",
    ],
    captions: [
      "Dashboard interface of the BNI MCM Performance Tracker",
      "Committee members management interface",
      "Analytics and leaderboard dashboard",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Vercel", "Cloudflare", "Backend APIs"],
    category: "AI",
    features: [
      "📊 Real-time dashboard for tracking member performance & activities",
      "👥 Committee members management — add, update, and monitor members",
      "📈 Weekly trends analytics with referral and visitor charts",
      "🏆 MCM leaderboard with live rankings and points",
      "☁️ Deployed on Vercel with Cloudflare for performance & reliability",
      "🔗 Firebase backend for real-time data management",
    ],
    github: "https://github.com/monikaffs/performance-tracker-bni-mcm",
    live: "https://performance-tracker-bni-mcm.vercel.app/",
    featured: false,
  },
  {
    id: 8,
    title: "Data Vault Pro",
    description:
      "Collect user inputs and store them securely in Supabase & Google Sheets simultaneously. No latency, no limits.",
    longDescription:
      "The ultra-fast way to collect user inputs and store them securely in Supabase & Google Sheets simultaneously. Getting your data pipeline running takes less than 2 minutes with a simple 3-step integration.",
    gradient: "from-[#4f46e5]/40 via-[#6366f1]/20 to-blue/10",
    images: [
      "/datavault-pro-1.png",
      "/datavault-pro-2.png",
      "/datavault-pro-3.png",
      "/datavault-pro-4.png",
    ],
    captions: [
      "Home page — connect your data pipelines in minutes",
      "Integration logic — how the dual-sync works",
      "Configuration details — step-by-step setup",
      "Data routing — submissions to PostgreSQL & Google Sheets",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Google Sheets API", "Supabase"],
    category: "Web Development",
    features: [
      "🔌 Connect Supabase & Google Sheet credentials in secure config",
      "🛠️ Dynamic constructor to add unlimited custom input fields",
      "📤 Route submissions to PostgreSQL & Spreadsheet storage",
      "⚡ Sub-2-minute integration setup",
    ],
    github: "https://github.com/monikaffs/DataVault-Pro",
    live: "https://monikaffs.github.io/DataVault-Pro/index.html",
    featured: false,
  },
  {
    id: 9,
    title: "InsureEase — Insurance Policy Holding System",
    description:
      "A Java EE web application to manage insurance policies and claims with role-based access, multi-step claim submission, and admin approval workflows.",
    longDescription:
      "InsureEase is a full-featured Insurance Policy Holding System built using Java EE technologies (Servlets, JSP, JDBC). The system supports user registration & login, admin role-based access, policy application, multi-step insurance claim submission, real-time claim status tracking, and admin approval/rejection of claims. Built on the MVC architecture with JDBC for database connectivity and HttpSession for secure state management, the platform efficiently handles insurance claim processing end-to-end.",
    gradient: "from-[#1e3a5f]/60 via-[#1d4ed8]/30 to-[#3b82f6]/10",
    images: [
      "/insureease-2.png",
      "/insureease-1.png",
      "/insureease-3.png",
      "/insureease-6.png",
      "/insureease-4.png",
      "/insureease-5.png",
      "/insureease-7.png",
    ],
    captions: [
      "InsureEase — Landing Page",
      "phpMyAdmin Backend",
      "InsureEase — Login Page",
      "InsureEase — User Registration (Create Account)",
      "Choose Your Insurance Type",
      "phpMyAdmin — policy_db claims database",
      "InsureEase Admin Dashboard",
    ],
    tags: ["Java", "Java EE", "Servlets", "JSP", "JDBC", "MVC", "MySQL", "JavaBeans", "HttpSession"],
    category: "Java",
    features: [
      "🔐 User Registration & Login with HttpSession-based state management",
      "🛡️ Admin role-based access control for claim approval/rejection",
      "📋 Multi-step insurance claim submission workflow",
      "📊 Real-time claim status tracking (Pending / Approved / Rejected)",
      "🗄️ JDBC-powered MySQL database connectivity (policy_db)",
      "🏗️ MVC architecture with Servlets, JSP & JavaBeans",
    ],
    github: "https://github.com/monikaffs/InsureEase",
    live: "",
    featured: false,
  },
  {
    id: 10,
    title: "Codsoft — Creative Digital Agency Landing Page",
    description:
      "A modern, high-conversion landing page for a creative digital agency built as a task during the Codsoft Web Development Internship.",
    longDescription:
      "A responsive, visually engaging landing page developed for Codsoft during my Web Development internship. The page showcases a 'Creative Digital Agency' offering digital services like graphic design, video animation, content writing, branding, web development, SEO, and social media marketing. Built with clean, modern web standards to ensure optimal performance and responsive layouts across all device form factors.",
    gradient: "from-[#4f46e5]/40 via-[#d946ef]/20 to-[#ec4899]/10",
    images: [
      "/codsoft-landing-1.png",
    ],
    captions: [
      "We Are Creative! — Creative Digital Agency landing page",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Web Development",
    features: [
      "⚡ Sleek, mobile-first responsive layout with clean custom styling",
      "🎨 Engaging sections showcasing digital services (design, branding, web development, marketing)",
      "✨ Interactive client navigation and micro-interactions built with vanilla JS",
      "💼 Structured and developed as a task for the Codsoft Web Development Internship",
    ],
    github: "https://github.com/monikaffs/CODSOFT",
    live: "https://monikaffs.github.io/CODSOFT/",
    featured: false,
  },
  {
    id: 11,
    title: "Personal Study Planner - Java",
    description:
      "A complete desktop-based personal study management application built in Java Swing, featuring interactive study planners, calendars, checklists, and mood tracking.",
    longDescription:
      "Personal Study Planner is a comprehensive desktop-based learning management workstation built completely with Java Swing and AWT. The application provides students with a suite of integrated productivity tools: a personalized study planner, course scheduler, monthly calendar viewer, interactive to-do checklist, and a dedicated mood tracker with historical progress logs. Built using standard Java Swing UI components, layout managers, and design patterns, the tool delivers a modern desktop interface that helps students organize study schedules and monitor mental health side-by-side.",
    gradient: "from-[#134e4a]/60 via-[#0f766e]/40 to-[#14b8a6]/20",
    images: [
      "/home page.png",
      "/study planner.png",
      "/study plan.png",
      "/calender.png",
      "/to do output.png",
      "/mood tracker.png",
      "/tracker output.png",
      "/task output.png",
      "/output.png",
    ],
    captions: [
      "Home Page — Welcoming main menu and navigation hub",
      "Study Planner — Log study targets, courses, and schedules",
      "Study Plan Logs — Create and review customized study timelines",
      "Calendar View — Interactive monthly scheduler for study events",
      "To-Do List — Check off daily academic tasks and assignments",
      "Mood Tracker — Log daily focus levels, mood states, and notes",
      "Mood Logs — Historical record of tracked well-being and notes",
      "Task Output Logs — Track active progress and status of study tasks",
      "General Plan Logs — Review course outlines and planned sessions",
    ],
    tags: ["Java", "Java Swing", "Java AWT", "Desktop App", "MVC Architecture", "Layout Managers", "File I/O"],
    category: "Java",
    features: [
      "📅 Interactive Monthly Calendar for logging study sessions and dates",
      "📝 Customizable Study Planner to define courses, topics, and goals",
      "✅ Dynamic To-Do Checklist for managing and checking off academic tasks",
      "🧠 Integrated Mood Tracker with log logs to align study habits with mental well-being",
      "🎨 Customized desktop UI with rounded buttons and custom styled views",
      "💾 Offline state management via local structured file storage / Java Serialization",
    ],
    github: "https://github.com/monikaffs/Personal-Study-Planner",
    live: "",
    featured: false,
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 12,
    title: "What to Watch — AI Movie Recommender",
    description:
      "A machine learning movie recommendation system that suggests personalized films based on genres, ratings, release years, and content similarities using cosine similarity.",
    longDescription:
      "What to Watch is a content-based movie recommendation platform designed to eliminate endless scrolling. Powered by Python, Streamlit, and Scikit-Learn, it utilizes cosine similarity to calculate movie feature vectors from a dataset of 4,800+ films (TMDB 5000 Movies). Users can filter movies by multiple genres, specific release year ranges, and minimum rating thresholds, or get direct recommendations based on a chosen movie. The platform dynamically interfaces with the TMDB API to pull high-resolution movie posters, detailed summaries, ratings, and YouTube trailers.",
    gradient: "from-[#7f1d1d]/40 via-[#b91c1c]/20 to-[#ef4444]/10",
    images: [
      "/what-to-watch-1.png",
      "/what-to-watch-2.png",
      "/what-to-watch-3.png",
    ],
    captions: [
      "What to Watch — Landing Interface",
      "Tailor recommendations based on genres, release years, ratings, or a seed movie",
      "Dynamic movie details popup featuring ratings, overview, and trailer options",
    ],
    tags: ["Python", "Streamlit", "Pandas", "Scikit-Learn", "NLTK", "TMDB API", "Cosine Similarity", "Content-Based Filtering"],
    category: "Python",
    features: [
      "🎬 Content-based movie recommendation engine powered by Cosine Similarity",
      "📊 TMDB dataset integration with over 4,800 movies processed via Pandas",
      "🎨 Robust multiselect genre filters, release year range, and minimum rating sliders",
      "🔍 Movie-based recommendation input to find similar films you already love",
      "🔗 Real-time TMDB API integration fetching posters, ratings, overview text, and release details",
      "🍿 Direct trailer links fetched from TMDB's video endpoint for official YouTube trailers",
    ],
    github: "https://github.com/monikaffs/what-to-watch-ai-website",
    live: "",
    featured: false,
    aspectRatio: "aspect-[2548/1341]",
  },
];



interface ProjectItem {
  id: number;
  title: string;
  description: string;
  longDescription: React.ReactNode;
  gradient: string;
  emoji?: string;
  image?: string;
  images?: string[];
  captions?: string[];
  tags: string[];
  category: string;
  features: React.ReactNode[];
  github: string;
  live: string;
  featured: boolean;
  aspectRatio?: string;
}

// ─── Full-screen Project Detail Overlay ──────────────────────────────────────
function ProjectDetailOverlay({
  project,
  onBack,
}: {
  project: ProjectItem;
  onBack: () => void;
}) {
  const [activeImg, setActiveImg] = useState(0);
  const imgs = project.images ?? (project.image ? [project.image] : []);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onBack(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onBack]);

  return (
    <motion.div
      key="detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[999] bg-bg overflow-y-auto"
    >

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 min-h-screen">
        {/* ── Top nav bar ── */}
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-base text-muted">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-card/60 backdrop-blur-sm text-charcoal dark:text-bg/80 hover:border-sage hover:text-sage transition-colors font-semibold group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform duration-200" />
              Back
            </button>
            <span className="opacity-30">›</span>
            <button
              onClick={onBack}
              className="hover:text-sage transition-colors cursor-pointer"
            >
              Projects
            </button>
            <span className="opacity-30">›</span>
            <span className="text-charcoal dark:text-bg/90 font-medium truncate max-w-[180px] sm:max-w-xs">
              {project.title}
            </span>
          </div>
          {/* Close button */}
          <button
            onClick={onBack}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-card border border-border text-muted hover:border-sage hover:text-sage transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Two-column content ── */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* LEFT: Info */}
          <div>
            {/* Badges + Title */}
            <div className="mb-7">
              <div className="flex items-center flex-wrap gap-2 mb-3">
                {project.featured && (
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-sage/20 text-sage rounded-full flex items-center gap-1 border border-sage/30">
                    <Star className="w-2.5 h-2.5 fill-sage" /> Featured
                  </span>
                )}
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-blue/10 text-blue rounded-full border border-blue/20">
                  {project.category}
                </span>
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-4xl text-charcoal dark:text-bg leading-tight mb-3">
                {project.title}
              </h2>
              <div className="w-16 h-0.5 bg-sage rounded-full" />
            </div>

            {/* Description */}
            <p className="text-charcoal/65 dark:text-bg/60 leading-relaxed mb-9 text-sm">
              {project.longDescription}
            </p>

            {/* Stats */}
            <div className="flex gap-3 mb-9">
              <div className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 rounded-lg bg-sage/15 flex items-center justify-center flex-shrink-0">
                  <Layers className="w-4 h-4 text-sage" />
                </div>
                <div>
                  <p className="text-xl font-bold text-charcoal dark:text-bg leading-none">{project.tags.length}</p>
                  <p className="text-[10px] text-muted mt-0.5">Technologies</p>
                </div>
              </div>
              <div className="flex-1 flex items-center gap-3 px-4 py-3.5 rounded-xl bg-card border border-border">
                <div className="w-9 h-9 rounded-lg bg-blue/15 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-blue" />
                </div>
                <div>
                  <p className="text-xl font-bold text-charcoal dark:text-bg leading-none">{project.features.length}</p>
                  <p className="text-[10px] text-muted mt-0.5">Key Features</p>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 mb-10">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sage text-white text-sm font-bold hover:bg-sage/85 transition-colors shadow-md shadow-sage/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-card border border-border text-charcoal dark:text-bg/80 text-sm font-bold hover:border-sage hover:text-sage transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              )}
            </div>

            {/* Technologies Used */}
            <div className="mb-9">
              <h4 className="flex items-center gap-2 text-sm font-bold text-charcoal dark:text-bg mb-3">
                <span className="text-sage font-mono text-xs">&lt;/&gt;</span>
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold px-3 py-1.5 bg-card border border-border rounded-lg text-charcoal/80 dark:text-bg/70 hover:border-sage/60 hover:text-sage transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: Screenshots */}
          <div className="lg:sticky lg:top-10">
            {imgs.length > 0 ? (
              <div>
                {/* Main screenshot */}
                <div
                  className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} ${project.aspectRatio ?? "aspect-video"} mb-3 shadow-lg`}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImg}
                      src={imgs[activeImg]}
                      alt={`${project.title} screenshot ${activeImg + 1}`}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.28 }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>


                  {imgs.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveImg((p) => (p === 0 ? imgs.length - 1 : p - 1))}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/75 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setActiveImg((p) => (p === imgs.length - 1 ? 0 : p + 1))}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/55 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/75 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium">
                        {activeImg + 1} / {imgs.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Caption — below the screenshot */}
                {project.captions?.[activeImg] && (
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeImg}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.22 }}
                      className="text-xs text-muted text-center mt-2 mb-3 italic"
                    >
                      {project.captions[activeImg]}
                    </motion.p>
                  </AnimatePresence>
                )}

                {/* Thumbnails */}
                {imgs.length > 1 && (
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {imgs.map((src, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImg(idx)}
                        className={`flex-shrink-0 w-20 h-13 rounded-lg overflow-hidden ring-2 transition-all duration-200 ${activeImg === idx
                          ? "ring-sage scale-105"
                          : "ring-transparent opacity-55 hover:opacity-85"
                          }`}
                        style={{ height: "52px" }}
                      >
                        <img src={src} alt={`thumb ${idx + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}

                {/* Key Features — below thumbnails */}
                <div className="mt-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-charcoal dark:text-bg mb-4">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {project.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-charcoal/65 dark:text-bg/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div
                className={`rounded-2xl bg-gradient-to-br ${project.gradient} ${project.aspectRatio ?? "aspect-video"} flex items-center justify-center`}
              >
                <span className="text-7xl">{project.emoji}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  onDetails,
}: {
  project: ProjectItem;
  index: number;
  onDetails: () => void;
}) {
  const coverImg = project.images?.[0] ?? project.image ?? null;

  return (
    <motion.div
      layout
      key={project.id}
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
      className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-sage/50 hover:shadow-2xl hover:shadow-sage/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
    >
      {/* Image / Gradient header — taller */}
      <div
        className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden flex items-center justify-center`}
      >
        {coverImg ? (
          <img
            src={coverImg}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span className="text-6xl group-hover:scale-110 transition-transform duration-500">
            {project.emoji}
          </span>
        )}

        {project.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 bg-sage text-white rounded-lg flex items-center gap-1 shadow-md">
              <Star className="w-2.5 h-2.5 fill-white" /> Featured
            </span>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white/90 rounded-lg border border-white/10">
            {project.category}
          </span>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-card to-transparent" />
      </div>

      {/* Card content — more padding + spacious */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-heading font-bold text-charcoal dark:text-bg/90 text-lg mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-[13px] text-muted leading-relaxed mb-5 flex-1 line-clamp-2">
          {project.description}
        </p>

        {/* Actions */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-sage hover:text-sage/75 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          )}
          <button
            onClick={onDetails}
            className="flex items-center gap-1.5 text-xs font-bold text-charcoal/65 dark:text-bg/55 hover:text-sage transition-colors cursor-pointer ml-auto"
          >
            Details
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Projects Section ────────────────────────────────────────────────────
export function Projects() {
  const [showMore, setShowMore] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const sorted = [...PROJECTS];

  const filtered = sorted.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const visible = showMore ? filtered : filtered.slice(0, 3);

  return (
    <>
      {/* ── Full-screen detail overlay (rendered outside section flow) ── */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailOverlay
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* ── Projects section ── */}
      <section id="projects" className="py-16 sm:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/3 to-transparent -z-10" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            number="03"
            title="Featured Projects"
            subtitle="A selection of projects I've built across web development, AI, cloud, and data analytics."
          />

          {/* ── Category filter bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowMore(false); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wide transition-all duration-200 ${activeCategory === cat
                  ? "bg-charcoal dark:bg-bg text-bg dark:text-charcoal shadow-md"
                  : "bg-card border border-border text-muted hover:border-sage hover:text-sage"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* ── Project grid ── */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 mb-10">
            <AnimatePresence mode="sync">
              {visible.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onDetails={() => setSelectedProject(project)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* ── See More Projects (centred) ── */}
          {filtered.length > 3 && (
            <div className="flex justify-center">
              <button
                onClick={() => {
                  if (showMore) {
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }
                  setShowMore((v) => !v);
                }}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-card border border-border text-sm font-bold text-charcoal/80 dark:text-bg/70 hover:border-sage hover:text-sage transition-all duration-200"
              >
                {showMore ? (
                  <>Show Less <ChevronUp className="w-4 h-4" /></>
                ) : (
                  <>See More Projects <ChevronDown className="w-4 h-4" /></>
                )}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
