import { Sun, Moon } from "lucide-react";
import React, { useEffect, useState } from "react";

const useTheme = () => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return true;
    const fromStorage = localStorage.getItem("theme-dark");
    return fromStorage ? fromStorage === "1" : true;
  });
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme-dark", dark ? "1" : "0");
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
};

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? "border-emerald-200/40 bg-white/70 backdrop-blur dark:border-emerald-700/40 dark:bg-emerald-900/30"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
            Vince
          </span>
          <span className="ml-1 text-emerald-700/70 dark:text-emerald-300/70">
            • Portfolio
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-sm font-medium text-emerald-900/80 transition hover:text-emerald-700 dark:text-emerald-100/80 dark:hover:text-emerald-200"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle theme"
          onClick={toggle}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-3 py-1.5 text-emerald-800 shadow backdrop-blur transition hover:bg-white md:px-4 dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          <span className="hidden text-xs md:inline">
            {dark ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
