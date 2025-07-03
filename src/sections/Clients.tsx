// import React from "react";
// import brands from "../assets/brands/allBrand.png";
// import { Typography } from "@mui/material";
// import Button from "../components/ui/Button";

// const Clients: React.FC = () => {
//   return (
//     <section style={clientsStyles.section}>
//       <Typography variant="h4" gutterBottom fontSize={50} sx={{ mb: "3rem" }}>
//         <span
//           style={{
//             textDecorationLine: "underline",
//             textDecorationColor: "black",
//             textDecorationThickness: "2px",
//             textUnderlineOffset: "10px",
//           }}
//         >
//           BRANDS
//         </span>{" "}
//         WE'VE WORKED WITH{" "}
//       </Typography>
//       <div style={clientsStyles.logoGrid}>
//         <img
//           src={brands}
//           style={clientsStyles.logoItem}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.filter = "none";
//             e.currentTarget.style.opacity = "1";
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.filter = "none";
//             e.currentTarget.style.opacity = "0.8";
//           }}
//         />
//       </div>
//       <div style={{ marginTop: "3rem", marginBottom: "3rem" }}>
//         <Button children={"Do you know to be the next?"} />
//       </div>
//     </section>
//   );
// };

// export default Clients;

// export const clientsStyles = {
//   section: {
//     padding: "5rem 15rem 0rem 15rem",
//   },
//   title: {
//     fontSize: "32px",
//     fontWeight: "bold",
//     marginBottom: "24px",
//   },
//   logoGrid: {
//     display: "grid",
//     gap: "32px",
//     gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
//     maxWidth: "1000px",
//     // margin: "0 auto",
//     alignItems: "center",
//   },
// };
