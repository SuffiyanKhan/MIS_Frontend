import React from "react";
import {
  Paper,
  Typography,
  Box,
  Divider,
  Grid,
  Chip,
  Button,
  Card,
  CardMedia,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DomainIcon from "@mui/icons-material/Domain";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import InsightsIcon from "@mui/icons-material/Insights";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import { useNavigate } from "react-router-dom";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Tooltip as RechartTooltip,
  Legend,
  Bar,
} from "recharts";

const ManageLeasingDetailed = () => {
  const navigate = useNavigate();

  // 🧩 Dummy Data
  const lease = {
    storeId: "TECH1255",
    storeName: "1255 W Main Street",
    market: "Arizona",
    landlord: "ABC Properties LLC",
    contact: "Mark Johnson (mark@abcprops.com)",
    address: "1255 W Main Street, Phoenix, AZ 85001",
    rent: "$3,500 / month",
    camCharges: "$250 / month",
    insurance: "$150 / month",
    total: "$3,900 / month",
    leaseStart: "Jan 2021",
    leaseEnd: "Dec 2026",
    renewalOption: "Yes — 2 years",
    status: "Active",
    documents: [
      { name: "Lease Agreement (PDF)", url: "#", type: "Main" },
      { name: "Renewal Addendum (PDF)", url: "#", type: "Renewal" },
      { name: "Insurance Certificate (PDF)", url: "#", type: "Insurance" },
    ],
    images: [
      {
        url: "https://images.unsplash.com/photo-1560185008-b033106af12e?auto=format&fit=crop&w=900&q=80",
        label: "Store Front",
      },
      {
        url: "https://images.unsplash.com/photo-1581091215367-59ab6d2a9c95?auto=format&fit=crop&w=900&q=80",
        label: "Lease Document Preview",
      },
    ],
  };

  const chartData = [
    { year: "2021", rent: 3300 },
    { year: "2022", rent: 3400 },
    { year: "2023", rent: 3500 },
    { year: "2024", rent: 3700 },
    { year: "2025", rent: 3900 },
    { year: "2026", rent: 4100 },
  ];

  return (
    <div className="container-fluid py-4">
      {/* 🔙 Back Button */}
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
        onClick={() => navigate(-1)}
      >
        Back to Leasing
      </Button>

      {/* 🟣 Header Section */}
      <Paper
        elevation={3}
        className="p-4 rounded-4 mb-4"
        sx={{
          background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
          color: "#fff",
        }}
      >
        <Box className="d-flex flex-wrap justify-content-between align-items-center">
          <Box className="d-flex align-items-center gap-3">
            <DomainIcon sx={{ fontSize: 46, color: "#fff" }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {lease.storeName}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Landlord: {lease.landlord}
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                {lease.address}
              </Typography>
            </Box>
          </Box>
          <Chip
            label={lease.status}
            color={lease.status === "Active" ? "success" : "warning"}
            sx={{ fontWeight: 600, mt: { xs: 2, md: 0 } }}
          />
        </Box>
      </Paper>

      {/* 🧾 General Lease Information */}
      <Paper elevation={2} className="p-4 rounded-4 mb-4">
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
          General Lease Details
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <Box className="p-3 border rounded-4 bg-light h-100">
              <LocationOnIcon sx={{ mr: 1, color: "#6F2DA8" }} />
              <strong>Market:</strong> {lease.market}
              <br />
              <ApartmentIcon sx={{ mr: 1, color: "#6F2DA8" }} />
              <strong>Landlord Contact:</strong> {lease.contact}
              <br />
              <CalendarMonthIcon sx={{ mr: 1, color: "#6F2DA8" }} />
              <strong>Lease Term:</strong> {lease.leaseStart} - {lease.leaseEnd}
            </Box>
          </div>

          <div className="col-12 col-md-6">
            <Box className="p-3 border rounded-4 bg-light h-100">
              <MonetizationOnIcon sx={{ mr: 1, color: "#6F2DA8" }} />
              <strong>Rent:</strong> {lease.rent}
              <br />
              <LocalAtmIcon sx={{ mr: 1, color: "#6F2DA8" }} />
              <strong>CAM Charges:</strong> {lease.camCharges}
              <br />
              <LocalAtmIcon sx={{ mr: 1, color: "#6F2DA8" }} />
              <strong>Insurance:</strong> {lease.insurance}
              <br />
              <InsightsIcon sx={{ mr: 1, color: "#6F2DA8" }} />
              <strong>Total Monthly Cost:</strong> {lease.total}
            </Box>
          </div>
        </div>
      </Paper>

      {/* 📈 Rent Escalation Chart */}
      <Paper elevation={2} className="p-4 rounded-4 mb-4">
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
          Rent Escalation Overview
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="year" />
              <YAxis />
              <RechartTooltip />
              <Legend />
              <Bar dataKey="rent" fill="#6F2DA8" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Paper>

      {/* ⚙️ Additional Charges */}
      <Paper elevation={2} className="p-4 rounded-4 mb-4">
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
          Additional Charges & Notes
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box className="p-3 border rounded-4 bg-light">
          💧 <strong>Utilities:</strong> Included in CAM  
          <br />
          🧾 <strong>Property Taxes:</strong> Paid by Landlord  
          <br />
          ⚙️ <strong>Renewal Option:</strong> {lease.renewalOption}
        </Box>
      </Paper>

      {/* 📁 Lease Documents */}
      <Paper elevation={2} className="p-4 rounded-4 mb-4">
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
          Lease Documents
        </Typography>
        <Divider sx={{ mb: 3 }} />
        {lease.documents.map((doc, i) => (
          <Box
            key={i}
            className="p-3 mb-2 border rounded-4 bg-light d-flex align-items-center justify-content-between"
          >
            <Box className="d-flex align-items-center gap-2">
              <FilePresentIcon sx={{ color: "#6F2DA8" }} />
              <Typography variant="body2">
                <strong>{doc.type}:</strong> {doc.name}
              </Typography>
            </Box>
            <Button variant="outlined" size="small">
              Download
            </Button>
          </Box>
        ))}
      </Paper>

      {/* 🖼️ Property Images */}
      <Paper elevation={2} className="p-4 rounded-4 mb-4">
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
          Property & Lease Images
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={2}>
          {lease.images.map((img, i) => (
            <Grid item xs={6} md={3} key={i}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={img.url}
                  alt={img.label}
                />
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    py: 1,
                    backgroundColor: "#f5f5f5",
                    fontWeight: 500,
                  }}
                >
                  {img.label}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* ⚠️ Alerts Section */}
      <Paper elevation={2} className="p-4 rounded-4">
        <Typography variant="h6" sx={{ color: "error.main", fontWeight: 600 }}>
          Lease Alerts
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box className="p-3 border rounded-4 bg-light">
          <WarningAmberIcon sx={{ color: "#E01B24", mr: 1 }} />
          <strong>Lease Expiring Soon:</strong> Renewal process should begin 90 days before Dec 2026.  
          <br />
          📞 Contact: {lease.landlord} — {lease.contact}
        </Box>
      </Paper>
    </div>
  );
};

export default ManageLeasingDetailed;
