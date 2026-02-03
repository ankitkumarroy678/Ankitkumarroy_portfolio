"use client";
import { useInView } from "@/app/useInView";
import { Braces, Wrench } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CgFigma } from "react-icons/cg";
import { FaDocker, FaNodeJs, FaReact, FaWrench } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { PiPackageDuotone } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostman, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {
  const { ref, isVisible } = useInView({
    threshold: 0.4,
    rootMargin: "0px 0px 20% 0px",
  });
  const cardVariants = [
    { delay: "delay-200" },
    { delay: "delay-300" },
    { delay: "delay-[400ms]" },
    { delay: "delay-500" },
  ];
  const [animate, setAnimate] = useState(false);
  const [visibleTools, setVisibleTools] = useState(0);

  const tools = [
    { name: "Git & Github", icon: <FaWrench className="dark:white gray" /> },
    { name: "VS Code", icon: <VscVscode color="#2babf1" size={20} /> },
    { name: "Figma", icon: <CgFigma /> },
    { name: "Webpack", icon: <PiPackageDuotone size={20} /> },
    { name: "Postman", icon: <SiPostman color="#fd713b" size={20} /> },
    { name: "Docker", icon: <FaDocker color="#0894e3" size={25} /> },
  ];
  const softSkill = [
    {
      title: "Problem",
      discription: "Breaking down complex challenges into manageable solutions",
    },
    {
      title: "Team Collaboration",
      discription: "Working effectively with cross-functional teams",
    },
    {
      title: "Communication",
      discription: "Clear technical communication with stakeholders",
    },
    {
      title: "Adaptability",
      discription: "Quickly learning and adapting to new technologies",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);

          // stagger tools one by one
          tools.forEach((_, index) => {
            setTimeout(() => {
              setVisibleTools((prev) => prev + 1);
            }, index * 120); // delay between tools
          });

          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="skills" className="scroll-mb-10">
      <div className="min-h-screen w-full px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div
            className={`transition-all  duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
              } relative items-center mt-13`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-base text-center">
              Skill & Expertise
            </h1>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-linear-to-r  from-[#190b19] to-orange-600 dark:from-white dark:to-blue-600"></span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
            <div>
              <div className="space-y-5">
                <h1
                  className={`inline-block delay-200 duration-300 ${isVisible ? "animate-pop" : "scale-0 opacity-0"
                    }`}
                >
                  Technical Skills
                </h1>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h1
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} flex items-center gap-2 font-semibold`}
                      >
                        <span>
                          <Braces color="#f7e025" size={20} />
                        </span>
                        JavaScript
                      </h1>
                      <p
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} `}
                      >
                        95%
                      </p>
                    </div>
                    <div
                      className={`w-full dark:bg-[#3a3a3a] bg-[#939393] rounded-full h-2 overflow-hidden transition-all duration-700 ease-out ${animate
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-95"
                        }`}
                      style={{ transitionDelay: animate ? "0ms" : "0ms" }}
                    >
                      <div
                        className={`dark:bg-white bg-black h-2 rounded-full transition-all duration-1000 ease-out ${animate ? "w-[95%]" : "w-0"
                          } `}
                        style={{ transitionDelay: animate ? "200ms" : "0ms" }}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h1
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} flex items-center gap-2 font-semibold`}
                      >
                        <span>
                          <FaReact size={20} color="#00ffff" />
                        </span>
                        React
                      </h1>
                      <p
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} `}
                      >
                        92%
                      </p>
                    </div>
                    <div
                      ref={ref}
                      className={`w-full dark:bg-[#3a3a3a] bg-[#939393] rounded-full h-2 overflow-hidden transition-all duration-700 ease-out ${animate
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-95"
                        }`}
                    >
                      <div
                        className={`dark:bg-white bg-black h-2 rounded-full transition-all duration-1000 ease-out ${animate ? "w-[92%]" : "w-0"
                          } `}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h1
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} flex items-center gap-2 font-semibold`}
                      >
                        <span className="bg-white rounded-full">
                          <SiTypescript size={20} color="#087cd1" />
                        </span>
                        Typescript
                      </h1>
                      <p
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} `}
                      >
                        88%
                      </p>
                    </div>
                    <div
                      ref={ref}
                      className={`w-full dark:bg-[#3a3a3a] bg-[#939393] rounded-full h-2 overflow-hidden transition-all duration-700 ease-out ${animate
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-95"
                        }`}
                    >
                      <div
                        className={`dark:bg-white bg-black h-2 rounded-full transition-all duration-1000 ease-out ${animate ? "w-[88%]" : "w-0"
                          } `}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h1
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} flex items-center gap-2 font-semibold`}
                      >
                        <span className=" h-5 w-5 ">
                          <IoTriangle
                            size={20}
                            className="text-black dark:text-white"
                          />
                        </span>
                        NextJs
                      </h1>
                      <p
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} `}
                      >
                        85%
                      </p>
                    </div>
                    <div
                      ref={ref}
                      className={`w-full dark:bg-[#3a3a3a] bg-[#939393] rounded-full h-2 overflow-hidden transition-all duration-700 ease-out ${animate
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-95"
                        }`}
                    >
                      <div
                        className={`dark:bg-white bg-black h-2 rounded-full transition-all duration-1000 ease-out ${animate ? "w-[85%]" : "w-0"
                          } `}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h1
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} flex items-center gap-2 font-semibold`}
                      >
                        <span className=" h-5 w-5 ">
                          <RiTailwindCssFill size={20} color="#00bcff" />
                        </span>
                        CSS/Tailwind
                      </h1>
                      <p
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} `}
                      >
                        90%
                      </p>
                    </div>
                    <div
                      ref={ref}
                      className={`w-full dark:bg-[#3a3a3a] bg-[#939393] rounded-full h-2 overflow-hidden transition-all duration-700 ease-out ${animate
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-95"
                        }`}
                    >
                      <div
                        className={`dark:bg-white bg-black h-2 rounded-full transition-all duration-1000 ease-out ${animate ? "w-[90%]" : "w-0"
                          } `}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <h1
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} flex items-center gap-2 font-semibold`}
                      >
                        <span className=" h-5 w-5 ">
                          <FaNodeJs size={20} color="#58a148" />
                        </span>
                        Nodejs
                      </h1>
                      <p
                        className={`transform-gpu
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} `}
                      >
                        90%
                      </p>
                    </div>
                    <div
                      ref={ref}
                      className={`w-full dark:bg-[#3a3a3a] bg-[#939393] rounded-full h-2 overflow-hidden transition-all duration-700 ease-out ${animate
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-95"
                        }`}
                    >
                      <div
                        className={`dark:bg-white bg-black h-2 rounded-full transition-all duration-1000 ease-out ${animate ? "w-[90%]" : "w-0"
                          } `}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <h1
                  className={`inline-block delay-200 duration-300 ${isVisible ? "animate-pop" : "scale-0 opacity-0"
                    }`}
                >
                  Tools & Technologies
                </h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {tools.map((tool, index) => (
                    <div
                      key={tool.name}
                      className={`
        flex flex-col justify-center items-center
        border border-[#cecdcd] dark:border-[#2d2c2c] rounded-2xl px-6 py-5
        transform-gpu transition-all duration-300 ease-out
        hover:scale-110 hover:-translate-y-2 hover:shadow-lg
        hover:border-orange-600/50 dark:hover:border-blue-600/50
        cursor-pointer
        ${index < visibleTools ? "animate-pop" : "scale-0 opacity-0"}
      `}
                    >
                      <div className="transition-transform duration-300 hover:scale-125">
                        {tool.icon}
                      </div>
                      <p className="text-sm text-center mt-2 transition-colors duration-300 hover:text-orange-600 dark:hover:text-blue-400">{tool.name}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  {softSkill.map((item, index) => (
                    <div
                      key={index}
                      className={`group transition-all duration-900 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${cardVariants[index].delay} ${isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-95"}  border border-[#d1d1d1] dark:border-[#2d2c2c] rounded-2xl px-5 py-3 dark:border-l-white border-l-black border-l-4`}
                    >
                      <h1 className="font-semibold">{item.title}</h1>
                      <p className="text-sm font-base text-[#717373]">
                        {item.discription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
