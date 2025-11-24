import React from "react";

export default function EducationCard({ year, institution, degree, grade }) {
  return (
    <article
      className="max-w-3xl mx-auto my-10 flex gap-4 p-5 rounded-2xl bg-white shadow-sm font-sans border-blue-300 border-4"
      aria-label={`${institution} education card`}
    >
      {/* Year / Left */}
      <div className="flex-none w-30 text-center rounded-xl bg-gray-100 flex items-center justify-center border border-gray-100">
        <span className="text-lg font-semibold text-gray-900">{year}</span>
      </div>

      {/* Details / Right */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h3 className="font-bold text-black text-2xl">
          {institution}
        </h3>

        <p className="my-3 text-xl font-semibold text-gray-600">{degree}</p>

        {grade && (
          <p className="text-xl font-semibold text-primary ">{grade}</p>
        )}
      </div>
    </article>
  );
}
