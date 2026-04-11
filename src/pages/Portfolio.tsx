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
  category: "video" | "web";
  href?: string;
  cover?: string;
};

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <section id={id} className={`py-20 ${className ?? ""}`}>
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
      {children}
    </div>
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

import { Play, Pause } from "lucide-react";
const VideoCard: React.FC<{
  p: Project;
  isActive: boolean;
  onActivate: () => void;
}> = ({ p, isActive, onActivate }) => {
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  // SAFE autoplay preview
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isActive;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    const interval = setInterval(() => {
      if (!isActive && video.currentTime >= 5) {
        video.currentTime = 0;
      }
    }, 300);

    return () => clearInterval(interval);
  }, [isActive]);

  // Handle play/pause + activate
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    onActivate(); // 👈 THIS switches audio between videos

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

    const duration = video.duration || 1;
    setProgress((video.currentTime / duration) * 100);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const value = Number(e.target.value);
    const duration = video.duration || 1;

    video.currentTime = (value / 100) * duration;
    setProgress(value);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg bg-black">
      <video
        ref={videoRef}
        src={p.cover}
        className="w-full aspect-[9/16] object-cover"
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
      />

      {/* CENTER BUTTON */}
      <button
        onClick={togglePlay}
        className="absolute inset-0 flex items-center justify-center z-10"
      >
        <div
          className={`
            flex items-center justify-center
            bg-black/50 backdrop-blur-md p-4 rounded-full
            transition-all
            ${isPlaying ? "opacity-0 scale-75" : "opacity-100 scale-100"}
          `}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </div>
      </button>

      {/* PROGRESS BAR */}
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        className="absolute bottom-2 left-2 right-2 z-10 w-[calc(100%-1rem)] accent-emerald-500"
      />

      {/* OVERLAY */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>
  );
};
const Divider = () => (
  <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
);

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

  // SAFE fallback (important for Vercel crashes)
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
      <Header />
      <Hero />

      <Section id="projects" className="bg-emerald-50/50 dark:bg-emerald-950/30">
        <h2 className="text-center text-3xl font-bold">Projects</h2>
        <Divider />

        {/* VIDEO */}
        <h3 className="text-xl font-semibold text-center mb-6">
          Video Editing 🎬
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
            {videoProjects.map((p, i) => (
              <VideoCard
                key={`video-${p.title}-${i}`}
                p={p}
                isActive={activeIndex === i}
                onActivate={() => setActiveIndex(i)}
              />
            ))}
        </div>

        <Divider />

        {/* WEB */}
        <h3 className="text-xl font-semibold text-center mb-6">
          Web Development 💻
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {webProjects.map((p, i) => (
            <ProjectCard key={`web-${p.title}-${i}`} p={p} />
          ))}
        </div>
      </Section>

      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;