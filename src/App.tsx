import { useEffect, useState } from "react";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import BackgroundOrbs from "./components/common/BackgroundOrbs";
import ParticleBackground from "./components/common/ParticleBackground";
import Stats from "./components/sections/Stats";
import ScrollToTop from "./components/common/ScrollToTop";
import SmoothScroll from "./components/common/SmoothScroll";
import LoadingScreen from "./components/common/LoadingScreen";
import CursorGlow from "./components/common/CursorGlow";
import useScrollReveal from "./hooks/useScrollReveal";

function App() {
  const [loading, setLoading] = useState(true);
  const [loaderLeaving, setLoaderLeaving] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const displayTime = reduceMotion ? 150 : 2100;
    const exitTime = reduceMotion ? 0 : 650;

    const leaveTimer = window.setTimeout(() => {
      setLoaderLeaving(true);
    }, displayTime);

    const doneTimer = window.setTimeout(() => {
      setLoading(false);
    }, displayTime + exitTime);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(doneTimer);
    };
  }, []);

  return (
    <SmoothScroll>
      <div className="relative min-h-screen overflow-x-hidden">
        <CursorGlow />
        {loading && <LoadingScreen isLeaving={loaderLeaving} />}
        <ParticleBackground />
        <BackgroundOrbs />
        <div className="relative z-10">
          <Navbar />

          <main className="w-full">
            <Hero />
            <Stats />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
