import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Box,
    Divider,
    LinearProgress,
    IconButton,
    Chip,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BoltIcon from "@mui/icons-material/Bolt";
import WifiIcon from "@mui/icons-material/Wifi";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Chart from "react-apexcharts";

const UtilitiesOverviewDashboard = () => {
    // Dummy data for usage
    const utilities = [
        {
            name: "Electricity",
            usage: "1,245 kWh",
            change: +8.5,
            icon: <BoltIcon color="warning" />,
            color: "#fbbf24",
            data: [80, 90, 70, 95, 100, 85, 110],
        },
        {
            name: "Internet",
            usage: "850 GB",
            change: +3.2,
            icon: <WifiIcon color="primary" />,
            color: "#3b82f6",
            data: [70, 60, 75, 90, 95, 80, 85],
        },
        {
            name: "Water",
            usage: "620 L",
            change: -2.1,
            icon: <WaterDropIcon color="info" />,
            color: "#06b6d4",
            data: [50, 55, 45, 48, 52, 47, 50],
        },
        {
            name: "Gas",
            usage: "410 m³",
            change: +5.4,
            icon: <GasMeterIcon color="error" />,
            color: "#ef4444",
            data: [40, 42, 39, 45, 47, 44, 49],
        },
    ];

    const chartOptions = {
        chart: {
            type: "area",
            sparkline: { enabled: true },
        },
        stroke: { curve: "smooth", width: 2 },
        fill: { opacity: 0.3 },
        tooltip: { enabled: false },
        colors: ["#6d28d9"],
    };

    return (
        <Card className="shadow-sm rounded-4 border-0 h-100">
            <CardContent>
                {/* ===== Header ===== */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <SettingsIcon color="secondary" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Utilities Overview
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Track bills, energy, and internet usage per store.
                            </Typography>
                        </div>
                    </div>
                    <IconButton size="small">
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <Divider sx={{ mb: 2 }} />

                {/* ===== Utilities Data ===== */}
                <Box className="row g-3">
                    {utilities.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6">
                            <Card
                                variant="outlined"
                                className="rounded-4 border-0 shadow-sm h-100"
                            >
                                <CardContent>
                                    <Box className="d-flex align-items-center justify-content-between mb-2">
                                        <Box className="d-flex align-items-center gap-2">
                                            {item.icon}
                                            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                                                {item.name}
                                            </Typography>
                                        </Box>
                                        <Chip
                                            label={
                                                item.change > 0
                                                    ? `+${item.change}%`
                                                    : `${item.change}%`
                                            }
                                            size="small"
                                            color={item.change > 0 ? "success" : "error"}
                                            icon={
                                                item.change > 0 ? (
                                                    <TrendingUpIcon fontSize="small" />
                                                ) : (
                                                    <TrendingDownIcon fontSize="small" />
                                                )
                                            }
                                        />
                                    </Box>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ mb: 1 }}
                                    >
                                        Current Usage:{" "}
                                        <strong style={{ color: item.color }}>
                                            {item.usage}
                                        </strong>
                                    </Typography>

                                    <LinearProgress
                                        variant="determinate"
                                        value={Math.min(item.data[item.data.length - 1], 100)}
                                        sx={{
                                            height: 8,
                                            borderRadius: 5,
                                            backgroundColor: "#f3f4f6",
                                            "& .MuiLinearProgress-bar": {
                                                backgroundColor: item.color,
                                            },
                                        }}
                                    />

                                    {/* Mini chart */}
                                    <Box sx={{ mt: 1 }}>
                                        <Chart
                                            options={{ ...chartOptions, colors: [item.color] }}
                                            series={[{ data: item.data }]}
                                            type="area"
                                            height={60}
                                        />
                                    </Box>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default UtilitiesOverviewDashboard;
