import React from "react";
import {
    Paper,
    Typography,
    Divider,
    Box,
    Grid,
    IconButton,
    Tooltip,
    Chip,
    Button,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BuildIcon from "@mui/icons-material/Build";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { PieChart, Pie, Cell, Tooltip as RechartTooltip, ResponsiveContainer, Legend } from "recharts";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

const MaintenanceTab = () => {
    const COLORS = ["#6F2DA8", "#9575CD", "#FBC02D", "#E53935"];
    const data = [
        { name: "Resolved", value: 42 },
        { name: "Pending", value: 18 },
        { name: "In Progress", value: 9 },
        { name: "Urgent", value: 6 },
    ];

    const summaryCards = [
        {
            label: "Pending Requests",
            value: 18,
            icon: <PendingActionsIcon fontSize="large" />,
            color: "#FBC02D",
            bg: "rgba(251, 192, 45, 0.1)",
        },
        {
            label: "Resolved",
            value: 42,
            icon: <CheckCircleIcon fontSize="large" />,
            color: "#43A047",
            bg: "rgba(67, 160, 71, 0.1)",
        },
        {
            label: "In Progress",
            value: 9,
            icon: <EngineeringIcon fontSize="large" />,
            color: "#1E88E5",
            bg: "rgba(30, 136, 229, 0.1)",
        },
        {
            label: "Urgent Issues",
            value: 6,
            icon: <WarningAmberIcon fontSize="large" />,
            color: "#E53935",
            bg: "rgba(229, 57, 53, 0.1)",
        },
    ];

    const tableData = [
        {
            issue: "HVAC System Failure",
            store: "Store #203",
            status: "In Progress",
            date: "Oct 22, 2025",
            assigned: "Michael Lee",
        },
        {
            issue: "Broken Display Fixture",
            store: "Store #117",
            status: "Resolved",
            date: "Oct 10, 2025",
            assigned: "John Doe",
        },
        {
            issue: "Water Leakage",
            store: "Store #214",
            status: "Pending",
            date: "Oct 29, 2025",
            assigned: "Alex Smith",
        },
        {
            issue: "Power Outage",
            store: "Store #305",
            status: "Urgent",
            date: "Oct 30, 2025",
            assigned: "Samantha Brown",
        },
    ];

    return (
        <Paper
            elevation={3}
            className="p-4 rounded-4 mb-4"
            sx={{ backgroundColor: "#fff", border: "1px solid #eee" }}
        >
            {/* 🔹 Header */}
            <Box className="d-flex justify-content-between align-items-center mb-3 flex-wrap">
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#6F2DA8", mb: { xs: 2, md: 0 } }}
                >
                    🧰 Maintenance Overview
                </Typography>
                <Box className="d-flex align-items-center gap-2">
                    <Tooltip title="Add new maintenance request">
                        <Button
                            variant="contained"
                            startIcon={<AddCircleOutlineIcon />}
                            sx={{
                                background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
                                borderRadius: "50px",
                                textTransform: "none",
                                px: 3,
                            }}
                        >
                            Add Request
                        </Button>
                    </Tooltip>
                    <Tooltip title="View help info">
                        <IconButton color="primary">
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* 🔸 Summary Cards */}
            <div className="row g-3 mb-4">
                {summaryCards.map((card, i) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={i}>
                        <Paper
                            elevation={2}
                            className="p-3 h-100 rounded-4"
                            sx={{
                                backgroundColor: card.bg,
                                color: card.color,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box>{card.icon}</Box>
                            <Box textAlign="right">
                                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                                    {card.value}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                    {card.label}
                                </Typography>
                            </Box>
                        </Paper>
                    </div>
                ))}
            </div>

            {/* 🔹 Table Section */}
            <Box className="mt-4">
                <Typography
                    variant="h6"
                    sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}
                >
                    Active Maintenance Requests
                </Typography>

                <div className="table-responsive">
                    <table className="table table-bordered align-middle text-center">
                        <thead style={{ backgroundColor: "#f9f9fb" }}>
                            <tr>
                                <th>Issue</th>
                                <th>Store</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Assigned To</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row, i) => (
                                <tr key={i}>
                                    <td>{row.issue}</td>
                                    <td>{row.store}</td>
                                    <td>
                                        <Chip
                                            label={row.status}
                                            color={
                                                row.status === "Resolved"
                                                    ? "success"
                                                    : row.status === "Pending"
                                                        ? "warning"
                                                        : row.status === "Urgent"
                                                            ? "error"
                                                            : "primary"
                                            }
                                            size="small"
                                        />
                                    </td>
                                    <td>{row.date}</td>
                                    <td>{row.assigned}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Box>

            {/* 🟣 Pie Chart Section */}
            <div className="row">
                <div className="col-md-6">
                    {/* 🕓 Maintenance History Summary */}
                    <Box className="mt-5">
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 3,
                                fontWeight: 600,
                                color: "#6F2DA8",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            Maintenance History Summary
                        </Typography>

                        <Paper
                            elevation={3}
                            className="p-4 rounded-4"
                            sx={{
                                background: "linear-gradient(145deg, #ffffff, #f9f7fc)",
                                border: "1px solid #eee",
                            }}
                        >
                            <div className="row g-3">
                                {/* 🧾 Last Major Repairs */}
                                <div className="col-12 col-md-6">
                                    <Box
                                        className="p-3 rounded-4 h-100"
                                        sx={{
                                            backgroundColor: "#faf8fc",
                                            border: "1px solid #e0e0e0",
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ color: "#6F2DA8", fontWeight: 600, mb: 1 }}
                                        >
                                            <BuildIcon sx={{ fontSize: 20, mr: 0.5, color: "#6F2DA8" }} />
                                            Major Repairs
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            HVAC Replacement (Mar 2025)
                                            <br />
                                            Store 214 Plumbing Fix (Aug 2025)
                                            <br />
                                            Roof Maintenance (Jan 2025)
                                        </Typography>
                                    </Box>
                                </div>

                                {/* ⏱️ Average Resolution Time */}
                                <div className="col-12 col-md-6">
                                    <Box
                                        className="p-3 rounded-4 h-100"
                                        sx={{
                                            backgroundColor: "#faf8fc",
                                            border: "1px solid #e0e0e0",
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ color: "#6F2DA8", fontWeight: 600, mb: 1 }}
                                        >
                                            <AccessTimeIcon sx={{ fontSize: 20, mr: 0.5, color: "#6F2DA8" }} />
                                            Avg. Resolution Time
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: "#333" }}>
                                            3.2 Days
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Based on last 50 tickets
                                        </Typography>
                                    </Box>
                                </div>

                                {/* ⚙️ Vendors Involved */}
                                <div className="col-12 col-md-6">
                                    <Box
                                        className="p-3 rounded-4 h-100"
                                        sx={{
                                            backgroundColor: "#faf8fc",
                                            border: "1px solid #e0e0e0",
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{ color: "#6F2DA8", fontWeight: 600, mb: 1 }}
                                        >
                                            <EngineeringIcon sx={{ fontSize: 20, mr: 0.5, color: "#6F2DA8" }} />
                                            Vendors
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            MetroFix Inc.
                                            <br />
                                            Cooling Pros
                                            <br />
                                            SafeTech Security
                                        </Typography>
                                    </Box>
                                </div>

                                {/* 💰 Avg. Monthly Cost */}
                                <div className="col-12 col-md-6">
                                    <Box
                                        className="p-3 rounded-4 h-100 text-center"
                                        sx={{
                                            backgroundColor: "#faf8fc",
                                            border: "1px solid #e0e0e0",
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: "#6F2DA8",
                                                fontWeight: 600,
                                                mb: 1,
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                gap: 0.5,
                                            }}
                                        >
                                            <MonetizationOnIcon sx={{ fontSize: 20, color: "#6F2DA8" }} />
                                            Avg. Monthly Cost
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            sx={{ fontWeight: "bold", color: "#2e7d32" }}
                                        >
                                            $8,900
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Maintenance Expenses
                                        </Typography>
                                    </Box>
                                </div>
                            </div>
                        </Paper>
                    </Box>
                </div>
                <div className="col-md-6">
                    <Box className="mt-5">
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 600,
                                color: "#6F2DA8",
                                mb: 3,
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            Maintenance Status Distribution
                        </Typography>

                        <Paper
                            elevation={2}
                            className="p-4 rounded-4"
                            sx={{
                                background: "linear-gradient(145deg, #ffffff, #f6f3fa)",
                                border: "1px solid #eee",
                                transition: "all 0.3s ease",
                            }}
                        >
                            <Box
                                className="d-flex justify-content-center align-items-center"
                                sx={{
                                    height: { xs: 280, md: 360 },
                                    width: "100%",
                                }}
                            >
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <defs>
                                            <linearGradient id="pieGradient" x1="0" y1="0" x2="1" y2="1">
                                                <stop offset="0%" stopColor="#6F2DA8" stopOpacity={0.9} />
                                                <stop offset="100%" stopColor="#B47BFF" stopOpacity={0.7} />
                                            </linearGradient>
                                        </defs>

                                        <Pie
                                            data={data}
                                            dataKey="value"
                                            nameKey="name"
                                            cx="50%"
                                            cy="50%"
                                            outerRadius={120}
                                            innerRadius={70}
                                            paddingAngle={4}
                                            cornerRadius={6}
                                            labelLine={false}
                                            label={({ name, percent }) =>
                                                `${name} ${(percent * 100).toFixed(0)}%`
                                            }
                                        >
                                            {data.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={COLORS[index] || "url(#pieGradient)"}
                                                    stroke="#fff"
                                                    strokeWidth={2}
                                                />
                                            ))}
                                        </Pie>

                                        <RechartTooltip
                                            contentStyle={{
                                                backgroundColor: "#fff",
                                                borderRadius: "12px",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                                border: "none",
                                            }}
                                        />
                                        <Legend
                                            verticalAlign="bottom"
                                            align="center"
                                            iconType="circle"
                                            wrapperStyle={{
                                                paddingTop: 20,
                                                fontSize: "0.9rem",
                                                color: "#555",
                                            }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                        </Paper>
                    </Box>
                </div>
            </div>
        </Paper>
    );
};

export default MaintenanceTab;
