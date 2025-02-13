import React from "react";
import { Box, Stack, IconButton, Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import DownloadIcon from "@mui/icons-material/Download";

const ContactBar = ({sx}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2, 
        mt: 4,
        ...sx,   

      }}
    >
      <Stack
        direction="row"
        spacing={2} 
        alignItems="center"
      >
        {/*GitHub*/}
        <IconButton
          component="a"
          href="https://github.com/NasierF" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", 
            fontSize: "1.5rem",
            width: "5rem",    
            height: "5rem",
            transition: "opacity 0.3s ease",
            "&:hover": {
            opacity: 0.6, 
            },
            }}
        >
          <GitHubIcon sx={{ fontSize: "4rem" }}/>
        </IconButton>

        {/*LinkedIn*/}
        <IconButton
          component="a"
          href="https://linkedin.com/in/nasierfowlkes" 
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "primary.main", 
            fontSize: "1.5rem",
            transition: "opacity 0.3s ease",
            "&:hover": {
            opacity: 0.6, 
            },
         }}
        >
          <LinkedInIcon sx={{ fontSize: "4.5rem" }}/>
        </IconButton>

        {/*Email*/}
        <IconButton
          component="a"
          href="mailto:your-email@nasier.fowlkes@temple.edu" 
          sx={{ 
            color: "primary.main", 
            fontSize: "1.5rem",
            transition: "opacity 0.3s ease",
            "&:hover": {
            opacity: 0.6, 
            },
         }}
        >
          <EmailIcon sx={{ fontSize: "4rem" }}/>
        </IconButton>

        {/* Phone*/}
        <IconButton
          component="a"
          href="tel:+16106627443" 
          sx={{ 
            color: "primary.main", 
            fontSize: "1.5rem",
            transition: "opacity 0.3s ease",
            "&:hover": {
            opacity: 0.6, 
            },
         }}
        >
          <PhoneIcon sx={{ fontSize: "4rem" }}/>
        </IconButton>
      </Stack>

      {/* Resume*/}
      <Button
        variant="contained"
        color="primary"
        startIcon={<DownloadIcon />}
        href="/Nasier_Fowlkes_Resume.pdf" 
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textTransform: "none", 
          fontWeight: "bold",
          fontSize: "1rem"
        }}
      >
        Download Resume
      </Button>
    </Box>
  );
};

export default ContactBar;
