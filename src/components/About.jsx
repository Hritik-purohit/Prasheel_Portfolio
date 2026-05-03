import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingWord from "./RotatingWord";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from(".about-img", {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%"
        }
      });

      gsap.from(".about-text > *", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%"
        }
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-32 bg-black text-white overflow-hidden"
    >

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gray-500/10 blur-[160px] rounded-full"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* 🔥 IMAGE CARD */}
          <div className="relative group">

            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition"></div>

            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">

              <img
                src="images/about.jpeg"
                alt="about"
                className="about-img w-full h-[400px] object-cover rounded-2xl transition duration-500 group-hover:scale-105"
              />

            </div>

          </div>

          {/* 🔥 TEXT */}
          <div className="about-text">

            <h2 className="text-5xl font-bold mb-6 leading-tight">
            Crafting <RotatingWord words={["Modern", "Luxury", "Elegant", "Premium"]} /> Structures
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              We design and build high-end civil and architectural solutions 
              with a focus on innovation, durability, and aesthetic excellence.
            </p>

            <p className="text-gray-500 leading-relaxed mb-10">
              From premium residential spaces to large-scale commercial projects, 
              our work reflects precision engineering and modern design thinking.
            </p>

            {/* 🔥 STATS CARDS */}
            <div className="grid grid-cols-2 gap-6">

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition">
                <p className="text-2xl font-bold">8+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition">
                <p className="text-2xl font-bold">120+</p>
                <p className="text-gray-400 text-sm">Projects Done</p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition">
                <p className="text-2xl font-bold">Civil</p>
                <p className="text-gray-400 text-sm">Specialization</p>
              </div>

              <div className="p-5 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:bg-white/10 transition">
                <p className="text-2xl font-bold">Pune</p>
                <p className="text-gray-400 text-sm">Location</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}