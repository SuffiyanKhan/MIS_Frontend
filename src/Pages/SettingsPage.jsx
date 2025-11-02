import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Tabs,
  Tab,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Grid,
  Avatar,
  Tooltip,
  IconButton,
  InputAdornment,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import StoreIcon from "@mui/icons-material/Store";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ApiIcon from "@mui/icons-material/Api";
import TuneIcon from "@mui/icons-material/Tune";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SearchIcon from "@mui/icons-material/Search";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const SettingsPage = () => {
  const [tab, setTab] = useState(0);
  const handleTabChange = (e, newValue) => setTab(newValue);

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
        <Box className="d-flex align-items-center gap-2">
          <SettingsIcon sx={{ fontSize: 38 }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              System Settings
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.85 }}>
              Manage configurations, preferences, and integrations of your MIS.
            </Typography>
          </Box>
        </Box>
      </Paper>

      {/* 🧭 Tabs Navigation */}
      <Paper elevation={2} className="rounded-4 mb-4">
        <Tabs
          value={tab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab icon={<SettingsIcon />} label="General" />
          <Tab icon={<SecurityIcon />} label="User Management" />
          <Tab icon={<StoreIcon />} label="Markets & Stores" />
          <Tab icon={<NotificationsActiveIcon />} label="Notifications" />
          <Tab icon={<ApiIcon />} label="Integrations" />
          <Tab icon={<TuneIcon />} label="System Preferences" />
        </Tabs>
      </Paper>

      {/* 🔸 Tab Content */}
      {tab === 0 && (
        <Paper elevation={3} className="p-4 rounded-4">
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
            General Settings
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Company Name"
                fullWidth
                defaultValue="Techno Communications LLC"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Support Email" fullWidth defaultValue="support@techno.com" />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField label="Phone Number" fullWidth defaultValue="+1 800 555 2025" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Default Timezone" fullWidth defaultValue="America/New_York" />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControlLabel
                control={<Switch defaultChecked color="primary" />}
                label="Enable Auto Backup"
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  Company Logo
                </Typography>
                <Box className="d-flex align-items-center gap-3">
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2023.svg"
                    sx={{ width: 60, height: 60 }}
                  />
                  <Button variant="outlined" startIcon={<CloudUploadIcon />}>
                    Upload New
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box className="text-end mt-4">
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </Box>
        </Paper>
      )}

      {/* 👥 User Management */}
      {tab === 1 && (
        <Paper elevation={3} className="p-4 rounded-4">
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
            User Management
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Box className="d-flex align-items-center justify-content-between mb-3">
            <TextField
              size="small"
              placeholder="Search users..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="secondary">
              Add New User
            </Button>
          </Box>

          <Box className="rounded-4 border p-3 bg-light">
            <Typography variant="body2">
              👨‍💼 <strong>John Doe</strong> — Regional Manager (Arizona) — Active
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              👩‍💼 <strong>Sarah Williams</strong> — Director — Super Admin
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body2">
              👨‍💻 <strong>Mike Taylor</strong> — System Engineer — Pending Access
            </Typography>
          </Box>
        </Paper>
      )}

      {/* 🏪 Markets & Stores */}
      {tab === 2 && (
        <Paper elevation={3} className="p-4 rounded-4">
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
            Markets & Store Configuration
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Default Market Region" fullWidth defaultValue="Southwest" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Default Store Manager" fullWidth defaultValue="John Doe" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel control={<Switch />} label="Auto-Assign New Stores" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControlLabel control={<Switch />} label="Enable Store Takeovers Tracking" />
            </Grid>
          </Grid>

          <Box className="text-end mt-4">
            <Button variant="contained" color="primary">
              Save Configurations
            </Button>
          </Box>
        </Paper>
      )}

      {/* 🔔 Notifications */}
      {tab === 3 && (
        <Paper elevation={3} className="p-4 rounded-4">
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
            Notification Preferences
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <FormControlLabel control={<Switch defaultChecked />} label="Email Notifications" />
          <FormControlLabel control={<Switch defaultChecked />} label="System Alerts" />
          <FormControlLabel control={<Switch />} label="SMS Notifications" />
          <FormControlLabel control={<Switch />} label="Weekly Summary Emails" />

          <Box className="text-end mt-4">
            <Button variant="contained" color="primary">
              Update Preferences
            </Button>
          </Box>
        </Paper>
      )}

      {/* 🔌 Integrations */}
      {tab === 4 && (
        <Paper elevation={3} className="p-4 rounded-4">
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
            Integrations & API Keys
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField label="Google Maps API Key" fullWidth defaultValue="•••••••••••••••" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="QuickBooks API Key" fullWidth defaultValue="•••••••••••••••" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Twilio SMS API Key" fullWidth defaultValue="•••••••••••••••" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Internal MIS Key" fullWidth defaultValue="•••••••••••••••" />
            </Grid>
          </Grid>

          <Box className="text-end mt-4">
            <Button variant="contained" color="primary">
              Save Keys
            </Button>
          </Box>
        </Paper>
      )}

      {/* ⚙️ System Preferences */}
      {tab === 5 && (
        <Paper elevation={3} className="p-4 rounded-4">
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
            System Preferences
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
          <FormControlLabel control={<Switch />} label="Enable Auto Refresh" />
          <FormControlLabel control={<Switch />} label="Compact View Mode" />
          <FormControlLabel control={<Switch defaultChecked />} label="Show Tooltips" />

          <Box className="text-end mt-4">
            <Button
              variant="contained"
              color="error"
              startIcon={<DeleteOutlineIcon />}
            >
              Reset to Default
            </Button>
          </Box>
        </Paper>
      )}
    </div>
  );
};

export default SettingsPage;
