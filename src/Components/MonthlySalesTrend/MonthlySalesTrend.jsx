import React from "react";
import {
    Paper,
    Typography,
    Box,
    Tooltip,
    IconButton,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const MonthlySalesTrend = ({
    title = "Monthly Sales Trend",
    currentRevenue = 1200000,
    trendPercentage = 8.4,
    isUp = true,
}) => {
    // 📊 Dummy sales data (you can replace this with API data later)
    const data = [
        { month: "Jan", sales: 850000 },
        { month: "Feb", sales: 920000 },
        { month: "Mar", sales: 970000 },
        { month: "Apr", sales: 1000000 },
        { month: "May", sales: 1080000 },
        { month: "Jun", sales: 1150000 },
        { month: "Jul", sales: 1120000 },
        { month: "Aug", sales: 1190000 },
        { month: "Sep", sales: 1210000 },
        { month: "Oct", sales: 1240000 },
    ];

    return (
        <Paper
            elevation={3}
            className="p-4 rounded-4 h-100 text-center"
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
            {/* 🔹 Header */}
            <Box className="d-flex justify-content-between align-items-center mb-3">
                <Box className="d-flex align-items-center">
                    <TrendingUpIcon sx={{ fontSize: 36, color: "#6F2DA8", mr: 1 }} />
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: "primary.main",
                        }}
                    >
                        {title}
                    </Typography>
                </Box>
                <Tooltip title="View sales analytics for the current market">
                    <IconButton size="small" color="primary">
                        <InfoOutlinedIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            </Box>

            {/* 💰 Current Revenue */}
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    color: "#6F2DA8",
                    mb: 1,
                }}
            >
                ${currentRevenue.toLocaleString()}
            </Typography>

            <Typography
                variant="caption"
                color="text.secondary"
                sx={{ display: "block", mb: 2 }}
            >
                Current Month Revenue
            </Typography>

            {/* 📊 Trend Info */}
            <Box
                className="d-flex justify-content-center align-items-center gap-2 mb-4"
                sx={{
                    backgroundColor: isUp
                        ? "rgba(76, 175, 80, 0.1)"
                        : "rgba(244, 67, 54, 0.1)",
                    color: isUp ? "#2e7d32" : "#c62828",
                    borderRadius: "50px",
                    p: "6px 16px",
                    display: "inline-flex",
                    alignItems: "center",
                    transition: "0.3s",
                    "&:hover": {
                        transform: "scale(1.05)",
                    },
                }}
            >
                {isUp ? (
                    <ArrowUpwardIcon fontSize="small" sx={{ mr: 0.5 }} />
                ) : (
                    <ArrowDownwardIcon fontSize="small" sx={{ mr: 0.5 }} />
                )}
                <Typography
                    variant="body2"
                    sx={{
                        fontWeight: 600,
                    }}
                >
                    {isUp ? "+" : ""}
                    {trendPercentage}% vs Last Month
                </Typography>
            </Box>

            {/* 📈 Real Chart */}
            <Box sx={{ width: "100%", height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="month" tick={{ fill: "#666" }} />
                        <YAxis tick={{ fill: "#666" }} />
                        <RechartsTooltip
                            contentStyle={{
                                backgroundColor: "#fff",
                                borderRadius: 8,
                                border: "1px solid #ddd",
                                color: "#333",
                            }}
                        />
                        <Line
                            type="monotone"
                            dataKey="sales"
                            stroke="#6F2DA8"
                            strokeWidth={3}
                            dot={{ r: 4, strokeWidth: 2, fill: "#9C27B0" }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </Box>
        </Paper>
    );
};

export default MonthlySalesTrend;
