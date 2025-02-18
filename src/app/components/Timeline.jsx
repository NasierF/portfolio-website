import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timelineData from "@data/timelineData";
import TimelineCard from "@compnents/TimelineCard";
import theme from "@theme";



const Timeline = () => {
  const XS = useMediaQuery(theme.breakpoints.down("xs"));
  const SM = useMediaQuery(theme.breakpoints.up("sm"));
  const MD = useMediaQuery(theme.breakpoints.up("md"));
  const cardsTopPosition = XS ? "10%" : SM ? "20%" : MD ? "50%" : "30%";
  const buttonsBottomPosition = XS ? "10%" : SM ? "20%" : MD ? "10%" : "10%";

  //const scrollAmount = 1000; // Pixels per interval
  const scrollInterval = 5; // Milliseconds between each step

  const cardsRef = useRef([]);
  const listRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollAmount, setScrollAmount] = useState(0);
  const [scrolling, setScrolling] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);


  
  const handleNext = () => {
    if (!listRef.current) return;
    
    gsap.to(listRef.current, {
      scrollLeft: listRef.current.scrollLeft + scrollAmount,
      duration: 0.5,
      ease: "power3.out",
      onComplete: () => ScrollTrigger.refresh(),
    });
  };
  
  const handlePrev = () => {
    if (!listRef.current) return;
  
    gsap.to(listRef.current, {
      scrollLeft: listRef.current.scrollLeft - scrollAmount,
      duration: 0.6,
      ease: "power3.out",
      onComplete: () => ScrollTrigger.refresh(),
    });
  };
  
  

      // const startScroll = (direction) => {
      //   if (!listRef.current) return;

      //   setScrolling(
      //     setInterval(() => {
      //       listRef.current.scrollLeft += direction * scrollAmount;
      //     }, scrollInterval)
      //   );
      // };

      // const stopScroll = () => {
      //   clearInterval(scrolling);
      //   setScrolling(null);
      // };

  useEffect(() => {
    const updateDimensions = () => {
      setContainerWidth(listRef.current.clientWidth);
      setScrollAmount(listRef.current.clientWidth * 0.10); // Scroll ~30% of viewport
    };

    updateDimensions(); // Initial measurement
    window.addEventListener("resize", updateDimensions); // Update on resize

    

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

    ScrollTrigger.create({
      horizontal: true,
      trigger: listRef.current, //reference to ul
      scroller: listRef.current,
      start: "left left", //starting at the left of the scroller, in this case the ul
      end: () => `+=${listRef.current.scrollWidth + (listRef.current.scrollWidth * 0.12)}`, //end at scroll width of the ul + 4% of the ul for some padding
      pin: false,
      scrub: true,
      markers: false,
      onUpdate(self) {
        const progress = self.progress; //Value from 0 to 1 based on users position through the scroller
        const totalCards = cards.length;

        // Calculate which card should be highlighted based on scroll progress
        const newActiveIndex = Math.floor(progress * (totalCards * 1.7));
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
      window.removeEventListener("resize", updateDimensions);
      ScrollTrigger.getAll().forEach((t) => t.kill());
      scrub.kill();
    };
  }, [activeIndex]);

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
          padding: "0 0 0 60rem",
          Margin: 0,
          gap: "2rem",
          width: `${timelineData.length * 3}rem`, //kept running into issues, calculating width dynamically
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
        {/*left scroll*/}
        {/* <button
          onClick={handlePrev}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: theme.palette.primary.main,
            color: "white",
          }}
        >
          ◀
        </button> */}

        {/*Right Scroll*/}
        {/* <button
          onClick={handleNext}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "1.5rem",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: theme.palette.primary.main,
            color: "white",
          }}
        >
          ▶
        </button> */}
      </div>

    </>
  );
};

export default Timeline;
