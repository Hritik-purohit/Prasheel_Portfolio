import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

// 🔥 Row 1 data
const projectsRow1 = [
  {
    title: "Modern Villa",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    title: "Luxury Interior",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
  },
  {
    title: "Commercial Building",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"
  }
];

// 🔥 Row 2 data (different)
const projectsRow2 = [
  {
    title: "Minimal Bedroom",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"
  },
  {
    title: "Office Design",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    title: "Kitchen Interior",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80"
  }
];

// loop ke liye duplicate
const loop1 = [...projectsRow1, ...projectsRow1];
const loop2 = [...projectsRow2, ...projectsRow2];

export default function Projects() {
  const row1 = useRef();
  const row2 = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let anim1;
    let anim2;

    

    // Row 1 → left
    gsap.to(row1.current, {
      x: "-50%",
      duration: 35,
      ease: "none",
      repeat: -1
    });

    // Row 2 → right
    gsap.fromTo(row2.current,
      {x: "-50%"},
      {
      x: "0%",
      duration: 35,
      ease: "none",
      repeat: -1
      }
    );


  }, []);

  return (
    <div id="projects" className="py-24 bg-black overflow-hidden">

      <h2 className="text-5xl text-white text-center mb-14">
        Our Projects
      </h2>

      {/* 🔥 ROW 1 */}
      <div className="overflow-hidden mb-10">
        <div ref={row1} className="flex gap-8 w-max px-6 transform-gpu will-change-transform">

          {loop1.map((p, i) => (
            <div
            key={i}
            onClick={() => navigate(`/project/${p.title}`)}
            className="min-w-[300px] h-[350px] relative rounded-xl overflow-hidden group cursor-pointer"
          >

              <img
                src={p.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition">
                <h3 className="text-white text-lg">{p.title}</h3>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* 🔥 ROW 2 */}
      <div className="overflow-hidden">
        <div ref={row2} className="flex gap-8 w-max px-6 transform-gpu will-change-transform">

          {loop2.map((p, i) => (
            <div
            key={i}
            onClick={() => {navigate(`/project/${p.title}`);window.scrollTo(0, 0);}}
            className="min-w-[300px] h-[350px] relative rounded-xl overflow-hidden group cursor-pointer"
          >

              <img
                src={p.img}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="absolute bottom-5 left-5 opacity-0 group-hover:opacity-100 translate-y-5 group-hover:translate-y-0 transition">
                <h3 className="text-white text-lg">{p.title}</h3>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}