import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProjectDetails() {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const navigate = useNavigate();

  const [activeImage, setActiveImage] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const projectData = {
  "Modern Villa": [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200"
    },
    {
      type: "3d",
      src: "https://panoraven.com/en/embed/6vpLaJZhX2",
      thumbnail: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1160"
    },
  ],

    // 🔥 baaki same rakha (string format bhi support karega)
    "Luxury Interior": [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200",
      "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?w=1200",
      {
        type: "3d",
        src: "https://panoraven.com/en/embed/6vpLaJZhX2" // 👈 replace if needed
      }
    ],
    "Commercial Building": [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200"
    ],
    "Minimal Bedroom": [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
    ],
    "Office Design": [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200"
    ],
    "Kitchen Interior": [
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200"
    ]
  };

  const images = projectData[decodedTitle] || [];

  useEffect(() => {
    document.body.style.background = "#000";
  }, [decodedTitle]);

  return (
    <>
      {/* 🔥 HERO */}
      <div className="bg-[#f2f2f2] text-[#0a0a0a]">

        <div className="flex flex-col md:flex-row min-h-screen">

          {/* LEFT */}
          <div className="w-full md:w-[42%] flex flex-col justify-end px-6 pt-28 pb-16 md:p-16 relative z-20">

            <h1 className="uppercase tracking-tight text-5xl sm:text-6xl md:text-8xl leading-[0.95] md:leading-[0.85]">
              {decodedTitle}
            </h1>

            <p className="mt-8 max-w-[320px] text-sm font-['Space_Grotesk'] tracking-wide">
              A curated collection of modern architectural work combining aesthetics and innovation.
            </p>

            <button
              onClick={() => {
                navigate("/projects");
                window.scrollTo(0, 0);
              }}
              className="mt-5 w-fit border-b-2 border-black hover:line-through decoration-2 pb-1"
            >
              View Collection
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-[65%] relative h-[55vh] md:h-auto z-10">

            {/* 🔥 FIRST IMAGE HANDLE (object + string) */}
            {images[0] && (
              <img
                src={typeof images[0] === "object" ? images[0].src : images[0]}
                className="w-full h-full object-cover md:absolute md:top-0 md:right-[-10%] md:w-[120%] md:object-left grayscale transition duration-700 hover:grayscale-0 hover:scale-105"
              />
            )}

            <div className="hidden md:block absolute bottom-10 left-4 -rotate-90 origin-left text-xs tracking-widest font-['Space_Grotesk']">
              COLLECTION
            </div>

          </div>
        </div>

        {/* GRAIN */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"
          }}
        />

      </div>

      {/* 🔥 GALLERY */}
      <div className="min-h-screen bg-black text-white px-6 py-20">

        <div className="columns-1 md:columns-3 gap-6 max-w-6xl mx-auto space-y-6">

          {images.length === 0 ? (
            <p className="text-center text-gray-400">No images found</p>
          ) : (
            images.map((item, i) => {

              const isObject = typeof item === "object";
              const type = isObject ? item.type : "image";
              const src = isObject ? item.src : item;

              return (
                <div
                  key={i}
                  className="break-inside-avoid cursor-pointer relative group"
                  onClick={() =>
                    type === "3d"
                      ? setActiveItem(item)
                      : setActiveImage(src)
                  }
                >

                  <img
                    src={
                      type === "image"
                        ? src
                        : item.thumbnail || src
                    }
                    className="w-full rounded-2xl mb-6 hover:scale-105 transition"
                  />

                  {type === "3d" && (
                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      360° View
                    </div>
                  )}

                </div>
              );
            })
          )}

        </div>

        {/* 🔥 IMAGE FULLSCREEN */}
        {activeImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
            onClick={() => setActiveImage(null)}
          >
            <img
              src={activeImage}
              className="max-w-[90%] max-h-[90%] rounded-xl"
            />
          </div>
        )}

        {/* 🔥 3D FULLSCREEN */}
        {activeItem && activeItem.type === "3d" && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
            onClick={() => setActiveItem(null)}
          >
            <iframe
              src={activeItem.src}
              className="w-[90%] h-[90%] rounded-xl"
              allow="autoplay; fullscreen; xr-spatial-tracking"
            />
          </div>
        )}

      </div>
    </>
  );
}