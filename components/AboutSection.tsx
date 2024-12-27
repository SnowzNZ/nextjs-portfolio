import React from "react";

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Git" },
  { skill: "SQLite" },
  { skill: "Maven" },
  { skill: "Gradle" },
];

const AboutSection = () => {
  return (
    <section id="about" aria-label="About Me Section">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-br to-sky-400 from-sky-700 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          {/* About Text */}
          <div className="md:w-1/2">
            <p>
              I'm Snowz, a Java developer for Oceanias.net with a passion for
              cars, skiing, mountain biking, and all things tech. While I
              started as a Python enthusiast, discovering Java—and working with
              the Bukkit API to build plugins and solutions—has been a
              game-changer. These days, I' m all about crafting solutions that
              power Oceanias.net and fuel my love for development.
            </p>
          </div>

          {/* Skills Section */}
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white px-4 py-2 mr-2 mt-2 rounded shadow-md hover:scale-105 transform transition duration-300 ease-in-out font-semibold"
                >
                  {item.skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
