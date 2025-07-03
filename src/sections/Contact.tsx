import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  IconButton,
} from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "../components/ui/Button";

const ContactSection = () => {
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
    <Box sx={{ bgcolor: "#fff", p: "4rem 15rem 5rem 15rem" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, textTransform: "uppercase", color: "#1c2c40" }}
      >
        <span
          style={{
            textDecorationLine: "underline",
            textDecorationColor: "black",
            textDecorationThickness: "2px",
            textUnderlineOffset: "10px",
          }}
        >
          Ready
        </span>{" "}
        to Vyral IT.
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "#1c2c40",
          mb: 6,
        }}
      >
        Let's Create Something Extraordinary Together.
      </Typography>

      <Grid container spacing={4} flex={1}>
        {/* Left Contact Info Card */}
        {/* <Box sx={{backgroundColor: 'red'}}> */}
        <Grid item xs={12} md={5} width={"65%"} flex={1.2}>
          <Paper
            elevation={3}
            sx={{
              bgcolor: "#000",
              color: "#fff",
              borderRadius: 3,
              px: 3,
              py: 4,
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
            ].map(({ icon, text }, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                gap={2}
                mb={4}
              >
                <IconButton disableRipple sx={{ p: 0 }}>
                  {icon}
                </IconButton>
                <Typography variant="body2">{text}</Typography>
              </Box>
            ))}
          </Paper>
        </Grid>
        {/* </Box> */}

        {/* Right Form Side */}
        <Grid item xs={12} md={7} flex={2.5}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" gap={15}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="standard"
                value={formData.name}
                onChange={handleChange}
                sx={{ flex: 1 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Mail"
                name="mail"
                variant="standard"
                value={formData.mail}
                onChange={handleChange}
                sx={{ flex: 1, mb: 4 }}
                InputLabelProps={{ shrink: true }}
              />
            </Box>
            <Box>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                variant="standard"
                value={formData.phone}
                onChange={handleChange}
                sx={{ flex: 1, mb: 6 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="standard"
                placeholder="Write your message..."
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 10 }}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end">
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
