"use client";
import ThemeToggle from "@/app/theme-toggle";
import { Menu, Sun } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState(false);
  const [enableBlur, setEnableBlur] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];
  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setEnableBlur(true);
    }, 500);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-opacity-100 transition-all duration-500 ease-out ${show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"} ${enableBlur ? "backdrop-blur-xl" : "backdrop-blur-0"} ${
        scrolled
          ? "border-b border-[#cecdcd] dark:border-[#333333]"
          : "border-b border-transparent"
      }`}
    >
      <div
        ref={navRef}
        className="max-w-7xl mx-auto px-4 md:px-8 lg:px-40 py-2"
      >
        <div className="flex justify-between  items-center text-black  dark:text-white">
          <div>
            <a href={"#home"} className="text-lg sm:text-xl font-semibold">
              Ankit Kumar{" "}
              <span className="font-bold text-transparent bg-clip-text bg-linear-to-r dark:from-white dark:to-blue-600 from-[#190b19] to-orange-600">
                Roy
              </span>
            </a>
          </div>
          <div className="hidden md:flex  items-center space-x-8 font-semibold">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="underline-animation text-gray-500 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-xl"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col  items-center gap-4 py-4 border-t mt-2 border-[#cecdcd] dark:border-[#333333]">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
