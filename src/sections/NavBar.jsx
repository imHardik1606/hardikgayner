'use client';

import { useState } from 'react';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'Education', 'Projects', 'Skills', 'Contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-1 z-50 px-4 flex items-center justify-center rounded">
      {/* Mobile Menu Button - Left Side */}
      <div className="md:hidden absolute left-4">
        <button
          onClick={toggleMenu}
          className="text-primary bg-primary/10 border border-primary/20 p-2 rounded-full hover:bg-primary/20 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu Items - Centered but not full width */}
      <div className="hidden md:flex space-x-6 rounded-4xl items-center bg-background/50 backdrop-blur-xs px-6 py-4 border-2 border-primary/20">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-primary bg-primary/10 border border-primary/20 px-4 py-2 rounded-full hover:bg-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transform transition-transform duration-300 font-bold font-sans whitespace-nowrap"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Mobile Spacer - Maintains layout without text */}
      <div className="md:hidden">
        <div className="invisible px-4 py-1 rounded-full">
          {/* Invisible spacer that matches the hamburger button size */}
          Hello There
        </div>
      </div>

      {/* Mobile Menu Dropdown - Not full width */}
      {isMenuOpen && (
        <div className="absolute top-full left-4 right-4 md:hidden bg-background/95 backdrop-blur-sm border border-primary/20 rounded-lg shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-primary bg-primary/10 border border-primary/20 px-4 py-3 rounded-full hover:bg-primary/30 hover:scale-105 hover:shadow-md hover:shadow-primary/20 transform transition-transform duration-300 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
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