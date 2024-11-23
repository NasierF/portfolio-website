"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '@fontsource/poppins/400.css'; // Regular weight
import '@fontsource/poppins/700.css'; // Bold weight
import { Box, Typography, ThemeProvider, useTheme } from "@mui/material";
import NavBar from "@compnents/NavBar";
import Introduction from "@compnents/Introduction"
import theme from "@theme";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

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
          sx={{
            height: "100vh", 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start", 
            backgroundColor: theme.palette.secondary.dark, 
            color: "white",
            position: "relative",
          }}
        >
          <Introduction/>
        </Box>

        {/* Section 2 */}
        <Box
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
