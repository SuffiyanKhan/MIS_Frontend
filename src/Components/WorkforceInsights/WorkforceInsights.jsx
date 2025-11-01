import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import GroupWorkIcon from "@mui/icons-material/GroupWork"; // for Employee Role Distribution
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // for Top Performing Managers

const WorkforceInsights = () => {
  // 🔹 Demo data
  const employeeRoles = [
    { name: "Store Managers", value: 40 },
    { name: "District Managers", value: 15 },
    { name: "Market Managers", value: 8 },
    { name: "Sales Associates", value: 90 },
    { name: "Support Staff", value: 25 },
  ];

  const COLORS = ["#6F2DA8", "#9C27B0", "#BA68C8", "#D1A3FF", "#E1BEE7"];

  const topManagers = [
    { id: 1, name: "John Doe", market: "Arizona", performance: "98%" },
    { id: 2, name: "Jane Smith", market: "Texas", performance: "95%" },
    { id: 3, name: "Robert Brown", market: "Florida", performance: "93%" },
    { id: 4, name: "Lisa Johnson", market: "Dallas", performance: "91%" },
    { id: 5, name: "Mark Wilson", market: "Nevada", performance: "89%" },
  ];

  return (
    <Paper
      elevation={3}
      className="p-4 rounded-4 mb-4"
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      {/* Section Header */}
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "primary.main",
          fontSize: "1.5rem",
        }}
      >
        Workforce Insights
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <div className="row g-4">
        {/* Left: Employee Role Distribution */}
        <div className="col-12 col-md-4">
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              p: 2,
              height: "100%",
              background: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <GroupWorkIcon color="primary" />
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: "text.primary",
                }}
              >
                Employee Role Distribution
              </Typography>
            </Box>

            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={employeeRoles}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {employeeRoles.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </div>

        {/* Right: Top Performing Managers */}
        <div className="col-12 col-md-8">
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              p: 2,
              height: "100%",
              background: "#fff",
            }}
          >
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <EmojiEventsIcon color="primary" />
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "text.primary" }}
              >
                Top Performing Managers
              </Typography>
            </Box>

            <Table size="small">
              <TableHead sx={{ backgroundColor: "primary.main" }}>
                <TableRow>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                    #
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                    Manager
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                    Market
                  </TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: 600 }}>
                    Performance
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {topManagers.map((manager) => (
                  <TableRow key={manager.id} hover>
                    <TableCell>{manager.id}</TableCell>
                    <TableCell>{manager.name}</TableCell>
                    <TableCell>{manager.market}</TableCell>
                    <TableCell>{manager.performance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default WorkforceInsights;
