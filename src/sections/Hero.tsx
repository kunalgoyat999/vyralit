import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { Box, Typography, keyframes, useMediaQuery } from "@mui/material";
import brandImage from "../assets/brandLogo/VyralIt.png";
import { useTheme } from "@mui/material/styles";

// Smooth scroll utility
const scrollTo = (id: any) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 120;
    const y = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

// ---------- Header Component ----------
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navItems = isMobile
    ? [
        { label: "SERVICES", target: "services" },
        { label: "CONTACT US", target: "contact" },
      ]
    : [
        { label: "HOME", target: "home" },
        { label: "SERVICES", target: "services" },
        { label: "CONTACT US", target: "contact" },
      ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      sx={{
        position: isSticky ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        backgroundColor: "#000",
        color: "#fff",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: { xs: "1rem 1.5rem", md: "1rem 8rem 0.5rem 8rem" },
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img
          src={brandImage}
          alt="Vyralit"
          style={{ height: isMobile ? 28 : isSticky ? 35 : 42, transition: "height .2s" }}
        />
        <Typography variant="caption" sx={{ letterSpacing: "2px", fontSize: isMobile ? 10 : 12 }}>
          <span style={{ fontSize: isMobile ? 14 : isSticky ? 16 : 22 }}>V</span>YRALIT
        </Typography>
      </Box>
      <Box display="flex" gap={3}>
        {navItems.map(({ label, target }) => (
          <Typography
            key={label}
            variant="body2"
            onClick={() => scrollTo(target)}
            sx={{ cursor: "pointer", fontSize: { xs: "0.8rem", md: "1rem" } }}
          >
            {label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

// ---------- Slanted Banner ----------
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
  const scroll = keyframes` 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); }`;
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <Box
      sx={{
        position: "absolute",
        top: light ? { xs: "30%", md: "-10%" } : { xs: "80%", md: "60%" },
        left: light ? { xs: "-32%", md: "-20%" } : { xs: "-110%", md: "-10%" },
        width: light ? { xs: "400%", md: "140%" } : { xs: "300%", md: "120%" },
        transform: {
          xs: light ? `rotate(-30deg)` : `rotate(30deg)`,
          md: `rotate(${angle}deg)`,
        },
        backgroundColor: light ? "#fff" : "#222",
        color: light ? "#000" : "#fff",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "left",
        py: { xs: 2, md: 3 },
        zIndex: light ? 1 : 2,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          animation: `${scroll} 10s linear infinite`,
          gap: 4,
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
            <Typography variant="caption" sx={{ fontSize: "1rem" }}>
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

// ---------- Hero Section ----------
const Hero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const boldTextArr = ["Vyral", "Strong", "Big", "Everywhere", "Unstoppable", "Forward"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % boldTextArr.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ margin: 0, overflow: "hidden" }}>
      <Header />

      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          position: "relative",
          height: "70vh",
          width: "100vw",
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        {/* Diagonal Banners */}
        <SlantedBanner light={true} angle={35} />
        <SlantedBanner light={false} angle={-18} />

        {/* Hero Text */}
        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            paddingLeft: { xs: "3rem", md: "10rem" },
            textAlign: { xs: "left", md: "left" },
            mt: { xs: 3, md: 0 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 400,
              color: "#888",
              fontSize: { xs: "3rem", md: "5rem" },
            }}
          >
            Let Your Brand
          </Typography>
          <Typography
            variant="h2"
            fontWeight={550}
            fontSize={{ xs: "2.5rem", md: "5rem" }}
            sx={{ mb: { xs: 4 } }}
          >
            Go <span style={{ color: "#ff4081" }}>{boldTextArr[currentWordIndex]}</span>
          </Typography>
          <Typography
            variant="h6"
            mt={2}
            fontSize={{ xs: "1.2rem", md: "2rem" }}
            width={{ xs: "80%", md: "30%" }}
            mb={{ xs: 4, md: 4 }}
          >
            We Help You Grow Where It Matters Most.
          </Typography>

          <Box display="flex" justifyContent={{ xs: "flex-start", md: "flex-start" }}>
            <Button onClick={() => scrollTo("contact")}>Work With Us</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
