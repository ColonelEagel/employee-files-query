import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

import Navbar from "../components/UI/Navbar";


export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />
      <Container sx={ { mt: 4 } }>
        <Outlet />
      </Container>

    </div>
  );
}
