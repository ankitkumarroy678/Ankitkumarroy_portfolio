"use client";
import { useInView } from "@/app/useInView";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const { ref, isVisible } = useInView({
    threshold: 0.4,
    rootMargin: "0px 0px 20% 0px",
  });
  return (
    <div
      ref={ref}
      className="dark:bg-[#0a0a0a] flex justify-center items-center text-center text-[#868686] border-t border-[#cecdcd] dark:border-[#333333]"
    >
      <div
        className={`transition-all  duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-95"
        } text-sm py-5`}
      >
        © 2026 Ankit Kumar{" "}
        <span className="font-bold text-transparent bg-clip-text bg-linear-to-r dark:from-white dark:to-blue-600 from-[#190b19] to-orange-600">
          Roy
        </span>{" "}
        . Made with{" "}
        <span className="inline-flex items-center mx-1">
          <FaHeart className="text-red-500" />
        </span>{" "}
        lots of ☕<br />
        <span className="text-xs">
          {" "}
          Designed & Built with React, TypeScript & Tailwind CSS
        </span>
      </div>
    </div>
  );
}
