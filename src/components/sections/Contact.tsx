import { useForm } from "react-hook-form";
import { Clock, ExternalLink, Mail, MapPin, Phone, Send } from "lucide-react";

import { contactInfo, profilePaths } from "../../data/contact";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import SocialLinks from "../common/SocialLinks";

interface ContactForm {
  email: string;
  subject: string;
  message: string;
}

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 transition focus:border-cyan-400/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/10";

const contactItems = [
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: "Phone", value: contactInfo.phone ?? "Available on request" },
  { icon: MapPin, label: "Location", value: contactInfo.location },
  { icon: Clock, label: "Status", value: contactInfo.availability },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.email}`);

    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <Section id="contact" variant="muted">
      <SectionHeader
        badge="Get in Touch"
        title="Let's Connect"
        description="Open to collaborations, internships, and new opportunities."
        variant="alt"
      />

      <div className="split-grid split-grid--contact">
        <Reveal>
          <div className="premium-card card-inner flex h-full flex-col">
            <h3 className="text-card-title text-white">Contact Info</h3>
            <p className="text-body-sm mt-2">
              Reach out anytime - I typically respond within 24 hours.
            </p>

            <div className="mt-6 space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="card-header-icon">
                    <Icon className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="section-label text-[10px] text-slate-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium text-white transition hover:text-cyan-400"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="profile-paths">
              {profilePaths.slice(0, 2).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="profile-path"
                >
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </a>
              ))}
            </div>

            <div className="mt-auto border-t border-white/[0.08] pt-5">
              <p className="text-body-sm mb-3">Follow me</p>
              <SocialLinks />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="premium-card card-inner h-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex h-full flex-col gap-4">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className={inputClass}
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-pink-400">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Let's talk about..."
                  className={inputClass}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-pink-400">{errors.subject.message}</p>
                )}
              </div>
              <div className="flex flex-1 flex-col">
                <label className="mb-1.5 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message here..."
                  className={`${inputClass} min-h-[120px] flex-1 resize-none`}
                  {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-pink-400">{errors.message.message}</p>
                )}
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                <Send size={18} strokeWidth={2.5} />
                Open Email Draft
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
