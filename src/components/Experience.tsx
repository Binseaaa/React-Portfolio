import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Experience = {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    role: "AI Video Editor (UGC & VSL Content)",
    company: "HS Essentials",
    type: "Full-time",
    period: "Dec 2025 – Present",
    location: "Remote",
    bullets: [
      "Edited UGC & VSL ads for e-commerce Meta campaigns.",
      "Localized scripts into multiple languages for global markets.",
    ],
  },
  {
    role: "AI Video Production Specialist",
    company: "Amatemas Inc",
    type: "Full-time",
    period: "Jun 2025 – Dec 2025",
    location: "Remote",
    bullets: [
      "Created AI-generated marketing videos from concept to final output.",
      "Developed prompt workflows for consistent content quality.",
    ],
  },
  {
    role: "UGC Video Editor",
    company: "ZE Visuals",
    type: "Full-time",
    period: "May 2025 – Aug 2025",
    location: "Remote",
    bullets: [
      "Produced UGC & VSL ads for international clients.",
      "Delivered static + video ad creatives for campaigns.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "DILG",
    type: "Internship",
    period: "Jan 2025 – Apr 2025",
    location: "On-site",
    bullets: ["Built Laravel + MySQL internal systems for government use."],
  },
];

export default function Experience() {
  const [active, setActive] = useState<number | null>(0);

  return (
  <section id="experience" className="relative py-15 sm:py-20">
    {/* background glow */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-1/4 h-[300px] w-[300px] rounded-full bg-emerald-400/10 blur-[120px]" />
      <div className="absolute bottom-10 right-1/4 h-[300px] w-[300px] rounded-full bg-emerald-500/10 blur-[140px]" />
    </div>

    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6">
      {/* header */}
      <div className="text-center mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 dark:text-emerald-100">
          Experience
        </h2>
        <p className="text-sm sm:text-base text-emerald-700/70 dark:text-emerald-200/60 mt-2">
          Click a role to expand details
        </p>
      </div>

      {/* accordion */}
      <div className="space-y-3">
        {experiences.map((exp, i) => {
          const isOpen = active === i;

          return (
            <div
              key={i}
              onClick={() => setActive(isOpen ? null : i)}
              className="cursor-pointer rounded-xl border border-emerald-200/40 dark:border-emerald-700/30 bg-white/60 dark:bg-emerald-950/40 backdrop-blur p-4 sm:p-5 transition hover:shadow-md"
            >
              {/* header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div>
                  <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-emerald-700/70 dark:text-emerald-300/70">
                    {exp.company} • {exp.type}
                  </p>
                </div>

                <span className="text-xs text-emerald-600 dark:text-emerald-400 sm:whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* expand */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-2">
                      {exp.bullets.map((b, j) => (
                        <div
                          key={j}
                          className="flex gap-2 text-sm leading-relaxed text-emerald-900/80 dark:text-emerald-100/80"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                          {b}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  </section>
  );
}