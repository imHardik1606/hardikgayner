"use client";
import React from "react";
import Image from "next/image";

export default function Intro() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle resume download
  const downloadResume = () => {
    const resumeUrl = "/resume/Hardik-Gayner-Resume.pdf";
    // Create a temporary anchor element to trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Hardik-Gayner-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen w-full bg-background flex items-center justify-center px-4 pb-3 overflow-hidden" id="home">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image Section - Comes first on mobile */}
        <div className="lg:hidden flex justify-center order-1 mb-8">
          <div className="w-64 h-64 rounded-full bg-linear-to-br from-primary to-primary-hover p-2 shadow-xl">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                <Image
                  src="/assets/my-pic.jpg"
                  alt="Profile Image"
                  width={320}
                  height={320}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="flex-1 max-w-2xl order-2 lg:order-1">
          <div className="text-center lg:text-left space-y-4 animate-in fade-in slide-in-from-bottom-4">
            {/* Greeting */}
            <p className="text-secondary text-4xl lg:text-3xl font-light tracking-wide">
              👋 Hey, welcome!
            </p>

            {/* Name */}
            <h1 className="text-4xl lg:text-6xl font-extrabold text-text leading-tight">
              I'm{" "}
              <span className="text-primary underline underline-offset-4 decoration-primary/40">
                <strong>Hardik Gayner</strong>
              </span>
            </h1>

            {/* Title */}
            <div className="inline-block mt-1">
              <h2 className="inline-block text-2xl lg:text-2xl font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 mb-3 rounded-full">
                <strong>Software / Backend Developer</strong>
              </h2>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start gap-6 mb-8">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/hardik-gayner-0b2ab32ba"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-secondary transition-all duration-300 inline-block hover:scale-125"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-8 h-8 text-[#0077B5] rounded-sm"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/imHardik1606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-secondary transition-all duration-300 inline-block hover:scale-125"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/h_gayner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-secondary transition-all duration-300 inline-block hover:scale-125"
              >
                <svg
                  className="w-8 h-8 text-[#1DA1F2] "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>

            {/* Description */}
            <p className="text-lg lg:text-xl text-text/90 leading-relaxed max-w-2xl mt-4 animate-in fade-in slide-in-from-bottom-3">
              I care about scalable systems, clean logic, and writing code that
              lasts — not just code that works.
            </p>

            {/* Buttons with functionality */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center sm:items-stretch">
              {/* View Projects Button - Scrolls to projects section */}
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors duration-300 shadow-lg w-full sm:w-auto min-w-[140px] text-center cursor-pointer"
              >
                View Projects
              </button>

              {/* Download Resume Button - Downloads resume PDF */}
              <button
                onClick={downloadResume}
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-hover hover:text-white transition-all duration-300 w-full sm:w-auto min-w-[140px] text-center cursor-pointer"
              >
                Download Resume
              </button>

              {/* Contact Me Button - Scrolls to contact section */}
              <button
                onClick={() => scrollToSection("contact")}
                className="border-2 border-secondary text-secondary px-6 py-3 rounded-lg font-medium hover:bg-secondary hover:text-white transition-all duration-300 w-full sm:w-auto min-w-[140px] text-center cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        {/* Image Section - Right side on desktop */}
        <div className="hidden lg:flex flex-1 justify-center lg:justify-end order-1 lg:order-2">
          <div className="w-96 h-96 rounded-full bg-linear-to-br from-primary to-primary-hover p-3 shadow-2xl">
            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              <div className="w-full h-full bg-secondary/20 flex items-center justify-center">
                <Image
                  src="/assets/my-pic.jpg"
                  alt="Profile Image"
                  width={352}
                  height={350}
                  className="rounded-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
