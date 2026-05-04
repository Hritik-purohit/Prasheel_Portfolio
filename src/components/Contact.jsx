import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LightRays from "./LightRays";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const formEl = ref.current.querySelector(".contact-box");

      // 🔥 initial hidden
      gsap.set(formEl, { y: 80, opacity: 0 });

      // 🔥 animation
      const formAnim = gsap.to(formEl, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        paused: true
      });

      // 🔥 scroll control
      ScrollTrigger.create({
        trigger: formEl,
        start: "top 100%",
        end: "bottom 20%",

        onEnter: () => formAnim.play(),
        onLeave: () => formAnim.reverse(),

        onEnterBack: () => formAnim.play(),
        onLeaveBack: () => formAnim.reverse()
      });

    }, ref);

    return () => ctx.revert();
  }, []);

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const text = `Hello Prasheel,%0AMy Name is: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    setShowPopup(true);

    window.open(`https://wa.me/919988998899?text=${text}`, "_blank");

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);

    e.target.reset();
  };

  return (
    <div
      ref={ref}
      id="contact"
      className="relative py-32 bg-black overflow-hidden flex items-center justify-center"
    >

      {/* 🔥 LIGHT RAYS BACKGROUND (MAIN FIX) */}
      <LightRays 
      raysOrigin="top-center"
      raysColor="ffffff"
      raysSpeed={1}
      lightSpread={1.3}
      rayLength={2}
      followMouse={true}
      mouseInfluence={0.25}
      noiseAmount={0.03}
      distortion={0.08}
      className="z-[1] opacity-40"
      />

      {/* 🔥 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-[2]"></div>

      {/* 🔥 FORM */}
      <div className="contact-box relative z-10 w-full max-w-xl p-10 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transform-gpu">

        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Contact Us
        </h2>

        <form onSubmit={sendWhatsApp} className="space-y-6">

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-4 bg-white text-black rounded-full hover:scale-105 transition"
          >
            Send Message
          </button>

          {/* 🔥 SUCCESS POPUP */}
          {showPopup && (
            <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg z-[999999]">
              Message Sent 🚀
            </div>
          )}

        </form>
      </div>
    </div>
  );
}