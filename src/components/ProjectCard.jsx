"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
  liveLink,
  githubLink,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const safeTags = Array.isArray(tags) ? tags : [];

  const openLive = () => {
    if (liveLink) window.open(liveLink, "_blank", "noopener,noreferrer");
  };

  const handleKeyDownOpenLive = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openLive();
    }
  };

  const ProjectContent = () => (
    <div className="pt-8 pb-10 px-6 sm:pl-10 sm:pr-4 sm:pt-10 lg:pl-12 lg:pr-4 lg:pt-12 sm:max-w-[55%] lg:max-w-[50%] flex flex-col h-full sm:group-even:ml-[45%] lg:group-even:ml-[50%]">
      <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-4 leading-relaxed text-muted-foreground text-base lg:text-lg">
        {description}
      </p>

      {/* Links Section */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 mb-6 sm:mb-8 font-bold text-sm sm:text-base">
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:opacity-90 text-primary-foreground px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-primary/20"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
            Live
          </Link>
        )}

        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary hover:bg-border text-foreground px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl transition-all flex items-center gap-2 border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </Link>
        )}
      </div>

      {safeTags.length > 0 && (
        <ul className="flex flex-wrap gap-2 mt-auto">
          {safeTags.map((tag, index) => (
            <li
              className="bg-primary/10 border border-primary/20 px-2.5 py-1 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-widest text-primary font-bold rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-12 sm:mb-20 last:mb-0"
    >
      <div
        role={liveLink ? "link" : "article"}
        tabIndex={0}
        onClick={openLive}
        onKeyDown={handleKeyDownOpenLive}
        className={`block relative max-w-5xl mx-auto rounded-3xl overflow-hidden bg-card border border-border/50 shadow-2xl transition-all duration-500 hover:shadow-primary/10 hover:border-primary/20 ${liveLink ? 'cursor-pointer' : ''}`}
        aria-label={liveLink ? `Open ${title} live demo` : title}
      >
        <ProjectContent />

        {imageUrl && (
          <Image
            width={600}
            height={400}
            src={imageUrl}
            alt={title}
            quality={95}
            className="absolute hidden sm:block top-12 h-64 -right-24 w-[400px] lg:w-[500px] rounded-2xl shadow-2xl
            transition duration-700
            group-hover:scale-[1.05]
            group-hover:-translate-x-4
            group-hover:translate-y-4
            group-hover:-rotate-2
            group-even:group-hover:translate-x-4
            group-even:group-hover:translate-y-4
            group-even:group-hover:rotate-2
            group-even:right-[initial] group-even:-left-24"
          />
        )}
      </div>
    </motion.div>
  );
}
