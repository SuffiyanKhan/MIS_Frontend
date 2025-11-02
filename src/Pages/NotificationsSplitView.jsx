import React, { useState } from "react";
import {
    Paper,
    Typography,
    Box,
    Divider,
    Chip,
    Avatar,
    IconButton,
    Tooltip,
    TextField,
    InputAdornment,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SystemSecurityUpdateGoodIcon from "@mui/icons-material/SystemSecurityUpdateGood";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const NotificationsSplitView = () => {
    const [selected, setSelected] = useState(null);
    const [search, setSearch] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuId, setMenuId] = useState(null);

    const notifications = [
        {
            id: 1,
            type: "System",
            title: "System Update Deployed",
            message:
                "A new version (v3.5) of the MIS platform has been successfully deployed with enhancements in leasing and reporting.",
            time: "5 mins ago",
            icon: <SystemSecurityUpdateGoodIcon sx={{ color: "#6F2DA8" }} />,
            status: "Unread",
            related: "System Update",
            action: "View Changelog",
        },
        {
            id: 2,
            type: "Leasing",
            title: "Lease Expiration Reminder",
            message:
                "Lease for Store 1255 (Arizona Market) will expire on Dec 15, 2025. Please start the renewal process.",
            time: "1 hour ago",
            icon: <CalendarMonthIcon sx={{ color: "#E01B24" }} />,
            status: "Unread",
            related: "Leasing / Store 1255",
            action: "View Lease Details",
        },
        {
            id: 3,
            type: "Takeover",
            title: "Store Takeover Completed",
            message:
                "Techno Communications has completed the takeover of Store 1301 from Alpha Wireless LLC.",
            time: "Yesterday",
            icon: <StorefrontIcon sx={{ color: "#00b09b" }} />,
            status: "Read",
            related: "Store 1301",
            action: "View Takeover Report",
        },
        {
            id: 4,
            type: "Finance",
            title: "Rent Payment Due",
            message:
                "Rent for Store 1420 is due on November 5th. Please verify with landlord.",
            time: "2 days ago",
            icon: <MonetizationOnIcon sx={{ color: "#f7971e" }} />,
            status: "Unread",
            related: "Finance / Store 1420",
            action: "Review Payment",
        },
        {
            id: 5,
            type: "Security",
            title: "Failed Login Attempts",
            message:
                "Multiple failed login attempts detected for Manager@metro.com — account temporarily locked.",
            time: "3 days ago",
            icon: <WarningAmberIcon sx={{ color: "#E01B24" }} />,
            status: "Read",
            related: "Security Logs",
            action: "View Security Report",
        },
    ];

    const filtered = notifications.filter((n) =>
        n.title.toLowerCase().includes(search.toLowerCase())
    );

    // Handlers for action menu
    const handleMenuOpen = (event, id) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMenuId(null);
    };

    const handleAction = (action, id) => {
        console.log(`Action "${action}" triggered for notification ID: ${id}`);
        handleMenuClose();
    };

    return (
        <div className="container-fluid py-4">
            {/* 🟣 Header */}
            <Paper
                elevation={3}
                className="p-4 rounded-4 mb-4"
                sx={{
                    background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
                    color: "#fff",
                }}
            >
                <Box className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <Box className="d-flex align-items-center gap-2">
                        <NotificationsActiveIcon sx={{ fontSize: 40 }} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Notifications Center
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.85 }}>
                                Stay updated with all system activities and alerts.
                            </Typography>
                        </Box>
                    </Box>
                    <Tooltip title="Mark All as Read">
                        <IconButton color="inherit" sx={{ color: "#fff" }}>
                            <DoneAllIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Paper>

            {/* 🧭 Split View */}
            <div className="row g-3">
                {/* Left: Notification List */}
                <div className="col-12 col-md-4">
                    <Paper
                        elevation={2}
                        className="p-3 rounded-4 h-100"
                        sx={{
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            height: "80vh",
                        }}
                    >
                        <TextField
                            placeholder="Search notifications..."
                            size="small"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            fullWidth
                            sx={{ mb: 2 }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Divider sx={{ mb: 2 }} />

                        <Box
                            sx={{
                                flex: 1,
                                overflowY: "auto",
                                overflowX: "hidden",
                                pr: 1,
                            }}
                        >
                            {filtered.map((n) => (
                                <Paper
                                    key={n.id}
                                    elevation={n.id === selected?.id ? 4 : 1}
                                    className="p-3 mb-2 rounded-4 d-flex align-items-start gap-3 position-relative"
                                    sx={{
                                        borderLeft: `5px solid ${n.status === "Unread" ? "#6F2DA8" : "#ccc"
                                            }`,
                                        backgroundColor:
                                            n.id === selected?.id ? "#f3eafc" : "#fff",
                                        cursor: "pointer",
                                        transition: "0.3s",
                                        "&:hover": {
                                            backgroundColor: "#faf5ff",
                                        },
                                    }}
                                    onClick={() => setSelected(n)}
                                >
                                    <Avatar
                                        sx={{
                                            bgcolor: "#fff",
                                            border: "1px solid #eee",
                                            color: "#6F2DA8",
                                            width: 48,
                                            height: 48,
                                        }}
                                    >
                                        {n.icon}
                                    </Avatar>

                                    <Box sx={{ flex: 1, minWidth: 0 }}>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight={600}
                                            noWrap
                                            sx={{
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {n.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontSize: "0.85rem",
                                                color: "#666",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                            }}
                                        >
                                            {n.message}
                                        </Typography>
                                        <Typography variant="caption" color="text.secondary">
                                            {n.time}
                                        </Typography>
                                    </Box>

                                    <Box className="d-flex align-items-start gap-1">
                                        <Chip
                                            label={n.status}
                                            size="small"
                                            color={
                                                n.status === "Unread" ? "secondary" : "default"
                                            }
                                            sx={{ fontWeight: 600 }}
                                        />
                                        <IconButton
                                            size="small"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleMenuOpen(e, n.id);
                                            }}
                                        >
                                            <MoreVertIcon fontSize="small" />
                                        </IconButton>
                                    </Box>

                                    {/* Action Menu */}
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={menuId === n.id}
                                        onClose={handleMenuClose}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "right",
                                        }}
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                    >
                                        <MenuItem
                                            onClick={() => handleAction("Mark as Read", n.id)}
                                        >
                                            <CheckCircleOutlineIcon
                                                sx={{ mr: 1, color: "#6F2DA8" }}
                                                fontSize="small"
                                            />
                                            Mark as Read
                                        </MenuItem>
                                        <MenuItem
                                            onClick={() => handleAction("Delete", n.id)}
                                            sx={{ color: "error.main" }}
                                        >
                                            <DeleteIcon sx={{ mr: 1 }} fontSize="small" /> Delete
                                        </MenuItem>
                                    </Menu>
                                </Paper>
                            ))}
                        </Box>
                    </Paper>
                </div>

                {/* Right: Detailed Content */}
                <div className="col-12 col-md-8">
                    {selected ? (
                        <Paper elevation={3} className="p-4 rounded-4 h-100">
                            <Box className="d-flex align-items-center justify-content-between mb-3">
                                <Box className="d-flex align-items-center gap-2">
                                    <Avatar
                                        sx={{
                                            bgcolor: "#f3eafc",
                                            color: "#6F2DA8",
                                            width: 60,
                                            height: 60,
                                        }}
                                    >
                                        {selected.icon}
                                    </Avatar>
                                    <Box>
                                        <Typography variant="h6" fontWeight={700}>
                                            {selected.title}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "#666", fontSize: "0.9rem" }}
                                        >
                                            {selected.related}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    startIcon={<ArrowBackIcon />}
                                    onClick={() => setSelected(null)}
                                >
                                    Back
                                </Button>
                            </Box>

                            <Divider sx={{ mb: 3 }} />

                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {selected.message}
                            </Typography>

                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                ⏰ {selected.time}
                            </Typography>

                            <Button variant="contained" color="primary">
                                {selected.action || "View Details"}
                            </Button>
                        </Paper>
                    ) : (
                        <Paper
                            elevation={2}
                            className="p-5 rounded-4 text-center d-flex flex-column justify-content-center align-items-center h-100"
                            sx={{ color: "#666" }}
                        >
                            <NotificationsActiveIcon
                                sx={{ fontSize: 60, color: "#ccc", mb: 2 }}
                            />
                            <Typography variant="h6" sx={{ color: "#999" }}>
                                Select a notification to view details
                            </Typography>
                        </Paper>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NotificationsSplitView;
