import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play, Pause } from "lucide-react";
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
  category: "video" | "web";
  href?: string;
  cover?: string;
};

// ── animation presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const stagger = (delayChildren = 0.08) => ({
  hidden: {},
  show: { transition: { staggerChildren: delayChildren } },
});

// ── Section ──────────────────────────────────────────────────────────────────
const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <motion.section
    id={id}
    className={`py-20 ${className ?? ""}`}
    variants={stagger()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
  >
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
  </motion.section>
);

// ── Badge ────────────────────────────────────────────────────────────────────
const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-sm font-medium text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-700/40 dark:bg-emerald-900/30 dark:text-emerald-200">
    {children}
  </span>
);

// ── ProjectCard ──────────────────────────────────────────────────────────────
const ProjectCard: React.FC<{ p: Project }> = ({ p }) => (
  <motion.a
    href={p.href}
    target="_blank"
    variants={fadeUp}
    whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(16,185,129,0.25)" }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className="group relative overflow-hidden rounded-2xl border border-emerald-200 bg-white/70 shadow-lg backdrop-blur dark:border-emerald-700/40 dark:bg-emerald-900/40"
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

// ── VideoCard ────────────────────────────────────────────────────────────────
const VideoCard: React.FC<{
  p: Project;
  isActive: boolean;
  onActivate: () => void;
}> = ({ p, isActive, onActivate }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isActive;
    const playPromise = video.play();
    if (playPromise !== undefined) playPromise.catch(() => {});
    const interval = setInterval(() => {
      if (!isActive && video.currentTime >= 5) video.currentTime = 0;
    }, 300);
    return () => clearInterval(interval);
  }, [isActive]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    onActivate();
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.muted = false;
      video.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setProgress((video.currentTime / (video.duration || 1)) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const value = Number(e.target.value);
    video.currentTime = (value / 100) * (video.duration || 1);
    setProgress(value);
  };

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="relative overflow-hidden rounded-2xl shadow-lg bg-black"
    >
      <video
        ref={videoRef}
        src={p.cover}
        className="w-full aspect-[9/16] object-cover"
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
      />
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div
          className={`flex items-center justify-center bg-black/50 backdrop-blur-md p-4 rounded-full transition-all ${
            isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100"
          }`}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </div>
      </button>
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        className="absolute bottom-2 left-2 right-2 z-10 w-[calc(100%-1rem)] accent-emerald-500"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </motion.div>
  );
};

// ── Divider ──────────────────────────────────────────────────────────────────
const Divider = () => (
  <motion.div
    className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60"
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 0.6 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
  />
);

// ── SectionHeading ───────────────────────────────────────────────────────────
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.h2
    variants={fadeUp}
    className="text-center text-3xl font-bold"
  >
    {children}
  </motion.h2>
);

const SubHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.h3
    variants={fadeUp}
    className="text-xl font-semibold text-center mb-6"
  >
    {children}
  </motion.h3>
);

// ── Portfolio ────────────────────────────────────────────────────────────────
const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  const bgGrid = useMemo(
    () => ({
      backgroundImage:
        "radial-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), radial-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px)",
      backgroundSize: "24px 24px, 48px 48px",
      backgroundPosition: "0 0, 12px 12px",
    }),
    []
  );

  const typedProjects: Project[] = (projects as Project[]) ?? [];
  const videoProjects = useMemo(
    () => typedProjects.filter((p) => p.category === "video"),
    [typedProjects]
  );
  const webProjects = useMemo(
    () => typedProjects.filter((p) => p.category === "web"),
    [typedProjects]
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50 text-emerald-950 dark:from-[#04150e] dark:via-[#061b12] dark:to-[#03120b] dark:text-emerald-100"
      style={bgGrid}
    >
      {/* Header fades in on load */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Header />
      </motion.div>

      {/* Hero fades in with slight delay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>

      <Section id="projects" className="bg-emerald-50/50 dark:bg-emerald-950/30">
        <SectionHeading>Projects</SectionHeading>
        <Divider />

        {/* VIDEO */}
        <SubHeading>Video Editing 🎬</SubHeading>
        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16"
        >
          {videoProjects.map((p, i) => (
            <VideoCard
              key={`video-${p.title}-${i}`}
              p={p}
              isActive={activeIndex === i}
              onActivate={() => setActiveIndex(i)}
            />
          ))}
        </motion.div>

        <Divider />

        {/* WEB */}
        <SubHeading>Web Development 💻</SubHeading>
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {webProjects.map((p, i) => (
            <ProjectCard key={`web-${p.title}-${i}`} p={p} />
          ))}
        </motion.div>
      </Section>

      {/* Skills + Contact + Footer fade in on scroll */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Skills />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <Contact />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Portfolio;