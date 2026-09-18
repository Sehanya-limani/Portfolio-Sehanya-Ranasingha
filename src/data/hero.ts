import type { HeroData } from "../types/hero";

export const heroData: HeroData = {
  name: "J.A.D. Sehanya Limani Ranasingha",

  title: "Software Engineering Internship Candidate",

  subtitle: "Computer Science Undergraduate",

  professionalTitle: "Computer Science Undergraduate | Full Stack Developer",

  tagline:
    "Third-year Computer Science undergraduate at SLIIT building full stack and AI-focused web applications with React, Spring Boot, and modern databases.",

  resume: "/resume/resume.pdf",

  profile: "/images/profile.jpeg",

  techBadges: [
    "React",
    "TypeScript",
    "Spring Boot",
    "Java",
    "PostgreSQL",
    "REST APIs",
    "GitHub",
  ],

  stats: [
    { value: "6", label: "Months Experience" },
    { value: "3", label: "Core Projects" },
    { value: "3rd", label: "Year at SLIIT" },
    { value: "AI", label: "Career Focus" },
  ],
};

export default heroData;
