// import { Box, Typography, useMediaQuery } from "@mui/material";
// import img1 from "../assets/services/1st.png";
// import img2 from "../assets/services/2nd.png";
// import img3 from "../assets/services/3rd.png";
// import img4 from "../assets/services/4th.png";
// import img5 from "../assets/services/5th.png";
// import img6 from "../assets/services/6th.png";
// import { useTheme } from "@mui/material/styles";
// import { keyframes } from "@emotion/react";
// import StackedCardsMobile from "../components/ui/StackedCardsMobile ";

// export const services = [
//   {
//     title: "Performance Marketing -",
//     subtitle: "Meta, Google, LinkedIn",
//     color: "#FFE3D1",
//     bigCircleColor: "#C25E37",
//     smallCircleCOlor: "#F17956",
//     rotateBox: "9deg",
//     imagePath: img1,
//     outerLeft: -4,
//   },
//   {
//     title: "UI / UX and Graphic Design",
//     subtitle: "",
//     color: "#E6EDFF",
//     bigCircleColor: "#3055B9",
//     smallCircleCOlor: "#637DF5",
//     rotateBox: "-9deg",
//     imagePath: img2,
//     outerLeft: -1,
//   },
//   {
//     title: "Social Media & Community",
//     subtitle: "",
//     color: "#F5E7FE",
//     bigCircleColor: "#594AC1",
//     smallCircleCOlor: "#7B63F5",
//     rotateBox: "9deg",
//     imagePath: img3,
//     outerLeft: -2,
//   },
//   {
//     title: "Search Engine Optimization (SEO)",
//     subtitle: "",
//     color: "#D9FFD4",
//     bigCircleColor: "#5C9256",
//     smallCircleCOlor: "#7FCD75",
//     rotateBox: "-7deg",
//     imagePath: img4,
//     outerLeft: -2,
//   },
//   {
//     title: "Email & Whatsapp Marketing",
//     subtitle: "",
//     color: "#FEE7E7",
//     bigCircleColor: "#953737",
//     smallCircleCOlor: "#D86E6E",
//     rotateBox: "-2deg",
//     imagePath: img5,
//     outerLeft: -1,
//   },
//   {
//     title: "Content Creation",
//     subtitle: "",
//     color: "#DCF4FF",
//     bigCircleColor: "#5F96AF",
//     smallCircleCOlor: "#89CAE8",
//     rotateBox: "-9deg",
//     imagePath: img6,
//     outerLeft: -2,
//   },
// ];

// const scrollLeft = keyframes`
//   0% { transform: translateX(100%); }
//   100% { transform: translateX(-100%); }
// `;

// const Services = ({ setCanScroll }: { setCanScroll: (canScroll: boolean) => void }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Box
//       sx={{
//         padding: {
//           sm: "6rem 4rem",
//           md: "4rem 8rem",
//           lg: "1rem 12rem 2rem",
//         },
//         backgroundColor: "#fff",
//       }}
//     >
//       <Box sx={{ padding: { xs: "3rem 2rem 2rem" } }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ fontSize: { xs: 40, sm: 40, md: 50 }, color: '#000' }}
//         >
//           <span
//             style={{
//               textDecorationLine: "underline",
//               textDecorationColor: "black",
//               textDecorationThickness: "2px",
//               textUnderlineOffset: "4px",
//             }}
//           >
//             WHAT
//           </span>{" "}
//           WE DO
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{ mb: 1, fontSize: { xs: 14, sm: 16, md: 18 }, color: '#1A1A1A' }}
//         >
//           We bring performance, creativity, and connection under one roof.
//           Here's how we <i>Vyral It</i>
//         </Typography>
//       </Box>

//       {/* Cards Section */}
//       <Box sx={{ position: "relative" }}>
//         {isMobile ? (

//           <StackedCardsMobile setCanScroll={setCanScroll} />

//         ) : (
//           <Box
//             sx={{
//               position: "relative",
//               width: "100%",
//               overflow: "hidden",
//               py: { xs: 4, md: 8 },
//               "::before": {
//                 content: '""',
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 backgroundImage:
//                   "repeating-linear-gradient(to bottom, transparent, transparent 34px, #EDEDED 34px, #EDEDED 35px)", // Adjust spacing as per design
//                 zIndex: 0,
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 justifyContent: "center",
//                 gap: { xs: 4, md: 12 },
//                 rowGap: { xs: 4, md: 14 },
//                 position: "relative",
//                 zIndex: 2, // Keep cards above lines
//               }}
//             >
//               {services.map((service, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     flexBasis: {
//                       xs: "100%",
//                       sm: "45%",
//                       md: "30%",
//                       lg: "220px",
//                     },
//                     height: 200,
//                     borderRadius: 3,
//                     p: 2,
//                     transform: `rotate(${service.rotateBox})`,
//                     boxShadow: "1px 2px 15px rgba(0,0,0,0.2)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     backgroundColor: "#fff",
//                   }}
//                 >
//                   {/* Circles */}
//                   <Box sx={{ position: "relative", transform: "translateX(-50%)", mb: 1 }}>
//                     <Box
//                       sx={{
//                         width: 36,
//                         height: 33,
//                         borderRadius: "50%",
//                         backgroundColor: service.bigCircleColor,
//                         position: "absolute",
//                         top: 5,
//                         left: service.outerLeft,
//                         zIndex: -1,
//                       }}
//                     />
//                     <Box
//                       sx={{
//                         width: 22,
//                         height: 20,
//                         borderRadius: "50%",
//                         backgroundColor: service.smallCircleCOlor,
//                       }}
//                     />
//                   </Box>

//                   {/* Content */}
//                   <Box
//                     sx={{
//                       width: "100%",
//                       height: 140,
//                       bgcolor: service.color,
//                       borderRadius: 3,
//                       textAlign: "center",
//                       mt: "auto",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       px: 1,
//                     }}
//                   >
//                     <Typography fontWeight="bold" fontSize="17px" sx={{color: '#000'}}>
//                       {service.title}
//                     </Typography>
//                     {service.subtitle && (
//                       <Typography fontSize="15px" sx={{color: '#444444'}} mt={0.5}>
//                         {service.subtitle}
//                       </Typography>
//                     )}
//                   </Box>
//                 </Box>
//               ))}
//             </Box>
//           </Box>

//         )}
//       </Box>

//       {/* Footer Text Animation */}
//       <Typography
//         variant="h2"
//         fontWeight="bold"
//         sx={{
//           display: "inline-block",
//           animation: `${scrollLeft} 7s linear infinite`,
//           mt: { md: 8 },
//           mb: 2,
//           color: "#FFE3ED",
//           textTransform: "uppercase",
//           fontSize: { xs: 32, sm: 48, md: 64, lg: 80 },
//           textAlign: "center",
//         }}
//       >
//         YOU NAME IT WE DO IT
//       </Typography>
//     </Box>
//   );
// };

// export default Services;

// import { Box, Typography, useMediaQuery } from "@mui/material";
// import img1 from "../assets/services/1st.png";
// import img2 from "../assets/services/2nd.png";
// import img3 from "../assets/services/3rd.png";
// import img4 from "../assets/services/4th.png";
// import img5 from "../assets/services/5th.png";
// import img6 from "../assets/services/6th.png";
// import { useTheme } from "@mui/material/styles";

// const services = [
//   {
//     title: "Performance Marketing -",
//     subtitle: "Meta, Google, LinkedIn",
//     color: "#FFE3D1",
//     bigCircleColor: "#C25E37",
//     smallCircleCOlor: "#F17956",
//     rotateBox: "9deg",
//     imagePath: img1,
//     outerLeft: -4,
//   },
//   {
//     title: "UI / UX and Graphic Design",
//     subtitle: "",
//     color: "#E6EDFF",
//     bigCircleColor: "#3055B9",
//     smallCircleCOlor: "#637DF5",
//     rotateBox: "-9deg",
//     imagePath: img2,
//     outerLeft: -1,
//   },
//   {
//     title: "Social Media & Community",
//     subtitle: "",
//     color: "#F5E7FE",
//     bigCircleColor: "#594AC1",
//     smallCircleCOlor: "#7B63F5",
//     rotateBox: "9deg",
//     imagePath: img3,
//     outerLeft: -2,
//   },
//   {
//     title: "Search Engine Optimization (SEO)",
//     subtitle: "",
//     color: "#D9FFD4",
//     bigCircleColor: "#5C9256",
//     smallCircleCOlor: "#7FCD75",
//     rotateBox: "-7deg",
//     imagePath: img4,
//     outerLeft: -2,
//   },
//   {
//     title: "Email & Whatsapp Marketing",
//     subtitle: "",
//     color: "#FEE7E7",
//     bigCircleColor: "#953737",
//     smallCircleCOlor: "#D86E6E",
//     rotateBox: "-2deg",
//     imagePath: img5,
//     outerLeft: -1,
//   },
//   {
//     title: "Content Creation",
//     subtitle: "",
//     color: "#DCF4FF",
//     bigCircleColor: "#5F96AF",
//     smallCircleCOlor: "#89CAE8",
//     rotateBox: "-9deg",
//     imagePath: img6,
//     outerLeft: -2,
//   },
// ];

// const Services = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   return (
//     <Box
//       sx={{
//         padding: {
//           sm: "6rem 4rem 6rem 4rem",
//           md: "4rem 8rem 4rem 8rem",
//           lg: "4rem 15rem 2rem 15rem",
//         },
//       }}
//     >
//       <Box sx={{ padding: { xs: "3rem 2rem 2rem 2rem" } }}>
//         <Typography
//           variant="h4"
//           gutterBottom
//           sx={{ fontSize: { xs: 40, sm: 40, md: 50 } }}
//         >
//           <span
//             style={{
//               textDecorationLine: "underline",
//               textDecorationColor: "black",
//               textDecorationThickness: "2px",
//               textUnderlineOffset: "4px",
//             }}
//           >
//             WHAT
//           </span>{" "}
//           WE DO
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           sx={{ mb: 6, fontSize: { xs: 14, sm: 16, md: 18 } }}
//         >
//           We bring performance, creativity, and connection under one roof. Here's
//           how we <i>Vyral It</i>
//         </Typography>
//       </Box>

//       {/* Background Lines */}
//       <Box
//         sx={{
//           position: "relative",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: 1,
//             pointerEvents: "none",
//           },
//         }}
//       >
//         <Box
//           sx={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             zIndex: 0,
//             pointerEvents: "none",
//           }}
//         >
//           {Array.from({ length: 14 }).map((_, i) => (
//             <Box
//               key={i}
//               sx={{
//                 position: "absolute",
//                 top: `${(i + 1) * (200 / 5)}px`,
//                 left: 0,
//                 width: "100%",
//                 height: "0.09px",
//                 backgroundColor: "#E7E7E7",
//               }}
//             />
//           ))}
//         </Box>

//         {/* Cards */}
//         {isMobile ? (
//           <div
//             style={{
//               scrollSnapType: "y mandatory",
//               overflowY: "scroll",
//               height: "72vh",
//               scrollbarWidth: "none",
//               msOverflowStyle: "none",
//               paddingLeft: "2rem",
//               paddingRight: "2rem",
//             }}
//           >
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 style={{
//                   scrollSnapAlign: "start",
//                   paddingBottom: "2.5rem",
//                   display: "flex",
//                   alignItems: "flex-start",
//                   justifyContent: "center",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     flexBasis: "100%",
//                     height: 200,
//                     borderRadius: 3,
//                     p: 2,
//                     transform: `rotate(${service.rotateBox})`,
//                     boxShadow: "1px 2px 15px rgba(0,0,0,0.2)",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     backgroundColor: "#fff",
//                     mt: { xs: "2.8rem" },
//                   }}
//                 >
//                   {/* Circles */}
//                   <Box
//                     sx={{
//                       position: "relative",
//                       transform: "translateX(-50%)",
//                       mb: 1,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         width: 36,
//                         height: 33,
//                         borderRadius: "50%",
//                         backgroundColor: service.bigCircleColor,
//                         position: "absolute",
//                         top: 5,
//                         left: service.outerLeft,
//                         zIndex: -1,
//                       }}
//                     />
//                     <Box
//                       sx={{
//                         width: 22,
//                         height: 20,
//                         borderRadius: "50%",
//                         backgroundColor: service.smallCircleCOlor,
//                       }}
//                     />
//                   </Box>

//                   {/* Content Box */}
//                   <Box
//                     sx={{
//                       width: "100%",
//                       height: 140,
//                       bgcolor: service.color,
//                       borderRadius: 3,
//                       textAlign: "center",
//                       mt: "auto",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       alignItems: "center",
//                       px: 1,
//                     }}
//                   >
//                     <Typography
//                       fontWeight="bold"
//                       fontSize={{ xs: "15px", sm: "16px", md: "17px" }}
//                     >
//                       {service.title}
//                     </Typography>
//                     {service.subtitle && (
//                       <Typography
//                         fontSize={{ xs: "13px", sm: "14px", md: "15px" }}
//                         color="text.secondary"
//                         mt={0.5}
//                       >
//                         {service.subtitle}
//                       </Typography>
//                     )}
//                   </Box>
//                 </Box>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <Box
//             sx={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//               gap: { xs: 4, md: 14 },
//               rowGap: { xs: 4, md: 14 },
//               position: "relative",
//               zIndex: 2,
//             }}
//           >
//             {services.map((service, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   flexBasis: {
//                     xs: "100%",
//                     sm: "45%",
//                     md: "30%",
//                     lg: "220px",
//                   },
//                   height: 200,
//                   borderRadius: 3,
//                   p: 2,
//                   transform: `rotate(${service.rotateBox})`,
//                   boxShadow: "1px 2px 15px rgba(0,0,0,0.2)",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   backgroundColor: "#fff",
//                 }}
//               >
//                 {/* Circles */}
//                 <Box
//                   sx={{
//                     position: "relative",
//                     transform: "translateX(-50%)",
//                     mb: 1,
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       width: 36,
//                       height: 33,
//                       borderRadius: "50%",
//                       backgroundColor: service.bigCircleColor,
//                       position: "absolute",
//                       top: 5,
//                       left: service.outerLeft,
//                       zIndex: -1,
//                     }}
//                   />
//                   <Box
//                     sx={{
//                       width: 22,
//                       height: 20,
//                       borderRadius: "50%",
//                       backgroundColor: service.smallCircleCOlor,
//                     }}
//                   />
//                 </Box>

//                 {/* Content Box */}
//                 <Box
//                   sx={{
//                     width: "100%",
//                     height: 140,
//                     bgcolor: service.color,
//                     borderRadius: 3,
//                     textAlign: "center",
//                     mt: "auto",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     px: 1,
//                   }}
//                 >
//                   <Typography
//                     fontWeight="bold"
//                     fontSize={{ xs: "15px", sm: "16px", md: "17px" }}
//                   >
//                     {service.title}
//                   </Typography>
//                   {service.subtitle && (
//                     <Typography
//                       fontSize={{ xs: "13px", sm: "14px", md: "15px" }}
//                       color="text.secondary"
//                       mt={0.5}
//                     >
//                       {service.subtitle}
//                     </Typography>
//                   )}
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         )}

//         {/* Footer Text */}
//         <Typography
//           variant="h2"
//           fontWeight="bold"
//           sx={{
//             display: "inline-block",
//             mt: { md: 8 },
//             mb: 2,
//             color: "#FFE3ED",
//             textTransform: "uppercase",
//             fontSize: { xs: 32, sm: 48, md: 64, lg: 90 },
//             textAlign: "center",
//           }}
//         >
//           YOU NAME IT WE DO IT
//         </Typography>
//       </Box>
//     </Box>

//   );
// };

// export default Services;

import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        padding: {
          sm: "6rem 4rem",
          md: "4rem 8rem",
          lg: "4rem 15rem 2rem 15rem",
        },
        backgroundColor: "#fff",
      }}
    >
      <Box sx={{ padding: { xs: "3rem 2rem 2rem 2rem" } }}>
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
          sx={{ mb: 4, fontSize: { xs: 14, sm: 16, md: 18 }, color: "#1C1C1C" }}
        >
          We bring performance, creativity, and connection under one roof.
          Here's how we <i>Vyral It</i>
        </Typography>
      </Box>

      <Box sx={{ position: "relative" }}>
        {isMobile ? (
          <Box
            sx={{ px: 2, width: "80%", justifyContent: "center", mx: "auto" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: { opacity: 1, x: 0 },
                }}
                style={{ marginBottom: "2rem" }}
              >
                <Box
                  sx={{
                    borderRadius: 3,
                    p: 2,
                    boxShadow: "1px 2px 15px rgba(0,0,0,0.2)",
                    backgroundColor: "#fff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* Circles */}
                  <Box
                    sx={{
                      position: "relative",
                      transform: "translateX(-50%)",
                      mb: 4,
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

                  {/* Content */}
                  <Box
                    sx={{
                      width: "80%",
                      height: 80,
                      bgcolor: service.color,
                      borderRadius: 3,
                      textAlign: "center",
                      mt: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      px: 2,
                      py: 2,
                    }}
                  >
                    <Typography fontWeight="bold" fontSize={14} sx={{color: '#000'}}>
                      {service.title}
                    </Typography>
                    {service.subtitle && (
                      <Typography fontSize={12} color="text.secondary" mt={0.5} sx={{color: '#1C1C1C'}}>
                        {service.subtitle}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        ) : (
          // 🖥 Desktop View - unchanged
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: { xs: 4, md: 14 },
              rowGap: { xs: 4, md: 14 },
              position: "relative",
              zIndex: 2,
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
                <Box
                  sx={{
                    position: "relative",
                    transform: "translateX(-50%)",
                    mb: 1,
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
                    px: 1,
                  }}
                >
                  <Typography fontWeight="bold" fontSize={15} sx={{color: '#000'}}>
                    {service.title}
                  </Typography>
                  {service.subtitle && (
                    <Typography fontSize={13} color="text.secondary" mt={0.5} sx={{color: '#1C1C1C'}}>
                      {service.subtitle}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* Footer */}
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            display: "inline-block",
            mt: { md: 8 },
            mb: 2,
            color: "#FFE3ED",
            textTransform: "uppercase",
            fontSize: { xs: 32, sm: 48, md: 64, lg: 90 },
            width: "100%",
            textAlign: "center",
          }}
        >
          YOU NAME IT WE DO IT
        </Typography>
      </Box>
    </Box>
  );
};

export default Services;
