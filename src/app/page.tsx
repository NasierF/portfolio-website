"use client";
import { Box, Typography, ThemeProvider, useTheme } from "@mui/material";
import NavBar from "@compnents/NavBar";
import theme from "@theme";

export default function Home() {

  return (
    <ThemeProvider theme={theme}>
      <NavBar />

      {/* Main Scrollable Sections */}
      <Box
        sx={{
          height: "100vh", // Full viewport height
          overflowY: "scroll", // Enable scrolling
          scrollSnapType: "y mandatory", // Enable snapping
          scrollBehavior: "smooth", // Smooth scrolling
        }}
      >
        {/* Section 1 */}
        <Box
          sx={{
            height: "100vh", // Full viewport height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "start", // Snap to top
            backgroundColor: "black", // Background for variety
            color: "white",
          }}
        >
          <Typography variant="h1">Welcome to My Website!</Typography>
        </Box>

        {/* Section 2 */}
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
