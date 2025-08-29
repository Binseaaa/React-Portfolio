import { Mail, Github, Linkedin } from "lucide-react";

const Divider = () => (
  <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
);

const Contact: React.FC = () => (
  <section
    id="contact"
    className="py-20 bg-emerald-50/50 dark:bg-emerald-950/30"
  >
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold">Contact</h2>
      <Divider />
      <p className="mb-6 text-emerald-900/80 dark:text-emerald-100/80">
        Have a project in mind or want to collab? Reach out and let's craft
        something beautiful.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:bg-emerald-500 dark:hover:bg-emerald-400">
          <Mail className="h-4 w-4" /> Email Me: deguma.vince@gmail.com
        </div>
        <a
          href="https://github.com/Binseaaa"
          className="inline-flex items-center gap-2 rounded-2xl border border-emerald-300 bg-white/50 px-6 py-3 font-semibold text-emerald-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/vince-deguma-83606536a/"
          className="inline-flex items-center gap-2 rounded-2xl border border-emerald-300 bg-white/50 px-6 py-3 font-semibold text-emerald-800 shadow-sm backdrop-blur transition hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
        >
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
