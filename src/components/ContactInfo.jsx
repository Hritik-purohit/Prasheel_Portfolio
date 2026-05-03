export default function ContactInfo() {
  return (
    <div className="relative py-20 px-6 text-center border-t border-white/10 overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/hero.jpg"   // 🔥 fallback (smooth load)
        className="absolute inset-0 w-full h-full object-cover transform-gpu will-change-transform"
      >
        <source src="/videos/getintouch.mp4" type="video/mp4" />
      </video>

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10">

        <h2 className="text-3xl font-bold text-white mb-10">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transform-gpu">
            <h3 className="text-white text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-400">Pune, India</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transform-gpu">
            <h3 className="text-white text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-400">Prasheel@gmail.com</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl transform-gpu">
            <h3 className="text-white text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-400">+91 9988998899</p>
          </div>

        </div>

        <p className="text-gray-500 mt-12 text-sm">
          © 2026 GrownUp Arch. All rights reserved.
        </p>

      </div>
    </div>
  );
}