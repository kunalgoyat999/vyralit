import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "../components/ui/Button";

const ContactSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const baseUrl =
      "https://script.google.com/macros/s/AKfycbxDHLZsNG6Sf5M-D9WuOlHZI0XExJsRTiwivnfpxhqwzgT-Kgum9Vm1kdPFc0Aev00h/exec";

    const params = new URLSearchParams(formData).toString();
    const url = `${baseUrl}?${params}`;

    const res = await fetch(url);
    const result = await res.json();

    if (result.status === "success") {
      alert("Submitted successfully!");
      setFormData({ name: "", mail: "", phone: "", message: "" });
    } else {
      alert("Submission failed!");
    }
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        padding: {
          xs: "3rem 2rem 2rem 2rem", // mobile
          sm: "6rem 4rem 6rem 4rem", // small tablet
          md: "4rem 8rem 4rem 8rem", // tablet/desktop
          lg: "4rem 20rem 2rem 15rem",
        },
      }}
    >
      <Typography
        variant="h4"
        sx={{
          mb: 3,
          textTransform: "uppercase",
          color: "#1c2c40",
          fontSize: { xs: "2.4rem", sm: "2.2rem", md: "2.5rem" },
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
          Ready
        </span>{" "}
        to Vyral{" "}
        <span
          style={{
            textDecorationLine: isMobile ? "underline" : "none",
            textDecorationColor: "black",
            textDecorationThickness: "1.5px",
            textUnderlineOffset: "12px",
          }}
        >
          IT.
        </span>
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#1c2c40",
          mb: 6,
          fontSize: { xs: "1.2rem", sm: "1rem" },
        }}
      >
        Let's Create Something Extraordinary Together.
      </Typography>

      <Grid container spacing={4}>
        {/* Left Info Box */}
        <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }} flex={{ md: 1.2 }}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              borderRadius: 3,
              px: 4,
              py: 3,
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Information
            </Typography>
            <Typography
              variant="body2"
              color="gray"
              sx={{ mb: 3, lineHeight: 1.5 }}
            >
              Fill up the form and our Team will get back to you within 24
              hours.
            </Typography>

            {[
              {
                icon: <CallIcon sx={{ color: "#FF217D" }} />,
                text: "+91 976976 0585",
              },
              {
                icon: <MailOutlineIcon sx={{ color: "#FF217D" }} />,
                text: "vyralitofficial@gmail.com",
              },
              {
                icon: <LanguageIcon sx={{ color: "#FF217D" }} />,
                text: "www.vyralit.in",
              },
              {
                icon: <LocationOnIcon sx={{ color: "#FF217D" }} />,
                text: "803, Sector 21 E , Gurugram, 122016",
              },
            ].map(({ icon, text }, index, array) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                gap={4}
mb={index !== array.length - 1 ? 4 : 0}
              >
                <IconButton disableRipple sx={{ p: 0 }}>
                  {icon}
                </IconButton>
                <Typography variant="body2">{text}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Right Form Box */}
        <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }} flex={{ md: 2 }}>
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            width={{ xs: "130%" }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ xs: 3, sm: 4 }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="standard"
                value={formData.name}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontSize: { xs: "1.4rem" }, // increase label font size here
                    fontWeight: "bold", // optional for bolder label
                  },
                }}
              />
              <TextField
                fullWidth
                label="Mail"
                name="mail"
                variant="standard"
                value={formData.mail}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                  sx: {
                    fontSize: { xs: "1.4rem" }, // increase label font size here
                    fontWeight: "bold", // optional for bolder label
                  },
                }}
              />
            </Box>

            <TextField
              fullWidth
              label="Phone"
              name="phone"
              variant="standard"
              value={formData.phone}
              onChange={handleChange}
              InputLabelProps={{
                shrink: true,
                sx: {
                  fontSize: { xs: "1.4rem" }, // increase label font size here
                  fontWeight: "bold", // optional for bolder label
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              variant="standard"
              placeholder="Write your message..."
              InputLabelProps={{
                shrink: true,
                sx: {
                  fontSize: { xs: "1.4rem" }, // increase label font size here
                  fontWeight: "bold", // optional for bolder label
                },
              }}
              InputProps={{
                sx: {
                  paddingTop: { xs: "1.5em" }, // push text down (adjust this to fine-tune)
                },
              }}
              multiline
              minRows={3}
              sx={{ mb: 2 }}
            />
            <Box
              display="flex"
              justifyContent={{ xs: "flex-start", sm: "flex-end" }}
            >
              <Button onClick={handleSubmit}>
                Book your Free Strategy Call
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
