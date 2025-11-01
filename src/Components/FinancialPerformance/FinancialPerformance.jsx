import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const FinancialPerformance = () => {
  // Demo data (can be replaced with real API data later)
  const revenueExpenseData = [
    { month: "Jan", revenue: 120000, expense: 80000 },
    { month: "Feb", revenue: 135000, expense: 95000 },
    { month: "Mar", revenue: 150000, expense: 97000 },
    { month: "Apr", revenue: 165000, expense: 102000 },
    { month: "May", revenue: 172000, expense: 108000 },
    { month: "Jun", revenue: 180000, expense: 112000 },
  ];

  const marketRevenueData = [
    { market: "Arizona", revenue: 120000 },
    { market: "Texas", revenue: 145000 },
    { market: "Florida", revenue: 110000 },
    { market: "Nevada", revenue: 95000 },
    { market: "Dallas", revenue: 125000 },
  ];

  return (
    <Paper
      elevation={3}
      className="p-4 rounded-4 mb-4"
      sx={{
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "primary.main",
          fontSize: "1.5rem",
        }}
      >
        Financial Performance
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <div className="row g-4">
        {/* Left: Line Chart - Revenue vs Expense */}
        <div className="col-12 col-md-6">
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              p: 2,
              height: "100%",
              background: "#fff",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
            >
              📈 Revenue vs Expense
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueExpenseData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6F2DA8"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="expense"
                  stroke="#E01B24"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </div>

        {/* Right: Bar Chart - Market-wise Revenue */}
        <div className="col-12 col-md-6">
          <Paper
            elevation={2}
            sx={{
              borderRadius: 3,
              p: 2,
              height: "100%",
              background: "#fff",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
            >
              📊 Market-wise Revenue
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketRevenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="market" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="revenue"
                  fill="#6F2DA8"
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default FinancialPerformance;
