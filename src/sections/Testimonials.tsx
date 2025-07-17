import { Box, Typography, Paper, keyframes } from "@mui/material";
import { styled } from "@mui/system";

const testimonials = [
  {
    text: (
      <>
        They turned our ideas into reality with precision and creativity.{" "}
        <span style={{ color: "#FFB904", fontWeight: "600" }}>
          Highly recommended
        </span>{" "}
        for anyone looking for top-notch results!
      </>
    ),
    author: "Product Manager - Nxcar",
  },
  {
    text: (
      <>
        Their{" "}
        <span style={{ color: "#FFB904", fontWeight: "600" }}>
          creativity and professionalism
        </span>{" "}
        are unmatched. They truly understood our needs and delivered a product
        that perfectly aligns with our vision.
      </>
    ),
    author: "CEO - Epitome Hospital",
  },
  {
    text: (
      <>
        Their{" "}
        <span style={{ color: "#FFB904", fontWeight: "600" }}>
          attention to detail
        </span>{" "}
        and commitment to excellence are second to none. We couldn't be happier
        with the final product.
      </>
    ),
    author: "CEO - Max Hospital",
  },
  {
    text: (
      <>
        A{" "}
        <span style={{ color: "#FFB904", fontWeight: "600" }}>
          fantastic experience
        </span>{" "}
        from start to finish. The team was responsive, innovative, and always
        ready to go the extra mile for us.
      </>
    ),
    author: "Head of Design - Yuptel",
  },
  {
    text: (
      <>
        The team was a joy to work with. They listened to our needs and brought
        our project to life with{" "}
        <span style={{ color: "#FFB904", fontWeight: "600" }}>
          incredible skill and creativity.
        </span>
      </>
    ),
    author: "Marketing Manager - GrowthEd",
  },
  {
    text: (
      <>
        <span style={{ color: "#FFB904", fontWeight: "600" }}>
          Working with this team
        </span>{" "}
        has been an absolute pleasure. They delivered beyond our expectations,
        even with our tight budget!
      </>
    ),
    author: "Operations Director - Amber Hotel",
  },
];

const scrollUp = keyframes`
  0% { transform: translateY(150%); }
  100% { transform: translateY(-150%); }
`;

const scrollDown = keyframes`
  0% { transform: translateY(-150%); }
  100% { transform: translateY(150%); }
`;

const ScrollColumn = styled(Box)(({ animation }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  animation: `${animation} 15s linear infinite`,
  flex: 1,
  "&:hover": {
    animationPlayState: "paused",
  },
}));

const TestimonialCard = ({ text, author }) => (
  <Paper
    elevation={0}
    sx={{
      backgroundColor: "#2c2c2e",
      color: "#fff",
      borderRadius: 4,
      p: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      width: { xs: "100%", sm: "90%", md: "80%" },
      boxSizing: "border-box",
    }}
  >
    <Box>
      <Typography
        style={{
          fontSize: "12px",
          marginBottom: "1.5rem",
          color: "#FFB904",
        }}
      >
        ⭐⭐⭐⭐⭐
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#fff", mb: "1.5rem", fontSize: { xs: 12, sm: 13 } }}
      >
        {text}
      </Typography>
    </Box>
    <Typography
      variant="caption"
      sx={{ color: "#b0b0b0", fontSize: { xs: 10, sm: 11 } }}
    >
      {author}
    </Typography>
  </Paper>
);

const TestimonialsSection = () => {
  const leftColumn = testimonials.filter((_, i) => i % 2 === 0);
  const rightColumn = testimonials.filter((_, i) => i % 2 !== 0);

  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        px: { xs: 3, sm: 6, md: 10 },
        py: { xs: 0, sm: 8 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 0, md: 6 },
        overflow: "hidden",
        height: { xs: "auto", md: "60vh" },
      }}
    >
      {/* Animated Columns */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          gap: 2,
          justifyContent: "space-evenly",
          maxHeight: { xs: "60vh" },
          overflow: "hidden",
        }}
      >
        <ScrollColumn animation={scrollUp}>
          {leftColumn.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </ScrollColumn>
        <ScrollColumn animation={scrollDown}>
          {rightColumn.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </ScrollColumn>
      </Box>

      {/* Static Side */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: { md: 4 },
          mt: { xs: 2, md: 0 },
          py: { xs: 4 },
        }}
      >
        <Typography variant="overline" sx={{ color: "#FAF8F8", mb: 1 }}>
          TESTIMONIALS
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#FF217D",
            lineHeight: 1,
            fontSize: { xs: 24, sm: 30, md: 36 },
          }}
        >
          Our clients like us,
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: 24, sm: 30, md: 36 },
          }}
        >
          and we love them
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#aaa", maxWidth: 400, fontSize: { xs: 14, sm: 16 } }}
        >
          At Vyralit, our clients’ satisfaction is our top priority. We take
          pride in the relationships we build and the successes we help create.
        </Typography>
        <Box
          sx={{ mt: 2, display: "flex", alignItems: "center", gap: 1, mb: 1 }}
        >
          <Typography
            variant="body1"
            component="span"
            sx={{
              fontWeight: "bold",
              color: "#fff",
              fontSize: { xs: 14, sm: 16 },
            }}
          >
            4.5
          </Typography>
          <Typography variant="body2" sx={{ color: "#aaa", fontSize: 14 }}>
            from 30+ reviewers
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" sx={{ color: "#ffd700", fontSize: 18 }}>
            ⭐⭐⭐⭐⭐
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialsSection;
