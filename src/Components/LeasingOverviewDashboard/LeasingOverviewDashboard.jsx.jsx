import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    LinearProgress,
    Chip,
    Tooltip,
    Divider,
    IconButton,
} from "@mui/material";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const LeasingOverviewDashboard = () => {
    // Dummy data (will come from backend later)
    const leasingStats = {
        totalLeases: 500,
        activeLeases: 460,
        expiringSoon: 18,
        rentDueThisMonth: 320,
        coiValid: 440,
        coiExpired: 20,
    };

    const coiCompliance = Math.round(
        (leasingStats.coiValid / leasingStats.totalLeases) * 100
    );

    return (
        <Card className="shadow-sm rounded-4 border-0 h-100">
            <CardContent>
                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <ApartmentIcon color="primary" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Leasing Overview
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Active leases, rent due, expirations & COI tracking
                            </Typography>
                        </div>
                    </div>
                    <IconButton size="small">
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <Divider sx={{ mb: 2 }} />

                {/* Leasing Summary Stats */}
                <div className="row g-3">
                    <div className="col-6">
                        <Box className="p-3 rounded-3" sx={{ backgroundColor: "#f8fafc" }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Total Leases
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                {leasingStats.totalLeases}
                            </Typography>
                            <Chip
                                icon={<BusinessCenterIcon />}
                                label="Portfolio"
                                color="primary"
                                size="small"
                                sx={{ mt: 1 }}
                            />
                        </Box>
                    </div>

                    <div className="col-6">
                        <Box className="p-3 rounded-3" sx={{ backgroundColor: "#f8fafc" }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Active Leases
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#16a34a" }}>
                                {leasingStats.activeLeases}
                            </Typography>
                            <Chip label="Active" color="success" size="small" sx={{ mt: 1 }} />
                        </Box>
                    </div>

                    <div className="col-6">
                        <Box className="p-3 rounded-3" sx={{ backgroundColor: "#fef2f2" }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Expiring Soon
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#dc2626" }}>
                                {leasingStats.expiringSoon}
                            </Typography>
                            <Chip
                                icon={<WarningAmberIcon />}
                                label="Monitor"
                                color="error"
                                size="small"
                                sx={{ mt: 1 }}
                            />
                        </Box>
                    </div>

                    <div className="col-6">
                        <Box className="p-3 rounded-3" sx={{ backgroundColor: "#f0fdf4" }}>
                            <Typography variant="subtitle2" color="text.secondary">
                                Rent Due (This Month)
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: 700, color: "#16a34a" }}>
                                {leasingStats.rentDueThisMonth}
                            </Typography>
                            <Chip
                                icon={<EventAvailableIcon />}
                                label="Payments"
                                color="success"
                                size="small"
                                sx={{ mt: 1 }}
                            />
                        </Box>
                    </div>
                </div>

                <Divider sx={{ my: 3 }} />

                {/* COI Compliance Section */}
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                    COI Compliance
                </Typography>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2" color="text.secondary">
                        Valid: {leasingStats.coiValid}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Expired: {leasingStats.coiExpired}
                    </Typography>
                </Box>
                <Tooltip title={`${coiCompliance}% Compliance`}>
                    <LinearProgress
                        variant="determinate"
                        value={coiCompliance}
                        sx={{
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: "#e5e7eb",
                            "& .MuiLinearProgress-bar": { backgroundColor: "#2563eb" },
                        }}
                    />
                </Tooltip>

                <Box
                    mt={2}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="center"
                    gap={1}
                >
                    <VerifiedUserIcon color="primary" fontSize="small" />
                    <Typography variant="body2" color="text.secondary">
                        {coiCompliance}% COI Compliance
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LeasingOverviewDashboard;
