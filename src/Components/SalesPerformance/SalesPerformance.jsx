import React from "react";
import {
  Paper,
  Typography,
  Divider,
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

const SalesPerformance = () => {
  // 🔹 Demo data (replace later with API data)
  const monthlySalesData = [
    { month: "Jan", sales: 95000 },
    { month: "Feb", sales: 108000 },
    { month: "Mar", sales: 125000 },
    { month: "Apr", sales: 138000 },
    { month: "May", sales: 142000 },
    { month: "Jun", sales: 156000 },
  ];

  const marketSalesData = [
    { market: "Arizona", sales: 120000 },
    { market: "Texas", sales: 150000 },
    { market: "Florida", sales: 110000 },
    { market: "Nevada", sales: 95000 },
    { market: "Dallas", sales: 130000 },
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
        Sales Performance
      </Typography>
      <Divider sx={{ mb: 3 }} />

      <div className="row g-4">
        {/* Left: Line Chart - Monthly Sales Trend */}
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
              🧾 Monthly Sales Trend
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#6F2DA8"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                  name="Sales ($)"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </div>

        {/* Right: Bar Chart - Market-wise Sales */}
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
              🏬 Market-wise Sales Comparison
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={marketSalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="market" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey="sales"
                  fill="#6F2DA8"
                  radius={[6, 6, 0, 0]}
                  barSize={40}
                  name="Sales ($)"
                />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

export default SalesPerformance;
