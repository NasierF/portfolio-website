import { useEffect } from "react";
import { gsap } from "gsap";


const WaveAnimation = ({}) => {
  useEffect(() => {
    const animation = gsap.to(".icon", {
      rotation: 15,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    }, );

    // Cleanup to prevent multiple instances
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="icon" style={{ fontSize: "6.5rem", textAlign: "center", }}>
      👋
    </div>
  );
};

export default WaveAnimation;
