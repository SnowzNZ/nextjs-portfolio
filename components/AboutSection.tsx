import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Java" },
  { skill: "Python" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Git" },
  { skill: "SQLite" },
  { skill: "Maven" },
  { skill: "Linux" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-br to-sky-400 from-sky-700 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Placeholder
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
              elit scelerisque mauris pellentesque pulvinar pellentesque. Eu
              facilisis sed odio morbi quis. Mauris ultrices eros in cursus
              turpis massa. Mi bibendum neque egestas congue quisque egestas
              diam in.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
              elit scelerisque mauris pellentesque pulvinar pellentesque. Eu
              facilisis sed odio morbi quis. Mauris ultrices eros in cursus
              turpis massa. Mi bibendum neque egestas congue quisque egestas
              diam in.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
              elit scelerisque mauris pellentesque pulvinar pellentesque. Eu
              facilisis sed odio morbi quis. Mauris ultrices eros in cursus
              turpis massa. Mi bibendum neque egestas congue quisque egestas
              diam in.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Technologies I use</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
