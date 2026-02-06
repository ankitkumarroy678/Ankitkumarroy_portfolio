"use client";

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  const [showName, setShowName] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const socialItem = [
    { icon: Github, link: "https://github.com/ankitkumarroy678" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ankit-kumar-roy-349536274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { icon: Mail, link: "mailto:ankitkumarroy678@gmail.com" },
  ];
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
    setTimeout(() => setShowName(true), 450);
    setTimeout(() => setShowUnderline(true), 650);
    setTimeout(() => setShowParagraph(true), 700);
    setTimeout(() => setShowIcon(true), 750);
    setTimeout(() => setShowButton(true), 800);
    setTimeout(() => setShowScroll(true), 900);
  }, []);

  return (
    <section id="home" className="scroll-mt-5">
      <div className="relative min-h-screen w-full flex items-center justify-center px-4">
        <div className="flex flex-col items-center text-center max-w-3xl">
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            text-3xl sm:text-4xl md:text-5xl text-black dark:text-white`} // Mobile 3xl Tablate 4xl desktop 5xl
          >
            Hi, I'm
          </div>

          {/* Name */}
          <div
            className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            text-3xl sm:text-4xl md:text-5xl text-neutral-900 dark:text-white mt-2`} // Mobile 3xl Tablate 4xl desktop 5xl
          >
            Ankit Kumar{" "}
            <span className="relative inline-block">
              <span
                className={`inline-block transform-gpu transition-all duration-500
                ${showName ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
              >
                <span
                  className="
                  text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text
                  bg-linear-to-r
                  from-[#190b19] via-orange-600 to-[#389380]
                  dark:from-white dark:via-blue-600 dark:to-green-400" // Mobile 4xl Tablate 5xl desktop 7xl
                >
                  Roy
                </span>
              </span>

              {/* Underline */}
              <span
                className={`absolute -bottom-2 left-0 h-1 w-full origin-left transform
                transition-transform duration-500
                ${showUnderline ? "scale-x-100" : "scale-x-0"}
                bg-linear-to-r
                from-[#190b19] to-orange-600
                dark:from-white dark:to-blue-600`}
              />
            </span>
          </div>

          {/* Description */}
          <p
            className={`transition-all duration-300 ease-out mt-5
            ${showParagraph ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            text-base sm:text-lg text-[#6c6d6e] max-w-xl`} // text-base sm:text-lg max-w-xl
          >
            Front-End Developer crafting beautiful, responsive web experiences
            with{" "}
            <span className="text-[#f65712] dark:text-blue-400 font-semibold">
              JavaScript
            </span>{" "}
            and modern technologies
          </p>

          {/* Social Icons */}
          <div
            className={`transition-all duration-300 ease-out
            ${showIcon ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            flex gap-3 sm:gap-4 my-6`}
          >
            {socialItem.map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                  className="h-10 w-10 cursor-pointer flex items-center justify-center
                hover:bg-[#e0dede] dark:hover:bg-[#191919]
                rounded-full transition-colors"
                >
                  <Icon size={16} className="text-black dark:text-white" />
                </a>
              );
            })}
          </div>

          {/* Buttons */}
          <div
            className={`transition-all duration-300 ease-out
            ${showButton ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
            flex flex-col sm:flex-row gap-4 sm:gap-6`} // tablet - sm flex-row
          >
            <a
              href={"#projects"}
              className="bg-[#161515] dark:bg-white dark:hover:bg-[#e2e2e2]
              text-white dark:text-[#191919] font-semibold px-6 py-2 rounded-lg"
            >
              View My Work
            </a>

            <a
              href={"#contact"}
              className="border border-[#d0cece] dark:border-[#333333]
              hover:bg-[#e0dede] dark:bg-[#161515] dark:hover:bg-[#1a1919]
              dark:text-white font-semibold px-6 py-2 rounded-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`transition-all duration-500 ease-out
          ${showScroll ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"}
          absolute bottom-6 left-1/2 -translate-x-1/2
          flex flex-col items-center text-xs sm:text-sm text-[#6c6d6e]`}
        >
          <p>Scroll Down</p>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
