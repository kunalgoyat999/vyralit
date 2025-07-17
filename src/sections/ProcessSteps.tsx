import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { keyframes } from "@emotion/react";

const ProcessSteps = () => {
  /* ---------------- state ---------------- */
  const [activeStep, setActiveStep] = useState("analyse");

  /* ---------------- theme / breakpoints ---------------- */
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  /* ---------------- refs for IntersectionObserver ---------------- */
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  /* ---------------- marquee keyframes ---------------- */
  const scrollLeft = keyframes`
    0%   { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  `;

  /* ---------------- step data ---------------- */
  const steps = [
    {
      key: "analyse",
      label: "Analyse",
      stepNumber: "Step 1",
      description: (
        <>
          <span style={{ color: "#FF217D", fontWeight: 600 }}>
            Not just numbers.
          </span>{" "}
          We look at the story behind them, what's been tried, what's been
          missed, and what still holds:{" "}
          <span style={{ color: "black", fontWeight: 600 }}>potential</span>
        </>
      ),
    },
    {
      key: "plan",
      label: "Plan",
      stepNumber: "Step 2",
      description: (
        <>
          With your{" "}
          <span style={{ color: "black", fontWeight: 600 }}>goals</span> in
          focus and your journey in mind, we build a strategy that fits your
          pace{" "}
          <span style={{ color: "#FF217D", fontWeight: 600 }}>
            —not a template.
          </span>
        </>
      ),
    },
    {
      key: "execute",
      label: "Execute",
      stepNumber: "Step 3",
      description: (
        <>
          <span style={{ color: "#FF217D", fontWeight: 600 }}>
            Consistently, and with care.
          </span>{" "}
          Growth isn't overnight—we show up every day to move{" "}
          <span style={{ color: "black", fontWeight: 600 }}>forward</span> with
          you.
        </>
      ),
    },
  ];

  useEffect(() => {
    if (!isMobile) return;

    const stepElements = stepRefs.current.filter(Boolean) as HTMLDivElement[];

    const handleScroll = () => {
      let closestStep = "";
      let minDistance = Infinity;

      stepElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;
        const distance = Math.abs(centerY - screenCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestStep = el.getAttribute("data-key") || "";
        }
      });

      setActiveStep(closestStep);
    };

    // Debounce with requestAnimationFrame for smoothness
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial run
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isMobile]);



  /* ---------------- render ---------------- */
  return (
    <>
      {/* ---------- main section ---------- */}
      <Box
        sx={{
          backgroundColor: "#FFEFF4",
          padding: {
            xs: "4rem 2rem 2rem",
            sm: "6rem 4rem 6rem",
            md: "4rem 8rem 8rem",
            lg: "4rem 15rem 8rem",
          },
        }}
      >
        {/* ---------- heading ---------- */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: 28, sm: 36, md: 50 },
            mb: 4,
            color: '#000'
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
            HOW
          </span>{" "}
          WE WORK{" "}
          <span
            style={{
              textDecorationLine: isMobile ? "underline" : "none",
              textDecorationColor: "black",
              textDecorationThickness: "1.5px",
              textUnderlineOffset: "12px",
            }}
          >
            TOGETHER
          </span>
        </Typography>

        {/* ---------- steps container ---------- */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: 4,
            alignItems: "flex-start",
          }}
        >
          {/* decorative 'V' only on desktop */}
          {!isMobile && (
            <Box
              sx={{
                fontSize: 200,
                fontWeight: "bold",
                lineHeight: 1,
                color: "transparent",
                WebkitTextStroke: "1px black",
                mr: 4,
                mt: 2,
              }}
            >
              V
            </Box>
          )}

          {/* steps list */}
          <Box
            sx={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: 4,
              flex: 1,
            }}
          >
            {steps.map((step, i) => (
              <Box
                key={step.key}
                data-key={step.key}
                ref={(el) => (stepRefs.current[i] = el)}
                sx={{ flex: 1, position: "relative", scrollMarginTop: "30vh" }}
              >
                {/* tiny “Step X” label */}
                <Typography
                  variant="body2"
                  sx={{
                    color: activeStep === step.key ? "#FF217D" : "transparent",
                    fontWeight: 600,
                    fontSize: 12,
                    mb: 1,
                    ml: 2,
                    height: 20,
                  }}
                >
                  {activeStep === step.key ? step.stepNumber : " "}
                </Typography>

                {/* card */}
                <Paper
                  elevation={0}
                  onClick={() => setActiveStep(step.key)}
                  onMouseEnter={() => setActiveStep(step.key)}
                  sx={{
                    cursor: "pointer",
                    border:
                      activeStep === step.key
                        ? "1px solid #FF217D"
                        : "1px solid transparent",
                    borderRadius: 2,
                    p: 3,
                    backgroundColor:
                      activeStep === step.key ? "#FFE0EE" : "transparent",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      border: "1px solid #FF217D",
                      backgroundColor: "#FFE0EE",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontSize: 20, fontWeight: 600, mb: 2 }}
                  >
                    {step.label}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    {step.description}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ---------- marquee ---------- */}
      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          width: "100%",
          backgroundColor: "#FFEFF4",
          pb: { xs: 4 },
        }}
      >
        <Typography
          variant="h2"
          fontWeight="bold"
          sx={{
            display: "inline-block",
            animation: `${scrollLeft} 7s linear infinite`,
            color: "#FAD4E4",
            letterSpacing: 5,
            fontSize: { xs: 40, sm: 70, md: 110, lg: 135 },
          }}
        >
          LETS VYRAL IT
        </Typography>
      </Box>
    </>
  );
};

export default ProcessSteps;

