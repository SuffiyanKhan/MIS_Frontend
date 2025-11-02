import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Divider,
  IconButton,
  Grid,
  Switch,
  Button,
  Avatar,
  Paper,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  TextField,
  MenuItem,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import SecurityIcon from "@mui/icons-material/Security";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BlockIcon from "@mui/icons-material/Block";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

const ManageUserAccessModal = ({ open, onClose, user }) => {
  const [role, setRole] = useState(user?.role || "Store Manager");
  const [isBlocked, setIsBlocked] = useState(user?.status === "Blocked");
  const [restrictedAccess, setRestrictedAccess] = useState(false);
  const [permissions, setPermissions] = useState({
    general: { view: true, add: false, edit: false, delete: false },
    leasing: { view: true, add: true, edit: false, delete: false },
    financials: { view: true, add: true, edit: true, delete: false },
    takeover: { view: true, add: true, edit: true, delete: false },
    employees: { view: true, add: false, edit: false, delete: false },
    maintenance: { view: true, add: false, edit: false, delete: false },
    utilities: { view: true, add: false, edit: false, delete: false },
    notifications: { view: true, add: false, edit: false, delete: false },
    settings: { view: true, add: false, edit: false, delete: false },
  });

  const handleToggle = (module, field) => {
    setPermissions((prev) => ({
      ...prev,
      [module]: { ...prev[module], [field]: !prev[module][field] },
    }));
  };

  const handleSave = () => {
    console.log({
      user: user?.name,
      role,
      isBlocked,
      restrictedAccess,
      permissions,
    });
    onClose();
  };

  const moduleDescriptions = {
    general: "Access to market dashboards and summary data.",
    leasing: "Manage leasing agreements, rent terms, and renewals.",
    financials: "View or modify financial reports and sales data.",
    takeover: "Handle store takeover entries, ownership logs, and approvals.",
    employees: "Manage employee records and performance data.",
    maintenance: "View and create maintenance tasks or issues.",
    utilities: "Manage store utilities like water, internet, and electricity.",
    notifications: "Access internal alerts, reminders, and system logs.",
    settings: "Modify system configurations, integrations, and company info.",
  };

  const roleOptions = [
    "Store Manager",
    "Assistant Manager",
    "CSR",
    "Inventory Lead",
    "Regional Manager",
    "Super Admin",
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "92%",
          maxWidth: 950,
          bgcolor: "#fff",
          borderRadius: 4,
          boxShadow: 24,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          maxHeight: "90vh",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            px: 4,
            py: 3,
            borderBottom: "1px solid #eee",
            background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
            color: "#fff",
          }}
          className="d-flex justify-content-between align-items-center"
        >
          <Box className="d-flex align-items-center gap-2">
            <SecurityIcon sx={{ fontSize: 34 }} />
            <Box>
              <Typography variant="h6" fontWeight={700}>
                User Role & Access Control
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Manage permissions, status, and account-level restrictions.
              </Typography>
            </Box>
          </Box>
          <IconButton onClick={onClose} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* BODY */}
        <Box sx={{ p: 4, overflowY: "auto", flex: 1 }}>
          {/* USER CARD */}
          <Paper
            elevation={2}
            className="p-3 rounded-4 mb-4 d-flex align-items-center justify-content-between flex-wrap"
            sx={{
              background: "#f9f6fb",
              border: "1px solid #e0e0e0",
            }}
          >
            <Box className="d-flex align-items-center gap-3">
              <Avatar
                src={user?.avatar}
                alt={user?.name}
                sx={{ width: 65, height: 65 }}
              />
              <Box>
                <Typography variant="subtitle1" fontWeight={600}>
                  {user?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Store: {user?.store || "N/A"}
                </Typography>
              </Box>
            </Box>

            <Chip
              label={isBlocked ? "Blocked" : "Active"}
              color={isBlocked ? "error" : "success"}
              icon={isBlocked ? <BlockIcon /> : <CheckCircleIcon />}
              sx={{ fontWeight: 600 }}
            />
          </Paper>

          {/* ROLE MANAGEMENT */}
          <Paper elevation={1} className="p-3 rounded-4 mb-4">
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
              Role Management
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  select
                  label="Assigned Role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  fullWidth
                >
                  {roleOptions.map((r) => (
                    <MenuItem key={r} value={r}>
                      {r}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12} md={6}>
                <Tooltip title="Temporarily disable access to the system.">
                  <Box className="d-flex align-items-center gap-2">
                    <Typography>Block User</Typography>
                    <Switch
                      checked={isBlocked}
                      onChange={() => setIsBlocked(!isBlocked)}
                      color="error"
                    />
                  </Box>
                </Tooltip>
              </Grid>

              <Grid item xs={12}>
                <Tooltip title="Restrict this user to specific stores or regions.">
                  <Box className="d-flex align-items-center gap-2">
                    <Typography>Restrict Access (Store-level only)</Typography>
                    <Switch
                      checked={restrictedAccess}
                      onChange={() => setRestrictedAccess(!restrictedAccess)}
                      color="warning"
                    />
                  </Box>
                </Tooltip>
              </Grid>
            </Grid>
          </Paper>

          {/* PERMISSIONS */}
          <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}>
            Module Permissions
          </Typography>

          {Object.keys(permissions).map((module) => (
            <Accordion key={module} sx={{ mb: 2, borderRadius: "12px !important" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box className="d-flex align-items-center justify-content-between w-100">
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{ textTransform: "capitalize" }}
                  >
                    {module}
                  </Typography>
                  <Tooltip title={moduleDescriptions[module]}>
                    <InfoOutlinedIcon color="action" />
                  </Tooltip>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                <Typography variant="body2" sx={{ mb: 2, color: "text.secondary" }}>
                  {moduleDescriptions[module]}
                </Typography>
                <Grid container spacing={2} sx={{ textAlign: "center" }}>
                  {["view", "add", "edit", "delete"].map((perm, idx) => (
                    <Grid item xs={6} sm={3} key={idx}>
                      <Typography
                        variant="body2"
                        sx={{ textTransform: "capitalize", mb: 1, fontWeight: 500 }}
                      >
                        {perm}
                      </Typography>
                      <Switch
                        checked={permissions[module][perm]}
                        onChange={() => handleToggle(module, perm)}
                        color={
                          perm === "delete"
                            ? "error"
                            : perm === "edit"
                            ? "warning"
                            : "primary"
                        }
                      />
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* FOOTER */}
        <Divider />
        <Box
          className="d-flex justify-content-end align-items-center gap-2 p-3"
          sx={{
            borderTop: "1px solid #eee",
            backgroundColor: "#faf8fc",
          }}
        >
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="contained"
            startIcon={<LockOpenIcon />}
            sx={{
              backgroundColor: "#6F2DA8",
              "&:hover": { backgroundColor: "#5b2392" },
            }}
            onClick={handleSave}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ManageUserAccessModal;
