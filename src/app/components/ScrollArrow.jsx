import React from "react";
import styles from "@styles/ScrollArow.module.css"

const ScrollArrow = ({ href = "#section02" }) => {
  return (
    <a href={href} className={styles.scrollArrow}>
      scroll
      <span></span>
    </a>
  );
};

export default ScrollArrow;
