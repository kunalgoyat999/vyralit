// import React, { useState } from "react";
// import { Box, Typography, Grid, Paper } from "@mui/material";
// import { keyframes } from "@emotion/react";

// const ProcessSteps = () => {
//   const [activeStep, setActiveStep] = useState("analyse");
//   const scrollLeft = keyframes`
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// `;
//   const steps = [
//     {
//       key: "analyse",
//       label: "Analyse",
//       description: (
//         <>
//           <span style={{ color: "#FF217D", fontWeight: 600 }}>
//             Not just numbers
//           </span>
//           . We look at the story behind them, what’s been tried, what’s been
//           missed, and what data holds{" "}
//           <span style={{ color: "black", fontWeight: 600 }}>potential</span>.
//         </>
//       ),
//     },
//     {
//       key: "plan",
//       label: "Plan",
//       description: (
//         <>
//           With your{" "}
//           <span style={{ color: "black", fontWeight: 600 }}>goals</span> in
//           focus and your journey in mind,{" "}
//           <span style={{ color: "#FF217D", fontWeight: 600 }}>
//             we build a strategy that fits your pace—not a template.
//           </span>
//         </>
//       ),
//     },
//     {
//       key: "execute",
//       label: "Execute",
//       description: (
//         <>
//           <span style={{ color: "#FF217D", fontWeight: 600 }}>
//             Consistently, and with care.
//           </span>{" "}
//           Growth isn’t overnight—we show up every day to move{" "}
//           <span style={{ color: "black", fontWeight: 600 }}>forward</span> with
//           you.
//         </>
//       ),
//     },
//   ];
//   return (
//     <>
//       <Box
//         sx={{ backgroundColor: "#FFEFF4", padding: "5rem 15rem 0rem 15rem" }}
//       >
//         <Typography variant="h4" gutterBottom fontSize={50}>
//           <span
//             style={{
//               textDecorationLine: "underline",
//               textDecorationColor: "black",
//               textDecorationThickness: "2px",
//               textUnderlineOffset: "4px",
//             }}
//           >
//             HOW
//           </span>{" "}
//           WE WORK TOGETHER
//         </Typography>

//         <Grid
//           container
//           spacing={4}
//           justifyContent="center"
//           alignItems="flex-start"
//         >
//           <Grid
//             item
//             size={3}
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 fontSize: 200,
//                 fontWeight: "bold",
//                 lineHeight: 1,
//                 color: "transparent",
//                 WebkitTextStroke: "1px black",
//               }}
//             >
//               V
//             </Box>
//           </Grid>

//           {steps.map((step, index) => (
//             <Grid size={3} key={step.key}>
//               {activeStep === step.key ? (
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     color: "#FF217D",
//                     fontWeight: 600,
//                     fontSize: 12,
//                     marginLeft: "15px",
//                     mb: "5px",
//                   }}
//                 >
//                   Step {index + 1}
//                 </Typography>
//               ) : (
//                 <Typography
//                   variant="body2"
//                   sx={{
//                     visibility: "hidden",
//                     fontSize: 12,
//                     marginLeft: "15px",
//                     mb: "5px",
//                   }}
//                 >
//                   Step {index + 1}
//                 </Typography>
//               )}
//               <Paper
//                 onClick={() => setActiveStep(step.key)} // <-- Click handler
//                 onMouseEnter={() => setActiveStep(step.key)}
//                 elevation={0}
//                 sx={{
//                   cursor: "pointer",
//                   border:
//                     activeStep === step.key
//                       ? "1px solid #FF217D"
//                       : "0px solid #ccc", // <-- Highlighting border
//                   borderRadius: 2,
//                   p: 2,
//                   backgroundColor:
//                     activeStep === step.key ? "#FFE0EE" : "transparent", // <-- Highlighting background
//                   textAlign: "left",
//                   transition: "all 0.3s ease",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   fontSize={24}
//                   color="black"
//                   gutterBottom
//                 >
//                   {step.label}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {step.description}
//                   {step.highlight && <b>{step.highlight}</b>}
//                 </Typography>
//               </Paper>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//       <Box
//         sx={{
//           overflow: "hidden",
//           whiteSpace: "nowrap",
//           position: "relative",
//           width: "100%",

//           backgroundColor: "#FFEFF4",
//         }}
//       >
//         <Typography
//           variant="h2"
//           fontWeight="bold"
//           sx={{
//             display: "inline-block",
//             animation: `${scrollLeft} 5s linear infinite`,
//             color: "#FAD4E4",
//             letterSpacing: 5,
//             fontSize: 135,
//             mt: 10,
//             mb: 10,
//           }}
//         >
//           LETS VYRAL IT
//         </Typography>
//       </Box>
//     </>
//   );
// };

// export default ProcessSteps;
