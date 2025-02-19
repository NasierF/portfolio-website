import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timelineData from "@data/timelineData";
import TimelineCard from "@compnents/TimelineCard";
import theme from "@theme";
gsap.registerPlugin(ScrollTrigger);



const Timeline = () => {
  const XS = useMediaQuery(theme.breakpoints.down("sm")); // <600px might need t change functionality for these devices
  const SM = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 899px
  const MD = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900px - 1199px
  const LG = useMediaQuery(theme.breakpoints.between("lg", "xl")); // 1200px - 1535px
  const XL = useMediaQuery(theme.breakpoints.up("xl")); // >1535px

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
    const spacing = 0.01;
    const seamlessLoop = buildSeamlessLoop(cards, spacing);

    const scrub = gsap.to(seamlessLoop, {
      totalTime: 0,
      duration: 0.5,
      ease: "power3",
      paused: true,
    });
    const scrollingFactor = XS ? 0.0015 : SM ? 0.43 : MD ? 0.20 : LG ? 0.15: XL ? 0.12 : 0.12;
    ScrollTrigger.create({
      horizontal: true,
      trigger: listRef.current, //reference to ul
      scroller: listRef.current,
      start: "left left", //starting at the left of the scroller, in this case the ul
      end: () => `+=${listRef.current.scrollWidth + (listRef.current.scrollWidth * scrollingFactor)}`, //end at scroll width of the ul + 4% of the ul for some padding
      pin: false,
      scrub: true,
      markers: false,
      onUpdate(self) {
        const progress = self.progress; //Value from 0 to 1 based on users position through the scroller
        const totalCards = cards.length;

        // Calculate which card should be highlighted based on scroll progress
        const scalingFactor = XS ? 1.3 : SM ? 1.752 : MD ? 1.7 : LG ? 1.7: XL ? 1.752 : 1.7;
        let newActiveIndex = Math.floor(progress * (totalCards * scalingFactor));

        if (newActiveIndex >= totalCards - 1) {
          newActiveIndex = totalCards - 1;
      }

        if (newActiveIndex !== activeIndex) {
          setActiveIndex(newActiveIndex);
        }


        cards.forEach((card, index) => {
          const isActive = index === newActiveIndex;
          const scale = isActive ? 1 : 0.8; // size increase for active card
          const opacity = isActive ? 1 : 0.6; // Fade out inactive cards


          gsap.to(card, {
            scale,
            opacity,
            duration: 1.5,
            ease: "power3.out",
          });

        });
      },
    });


    ScrollTrigger.refresh();

    return () => {
      if (listRef.current) {
        listRef.current.removeEventListener("scroll", handleScroll);
      }
      ScrollTrigger.getAll().forEach((t) => t.kill());
      scrub.kill();
    };
  }, [activeIndex, XS, SM, MD]);

  const buildSeamlessLoop = (items, spacing) => {
    const overlap = Math.ceil(1 / spacing);
    const startTime = items.length * spacing + 0.5;
    const rawSequence = gsap.timeline({ paused: true });
    const seamlessLoop = gsap.timeline({ paused: true, repeat: -1 });

    gsap.set(items, { xPercent: 400, opacity: 1, scale: 1 });
    console.log("Items for Animation:", items);


    items.forEach((item, i) => {
      const time = i * spacing;
      rawSequence
        .fromTo(
          item,
          { scale: 0, opacity: 0, xPercent: 400 },
          { scale: 1, opacity: 1, xPercent: -400, duration: 1, ease: "power1.inOut" },
          time
        );
    });

    console.log("Raw Sequence Duration (After Build):", rawSequence.duration());

    rawSequence.time(startTime);
    seamlessLoop.to(rawSequence, {
      time: rawSequence.duration(),
      duration: rawSequence.duration(),
      ease: "none",
    }).fromTo(rawSequence, { time: overlap * spacing + 1 }, {
      time: startTime,
      duration: startTime - (overlap * spacing + 1),
      immediateRender: false,
      ease: "none"
    });

    return seamlessLoop;
  };

  return (
    <>
      <ul
        ref={listRef}
        className="cards"
        style={{
          top: cardsTopPosition,
          position: "relative",
          display: "flex",
          padding: XS ? "0 0 0 60rem" : "0 0 0 40rem",
          paddingRight: XS ? "34rem" : "5rem",
          Margin: 0,
          gap: "2rem",
          width: XL ? "60%" : LG ? "50%" : MD ? "40%" : SM ? "20%" : XS ? "1%" :"60%", 
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
      {showHint && (
      <div
        style={{
          position: "relative",
          bottom: "20%",
          right: "28%",
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
