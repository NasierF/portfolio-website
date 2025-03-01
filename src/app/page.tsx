"use client";
import { useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "@fontsource/poppins/400.css"; // Regular weight
import "@fontsource/poppins/700.css"; // Bold weight
import { Box, Typography, ThemeProvider, useMediaQuery, Paper } from "@mui/material";
import NavBar from "@compnents/NavBar";
import Introduction from "@compnents/Introduction";
import theme from "@theme";
import ScrollArrow from "@compnents/ScrollArrow";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";
import Timeline from "@compnents/Timeline";
import MySkills from "@compnents/MySkills";
import TimelineMobile from "@compnents/TimelineMobile"
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



export default function Home() {
  const scrollArrow = useMemo(() => <ScrollArrow target="#section02" />, []);//pre render 
  useSmoothScroll(); //Hook for smooth scrolling
  const isMobile = useMediaQuery("(max-width:600px)");
  const smallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const mediumScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("md"));
  const XS = useMediaQuery(theme.breakpoints.down("xs")); // <600px
  const SM = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600px - 899px
  const MD = useMediaQuery(theme.breakpoints.between("md", "lg")); // 900px - 1199px
  const LG = useMediaQuery(theme.breakpoints.up("lg")); // ≥1200px

  return (
    <ThemeProvider theme={theme} >
      <NavBar />

      {/* Main Scrollable Sections */}
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
          msOverflowY: "hidden",
          scrollSnapType: isMobile ? "unset" : "y mandatory",
          scrollBehavior: "smooth",
          
        }}
      >
        {/* Section 1 -- Introduction */}
        <Box
          id="section01"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start",
            backgroundColor: theme.palette.secondary.dark,
            color: "white",
            position: "relative",
            right: isMobile ?  "2%": 0,
          }}
        >
          <Introduction />
          { (largeScreen || mediumScreen) && scrollArrow}
        </Box>

        {/* Section 2 -- Timeline */}
        <Box
          id="section02"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start",
            backgroundColor: theme.palette.secondary.dark,
          }}
        >
          {isMobile ? <TimelineMobile /> : <Timeline />}

        </Box>

        {/* Section 3 -- Skills*/}
        <Box
          id="section03"
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center", 
            scrollSnapAlign: "start",
            backgroundColor: theme.palette.secondary.dark,
            color: "white",
            position: "relative",
            right: isMobile ?  "2%": 0,
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
        >
          <MySkills/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
