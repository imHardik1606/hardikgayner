import React from "react";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      id: 1,
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "/icons/java.svg" },
        { name: "Python", icon: "/icons/python.svg" },
        { name: "JavaScript", icon: "/icons/js.svg" },
        { name: "TypeScript", icon: "/icons/ts.svg" },
        { name: "Go", icon: "/icons/go.svg" },
        { name: "C++", icon: "/icons/cpp.svg" },
      ],
    },
    {
      id: 2,
      title: "Frameworks",
      skills: [
        { name: "React", icon: "/icons/react.svg" },
        { name: "Spring Boot", icon: "/icons/springboot.svg" },
        { name: "Next.js", icon: "/icons/next.svg" },
        { name: "Express.js", icon: "/icons/express.svg" },
        { name: "Node.js", icon: "/icons/node.svg" },
        { name: "GraphQL", icon: "/icons/graphql.svg" },
      ],
    },
    {
      id: 3,
      title: "Databases",
      skills: [
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
        { name: "MongoDB", icon: "/icons/mongodb.svg" },
        { name: "Redis", icon: "/icons/redis.svg" },
        { name: "Firebase", icon: "/icons/firebase.svg" },
        { name: "Supabase", icon: "/icons/supabase.svg" },
      ],
    },
    {
      id: 4,
      title: "Dev Tools & Platforms",
      skills: [
        { name: "Git", icon: "/icons/git.svg" },
        { name: "GitHub", icon: "/icons/github.svg" },
        { name: "figma", icon: "/icons/figma.svg" },
        { name: "VS Code", icon: "/icons/vscode.svg" },
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "Vercel", icon: "/icons/vercel.svg" },
        { name: "Render.com", icon: "/icons/render.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
        { name: "Linux", icon: "/icons/linux.svg" },
        { name: "Postman", icon: "/icons/postman.svg" },
      ],
    },
  ];

  return (
    <section className="min-h-screen w-full bg-background items-center justify-center px-4 py-8 overflow-hidden">
      <div className="text-primary underline text-5xl text-center font-extrabold p-4 underline-offset-4 decoration-primary/40">
        My Skills
      </div>
      <div className="space-y-6 mt-6">
        {skills.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl p-8 max-w-screen-2xl mx-auto border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <h2 className="text-3xl font-semibold font-sans mb-8 text-center text-gray-800 tracking-tight">
              {category.title}
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
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
