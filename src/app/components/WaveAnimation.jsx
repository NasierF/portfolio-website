import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IconAnimation = () => {
  useEffect(() => {
    
    gsap.to(".icon", {
      rotation: 15,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut",
    });

    // Slide off animation on scroll
    gsap.to(".icon", {
      x: 500, // Slides right off the screen
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".icon", // Start animation when icon is in view
        start: "top center",
        end: "top 20%", // Animation ends here
        scrub: true, // Sync animation with scroll
      },
    });
  }, []);

  return (
    <div style={{ position: "relative", height: "10vh" }}>
      <div
        className="icon"
        style={{
          width: "10%",
          height: "10%",
          backgroundColor: "red",
          position: "relative",
          top: "10%",
          left: "10%",
        }}
      >
        👋
      </div>
    </div>
  );
};

export default IconAnimation;
