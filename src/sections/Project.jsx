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
      className="min-h-screen w-full bg-background flex items-center justify-center px-4 py-8 overflow-hidden"
    >
      <div>
      <div className="text-primary underline text-5xl text-center font-extrabold p-4 underline-offset-4 decoration-primary/40 mb-14">
        My Projects
      </div>
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
    </section>
  );
}
