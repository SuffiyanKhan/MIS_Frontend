import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Box,
  Tooltip,
  IconButton,
  Chip,
  Avatar,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip as RechartTooltip } from "recharts";

const EmployeesTab = () => {
  // Dummy Data
  const roleData = [
    { name: "Store Managers", value: 22 },
    { name: "Sales Associates", value: 340 },
    { name: "Technicians", value: 40 },
    { name: "Support Staff", value: 18 },
  ];
  const COLORS = ["#6F2DA8", "#9C27B0", "#BA68C8", "#CE93D8"];

  const topEmployees = [
    { name: "Emily Johnson", role: "Store Manager", sales: "$45,000", rank: 1 },
    { name: "David Kim", role: "Sales Associate", sales: "$39,200", rank: 2 },
    { name: "Sophia Brown", role: "Technician", sales: "$36,800", rank: 3 },
    { name: "James Wilson", role: "Sales Associate", sales: "$34,500", rank: 4 },
  ];

  return (
    <Paper
      elevation={3}
      className="p-4 rounded-4 mb-4"
      sx={{
        backgroundColor: "#fff",
        border: "1px solid #eee",
      }}
    >
      {/* 🟣 Header */}
      <Box className="d-flex justify-content-between align-items-center mb-3">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "primary.main", display: "flex", alignItems: "center", gap: 1 }}
        >
          <PeopleAltIcon color="primary" /> Market Employees Overview
        </Typography>
        <Tooltip title="Overview of all employees in this market">
          <IconButton color="primary" size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* 🔹 Summary Metrics */}
      <div className="row g-3 mb-4">
        {[
          { label: "Total Employees", value: "420", icon: <PeopleAltIcon sx={{ color: "#6F2DA8" }} /> },
          { label: "Active Employees", value: "398", icon: <WorkOutlineIcon sx={{ color: "#6F2DA8" }} /> },
          { label: "On Leave", value: "12", icon: <AccessTimeIcon sx={{ color: "#6F2DA8" }} /> },
          { label: "New Hires (This Month)", value: "8", icon: <PersonAddAlt1Icon sx={{ color: "#6F2DA8" }} /> },
        ].map((item, i) => (
          <div className="col-6 col-md-3" key={i}>
            <Box
              className="p-3 rounded-4 text-center h-100"
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
              {item.icon}
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#333" }}>
                {item.value}
              </Typography>
              <Typography variant="body2" sx={{ color: "#777" }}>
                {item.label}
              </Typography>
            </Box>
          </div>
        ))}
      </div>

      {/* 🔸 Role Distribution + Top Performers */}
      <div className="row g-4">
        {/* Left: Role Distribution */}
        <div className="col-12 col-md-5">
          <Paper
            elevation={2}
            className="p-3 rounded-4 h-100"
            sx={{
              backgroundColor: "#faf8fc",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: 600, color: "primary.main", display: "flex", alignItems: "center", gap: 1 }}
            >
              <TimelineIcon color="primary" /> Role Distribution
            </Typography>
            <Box sx={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={roleData} dataKey="value" nameKey="name" outerRadius={100} label>
                    {roleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <RechartTooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </div>

        {/* Right: Top Performers */}
        <div className="col-12 col-md-7">
          <Paper
            elevation={2}
            className="p-3 rounded-4 h-100"
            sx={{
              backgroundColor: "#faf8fc",
              border: "1px solid #e0e0e0",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: 600, color: "primary.main", display: "flex", alignItems: "center", gap: 1 }}
            >
              <EmojiEventsIcon color="primary" /> Top Performing Employees
            </Typography>

            <div className="table-responsive">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Employee</th>
                    <th>Role</th>
                    <th>Sales</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {topEmployees.map((emp, index) => (
                    <tr key={index}>
                      <td>
                        <Chip
                          label={`#${emp.rank}`}
                          color={emp.rank === 1 ? "success" : emp.rank === 2 ? "secondary" : "warning"}
                          size="small"
                        />
                      </td>
                      <td className="d-flex align-items-center gap-2">
                        <Avatar sx={{ width: 32, height: 32, bgcolor: "#6F2DA8" }}>
                          {emp.name.charAt(0)}
                        </Avatar>
                        {emp.name}
                      </td>
                      <td>{emp.role}</td>
                      <td>{emp.sales}</td>
                      <td>
                        <Chip
                          label={emp.rank <= 3 ? "Top Performer" : "Active"}
                          color={emp.rank <= 3 ? "success" : "primary"}
                          size="small"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default EmployeesTab;
