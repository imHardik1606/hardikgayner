"use client";
import EducationCard from "@/components/EducationCard";
import { education } from "@/constants/education";

export default function OppositeContentTimeline() {
  return (
    <section className="min-h-screen w-full bg-background items-center justify-center px-4 py-10 overflow-hidden">
      <div className="text-primary underline text-5xl text-center font-extrabold p-4 underline-offset-4 decoration-primary/40">
        My Education 🎓
      </div>
      <div className="w-full max-w-screen-7xl">
        {/* <Timeline position="alternate"> */}
        {education.map((edu) => (
          <EducationCard
            key={edu.id}
            year={edu.year}
            institution={edu.institution}
            degree={edu.degree}
            grade={edu.grade}
          />
        ))}
        {/* </Timeline> */}
      </div>
    </section>
  );
}
