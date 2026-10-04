import type { AboutHighlight } from "../types/portfolio";

export const aboutData = {
  bio: "I am a third-year BSc (Hons) Computer Science undergraduate at SLIIT with 6 months of professional development experience at Zerocode. I enjoy building practical web applications, connecting clean frontend interfaces with reliable backend APIs, and exploring QA automation (Selenium, JMeter). I am also skilled in .NET/C# and love solving real user problems.",

  careerObjective:
    "Secure a software engineering internship where I can contribute to production work, learn from experienced engineers, and grow toward a full stack development career.",

  education: {
    degree: "BSc (Hons) Computer Science",
    institution: "SLIIT",
    status: "3rd Year",
    expectedGraduation: "2028",
  },

  highlights: [
    { icon: "GraduationCap", label: "Education", value: "SLIIT - CS" },
    { icon: "MapPin", label: "Location", value: "Gampaha, Sri Lanka" },
    { icon: "Briefcase", label: "Role", value: "Developer @ Zerocode" },
    { icon: "Clock", label: "Focus", value: "Internship Ready" },
  ] satisfies AboutHighlight[],
};
