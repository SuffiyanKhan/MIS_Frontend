import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Divider,
  Chip,
  IconButton,
  Tooltip,
  Button,
  Badge,
  Avatar,
  Tabs,
  Tab,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";

const Notifications = () => {
  const [tab, setTab] = useState(0);

  // Dummy Notifications Data
  const notifications = [
    {
      id: 1,
      type: "System",
      title: "System Update Deployed",
      message: "New features have been added to the Reports & Insights module.",
      time: "5 mins ago",
      icon: <SystemSecurityUpdateGoodIcon sx={{ color: "#6F2DA8" }} />,
      status: "Unread",
    },
    {
      id: 2,
      type: "Leasing",
      title: "Lease Expiration Reminder",
      message: "Lease for Store 1255 (Arizona Market) expires in 60 days.",
      time: "1 hour ago",
      icon: <CalendarMonthIcon sx={{ color: "#E01B24" }} />,
      status: "Unread",
    },
    {
      id: 3,
      type: "Takeover",
      title: "New Store Takeover Completed",
      message: "Techno Communications successfully took over Store 1301.",
      time: "Yesterday",
      icon: <StorefrontIcon sx={{ color: "#00b09b" }} />,
      status: "Read",
    },
    {
      id: 4,
      type: "Finance",
      title: "Rent Payment Due",
      message: "Monthly rent for Store 1420 is pending (Due: Nov 5).",
      time: "2 days ago",
      icon: <MonetizationOnIcon sx={{ color: "#f7971e" }} />,
      status: "Unread",
    },
    {
      id: 5,
      type: "Alert",
      title: "Security Warning",
      message: "Multiple failed login attempts detected for Manager@metro.com",
      time: "3 days ago",
      icon: <WarningAmberIcon sx={{ color: "#E01B24" }} />,
      status: "Read",
    },
  ];

  const filteredNotifications =
    tab === 0
      ? notifications
      : notifications.filter((n) => n.status === (tab === 1 ? "Unread" : "Read"));

  return (
    <div className="container-fluid py-4">
      {/* 🟣 Header */}
      <Paper
        elevation={3}
        className="p-4 rounded-4 mb-4"
        sx={{
          background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
          color: "#fff",
        }}
      >
        <div className="row align-items-center">
          <div className="col-12 col-md-8 d-flex align-items-center gap-3">
            <NotificationsActiveIcon sx={{ fontSize: 42, color: "#fff" }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Notifications Center
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Stay updated with latest activities, reminders, and alerts.
              </Typography>
            </Box>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-start gap-2 mt-3 mt-md-0">
            <Tooltip title="Mark all as read">
              <IconButton color="inherit" sx={{ color: "#fff" }}>
                <DoneAllIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Refresh Notifications">
              <IconButton color="inherit" sx={{ color: "#fff" }}>
                <RefreshIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Clear All Notifications">
              <IconButton color="inherit" sx={{ color: "#fff" }}>
                <DeleteSweepIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Paper>

      {/* 🔹 Tabs for Filtering */}
      <Paper elevation={2} className="rounded-4 mb-4">
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          textColor="primary"
          indicatorColor="primary"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="All" />
          <Tab
            label={
              <Badge
                color="error"
                badgeContent={notifications.filter((n) => n.status === "Unread").length}
              >
                Unread
              </Badge>
            }
          />
          <Tab label="Read" />
        </Tabs>
      </Paper>

      {/* 📋 Notifications List */}
      <div className="row g-3">
        {filteredNotifications.map((n) => (
          <div key={n.id} className="col-12">
            <Paper
              elevation={2}
              className="p-3 rounded-4 d-flex align-items-center justify-content-between"
              sx={{
                borderLeft: `5px solid ${
                  n.status === "Unread"
                    ? "#6F2DA8"
                    : n.type === "Finance"
                    ? "#f7971e"
                    : "#ccc"
                }`,
                backgroundColor:
                  n.status === "Unread" ? "#f8f5fc" : "#fafafa",
              }}
            >
              <Box className="d-flex align-items-center gap-3">
                <Avatar
                  sx={{
                    bgcolor: "#fff",
                    border: "1px solid #eee",
                    color: "#6F2DA8",
                    width: 50,
                    height: 50,
                  }}
                >
                  {n.icon}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {n.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#666", fontSize: "0.9rem" }}
                  >
                    {n.message}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", mt: 1, display: "block" }}
                  >
                    {n.time}
                  </Typography>
                </Box>
              </Box>
              <Chip
                label={n.status}
                color={n.status === "Unread" ? "secondary" : "default"}
                size="small"
                sx={{ fontWeight: 600 }}
              />
            </Paper>
          </div>
        ))}
      </div>

      {/* 🕓 Footer Action */}
      <Box className="text-center mt-4">
        <Button variant="outlined" color="primary">
          View Archived Notifications
        </Button>
      </Box>
    </div>
  );
};

export default Notifications;
