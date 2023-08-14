"use client";
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { IoIosArrowDown } from "react-icons/io";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/logos/snowz.svg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl bg-gradient-to-br from-cyan-500 to-blue-500"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-300">
            Hi, I&#39;m
          </h2>
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">
            Jackson / Snowz
          </h1>
          <p className="text-lg mt-4 text-neutral-800 dark:text-neutral-300 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold ease-in-out duration-500 underline bg-clip-text text-transparent bg-gradient-to-br from-cyan-500 to-blue-500 hover:brightness-125">
              Self-Taught Developer{" "}
            </span>
            from New Zealand.
          </p>
          <div className="flex flex-row items-center space-x-2 mb-1">
            <a
              href="https://github.com/SnowzNZ"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/logos/github.svg"
                width={35}
                height={35}
                alt="GitHub"
                className="hover:-translate-y-1 transition-transform cursor-pointer invert dark:invert-0"
              />
            </a>
            <a
              href="https://discord.com/users/332027111319797761"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/logos/discord.svg"
                width={35}
                height={35}
                alt="Discord"
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </a>
            <a
              href="https://osu.ppy.sh/users/15051562"
              rel="noreferrer"
              target="_blank"
            >
              <Image
                src="/logos/osu.svg"
                width={35}
                height={35}
                alt="osu!"
                className="hover:-translate-y-1 transition-transform cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <IoIosArrowDown
            size={35}
            className="cursor-pointer ease-in-out duration-300 hover:scale-125"
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
