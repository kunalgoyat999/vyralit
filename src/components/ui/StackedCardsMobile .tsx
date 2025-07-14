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
  const [hiddenIndexes, setHiddenIndexes] = useState<number[]>([]);
  const scrollCooldown = useRef(false);


  const handleScroll = (e: WheelEvent) => {
    if (scrollCooldown.current) return;
    scrollCooldown.current = true;

    setTimeout(() => {
      scrollCooldown.current = false;
    }, 400); // debounce

    e.preventDefault();

    if (e.deltaY > 0 && hiddenIndexes.length < services.length - 1) {
      // Hide next card
      setHiddenIndexes((prev) => [...prev, prev.length]);
    }

    if (e.deltaY < 0 && hiddenIndexes.length > 0) {
      // Unhide previous
      setHiddenIndexes((prev) => prev.slice(0, prev.length - 1));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [hiddenIndexes]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e: WheelEvent) => {
      if (scrollCooldown.current) return;
      scrollCooldown.current = true;

      setTimeout(() => {
        scrollCooldown.current = false;
      }, 400);

      // Let page scroll freely once last card is gone
      if (hiddenIndexes.length >= services.length - 1) return;

      e.preventDefault();

      if (e.deltaY > 0 && hiddenIndexes.length < services.length - 1) {
        setHiddenIndexes((prev) => [...prev, prev.length]);
      }

      if (e.deltaY < 0 && hiddenIndexes.length > 0) {
        setHiddenIndexes((prev) => prev.slice(0, prev.length - 1));
      }
    };

    container.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleScroll);
    };
  }, [hiddenIndexes, services.length]);


  return (
    <Box
      ref={containerRef}
      sx={{
        height: "300px",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "150px",
      }}
    >
      {services.map((service, index) => {
        const isHidden = hiddenIndexes.includes(index);
        const hiddenIndex = hiddenIndexes.indexOf(index);
        const direction = hiddenIndex % 2 === 0 ? "right" : "left";

        return (
          <Box
            key={index}
            sx={{
              position: "absolute",
              width: "80%",
              height: 200,
              top: `${index * 5}px`,
              left: "50%",
              transform: isHidden
                ? `translateX(${direction === "left" ? "-150%" : "150%"}) rotate(${service.rotateBox})`
                : `translateX(-50%) rotate(${service.rotateBox})`,
              opacity: isHidden ? 0 : 1,
              transition: "all 0.6s ease",
              zIndex: services.length - index,
              borderRadius: 3,
              p: 2,
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

            {/* Card Content */}
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
              <Typography fontWeight="bold" fontSize="15px">
                {service.title}
              </Typography>
              {service.subtitle && (
                <Typography fontSize="13px" color="text.secondary" mt={0.5}>
                  {service.subtitle}
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



