export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  title: string;
  iconColor: string;
  iconBg: string;
  gradient: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    iconColor: "#FB7185",
    iconBg: "bg-rose-500/20",
    gradient: "from-rose-500/25 via-rose-400/10 to-transparent",
    skills: [
      { name: "C" },
      { name: "C#" },
      { name: "C++" },
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "TypeScript" },
    ],
  },
  {
    title: "Frontend",
    iconColor: "#38BDF8",
    iconBg: "bg-cyan-500/20",
    gradient: "from-cyan-500/25 via-cyan-400/10 to-transparent",
    skills: [
      { name: "React" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Backend",
    iconColor: "#A78BFA",
    iconBg: "bg-violet-500/20",
    gradient: "from-violet-500/25 via-violet-400/10 to-transparent",
    skills: [
      { name: ".NET" },
      { name: "Spring Boot" },
      { name: "Node.js" },
      { name: "REST API" },
      { name: "OOP" },
      { name: "Kafka" },
    ],
  },
  {
    title: "Database",
    iconColor: "#34D399",
    iconBg: "bg-emerald-500/20",
    gradient: "from-emerald-500/25 via-emerald-400/10 to-transparent",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Testing & API",
    iconColor: "#FBBF24",
    iconBg: "bg-amber-500/20",
    gradient: "from-amber-500/25 via-amber-400/10 to-transparent",
    skills: [
      { name: "JMeter" },
      { name: "Selenium" },
      { name: "Postman" },
      { name: "Swagger" },
    ],
  },
  {
    title: "DevOps & Monitoring",
    iconColor: "#2DD4BF",
    iconBg: "bg-teal-500/20",
    gradient: "from-teal-500/25 via-teal-400/10 to-transparent",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Kafka" },
      { name: "Grafana" },
      { name: "VS Code" },
    ],
  },
  {
    title: "Design & Delivery",
    iconColor: "#818CF8",
    iconBg: "bg-indigo-500/20",
    gradient: "from-indigo-500/25 via-indigo-400/10 to-transparent",
    skills: [
      { name: "Figma" },
      { name: "Jira" },
      { name: "UI/UX" },
      { name: "Agile" },
      { name: "Problem Solving" },
    ],
  },
];

/** @deprecated Use skillCategories - kept for SkillCategoryIcon type compat */
export type SkillBarCategory = SkillCategory & {
  barColor: string;
  skills: { name: string; level: number }[];
};

export const skillBarCategories: SkillBarCategory[] = skillCategories.map((cat) => ({
  ...cat,
  barColor: "text-cyan-400",
  skills: cat.skills.map((skill) => ({ ...skill, level: 0 })),
}));

export const strengths = [
  "Problem Solver",
  "Full Stack Learner",
  "Quality Focused",
  "Team Contributor",
];
