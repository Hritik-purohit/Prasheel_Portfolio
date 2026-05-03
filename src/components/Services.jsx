import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



export default function Services() {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    const ctx = gsap.context(() => {
  
      // 🔥 cards reveal animation
      gsap.from(".service-card", {
        y: 100,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%"
        }
      });
  
      // 🔥 slight floating effect (premium feel)
      // gsap.to(".service-card", {
      //   y: -20,
      //   repeat: -1,
      //   yoyo: true,
      //   duration: 3,
      //   ease: "sine.inOut",
      //   stagger: 0.3
      // });
  
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
    return (
      <section ref={sectionRef} id="services" className="py-32 bg-black text-center">
  
        <h2 className="text-6xl font-bold text-white mb-20">
          Services
        </h2>
  
        <div className="flex justify-center gap-10 flex-wrap">
        
          <img src="/cards/Civil.png" className="service-card w-[220px] rotate-[-6deg] hover:scale-110 transition" />
  
          <img src="/cards/Architechture.png" className="service-card w-[220px] rotate-[6deg] hover:scale-110 transition" />
  
          <img src="/cards/Interior.png" className="service-card w-[260px] scale-110 hover:scale-125 transition" />
  
          <img src="/cards/Project.png" className="service-card w-[220px] rotate-[-6deg] hover:scale-110 transition" />
  
          <img src="/cards/Site.png" className="service-card w-[220px] rotate-[6deg] hover:scale-110 transition" />
  
        </div>
  
      </section>
    );
  }