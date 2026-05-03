import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const heroRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.registerPlugin(ScrollTrigger);

      // 🔥 GPU hint (Safari + smoothness)
      gsap.set([".hero-title", ".hero-sub", ".hero-btn"], {
        willChange: "transform"
      });

      // 🔥 Title
      gsap.from(".hero-title", {
        y: 60,
        scale: 0.95,
        duration: 1.1,
        ease: "power3.out",
        force3D: true
      });

      // 🔥 Subtitle
      gsap.from(".hero-sub", {
        y: 30,
        duration: 0.9,
        delay: 0.25,
        ease: "power2.out",
        force3D: true
      });

      // 🔥 Button
      gsap.from(".hero-btn", {
        y: 20,
        scale: 0.9,
        duration: 0.5,
        delay: 0.5,
        ease: "back.out(1.6)",
        force3D: true
      });

      // 🔥 Parallax effect (scroll based)
      gsap.to(".hero-bg", {
        scale: 1.15,
        y: 80,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="hero-bg absolute w-full h-full object-cover will-change-transform"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 px-5 transform-gpu">

        <h1 className="hero-title text-5xl md:text-7xl font-bold text-white">
          Designing <span className="text-blue-400">Modern</span> Spaces
        </h1>

        <p className="hero-sub mt-6 text-gray-300 text-lg">
          Civil Engineering | Architecture | Interior Design
        </p>

        <button
          onClick={() => {navigate("/projects");window.scrollTo(0, 0);}}
          className="hero-btn mt-12 px-8 py-3 bg-white text-black rounded-full hover:scale-110 transition duration-300"
        >
          View All Projects      
        </button>

      </div>

    </div>
  );
}