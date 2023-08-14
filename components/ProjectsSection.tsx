"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import axios from "axios";

interface Project {
  name: string;
  description: string;
  image: string;
  github: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "SnowReports",
    description:
      "SnowReports is my first Spigot plugin and introduction to Java development. It is a report plugin with essential features such as Discord integration, report cooldowns, auto-completion for commands, in-game report notifications, a report list GUI, and more. All reports are stored in a SQLite database, which was challenging as it was my first time doing so. Current Downloads: {downloads}",
    image: "/placeholder.png",
    github: "https://github.com/SnowzNZ/SnowReports",
    link: "https://modrinth.com/plugin/snowreports",
  },
];

const ProjectsSection = () => {
  const [updatedProjects, setUpdatedProjects] = useState<Project[]>([]);
  useEffect(() => {
    async function fetchTotalDownloads() {
      try {
        const spigetResponse = await axios.get(
          "https://api.spiget.org/v2/resources/111484"
        );
        const modrinthResponse = await axios.get(
          "https://api.modrinth.com/v2/project/nt3ehUXJ"
        );

        const spigetDownloads = spigetResponse.data.downloads || 0;
        const modrinthDownloads = modrinthResponse.data.downloads || 0;

        const totalDownloads = spigetDownloads + modrinthDownloads;

        const updatedProjects = projects.map((project) => ({
          ...project,
          description: project.description.replace(
            "{downloads}",
            totalDownloads.toString()
          ),
        }));

        setUpdatedProjects(updatedProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchTotalDownloads();
  }, []);

  return (
    <section id="projects">
      <h1 className="mb-20 -mt-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-br to-sky-400 from-sky-700 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {updatedProjects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-5 mt-10 md:mt-0">
                      {project.name}
                    </h1>
                    <p className="text-lg leading-7 mb-4 text-neutral-800 dark:text-neutral-300">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <FiExternalLink
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
