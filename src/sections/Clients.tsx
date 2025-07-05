import React from "react";
import brands from "../assets/brands/allBrand.png";
import { Typography, useMediaQuery, useTheme, Box } from "@mui/material";
import Button from "../components/ui/Button";

const Clients: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getPadding = () => {
    if (isMobile) return "2rem 1rem";
    if (isTablet) return "4rem 4rem";
    return "5rem 15rem 0rem 15rem";
  };

  return (
    <Box component="section" sx={{ padding: getPadding(), textAlign: "center" }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
          mb: "3rem",
        }}
      >
        <span
          style={{
            textDecorationLine: "underline",
            textDecorationColor: "black",
            textDecorationThickness: "2px",
            textUnderlineOffset: "10px",
          }}
        >
          BRANDS
        </span>{" "}
        WE'VE WORKED WITH{" "}
      </Typography>

      <Box
        sx={{
          display: "grid",
          gap: "32px",
          gridTemplateColumns: {
            xs: "repeat(auto-fit, minmax(100px, 1fr))",
            sm: "repeat(auto-fit, minmax(120px, 1fr))",
          },
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Box
          component="img"
          src={brands}
          sx={{
            width: "100%",
            maxWidth: "100%",
            opacity: 0.8,
            transition: "all 0.3s ease",
            "&:hover": {
              opacity: 1,
            },
          }}
          alt="Brands"
        />
      </Box>

      <Box sx={{ mt: "3rem", mb: "3rem" }}>
        <Button>Do you want to be the next?</Button>
      </Box>
    </Box>
  );
};

export default Clients;

