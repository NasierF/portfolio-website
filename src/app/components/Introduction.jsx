import { Toolbar, AppBar, Typography, useTheme, Box} from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WaveIcon from "@compnents/WaveAnimation"
gsap.registerPlugin(ScrollTrigger);




const Introduction = () => {
    const theme = useTheme();

    return(
        <Box
        sx={{
            position: "absolute", 
            top: "20%", 
            left: "4%", 
            transform: "scale(.85)", 
            transformOrigin: "top left", 
        }}
        >
            <Typography color="white" variant="h1"
            sx={{fontFamily: '"Poppins", sans-serif',
                pb: "0",
            }}>
                 <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 0,
                }}> 
                    Hi! <WaveIcon/>
                 </Box> 
            </Typography>
            <Typography className="font-poppins" color="white" variant="h1"
            sx={{fontFamily: '"Poppins", sans-serif',
                pb: "1.5%",
            }}>
                I am {" "}
                <span
                style={{color: theme.palette.primary.main}}>
                 Nasier Fowlkes
                </span>
                ,
            </Typography>
            <Typography color="white" variant="h3"
            sx={{fontFamily: '"Poppins", sans-serif',
            }}>
            <span
                style={{color: theme.palette.primary.main}}>
                Computer Science {" "} 
                </span>senior at {" "}
                <span className="font-bold"
                style={{color: theme.palette.primary.main}}>
                Temple University
            </span>
                .
            </Typography>
        </Box>
        
);



};

export default Introduction