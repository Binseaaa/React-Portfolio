import skills from "../jsons/skills.json";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaFigma,
  FaLaravel,
  FaPhp,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiInertia,
  SiWix,
} from "react-icons/si";

import { FaToolbox } from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  HTML5: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  JavaScript: <FaJs className="text-yellow-400" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  React: <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
  Figma: <FaFigma className="text-pink-500" />,
  MySQL: <SiMysql className="text-blue-700" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Laravel: <FaLaravel className="text-red-500" />,
  InertiaJS: <SiInertia className="text-purple-500" />,
  PHP: <FaPhp className="text-indigo-500" />,
  GIT: <FaGitAlt className="text-orange-600" />,
  Wix: <SiWix className="text-black dark:text-white" />,
  Capcut: <FaToolbox className="text-gray-500" />,
  Elementor: <FaToolbox className="text-pink-400" />,
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

const Divider = () => (
  <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
);

const Skills: React.FC = () => (
  <Section id="skills">
    <h2 className="text-center text-3xl font-bold">Skills</h2>
    <Divider />

    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
      {skills.map((s) => (
        <div
          key={s}
          className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-white/60 px-4 py-4 text-sm font-medium text-emerald-800 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
        >
          {/* ICON */}
          <div className="text-2xl text-emerald-600 group-hover:scale-110 transition">
            {iconMap[s] || <FaToolbox />}
          </div>

          {/* TEXT */}
          <span className="text-xs text-center">{s}</span>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;