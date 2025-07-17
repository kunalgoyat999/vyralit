import { Box, Typography, useMediaQuery } from "@mui/material";
import img1 from "../assets/services/1st.png";
import img2 from "../assets/services/2nd.png";
import img3 from "../assets/services/3rd.png";
import img4 from "../assets/services/4th.png";
import img5 from "../assets/services/5th.png";
import img6 from "../assets/services/6th.png";
import { useTheme } from "@mui/material/styles";
import { keyframes } from "@emotion/react";
import StackedCardsMobile from "../components/ui/StackedCardsMobile ";

const services = [
  {
    title: "Performance Marketing -",
    subtitle: "Meta, Google, LinkedIn",
    color: "#FFE3D1",
    bigCircleColor: "#C25E37",
    smallCircleCOlor: "#F17956",
    rotateBox: "9deg",
    imagePath: img1,
    outerLeft: -4,
  },
  {
    title: "UI / UX and Graphic Design",
    subtitle: "",
    color: "#E6EDFF",
    bigCircleColor: "#3055B9",
    smallCircleCOlor: "#637DF5",
    rotateBox: "-9deg",
    imagePath: img2,
    outerLeft: -1,
  },
  {
    title: "Social Media & Community",
    subtitle: "",
    color: "#F5E7FE",
    bigCircleColor: "#594AC1",
    smallCircleCOlor: "#7B63F5",
    rotateBox: "9deg",
    imagePath: img3,
    outerLeft: -2,
  },
  {
    title: "Search Engine Optimization (SEO)",
    subtitle: "",
    color: "#D9FFD4",
    bigCircleColor: "#5C9256",
    smallCircleCOlor: "#7FCD75",
    rotateBox: "-7deg",
    imagePath: img4,
    outerLeft: -2,
  },
  {
    title: "Email & Whatsapp Marketing",
    subtitle: "",
    color: "#FEE7E7",
    bigCircleColor: "#953737",
    smallCircleCOlor: "#D86E6E",
    rotateBox: "-2deg",
    imagePath: img5,
    outerLeft: -1,
  },
  {
    title: "Content Creation",
    subtitle: "",
    color: "#DCF4FF",
    bigCircleColor: "#5F96AF",
    smallCircleCOlor: "#89CAE8",
    rotateBox: "-9deg",
    imagePath: img6,
    outerLeft: -2,
  },
];

const scrollLeft = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: {
          sm: "6rem 4rem",
          md: "4rem 8rem",
          lg: "1rem 12rem 2rem",
        },
        backgroundColor: "#F8F9FA",
      }}
    >
      <Box sx={{ padding: { xs: "3rem 2rem 2rem" } }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontSize: { xs: 40, sm: 40, md: 50 }, color: '#000' }}
        >
          <span
            style={{
              textDecorationLine: "underline",
              textDecorationColor: "black",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
            }}
          >
            WHAT
          </span>{" "}
          WE DO
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 1, fontSize: { xs: 14, sm: 16, md: 18 }, color: '#1A1A1A' }}
        >
          We bring performance, creativity, and connection under one roof.
          Here's how we <i>Vyral It</i>
        </Typography>
      </Box>

      {/* Cards Section */}
      <Box sx={{ position: "relative" }}>
        {isMobile ? (

          <StackedCardsMobile services={services} />

        ) : (
          <Box
            sx={{
              position: "relative",
              width: "100%",
              overflow: "hidden",
              py: { xs: 4, md: 8 },
              "::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundImage:
                  "repeating-linear-gradient(to bottom, transparent, transparent 34px, #EDEDED 34px, #EDEDED 35px)", // Adjust spacing as per design
                zIndex: 0,
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: { xs: 4, md: 12 },
                rowGap: { xs: 4, md: 14 },
                position: "relative",
                zIndex: 2, // Keep cards above lines
              }}
            >
              {services.map((service, index) => (
                <Box
                  key={index}
                  sx={{
                    flexBasis: {
                      xs: "100%",
                      sm: "45%",
                      md: "30%",
                      lg: "220px",
                    },
                    height: 200,
                    borderRadius: 3,
                    p: 2,
                    transform: `rotate(${service.rotateBox})`,
                    boxShadow: "1px 2px 15px rgba(0,0,0,0.2)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#fff",
                  }}
                >
                  {/* Circles */}
                  <Box sx={{ position: "relative", transform: "translateX(-50%)", mb: 1 }}>
                    <Box
                      sx={{
                        width: 36,
                        height: 33,
                        borderRadius: "50%",
                        backgroundColor: service.bigCircleColor,
                        position: "absolute",
                        top: 5,
                        left: service.outerLeft,
                        zIndex: -1,
                      }}
                    />
                    <Box
                      sx={{
                        width: 22,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: service.smallCircleCOlor,
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box
                    sx={{
                      width: "100%",
                      height: 140,
                      bgcolor: service.color,
                      borderRadius: 3,
                      textAlign: "center",
                      mt: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 1,
                    }}
                  >
                    <Typography fontWeight="bold" fontSize="17px" sx={{color: '#000'}}>
                      {service.title}
                    </Typography>
                    {service.subtitle && (
                      <Typography fontSize="15px" sx={{color: '#444444'}} mt={0.5}>
                        {service.subtitle}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

        )}
      </Box>

      {/* Footer Text Animation */}
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{
          display: "inline-block",
          animation: `${scrollLeft} 7s linear infinite`,
          mt: { md: 8 },
          mb: 2,
          color: "#FFE3ED",
          textTransform: "uppercase",
          fontSize: { xs: 32, sm: 48, md: 64, lg: 80 },
          textAlign: "center",
        }}
      >
        YOU NAME IT WE DO IT
      </Typography>
    </Box>
  );
};

export default Services;
