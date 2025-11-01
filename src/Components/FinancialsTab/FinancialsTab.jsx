import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Tooltip,
  IconButton,
  Grid,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import StorefrontIcon from "@mui/icons-material/Storefront";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartTooltip,
  Legend,
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

const FinancialsTab = () => {
  // 📈 Dummy Monthly Sales Data
  const monthlySales = [
    { month: "Jan", sales: 105000 },
    { month: "Feb", sales: 125000 },
    { month: "Mar", sales: 132000 },
    { month: "Apr", sales: 118000 },
    { month: "May", sales: 145000 },
    { month: "Jun", sales: 157000 },
    { month: "Jul", sales: 161000 },
    { month: "Aug", sales: 149000 },
    { month: "Sep", sales: 165000 },
    { month: "Oct", sales: 171000 },
    { month: "Nov", sales: 180000 },
    { month: "Dec", sales: 190000 },
  ];

  // 🏬 Store-wise Comparison Data
  const storeComparison = [
    { store: "Downtown", revenue: 82000 },
    { store: "North Plaza", revenue: 76000 },
    { store: "Lakeside", revenue: 91000 },
    { store: "Metro Center", revenue: 100000 },
    { store: "Harbor View", revenue: 87000 },
  ];

  return (
    <Box>
      {/* 🟣 Financial Overview Header */}
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 700,
          color: "#6F2DA8",
        }}
      >
        <MonetizationOnIcon sx={{ mr: 1, color: "#6F2DA8", fontSize: 28 }} />
        Market Financial Performance
      </Typography>

      <div className="row">
        {/* 📈 Monthly Sales Trend */}
        <div className="col-12 col-lg-6 mb-4">
          <Paper
            elevation={3}
            className="p-4 rounded-4 h-100"
            sx={{ backgroundColor: "#faf8fc", border: "1px solid #e0e0e0" }}
          >
            <Box className="d-flex justify-content-between align-items-center mb-3">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#6F2DA8" }}
              >
                <TrendingUpIcon sx={{ mr: 1, color: "#6F2DA8" }} />
                Monthly Sales Trend
              </Typography>
              <Tooltip title="Displays overall monthly revenue trend for the market">
                <IconButton size="small" color="primary">
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Responsive Line Chart */}
            <Box sx={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={monthlySales}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                  <XAxis dataKey="month" stroke="#6F2DA8" />
                  <YAxis stroke="#6F2DA8" />
                  <RechartTooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      border: "1px solid #ddd",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#6F2DA8"
                    strokeWidth={3}
                    dot={{ r: 5, fill: "#6F2DA8" }}
                    activeDot={{ r: 7 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </div>

        {/* 📊 Store-wise Comparison */}
        <div className="col-12 col-lg-6 mb-4">
          <Paper
            elevation={3}
            className="p-4 rounded-4 h-100"
            sx={{ backgroundColor: "#faf8fc", border: "1px solid #e0e0e0" }}
          >
            <Box className="d-flex justify-content-between align-items-center mb-3">
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, color: "#6F2DA8" }}
              >
                <BarChartIcon sx={{ mr: 1, color: "#6F2DA8" }} />
                Store-wise Revenue Comparison
              </Typography>
              <Tooltip title="Compares performance across various stores">
                <IconButton size="small" color="primary">
                  <InfoOutlinedIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Responsive Bar Chart */}
            <Box sx={{ height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={storeComparison}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                  <XAxis dataKey="store" stroke="#6F2DA8" />
                  <YAxis stroke="#6F2DA8" />
                  <RechartTooltip
                    contentStyle={{
                      backgroundColor: "#fff",
                      borderRadius: 8,
                      border: "1px solid #ddd",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="revenue"
                    fill="#6F2DA8"
                    barSize={45}
                    radius={[6, 6, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </div>
      </div>

      {/* 🔹 Summary Insights Section */}
      <Paper
        elevation={3}
        className="p-4 rounded-4"
        sx={{ backgroundColor: "#faf8fc", border: "1px solid #e0e0e0" }}
      >
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 600, color: "#6F2DA8", mb: 3 }}
        >
          <TrendingFlatIcon sx={{ mr: 1, color: "#6F2DA8" }} />
          Key Financial Insights
        </Typography>

        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <Box
              className="p-3 rounded-4 text-center"
              sx={{
                background: "#f2edf7",
                border: "1px solid #e0e0e0",
              }}
            >
              <StorefrontIcon sx={{ color: "#6F2DA8", fontSize: 28, mb: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Highest Performing Store
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#6F2DA8" }}>
                Metro Center ($100k)
              </Typography>
            </Box>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <Box
              className="p-3 rounded-4 text-center"
              sx={{
                background: "#f2edf7",
                border: "1px solid #e0e0e0",
              }}
            >
              <MonetizationOnIcon sx={{ color: "#6F2DA8", fontSize: 28, mb: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Average Revenue per Store
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#6F2DA8" }}>
                $87,800
              </Typography>
            </Box>
          </div>

          <div className="col-12 col-md-4 mb-3">
            <Box
              className="p-3 rounded-4 text-center"
              sx={{
                background: "#f2edf7",
                border: "1px solid #e0e0e0",
              }}
            >
              <TrendingUpIcon sx={{ color: "#6F2DA8", fontSize: 28, mb: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Latest Month Growth
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "#6F2DA8" }}>
                +5.4%
              </Typography>
            </Box>
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default FinancialsTab;
