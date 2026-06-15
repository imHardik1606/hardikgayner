"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = ["Home", "Education", "Projects", "Skills", "Contact"];

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
      <div className="flex items-center gap-6 bg-background/40 backdrop-blur-xl border border-primary/20 p-3 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-background/50">
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
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleNavClick(e, item)}
              className="px-6 py-3 rounded-2xl font-extrabold text-primary hover:bg-primary/10 transition-all tracking-tight"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Vertical Divider */}
        <div className="w-px h-8 bg-border/50 hidden md:block"></div>

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
          <div className="bg-card/90 backdrop-blur-2xl border border-white/20 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-[2.5rem] p-6 flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, item)}
                className="px-8 py-5 rounded-3xl text-xl font-black text-foreground hover:bg-primary hover:text-primary-foreground transition-all text-center shadow-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
