import React from "react";
import Image from "next/image";
import { skills } from "../constants/skills";

export default function Skills() {

  return (
    <section className="w-full py-20 lg:py-32 bg-background" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl text-primary underline underline-offset-8 decoration-primary/30 text-center font-extrabold mb-16 tracking-tight">
          My Skills 🛠️
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {skills.map((category) => (
            <div
              key={category.id}
              className="bg-card rounded-3xl p-6 sm:p-8 border border-border/50 shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col items-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground tracking-tight border-b-2 border-primary/20 pb-2 w-full text-center">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center group"
                  >
                    <div className="bg-background rounded-2xl p-3 sm:p-4 shadow-sm border border-border group-hover:border-primary group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <Image
                        src={skill.icon}
                        width={40}
                        height={40}
                        alt={skill.name}
                        className="sm:w-12 sm:h-12 opacity-90 group-hover:opacity-100 transition-opacity duration-300 dark:invert-[0.1]"
                      />
                    </div>
                    <span className="font-bold text-muted-foreground mt-2 sm:mt-3 text-center tracking-wide group-hover:text-primary transition-colors duration-300 font-sans text-xs sm:text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
