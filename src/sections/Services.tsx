import { Box, Typography } from "@mui/material";
import img1 from "../assets/services/1st.png";
import img2 from "../assets/services/2nd.png";
import img3 from "../assets/services/3rd.png";
import img4 from "../assets/services/4th.png";
import img5 from "../assets/services/5th.png";
import img6 from "../assets/services/6th.png";

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

const Services = () => {
  return (
    <div style={{ padding: "2rem 15rem 0rem 15rem" }}>
      <Typography variant="h4" gutterBottom  sx={{fontSize: '50'}}>
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
      <Typography  sx={{fontSize:{sm:18} }}>
        We bring performance, creativity, and connection under one roof. Here's
        how we <i>Vyral It</i>
      </Typography>
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // lower than cards (cards use zIndex: 99)
            pointerEvents: "none",
          }}
        >
          {Array.from({ length: 15 }).map((_, i) => (
            <Box
              key={i}
              sx={{
                position: "absolute",
                top: `${(i + 1) * (200 / 5)}px`,
                left: 0,
                width: "100%",
                height: ".09px",
                backgroundColor: "#E7E7E7",
              }}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap", // allows boxes to wrap to next line
            justifyContent: "center",
            gap: 16,
            rowGap: 15,
            position: "relative",
            zIndex: 99,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                width: 220,
                height: 200,
                borderRadius: 3,
                p: 2,
                textAlign: "left",
                transform: `rotate(${service.rotateBox})`,
                boxShadow: "1px 2px 15px rgba(0,0,0,0.2)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 2,
                backgroundColor: "#fff",
              }}
            >
              <Box
                sx={{
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
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
                }}
              >
                <Typography fontWeight="bold" fontSize="17px">
                  {service.title}
                </Typography>
                {service.subtitle && (
                  <Typography sx={{ fontSize:"17px", color:"text.secondary", mt:0.5}}>
                    {service.subtitle}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Box>

        <Typography
          variant="h3"
          sx={{
            mt: 8,
            mb: 8,
            color: "#FFE3ED",
            textTransform: "uppercase",
            fontSize: "90px",
            fontWeight:"bold"
          }}
        >
          YOU NAME IT WE DO IT
        </Typography>
      </Box>
    </div>
  );
};

export default Services;
