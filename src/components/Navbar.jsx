import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
    <div className="fixed top-0 left-0 w-full z-[99999] bg-black px-6 py-4 flex justify-between items-center">

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

      {/* HAMBURGER */}
      <div
        className="md:hidden cursor-pointer z-[10001]"
        onClick={() => setOpen(true)}
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* 🔥 MOBILE MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px]
        z-[10002] transform transition-transform duration-500
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >

        {/* 🔥 MAIN CARD */}
        <div className="h-full bg-[#f5f5f5] rounded-r-3xl overflow-hidden flex flex-col">

          {/* 🔥 TOP DARK HEADER */}
          <div className="bg-[#111] text-white p-6 pb-8">

            <h2 className="text-lg font-semibold">Menu</h2>

            <p className="text-sm text-gray-400 mt-1">
              Explore sections
            </p>

          </div>

          {/* 🔥 LIGHT OPTIONS */}
          <div className="flex-1 px-4 py-6 space-y-3">

            <button
              onClick={() => { goToSection("about"); setOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition"
            >
              About
            </button>

            <button
              onClick={() => { goToSection("services"); setOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition"
            >
              Services
            </button>

            <button
              onClick={() => { goToSection("projects"); setOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition"
            >
              Projects
            </button>

            <button
              onClick={() => { goToSection("contact"); setOpen(false); }}
              className="w-full text-left px-4 py-3 rounded-xl bg-white text-black hover:bg-gray-100 transition"
            >
              Contact
            </button>

          </div>

          {/* 🔥 FOOTER */}
          <div className="px-6 pb-6 text-sm text-gray-500">
            © GrownUP Arch
          </div>

        </div>

      </div>

      {/* 🔥 OUTSIDE CLICK CLOSE */}
      {open && (
        <div
          className="fixed inset-0 z-[10001]"
          onClick={() => setOpen(false)}
        />
      )}

    </div>
  );
}