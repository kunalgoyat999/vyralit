// import { Box, Typography } from "@mui/material";
// import { useEffect, useRef, useState } from "react";

// interface Service {
//   title: string;
//   subtitle?: string;
//   color: string;
//   rotateBox: string;
//   bigCircleColor: string;
//   smallCircleCOlor: string;
//   outerLeft: string;
// }

// const StackedCardsMobile = ({ services }: { services: Service[] }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [hiddenIndexes, setHiddenIndexes] = useState<number[]>([]);
//   const scrollCooldown = useRef(false);


//   const handleScroll = (e: WheelEvent) => {
//     if (scrollCooldown.current) return;
//     scrollCooldown.current = true;

//     setTimeout(() => {
//       scrollCooldown.current = false;
//     }, 400); // debounce

//     e.preventDefault();

//     if (e.deltaY > 0 && hiddenIndexes.length < services.length - 1) {
//       // Hide next card
//       setHiddenIndexes((prev) => [...prev, prev.length]);
//     }

//     if (e.deltaY < 0 && hiddenIndexes.length > 0) {
//       // Unhide previous
//       setHiddenIndexes((prev) => prev.slice(0, prev.length - 1));
//     }
//   };

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     container.addEventListener("wheel", handleScroll, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleScroll);
//     };
//   }, [hiddenIndexes]);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleScroll = (e: WheelEvent) => {
//       if (scrollCooldown.current) return;
//       scrollCooldown.current = true;

//       setTimeout(() => {
//         scrollCooldown.current = false;
//       }, 400);

//       // Let page scroll freely once last card is gone
//       if (hiddenIndexes.length >= services.length - 1) return;

//       e.preventDefault();

//       if (e.deltaY > 0 && hiddenIndexes.length < services.length - 1) {
//         setHiddenIndexes((prev) => [...prev, prev.length]);
//       }

//       if (e.deltaY < 0 && hiddenIndexes.length > 0) {
//         setHiddenIndexes((prev) => prev.slice(0, prev.length - 1));
//       }
//     };

//     container.addEventListener("wheel", handleScroll, { passive: false });

//     return () => {
//       container.removeEventListener("wheel", handleScroll);
//     };
//   }, [hiddenIndexes, services.length]);


//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         height: "300px",
//         position: "relative",
//         overflow: "hidden",
//         paddingBottom: "150px",
//       }}
//     >
//       {services.map((service, index) => {
//         const isHidden = hiddenIndexes.includes(index);
//         const hiddenIndex = hiddenIndexes.indexOf(index);
//         const direction = hiddenIndex % 2 === 0 ? "right" : "left";

//         return (
//           <Box
//             key={index}
//             sx={{
//               position: "absolute",
//               width: "80%",
//               height: 200,
//               top: `${index * 5}px`,
//               left: "50%",
//               transform: isHidden
//                 ? `translateX(${direction === "left" ? "-150%" : "150%"}) rotate(${service.rotateBox})`
//                 : `translateX(-50%) rotate(${service.rotateBox})`,
//               opacity: isHidden ? 0 : 1,
//               transition: "all 0.6s ease",
//               zIndex: services.length - index,
//               borderRadius: 3,
//               p: 2,
//               boxShadow: "1px 2px 15px rgba(0,0,0,0.2)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               backgroundColor: "#fff",
//             }}
//           >
//             {/* Circles */}
//             <Box sx={{ position: "relative", transform: "translateX(-50%)", mb: 1 }}>
//               <Box
//                 sx={{
//                   width: 36,
//                   height: 33,
//                   borderRadius: "50%",
//                   backgroundColor: service.bigCircleColor,
//                   position: "absolute",
//                   top: 5,
//                   left: service.outerLeft,
//                   zIndex: -1,
//                 }}
//               />
//               <Box
//                 sx={{
//                   width: 22,
//                   height: 20,
//                   borderRadius: "50%",
//                   backgroundColor: service.smallCircleCOlor,
//                 }}
//               />
//             </Box>

//             {/* Card Content */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: 140,
//                 bgcolor: service.color,
//                 borderRadius: 3,
//                 textAlign: "center",
//                 mt: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 px: 1,
//               }}
//             >
//               <Typography fontWeight="bold" fontSize="15px">
//                 {service.title}
//               </Typography>
//               {service.subtitle && (
//                 <Typography fontSize="13px" color="text.secondary" mt={0.5}>
//                   {service.subtitle}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default StackedCardsMobile;



// import { Box, Typography } from "@mui/material";
// import { useEffect, useRef, useState } from "react";

// interface Service {
//   title: string;
//   subtitle?: string;
//   color: string;
//   rotateBox: string;
//   bigCircleColor: string;
//   smallCircleCOlor: string;
//   outerLeft: string;
// }

// const StackedCardsMobile = ({ services }: { services: Service[] }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   /** number of cards currently pushed out of view  */
//   const [hiddenCount, setHiddenCount] = useState(0);

//   /** debounce so a fast wheel flick ≠ 10 cards   */
//   const cooldown = useRef(false);

//   /** Common handler for wheel + touch  */
//   const advanceStack = (direction: "up" | "down") => {
//     setHiddenCount((prev) => {
//       if (direction === "down" && prev < services.length) return prev + 1;
//       if (direction === "up" && prev > 0) return prev - 1;
//       return prev;
//     });
//   };

//   useEffect(() => {
//   // lock the whole page whenever at least one card is still visible
//   if (hiddenCount < services.length) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }
//   // cleanup on unmount
//   return () => {
//     document.body.style.overflow = "";
//   };
// }, [hiddenCount, services.length]);


//   /* Attach listeners once */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     /* ========== Wheel (desktop) ========== */
//     const onWheel = (e: WheelEvent) => {
//       if (cooldown.current) return;

//       // Block page‑scroll while we still have cards to hide/show
//       const mustTrap =
//         (e.deltaY > 0 && hiddenCount < services.length) ||
//         (e.deltaY < 0 && hiddenCount > 0);

//       if (mustTrap) {
//         e.preventDefault();
//         advanceStack(e.deltaY > 0 ? "down" : "up");
//       }

//       cooldown.current = true;
//       setTimeout(() => (cooldown.current = false), 350);
//     };

//     /* ========== Touch (mobile) ========== */
//     let startY = 0;
//     const onTouchStart = (e: TouchEvent) => (startY = e.touches[0].clientY);
//     const onTouchMove = (e: TouchEvent) => {
//       const diff = startY - e.touches[0].clientY;
//       if (Math.abs(diff) < 8) return; // tiny wiggle – ignore

//       const goingDown = diff > 0;
//       const mustTrap =
//         (goingDown && hiddenCount < services.length) ||
//         (!goingDown && hiddenCount > 0);

//       if (mustTrap) {
//         e.preventDefault();
//         advanceStack(goingDown ? "down" : "up");
//       }
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     el.addEventListener("touchstart", onTouchStart, { passive: true });
//     el.addEventListener("touchmove", onTouchMove, { passive: false });

//     return () => {
//       el.removeEventListener("wheel", onWheel);
//       el.removeEventListener("touchstart", onTouchStart);
//       el.removeEventListener("touchmove", onTouchMove);
//     };
//   }, [hiddenCount, services.length]);

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: "relative",
//         overflow: "hidden",
//         height: 320,
//         pb: 18,
//       }}
//     >
//       {services.map((s, i) => {
//         const hidden = i < hiddenCount;
//         const direction = i % 2 === 0 ? "right" : "left";

//         return (
//           <Box
//             key={i}
//             sx={{
//               position: "absolute",
//               width: "80%",
//               height: 200,
//               top: i * 5,
//               left: "50%",
//               transform: hidden
//                 ? `translateX(${direction === "left" ? "-160%" : "160%"}) rotate(${s.rotateBox})`
//                 : `translateX(-50%) rotate(${s.rotateBox})`,
//               opacity: hidden ? 0 : 1,
//               transition: "all .55s ease",
//               zIndex: services.length - i,
//               borderRadius: 3,
//               p: 2,
//               boxShadow: "1px 2px 14px rgba(0,0,0,.18)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               bgcolor: "#fff",
//             }}
//           >
//             {/* Circles */}
//             <Box sx={{ position: "relative", transform: "translateX(-50%)", mb: 1 }}>
//               <Box
//                 sx={{
//                   width: 36,
//                   height: 33,
//                   borderRadius: "50%",
//                   bgcolor: s.bigCircleColor,
//                   position: "absolute",
//                   top: 5,
//                   left: s.outerLeft,
//                   zIndex: -1,
//                 }}
//               />
//               <Box
//                 sx={{
//                   width: 22,
//                   height: 20,
//                   borderRadius: "50%",
//                   bgcolor: s.smallCircleCOlor,
//                 }}
//               />
//             </Box>

//             {/* Card content */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: 140,
//                 bgcolor: s.color,
//                 borderRadius: 3,
//                 textAlign: "center",
//                 mt: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 px: 1,
//               }}
//             >
//               <Typography fontWeight={700} fontSize={15}>
//                 {s.title}
//               </Typography>
//               {s.subtitle && (
//                 <Typography fontSize={13} color="text.secondary" mt={0.5}>
//                   {s.subtitle}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default StackedCardsMobile;


// import { Box, Typography } from "@mui/material";
// import { useEffect, useRef, useState } from "react";

// interface Service {
//   title: string;
//   subtitle?: string;
//   color: string;
//   rotateBox: string;
//   bigCircleColor: string;
//   smallCircleCOlor: string;
//   outerLeft: string;
// }

// const StackedCardsMobile = ({ services }: { services: Service[] }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   /** how many cards are already pushed out (top of stack) */
//   const [hiddenCount, setHiddenCount] = useState(0);

//   /** simple debounce so one wheel tick ≠ a flood of events */
//   const cooldown = useRef(false);

//   /* helper changes the hiddenCount ↑ or ↓ by one */
//   const advanceStack = (dir: "up" | "down") => {
//     setHiddenCount((prev) => {
//       if (dir === "down" && prev < services.length) return prev + 1;
//       if (dir === "up" && prev > 0) return prev - 1;
//       return prev;
//     });
//   };

//   /* ─────────────────────────────  wheel + touch listeners  ───────────────────────────── */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     /* desktop ‑ wheel */
//     const onWheel = (e: WheelEvent) => {
//       if (cooldown.current) return;

//       const mustTrap =
//         (e.deltaY > 0 && hiddenCount < services.length) || // scrolling down, cards remain
//         (e.deltaY < 0 && hiddenCount > 0);                // scrolling up, cards hidden

//       if (mustTrap) {
//         e.preventDefault();                               // block page scroll
//         advanceStack(e.deltaY > 0 ? "down" : "up");
//       }

//       cooldown.current = true;
//       setTimeout(() => (cooldown.current = false), 350);
//     };

//     /* mobile ‑ touch */
//     let startY = 0;
//     const onTouchStart = (e: TouchEvent) => {
//       startY = e.touches[0].clientY;
//     };
//     const onTouchMove = (e: TouchEvent) => {
//       const diff = startY - e.touches[0].clientY;
//       if (Math.abs(diff) < 8) return;                     // ignore micro‑moves

//       const goingDown = diff > 0;
//       const mustTrap =
//         (goingDown && hiddenCount < services.length) ||
//         (!goingDown && hiddenCount > 0);

//       if (mustTrap) {
//         e.preventDefault();
//         advanceStack(goingDown ? "down" : "up");
//       }
//       startY = e.touches[0].clientY;                      // reset for next move
//     };

//     /* attach */
//     el.addEventListener("wheel", onWheel, { passive: false });
//     el.addEventListener("touchstart", onTouchStart, { passive: true });
//     el.addEventListener("touchmove", onTouchMove, { passive: false });

//     /* detach */
//     return () => {
//       el.removeEventListener("wheel", onWheel);
//       el.removeEventListener("touchstart", onTouchStart);
//       el.removeEventListener("touchmove", onTouchMove);
//     };
//   }, [hiddenCount, services.length]);

//   /* ─────────────────────────────  body‑scroll lock  ───────────────────────────── */
// useEffect(() => {
//   // Freeze page only WHILE we’re in the middle of the stack animation
//   if (hiddenCount > 0 && hiddenCount < services.length) {
//     document.body.style.overflow = "hidden";
//   } else {
//     document.body.style.overflow = "";
//   }
//   return () => {
//     document.body.style.overflow = "";
//   };
// }, [hiddenCount, services.length]);


//   /* ─────────────────────────────  render  ───────────────────────────── */
//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: "relative",
//         overflow: "hidden",
//         height: 320,
//         pb: 18,
//       }}
//     >
//       {services.map((svc, idx) => {
//         const hidden = idx < hiddenCount;
//         const side = idx % 2 === 0 ? "right" : "left";

//         return (
//           <Box
//             key={idx}
//             sx={{
//               position: "absolute",
//               width: "80%",
//               height: 200,
//               top: idx * 5,
//               left: "50%",
//               transform: hidden
//                 ? `translateX(${side === "left" ? "-160%" : "160%"}) rotate(${svc.rotateBox})`
//                 : `translateX(-50%) rotate(${svc.rotateBox})`,
//               opacity: hidden ? 0 : 1,
//               transition: "all .55s ease",
//               zIndex: services.length - idx,
//               borderRadius: 3,
//               p: 2,
//               boxShadow: "1px 2px 15px rgba(0,0,0,.18)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               bgcolor: "#fff",
//             }}
//           >
//             {/* decorative circles */}
//             <Box sx={{ position: "relative", transform: "translateX(-50%)", mb: 1 }}>
//               <Box
//                 sx={{
//                   width: 36,
//                   height: 33,
//                   borderRadius: "50%",
//                   bgcolor: svc.bigCircleColor,
//                   position: "absolute",
//                   top: 5,
//                   left: svc.outerLeft,
//                   zIndex: -1,
//                 }}
//               />
//               <Box
//                 sx={{
//                   width: 22,
//                   height: 20,
//                   borderRadius: "50%",
//                   bgcolor: svc.smallCircleCOlor,
//                 }}
//               />
//             </Box>

//             {/* card content */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: 140,
//                 bgcolor: svc.color,
//                 borderRadius: 3,
//                 mt: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//                 px: 1,
//               }}
//             >
//               <Typography fontWeight={700} fontSize={15}>
//                 {svc.title}
//               </Typography>
//               {svc.subtitle && (
//                 <Typography fontSize={13} color="text.secondary" mt={0.5}>
//                   {svc.subtitle}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default StackedCardsMobile;

// import { Box, Typography } from "@mui/material";
// import { useEffect, useRef, useState } from "react";

// interface Service {
//   title: string;
//   subtitle?: string;
//   color: string;
//   rotateBox: string;
//   bigCircleColor: string;
//   smallCircleCOlor: string;
//   outerLeft: string;
// }

// const StackedCardsMobile = ({ services }: { services: Service[] }) => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   /** number of cards already pushed out of view */
//   const [hiddenCount, setHiddenCount] = useState(0);

//   /** debounce so one wheel tick ≠ many cards */
//   const cooldown = useRef(false);

//   /* Move stack one step up or down */
//   const advanceStack = (dir: "up" | "down") => {
//     setHiddenCount((prev) => {
//       if (dir === "down" && prev < services.length) return prev + 1;
//       if (dir === "up" && prev > 0) return prev - 1;
//       return prev;
//     });
//   };

//   /* ─────────── wheel + touch listeners ─────────── */
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     /* desktop wheel */
//     const onWheel = (e: WheelEvent) => {
//       if (cooldown.current) return;

//       const mustTrap =
//         (e.deltaY > 0 && hiddenCount < services.length) || // down, cards remain
//         (e.deltaY < 0 && hiddenCount > 0);                // up, cards hidden

//       if (mustTrap) {
//         e.preventDefault();
//         advanceStack(e.deltaY > 0 ? "down" : "up");
//       }

//       cooldown.current = true;
//       setTimeout(() => (cooldown.current = false), 350);
//     };

//     /* mobile swipe */
//     let startY = 0;
//     const onTouchStart = (e: TouchEvent) => {
//       startY = e.touches[0].clientY;
//     };
//     const onTouchMove = (e: TouchEvent) => {
//       const diff = startY - e.touches[0].clientY;
//       if (Math.abs(diff) < 8) return; // ignore tiny wiggles

//       const goingDown = diff > 0;
//       const mustTrap =
//         (goingDown && hiddenCount < services.length) ||
//         (!goingDown && hiddenCount > 0);

//       if (mustTrap) {
//         e.preventDefault();
//         advanceStack(goingDown ? "down" : "up");
//       }
//       startY = e.touches[0].clientY;
//     };

//     el.addEventListener("wheel", onWheel, { passive: false });
//     el.addEventListener("touchstart", onTouchStart, { passive: true });
//     el.addEventListener("touchmove", onTouchMove, { passive: false });

//     return () => {
//       el.removeEventListener("wheel", onWheel);
//       el.removeEventListener("touchstart", onTouchStart);
//       el.removeEventListener("touchmove", onTouchMove);
//     };
//   }, [hiddenCount, services.length]);

//   /* ─────────── body‑scroll lock ─────────── */
//   useEffect(() => {
//     // Lock page ONLY while in-between top & bottom
//     if (hiddenCount > 0 && hiddenCount < services.length) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [hiddenCount, services.length]);

//   /* ─────────── render ─────────── */
//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         position: "relative",
//         overflow: "hidden",
//         height: "100vh",           // full viewport slot
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       {services.map((svc, idx) => {
//         const hidden = idx < hiddenCount;
//         const side = idx % 2 === 0 ? "right" : "left";

//         /* Optional tiny vertical stagger (5 px) while still staying centred */
//         const staggerY = idx * 5;

//         return (
//           <Box
//             key={idx}
//             sx={{
//               position: "absolute",
//               width: "80%",
//               height: 200,
//               left: "50%",
//               transform: hidden
//                 ? `translate(-50%, ${staggerY}px) translateX(${
//                     side === "left" ? "-160%" : "160%"
//                   }) rotate(${svc.rotateBox})`
//                 : `translate(-50%, ${staggerY}px) rotate(${svc.rotateBox})`,
//               opacity: hidden ? 0 : 1,
//               transition: "all .55s ease",
//               zIndex: services.length - idx,
//               borderRadius: 3,
//               p: 2,
//               boxShadow: "1px 2px 15px rgba(0,0,0,.18)",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               bgcolor: "#fff",
//             }}
//           >
//             {/* decorative circles */}
//             <Box sx={{ position: "relative", transform: "translateX(-50%)", mb: 1 }}>
//               <Box
//                 sx={{
//                   width: 36,
//                   height: 33,
//                   borderRadius: "50%",
//                   bgcolor: svc.bigCircleColor,
//                   position: "absolute",
//                   top: 5,
//                   left: svc.outerLeft,
//                   zIndex: -1,
//                 }}
//               />
//               <Box
//                 sx={{
//                   width: 22,
//                   height: 20,
//                   borderRadius: "50%",
//                   bgcolor: svc.smallCircleCOlor,
//                 }}
//               />
//             </Box>

//             {/* card content */}
//             <Box
//               sx={{
//                 width: "100%",
//                 height: 140,
//                 bgcolor: svc.color,
//                 borderRadius: 3,
//                 mt: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//                 px: 1,
//               }}
//             >
//               <Typography fontWeight={700} fontSize={15}>
//                 {svc.title}
//               </Typography>
//               {svc.subtitle && (
//                 <Typography fontSize={13} color="text.secondary" mt={0.5}>
//                   {svc.subtitle}
//                 </Typography>
//               )}
//             </Box>
//           </Box>
//         );
//       })}
//     </Box>
//   );
// };

// export default StackedCardsMobile;

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

interface Service {
  title: string;
  subtitle?: string;
  color: string;
  rotateBox: string;
  bigCircleColor: string;
  smallCircleCOlor: string;
  outerLeft: string;
}

const StackedCardsMobile = ({ services }: { services: Service[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  /** number of cards already pushed out of view */
  const [hiddenCount, setHiddenCount] = useState(0);

  /** debounce so one wheel tick ≠ many cards */
  const cooldown = useRef(false);

  /* Move stack one step up or down */
  const advanceStack = (dir: "up" | "down") => {
    setHiddenCount((prev) => {
      if (dir === "down" && prev < services.length) return prev + 1;
      if (dir === "up" && prev > 0) return prev - 1;
      return prev;
    });
  };

  /* ─────────── wheel + touch listeners ─────────── */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    /* desktop wheel */
    const onWheel = (e: WheelEvent) => {
      if (cooldown.current) return;

      const mustTrap =
        (e.deltaY > 0 && hiddenCount < services.length) || // down, cards remain
        (e.deltaY < 0 && hiddenCount > 0);                // up, cards hidden

      if (mustTrap) {
        e.preventDefault();
        advanceStack(e.deltaY > 0 ? "down" : "up");
      }

      cooldown.current = true;
      setTimeout(() => (cooldown.current = false), 350);
    };

    /* mobile swipe */
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const diff = startY - e.touches[0].clientY;
      if (Math.abs(diff) < 8) return; // ignore tiny wiggles

      const goingDown = diff > 0;
      const mustTrap =
        (goingDown && hiddenCount < services.length) ||
        (!goingDown && hiddenCount > 0);

      if (mustTrap) {
        e.preventDefault();
        advanceStack(goingDown ? "down" : "up");
      }
      startY = e.touches[0].clientY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [hiddenCount, services.length]);

  /* ─────────── body‑scroll lock ─────────── */
  useEffect(() => {
    // Lock page ONLY while in-between top & bottom
    if (hiddenCount > 0 && hiddenCount < services.length) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hiddenCount, services.length]);

  /* ─────────── render ─────────── */
  return (
    <Box
      ref={containerRef}
      sx={{
          position: "relative",
    // overflow: "hidden",
    minHeight: "300px",        // ✅ Enough to show all cards properly
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    mb: 4, 
      }}
    >
      {services.map((svc, idx) => {
        const hidden = idx < hiddenCount;
        const side = idx % 2 === 0 ? "right" : "left";

        /* Optional tiny vertical stagger (5 px) while still staying centred */
        const staggerY = idx * 5;

        return (
          <Box
            key={idx}
            sx={{
              position: "absolute",
              width: "80%",
              height: 200,
              left: "50%",
              transform: hidden
                ? `translate(-50%, ${staggerY}px) translateX(${
                    side === "left" ? "-160%" : "160%"
                  }) rotate(${svc.rotateBox})`
                : `translate(-50%, ${staggerY}px) rotate(${svc.rotateBox})`,
              opacity: hidden ? 0 : 1,
              transition: "all .55s ease",
              zIndex: services.length - idx,
              borderRadius: 3,
              p: 2,
              boxShadow: "1px 2px 15px rgba(0,0,0,.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#fff",
            }}
          >
            {/* decorative circles */}
            <Box sx={{ position: "relative", transform: "translateX(-50%)", mb: 1 }}>
              <Box
                sx={{
                  width: 36,
                  height: 33,
                  borderRadius: "50%",
                  bgcolor: svc.bigCircleColor,
                  position: "absolute",
                  top: 5,
                  left: svc.outerLeft,
                  zIndex: -1,
                }}
              />
              <Box
                sx={{
                  width: 22,
                  height: 20,
                  borderRadius: "50%",
                  bgcolor: svc.smallCircleCOlor,
                }}
              />
            </Box>

            {/* card content */}
            <Box
              sx={{
                width: "100%",
                height: 140,
                bgcolor: svc.color,
                borderRadius: 3,
                mt: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                px: 1,
              }}
            >
              <Typography fontWeight={700} fontSize={15}>
                {svc.title}
              </Typography>
              {svc.subtitle && (
                <Typography fontSize={13} color="text.secondary" mt={0.5}>
                  {svc.subtitle}
                </Typography>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default StackedCardsMobile;
