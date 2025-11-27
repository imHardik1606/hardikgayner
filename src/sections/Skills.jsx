import React from "react";
import Image from "next/image";
import { skills } from "../constants/skills";

export default function Skills() {

  return (
    <section className="min-h-screen w-full bg-background items-center justify-center px-4 py-8 overflow-hidden">
      <div className="text-primary underline text-5xl text-center font-extrabold p-4 underline-offset-4 decoration-primary/40" id="skills">
        My Skills
      </div>
      <div className="space-y-6 mt-6">
        {skills.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl p-8 max-w-screen-2xl mx-auto border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center"
          >
            <h2 className="text-3xl font-semibold font-sans mb-8 text-center text-gray-800 tracking-tight">
              {category.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center group"
                >
                  <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-50 group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                    <Image
                      src={skill.icon}
                      width={56}
                      height={56}
                      alt={skill.name}
                      className="opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                  <span className="font-medium text-gray-700 mt-4 text-center tracking-wide group-hover:text-gray-900 transition-colors duration-300 font-sans text-lg">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
