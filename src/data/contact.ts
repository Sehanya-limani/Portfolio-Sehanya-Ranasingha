import type { ContactInfo } from "../types/portfolio";

export const contactInfo: ContactInfo = {
  email: "sehanyaranasingha@gmail.com",
  location: "Gampaha, Sri Lanka",
  availability: "Open to software engineering internships",
};

export const socialLinks = {
  github: "https://github.com/Sehanya-limani",
  linkedin: "https://www.linkedin.com/in/sehanya-ranasingha-053010331/",
  email: "mailto:sehanyaranasingha@gmail.com",
};

export const profilePaths = [
  {
    label: "GitHub",
    value: "github.com/Sehanya-limani",
    href: socialLinks.github,
  },
  {
    label: "LinkedIn",
    value: "Sehanya Ranasingha",
    href: socialLinks.linkedin,
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: socialLinks.email,
  },
];
