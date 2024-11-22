import { Toolbar, AppBar, Typography, useTheme, Box} from "@mui/material";


const Introduction = () => {
    const theme = useTheme();

    return(
        <Box>
            <Typography className="font-poppins" color="white" variant="h1">
                Hi!
            </Typography>
            <Typography className="font-poppins" color="white" variant="h1">
                I am {" "}
                <span className="font-bold"
                style={{color: theme.palette.primary.main}}>
                 Nasier Fowlkes
                </span>
                ,
            </Typography>
            <Typography color="white" variant="h2">
            <span className="font-poppins font-bold"
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