import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupSmoothScroll = () => {
  ScrollTrigger.defaults({
    markers: false,
    toggleActions: "play none none reverse"
  });
};

export default gsap;