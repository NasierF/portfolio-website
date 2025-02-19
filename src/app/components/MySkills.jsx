import React from "react";
import { Typography, Paper, Box, styled, useMediaQuery } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import theme from "@theme";

const HoverBox = styled(Box)(() => ({
    position: "relative",
    display: "inline-block",
    textAlign: "center",
    "&:hover .skill-text": {
        opacity: 1,
        transform: "translateY(0)",
    },
}));

const SkillText = styled(Typography)(() => ({
    position: "absolute",
    bottom: "-1.5rem", 
    left: "50%",
    transform: "translateX(-50%) translateY(10px)", // Starts slightly hidden
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
    color: "white",
    padding: "5px 10px",
    borderRadius: "5px",
    fontSize: "0.85rem",
    opacity: 0, // Initial opacity
    transition: "opacity 0.3s ease, transform 0.3s ease", //ease for opacity and transform on skilltext hover effect
}));

const MySkills = () => {

    const XS = useMediaQuery(theme.breakpoints.down("xs")); 
    const SM = useMediaQuery(theme.breakpoints.down("sm")); 
    const MD = useMediaQuery(theme.breakpoints.down("md")); 

    
    const WIDTH = XS ? 50 : SM ? 70 : MD ? 100 : 100;
    const HEIGHT = XS ? 50 : SM ? 70 : MD ? 100 : 100;
    return (
        <>
            <Typography variant="h2" sx={{ position: "relative", top: "10rem" }}>
                My Skills
            </Typography>
            <Grid
                container
                rowSpacing={{ xs: 5, sm: 5, md: 10}}
                columnSpacing={{ xs: 10, sm: 10, md: 5}}
                columns={{ xs: 3, sm: 15, md: 15}}
                sx={{
                    width: "100%",
                    padding: "5rem",
                    paddingTop: "15rem",
                }}
            >
                {[
                    { src: "/icons/react-2.svg", alt: "React" },
                    { src: "/icons/c-1.svg", alt: "C" },
                    { src: "/icons/css-3.svg", alt: "CSS" },
                    { src: "/icons/github.svg", alt: "GitHub" },
                    { src: "/icons/html-1.svg", alt: "HTML" },
                    { src: "/icons/java-4.svg", alt: "Java" },
                    { src: "/icons/javascript-1.svg", alt: "JavaScript" },
                    { src: "/icons/python-5.svg", alt: "Python" },
                    { src: "/next.svg", alt: "Next.js" },
                    { src: "/icons/sql.svg", alt: "SQL" },
                    { src: "/icons/nosql.svg", alt: "NoSQL" },
                    { src: "/icons/firebase-svg.svg", alt: "Firebase" },
                    { src: "/icons/aws-svg.svg", alt: "AWS" },
                    { src: "/icons/linux-svg.svg", alt: "Linux" },
                    { src: "/icons/jira-svg.svg", alt: "Jira" },
                ].map((skill, index) => (
                    <Grid size={{md: 3,sm: 3, xs: 1 }} key={index}>
                        <HoverBox>
                            <Image src={skill.src} alt={skill.alt} width={WIDTH} height={HEIGHT} />
                            <SkillText className="skill-text">{skill.alt}</SkillText>
                        </HoverBox>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default MySkills;
