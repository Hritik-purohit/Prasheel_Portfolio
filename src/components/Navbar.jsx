import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // 🔥 NAVIGATION + SCROLL FIX
  const goToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 400);
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-[99999] bg-black/70 backdrop-blur-md px-6 py-4 flex justify-between items-center">

      {/* LOGO */}
      <h1
        onClick={() => navigate("/")}
        className="text-white text-3xl cursor-pointer"
      >
        GrownUP <span className="logo-font italic">Arch</span>
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex space-x-8 text-gray-300">

        <button onClick={() => goToSection("about")} className="hover:text-white">
          About
        </button>

        <button onClick={() => goToSection("services")} className="hover:text-white">
          Services
        </button>

        <button onClick={() => goToSection("projects")} className="hover:text-white">
          Projects
        </button>

        <button onClick={() => goToSection("contact")} className="hover:text-white">
          Contact
        </button>

      </div>

      {/* 🔥 HAMBURGER ICON */}
      <div
        className="md:hidden cursor-pointer z-50"
        onClick={() => setOpen(!open)}
      >
        <div className={`w-6 h-0.5 bg-white mb-1 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></div>
        <div className={`w-6 h-0.5 bg-white mb-1 transition ${open ? "opacity-0" : ""}`}></div>
        <div className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
      </div>

      {/* 🔥 PREMIUM MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-white transition-all duration-500 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >

        {/* 🔥 Background Blur */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>

        {/* 🔥 Menu Items */}
        <div className="relative z-10 flex flex-col items-center space-y-8 text-3xl font-semibold">

          <button
            onClick={() => {
              goToSection("about");
              setOpen(false);
            }}
            className="hover:text-blue-400 transition"
          >
            About
          </button>

          <button
            onClick={() => {
              goToSection("services");
              setOpen(false);
            }}
            className="hover:text-blue-400 transition"
          >
            Services
          </button>

          <button
            onClick={() => {
              goToSection("projects");
              setOpen(false);
            }}
            className="hover:text-blue-400 transition"
          >
            Projects
          </button>

          <button
            onClick={() => {
              goToSection("contact");
              setOpen(false);
            }}
            className="hover:text-blue-400 transition"
          >
            Contact
          </button>

        </div>

      </div>

    </div>
  );
}