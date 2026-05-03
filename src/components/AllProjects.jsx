import { useNavigate } from "react-router-dom";

const allProjects = [
  {
    title: "Modern Villa",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
  },
  {
    title: "Luxury Interior",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
  },
  {
    title: "Commercial Building",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800"
  },
  {
    title: "Kitchen Interior",
    img: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800"
  },
  {
    title: "Office Design",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
  },
  {
    title: "Minimal Bedroom",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
  }
];

export default function AllProjects() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">

      <h1 className="text-5xl font-bold text-center mb-16">
        All Projects
      </h1>

      {/* 🔥 GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {allProjects.map((p, i) => (
          <div
            key={i}
            onClick={() => {navigate(`/project/${p.title}`);window.scrollTo(0, 0);}}
            className="cursor-pointer group overflow-hidden rounded-xl"
          >
            <img
              src={p.img}
              className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
            />

            <h3 className="mt-4 text-lg">{p.title}</h3>
          </div>
        ))}

      </div>

    </div>
  );
}