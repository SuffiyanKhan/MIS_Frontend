import React from "react";
import {
    Paper,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Divider,
    Chip,
    IconButton,
    Tooltip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import OpacityIcon from "@mui/icons-material/Opacity";
import WifiIcon from "@mui/icons-material/Wifi";
import SecurityIcon from "@mui/icons-material/Security";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import UtilityExpenseChart from "../../Charts/UtilityExpenseChart";

function MarketUtilitiesOverview() {
    const utilities = [
        {
            name: "Electricity",
            icon: <ElectricBoltIcon sx={{ color: "#fdd835" }} />,
            cost: 4200,
            lastBill: "Oct 20, 2025",
            vendor: "Arizona Power Co.",
            trend: -3.2,
        },
        {
            name: "Water",
            icon: <OpacityIcon sx={{ color: "#2196f3" }} />,
            cost: 1300,
            lastBill: "Oct 18, 2025",
            vendor: "City Water Works",
            trend: 1.5,
        },
        {
            name: "Internet",
            icon: <WifiIcon sx={{ color: "#6f2da8" }} />,
            cost: 800,
            lastBill: "Oct 22, 2025",
            vendor: "Comcast Fiber",
            trend: -0.8,
        },
        {
            name: "Security",
            icon: <SecurityIcon sx={{ color: "#43a047" }} />,
            cost: 2200,
            lastBill: "Oct 10, 2025",
            vendor: "SecureOne Inc.",
            trend: 2.1,
        },
        {
            name: "HVAC / Cooling",
            icon: <LocalFireDepartmentIcon sx={{ color: "#ef6c00" }} />,
            cost: 3100,
            lastBill: "Oct 12, 2025",
            vendor: "CoolAir Systems",
            trend: 4.2,
        },
        {
            name: "Cleaning Services",
            icon: <CleaningServicesIcon sx={{ color: "#7e57c2" }} />,
            cost: 900,
            lastBill: "Oct 16, 2025",
            vendor: "CleanPro Facilities",
            trend: 0.5,
        },
        {
            name: "Waste Management",
            icon: <DeleteOutlineIcon sx={{ color: "#d32f2f" }} />,
            cost: 750,
            lastBill: "Oct 15, 2025",
            vendor: "EcoWaste Solutions",
            trend: -1.8,
        },
        {
            name: "Support & Maintenance",
            icon: <SupportAgentIcon sx={{ color: "#0288d1" }} />,
            cost: 600,
            lastBill: "Oct 25, 2025",
            vendor: "TechAssist Group",
            trend: 3.7,
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
                    sx={{ fontWeight: 600, color: "primary.main", mb: { xs: 2, md: 0 } }}
                >
                    Utilities Overview
                </Typography>
                <Tooltip title="Overview of all active market utilities">
                    <IconButton size="small" color="primary">
                        <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* 🔸 Utility Cards — Using Bootstrap Grid System */}
            <div className="row g-3">
                {utilities.map((u, i) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                        <Card
                            elevation={2}
                            className="rounded-4 h-100"
                            sx={{
                                border: "1px solid #eee",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                                },
                            }}
                        >
                            <CardContent>
                                <Box className="d-flex align-items-center mb-2" sx={{ gap: 1 }}>
                                    {u.icon}
                                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                        {u.name}
                                    </Typography>
                                </Box>

                                <Typography variant="body2" color="text.secondary">
                                    Vendor: <strong>{u.vendor}</strong>
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 0.5 }}>
                                    Last Bill: {u.lastBill}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ mt: 1, fontWeight: 600, color: "#6f2da8" }}
                                >
                                    ${u.cost.toLocaleString()} / month
                                </Typography>

                                <Box
                                    className="mt-2 d-flex align-items-center gap-1"
                                    sx={{
                                        color: u.trend >= 0 ? "#2e7d32" : "#c62828",
                                        fontWeight: 500,
                                    }}
                                >
                                    {u.trend >= 0 ? (
                                        <ArrowUpwardIcon fontSize="small" />
                                    ) : (
                                        <ArrowDownwardIcon fontSize="small" />
                                    )}
                                    <Typography variant="caption">
                                        {u.trend >= 0 ? "+" : ""}
                                        {u.trend}% vs last month
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            {/* 🔹 Chart Placeholder */}
            <div className="row mt-4 g-3">
            <UtilityExpenseChart />
            </div>
            {/* <Box
                className="rounded-4 mt-5 text-center p-5"
                sx={{
                    border: "1px dashed #ccc",
                    background: "#faf8fc",
                    color: "#777",
                }}
            >
                📊 <strong>Utility Expense Trend Chart</strong> (Coming Soon)
            </Box> */}

            {/* 🔹 Summary Footer */}
            {/* <Box className="mt-4 text-center">
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary">
                    Total Monthly Utility Expense:{" "}
                    <strong>
                        $
                        {utilities
                            .reduce((a, b) => a + b.cost, 0)
                            .toLocaleString()}
                    </strong>
                </Typography>
                <Chip
                    label="Status: All Utilities Active"
                    color="success"
                    sx={{ mt: 1, fontWeight: 600 }}
                />
            </Box> */}
        </Paper>
    );
}

export default MarketUtilitiesOverview