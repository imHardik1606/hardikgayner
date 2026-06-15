import React from "react";
import EducationCard from "@/components/EducationCard";
import { education } from "@/constants/education";

export default function Education() {
  return (
    <section className="w-full py-20 lg:py-32 bg-background" id="education">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl text-primary underline underline-offset-8 decoration-primary/30 text-center font-extrabold mb-16 tracking-tight">
          My Education 🎓
        </h2>
        
        {/* Mobile View - Cards */}
        <div className="block lg:hidden space-y-6">
          {education.map((edu) => (
            <EducationCard
              key={edu.id}
              year={edu.year}
              institution={edu.institution}
              degree={edu.degree}
              grade={edu.grade}
            />
          ))}
        </div>

        {/* Desktop/Tablet View - Timeline */}
        <div className="hidden lg:block relative mt-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
          
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} mb-24 last:mb-0`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_0_4px_rgba(37,99,235,0.1)] z-10"></div>
              
              {/* Content Card */}
              <div className="w-1/2">
                <div className={`${index % 2 === 0 ? 'pl-8 xl:pl-16' : 'pr-8 xl:pr-16 text-right'}`}>
                  <TimelineEducationCard
                    year={edu.year}
                    institution={edu.institution}
                    degree={edu.degree}
                    grade={edu.grade}
                    alignment={index % 2 === 0 ? 'left' : 'right'}
                  />
                </div>
              </div>

              {/* Year */}
              <div className="w-1/2">
                <div className={`${index % 2 === 0 ? 'pr-8 xl:pr-16 text-right' : 'pl-8 xl:pl-16 text-left'}`}>
                  <span className="inline-block px-6 py-2 bg-secondary text-primary text-xl font-bold rounded-full border border-primary/20 shadow-sm">
                    {edu.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Timeline Education Card Component
const TimelineEducationCard = ({ year, institution, degree, grade, alignment }) => {
  return (
    <article
      className={`max-w-md p-8 rounded-3xl bg-card border border-border/50 shadow-xl hover:shadow-primary/5 transition-all duration-500 transform hover:-translate-y-2 group ${
        alignment === 'left' ? 'ml-0' : 'ml-auto'
      }`}
      aria-label={`${institution} education card`}
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-extrabold text-foreground text-2xl group-hover:text-primary transition-colors">
          {institution}
        </h3>

        <p className="text-lg font-medium text-muted-foreground leading-relaxed">
          {degree}
        </p>

        {grade && (
          <div className="inline-flex items-center self-start px-4 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-bold">
            Grade: {grade}
          </div>
        )}
      </div>
    </article>
  );
};
