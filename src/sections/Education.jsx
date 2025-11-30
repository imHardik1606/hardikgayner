import React from "react";
import EducationCard from "@/components/EducationCard";
import { education } from "@/constants/education";

export default function Education() {
  return (
    <section className="w-full py-8" id="education">
      <div className="text-3xl md:text-5xl text-base underline text-center font-extrabold p-4 underline-offset-4 decoration-primary/40">
  My Education 🎓
</div>
      
      {/* Mobile View - Cards */}
      <div className="block lg:hidden w-full max-w-screen-7xl px-4">
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
      <div className="hidden lg:block w-full max-w-screen-7xl mx-auto px-8 mt-5">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200/50"></div>
          
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} mb-12`}
            >
              {/* Timeline dot - positioned between content and year */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content Card */}
              <div className="w-2/5">
                <div className={`${index % 2 === 0 ? 'pr-6' : 'pl-6'}`}>
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
              <div className="w-1/3">
                <div className={`${index % 2 === 0 ? 'pl-6 text-left' : 'pr-6 text-right'}`}>
                  <span className="inline-block px-5 py-3 bg-primary text-white text-lg font-semibold rounded-full shadow-md">
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
      className={`max-w-md p-6 rounded-2xl bg-white shadow-lg border-blue-300 border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
        alignment === 'left' ? 'ml-1' : 'mr-1'
      }`}
      aria-label={`${institution} education card`}
    >
      <div className="flex flex-col justify-center min-w-0">
        <h3 className="font-bold text-black text-xl mb-3">
          {institution}
        </h3>

        <p className="mb-3 text-lg font-semibold text-gray-600">{degree}</p>

        {grade && (
          <p className="text-lg font-semibold text-primary">{grade}</p>
        )}
      </div>
    </article>
  );
};
