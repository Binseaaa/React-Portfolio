const Footer: React.FC = () => (
  <footer className="border-t border-emerald-200/40 bg-white/40 py-6 text-center backdrop-blur dark:border-emerald-700/40 dark:bg-emerald-900/30">
    <div className="mx-auto w-full max-w-7xl px-6 text-sm text-emerald-900/80 dark:text-emerald-100/80">
      © {new Date().getFullYear()} Vince • Built with React, Tailwind, and a lot
      of 🎵
    </div>
  </footer>
);
export default Footer;
