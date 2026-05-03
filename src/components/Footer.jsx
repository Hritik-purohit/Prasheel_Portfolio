export default function Footer() {
    return (
      <footer className="relative py-20 px-6 bg-black overflow-hidden">
  
        {/* 🔥 GREY GLOW */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gray-400/20 blur-[200px] rounded-full"></div>
  
        {/* 🔥 ANIMATED BORDER WRAPPER */}
        <div className="relative z-10 max-w-6xl mx-auto p-[1px] rounded-2xl bg-gradient-to-r from-gray-400/20 via-white/20 to-gray-400/20relative z-10 max-w-6xl mx-auto p-[1px] rounded-2xl 
bg-[linear-gradient(120deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05),rgba(255,255,255,0.2))] 
bg-[length:200%_200%] animate-border">
  
          {/* 🔥 GLASS CARD */}
          <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-10">
  
            <div className="grid md:grid-cols-4 gap-10 text-left">
  
              {/* LOGO */}
              <div>
                <h2 className="text-white text-2xl font-bold mb-4">
                  GrownUP <span className="logo-font italic">Arch</span>
                </h2>
  
                {/* 🔥 SOCIAL ICONS */}
                <div className="flex gap-4 mt-4">
  
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition duration-300 cursor-pointer">
                    in
                  </div>
  
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition duration-300 cursor-pointer">
                    f
                  </div>
  
                  <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition duration-300 cursor-pointer">
                    x
                  </div>
  
                </div>
              </div>
  
  
              {/* NAV */}
              <div>
                <h3 className="text-white font-semibold mb-4">Navigation</h3>
                <ul className="space-y-2 text-gray-400">
                  <li className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer">Home</li>
                  <li className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer">Services</li>
                  <li className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer">Projects</li>
                  <li className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer">Contact</li>
                </ul>
              </div>
  
              {/* CONTACT */}
              <div>
                <h3 className="text-white font-semibold mb-4">Contact</h3>
                <p className="text-gray-400">Pune, India</p>
                <p className="text-gray-400 mt-2">test@gmail.com</p>
                <p className="text-gray-400 mt-2">+91 9988998899</p>
              </div>
  
            </div>
  
            {/* 🔥 BOTTOM */}
            <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
  
              <p>© 2026 GlownUP Arch. All rights reserved.</p>
  
              <p className="mt-3 md:mt-0">
                Crafted with Love
              </p>
  
            </div>
  
          </div>
  
        </div>
  
      </footer>
    );
  }