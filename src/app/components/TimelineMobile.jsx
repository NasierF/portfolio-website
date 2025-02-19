import React, { useEffect, useRef, useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timelineData from "@data/timelineData";
import TimelineCard from "@compnents/TimelineCard";
import theme from "@theme";



const Timeline = () => {
  const XS = useMediaQuery(theme.breakpoints.down("sm")); // <600px might need t change functionality for these devices
  const SM = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 899px
  const MD = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900px - 1199px

  const cardsTopPosition = XS ? "20%" : SM ? "30%" : MD ? "30%" : "30%";
  const buttonsBottomPosition = XS ? "10%" : SM ? "20%" : MD ? "10%" : "10%";

  //const scrollAmount = 1000; // Pixels per interval
  //const scrollInterval = 5; // Milliseconds between each step

  const cardsRef = useRef([]);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);
  


  useEffect(() => {
    const handleScroll = () => setShowHint(false);
    listRef.current.addEventListener("scroll", handleScroll);
    const cards = cardsRef.current;
    console.log("Cards Ref:", cards);
    
    return () => {
        if (listRef.current) {
            listRef.current.removeEventListener("scroll", handleScroll);
          }
    };
  }, [ XS, SM, MD]);

  return (
    <>
      <ul
        ref={listRef}
        className="cards"
        style={{
          top: cardsTopPosition,
          position: "relative",
          display: "flex",
          padding: XS ? "0 0 0 0rem" : "0 0 0 40rem",
          paddingRight: XS ? "5rem" : "5rem",
          Margin: 0,
          gap: "2rem",
          width:  MD ? "40%" : SM ? "20%" : XS ? "75%" :"75%", 
          height: "100%",
          listStyle: "none",
          overflowX: "scroll",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",

        }}
      >
        {/*populate list with timeline data entries passed into timeline card component*/}
        {timelineData.map((entry, index) => (
          <li
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            style={{
              position: "relative",
              width: "14rem",
              height: "18rem",
              flexShrink: 0,
              scrollSnapAlign: "start",
            }}
          >
            <TimelineCard
              title={entry.title}
              date={entry.date}
              type={entry.type}
              linkTitle={entry.linkTitle}
              linkUrl={entry.linkUrl}
              isHighlighted={index === activeIndex}
            />
          </li>
        ))}
      </ul>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0rem",
          gap: "2rem",
          position: "relative",
          bottom: buttonsBottomPosition,
        }}
      >
      </div>
      {showHint && (
      <div
        style={{
          position: "relative",
          bottom: "20%",
          right: "10%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "1rem",
          display: "flex",
          alignItems: "center",
          gap: ".3rem",
          animation: "fadeInOut 2s infinite",
        }}
      >
        <span>Swipe / Scroll </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 15"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 11 L21 7 L17 3" />
          <path d="M3 7 H21" />
        </svg>
      </div>
    )}

    </>
  );
};

export default Timeline;
