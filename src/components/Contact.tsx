import { Mail, Github, Linkedin, Clock, MapPin } from "lucide-react";

const Contact: React.FC = () => (
  <section id="contact" className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
    <div className="mx-auto max-w-2xl text-center">

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-100 leading-tight">
        Let’s Work Together
      </h2>

      {/* DESCRIPTION */}
      <p className="mb-6 sm:mb-8 text-sm sm:text-base text-emerald-900/80 dark:text-emerald-100/80 leading-relaxed px-1 sm:px-0">
        Have a project in mind or want to collaborate? I’m always open to
        creative work, edits, and web builds that stand out.
      </p>

      {/* STATUS BADGES */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 mb-8">

        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-100/60 dark:bg-emerald-900/40 px-4 py-2 text-xs sm:text-sm text-emerald-800 dark:text-emerald-100 border border-emerald-200/40 dark:border-emerald-700/40">
          <Clock className="h-4 w-4" />
          24-hour response time
        </div>

        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-100/60 dark:bg-emerald-900/40 px-4 py-2 text-xs sm:text-sm text-emerald-800 dark:text-emerald-100 border border-emerald-200/40 dark:border-emerald-700/40">
          <MapPin className="h-4 w-4" />
          Based in the Philippines
        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4">

        <a
          href="mailto:deguma.vince@gmail.com"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400"
        >
          <Mail className="h-4 w-4" />
          Email Me
        </a>

        <a
          href="https://github.com/Binseaaa"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-white/50 px-6 py-3 font-semibold text-emerald-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vince-deguma-83606536a/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300 bg-white/50 px-6 py-3 font-semibold text-emerald-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>

      </div>
    </div>
  </section>
);

export default Contact;