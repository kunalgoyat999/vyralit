import React, { useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { keyframes } from "@emotion/react";

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState("analyse");

  const scrollLeft = keyframes`
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  `;

  const steps = [
    {
      key: "analyse",
      label: "Analyse",
      description: (
        <>
          <span style={{ color: "#FF217D", fontWeight: 600 }}>
            Not just numbers
          </span>
          . We look at the story behind them, what’s been tried, what’s been
          missed, and what data holds{" "}
          <span style={{ color: "black", fontWeight: 600 }}>potential</span>.
        </>
      ),
    },
    {
      key: "plan",
      label: "Plan",
      description: (
        <>
          With your{" "}
          <span style={{ color: "black", fontWeight: 600 }}>goals</span> in
          focus and your journey in mind,{" "}
          <span style={{ color: "#FF217D", fontWeight: 600 }}>
            we build a strategy that fits your pace—not a template.
          </span>
        </>
      ),
    },
    {
      key: "execute",
      label: "Execute",
      description: (
        <>
          <span style={{ color: "#FF217D", fontWeight: 600 }}>
            Consistently, and with care.
          </span>{" "}
          Growth isn’t overnight—we show up every day to move{" "}
          <span style={{ color: "black", fontWeight: 600 }}>forward</span> with
          you.
        </>
      ),
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFEFF4",
          px: { xs: 2, sm: 4, md: 8, lg: 15 },
          pt: { xs: 4, sm: 6, md: 8 },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontSize: { xs: 28, sm: 36, md: 50 },
            mb: 4,
          }}
        >
          <span
            style={{
              textDecorationLine: "underline",
              textDecorationColor: "black",
              textDecorationThickness: "2px",
              textUnderlineOffset: "4px",
            }}
          >
            HOW
          </span>{" "}
          WE WORK TOGETHER
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Decorative V */}
          <Grid item xs={12} sm={2} textAlign="center">
            <Box
              sx={{
                fontSize: { xs: 80, sm: 150, md: 200 },
                fontWeight: "bold",
                lineHeight: 1,
                color: "transparent",
                WebkitTextStroke: "1px black",
              }}
            >
              V
            </Box>
          </Grid>

          {/* Steps */}
          {steps.map((step, index) => (
            <Grid item xs={12} sm={10} md={3} key={step.key}>
              <Typography
                variant="body2"
                sx={{
                  color: activeStep === step.key ? "#FF217D" : "transparent",
                  fontWeight: 600,
                  fontSize: 12,
                  ml: 1.5,
                  mb: 1,
                  height: "20px",
                }}
              >
                {activeStep === step.key ? `Step ${index + 1}` : " "}
              </Typography>

              <Paper
                onClick={() => setActiveStep(step.key)}
                onMouseEnter={() => setActiveStep(step.key)}
                elevation={0}
                sx={{
                  cursor: "pointer",
                  border:
                    activeStep === step.key
                      ? "1px solid #FF217D"
                      : "1px solid transparent",
                  borderRadius: 2,
                  p: 2,
                  backgroundColor:
                    activeStep === step.key ? "#FFE0EE" : "transparent",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  height: "100%",
                }}
              >
                <Typography
                  variant="h6"
                  fontSize={20}
                  color="black"
                  gutterBottom
                >
                  {step.label}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Marquee Section */}
      <Box
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "relative",
          width: "100%",
          backgroundColor: "#FFEFF4",
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
            mt: 10,
            mb: 10,
          }}
        >
          LETS VYRAL IT
        </Typography>
      </Box>
    </>
  );
};

export default ProcessSteps;
