// src/App.tsx
// import React from "react";
import "./App.css";
import Hero from "./sections/Hero";

import { Box } from "@mui/material";
import Services from "./sections/Services";

function App() {
  return (
    <div className="bg-black text-white">
      <Box id="home">
        <Hero />
      </Box>
      <Box id="services">
        {/* <Services /> */}
       </Box>
      {/* <ProcessSteps /> */}
      {/* <Clients /> */}
      {/* <Testimonials /> */}
      {/* <Box id="contact">
        <Contact />
      </Box> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
