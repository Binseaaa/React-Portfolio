import skills from "../jsons/skills.json";

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, className, children }) => (
  <section id={id} className={`py-20 ${className ?? ""}`}>
    <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">{children}</div>
  </section>
);

const Divider = () => (
  <div className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60" />
);

const Skills: React.FC = () => (
  <Section id="skills">
    <h2 className="text-center text-3xl font-bold">Skills</h2>
    <Divider />
    <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {skills.map((s) => (
        <div
          key={s}
          className="group rounded-xl border border-emerald-200 bg-white/60 px-3 py-2 text-center text-sm font-medium text-emerald-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
        >
          {s}
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
