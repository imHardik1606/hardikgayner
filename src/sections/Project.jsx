"use client";
import React from "react";
import { projects } from "@/constants/projects";
// import ProjectCard from "@/components/ProjectCard";
import dynamic from "next/dynamic";

const ProjectCard = dynamic(() => import("../components/ProjectCard"), {
  ssr: false,
  loading: () => <p>Loading Projects...</p>,
})

export default function Project() {
  return (
    <section
      id="projects"
      className="w-full py-20 lg:py-32 bg-background flex flex-col items-center px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-4xl lg:text-6xl text-primary underline underline-offset-8 decoration-primary/30 text-center font-extrabold mb-24 tracking-tight">
          My Projects 🚀
        </h2>
        <div className="space-y-12 lg:space-y-24">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.name}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.techStack}
              liveLink={project.live ? project.live : null}
              githubLink={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
