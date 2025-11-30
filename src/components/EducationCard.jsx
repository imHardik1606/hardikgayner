export default function EducationCard({ year, institution, degree, grade }) {
  return (
    <article
      className="max-w-3xl mx-auto my-6 p-6 rounded-2xl bg-white shadow-lg border-blue-300 border-2 font-sans hover:shadow-xl transition-all duration-300"
      aria-label={`${institution} education card`}
    >
      {/* Year Badge */}
      <div className="mb-4">
        <span className="inline-block px-4 py-2 bg-primary text-white text-lg font-semibold rounded-full">
          {year}
        </span>
      </div>

      {/* Details */}
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