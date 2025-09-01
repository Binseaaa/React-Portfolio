import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Facebook } from "lucide-react";

const concepts = ["Video", "Web", "Graphics"] as const;

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <section id={id} className={`py-20 ${className ?? ""}`}>
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
  </section>
);

const scrollToId =
  (id: string, offset = 80) =>
  (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

const WordCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % concepts.length),
      2200
    );
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[64px] w-[220px] overflow-hidden align-middle">
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700"
        style={{ transform: `translateY(-${index * 64}px)` }}
      >
        {concepts.map((c) => (
          <span
            key={c}
            className="block h-[64px] leading-[64px] text-emerald-400 dark:text-emerald-300 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]"
          >
            {c}
          </span>
        ))}
      </span>
    </span>
  );
};

const Hero: React.FC = () => (
  <Section id="home" className="relative overflow-hidden pt-24">
    {/* big soft spotlight */}
    <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl filter dark:bg-emerald-500/20" />

    <div className="grid items-center gap-12 md:grid-cols-2">
      <div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col text-5xl font-extrabold tracking-tight md:text-6xl"
        >
          <div className="flex gap-4">
            <span className="text-emerald-900 dark:text-emerald-50">
              Crafting
            </span>
            <WordCarousel />
          </div>
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
            with Creativity
          </span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 max-w-xl text-lg text-emerald-900/80 dark:text-emerald-100/80"
        >
          Hi, I'm <b>Vince</b> — a <i>Video Editor</i>, <i>Web Developer</i>,
          and <i>Graphics Designer</i> based in
          <span className="ml-1 font-medium">Cebu, Philippines</span>.
        </motion.p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            onClick={scrollToId("projects", 96)} // adjust offset to your header height
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400"
          >
            See my work <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-300 bg-white/50 px-6 py-3 font-semibold text-emerald-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
          >
            Contact
          </a>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="https://github.com/Binseaaa"
            target="_blank"
            className="rounded-full border border-emerald-300 p-2 text-emerald-700 transition hover:bg-white hover:text-black dark:border-emerald-700/40 dark:text-emerald-200"
          >
            <Github className="h-5 w-5 hover:text-black" />
          </a>
          <a
            href="https://www.linkedin.com/in/vince-deguma-83606536a/"
            target="_blank"
            className="rounded-full border border-emerald-300 p-2 text-emerald-700 transition hover:bg-white hover:text-black dark:border-emerald-700/40 dark:text-emerald-200"
          >
            <Linkedin className="h-5 w-5 hover:text-black" />
          </a>
          <a
            href="https://www.facebook.com/davinccii14"
            target="_blank"
            className="rounded-full border border-emerald-300 p-2 text-emerald-700 transition hover:bg-white hover:text-black dark:border-emerald-700/40 dark:text-emerald-200"
          >
            <Facebook className="h-5 w-5 hover:text-black" />
          </a>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-3 shadow-2xl backdrop-blur dark:border-emerald-700/40 dark:from-emerald-900/40 dark:via-emerald-950/60 dark:to-emerald-900/30"
      >
        <img
          src="me.jpg"
          alt="Vince Deguma"
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30 dark:ring-emerald-800/50" />
      </motion.div>
    </div>
  </Section>
);

export default Hero;
