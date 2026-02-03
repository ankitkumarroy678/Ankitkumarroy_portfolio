"use client";

import { useInView } from "@/app/useInView";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const { ref, isVisible } = useInView({
    threshold: 0.4,
    rootMargin: "0px 0px 20% 0px",
  });

  return (
    <section ref={ref} id="projects" className="scroll-mt-3">
      <div className="min-h-screen w-full">
        <div className="flex flex-col justify-center items-center px-4 sm:px-6">
          {/* TITLE */}
          <div
            className={`transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            } relative mt-10`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-base text-center">
              Featured Projects
            </h1>
            <span
              className="absolute -bottom-3 left-1/2 -translate-x-1/2
              w-24 h-1 bg-linear-to-r
              from-[#190b19] to-orange-600
              dark:from-white dark:to-blue-600"
            />
          </div>

          <div className="w-full space-y-5 mt-12 mb-5 max-w2xl">
            {/* ================= ROW 1 ================= */}
            <div className="flex flex-col sm:flex-row justify-center md:pr-40 items-center gap-5">
              {/* IMAGE */}
              <div
                className={`transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "-translate-x-12 opacity-0 scale-95"
                }
                relative group rounded-xl overflow-hidden
                w-full sm:w-[280px]`}
              >
                <img
                  src="Invocily pic.png"
                  alt=""
                  className="w-full h-40 rounded-xl object-cover
                  transition-transform duration-200 group-hover:opacity-60"
                />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex justify-end items-start gap-3 p-4 rounded-xl"
                >
                  <button className="p-2 rounded-lg bg-[#222222] hover:scale-110 transition">
                    <ExternalLink size={15} color="white" />
                  </button>
                  <a
                    href="https://github.com/ankitkumarroy678/InvoiceApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#222222] hover:scale-110 transition cursor-pointer"
                  >
                    <Github size={15} color="white" />
                  </a>
                </div>
              </div>

              {/* TEXT */}
              <div
                className={`transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-12 opacity-0 scale-95"
                }
                space-y-2 text-center sm:text-left`}
              >
                <h1 className="font-base text-xl sm:text-2xl">Invoice Clone</h1>
                <p className="text-[#717373] text-sm max-w-md">
                  A full-featured Beautiful Invoices Not Ugly Ones
                </p>
                <div className="flex justify-center sm:justify-start items-center gap-3">
                  {/* <button
                    className="text-xs bg-[#1c1b2a] text-white
                    dark:bg-white dark:text-[#343535]
                    font-semibold px-3 py-1.5 rounded-md flex items-center gap-2"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </button> */}
                  <a
                    href="https://github.com/ankitkumarroy678/InvoiceApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-[#c9c9c9]
                    dark:bg-[#121212] dark:text-white
                    font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 cursor-pointer"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* ================= ROW 2 (ORDER FIXED) ================= */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              {/* IMAGE (mobile first) */}
              <div
                className={`delay-200 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-12 opacity-0 scale-95"
                }
                relative group rounded-xl overflow-hidden
                w-full sm:w-[280px]
                order-1 sm:order-2`}
              >
                <img
                  src="medium clone .png"
                  alt=""
                  className="w-full h-40 rounded-xl object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex justify-end items-start gap-3 p-4 rounded-xl"
                >
                  <button className="p-2 rounded-lg bg-[#222222] hover:scale-110 transition">
                    <ExternalLink size={15} color="white" />
                  </button>
                  <a
                    href="https://github.com/ankitkumarroy678/medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#222222] hover:scale-110 transition cursor-pointer"
                  >
                    <Github size={15} color="white" />
                  </a>
                </div>
              </div>

              {/* TEXT */}
              <div
                className={`delay-200 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "-translate-x-12 opacity-0 scale-95"
                }
                space-y-2 text-center sm:text-left
                order-2 sm:order-1`}
              >
                <h1 className="font-base text-xl sm:text-2xl">Medium Clone</h1>
                <p className="text-[#717373] text-sm max-w-md">
                  Medium is a home for human stories and ideas. Here, anyone can
                  share knowledge and wisdom with the world
                </p>
                <div className="flex justify-center sm:justify-start items-center gap-3">
                  {/* <button
                    className="text-xs bg-[#1c1b2a] text-white
                    dark:bg-white dark:text-[#343535]
                    font-semibold px-3 py-1.5 rounded-md flex items-center gap-2"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </button> */}
                  <a
                    href="https://github.com/ankitkumarroy678/medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-[#c9c9c9]
                    dark:bg-[#121212] dark:text-white
                    font-semibold px-3 py-1.5 rounded-md flex items-center gap-2 cursor-pointer"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* ================= ROW 3 ================= */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
              {/* IMAGE */}
              <div
                className={`delay-300 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "-translate-x-12 opacity-0 scale-95"
                }
                relative group rounded-xl overflow-hidden
                w-full sm:w-[280px]`}
              >
                <img
                  src="coming soon.png"
                  alt=""
                  className="w-full h-40 rounded-xl object-cover"
                />
                <div
                  className="absolute inset-0 bg-black/60 opacity-0
                  group-hover:opacity-100 transition-opacity duration-300
                  flex justify-end items-start gap-3 p-4 rounded-xl"
                >
                  <button className="p-2 rounded-lg bg-[#222222] hover:scale-110 transition">
                    <ExternalLink size={15} color="white" />
                  </button>
                  <button className="p-2 rounded-lg bg-[#222222] hover:scale-110 transition">
                    <Github size={15} color="white" />
                  </button>
                </div>
              </div>

              {/* TEXT */}
              <div
                className={`delay-300 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${
                  isVisible
                    ? "translate-x-0 opacity-100 scale-100"
                    : "translate-x-12 opacity-0 scale-95"
                }
                space-y-2 text-center sm:text-left`}
              >
                <h1 className="font-semibold text-xl sm:text-2xl">
                  Working.....
                </h1>
                <p className="text-[#717373] text-sm max-w-md">
                  A full-featured e-commerce platform with cart, checkout, and
                  payment integration.
                </p>
                <div className="flex justify-center sm:justify-start items-center gap-3">
                  {/* <button
                    className="text-xs bg-[#1c1b2a] text-white
                    dark:bg-white dark:text-[#343535]
                    font-semibold px-3 py-1.5 rounded-md flex items-center gap-2"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </button> */}
                  <button
                    className="text-xs border border-[#c9c9c9]
                    dark:bg-[#121212] dark:text-white
                    font-semibold px-3 py-1.5 rounded-md flex items-center gap-2"
                  >
                    <Github size={14} /> Code
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* VIEW ALL */}
          <button
            className={`transition-all delay-400 duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-12 opacity-0 scale-95"
            }
            border border-[#e2e2e2] hover:bg-[#efefef]
            dark:bg-white dark:hover:bg-[#e2e2e2]
            text-sm text-[#343535]
            px-4 py-1 rounded-lg font-semibold`}
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
