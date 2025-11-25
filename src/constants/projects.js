// projects.js
export const projects = [
  {
    id: 1,
    name: "LeetGuide — Performance Analytics Platform",
    description:
      "A performance analytics platform that provides fast, structured query access to user analytics and insights. Improved query response times, added robust error handling, and applied caching and rate-limiting to make the API layer more reliable and scalable.",
    techStack: ["React.js", "Express.js", "GraphQL", "Gemini API", "JavaScript"],
    imageUrl: "/assets/leetguide-ss.png",
    github: "https://github.com/imHardik1606/LeetGuide-Frontend",
    live: "https://leetguide-xi.vercel.app/"
  },
  {
    id: 2,
    name: "TripMate — AI Travel Companion",
    description:
      "An AI-powered travel assistant that automatically generates personalized itineraries and streamlines trip planning. Includes secure user authentication, real-time data sync, and mobile-optimized pages with fast load times and graceful handling of API downtime.",
    techStack: ["React.js", "Firebase (Auth, Firestore)", "Google Gemini API", "Google Places API", "TypeScript"],
    imageUrl: "/assets/tripmate-ss.png",
    github: "https://github.com/imHardik1606/Tripmate",
    live: "https://trip-mate-rouge.vercel.app/"
  },
  {
    id: 3,
    name: "Library Management System (CLI)",
    description:
      "A command-line inventory and borrowing system for libraries with concurrency-safe operations and optimized CLI navigation. Designed for reliable handling of many transactions and multiple concurrent users while keeping command response fast.",
    techStack: ["Python", "Command-line Interface (CLI)"],
    imageUrl: "/assets/library-management-ss.png",
    github: "https://github.com/imHardik1606/Library-Management-System",
    live: ""
  }
];
