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
import { useRef, useState } from "react";

function App() {
    const [canScroll, setCanScroll] = useState(true);

   const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
   <div
  style={{
    scrollBehavior: "smooth",
    overflowY: canScroll ? "auto" : "hidden",
    height: "100vh",
  }}
>
    <div className="bg-black text-white">
      <Box sx={{ overflowX: 'hidden' }}>
     <Box id="home">
        <Hero />
      </Box>
      <Box id="services">
        <Services setCanScroll={setCanScroll}/>
      </Box> 
      <ProcessSteps />
      <Clients onContactClick={scrollToContact} />
       <Testimonials />
      <Box id="contact">
        <Contact ref={contactRef}  />
      </Box>
      <Footer />
      </Box>
    </div>
    </div>
  );
}

export default App;
