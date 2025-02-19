import React from "react";
import styles from "@styles/ScrollArow.module.css";
import gsap from "gsap";



const ScrollArrow = ({ target }) => {
  const handleScroll = (event) => {
    event.preventDefault();// preventing default element behavior 

    const section = document.querySelector(target); // selecting targeted section
    if (!section) {
      console.error(`ScrollArrow Error: Target section '${target}' not found.`);//emsure section exists
      return;//if not prevent gsap from running
    }
    if (section) {
      gsap.to(window, {
        duration: 1.5, 
        scrollTo: { y: section, autoKill: false }, 
        ease: "power2.inOut",
      });
    }
  };

  return (
    <a onClick={handleScroll} className={styles.scrollArrow} href={target}>
       scroll 
      <span></span>
    </a>
  );
};

export default ScrollArrow;
