import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "../../data/navLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      let current = "home";
      for (const link of navLinks) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50">
        <div className="page-container pt-4">
          <div
            className={`nav-shell rounded-2xl px-4 py-2.5 sm:px-6 ${
              scrolled ? "scrolled" : ""
            }`}
          >
            <div className="navbar-grid">
              <a
                href="#home"
                className="navbar-left group flex items-center gap-2.5 no-underline sm:gap-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-purple-500 text-sm font-bold text-white shadow-[0_4px_20px_rgba(56,189,248,0.35)] transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
                  S
                </div>
                <div className="hidden min-w-0 lg:block">
                  <p className="truncate text-sm font-semibold text-white xl:text-base">
                    Sehanya Ranasingha
                  </p>
                </div>
              </a>

              <nav className="navbar-center navbar-nav hidden lg:flex">
                {navLinks.map((link) => {
                  const id = link.href.replace("#", "");
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      className={`nav-link ${activeSection === id ? "active" : ""}`}
                    >
                      {link.title}
                    </a>
                  );
                })}
              </nav>

              <div className="navbar-right">
                <a href="#contact" className="hidden sm:inline-flex">
                  <button
                    type="button"
                    className="btn-primary rounded-lg px-4 py-2 text-xs sm:text-sm"
                  >
                    Contact Me
                  </button>
                </a>
                <button
                  type="button"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition hover:border-cyan-400/30 lg:hidden"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-1 px-8">
              {navLinks.map((link, i) => {
                const id = link.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`w-full max-w-sm rounded-xl px-6 py-3.5 text-center text-lg font-medium transition ${
                      isActive
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "text-slate-200 hover:bg-white/[0.06] hover:text-cyan-400"
                    }`}
                  >
                    {link.title}
                  </motion.a>
                );
              })}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-6">
                <button type="button" className="btn-primary">
                  <Mail size={18} />
                  Contact Me
                </button>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
