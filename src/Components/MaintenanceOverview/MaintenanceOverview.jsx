import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
  IconButton,
  Tooltip,
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

// ===== ICONS =====
import BuildIcon from "@mui/icons-material/Build";
import EngineeringIcon from "@mui/icons-material/Engineering";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import InfoIcon from "@mui/icons-material/Info";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HandymanIcon from "@mui/icons-material/Handyman";

const MaintenanceOverview = () => {
  const [requests] = useState([
    {
      id: "MT001",
      issue: "HVAC system not cooling properly",
      priority: "High",
      status: "In Progress",
      assignedTo: "Mark Reynolds",
      lastUpdated: "2025-10-21",
      estimatedCompletion: "2025-10-29",
    },
    {
      id: "MT002",
      issue: "Front signboard lights flickering",
      priority: "Medium",
      status: "Pending",
      assignedTo: "Alex Green",
      lastUpdated: "2025-10-20",
      estimatedCompletion: "2025-10-30",
    },
    {
      id: "MT003",
      issue: "Wi-Fi router replacement required",
      priority: "Low",
      status: "Completed",
      assignedTo: "David Kim",
      lastUpdated: "2025-10-18",
      estimatedCompletion: "2025-10-18",
    },
    {
      id: "MT004",
      issue: "Door lock malfunction",
      priority: "High",
      status: "Overdue",
      assignedTo: "Michael Chen",
      lastUpdated: "2025-10-10",
      estimatedCompletion: "2025-10-15",
    },
  ]);

  const summary = {
    pending: requests.filter((r) => r.status === "Pending").length,
    inProgress: requests.filter((r) => r.status === "In Progress").length,
    completed: requests.filter((r) => r.status === "Completed").length,
    overdue: requests.filter((r) => r.status === "Overdue").length,
  };

  return (
    <div className="container-fluid py-4">
      {/* ===== HEADER ===== */}
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
        <Box>
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#1e1e2f" }}>
            Maintenance Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Keep track of store maintenance requests and service progress
          </Typography>
        </Box>
        <Tooltip title="Add New Maintenance Request">
          <Button
            variant="contained"
            startIcon={<AddCircleOutlineIcon />}
            sx={{
              backgroundColor: "#6d28d9",
              textTransform: "none",
              borderRadius: 2,
              px: 2.5,
              py: 1,
              "&:hover": { backgroundColor: "#5b21b6" },
            }}
          >
            Add Request
          </Button>
        </Tooltip>
      </div>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-md-3">
          <Card
            sx={{
              background: "linear-gradient(135deg, #fef3c7, #fde68a)",
              borderRadius: 3,
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                <PendingIcon color="warning" className="me-2" />
                Pending
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {summary.pending}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <Card
            sx={{
              background: "linear-gradient(135deg, #e0f2fe, #bae6fd)",
              borderRadius: 3,
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                <EngineeringIcon color="info" className="me-2" />
                In Progress
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {summary.inProgress}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <Card
            sx={{
              background: "linear-gradient(135deg, #dcfce7, #bbf7d0)",
              borderRadius: 3,
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                <CheckCircleIcon color="success" className="me-2" />
                Completed
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {summary.completed}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div className="col-12 col-sm-6 col-md-3">
          <Card
            sx={{
              background: "linear-gradient(135deg, #fee2e2, #fecaca)",
              borderRadius: 3,
              boxShadow: 2,
              "&:hover": { boxShadow: 4 },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
                <ErrorOutlineIcon color="error" className="me-2" />
                Overdue
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                {summary.overdue}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ===== MAINTENANCE TABLE ===== */}
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          border: "1px solid #e5e7eb",
          backgroundColor: "white",
        }}
      >
        <CardContent>
          <Box className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <Typography variant="h6" sx={{ fontWeight: 600, color: "#1e1e2f" }}>
              Recent Maintenance Requests
            </Typography>
            <Tooltip title="Maintenance History">
              <IconButton sx={{ color: "#6d28d9" }}>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Divider sx={{ mb: 2 }} />

          <TableContainer
            component={Paper}
            sx={{
              borderRadius: 3,
              boxShadow: 0,
            }}
          >
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f9fafb" }}>
                  <TableCell><strong>ID</strong></TableCell>
                  <TableCell><strong>Issue</strong></TableCell>
                  <TableCell><strong>Priority</strong></TableCell>
                  <TableCell><strong>Status</strong></TableCell>
                  <TableCell><strong>Assigned To</strong></TableCell>
                  <TableCell><strong>Last Updated</strong></TableCell>
                  <TableCell><strong>Est. Completion</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((req, i) => (
                  <TableRow
                    key={i}
                    hover
                    sx={{
                      transition: "0.2s",
                      "&:hover": { backgroundColor: "#f3e8ff" },
                    }}
                  >
                    <TableCell>{req.id}</TableCell>
                    <TableCell>{req.issue}</TableCell>
                    <TableCell>
                      <Chip
                        label={req.priority}
                        color={
                          req.priority === "High"
                            ? "error"
                            : req.priority === "Medium"
                            ? "warning"
                            : "default"
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={req.status}
                        color={
                          req.status === "Completed"
                            ? "success"
                            : req.status === "Pending"
                            ? "default"
                            : req.status === "In Progress"
                            ? "info"
                            : "error"
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell>
                      <Box className="d-flex align-items-center gap-2">
                        <Avatar
                          sx={{
                            bgcolor: "#6d28d9",
                            width: 30,
                            height: 30,
                          }}
                        >
                          <HandymanIcon fontSize="small" />
                        </Avatar>
                        <Typography variant="body2">{req.assignedTo}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{req.lastUpdated}</TableCell>
                    <TableCell>
                      <CalendarMonthIcon
                        fontSize="small"
                        color="action"
                        className="me-1"
                      />
                      {req.estimatedCompletion}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default MaintenanceOverview;
