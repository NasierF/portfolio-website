import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.target.tagName === "A" && e.target.hash) {
        e.preventDefault();
        const targetId = e.target.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleScroll);

    return () => document.removeEventListener("click", handleScroll);
  }, []);
};

export default useSmoothScroll;
