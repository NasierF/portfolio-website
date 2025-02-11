"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useSmoothScroll(); //Hook for smooth scrolling
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
          scrollSnapType: "y mandatory",
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
          }}
        >
          <Introduction />
          <ScrollArrow href="#section02" /> {/*debating on whether to make this pinned throughout the website or not*/}
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
           <Timeline/> {/*timeline built using gsap animations*/}
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
            scrollSnapAlign: "start",
            backgroundColor: theme.palette.secondary.dark,
            color: "white",
          }}
        >
          <MySkills/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
