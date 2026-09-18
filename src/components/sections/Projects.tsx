import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/projects";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import Card3D from "../common/Card3D";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        badge="Portfolio"
        title="Featured Projects"
        description="A selection of projects showcasing full stack development, AI integration, and modern UI."
        variant="alt"
      />

      <div className="card-grid card-grid-2">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <Card3D className="h-full">
              <article className="project-card premium-card card-inner flex h-full flex-col gap-5 overflow-hidden">
                <div className="project-preview relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.03]">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />

                  <div className="relative z-10 flex h-full flex-col gap-4 p-4 sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          {project.category && (
                            <span
                              className={`badge-tech border text-[10px] uppercase tracking-[0.18em] ${project.categoryClass}`}
                            >
                              {project.category}
                            </span>
                          )}
                          {project.featured && (
                            <span className="badge-tech border border-white/15 bg-white/10 text-[10px] uppercase tracking-[0.18em] text-white/80">
                              Featured Demo
                            </span>
                          )}
                        </div>
                        <h3 className="text-card-title-lg text-white">{project.title}</h3>
                      </div>

                      {project.icon && (
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-base font-bold text-white shadow-lg ${project.iconGradient}`}
                        >
                          {project.icon}
                        </div>
                      )}
                    </div>

                    <div className="rounded-[1.1rem] border border-white/10 bg-slate-950/35 p-3 shadow-inner shadow-black/20 backdrop-blur-sm">
                      {project.previewImage ? (
                        <img
                          src={project.previewImage}
                          alt={project.previewAlt ?? `${project.title} preview`}
                          className="project-demo-image h-full w-full rounded-[0.9rem] object-cover"
                        />
                      ) : (
                        <div className="project-demo-fallback flex min-h-[240px] flex-col justify-between rounded-[0.9rem] bg-slate-950/50 p-4">
                          <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-white/65">
                            <span>Live layout</span>
                            <span>{project.icon ?? "UI"}</span>
                          </div>
                          <div className="space-y-3">
                            <div className="h-3 w-24 rounded-full bg-white/20" />
                            <div className="h-20 rounded-2xl bg-white/10" />
                            <div className="grid grid-cols-3 gap-3">
                              <div className="h-16 rounded-2xl bg-white/10" />
                              <div className="h-16 rounded-2xl bg-white/10" />
                              <div className="h-16 rounded-2xl bg-white/10" />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {project.demoHighlights && (
                      <div className="flex flex-wrap gap-2">
                        {project.demoHighlights.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-body-sm text-slate-300">
                    {project.longDescription ?? project.description}
                  </p>

                  <div className="tag-group">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="badge-tech text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {(project.github || project.live || project.demoUrl) && (
                  <div className="mt-auto flex flex-wrap gap-3 border-t border-white/[0.08] pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300 sm:text-sm"
                      >
                        <FaGithub size={14} />
                        Source Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-xs font-medium text-slate-950 transition hover:bg-cyan-300 sm:text-sm"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                    {project.demoUrl && !project.live && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-violet-400 px-4 py-2 text-xs font-medium text-white transition hover:bg-violet-300 sm:text-sm"
                      >
                        <ExternalLink size={14} />
                        Demo Preview
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Card3D>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
