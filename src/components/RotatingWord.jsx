import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function RotatingWord({ words = [] }) {
  const [index, setIndex] = useState(0);
  const wordRef = useRef();

   // 🔥 colors array (yaha control kar sakta hai)
   const colors = [
    "#d1d5db", // Modern
    "#c084fc", // Luxury
    "#a5b4fc", // Elegant
    "#c084fc", // Premium
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % words.length;

      const tl = gsap.timeline();

      // 🔥 old word exit (smooth + depth)
      tl.to(wordRef.current, {
        rotateX: -90,
        y: -30,
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
        transformOrigin: "center bottom"
      });
      
      // 🔥 change word
      tl.add(() => setIndex(nextIndex),0.25);
      
      // 🔥 new word enter (from bottom, soft)
      tl.fromTo(
        wordRef.current,
        {
          rotateX: 90,
          y: 30,
          opacity: 0,
        },
        {
          rotateX: 0,
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power4.out",
          transformOrigin: "center top"
        },
        0.25
      );

    }, 2000);

    return () => clearInterval(interval);
  }, [index, words.length]);

  return (
    <span
      className="inline-block perspective-[800px]"
      style={{ display: "inline-block" }}
    >
      <span
        ref={wordRef}
        className="inline-block text-gray-300"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
          color: colors[index],
        }}
      >
        {words[index]}
      </span>
    </span>
  );
}