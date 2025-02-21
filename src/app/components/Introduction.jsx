import { Typography, useTheme, Box } from "@mui/material"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import WaveIcon from "@compnents/WaveAnimation"
import ContactBar from "@compnents/ContactBar"
gsap.registerPlugin(ScrollTrigger);


const Introduction = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                position: "absolute",
                top: { md: "16%", xs: "8%" },
                left: "16%",
                transform: "scale(1)",
                transformOrigin: "top left",

            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 0,
                }}>
                <Typography
                    component="span"
                    color="white"
                    sx={{
                        fontFamily: '"Poppins", sans-serif',
                        fontSize: { xs: "8rem", sm: "7rem", md: "8rem" }
                    }}
                >
                    Hi!
                </Typography>
                <WaveIcon />
            </Box>

            <Typography className="font-poppins" color="white"
                sx={{
                    fontFamily: '"Poppins", sans-serif',
                    pb: "1.5%",
                    fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },

                }}>
                I am {" "}
                <span
                    style={{ color: theme.palette.primary.main }}>
                    Nasier Fowlkes
                </span>
                ,
            </Typography>
            <Typography color="white"
                sx={{
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: { xs: "2.5rem", sm: "3rem", md: "3rem" },
                    whiteSpace: "normal",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                    maxWidth: { xs: "80vw", sm: "80vw", md: "100vw" }
                }}>
                <span
                    style={{ color: theme.palette.primary.main }}>
                    Computer Science {" "}
                </span>alumn from {" "}
                <span className="font-bold"
                    style={{ color: theme.palette.primary.main }}>
                    Temple University
                </span>
                .
            </Typography>

            <ContactBar
                sx={{
                    transform: {
                        xs: "scale(0.7)",
                        sm: "scale(0.9)",
                        md: "scale(1)",
                    },
                    position: "relative",
                    transition: "transform 0.3s ease",
                    right: {
                        xs: "23%",
                        sm: "13%",
                        md: "0%"
                    }
                }}
            />
        </Box>


    );



};

export default Introduction