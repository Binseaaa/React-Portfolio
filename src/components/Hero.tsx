import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight} from "lucide-react";

const concepts = ["Video", "Web", "Graphics"] as const;

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <section id={id} className={`min-h-screen ${className ?? ""}`}>
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
    <span className="relative inline-block h-[64px] w-fit min-w-[180px] sm:min-w-[220px] md:min-w-[295px] overflow-hidden align-middle">
      <span
        className="absolute left-0 top-0 w-full transition-transform duration-700"
        style={{ transform: `translateY(-${index * 64}px)` }}
      >
        {concepts.map((c) => (
          <span
            key={c}
            className="flex items-center h-[64px] whitespace-nowrap text-emerald-400 dark:text-emerald-300 drop-shadow-[0_1px_0_rgba(0,0,0,0.25)]"
          >
            {c}
          </span>
        ))}
      </span>
    </span>
  );
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const tools = [
  { src: "https://static.vecteezy.com/system/resources/previews/067/065/640/non_2x/capcut-logo-square-rounded-capcut-logo-capcut-logo-free-download-free-png.png", alt: "CapCut" },
  { src: "https://1000logos.net/wp-content/uploads/2020/03/Canva-icon.png", alt: "Canva" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", alt: "ChatGPT" },
  { src: "https://cdn-1.webcatalog.io/catalog/kalodata/kalodata-icon-unplated.png?v=1716618932304", alt: "Kalodata" },
  { src: "https://yt3.googleusercontent.com/w8EZlhNVWPEr5RSwKyp-oGhz-YtkTWlE-cMVCpacbW5x3DPpzUgF3vySeOQGtfIpe8DGFcgN=s900-c-k-c0x00ffffff-no-rj", alt: "OpusClip", rounded: true },
  { src: "https://fastly.mwm-storage.mwmcdn.com/raw_files/2e8af7d3-81a5-473c-afa3-6ca878c077c6?height=640&format=webp", alt: "DreamFace", rounded: true },
  { src: "https://assets.basehub.com/dd0abb74/d4445fa7a68e5b557cafdfe41db79e92/alt-cover.jpg", alt: "ElevenLabs", rounded: true },
  { src: "https://static.uppromote.com/wp-content/uploads/2025/12/heygen.webp", alt: "HeyGen", rounded: true },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/960px-Midjourney_Emblem.png", alt: "Midjourney", rounded: true },
  { src: "https://make-cxp-documentation.ams3.digitaloceanspaces.com/apps-center-icons/higgsfield%20ai-community.png", alt: "Higgsfield", rounded: true },
  { src: "https://helios-i.mashable.com/imagery/articles/00zEnhbB6mXQs8x5yXw38bT/images-3.fit_lim.size_376x.webp", alt: "Gemini", rounded: true },
  { src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/sora-color.png", alt: "Sora", rounded: true },
  { src: "https://static.vecteezy.com/system/resources/thumbnails/068/894/567/small/slack-circle-logo-editable-slack-app-for-web-mobile-and-print-projects-free-png.png", alt: "Slack", rounded: true },
];

const Hero: React.FC = () => (
  <Section id="home" className="relative overflow-hidden pt-16 sm:pt-18 md:pt-10">
    {/* big soft spotlight */}
    <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl filter dark:bg-emerald-500/20" />

    <div className="flex flex-col items-center text-center md:text-left md:grid md:grid-cols-2 md:items-center gap-10">
      <div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col font-extrabold tracking-tight text-4xl sm:text-5xl md:text-7xl leading-tight"
        >
          <div className="flex gap-4 items-center justify-center w-full translate-x-5 sm:translate-x-0">
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
          className="mb-8 max-w-2xl mx-auto md:mx-0 text-base md:text-md text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed"
        >
          Hi, I'm <b>Vince</b> a <i>Video Editor</i> and{" "} <i>Web Developer</i> based in
          <span className="ml-1 font-medium">Cebu, Philippines</span>.
          <br />

          <span className="block mt-2">
            I specialize in <b>AI-powered and traditional video editing</b> for{" "}
            <b>UGC content, eCommerce ads, Meta ads, TikTok, and Instagram Reels</b>,
            creating scroll-stopping visuals that convert and perform.
          </span>

          <span className="block mt-2">
            I also handle <b>non-AI editing</b> from clean cuts to cinematic storytelling —
            depending on what your brand needs.
          </span>
        </motion.p>

        <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            onClick={scrollToId("projects", 96)} // adjust offset to your header height
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400"
          >
            See my work <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer inline-flex items-center gap-2 rounded-2xl border border-emerald-300 bg-white/50 px-6 py-3 font-semibold text-emerald-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100 "
          >
            Contact
          </button>
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
      <div className="mt-10 flex flex-col gap-3 items-center md:items-start">
        <p className="text-xs font-medium uppercase tracking-widest text-emerald-700/60 dark:text-emerald-300/50">
          Tools I use
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {tools.map(({ src, alt, rounded }) => (
            <motion.div
              key={alt}
              className="group relative"
              whileHover={{ y: -6, scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <div className="relative">
                <img
                  src={src}
                  alt={alt}
                  className={`h-10 w-10 object-cover ${
                    rounded ? "rounded-xl" : "rounded-md"
                  } shadow-md transition-all duration-300 group-hover:shadow-emerald-500/40`}
                />

                {/* glow */}
                <div className="absolute inset-0 rounded-xl bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-emerald-900 px-2 py-1 text-xs text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 dark:bg-emerald-700">
                {alt}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      </div>

     <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="order-first md:order-last relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-emerald-200/70 bg-gradient-to-br from-emerald-100 via-white to-emerald-50 p-3 shadow-2xl backdrop-blur dark:border-emerald-700/40 dark:from-emerald-900/40 dark:via-emerald-950/60 dark:to-emerald-900/30"
        style={{
          animation: "float 5s ease-in-out infinite",
        }}
      >
        <img
          src="me.jpg"
          alt="Vince Deguma"
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/30 dark:ring-emerald-800/50" />
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
