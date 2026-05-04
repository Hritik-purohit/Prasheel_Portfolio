import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Architecture Design",
    desc: "Modern and aesthetic structures crafted with precision.",
    img: "https://images.unsplash.com/photo-1483366774565-c783b9f70e2c?w=800"
  },
  {
    title: "Interior Design",
    desc: "Luxury interiors with functional and elegant layouts.",
    img: "https://images.unsplash.com/photo-1664711942326-2c3351e215e6?w=800"
  },
  {
    title: "Construction",
    desc: "High-quality construction with durability and strength.",
    img: "https://images.unsplash.com/photo-1581094017399-34c4fb48c65b?w=800"
  },
  {
    title: "Planning",
    desc: "Strategic planning with efficient space utilization.",
    img: "https://images.unsplash.com/photo-1774600166588-1db444bda799?w=800"
  }
];

export default function Services() {
  const sectionRef = useRef();

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-card");

      // 🔥 DESKTOP (same as before)
      if (!isMobile) {
        gsap.set(cards, {
          y: 100,
          opacity: 0,
          scale: 0.9
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });

        cards.forEach((card, i) => {
          tl.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6
          }, i * 0.1);
        });

        return;
      }

      // 🔥 MOBILE (NEW EFFECT)
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: card,
              start: "top 70%",
              end: "top 30%",
              toggleActions: "play reverse play reverse"
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="bg-black text-white">

      {/* 🔥 SCROLL AREA */}
      <div ref={sectionRef} className="relative md:h-[220vh] h-auto">

        {/* 🔥 STICKY CONTENT */}
        <div className="md:sticky md:top-0 md:h-screen flex items-center justify-center py-20 md:py-0">

          <div className="max-w-6xl w-full px-6">

            <h2 className="text-5xl font-bold mb-16 text-center">
              Our Services
            </h2>

            <div className="relative md:grid md:grid-cols-2 gap-6 md:gap-10 md:h-auto">

              {services.map((s, i) => (
                <div
                  key={i}
                  className="service-card rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl group mb-16 md:mb-0"
                >

                  {/* IMAGE */}
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={s.img}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-gray-400">
                      <span className="text-voilet-400 font-semibold">
                        {s.desc.split(" ")[0]}
                      </span>{" "}
                      {s.desc.split(" ").slice(1).join(" ")}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}