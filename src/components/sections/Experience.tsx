import { BriefcaseBusiness, Code2, GraduationCap, Target } from "lucide-react";

import { experiences } from "../../data/experience";
import { journeyMilestones } from "../../data/journey";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";

const journeyIcons = {
  education: GraduationCap,
  code: Code2,
  work: BriefcaseBusiness,
  target: Target,
};

const accentClasses = {
  cyan: "border-cyan-400/35 bg-cyan-400/10 text-cyan-300",
  violet: "border-violet-400/35 bg-violet-400/10 text-violet-300",
  amber: "border-amber-400/35 bg-amber-400/10 text-amber-300",
  emerald: "border-emerald-400/35 bg-emerald-400/10 text-emerald-300",
};

export default function Experience() {
  const experience = experiences[0];

  return (
    <Section id="experience" variant="muted">
      <SectionHeader
        badge="My Journey"
        title="Learning by Building"
        description="The path from computer science fundamentals to professional development and my next internship."
        variant="alt"
      />

      <div className="journey-layout">
        <Reveal>
          <aside className="journey-summary premium-card">
            <div className="journey-summary-grid" aria-hidden="true" />
            <div className="relative z-10">
              <span className="section-label text-cyan-300">Current Chapter</span>
              <h3 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl">
                Ready to contribute, learn, and grow.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-300">
                I bring academic foundations, hands-on project work, and six months of
                professional development experience to an internship team.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="journey-metric">
                  <strong>3rd</strong>
                  <span>Year at SLIIT</span>
                </div>
                <div className="journey-metric">
                  <strong>6+</strong>
                  <span>Months experience</span>
                </div>
                <div className="journey-metric">
                  <strong>5</strong>
                  <span>Featured projects</span>
                </div>
                <div className="journey-metric">
                  <strong>QA</strong>
                  <span>Testing mindset</span>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>

        <div className="journey-timeline">
          {journeyMilestones.map((item, index) => {
            const Icon = journeyIcons[item.icon];
            return (
              <Reveal key={item.id}>
                <article className="journey-step">
                  <div className="journey-rail" aria-hidden="true">
                    <span className={accentClasses[item.accent]}>
                      <Icon className="h-5 w-5" />
                    </span>
                    {index < journeyMilestones.length - 1 && <i />}
                  </div>
                  <div className="journey-copy">
                    <span className="section-label text-slate-500">{item.step}</span>
                    <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {experience && (
        <Reveal>
          <article className="experience-strip">
            <div className="experience-company">
              <div className="card-header-icon bg-cyan-500/15">
                <BriefcaseBusiness className="h-5 w-5 text-cyan-300" />
              </div>
              <div>
                <span className="section-label text-cyan-300">{experience.period}</span>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {experience.role} at {experience.company}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {experience.type} - {experience.location}
                </p>
              </div>
            </div>

            <ul className="experience-points">
              {experience.description.slice(0, 3).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="tag-group">
              {experience.techStack.map((tech) => (
                <span key={tech} className="badge-tech text-[11px]">
                  {tech}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      )}
    </Section>
  );
}
