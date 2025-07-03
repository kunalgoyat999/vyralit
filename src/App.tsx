// src/App.tsx
// import React from "react";
import "./App.css";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import ProcessSteps from "./sections/ProcessSteps";
import Clients from "./sections/Clients";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { Box } from "@mui/material";

function App() {
  return (
    <div className="bg-black text-white">
      <Box id="home">
        <Hero />
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <ProcessSteps />
      <Clients />
      <Testimonials />
      <Box id="contact">
        <Contact />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
