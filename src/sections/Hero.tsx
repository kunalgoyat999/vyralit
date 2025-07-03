import React, { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { Box, Typography, keyframes } from "@mui/material";
import brandImage from "../assets/brandLogo/VyralIt.png";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 120; // adjust to your header height
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navItems = [
    { label: "HOME", target: "home" },
    { label: "SERVICES", target: "services" },
    { label: "CONTACT US", target: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        position: isSticky ? "fixed" : "none",
        top: isSticky ? 0 : "auto",
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "1rem 8rem 0.5rem 8rem",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src={brandImage}
          style={{ height: isSticky ? 35 : 42 }}
          // style={clientsStyles.logoItem}
        />
        <Typography
          variant="caption"
          sx={{ letterSpacing: "2px", fontSize: 12 }}
        >
          <span style={{ fontSize: isSticky ? 16 : 22 }}>V</span>YRALIT
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 3 }}>
        {navItems.map(({ label, target }) => (
          <Typography
            key={label}
            variant="body2"
            onClick={() => scrollTo(target)}
            sx={{ cursor: "pointer" }}
          >
            {label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

const SlantedBanner = ({ angle = -15, light = false }) => {
  const items = [
    "PERFORMANCE",
    "GROWTH",
    "SEO",
    "DESIGN",
    "SOCIAL",
    "BRNDING",
    "PERFORMANCE",
    "GROWTH",
    "SEO",
    "DESIGN",
    "SOCIAL",
    "BRNDING",
  ];
  const scroll = keyframes` 0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }`;
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <Box
      sx={{
        position: "absolute",
        top: light ? "-8%" : "60%",
        right: light ? "-20%" : "-10%",
        width: light ? "110%" : "120%",
        transform: `rotate(${angle}deg)`,
        backgroundColor: light ? "#fff" : "#222",
        color: light ? "#000" : "#fff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        py: 3,
        zIndex: light ? 1 : 2,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          animation: `${scroll} 10s linear infinite`,
          gap: 4, // spacing between items
          minWidth: "100%",
        }}
      >
        {repeatedItems.map((text, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: "row",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Typography variant="caption" sx={{fontSize:"1rem"}} >
              {text}
            </Typography>
            <Box
              sx={{
                width: 8,
                height: 8,
                bgcolor: "#ff4081",
                borderRadius: "50%",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % boldTextArr.length);
    }, 3000); // every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  const boldTextArr = [
    "Vyral",
    "Strong",
    "Big",
    "Everywhere",
    "Unstoppable",
    "Forward",
  ];

  return (
    <Box
      sx={{
        margin: 0,
        overflow: "hidden",
        width: "100%",
      }}
    >
      <Header />

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          position: "relative",
          height: "70vh",
          
          px: 8,
          py: 5,
        }}
      >
        {/* Diagonal Bars */}
        <SlantedBanner light={true} angle={35} />
        <SlantedBanner light={false} angle={-18} />

        {/* Text Content */}
        <Box sx={{ position: "relative", zIndex: 3, paddingLeft: "4rem" }}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 400, color: "#888", fontSize: "6rem" }}
          >
            Let Your Brand
          </Typography>
          <Typography variant="h2" sx={{ fontSize: "5rem", fontWeight: 550 }}>
            Go{" "}
            <span style={{ color: "#ff4081" }}>
              {boldTextArr[currentWordIndex]}
            </span>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontSize: "2rem",
              width: "30%",
              mb: 4,
            }}
          >
            We Help You Grow Where It Matters Most.
          </Typography>

          <Button onClick={() => scrollTo("contact")}>Work With Us</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
