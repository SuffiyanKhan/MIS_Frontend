import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

/**
 * MarketSummaryHeader
 *
 * Uses Bootstrap grid (row/col-*) for layout and Material-UI for cards/icons/typography.
 *
 * Props:
 *  - marketName (string)
 *  - managerName (string)
 *  - lastUpdated (string)
 *  - stats: { totalStores, employees, monthlySales, activeIssues }
 *
 * Make sure bootstrap CSS is loaded in your app.
 */
const MarketSummaryHeader = ({
    marketName = "Arizona Market",
    managerName = "John Doe",
    lastUpdated = "Oct 2025",
    stats = {
        totalStores: 45,
        employees: 512,
        monthlySales: "$1.2M",
        activeIssues: 3,
    },
}) => {
    const summaryItems = [
        {
            title: "Total Stores",
            value: stats.totalStores,
            icon: <StoreIcon sx={{ fontSize: 28, color: "#fff" }} />,
            gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
        },
        {
            title: "Employees",
            value: stats.employees,
            icon: <PeopleAltIcon sx={{ fontSize: 28, color: "#fff" }} />,
            gradient: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
        },
        {
            title: "Monthly Sales",
            value: stats.monthlySales,
            icon: <MonetizationOnIcon sx={{ fontSize: 28, color: "#fff" }} />,
            gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        },
        {
            title: "Active Issues",
            value: stats.activeIssues,
            icon: <WarningAmberIcon sx={{ fontSize: 28, color: "#fff" }} />,
            gradient: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
        },
    ];

    return (
        <div className="container-fluid">
            <Paper
                elevation={4}
                className="p-4 rounded-4 mb-4"
                sx={{
                    background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
                    color: "#fff",
                }}
            >
                {/* Header row uses bootstrap row/col for responsiveness */}
                <div className="row align-items-center gx-3 gy-2">
                    <div className="col-12 col-md-8">
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                {marketName} Overview
                            </Typography>

                            <Typography variant="body2" sx={{ opacity: 0.95, mt: 0.5, display: "flex", alignItems: "center", gap: 1 }}>
                                <ManageAccountsIcon sx={{ fontSize: 18 }} />
                                Managed by <strong>{managerName}</strong>
                                <span style={{ marginLeft: 8, marginRight: 8 }}>|</span>
                                <CalendarMonthIcon sx={{ fontSize: 18 }} />
                                Last Updated: {lastUpdated}
                            </Typography>
                        </Box>
                    </div>

                    {/* Optional action area / small summary on right */}
                    <div className="col-12 col-md-4 text-md-end">
                        <Box sx={{ display: "inline-flex", gap: 1, alignItems: "center" }}>
                            <Typography variant="caption" sx={{ opacity: 0.9 }}>
                                <strong>Quick View</strong>
                            </Typography>
                        </Box>
                    </div>
                </div>

                {/* Summary cards using bootstrap grid */}
                <div className="row g-3 mt-3">
                    {summaryItems.map((item, idx) => (
                        <div className="col-12 col-sm-6 col-md-3" key={idx}>
                            <Paper
                                elevation={5}
                                sx={{
                                    borderRadius: 3,
                                    background: item.gradient,
                                    color: "#fff",
                                    p: 2.25,
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    transition: "transform .25s ease, box-shadow .25s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
                                    },
                                }}
                            >
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                    <Box
                                        sx={{
                                            backgroundColor: "rgba(255,255,255,0.12)",
                                            width: 48,
                                            height: 48,
                                            borderRadius: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                </Box>

                                <Box textAlign="right">
                                    <Typography
                                        variant="h6"
                                        sx={{ fontWeight: 800, fontSize: { xs: "1.25rem", md: "1.5rem" } }}
                                    >
                                        {item.value}
                                    </Typography>
                                    <Typography variant="body2" sx={{ opacity: 0.95 }}>
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Paper>
                        </div>
                    ))}
                </div>
            </Paper>
        </div>
    );
};

export default MarketSummaryHeader;
