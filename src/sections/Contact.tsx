import React, { useState, forwardRef } from "react";
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

type Props = {};

const ContactSection = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    mail: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async () => {
    let newErrors = { name: "", mail: "", phone: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.mail.trim()) {
      newErrors.mail = "Email is required";
      isValid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.mail)
    ) {
      newErrors.mail = "Enter a valid email address";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit number";
      isValid = false;
    }

    setErrors(newErrors);
    if (!isValid) return;

    // Start loading here
    setIsSubmitting(true);

    try {
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
    } catch (err) {
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false); // stop loading in both success/failure
    }
  };


  return (
    <Box
      ref={ref}
      sx={{
        bgcolor: "#fff",
        padding: {
          xs: "3rem 2rem 2rem 2rem",
          sm: "6rem 4rem 6rem 4rem",
          md: "4rem 8rem 4rem 8rem",
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
                text: "+91 976 976 0585",
              },
              {
                icon: <MailOutlineIcon sx={{ color: "#FF217D" }} />,
                text: "info@vyralit.in",
              },
              {
                icon: <LanguageIcon sx={{ color: "#FF217D" }} />,
                text: "www.vyralit.in",
              },
              {
                icon: <LocationOnIcon sx={{ color: "#FF217D" }} />,
                text: "809, Sector 21 E , Gurugram, 122016",
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
        <Grid
          item
          xs={12}
          md={7}
          order={{ xs: 1, md: 2 }}
          flex={{ md: 2 }}
          sx={{ width: { xs: '100%', md: 'auto' } }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            width={{ xs: "100%", md: "auto" }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ xs: 3, sm: 4 }}
              width={{ xs: "100%", md: "auto" }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="standard"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                InputLabelProps={{
                  shrink: true,
                  sx: { fontSize: { xs: "1.4rem" }, fontWeight: "bold" },
                }}
              />
              <TextField
                fullWidth
                label="Mail"
                name="mail"
                variant="standard"
                value={formData.mail}
                onChange={handleChange}
                error={!!errors.mail}
                helperText={errors.mail}
                InputLabelProps={{
                  shrink: true,
                  sx: { fontSize: { xs: "1.4rem" }, fontWeight: "bold" },
                }}
              />
            </Box>

            <TextField
              fullWidth
              label="Phone"
              name="phone"
              variant="standard"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              onKeyPress={(e) => {
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault(); // block letters and special chars
                }
              }}
              error={!!errors.phone}
              helperText={errors.phone}
              InputLabelProps={{
                shrink: true,
                sx: { fontSize: { xs: "1.4rem" }, fontWeight: "bold" },
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
                sx: { fontSize: { xs: "1.4rem" }, fontWeight: "bold" },
              }}
              InputProps={{
                sx: {
                  paddingTop: { xs: "1.5em" },
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
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                sx={{ minWidth: "220px" }}
              >
                {isSubmitting ? "Submitting..." : "Book your Free Strategy Call"}
              </Button>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
});

export default ContactSection;

