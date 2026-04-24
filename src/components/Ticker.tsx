const items = [
  "Talking Head Videos",
  "Vibe Coding",
  "Web Development",
  "Ecommerce Ads",
  "UGC Creatives",
  "Meta Ads",
  "AI Lip Sync & Translation",
  "AI Animation Videos",
  "AI Singing Videos",
  "AI Talking Ads",
];

export default function Ticker() {
  return (
    <div className="relative overflow-hidden border-y border-emerald-200/50 bg-white/60 backdrop-blur-md dark:border-emerald-800/40 dark:bg-emerald-950/60">

      {/* fade edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/60 to-white dark:from-black dark:via-black/40 dark:to-black" />

      {/* track */}
      <div className="flex w-max animate-ticker py-5">

        {/* first loop */}
        <div className="flex">
          {items.map((text, i) => (
            <div
              key={`a-${i}`}
              className="
                min-w-[220px]
                flex items-center justify-center
                whitespace-nowrap
                text-sm font-medium tracking-wide
                text-emerald-900/90
                dark:text-emerald-200
              "
            >
              {text}
              <span className="ml-6 opacity-40">•</span>
            </div>
          ))}
        </div>

        {/* duplicate loop */}
        <div className="flex" aria-hidden="true">
          {items.map((text, i) => (
            <div
              key={`b-${i}`}
              className="
                min-w-[220px]
                flex items-center justify-center
                whitespace-nowrap
                text-sm font-medium tracking-wide
                text-emerald-900/90
                dark:text-emerald-200
              "
            >
              {text}
              <span className="ml-6 opacity-40">•</span>
            </div>
          ))}
        </div>

      </div>

      {/* animation */}
      <style>{`
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}