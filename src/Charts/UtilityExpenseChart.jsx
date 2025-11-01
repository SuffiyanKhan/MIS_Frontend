import React from "react";
import {
  Paper,
  Typography,
  Box,
  Tooltip,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartTooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";

const UtilityExpenseChart = () => {
  const data = [
    { month: "Jan", electricity: 4200, water: 1100, internet: 800, security: 2000 },
    { month: "Feb", electricity: 3900, water: 1150, internet: 820, security: 2100 },
    { month: "Mar", electricity: 4100, water: 1200, internet: 830, security: 2050 },
    { month: "Apr", electricity: 4500, water: 1250, internet: 850, security: 2200 },
    { month: "May", electricity: 4700, water: 1280, internet: 880, security: 2150 },
    { month: "Jun", electricity: 4900, water: 1300, internet: 890, security: 2250 },
    { month: "Jul", electricity: 5200, water: 1350, internet: 900, security: 2300 },
    { month: "Aug", electricity: 5100, water: 1370, internet: 910, security: 2350 },
    { month: "Sep", electricity: 4800, water: 1320, internet: 920, security: 2280 },
    { month: "Oct", electricity: 5000, water: 1330, internet: 940, security: 2400 },
  ];

  return (
    <Paper
      elevation={3}
      className="p-4 rounded-4"
      sx={{
        background: "linear-gradient(135deg, #faf8fc 0%, #ffffff 100%)",
        border: "1px solid #e0e0e0",
      }}
    >
      {/* 🔹 Header */}
      <Box className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#6F2DA8",
          }}
        >
          📊 Utility Expense Trend
        </Typography>
        <Tooltip title="Monthly comparison of utility costs">
          <IconButton color="primary" size="small">
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* 📈 Chart Section */}
      <Box sx={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            {/* Theme Gradients */}
            <defs>
              <linearGradient id="colorElectricity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6F2DA8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#9C27B0" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorWater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9575CD" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#D1C4E9" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorInternet" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#AB47BC" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#E1BEE7" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorSecurity" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8E24AA" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#F3E5F5" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.25} />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <RechartTooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                border: "1px solid #ddd",
              }}
            />
            <Legend />

            {/* Bars */}
            <Bar dataKey="electricity" fill="url(#colorElectricity)" barSize={18} radius={[8, 8, 0, 0]} />
            <Bar dataKey="water" fill="url(#colorWater)" barSize={18} radius={[8, 8, 0, 0]} />
            <Bar dataKey="internet" fill="url(#colorInternet)" barSize={18} radius={[8, 8, 0, 0]} />
            <Bar dataKey="security" fill="url(#colorSecurity)" barSize={18} radius={[8, 8, 0, 0]} />

            {/* Line for Total */}
            <Line
              type="monotone"
              dataKey={(d) =>
                d.electricity + d.water + d.internet + d.security
              }
              stroke="#6F2DA8"
              strokeWidth={3}
              dot={{ r: 4, fill: "#6F2DA8" }}
              activeDot={{ r: 6 }}
              name="Total Expense"
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      {/* 📊 Footer Summary */}
      <Box className="text-center mt-3">
        <Typography variant="body2" color="text.secondary">
          Average Monthly Utility Cost:{" "}
          <strong style={{ color: "#6F2DA8" }}>
            $
            {Math.round(
              data.reduce(
                (a, b) => a + b.electricity + b.water + b.internet + b.security,
                0
              ) / data.length
            ).toLocaleString()}
          </strong>
        </Typography>
      </Box>
    </Paper>
  );
};

export default UtilityExpenseChart;
