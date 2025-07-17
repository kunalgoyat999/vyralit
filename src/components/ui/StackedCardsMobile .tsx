import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { services } from "../../sections/Services";

interface Service {
  title: string;
  subtitle?: string;
  color: string;
  rotateBox: string;
  bigCircleColor: string;
  smallCircleCOlor: string;
  outerLeft: string;
}
const cards = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"];

const StackedCardsMobile = ({ setCanScroll }: { setCanScroll: (canScroll: boolean) => void }) => {
const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isLockedRef = useRef(false);
  const touchStartY = useRef<number | null>(null);

  // Disable scroll on mount
  useEffect(() => {
    setCanScroll(true);
  }, [setCanScroll]);

  useEffect(() => {
  const container = containerRef.current;
  if (!container) return;

  const handleAdvance = () => {
    if (isLockedRef.current || index >= cards.length -1) return;
    isLockedRef.current = true;

      setIndex((prev) => prev + 1);


    setTimeout(() => {
      isLockedRef.current = false;
    }, 600); // Animation delay
  };

  const handleBack = () => {
    if (isLockedRef.current || index <= 0) return;
    isLockedRef.current = true;

    setIndex((prev) => {
      const next = prev - 1;
      // If user starts going back up, prevent scroll again
      if (next < cards.length) {
        setCanScroll(false);
      }
      return next;
    });

    setTimeout(() => {
      isLockedRef.current = false;
    }, 600); // Same delay as forward
  };

  // Wheel scroll handler
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      handleAdvance(); // Scroll down
    } else if (e.deltaY < 0) {
      handleBack(); // Scroll up
    }
  };

  // Touch swipe logic
  const handleTouchStart = (e: TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (touchStartY.current === null) return;

    const diff = touchStartY.current - e.touches[0].clientY;

    if (diff > 30) {
      e.preventDefault();
      handleAdvance(); // Swipe up
      touchStartY.current = null;
    } else if (diff < -30) {
      e.preventDefault();
      handleBack(); // Swipe down
      touchStartY.current = null;
    }
  };

  container.addEventListener("wheel", handleWheel, { passive: false });
  container.addEventListener("touchstart", handleTouchStart, { passive: true });
  container.addEventListener("touchmove", handleTouchMove, { passive: false });

  return () => {
    container.removeEventListener("wheel", handleWheel);
    container.removeEventListener("touchstart", handleTouchStart);
    container.removeEventListener("touchmove", handleTouchMove);
  };
}, [index, setCanScroll]);


  // const containerRef = useRef<HTMLDivElement>(null);
  // const [hiddenCount, setHiddenCount] = useState(0);
  // const cooldown = useRef(false);

  // const advanceStack = (dir: "up" | "down") => {
  //   setHiddenCount((prev) => {
  //     if (dir === "down" && prev < services.length) return prev + 1;
  //     if (dir === "up" && prev > 0) return prev - 1;
  //     return prev;
  //   });
  // };

  // useEffect(() => {
  //   const el = containerRef.current;
  //   if (!el) return;

  //   const onWheel = (e: WheelEvent) => {
  //     if (cooldown.current) return;

  //     const mustTrap =
  //       (e.deltaY > 0 && hiddenCount < services.length) ||
  //       (e.deltaY < 0 && hiddenCount > 0);

  //     if (mustTrap) {
  //       e.preventDefault();
  //       advanceStack(e.deltaY > 0 ? "down" : "up");
  //     }

  //     cooldown.current = true;
  //     setTimeout(() => (cooldown.current = false), 350);
  //   };

  //   let startY = 0;
  //   const onTouchStart = (e: TouchEvent) => {
  //     startY = e.touches[0].clientY;
  //   };

  //   const onTouchMove = (e: TouchEvent) => {
  //     const diff = startY - e.touches[0].clientY;
  //     if (Math.abs(diff) < 8) return;

  //     const goingDown = diff > 0;
  //     const mustTrap =
  //       (goingDown && hiddenCount < services.length) ||
  //       (!goingDown && hiddenCount > 0);

  //     if (mustTrap) {
  //       e.preventDefault();
  //       advanceStack(goingDown ? "down" : "up");
  //     }

  //     startY = e.touches[0].clientY;
  //   };

  //   el.addEventListener("wheel", onWheel, { passive: false });
  //   el.addEventListener("touchstart", onTouchStart, { passive: true });
  //   el.addEventListener("touchmove", onTouchMove, { passive: false });

  //   return () => {
  //     el.removeEventListener("wheel", onWheel);
  //     el.removeEventListener("touchstart", onTouchStart);
  //     el.removeEventListener("touchmove", onTouchMove);
  //   };
  // }, [hiddenCount, services.length]);

  // // Scroll lock for body + html (important for production)
  // useEffect(() => {
  //   const lockScroll = () => {
  //     document.body.style.overflow = "hidden";
  //     document.documentElement.style.overflow = "hidden";
  //   };
  //   const unlockScroll = () => {
  //     document.body.style.overflow = "";
  //     document.documentElement.style.overflow = "";
  //   };

  //   if (hiddenCount > 0 && hiddenCount < services.length) {
  //     lockScroll();
  //   } else {
  //     unlockScroll();
  //   }

  //   return unlockScroll;
  // }, [hiddenCount, services.length]);

  return (
    //  <div
    //   ref={containerRef}
    //   style={{
    //     height: "100vh",
    //     overflow: "hidden",
    //     position: "relative",
    //     background: "#fff",
    //     touchAction: "none",
    //   }}
    // >
    <Box
      ref={containerRef}
      className="cards-wrapper"
      // sx={{
      //   position: "relative",
      //   overflow: "hidden",
      //   minHeight: "600px", // Enough to avoid white space issue
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   mb: 4,
      // }}
      style={{
        height: "50vh",
        overflow: "hidden",
        position: "relative",
        background: "#fff",
        touchAction: "none",
      }}
    >
      {services.map((svc, idx) => {
        const hidden = idx < index;
        const side = idx % 2 === 0 ? "right" : "left";
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
              transition: "all 0.55s ease",
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
            {/* Decorative Circles */}
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

            {/* Card Content */}
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
              <Typography fontWeight={700} fontSize={15} sx={{color: '#000'}}>
                {svc.title}
              </Typography>
              {svc.subtitle && (
                <Typography fontSize={13} sx={{color: '#444444'}} mt={0.5}>
                  {svc.subtitle}
                </Typography>
              )}
            </Box>
          </Box>
        );
      })}
    </Box>
    //  <div
    //   ref={containerRef}
    //   style={{
    //     height: "100vh",
    //     overflow: "hidden",
    //     position: "relative",
    //     background: "#fff",
    //     touchAction: "none",
    //   }}
    // >
    //   {cards.map((card, i) => (
    //     <motion.div
    //       key={i}
    //       initial={{ x: 0, opacity: 1 }}
    //       animate={i < index ? { x: -400, opacity: 0 } : { x: 0, opacity: 1 }}
    //       transition={{ duration: 0.5 }}
    //       style={{
    //         position: "absolute",
    //         width: "90%",
    //         height: "60%",
    //         margin: "auto",
    //         background: "#fff",
    //         boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    //         zIndex: cards.length - i,
    //         top: "20%",
    //         left: "5%",
    //         pointerEvents: "none",
    //         display: "flex",
    //         justifyContent: "center",
    //         alignItems: "center",
    //         fontSize: 24,
    //         fontWeight: 600,
    //       }}
    //     >
    //       {card}
    //     </motion.div>
    //   ))}
    // </div>
  );
};

export default StackedCardsMobile;
