import { Box,Typography } from "@mui/material";

const Footer = () => {
    const fullYear = new Date().getFullYear();
    return (
        <Box
            component="footer"
            sx={ {
                backgroundColor: "#01579b",
                color: "#fff",
                padding: "20px",
                textAlign: "center",
                marginTop: "auto",
            } }
        >
            <Typography variant="body2" >
                © { fullYear } Login. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;
