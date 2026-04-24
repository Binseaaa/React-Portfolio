import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";

const concepts = ["Video", "Web", "Graphics"] as const;

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <section id={id} className={`${className ?? ""}`}>
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
  </section>
);

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
    <span className="hidden sm:inline-block relative h-[64px] w-fit min-w-[180px] sm:min-w-[220px] md:min-w-[295px] overflow-hidden align-middle">
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700"
        style={{ transform: `translateY(-${index * 64}px)` }}
      >
        {concepts.map((c) => (
          <span
            key={c}
            className="flex items-center h-[64px] whitespace-nowrap text-emerald-400 dark:text-emerald-300"
          >
            {c}
          </span>
        ))}
      </span>
    </span>
  );
};

const Hero: React.FC = () => (
  <Section id="home" className="relative overflow-hidden pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-16 sm:pb-20 md:pb-24"
>

    <div className="flex flex-col items-center text-center md:text-left md:grid md:grid-cols-2 md:items-center gap-10">
      <div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col font-extrabold tracking-tight text-4xl sm:text-5xl md:text-7xl leading-tight"
        >
          <div className="flex items-center justify-center md:justify-start w-full text-center md:text-left gap-2 sm:gap-3">
            
            <span className="text-emerald-900 dark:text-emerald-50">
              Crafting
            </span>

            {/* Desktop carousel */}
            <WordCarousel />
          </div>
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
            with Creativity
          </span>
        </motion.h1>
  <div className="max-w-2xl">

  {/* HEADLINE */}
  <motion.h1
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="text-2xl sm:text-5xl font-bold tracking-tight text-emerald-900 dark:text-emerald-100"
  >
    Hi, I’m Vince
  </motion.h1>

  {/* SUBTEXT (quick hook) */}
  <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.6 }}
      className="mt-3 text-lg sm:text-xl text-emerald-700 dark:text-emerald-300"
    >
      Video Editor & Web Developer
    </motion.p>

    {/* FULL DESCRIPTION */}
    <motion.p
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mt-4 text-sm sm:text-base leading-relaxed text-emerald-900/80 dark:text-emerald-100/80"
    >
    <p className="mt-4 text-sm sm:text-base leading-relaxed text-emerald-900/80 dark:text-emerald-100/80">
      I specialize in <span className="font-semibold">AI-powered</span> and <span className="font-semibold">traditional video editing</span> for{" "}
      <span className="font-semibold">UGC content</span>,{" "}
      <span className="font-semibold">eCommerce ads</span>,{" "}
      <span className="font-semibold">Meta ads</span>,{" "}
      <span className="font-semibold">TikTok</span>, and{" "}
      <span className="font-semibold">Instagram Reels</span>, creating{" "}
      <span className="font-semibold">scroll-stopping visuals</span>.

      <br className="hidden sm:block" />

      I also handle <span className="font-semibold">non-AI editing</span> — from{" "}
      <span className="font-semibold">clean cuts</span> to{" "}
      <span className="font-semibold">cinematic storytelling</span>, depending on what your brand needs.
    </p>
    </motion.p>
  </div>

        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <div className="mt-5 grid grid-cols-3 gap-8 max-w-lg mx-auto md:mx-0">
            <div>
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                2+
              </p>
              <p className="text-sm text-emerald-900/70 dark:text-emerald-100/70">
                Years Experience
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                20+
              </p>
              <p className="text-sm text-emerald-900/70 dark:text-emerald-100/70">
                Satisfied Clients
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-300">
                4
              </p>
              <p className="text-xs text-emerald-900/70 dark:text-emerald-100/70">
                Companies Worked With
              </p>
            </div>
          </div>
        </div>  
      </div>

  <motion.div
    initial={{ scale: 0.95, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, delay: 0.15 }}
    className="order-first md:order-last relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border-4 border-emerald-500 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 shadow-2xl backdrop-blur dark:border-emerald-700/40 dark:from-emerald-900/40 dark:via-emerald-950/60 dark:to-emerald-900/30"
    style={{ animation: "float 5s ease-in-out infinite" }}
  >
    <img
      src="me.jpg"
      alt="Vince Deguma"
      className="h-full w-full object-cover rounded-2xl"
    />

    {/* overlay */}
    <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30 dark:ring-emerald-800/50" />

    {/* 🔥 FLOATING GLASS CARD BUTTON */}
  <div className="absolute z-20 bottom-4 right-4 md:bottom-5 md:right-5 flex items-center gap-2">

    {/* SEE MY WORK */}
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={() =>
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
      }
      className="
        relative group cursor-pointer
        px-3 sm:px-4 py-2 sm:py-2.5
        rounded-xl
        bg-white/20 dark:bg-emerald-900/30
        backdrop-blur-lg
        border border-white/30 dark:border-emerald-700/40
        text-xs sm:text-sm font-medium
        text-emerald-900 dark:text-emerald-100
        shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        transition
        flex items-center gap-1.5 sm:gap-2
        overflow-hidden
        whitespace-nowrap
      "
      style={{ animation: "float 4s ease-in-out infinite" }}
    >
      {/* glow */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-emerald-400/30 via-transparent to-emerald-400/30 blur-xl" />

      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2 text-white dark:text-emerald-100">
        See my work
        <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 group-hover:translate-x-1 transition text-white dark:text-emerald-200" />
      </span>
    </motion.button>

    {/* CONTACT */}
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      onClick={() =>
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
      }
      className="
        relative group cursor-pointer
        px-3 sm:px-4 py-2 sm:py-2.5
        rounded-xl
        bg-emerald-500/90
        backdrop-blur-lg
        border border-emerald-400/40
        text-xs sm:text-sm font-medium
        text-white
        shadow-[0_8px_30px_rgba(16,185,129,0.35)]
        transition
        flex items-center gap-1.5 sm:gap-2
        overflow-hidden
        whitespace-nowrap
      "
      style={{ animation: "float 4.5s ease-in-out infinite" }}
    >
      {/* glow */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-emerald-400/40 blur-xl" />

      <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
        Contact
      </span>
    </motion.button>
  </div>
</motion.div>
      
    </div>

    <style>{`
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
    `}</style>
  </Section>
);

export default Hero;
