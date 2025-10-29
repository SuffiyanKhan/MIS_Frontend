import React from "react";
import {
    Card,
    CardContent,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Divider,
    Box,
    Tooltip,
    IconButton,
} from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const AlertsNotifications = () => {
    // Dummy notifications data
    const alerts = [
        {
            type: "Lease Expiration",
            message: "Lease expiring soon at Metro Store #204 (Tempe)",
            date: "2025-11-05",
            severity: "high",
            icon: <EventBusyIcon color="error" />,
        },
        {
            type: "Pending Utility Bill",
            message: "Electric bill pending for Phoenix Market - Store #108",
            date: "2025-11-01",
            severity: "medium",
            icon: <ReceiptLongIcon color="warning" />,
        },
        {
            type: "Insurance COI",
            message: "COI missing for Store #332 (Mesa)",
            date: "2025-10-28",
            severity: "high",
            icon: <ReportProblemIcon color="error" />,
        },
        {
            type: "Maintenance Update",
            message: "Repair completed for HVAC system at Store #145 (Chandler)",
            date: "2025-10-26",
            severity: "low",
            icon: <CheckCircleIcon color="success" />,
        },
        {
            type: "Rent Payment",
            message: "Base rent due for Store #509 (Gilbert) in 3 days",
            date: "2025-10-30",
            severity: "medium",
            icon: <WarningAmberIcon color="warning" />,
        },
    ];

    return (
        <Card className="shadow-sm rounded-4 border-0 h-100">
            <CardContent>
                {/* ===== Header ===== */}
                <Box className="d-flex justify-content-between align-items-center mb-2">
                    <Box className="d-flex align-items-center">
                        <NotificationsActiveIcon color="error" sx={{ mr: 1 }} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Alerts & Notifications
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lease expirations, pending bills, and important alerts.
                            </Typography>
                        </Box>
                    </Box>

                    <Tooltip title="More options">
                        <IconButton size="small">
                            <MoreVertIcon />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* ===== Alerts List ===== */}
                <List dense sx={{ maxHeight: 320, overflowY: "auto" }}>
                    {alerts.map((alert, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                borderRadius: 3,
                                mb: 1,
                                backgroundColor:
                                    alert.severity === "high"
                                        ? "#fdecea"
                                        : alert.severity === "medium"
                                            ? "#fff4e5"
                                            : "#e8f5e9",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                            }}
                        >
                            <ListItemIcon>{alert.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="subtitle2"
                                        sx={{
                                            fontWeight: 600,
                                            color:
                                                alert.severity === "high"
                                                    ? "#d32f2f"
                                                    : alert.severity === "medium"
                                                        ? "#f57c00"
                                                        : "#388e3c",
                                        }}
                                    >
                                        {alert.type}
                                    </Typography>
                                }
                                secondary={
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontSize: "0.85rem" }}
                                    >
                                        {alert.message}
                                    </Typography>
                                }
                            />
                            <Chip
                                label={new Date(alert.date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                })}
                                size="small"
                                sx={{
                                    backgroundColor: "#fff",
                                    border: "1px solid #ddd",
                                    ml: 1,
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default AlertsNotifications;
