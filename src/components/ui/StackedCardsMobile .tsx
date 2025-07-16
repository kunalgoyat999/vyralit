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
  const [hiddenCount, setHiddenCount] = useState(0);
  const cooldown = useRef(false);

  const advanceStack = (dir: "up" | "down") => {
    setHiddenCount((prev) => {
      if (dir === "down" && prev < services.length) return prev + 1;
      if (dir === "up" && prev > 0) return prev - 1;
      return prev;
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (cooldown.current) return;

      const mustTrap =
        (e.deltaY > 0 && hiddenCount < services.length) ||
        (e.deltaY < 0 && hiddenCount > 0);

      if (mustTrap) {
        e.preventDefault();
        advanceStack(e.deltaY > 0 ? "down" : "up");
      }

      cooldown.current = true;
      setTimeout(() => (cooldown.current = false), 350);
    };

    let startY = 0;
    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const diff = startY - e.touches[0].clientY;
      if (Math.abs(diff) < 8) return;

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

  // Scroll lock for body + html (important for production)
  useEffect(() => {
    const lockScroll = () => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    };
    const unlockScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };

    if (hiddenCount > 0 && hiddenCount < services.length) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return unlockScroll;
  }, [hiddenCount, services.length]);

  return (
    <Box
      ref={containerRef}
      className="cards-wrapper"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "600px", // Enough to avoid white space issue
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 4,
      }}
    >
      {services.map((svc, idx) => {
        const hidden = idx < hiddenCount;
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
