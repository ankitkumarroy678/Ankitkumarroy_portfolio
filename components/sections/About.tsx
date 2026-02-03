"use client";

import { useInView } from "@/app/useInView";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

export default function About() {
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

  return (
    <section ref={ref} id="about" className="w-full">
      <div className="min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 pt-5 sm:px-6 lg:px-16 space-y-12">
          {/* TITLE */}
          <div
            className={`relative flex justify-center transition-all duration-1200
            ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl">About Me</h1>
            <span
              className={`absolute -bottom-2 h-1 w-24 origin-left
              bg-linear-to-r from-[#190b19] to-orange-600
              dark:from-white dark:to-blue-600
              transition-all duration-1400
              ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            />
          </div>

          {/* CONTENT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* LEFT TEXT */}
            <div
              className={`transition-all duration-1200
              ease-[cubic-bezier(0.16,1,0.3,1)]
              ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }
              flex flex-col gap-5 justify-center
              items-center sm:items-start`}
            >
              <p
                className={`text-base text-[#717373]
                w-full sm:max-w-lg
                transition-all duration-1200
                ${isVisible ? "sm:translate-x-10 opacity-100" : "opacity-0"}
                text-center sm:text-left`}
                style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
              >
                I'm a passionate{" "}
                <span className="dark:text-white text-black font-semibold">
                  Full Stack Developer
                </span>{" "}
                with a keen eye for design and a deep love for creating seamless
                digital experiences. With expertise in modern JavaScript
                frameworks and responsive design principles, I transform ideas
                into interactive, user-centered web applications.
              </p>

              <p
                className={`text-base text-[#717373]
                w-full sm:max-w-lg
                transition-all duration-1200
                ${isVisible ? "sm:translate-x-10 opacity-100" : "opacity-0"}
                text-center sm:text-left`}
                style={{ transitionDelay: isVisible ? "450ms" : "0ms" }}
              >
                My journey in web development has been driven by curiosity and a
                commitment to continuous learning. I thrive on staying current
                with the latest technologies and best practices, always seeking
                innovative ways to solve complex problems while maintaining
                clean, efficient code.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: Code,
                  title: "Clean Code",
                  description:
                    "Writing maintainable, scalable code that stands the test of time",
                },
                {
                  icon: Lightbulb,
                  title: "Problem Solving",
                  description:
                    "Breaking down complex challenges into elegant, user-friendly solutions",
                },
                {
                  icon: Zap,
                  title: "Performance",
                  description:
                    "Optimizing for speed and efficiency across all devices",
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "Working effectively with cross-functional teams to deliver exceptional results",
                },
              ].map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className={`group transition-all duration-900
                    ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${cardVariants[index].delay}
                    ${
                      isVisible
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-12 opacity-0 scale-95"
                    }
                    flex gap-5 border border-[#d1d1d1]
                    dark:border-[#2d2c2c] rounded-xl p-5
                    items-start hover:border-orange-600/50
                    dark:hover:border-blue-600/50
                    hover:shadow-lg hover:-translate-y-1`}
                  >
                    <div
                      className="h-12 w-12 flex items-center justify-center
                      rounded-lg bg-linear-to-r
                      from-[#e9e7e9] to-[#fdf0ea]
                      dark:from-[#474747] dark:to-[#383838]
                      dark:border dark:border-[#6b6b6b]
                      transition-transform duration-300
                      group-hover:scale-110 group-hover:rotate-3"
                    >
                      <Icon />
                    </div>

                    <div className="flex flex-col gap-1">
                      <h3
                        className="font-semibold transition-colors
                        group-hover:text-orange-600
                        dark:group-hover:text-blue-400"
                      >
                        {card.title}
                      </h3>
                      <p className="text-[#717373] text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
