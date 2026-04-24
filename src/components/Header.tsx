import { Sun, Moon, FileText, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const useTheme = () => {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const fromStorage = localStorage.getItem("theme-dark");
    return fromStorage ? fromStorage === "1" : false;
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
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header: React.FC = () => {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
<header
  className={`fixed top-0 left-0 w-full z-[9999] border-b backdrop-blur-xl transition ${
    scrolled
      ? "border-emerald-300/20 bg-white/85 shadow-sm dark:border-emerald-700/30 dark:bg-emerald-900/70"
      : "border-emerald-200/20 bg-white/60 dark:border-emerald-700/20 dark:bg-emerald-900/40"
  }`}
>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

        {/* Logo */}
        <a href="#home" className="text-lg sm:text-xl font-bold tracking-tight whitespace-nowrap">
          <span className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 bg-clip-text text-transparent">
            Vince
          </span>
          <span className="ml-1 text-emerald-700/70 dark:text-emerald-300/70 hidden sm:inline">
            • Portfolio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="relative text-sm font-medium text-emerald-900/80 dark:text-emerald-100/80
                        hover:text-emerald-700 dark:hover:text-emerald-200
                        after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                        after:w-0 after:bg-emerald-500 after:transition-all after:duration-300
                        hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Desktop-only buttons */}
          <div className="hidden md:flex items-center gap-2 sm:gap-3">

            <button
              onClick={toggle}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/60 px-3 py-1.5 text-emerald-800 shadow backdrop-blur transition hover:bg-white dark:border-emerald-700/40 dark:bg-emerald-900/40 dark:text-emerald-100"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="hidden sm:inline text-xs">
                {dark ? "Light" : "Dark"}
              </span>
            </button>

            <a
              href="https://drive.google.com/file/d/15nppdFEwzjFRHrd1ne9Vog9H1eRHz1PP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/60 px-3 py-1.5 text-xs font-medium text-emerald-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-emerald-700/50 dark:bg-emerald-900/40 dark:text-emerald-50"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white/60 p-2 dark:border-emerald-700/40 dark:bg-emerald-900/40"
          >
            {open ? (
              <X className="h-5 w-5 text-emerald-800 dark:text-emerald-100" />
            ) : (
              <Menu className="h-5 w-5 text-emerald-800 dark:text-emerald-100" />
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden relative z-50 border-t border-emerald-200/20 dark:border-emerald-700/20 bg-white/90 dark:bg-emerald-900/80 backdrop-blur-xl">
          <div className="flex flex-col px-6 py-5 gap-5">

            {/* Nav links */}
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="text-sm font-medium text-emerald-900 dark:text-emerald-100"
              >
                {l.label}
              </a>
            ))}

            {/* Divider */}
            <div className="h-px bg-emerald-200/30 dark:bg-emerald-700/30" />

            {/* Theme toggle (mobile) */}
            <button
              onClick={toggle}
              className="flex items-center gap-2 text-sm text-emerald-900 dark:text-emerald-100"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              {dark ? "Light Mode" : "Dark Mode"}
            </button>

            {/* Resume (mobile) */}
            <a
              href="https://drive.google.com/file/d/15nppdFEwzjFRHrd1ne9Vog9H1eRHz1PP/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-emerald-900 dark:text-emerald-100"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;