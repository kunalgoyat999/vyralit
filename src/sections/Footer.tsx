import { Box, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
// import brandImage from "../assets/brandLogo/VyralIt.png";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        px: { xs: 3, sm: 6, md: 12 },
        py: 4,
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        gap: { xs: 3, sm: 0 },
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      {/* Logo Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          gap: 1,
        }}
      >
        {/* <Box
          component="img"
          src={brandImage}
          alt="VyralIt"
          sx={{
            maxWidth: { xs: 
              30, md: 150 }, // Use px/rem/% values
            height: "auto",
          }}
        /> */}
        <Typography
          variant="caption"
          sx={{ letterSpacing: "2px", fontSize: 15 }}
        >
          <span style={{ fontSize: 22 }}>V</span>YRALIT
        </Typography>
      </Box>

      {/* Social Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          justifyContent: { xs: "center", sm: "flex-end" },
          gap: 2,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          FOLLOW US
        </Typography>
        {[InstagramIcon,LinkedIn].map(
          (Icon, idx) => (
            <IconButton
              key={idx}
              sx={{
                color: "#fff",
                border: "1px solid #fff",
                "&:hover": { backgroundColor: "#222" },
              }}
            >
              <Icon />
            </IconButton>
          )
        )}
      </Box>
    </Box>
  );
};

export default Footer;
