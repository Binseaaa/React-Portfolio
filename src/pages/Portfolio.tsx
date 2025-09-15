import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projects from "../jsons/projects.json";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Hero from "../components/Hero";
import Header from "../components/Header";

type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string;
  cover?: string;
};

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <section id={id} className={`py-20 ${className ?? ""}`}>
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
  </section>
);

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-700/40 dark:bg-emerald-900/30 dark:text-emerald-200">
    {children}
  </span>
);

const ProjectCard: React.FC<{ p: Project }> = ({ p }) => (
  <motion.a
    href={p.href}
    target="_blank"
    whileHover={{ y: -6 }}
    className="group relative overflow-hidden rounded-2xl border border-emerald-200 bg-white/70 shadow-lg backdrop-blur transition dark:border-emerald-700/40 dark:bg-emerald-900/40"
  >
    <div className="relative h-48 w-full overflow-hidden">
      {p.cover ? (
        <img
          src={p.cover}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-200 to-emerald-100 dark:from-emerald-800 dark:to-emerald-700" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/50 via-transparent to-transparent" />
    </div>
    <div className="space-y-3 p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-100">
          {p.title}
        </h3>
        <ExternalLink className="h-4 w-4 text-emerald-700 opacity-0 transition group-hover:opacity-100 dark:text-emerald-300" />
      </div>
      <p className="text-sm text-emerald-900/80 dark:text-emerald-100/80">
        {p.blurb}
      </p>
      <div className="flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
    </div>
  </motion.a>
);

const Divider = () => (
  <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
);

const Portfolio: React.FC = () => {
  // Parallax dots (pure CSS background)
  const bgGrid = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), radial-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px)",
      backgroundSize: "24px 24px, 48px 48px",
      backgroundPosition: "0 0, 12px 12px",
    }),
    []
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-emerald-950 dark:from-[#04150e] dark:via-[#061b12] dark:to-[#03120b] dark:text-emerald-100"
      style={bgGrid}
    >
      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* About */}
      <Section id="about" className="">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <Divider />
          <p className="text-emerald-900/80 dark:text-emerald-100/80">
            I am a Web Developer, Video Editor, and Graphic Designer with 2
            years of freelance experience and full-stack development background
            from my internship at DILG Bohol. I create web applications,
            engaging video content, and graphic designs, focusing on delivering
            efficient and user-friendly digital solutions.
          </p>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        className="bg-emerald-50/50 dark:bg-emerald-950/30"
      >
        <h2 className="text-center text-3xl font-bold">Projects</h2>
        <Divider />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
