import { NavLink } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
    IconButton,
} from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Container>
                <Toolbar>
                    {/* Logo */ }
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={ { mr: 2 } }>
                        <img src="/logan.webp" alt="Logo" /> {/* Placeholder for your logo */ }
                    </IconButton>

                    {/* Title */ }
                    <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
                        Employee Files Query
                    </Typography>

                    {/* Navigation Links */ }
                    <Box sx={ { display: "flex",alignItems: "center" } }>
                        <Button color="inherit" component={ NavLink } to="/" sx={ { marginRight: 2 } }>
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
