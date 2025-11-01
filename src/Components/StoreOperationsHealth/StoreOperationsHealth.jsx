import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Chip,
} from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import StoreIcon from "@mui/icons-material/Store";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 🗺️ Custom map marker icon
const storeIcon = new L.Icon({
  iconUrl:
    "https://cdn-icons-png.flaticon.com/512/684/684908.png", // simple purple marker
  iconSize: [30, 30],
});

const StoreOperationsHealth = () => {
  // 📍 Dummy store data
  const stores = [
    {
      id: 1,
      name: "1255 W MAIN STREET",
      market: "ARIZONA",
      position: [33.4152, -111.8315],
      status: "Active",
    },
    {
      id: 2,
      name: "W BELL RD",
      market: "ARIZONA",
      position: [33.6386, -112.3774],
      status: "Active",
    },
    {
      id: 3,
      name: "E FLORENCE BLVD",
      market: "ARIZONA",
      position: [32.8795, -111.7574],
      status: "Alert",
    },
    {
      id: 4,
      name: "S TEXAS AVE",
      market: "TEXAS",
      position: [30.628, -96.3344],
      status: "Alert",
    },
  ];

  // ⚠️ Dummy operational alerts
  const alerts = [
    {
      id: 1,
      type: "Low Sales",
      message: "Store #1326 E Florence Blvd reported 45% drop in sales this week.",
      severity: "High",
      icon: <ReportProblemIcon color="error" />,
    },
    {
      id: 2,
      type: "Pending Lease Renewal",
      message: "Store #70849455 lease expires in 15 days.",
      severity: "Medium",
      icon: <WarningAmberIcon color="warning" />,
    },
    {
      id: 3,
      type: "Connectivity Restored",
      message: "Store #12801 W Bell Rd connectivity issue resolved.",
      severity: "Low",
      icon: <CheckCircleIcon color="success" />,
    },
  ];

  return (
    <Paper
      elevation={3}
      className="p-4 rounded-4 mb-4"
      sx={{ backgroundColor: "background.paper" }}
    >
      {/* Header */}
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "primary.main",
          fontSize: "1.5rem",
        }}
      >
        Store Operations Health
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <div className="row g-4">
        {/* 🗺️ Store Map */}
        <div className="col-12 col-md-7">
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              height: 420,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              p={2}
              sx={{ backgroundColor: "#f7f5fc" }}
            >
              <LocationOnIcon color="primary" />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                Store Locations Overview
              </Typography>
            </Box>

            <MapContainer
              center={[33.5, -112.1]} // Center over Arizona
              zoom={7}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              {stores.map((store) => (
                <Marker
                  key={store.id}
                  position={store.position}
                  icon={storeIcon}
                >
                  <Popup>
                    <Typography variant="subtitle2" fontWeight={600}>
                      {store.name}
                    </Typography>
                    <Typography variant="caption">
                      Market: {store.market}
                    </Typography>
                    <br />
                    <Chip
                      label={store.status}
                      color={store.status === "Active" ? "success" : "warning"}
                      size="small"
                      sx={{ mt: 1 }}
                    />
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Paper>
        </div>

        {/* ⚠️ Operational Alerts */}
        <div className="col-12 col-md-5">
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              height: 420,
              overflowY: "auto",
              background: "#fff",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={1}
              p={2}
              sx={{ backgroundColor: "#f7f5fc" }}
            >
              <StoreIcon color="primary" />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                Operational Alerts & Issues
              </Typography>
            </Box>

            <List>
              {alerts.map((alert) => (
                <ListItem
                  key={alert.id}
                  sx={{
                    borderBottom: "1px solid #eee",
                    py: 1.5,
                    alignItems: "flex-start",
                  }}
                >
                  <ListItemAvatar>{alert.icon}</ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, color: "text.primary" }}
                      >
                        {alert.type}
                      </Typography>
                    }
                    secondary={
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        {alert.message}
                      </Typography>
                    }
                  />
                  <Chip
                    label={alert.severity}
                    color={
                      alert.severity === "High"
                        ? "error"
                        : alert.severity === "Medium"
                        ? "warning"
                        : "success"
                    }
                    size="small"
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default StoreOperationsHealth;
