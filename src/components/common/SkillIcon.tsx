import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGit,
  SiDocker,
  SiPostman,
  SiPython,
  SiC,
  SiCplusplus,
  SiDotnet,
  SiHtml5,
  SiCss,
  SiFigma,
  SiJira,
  SiApachejmeter,
  SiSelenium,
  SiGrafana,
  SiApachekafka,
  SiGithub,
} from "react-icons/si";
import { FaJava, FaCode, FaPalette, FaLightbulb, FaUsers } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const skillIconMap: Record<string, IconType> = {
  React: SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "Spring Boot": SiSpringboot,
  Java: FaJava,
  "REST API": TbApi,
  "Node.js": SiNodedotjs,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  Docker: SiDocker,
  "VS Code": VscVscode,
  Postman: SiPostman,
  Python: SiPython,
  C: SiC,
  "C#": SiDotnet,
  ".NET": SiDotnet,
  "C++": SiCplusplus,
  HTML: SiHtml5,
  CSS: SiCss,
  Figma: SiFigma,
  Jira: SiJira,
  JMeter: SiApachejmeter,
  Selenium: SiSelenium,
  Grafana: SiGrafana,
  Kafka: SiApachekafka,
  GitHub: SiGithub,
  OOP: FaCode,
  "UI/UX": FaPalette,
  "Problem Solving": FaLightbulb,
  Agile: FaUsers,
};

export default function SkillIcon({ name, size = 28 }: { name: string; size?: number }) {
  const Icon = skillIconMap[name] ?? FaCode;
  return <Icon size={size} aria-hidden />;
}
