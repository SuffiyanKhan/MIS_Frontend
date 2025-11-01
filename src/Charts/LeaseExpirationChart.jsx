import React from "react";
import {
  Box,
  Typography,
  Paper,
  Tooltip,
  IconButton,
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartTooltip, ResponsiveContainer } from "recharts";

const LeaseExpirationChart = () => {
  // 📊 Dummy Data for Expiration Trend
  const leaseExpirations = [
    { year: "2024", count: 12 },
    { year: "2025", count: 18 },
    { year: "2026", count: 9 },
    { year: "2027", count: 7 },
    { year: "2028", count: 15 },
  ];

  return (
    <Box className="mb-5">
      {/* 🟣 Section Header */}
      <Box className="d-flex justify-content-between align-items-center mb-3">
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: "#6F2DA8" }}
        >
          <BarChartIcon sx={{ mr: 1, color: "#6F2DA8" }} />
          Lease Expiration Overview
        </Typography>
        <Tooltip title="Overview of lease expirations by year">
          <IconButton size="small" color="primary">
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>

      {/* 📈 Chart Container */}
      <Paper
        elevation={3}
        className="rounded-4 p-4"
        sx={{
          backgroundColor: "#faf8fc",
          border: "1px solid #e0e0e0",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mb: 2,
            color: "#6F2DA8",
            fontWeight: 500,
          }}
        >
          Lease Expiration Trend by Year
        </Typography>

        {/* 🔹 Responsive Bar Chart */}
        <Box sx={{ height: 320 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={leaseExpirations}
              margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
              <XAxis dataKey="year" stroke="#6F2DA8" />
              <YAxis stroke="#6F2DA8" />
              <RechartTooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderRadius: 8,
                  border: "1px solid #ddd",
                }}
              />
              <Bar
                dataKey="count"
                fill="#6F2DA8"
                radius={[6, 6, 0, 0]}
                barSize={45}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        {/* 🔹 Summary Boxes (Below Chart) */}
        <Box
          className="row g-3 mt-4 justify-content-center"
          sx={{ textAlign: "center" }}
        >
          {leaseExpirations.map((item, i) => (
            <Box
              key={i}
              className="col-6 col-md-2 p-3 rounded-4"
              sx={{
                backgroundColor: "#f2edf7",
                border: "1px solid #e0e0e0",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#6F2DA8",
                  fontWeight: 700,
                  lineHeight: 1.2,
                }}
              >
                {item.count}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  fontWeight: 500,
                }}
              >
                Leases ({item.year})
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default LeaseExpirationChart;
