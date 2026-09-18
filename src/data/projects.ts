import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Job Portal - SkillMatchAI",
    description:
      "AI-assisted recruitment platform that matches candidates with job opportunities.",
    longDescription:
      "Full-stack job portal focused on resume screening, candidate matching, and recruiter workflows. Built to demonstrate practical AI integration with a React frontend, Spring Boot APIs, and relational data storage.",
    demoHighlights: ["Resume screening", "Candidate matching", "Recruiter workflow"],
    techStack: ["React", "Spring Boot", "PostgreSQL", "AI"],
    category: "Spring Boot - React",
    categoryClass: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    icon: "AI",
    iconGradient: "from-cyan-400 to-purple-500",
    github: "https://github.com/seha-limani/Skill-Match-AI.git",
    featured: true,
    gradient: "from-cyan-500/30 via-sky-500/20 to-purple-600/30",
  },
  {
    id: 2,
    title: "Phy6Master",
    description:
      "Modern e-commerce interface with product browsing, cart management, and checkout flow.",
    longDescription:
      "A polished shopping experience that highlights frontend structure, reusable UI sections, cart interactions, and a checkout-ready customer flow.",
    demoHighlights: ["Browse products", "Update cart", "Checkout flow"],
    previewImage: "/images/phy6master-demo.svg",
    previewAlt: "Phy6Master shopping cart demo preview",
    demoUrl: "/images/phy6master-demo.svg",
    techStack: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    category: "E-Commerce UI",
    categoryClass: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    icon: "UI",
    iconGradient: "from-purple-400 to-pink-500",
    featured: true,
    gradient: "from-purple-500/30 via-violet-500/20 to-pink-500/30",
  },
  {
    id: 3,
    title: "AyurwedhaWeb",
    description:
      "Web platform for Ayurvedic service information, user access, and digital health-related workflows.",
    longDescription:
      "Collaborative full stack web project built around Ayurvedic service discovery and management flows, with reusable React screens and backend-ready data handling.",
    demoHighlights: ["Service pages", "User flow", "Team project"],
    techStack: ["React", "Node.js", "MongoDB", "GitHub"],
    category: "Full Stack Team Project",
    categoryClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    icon: "WEB",
    iconGradient: "from-emerald-400 to-teal-500",
    github: "https://github.com/IT24101643/Ayurweda-web.git",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  },
  {
    id: 4,
    title: "Law-Portal",
    description:
      "Legal information portal API designed for structured access to law-related services and data.",
    longDescription:
      "Backend-focused law portal project using API design, server-side logic, and integration-ready endpoints for legal service workflows.",
    demoHighlights: ["API design", "Service workflow", "Backend logic"],
    techStack: ["Python", "FastAPI", "React", "NLP"],
    category: "API - AI/NLP",
    categoryClass: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    icon: "API",
    iconGradient: "from-rose-400 to-orange-500",
    github: "https://github.com/viduthranaweera2001/law-portal-262-api.git",
    gradient: "from-rose-500/30 via-orange-500/20 to-amber-500/30",
  },
];
