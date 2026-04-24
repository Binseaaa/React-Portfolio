import { motion } from "framer-motion";

/* ─── VIDEO / AI TOOLS ─── */
const videoStack = [
  { name: "CapCut", src: "https://static.vecteezy.com/system/resources/previews/067/065/640/non_2x/capcut-logo-square-rounded-capcut-logo-capcut-logo-free-download-free-png.png" },
  { name: "Canva", src: "https://1000logos.net/wp-content/uploads/2020/03/Canva-icon.png" },
  { name: "ChatGPT", src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Kalodata", src: "https://cdn-1.webcatalog.io/catalog/kalodata/kalodata-icon-unplated.png?v=1716618932304" },
  { name: "OpusClip", src: "https://yt3.googleusercontent.com/w8EZlhNVWPEr5RSwKyp-oGhz-YtkTWlE-cMVCpacbW5x3DPpzUgF3vySeOQGtfIpe8DGFcgN=s900-c-k-c0x00ffffff-no-rj" },
  { name: "DreamFace", src: "https://fastly.mwm-storage.mwmcdn.com/raw_files/2e8af7d3-81a5-473c-afa3-6ca878c077c6?height=640&format=webp" },
  { name: "ElevenLabs", src: "https://assets.basehub.com/dd0abb74/d4445fa7a68e5b557cafdfe41db79e92/alt-cover.jpg" },
  { name: "HeyGen", src: "https://static.uppromote.com/wp-content/uploads/2025/12/heygen.webp" },
  { name: "Midjourney", src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Midjourney_Emblem.png/960px-Midjourney_Emblem.png" },
  { name: "Higgsfield", src: "https://make-cxp-documentation.ams3.digitaloceanspaces.com/apps-center-icons/higgsfield%20ai-community.png" },
  { name: "Gemini", src: "https://helios-i.mashable.com/imagery/articles/00zEnhbB6mXQs8x5yXw38bT/images-3.fit_lim.size_376x.webp" },
  { name: "Sora", src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/light/sora-color.png" },
  { name: "Slack", src: "https://static.vecteezy.com/system/resources/thumbnails/068/894/567/small/slack-circle-logo-editable-slack-app-for-web-mobile-and-print-projects-free-png.png" },
  { name: "Notion", src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "ClickUp", src: "https://clickup.com/images/for-se-page/clickup.png" },
];

/* ─── WEB STACK ─── */
const webStack = {
  frontend: [
    { name: "HTML5", src: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
    { name: "CSS", src: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
    { name: "JavaScript", src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
    { name: "TypeScript", src: "https://cdn.worldvectorlogo.com/logos/typescript.svg" },
    { name: "React", src: "https://images.seeklogo.com/logo-png/48/1/react-logo-png_seeklogo-480571.png" },
    { name: "Tailwind CSS", src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },

    // added UI frameworks
    { name: "Bootstrap", src: "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg" },
    { name: "Flowbite", src: "https://flowbite.com/docs/images/logo.svg" },
    { name: "shadcn/ui", src: "https://ui.shadcn.com/apple-touch-icon.png" },
  ],

  backend: [
    { name: "Laravel", src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg" },
    { name: "MySQL", src: "https://pngimg.com/d/mysql_PNG23.png" },
    { name: "Firebase", src: "https://cdn.worldvectorlogo.com/logos/firebase-1.svg" },
    { name: "InertiaJS", src: "https://avatars.githubusercontent.com/u/47703742?s=200&v=4" },
  ],

  devtools: [
    { name: "Git", src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg" },
    { name: "GitHub", src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
    { name: "GitLab", src: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
    { name: "VS Code", src: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg" },
  ],
};

/* ─── CARD ─── */
function StackCard({
  title,
  items,
}: {
  title: string;
  items: { name: string; src: string }[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="cursor-pointer
        relative w-full rounded-3xl p-5 sm:p-8
        bg-white/60 dark:bg-emerald-950/30
        border border-emerald-200/40 dark:border-emerald-700/30
        backdrop-blur-xl shadow-xl overflow-hidden
      "
    >
      {/* glow */}
      <div className="absolute -top-24 -right-24 h-72 w-72 bg-emerald-400/10 blur-[120px] rounded-full" />

      <h3 className="text-lg sm:text-xl font-semibold text-emerald-900 dark:text-emerald-100 mb-6">
        {title}
      </h3>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
        {items.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.08 }}
            className="
              group relative flex items-center justify-center
              aspect-square w-full
              rounded-2xl
              bg-white/50 dark:bg-emerald-900/30
              border border-emerald-200/30 dark:border-emerald-700/30
              backdrop-blur
              shadow-sm
              transition
            "
          >
            <img
              src={item.src}
              alt={item.name}
              className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
              loading="lazy"
            />

            {/* glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition shadow-[0_0_25px_rgba(16,185,129,0.35)] border border-emerald-400/50" />

            {/* tooltip */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs px-2 py-1 rounded-md bg-emerald-900/90 text-white opacity-0 group-hover:opacity-100 transition whitespace-nowrap pointer-events-none">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── SECTION ─── */
export default function ToolCards() {
  return (
    <section className="py-15 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">

        {/* title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-900 dark:text-emerald-100">
            My Tool Stack
          </h2>
          <p className="mt-2 text-emerald-700/70 dark:text-emerald-200/60">
            Video, AI & web development tools I use daily
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* FIXED HERE (IMPORTANT) */}
          <StackCard title="Video / AI Tools" items={videoStack} />

          <StackCard
            title="Web Development"
            items={[
              ...webStack.frontend,
              ...webStack.backend,
              ...webStack.devtools,
            ]}
          />
        </div>

      </div>
    </section>
  );
}