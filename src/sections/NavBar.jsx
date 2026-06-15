"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  const menuItems = ["Home", "Education", "Projects", "Skills", "Contact"];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    menuItems.forEach((item) => {
      const element = document.getElementById(item.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, item) => {
    e.preventDefault();
    const id = item.toLowerCase();
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-6">
      <div className="flex items-center gap-6 bg-background/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-3 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] transition-all duration-300 hover:bg-background/15">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-3.5 rounded-2xl bg-primary/10 text-primary hover:bg-primary/20 transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a
                key={item}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, item)}
                className={`px-6 py-3 rounded-2xl text-base font-extrabold transition-all tracking-tight ${
                  isActive
                    ? "text-primary bg-primary/15 shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-8 bg-border/20 hidden md:block"></div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-3.5 rounded-2xl bg-primary text-primary-foreground hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/30"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full mt-6 left-4 right-4 md:hidden animate-in fade-in slide-in-from-top-6 duration-500 ease-out">
          <div className="bg-card/40 backdrop-blur-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2.5rem] p-6 flex flex-col gap-3">
            {menuItems.map((item) => {
              const id = item.toLowerCase();
              const isActive = activeSection === id;
              return (
                <a
                  key={item}
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`px-8 py-5 rounded-[1.5rem] text-xl font-black transition-all text-center shadow-sm ${
                    isActive
                      ? "text-primary bg-primary/20"
                      : "text-foreground hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
