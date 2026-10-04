import type { JourneyMilestone } from "../types/portfolio";

export const journeyMilestones: JourneyMilestone[] = [
  {
    id: 1,
    step: "Foundation",
    title: "Started with programming fundamentals",
    description:
      "Built a foundation in Java, C, C++, object-oriented programming, databases, and problem solving through university work.",
    icon: "education",
    accent: "violet",
  },
  {
    id: 2,
    step: "Build",
    title: "Moved into full stack projects",
    description:
      "Connected React interfaces with backend APIs, databases, and team workflows while developing practical academic projects.",
    icon: "code",
    accent: "cyan",
  },
  {
    id: 3,
    step: "Experience",
    title: "Worked on real client applications",
    description:
      "Gained six months of professional development experience at Zerocode, contributing to frontend, backend, testing, and delivery tasks.",
    icon: "work",
    accent: "amber",
  },
  {
    id: 4,
    step: "Now",
    title: "Preparing for a software engineering internship",
    description:
      "Strengthening full stack, .NET/C#, API testing, automation, and AI-assisted application development through focused projects.",
    icon: "target",
    accent: "emerald",
  },
];
