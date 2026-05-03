import { useEffect } from "react";
import gsap from "gsap";

export default function Loader({ onFinish }) {

  useEffect(() => {
    if (document.body.classList.contains("loaded")) return;
    document.body.classList.add("loaded");

    const tl = gsap.timeline();

    tl.from(".loader-char", {
      y: 80,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
      ease: "power4.out"
    })
      .to(".loader-text", {
        scale: 1.08,
        duration: 0.6,
        ease: "power2.out"
      })
      .to(".loader", {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5,
        onComplete: onFinish
      });

  }, []);

  return (
    <div className="loader fixed inset-0 flex items-center justify-center overflow-hidden z-[999999]">

      {/* 🔥 Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔥 Dark Overlay (IMPORTANT for visibility) */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* 🔥 Text */}
      <h1 className="loader-text relative text-white text-5xl md:text-7xl font-extrabold tracking-wide text-center">

        {/* GrownUP */}
        <div className="block">
          {"GrownUP".split("").map((char, i) => (
            <span key={"g" + i} className="loader-char inline-block">
              {char}
            </span>
          ))}
        </div>

        {/* Arch (italic font) */}
        <div className="block mt-2 md:inline md:mt-0">
          {"Arch".split("").map((char, i) => (
            <span
              key={"a" + i}
              className="loader-char inline-block logo-font italic"
            >
              {char}
            </span>
          ))}
        </div>

      </h1>

    </div>
  );
}