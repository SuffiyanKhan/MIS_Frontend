import React from "react";
import {
    Paper,
    Typography,
    Divider,
    Box,
    Chip,
    Tooltip,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Avatar,
} from "@mui/material";

import DomainIcon from "@mui/icons-material/Domain";
import EventIcon from "@mui/icons-material/Event";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import ScheduleIcon from "@mui/icons-material/Schedule";
import BusinessIcon from "@mui/icons-material/Business";
import LeaseSummaryTable from "../LeaseSummaryTable/LeaseSummaryTable";
import LeaseExpirationChart from "../../Charts/LeaseExpirationChart";

const LeasingInfoTab = () => {
    const leases = [
        {
            id: 1,
            location: "Store #214 - Phoenix, AZ",
            landlord: "Metro Estates LLC",
            rent: "$3,200",
            start: "Jan 2023",
            end: "Dec 2025",
            status: "Active",
        },
        {
            id: 2,
            location: "Store #118 - Tucson, AZ",
            landlord: "Civic Real Holdings",
            rent: "$2,950",
            start: "Jul 2021",
            end: "Jun 2024",
            status: "Expiring Soon",
        },
        {
            id: 3,
            location: "Store #342 - El Paso, TX",
            landlord: "Prime Retail Group",
            rent: "$3,750",
            start: "Mar 2022",
            end: "Mar 2027",
            status: "Active",
        },
    ];

    const leaseExpirations = [
        { year: 2024, count: 5 },
        { year: 2025, count: 8 },
        { year: 2026, count: 3 },
    ];

    const alerts = [
        {
            type: "Renewal Due",
            store: "#118",
            message: "Lease expiring in 2 months",
            severity: "warning",
        },
        {
            type: "Payment Reminder",
            store: "#214",
            message: "Rent payment due in 3 days",
            severity: "error",
        },
        {
            type: "Inspection Scheduled",
            store: "#342",
            message: "Annual inspection next week",
            severity: "info",
        },
    ];

    return (
        <Paper
            elevation={3}
            className="p-4 rounded-4 mb-4"
            sx={{
                backgroundColor: "#fff",
                border: "1px solid #eee",
            }}
        >
            {/* Header */}
            <Box className="d-flex justify-content-between align-items-center mb-3">
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: "#6F2DA8" }}
                >
                    Lease Details
                </Typography>
                <Tooltip title="Market-wise leasing information">
                    <IconButton size="small" color="primary">
                        <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <Divider sx={{ mb: 3 }} />

            <LeaseSummaryTable />
            <LeaseExpirationChart />
            <Box>
                <Typography
                    variant="subtitle1"
                    sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}
                >
                    <WarningAmberIcon sx={{ mr: 1, color: "#6F2DA8" }} />
                    Lease Alerts & Notifications
                </Typography>

                <Box
                    className="rounded-4 p-3"
                    sx={{
                        backgroundColor: "#faf8fc",
                        border: "1px solid #e0e0e0",
                    }}
                >
                    {alerts.map((alert, i) => (
                        <Box
                            key={i}
                            className="d-flex align-items-center justify-content-between p-2 rounded-3 mb-2"
                            sx={{
                                borderLeft: `5px solid ${alert.severity === "warning"
                                    ? "#ffb74d"
                                    : alert.severity === "error"
                                        ? "#e57373"
                                        : "#64b5f6"
                                    }`,
                                backgroundColor: "#fff",
                            }}
                        >
                            <Box className="d-flex align-items-center gap-2">
                                <Avatar
                                    sx={{
                                        bgcolor:
                                            alert.severity === "warning"
                                                ? "#ffb74d"
                                                : alert.severity === "error"
                                                    ? "#e57373"
                                                    : "#64b5f6",
                                        width: 28,
                                        height: 28,
                                    }}
                                >
                                    <WarningAmberIcon sx={{ fontSize: 16, color: "#fff" }} />
                                </Avatar>
                                <Box>
                                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                        {alert.type} — <span style={{ color: "#6F2DA8" }}>{alert.store}</span>
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >
                                        {alert.message}
                                    </Typography>
                                </Box>
                            </Box>
                            <Chip
                                label={alert.severity.toUpperCase()}
                                size="small"
                                sx={{
                                    fontWeight: 600,
                                    backgroundColor:
                                        alert.severity === "warning"
                                            ? "#fff3cd"
                                            : alert.severity === "error"
                                                ? "#fdecea"
                                                : "#e3f2fd",
                                    color:
                                        alert.severity === "warning"
                                            ? "#856404"
                                            : alert.severity === "error"
                                                ? "#a94442"
                                                : "#0d47a1",
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Paper>
    );
};

export default LeasingInfoTab;
