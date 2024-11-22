import { Toolbar, AppBar, Typography, useTheme} from "@mui/material";


const NavBar = () => {
    const theme = useTheme();

    return(
        <AppBar position="sticky" 
            sx={{marginBottom: 5,
             borderBottom: `1px solid #888888`,
             position: 'fixed',
             top: 0,
             zIndex: 10,
            }}>
            <Toolbar sx={{background:  theme.palette.secondary.dark}}>
                <Typography color="white">
                    Nasier Fowlkes
                </Typography>
            </Toolbar>
        </AppBar>
);



};

export default NavBar