import { NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
    useTheme,
    useMediaQuery,
} from "@mui/material";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <AppBar position="static" color="primary">
            <Container>
                <Toolbar sx={ { flexDirection: isMobile ? "column" : "row" } }>
                    {/* Logo */ }
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={ { mr: isMobile ? 0 : 2,mb: isMobile ? 1 : 0 } }>
                        <img src="/logan.webp" alt="Logo" /> {/* Placeholder for your logo */ }
                    </IconButton>

                    {/* Title */ }
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                        Employee Files Query
                    </Typography>

                    {/* Navigation Links */ }
                    <Box
                        sx={ {
                            display: "flex",
                            alignItems: "center",
                            flexDirection: isMobile ? "column" : "row",
                        } }
                    >
                        <Button color="inherit" component={ NavLink } to="/" sx={ { mr: isMobile ? 0 : 2,mb: isMobile ? 1 : 0 } }>
                            Home
                        </Button>
                        <Button color="inherit" component={ NavLink } to="/edit">
                            Edit Employee
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
