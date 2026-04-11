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

const Hero: React.FC = () => (
  <Section id="home" className="relative overflow-hidden pt-32">
    {/* big soft spotlight */}
    <div className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl filter dark:bg-emerald-500/20" />

    <div className="flex flex-col items-center text-center md:text-left md:grid md:grid-cols-2 md:items-center gap-10">
      <div>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-col text-6xl md:text-7xl font-extrabold tracking-tight"
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
          className="mb-8 max-w-2xl mx-auto md:mx-0 text-base md:text-lg text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed"
        >
          Hi, I'm <b>Vince</b> a <i>Video Editor</i>, <i>Web Developer</i>, and{" "}
          <i>Graphic Designer</i> based in
          <span className="ml-1 font-medium">Cebu, Philippines</span>.
          <br />

          <span className="block mt-3">
            I specialize in <b>AI-powered and traditional video editing</b> for{" "}
            <b>UGC content, eCommerce ads, Meta ads, TikTok, and Instagram Reels</b>,
            creating scroll-stopping visuals that convert and perform.
          </span>

          <span className="block mt-3">
            I also handle <b>non-AI editing</b> from clean cuts to cinematic storytelling —
            depending on what your brand needs.
          </span>
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
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-lg mx-auto md:mx-0">
            <div>
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">
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
              <p className="text-3xl font-bold text-emerald-700 dark:text-emerald-300">
                4
              </p>
              <p className="text-xs text-emerald-900/70 dark:text-emerald-100/70">
                Companies Worked With
              </p>
            </div>
          </div>
        </div>  
        <div className="mt-8 flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
  
        <div className="text-emerald-700 transition hover:scale-105">
          <svg viewBox="0 0 512 512" className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black" xmlns="http://www.w3.org/2000/svg">
          <svg viewBox="0 0 508 508" className="h-8 w-8 hover:text-black" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><g transform="matrix(.26718 0 0 .26718 0 0)"><circle cx="950" cy="950" r="950" fill="#7d2ae7"/><circle cx="950" cy="950" r="950" fill="url(#prefix___Radial1)"/><circle cx="950" cy="950" r="950" fill="url(#prefix___Radial2)"/><circle cx="950" cy="950" r="950" fill="url(#prefix___Radial3)"/><circle cx="950" cy="950" r="950" fill="url(#prefix___Radial4)"/></g><path d="M446.744 276.845c-.665 0-1.271.43-1.584 1.33-4.011 11.446-9.43 18.254-13.891 18.254-2.563 0-3.6-2.856-3.6-7.336 0-11.21 6.71-34.982 10.095-45.82.392-1.312.646-2.485.646-3.483 0-3.15-1.722-4.696-5.987-4.696-4.598 0-9.547 1.8-14.36 10.233-1.663-7.435-6.691-10.683-13.715-10.683-8.12 0-15.965 5.224-22.421 13.696-6.456 8.471-14.048 11.25-19.76 9.88 4.108-10.057 5.634-17.57 5.634-23.145 0-8.746-4.324-14.028-11.308-14.028-10.624 0-16.747 10.134-16.747 20.797 0 8.237 3.736 16.708 11.954 20.817-6.887 15.573-16.943 29.66-20.758 29.66-4.93 0-6.379-24.123-6.105-41.38.176-9.9.998-10.408.998-13.401 0-1.722-1.115-2.896-5.595-2.896-10.448 0-13.676 8.844-14.165 18.998a50.052 50.052 0 01-1.8 11.406c-4.363 15.573-13.363 27.39-19.232 27.39-2.72 0-3.463-2.72-3.463-6.28 0-11.21 6.28-25.219 6.28-37.173 0-8.784-3.854-14.34-11.112-14.34-8.55 0-19.858 10.173-30.56 29.229 3.521-14.595 4.97-28.721-5.459-28.721a14.115 14.115 0 00-6.476 1.683 3.689 3.689 0 00-2.113 3.56c.998 15.535-12.521 55.329-25.336 55.329-2.328 0-3.463-2.524-3.463-6.593 0-11.23 6.691-34.943 10.056-45.801.43-1.409.666-2.622.666-3.678 0-2.974-1.84-4.5-6.007-4.5-4.578 0-9.547 1.741-14.34 10.174-1.683-7.435-6.711-10.683-13.735-10.683-11.523 0-24.397 12.19-30.051 28.076-7.572 21.208-22.832 41.692-43.375 41.692-18.645 0-28.486-15.515-28.486-40.03 0-35.392 25.982-64.308 45.253-64.308 9.215 0 13.617 5.869 13.617 14.869 0 10.897-6.085 15.964-6.085 20.112 0 1.272 1.057 2.524 3.15 2.524 8.374 0 18.234-9.841 18.234-23.262 0-13.422-10.897-23.243-30.168-23.243-31.851 0-63.898 32.047-63.898 73.113 0 32.673 16.121 52.374 44 52.374 19.017 0 35.628-14.79 44.588-32.047 1.018 14.302 7.513 21.776 17.413 21.776 8.804 0 15.925-5.243 21.364-14.458 2.094 9.645 7.65 14.36 14.87 14.36 8.275 0 15.201-5.243 21.794-14.986-.097 7.65 1.644 14.85 8.276 14.85 3.13 0 6.867-.725 7.533-3.464 6.984-28.877 24.24-52.453 29.523-52.453 1.565 0 1.995 1.507 1.995 3.287 0 7.846-5.537 23.928-5.537 34.2 0 11.092 4.716 18.43 14.459 18.43 10.8 0 21.775-13.227 29.092-32.556 2.29 18.058 7.24 32.633 14.987 32.633 9.508 0 26.392-20.014 36.625-41.203 4.01.509 10.036.372 15.827-3.717-2.465 6.241-3.912 13.07-3.912 19.897 0 19.663 9.39 25.18 17.47 25.18 8.785 0 15.907-5.243 21.365-14.458 1.8 8.315 6.398 14.34 14.85 14.34 13.225 0 24.71-13.519 24.71-24.612 0-2.934-1.252-4.715-2.72-4.715zm-274.51 18.547c-5.342 0-7.435-5.38-7.435-13.401 0-13.93 9.528-37.193 19.604-37.193 4.402 0 6.065 5.185 6.065 11.524 0 14.145-9.059 39.07-18.235 39.07zm182.948-41.574c-3.189-3.796-4.343-8.961-4.343-13.559 0-5.673 2.074-10.467 4.558-10.467 2.485 0 3.248 2.446 3.248 5.85 0 5.693-2.035 14.008-3.463 18.176zm41.418 41.574c-5.34 0-7.434-6.182-7.434-13.401 0-13.441 9.528-37.193 19.682-37.193 4.402 0 5.967 5.146 5.967 11.524 0 14.145-8.902 39.07-18.215 39.07z" fill="#fff" fill-rule="nonzero"/><defs><radialGradient id="prefix___Radial1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="scale(1469.491) rotate(-49.416 1.37 .302)"><stop offset="0" stop-color="#6420ff"/><stop offset="1" stop-color="#6420ff" stop-opacity="0"/></radialGradient><radialGradient id="prefix___Radial2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(54.703 42.717 594.194) scale(1657.122)"><stop offset="0" stop-color="#00c4cc"/><stop offset="1" stop-color="#00c4cc" stop-opacity="0"/></radialGradient><radialGradient id="prefix___Radial3" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1023 -1030 473.711 470.491 367 1684)"><stop offset="0" stop-color="#6420ff"/><stop offset="1" stop-color="#6420ff" stop-opacity="0"/></radialGradient><radialGradient id="prefix___Radial4" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(595.999 1372 -2298.41 998.431 777 256)"><stop offset="0" stop-color="#00c4cc" stop-opacity=".73"/><stop offset="0" stop-color="#00c4cc"/><stop offset="1" stop-color="#00c4cc" stop-opacity="0"/></radialGradient></defs></svg>
          </svg>
        </div>

        <div className="text-emerald-700 transition hover:scale-105">
          <svg viewBox="0 0 508 508" className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black" xmlns="http://www.w3.org/2000/svg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-black" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.659"><path fill="#fff" d="M116.971 2.475h278.058c62.971 0 114.494 51.522 114.494 114.494v275.722c0 62.971-51.523 114.493-114.494 114.493H116.971c-62.972 0-114.494-51.522-114.494-114.493V116.969c0-62.972 51.522-114.494 114.494-114.494z"/><path fill="#999" fill-rule="nonzero" d="M116.97-.001h278.06C459.366-.001 512 52.633 512 116.969v275.722c0 64.335-52.634 116.969-116.97 116.969H116.97C52.636 509.66 0 457.026 0 392.691V116.969C0 52.633 52.636-.001 116.97-.001zm278.06 4.953H116.97C55.364 4.952 4.953 55.363 4.953 116.969v275.722c0 61.605 50.411 112.017 112.017 112.017h278.06c61.607 0 112.017-50.411 112.017-112.017V116.969c0-61.607-50.41-112.017-112.017-112.017z"/><path fill="#fff" fill-rule="nonzero" d="M109.095 181.505c-.123 8.897 0 17.813 0 26.71a5.41 5.41 0 003.225 4.917 23898.407 23898.407 0 0084.108 41.646c-27.832 13.672-55.563 27.526-83.353 41.259a5.938 5.938 0 00-4.081 4.876v26.771c1.854 18.195 15.823 32.817 33.913 35.503 3.509.326 7.02.266 10.529.266l155.85.001a45.08 45.08 0 0011.224-.92 40.825 40.825 0 0026.137-20.015 63.699 63.699 0 004.288-11.226c15.997 8.325 32.341 16.079 48.462 24.179.385.291.857.447 1.343.447a2.266 2.266 0 002.265-2.265v-.016-27.669a4.695 4.695 0 00-3.143-4.079l-135.323-67.112c45.203-22.431 90.412-44.876 135.63-67.335a4.573 4.573 0 002.754-4.082v-27.628a2.183 2.183 0 00-3.142-1.673l-49.135 24.363a42.189 42.189 0 00-6.388-14.917 40.613 40.613 0 00-30.097-17.422l-167.133-.001c-19.615.91-35.688 15.918-37.933 35.424v-.002z"/><path fill="#fff" fill-rule="nonzero" d="M140.049 181.689a10.082 10.082 0 019.345-5.55h161.545l.106-.001c5.066 0 9.368 3.72 10.096 8.734.205 2.714.102 5.428 0 8.162l-90.597 44.891c-30.608-15.018-61.03-30.22-91.535-45.339.142-3.632-.633-7.53 1.04-10.897zM139.009 317.095a24846.007 24846.007 0 0191.351-45.319c30.322 14.773 60.521 29.954 90.802 44.89-.204 3.918.755 8.162-1.305 11.773a10.085 10.085 0 01-8.755 5.08h-.082l-161.605.002-.277.002a10.202 10.202 0 01-9.007-5.411c-1.796-3.386-.98-7.345-1.122-11.017z"/><path fill-rule="nonzero" d="M109.095 181.505c2.223-19.532 18.316-34.578 37.955-35.483l167.194-.001a40.612 40.612 0 0130.095 17.427 42.152 42.152 0 016.39 14.915l49.135-24.364a2.185 2.185 0 013.141 1.674v27.628l.001.096a4.571 4.571 0 01-2.837 4.229 177620.936 177620.936 0 00-135.63 67.336l135.324 66.948a4.695 4.695 0 013.142 4.08v27.685a2.266 2.266 0 01-3.613 1.821c-16.12-8.162-32.464-15.854-48.462-24.18a63.503 63.503 0 01-4.282 11.225 40.813 40.813 0 01-26.098 20.135 44.994 44.994 0 01-11.221.919l-155.833.003c-3.51 0-7.04 0-10.53-.266-18.089-2.705-32.049-17.363-33.869-35.565v-26.77a5.935 5.935 0 014.08-4.879c27.791-13.732 55.521-27.587 83.353-41.258a32412.61 32412.61 0 00-84.17-41.748 5.41 5.41 0 01-3.223-4.918c-.042-8.876-.185-17.792-.042-26.689zm30.975.184c-1.674 3.367-.898 7.263-1.041 10.896 30.608 15.12 60.99 30.321 91.536 45.339 30.185-14.963 60.384-29.927 90.596-44.89 0-2.714.123-5.428 0-8.162a10.203 10.203 0 00-10.096-8.734h-.106l-161.565.001a10.082 10.082 0 00-9.345 5.55h.021zm-1.041 135.406c.142 3.673-.654 7.631 1.122 11.039a10.204 10.204 0 009.284 5.405l161.667.002.081-.001c3.618 0 6.961-1.94 8.754-5.081 2.04-3.57 1.102-7.855 1.305-11.773-30.26-14.936-60.48-30.118-90.801-44.89a43915.126 43915.126 0 00-91.432 45.299h.02z"/></svg>
          </svg>
        </div>

        <div className="text-emerald-700 transition hover:scale-105">
          <svg className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black" xmlns="http://www.w3.org/2000/svg">
          <svg fill="none" className="h-8 w-8 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65 65"><mask id="maskme" maskUnits="userSpaceOnUse" x="0" y="0" width="65" height="65"><path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="#000"/><path d="M32.447 0c.68 0 1.273.465 1.439 1.125a38.904 38.904 0 001.999 5.905c2.152 5 5.105 9.376 8.854 13.125 3.751 3.75 8.126 6.703 13.125 8.855a38.98 38.98 0 005.906 1.999c.66.166 1.124.758 1.124 1.438 0 .68-.464 1.273-1.125 1.439a38.902 38.902 0 00-5.905 1.999c-5 2.152-9.375 5.105-13.125 8.854-3.749 3.751-6.702 8.126-8.854 13.125a38.973 38.973 0 00-2 5.906 1.485 1.485 0 01-1.438 1.124c-.68 0-1.272-.464-1.438-1.125a38.913 38.913 0 00-2-5.905c-2.151-5-5.103-9.375-8.854-13.125-3.75-3.749-8.125-6.702-13.125-8.854a38.973 38.973 0 00-5.905-2A1.485 1.485 0 010 32.448c0-.68.465-1.272 1.125-1.438a38.903 38.903 0 005.905-2c5-2.151 9.376-5.104 13.125-8.854 3.75-3.749 6.703-8.125 8.855-13.125a38.972 38.972 0 001.999-5.905A1.485 1.485 0 0132.447 0z" fill="url(#prefix__paint0_linear_2001_67)"/></mask><g mask="url(#maskme)"><g filter="url(#prefix__filter0_f_2001_67)"><path d="M-5.859 50.734c7.498 2.663 16.116-2.33 19.249-11.152 3.133-8.821-.406-18.131-7.904-20.794-7.498-2.663-16.116 2.33-19.25 11.151-3.132 8.822.407 18.132 7.905 20.795z" fill="#FFE432"/></g><g filter="url(#prefix__filter1_f_2001_67)"><path d="M27.433 21.649c10.3 0 18.651-8.535 18.651-19.062 0-10.528-8.35-19.062-18.651-19.062S8.78-7.94 8.78 2.587c0 10.527 8.35 19.062 18.652 19.062z" fill="#FC413D"/></g><g filter="url(#prefix__filter2_f_2001_67)"><path d="M20.184 82.608c10.753-.525 18.918-12.244 18.237-26.174-.68-13.93-9.95-24.797-20.703-24.271C6.965 32.689-1.2 44.407-.519 58.337c.681 13.93 9.95 24.797 20.703 24.271z" fill="#00B95C"/></g><g filter="url(#prefix__filter3_f_2001_67)"><path d="M20.184 82.608c10.753-.525 18.918-12.244 18.237-26.174-.68-13.93-9.95-24.797-20.703-24.271C6.965 32.689-1.2 44.407-.519 58.337c.681 13.93 9.95 24.797 20.703 24.271z" fill="#00B95C"/></g><g filter="url(#prefix__filter4_f_2001_67)"><path d="M30.954 74.181c9.014-5.485 11.427-17.976 5.389-27.9-6.038-9.925-18.241-13.524-27.256-8.04-9.015 5.486-11.428 17.977-5.39 27.902 6.04 9.924 18.242 13.523 27.257 8.038z" fill="#00B95C"/></g><g filter="url(#prefix__filter5_f_2001_67)"><path d="M67.391 42.993c10.132 0 18.346-7.91 18.346-17.666 0-9.757-8.214-17.667-18.346-17.667s-18.346 7.91-18.346 17.667c0 9.757 8.214 17.666 18.346 17.666z" fill="#3186FF"/></g><g filter="url(#prefix__filter6_f_2001_67)"><path d="M-13.065 40.944c9.33 7.094 22.959 4.869 30.442-4.972 7.483-9.84 5.987-23.569-3.343-30.663C4.704-1.786-8.924.439-16.408 10.28c-7.483 9.84-5.986 23.57 3.343 30.664z" fill="#FBBC04"/></g><g filter="url(#prefix__filter7_f_2001_67)"><path d="M34.74 51.43c11.135 7.656 25.896 5.524 32.968-4.764 7.073-10.287 3.779-24.832-7.357-32.488C49.215 6.52 34.455 8.654 27.382 18.94c-7.072 10.288-3.779 24.833 7.357 32.49z" fill="#3186FF"/></g><g filter="url(#prefix__filter8_f_2001_67)"><path d="M54.984-2.336c2.833 3.852-.808 11.34-8.131 16.727-7.324 5.387-15.557 6.631-18.39 2.78-2.833-3.853.807-11.342 8.13-16.728 7.324-5.387 15.558-6.631 18.39-2.78z" fill="#749BFF"/></g><g filter="url(#prefix__filter9_f_2001_67)"><path d="M31.727 16.104C43.053 5.598 46.94-8.626 40.41-15.666c-6.53-7.04-21.006-4.232-32.332 6.274s-15.214 24.73-8.683 31.77c6.53 7.04 21.006 4.232 32.332-6.274z" fill="#FC413D"/></g><g filter="url(#prefix__filter10_f_2001_67)"><path d="M8.51 53.838c6.732 4.818 14.46 5.55 17.262 1.636 2.802-3.915-.384-10.994-7.116-15.812-6.731-4.818-14.46-5.55-17.261-1.636-2.802 3.915.383 10.994 7.115 15.812z" fill="#FFEE48"/></g></g><defs><filter id="prefix__filter0_f_2001_67" x="-19.824" y="13.152" width="39.274" height="43.217" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="2.46" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter1_f_2001_67" x="-15.001" y="-40.257" width="84.868" height="85.688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="11.891" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter2_f_2001_67" x="-20.776" y="11.927" width="79.454" height="90.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter3_f_2001_67" x="-20.776" y="11.927" width="79.454" height="90.916" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter4_f_2001_67" x="-19.845" y="15.459" width="79.731" height="81.505" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="10.109" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter5_f_2001_67" x="29.832" y="-11.552" width="75.117" height="73.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="9.606" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter6_f_2001_67" x="-38.583" y="-16.253" width="78.135" height="78.758" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="8.706" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter7_f_2001_67" x="8.107" y="-5.966" width="78.877" height="77.539" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="7.775" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter8_f_2001_67" x="13.587" y="-18.488" width="56.272" height="51.81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="6.957" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter9_f_2001_67" x="-15.526" y="-31.297" width="70.856" height="69.306" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="5.876" result="effect1_foregroundBlur_2001_67"/></filter><filter id="prefix__filter10_f_2001_67" x="-14.168" y="20.964" width="55.501" height="51.571" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="7.273" result="effect1_foregroundBlur_2001_67"/></filter><linearGradient id="prefix__paint0_linear_2001_67" x1="18.447" y1="43.42" x2="52.153" y2="15.004" gradientUnits="userSpaceOnUse"><stop stop-color="#4893FC"/><stop offset=".27" stop-color="#4893FC"/><stop offset=".777" stop-color="#969DFF"/><stop offset="1" stop-color="#BD99FE"/></linearGradient></defs></svg>
          </svg>
        </div>

        <div className="text-emerald-700 transition hover:scale-105">
          <svg className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black" xmlns="http://www.w3.org/2000/svg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 hover:text-black" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 509.639"><path fill="#fff" d="M115.612 0h280.775C459.974 0 512 52.026 512 115.612v278.415c0 63.587-52.026 115.613-115.613 115.613H115.612C52.026 509.64 0 457.614 0 394.027V115.612C0 52.026 52.026 0 115.612 0z"/><path fill-rule="nonzero" d="M412.037 221.764a90.834 90.834 0 004.648-28.67 90.79 90.79 0 00-12.443-45.87c-16.37-28.496-46.738-46.089-79.605-46.089-6.466 0-12.943.683-19.264 2.04a90.765 90.765 0 00-67.881-30.515h-.576c-.059.002-.149.002-.216.002-39.807 0-75.108 25.686-87.346 63.554-25.626 5.239-47.748 21.31-60.682 44.03a91.873 91.873 0 00-12.407 46.077 91.833 91.833 0 0023.694 61.553 90.802 90.802 0 00-4.649 28.67 90.804 90.804 0 0012.442 45.87c16.369 28.504 46.74 46.087 79.61 46.087a91.81 91.81 0 0019.253-2.04 90.783 90.783 0 0067.887 30.516h.576l.234-.001c39.829 0 75.119-25.686 87.357-63.588 25.626-5.242 47.748-21.312 60.682-44.033a91.718 91.718 0 0012.383-46.035 91.83 91.83 0 00-23.693-61.553l-.004-.005zM275.102 413.161h-.094a68.146 68.146 0 01-43.611-15.8 56.936 56.936 0 002.155-1.221l72.54-41.901a11.799 11.799 0 005.962-10.251V241.651l30.661 17.704c.326.163.55.479.596.84v84.693c-.042 37.653-30.554 68.198-68.21 68.273h.001zm-146.689-62.649a68.128 68.128 0 01-9.152-34.085c0-3.904.341-7.817 1.005-11.663.539.323 1.48.897 2.155 1.285l72.54 41.901a11.832 11.832 0 0011.918-.002l88.563-51.137v35.408a1.1 1.1 0 01-.438.94l-73.33 42.339a68.43 68.43 0 01-34.11 9.12 68.359 68.359 0 01-59.15-34.11l-.001.004zm-19.083-158.36a68.044 68.044 0 0135.538-29.934c0 .625-.036 1.731-.036 2.5v83.801l-.001.07a11.79 11.79 0 005.954 10.242l88.564 51.13-30.661 17.704a1.096 1.096 0 01-1.034.093l-73.337-42.375a68.36 68.36 0 01-34.095-59.143 68.412 68.412 0 019.112-34.085l-.004-.003zm251.907 58.621l-88.563-51.137 30.661-17.697a1.097 1.097 0 011.034-.094l73.337 42.339c21.109 12.195 34.132 34.746 34.132 59.132 0 28.604-17.849 54.199-44.686 64.078v-86.308c.004-.032.004-.065.004-.096 0-4.219-2.261-8.119-5.919-10.217zm30.518-45.93c-.539-.331-1.48-.898-2.155-1.286l-72.54-41.901a11.842 11.842 0 00-5.958-1.611c-2.092 0-4.15.558-5.957 1.611l-88.564 51.137v-35.408l-.001-.061a1.1 1.1 0 01.44-.88l73.33-42.303a68.301 68.301 0 0134.108-9.129c37.704 0 68.281 30.577 68.281 68.281a68.69 68.69 0 01-.984 11.545v.005zm-191.843 63.109l-30.668-17.704a1.09 1.09 0 01-.596-.84v-84.692c.016-37.685 30.593-68.236 68.281-68.236a68.332 68.332 0 0143.689 15.804 63.09 63.09 0 00-2.155 1.222l-72.54 41.9a11.794 11.794 0 00-5.961 10.248v.068l-.05 102.23zm16.655-35.91l39.445-22.782 39.444 22.767v45.55l-39.444 22.767-39.445-22.767v-45.535z"/></svg>
          </svg>
        </div>
        <div className="text-emerald-700 transition hover:scale-105">
          <svg className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black rounded" xmlns="http://www.w3.org/2000/svg">
          <svg viewBox="0 0 512 512" className="h-8 w-8 hover:text-black" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"><path d="M505.999 16.669v478.66c0 5.888-4.782 10.67-10.67 10.67H16.67c-5.888 0-10.67-4.782-10.67-10.67V16.67c0-5.888 4.782-10.67 10.67-10.67h478.66C501.218 6 506 10.782 506 16.67z" fill="#000008"/><path d="M287.518 183.943c-7.713 3.863-11.063 11.063-11.063 30.613 0 0 3.863-3.857 10.038-6.175 4.5-1.67 7.712-3.857 10.031-5.532 6.688-5.012 7.719-11.056 7.719-21.606-.131 0-10.681-.644-16.725 2.7zM237.737 188.45c-6.688 5.53-8.363 15.05-8.363 15.05l-21.606 82.83-17.75-67.78c-1.669-7.207-5.012-16.082-10.031-22.25-6.175-7.85-19.037-8.363-20.581-8.363-1.156 0-13.888.512-20.575 8.362-5.019 6.17-8.363 15.044-10.031 22.25l-16.725 67.781-21.607-82.83s-1.668-8.876-8.362-15.05C71.562 178.93 56 181.25 56 181.25l41.156 154.987s13.375 1.156 20.069-2.188c8.868-4.5 13.375-7.719 18.387-28.937 5.019-18.913 18.394-73.956 19.425-77.819.513-1.669 1.669-6.687 5.013-6.687 3.343 0 4.506 4.5 5.018 6.687 1.157 3.863 14.406 58.906 19.419 77.819 5.531 21.093 9.394 24.437 18.394 28.937 6.687 3.344 20.062 2.188 20.062 2.188l40.9-154.988s-15.562-2.187-26.106 7.2zM304.118 214.556s-2.831 3.856-8.363 7.206c-3.856 2.181-7.2 3.344-11.056 5.525-6.694 3.35-8.362 6.694-8.362 11.706V344.08s10.543 1.157 17.237-2.187c8.869-4.506 10.544-8.875 10.544-27.781v-99.556zM405.618 259.062l52.218-77.3s-21.612-3.863-32.8 6.169c-7.2 6.175-14.406 17.75-14.406 17.75l-18.906 27.78c-1.156 1.676-2.188 2.832-3.856 2.832-1.675 0-3.344-1.669-3.863-2.831L365.1 205.68s-7.712-11.063-14.4-17.75c-11.062-10.032-32.8-6.169-32.8-6.169l50.544 77.169-51.7 77.174s22.762 2.832 33.956-7.206c7.2-6.175 13.888-16.719 13.888-16.719l18.906-27.78c1.156-1.676 2.187-2.832 3.856-2.832 1.675 0 3.35 1.675 3.862 2.831l18.907 27.781s7.2 10.544 13.893 16.72c11.057 10.037 33.307 7.205 33.307 7.205l-51.7-77.043z" fill="#fff" fill-rule="nonzero"/></svg>
          </svg>
        </div>
        <div className="text-emerald-700 transition hover:scale-105">
          <img className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black" src="https://cdn-1.webcatalog.io/catalog/kalodata/kalodata-icon-unplated.png?v=1716618932304" alt="Kalodata" />
        </div>
        <div className="text-emerald-700 transition hover:scale-105">
          <img className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black" src="https://yt3.googleusercontent.com/w8EZlhNVWPEr5RSwKyp-oGhz-YtkTWlE-cMVCpacbW5x3DPpzUgF3vySeOQGtfIpe8DGFcgN=s900-c-k-c0x00ffffff-no-rj" alt="OpusClip" />
        </div>
        <div className="text-emerald-700 transition hover:scale-105">
          <img className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black rounded" src="https://fastly.mwm-storage.mwmcdn.com/raw_files/2e8af7d3-81a5-473c-afa3-6ca878c077c6?height=640&format=webp" alt="Dreamface" />
        </div>
        <div className="text-emerald-700 transition hover:scale-105">
          <img className="h-7 w-7 sm:h-8 sm:w-8 hover:text-black" src="https://make-cxp-documentation.ams3.digitaloceanspaces.com/apps-center-icons/higgsfield%20ai-community.png" alt="Higgsfield" />
        </div>
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
