import { motion } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  tags?: string[];
};

const experiences: Experience[] = [
  {
    role: "AI Video Editor (UGC & VSL Content)",
    company: "HS Essentials",
    type: "Full-time",
    period: "Dec 2025 – Present",
    location: "Remote",
    bullets: [
      "Edit short-form UGC and VSL videos for e-commerce Meta ads using DreamFace, ElevenLabs, and Vmake.",
      "Translate and localize ad scripts into Swedish, Danish, Norwegian, and Finnish for multi-market campaigns.",
    ],
    tags: ["UGC", "VSL", "DreamFace", "ElevenLabs"],
  },
  {
    role: "AI Video Production Specialist",
    company: "Amatemas Inc",
    type: "Full-time",
    period: "Jun 2025 – Dec 2025",
    location: "Remote",
    bullets: [
      "Produced AI-generated videos from concept to final edit for marketing, social media, and brand storytelling.",
      "Crafted prompts and generated high-quality visuals for polished content pipelines.",
    ],
    tags: ["AI Video", "Prompt Engineering", "Content Production"],
  },
    {
    role: "Video Editor",
    company: "ZE Visuals",
    type: "Full-time",
    period: "May 2025 – Aug 2025",
    location: "Remote",
    bullets: [
        "Edited UGC and VSL ads for international e-commerce clients without AI — raw footage to polished, publish-ready content.",
        "Produced static ads alongside video deliverables for various brand campaigns.",
    ],
    tags: ["UGC", "VSL", "Static Ads", "Video Editing", "E-commerce"],
    },
  {
    role: "Web Developer",
    company: "Department of the Interior and Local Government",
    type: "Internship",
    period: "Jan 2025 – Apr 2025",
    location: "Tagbilaran, Central Visayas · On-site",
    bullets: [
      "Built and maintained web applications using Laravel and MySQL for a government agency.",
    ],
    tags: ["Laravel", "MySQL", "Web Development"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const Experience: React.FC = () => {
  return (
    <motion.section
      id="experience"
      className="py-20 bg-white/40 dark:bg-emerald-950/20"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-center text-3xl font-bold text-emerald-900 dark:text-emerald-100"
        >
          Experience
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="mx-auto my-10 h-px w-32 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-60"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          viewport={{ once: true }}
        />

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-emerald-300 via-emerald-400 to-transparent dark:from-emerald-700 dark:via-emerald-600 sm:left-[1.65rem]" />

          <motion.ul variants={stagger} className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="relative pl-12 sm:pl-16"
              >
                {/* Dot */}
                <span className="absolute left-[0.6rem] top-1.5 h-3 w-3 rounded-full border-2 border-emerald-400 bg-emerald-100 dark:border-emerald-500 dark:bg-emerald-900 sm:left-[1.15rem]" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(16,185,129,0.2)" }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="rounded-2xl border border-emerald-200 bg-white/70 p-5 shadow-md backdrop-blur dark:border-emerald-700/40 dark:bg-emerald-900/40"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-base font-semibold text-emerald-900 dark:text-emerald-100">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                    <div className="text-right text-xs text-emerald-600 dark:text-emerald-400">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="mt-3 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm text-emerald-900/80 dark:text-emerald-100/80">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  {exp.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-emerald-200 bg-emerald-50/70 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-700/40 dark:bg-emerald-900/30 dark:text-emerald-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;