"use client";
import { useInView } from "@/app/useInView";
import emailjs from "@emailjs/browser";
import {
  CircleAlert,
  CircleCheckBig,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { use, useState } from "react";

export default function Contact() {
  const [visibleTools, setVisibleTools] = useState(0);
  const [status, setStatus] = useState("idle");
  const [showNotification, setShowNotification] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    throw new Error("Missing EmailJS environment variables");
  }

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { ref, isVisible } = useInView({
    threshold: 0.4,
    rootMargin: "0px 0px 20% 0px",
  });
  const card = [
    { icon: Mail, title: "Email", description: "ankitkumarroy678@gmail.com" },
    { icon: Phone, title: "Phone", description: "+91 79924561237" },
    { icon: MapPin, title: "Location", description: "Jharkhand, Pakur" },
  ];

  const cardVariants = [
    { delay: "delay-200" },
    { delay: "delay-300" },
    { delay: "delay-[400ms]" },
  ];
  const socialItem = [
    { icon: Github, link: "https://github.com/ankitkumarroy678" },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/ankit-kumar-roy-349536274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    { icon: Twitter, link: "https://x.com/ROY32132576" },
  ];

  const handleSubmit = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("error");
      setIsExiting(false);
      setShowNotification(true);

      // start exit animation after showing for 2.5 seconds
      setTimeout(() => {
        setIsExiting(true);
      }, 2500);

      // unmount AFTER exit animation completes (400ms animation duration)
      setTimeout(() => {
        setShowNotification(false);
        setStatus("idle");
        setIsExiting(false);
      }, 2900);

      return;
    }

    setStatus("sending");

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("success");
        setIsExiting(false);
        setShowNotification(true);

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        // start exit animation after showing for 2.5 seconds
        setTimeout(() => {
          setIsExiting(true);
        }, 2500);

        // unmount AFTER exit animation completes (400ms animation duration)
        setTimeout(() => {
          setShowNotification(false);
          setStatus("idle");
          setIsExiting(false);
        }, 2900);
      })
      .catch(() => {
        setStatus("error");
        setIsExiting(false);
        setShowNotification(true);

        // start exit animation after showing for 2.5 seconds
        setTimeout(() => {
          setIsExiting(true);
        }, 2500);

        // unmount AFTER exit animation completes (400ms animation duration)
        setTimeout(() => {
          setShowNotification(false);
          setStatus("idle");
          setIsExiting(false);
        }, 2900);
      });
  };

  return (
    <section ref={ref} id="contact">
      <div className="h-fit w-full pb-10 px-4 sm:px-6">
        <div className="flex flex-col justify-center items-center space-y-9">
          <div
            className={`transition-all  duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }relative items-center mt-15`}
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-base text-center">
              Get In Touch
            </h1>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-21 h-1 bg-linear-to-r from-[#190b19] to-orange-600 dark:from-white dark:to-blue-600"></span>
          </div>
          <div
            className={`transition-all delay-100  duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isVisible
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
          >
            <p className="text-sm lg:text-base font-base text-[#9da1a1] text-center">
              Ready to start your next project? I'd love to hear from you. Send
              me a message <br /> and I'll respond as soon as possible.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl">
            <div
              className={`transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              } h-fit border border-[#cecdcd] dark:border-[#333333] dark:bg-[#0a0a0a] rounded-2xl`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <div className="space-y-5 p-7 w-full">
                <div className="flex gap-3">
                  <div className="space-y-1 w-full">
                    <h1 className="font-semibold text-xs">Name</h1>
                    <input
                      onChange={handleSubmit}
                      value={form.name}
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="dark:border dark:border-[#333333] rounded-md dark:bg-[#121212] bg-[#f3f3f5] pl-2 text-xs py-1.5 w-full"
                    />
                  </div>
                  <div className="space-y-1 w-full">
                    <h1 className="font-semibold text-xs">Email</h1>
                    <input
                      onChange={handleSubmit}
                      value={form.email}
                      name="email"
                      type="text"
                      placeholder="your.email@example.com"
                      className="dark:border dark:border-[#333333] rounded-md dark:bg-[#121212] bg-[#f3f3f5] px-2 text-xs py-1.5 w-full"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <h1 className="font-semibold text-xs">Subject</h1>
                  <input
                    onChange={handleSubmit}
                    value={form.subject}
                    name="subject"
                    type="text"
                    placeholder="Project discussion"
                    className="dark:border dark:border-[#333333] rounded-md w-full dark:bg-[#121212] bg-[#f3f3f5] pl-2 text-xs py-1.5"
                  />
                </div>
                <div className="space-y-1">
                  <h1 className="font-semibold text-xs">Message</h1>
                  <textarea
                    onChange={handleSubmit}
                    value={form.message}
                    name="message"
                    placeholder="Tell me about your project..."
                    className="dark:border dark:border-[#333333]  rounded-md w-full h-25 resize-none dark:bg-[#121212] bg-[#f3f3f5]  pl-2 text-xs py-1.5"
                  />
                </div>
                <div>
                  <button
                    onClick={handleSend}
                    disabled={status === "sending"}
                    className=" w-full flex items-center justify-center gap-3 rounded-md cursor-pointer px-5 py-1.5 text-xs dark:bg-[#fafafa] bg-black text-white dark:text-black font-semibold"
                  >
                    {status === "sending" ? (
                      <>
                        <Send size={15} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
                {showNotification && status === "success" && (
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                      isExiting
                        ? "max-h-0 mt-0 opacity-0"
                        : "max-h-20 mt-2 opacity-100"
                    }`}
                  >
                    <div
                      className={`
      dark:text-white font-semibold border
      bg-[#83ffcf5a] dark:bg-[#151a18]
      border-[#8cc3b0] dark:border-[#143327]
      rounded-lg py-2 text-sm
      flex items-center gap-2 justify-center
      transition-all duration-400 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
      ${
        isExiting
          ? "-translate-y-full opacity-0 scale-95"
          : "translate-y-0 opacity-100 scale-100"
      }
    `}
                    >
                      <CircleCheckBig
                        className={`text-[#00c950] transition-transform duration-400 ${
                          isExiting
                            ? "scale-0 rotate-180"
                            : "scale-100 rotate-0"
                        }`}
                        size={15}
                      />
                      Message sent successfully
                    </div>
                  </div>
                )}

                {showNotification && status === "error" && (
                  <div
                    className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
                      isExiting
                        ? "max-h-0 mt-0 opacity-0"
                        : "max-h-20 mt-2 opacity-100"
                    }`}
                  >
                    <div
                      className={`
      dark:text-white font-semibold border
      bg-[#fef8f5] dark:bg-[#1d1616]
      border-[#d9a5a2] dark:border-[#341615]
      rounded-lg py-2 text-sm
      flex items-center gap-2 justify-center
      transition-all duration-400 ease-[cubic-bezier(0.4, 0, 0.2, 1)]
      ${
        isExiting
          ? "-translate-y-full opacity-0 scale-95"
          : "translate-y-0 opacity-100 scale-100"
      }
    `}
                    >
                      <CircleAlert
                        className={`text-[#d33c28] transition-transform duration-400 ${
                          isExiting
                            ? "scale-0 rotate-180"
                            : "scale-100 rotate-0"
                        }`}
                        size={15}
                      />
                      Failed to send message. Try again.
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="space-y-3">
              <h1
                className={`inline-block delay-200 duration-300 ${
                  isVisible ? "animate-pop" : "scale-0 opacity-0"
                } text-lg`}
              >
                Contact Information
              </h1>
              {card.map((cards, index) => {
                const Icon = cards.icon;
                return (
                  <div
                    key={index}
                    className={`group transition-all duration-900 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                      cardVariants[index].delay
                    } ${
                      isVisible
                        ? "translate-y-0 opacity-100 scale-100"
                        : "translate-y-12 opacity-0 scale-95"
                    } border border-[#d1d1d1]
                    dark:border-[#2d2c2c] rounded-xl 
                    items-start hover:border-orange-600/50
                    dark:hover:border-blue-600/50
                    hover:shadow-lg hover:-translate-y-1`}
                  >
                    <div className="flex items-center px-5 py-5 border border-[#cecdcd] dark:border-[#333333] dark:bg-[#0a0a0a] rounded-xl gap-3">
                      <div
                        className="w-fit px-3 py-3 rounded-lg bg-linear-to-br dark:hover:from-[#353432] dark:to-[#0d1220]  dark:from-[#1f2022] from-[#e9e7e9] to-[#fdf0ea] hover:from-[#d1d1d1] cursor-pointer  transition-transform duration-300
                      group-hover:scale-110 group-hover:rotate-3"
                      >
                        <Icon size={18} />
                      </div>
                      <div className="">
                        <p
                          className="text-xs font-xs text-[#9da1a1] transition-colors
                        group-hover:text-orange-600
                        dark:group-hover:text-blue-400"
                        >
                          {cards.title}
                        </p>
                        <p className="text-sm">{cards.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <h1
                className={`inline-block delay-200 duration-300 ${
                  isVisible ? "animate-pop" : "scale-0 opacity-0"
                } text-lg my-5`}
              >
                Connect With Me
              </h1>
              <div className="flex gap-3 my-5">
                {socialItem.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={i}
                      className={`transform-gpu duration-200
        ${isVisible ? "animate-pop" : "scale-0 opacity-0"} w-fit px-3 py-3 rounded-lg dark:hover:from-[#353432] dark:to-[#0d1220] bg-linear-to-br  dark:from-[#1f2022] from-[#e9e7e9] to-[#fdf0ea] hover:from-[#d1d1d1] cursor-pointer`}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              <div
                className={`transition-all  duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-12 opacity-0 scale-95"
                } flex items-center dark:bg-[#0a0a0a] border border-[#cecdcd] dark:border-[#262626] rounded-2xl px-4 py-5 gap-3 dark:border-l-[#00c950] border-l-black border-l-4`}
              >
                <div className="flex justify-center">
                  <div className="h-3 w-3 animate-pulse rounded-full bg-[#00c950]"></div>
                </div>
                <div>
                  <h1 className="font-semibold text-sm">
                    Available for new projetcs
                  </h1>
                  <p className="text-xs font-base text-[#868686]">
                    Currently accepting new freelance opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
