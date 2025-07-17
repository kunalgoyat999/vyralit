import React from "react";
import { Typography, useMediaQuery, useTheme, Box, Grid } from "@mui/material";
import Button from "../components/ui/Button";
import allBrands from "../assets/brands/allBrand.png";

// Mobile brand images
import b1 from "../assets/brands/b1.png";
import b2 from "../assets/brands/b2.png";
import b3 from "../assets/brands/b3.png";
import b4 from "../assets/brands/b4.png";
import b5 from "../assets/brands/b5.png";
type ClientsProps = {
  onContactClick: () => void;
};

const Clients: React.FC<ClientsProps> = ({ onContactClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Mobile brands data with images
  const mobileBrands = [
    { name: "firstcryMAX", image: b1 },
    { name: "LAKK", image: b2 },
    { name: "yptel", image: b3 },
    { name: "Epirone", image: b4 },
    { name: "Hospitals", image: b5 },
    // Add more if needed
  ];

  return (
    <Box
      sx={{
        padding: {
          xs: "3rem 2rem 2rem 2rem", // mobile
          sm: "6rem 4rem 6rem 4rem", // small tablet
          md: "4rem 8rem 4rem 8rem", // tablet/desktop
          lg: "4rem 15rem 2rem 15rem",
        },
        maxWidth: "1400px",
        margin: "0 auto 0 0rem",
        textAlign: "left",
        backgroundColor: "#FFFAFA",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontSize: {
            xs: "2rem",
            md: "2.5rem",
          },
          mb: 4,
          lineHeight: 1.2,
          fontWeight: 600,
          color: "#000",
        }}
      >
        <span
          style={{
            textDecorationLine: isMobile ? "none" : "underline",
            textDecorationColor: "black",
            textDecorationThickness: "1.5px",
            textUnderlineOffset: "12px",
          }}
        >
          BRANDS
        </span>{" "}
        {isMobile ? (
          <>
            WE'VE
            <br />
            <span
              style={{
                textDecorationLine: isMobile ? "underline" : "none",
                textDecorationColor: "black",
                textDecorationThickness: "1.5px",
                textUnderlineOffset: "12px",
              }}
            >
              {" "}
              WORKED
            </span>{" "}
            WITH
          </>
        ) : (
          "WE'VE WORKED WITH"
        )}
      </Typography>

      {/* Mobile View - Individual Brand Images */}
      {isMobile ? (
        <Grid
          container
          spacing={3}
          sx={{
            maxWidth: "500px",
            // margin: "0 auto",
            mb: 4,
          }}
        >
          {mobileBrands.map((brand, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  // alignItems: "left",
                  // justifyContent: "left",
                  height: "100%",
                }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  style={{
                    // height: "60px",
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                    // marginBottom: "8px"
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        /* Desktop View - Single All Brands Image */
        <Box
          sx={{
            mb: 4,
            maxWidth: "900px",
            "&:hover img": {
              transform: "scale(1.02)",
            },
          }}
        >
          <img
            src={allBrands}
            alt="All partner brands"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              margin: "0 auto",
              transition: "transform 0.3s ease",
            }}
          />
        </Box>
      )}

      {/* Button */}
      <Button
      onClick={onContactClick}
        variant="contained"
        sx={{
          fontSize: {
            xs: "0.9rem",
            md: "1rem",
          },
          padding: {
            xs: "10px 20px",
            md: "12px 28px",
          },
          borderRadius: "4px",
          fontWeight: 600,
        }}
      >
        Do you want to be the next?
      </Button>
    </Box>
  );
};

export default Clients;
