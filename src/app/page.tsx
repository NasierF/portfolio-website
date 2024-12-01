"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@fontsource/poppins/400.css"; // Regular weight
import "@fontsource/poppins/700.css"; // Bold weight
import { Box, Typography, ThemeProvider } from "@mui/material";
import NavBar from "@compnents/NavBar";
import Introduction from "@compnents/Introduction";
import theme from "@theme";
import ScrollArrow from "@compnents/ScrollArrow";
import useSmoothScroll from "@/app/hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useSmoothScroll(); // Hook for smooth scrolling

  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      {/* Main Scrollable Sections */}
      <Box
        sx={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
        }}
      >
        {/* Section 1 */}
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
          {/* ScrollArrow only on the first page */}
          <ScrollArrow href="#section02" />
        </Box>

        {/* Section 2 */}
        <Box
          id="section02"
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Typography variant="h2">About Me</Typography>
        </Box>

        {/* Section 3 */}
        <Box
          id="section03"
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start",
            backgroundColor: theme.palette.secondary.dark,
            color: "white",
          }}
        >
          <Typography variant="h2">Projects</Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
