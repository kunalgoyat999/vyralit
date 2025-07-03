import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import brandImage from "../assets/brandLogo/VyralIt.png";
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 12,
        py: 2,
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <img
          src={brandImage}
          // style={clientsStyles.logoItem}
        />
        <Typography
          variant="caption"
          sx={{ letterSpacing: "2px", fontSize: 15 }}
        >
          <span style={{ fontSize: 22 }}>V</span>YRALIT
        </Typography>
      </Box>

      {/* Social Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          FOLLOW US
        </Typography>
        <IconButton sx={{ color: "#fff", border: "1px solid #fff" }}>
          <InstagramIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff", border: "1px solid #fff" }}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff", border: "1px solid #fff" }}>
          <YouTubeIcon />
        </IconButton>
        <IconButton sx={{ color: "#fff", border: "1px solid #fff" }}>
          <TwitterIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
