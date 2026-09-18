import { Award, BookOpen } from "lucide-react";

import { certificates } from "../../data/certificates";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import Card3D from "../common/Card3D";

const fallbackItems = [
  {
    title: "Verified Certificates",
    description:
      "Add completed courses here after confirming the certificate title, issuer, date, and credential URL.",
    icon: Award,
  },
  {
    title: "Continuous Learning",
    description:
      "Currently strengthening frontend, backend, database, and AI fundamentals for internship-ready development work.",
    icon: BookOpen,
  },
];

export default function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeader
        badge="Learning"
        title="Certificates"
        description="Verified credentials and focused learning progress."
        variant="alt"
      />

      {certificates.length > 0 ? (
        <div className="card-grid card-grid-3">
          {certificates.slice(0, 6).map((cert) => (
            <Reveal key={cert.id}>
              <Card3D className="h-full">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="premium-card card-inner flex h-full flex-col items-center justify-center text-center"
                >
                  <Award className="mb-3 h-8 w-8 text-cyan-400" />
                  <h4 className="text-card-title leading-snug text-white">
                    {cert.title}
                  </h4>
                  <p className="mt-2 text-sm text-cyan-400">{cert.issuer}</p>
                  <p className="mt-3 text-xs text-slate-500">{cert.date}</p>
                </a>
              </Card3D>
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="card-grid card-grid-2 mx-auto max-w-4xl">
          {fallbackItems.map(({ title, description, icon: Icon }) => (
            <Reveal key={title}>
              <Card3D className="h-full">
                <div className="premium-card card-inner flex h-full flex-col gap-4">
                  <div className="card-header-icon bg-cyan-500/15">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-card-title text-white">{title}</h3>
                    <p className="text-body-sm mt-2">{description}</p>
                  </div>
                </div>
              </Card3D>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
