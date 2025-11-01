import React from "react";
import {
  Paper,
  Typography,
  Box,
  Chip,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const MarketInformation = ({
  region = "Southwest",
  totalStores = 45,
  regionalManager = "John Doe",
  director = "Sarah Williams",
  established = "March 2018",
  status = "Active",
  phone = "+1 (555) 234-7890",
  email = "southwest@metromarket.com",
  address = "1234 Sunset Blvd, Phoenix, AZ 85001",
}) => {
  return (
    <Paper
      elevation={3}
      className="p-4 rounded-4 h-100"
      sx={{
        border: "1px solid #e0e0e0",
        backgroundColor: "#faf8fc",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
        },
      }}
    >
      {/* 🔹 Header */}
      <Box className="d-flex justify-content-between align-items-center mb-3">
        <Typography
          variant="subtitle1"
          sx={{
            color: "primary.main",
            fontWeight: 600,
            textTransform: "uppercase",
          }}
        >
          General Details
        </Typography>
        <Tooltip title="Market-level basic and contact details">
          <IconButton size="small" color="primary">
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* 🔸 Info Fields */}
      <Typography variant="body1" sx={{ mb: 1.2 }}>
        <LocationCityIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        <strong>Region:</strong> {region}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.2 }}>
        <StoreIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        <strong>Total Stores:</strong> {totalStores}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.2 }}>
        <PersonIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        <strong>Regional Manager:</strong> {regionalManager}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.2 }}>
        <BusinessCenterIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        <strong>Director:</strong> {director}
      </Typography>

      <Typography variant="body1" sx={{ mb: 1.2 }}>
        <CalendarMonthIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        <strong>Established:</strong> {established}
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* 📞 Contact Info */}
      <Typography
        variant="subtitle2"
        sx={{ color: "text.secondary", mb: 1, textTransform: "uppercase" }}
      >
        Contact Information
      </Typography>

      <Typography variant="body2" sx={{ mb: 1 }}>
        <PhoneIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        {phone}
      </Typography>

      <Typography variant="body2" sx={{ mb: 1 }}>
        <EmailIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        {email}
      </Typography>

      <Typography variant="body2" sx={{ mb: 1.5 }}>
        <LocationOnIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
        {address}
      </Typography>

      {/* 🏷️ Status */}
      <Box className="mt-3">
        <Chip
          label={`Status: ${status}`}
          color={status === "Active" ? "success" : "error"}
          sx={{
            fontWeight: 600,
            fontSize: "0.85rem",
            px: 1,
            py: 0.5,
          }}
        />
      </Box>
    </Paper>
  );
};

export default MarketInformation;
