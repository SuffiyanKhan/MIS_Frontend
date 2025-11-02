import React from "react";
import {
    Paper,
    Typography,
    Box,
    Divider,
    Grid,
    Card,
    CardMedia,
    Chip,
    Tooltip,
    Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LockIcon from "@mui/icons-material/Lock";
import WifiIcon from "@mui/icons-material/Wifi";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WatchIcon from "@mui/icons-material/Watch";
import KeyIcon from "@mui/icons-material/VpnKey";
import InventoryIcon from "@mui/icons-material/Inventory";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router-dom";

const StoresTakeOverDetailed = () => {
    const navigate = useNavigate();

    // 🧩 Dummy Data
    const item = {
        name: "John Doe",
        storeName: "1255 W Main Street",
        cashinstore: "$3,500",
        takeOverDate: "2025-09-12",
        alarmCode: "4421",
        wifiName: "TechnoStore-Guest",
        wifiCode: "AZ1255wifi!",
        safeBoxCode: "8812",
        lunchBoxCode: "5502",
        doorCode: "7084",
        dumpsterCode: "5541",
        citrixCount: 3,
        yuniKeys: 4,
        iphone11: 5,
        iphoneSE: 3,
        iphone12: 6,
        iphone13: 4,
        iphone15: 2,
        iphone16: 1,
        iPhone16PLUS: 1,
        iPhone16E: 0,
        iPhone14: 3,
        iPhone17: 1,
        iwatchSE2: 2,
        iwatchSE3: 3,
        iwatch11: 1,
        iwatch10: 2,
        gsp: 1,
        creditCard: "Available",
        camera: 4,
        inventoryAudit: "Completed - Mar 2025",
        shipment: "Last Received: Oct 2025",
        images: [
            {
                url: "https://images.unsplash.com/photo-1607083209487-7c87e6ae8dc1?auto=format&fit=crop&w=900&q=80",
                label: "Store Front",
            },
            {
                url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80",
                label: "Cash Drawer",
            },
            {
                url: "https://images.unsplash.com/photo-1581091012184-5c5b32e66f96?auto=format&fit=crop&w=900&q=80",
                label: "Safe Box",
            },
            {
                url: "https://images.unsplash.com/photo-1581092334850-7a6b2d93c4d3?auto=format&fit=crop&w=900&q=80",
                label: "Inventory Room",
            },
            {
                url: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=900&q=80",
                label: "Store Interior",
            },
        ],
    };

    return (
        <div className="container-fluid py-4">
            {/* 🔙 Back Button */}
            <Button
                variant="outlined"
                startIcon={<ArrowBackIcon />}
                sx={{ mb: 3 }}
                onClick={() => navigate(-1)}
            >
                Back to Takeovers
            </Button>

            {/* 🟣 Header */}
            <Paper
                elevation={4}
                className="p-4 rounded-4 mb-4"
                sx={{
                    background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
                    color: "#fff",
                }}
            >
                <Box className="d-flex flex-wrap justify-content-between align-items-center">
                    <Box className="d-flex align-items-center gap-3">
                        <StorefrontIcon sx={{ fontSize: 44, color: "#fff" }} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                {item.storeName}
                            </Typography>
                            <Typography variant="body2">
                                Managed By: {item.name} | Cash In Store: {item.cashinstore}
                            </Typography>
                        </Box>
                    </Box>
                    <Chip
                        label="Completed"
                        color="success"
                        size="medium"
                        sx={{ fontWeight: 600 }}
                    />
                </Box>
            </Paper>

            {/* 🧾 General Details */}
            <Paper elevation={2} className="p-4 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    General Details
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <div className="row g-3">
                    <div className="col-12 col-md-6">
                        <Box className="p-3 border rounded-4 bg-light h-100">
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                <CalendarMonthIcon sx={{ mr: 1, color: "#6F2DA8" }} />
                                <strong>Takeover Date:</strong> {item.takeOverDate}
                            </Typography>
                            <Typography variant="body1">
                                <InventoryIcon sx={{ mr: 1, color: "#6F2DA8" }} />
                                <strong>Citrix Accounts:</strong> {item.citrixCount}
                            </Typography>
                        </Box>
                    </div>
                    <div className="col-12 col-md-6">
                        <Box className="p-3 border rounded-4 bg-light h-100">
                            <KeyIcon sx={{ mr: 1, color: "#6F2DA8" }} />
                            <strong>Yuni Keys:</strong> {item.yuniKeys}
                        </Box>
                    </div>
                </div>
            </Paper>

            {/* 🔐 Security Section */}
            <Paper elevation={2} className="p-4 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    Security & Access Codes
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <div className="row g-3">
                    {[
                        { label: "Alarm Code", value: item.alarmCode, icon: <LockIcon /> },
                        {
                            label: "Wi-Fi Details",
                            value: `${item.wifiName} / ${item.wifiCode}`,
                            icon: <WifiIcon />,
                        },
                        { label: "Safe Box Code", value: item.safeBoxCode, icon: <LockIcon /> },
                        { label: "Lunch Box Code", value: item.lunchBoxCode, icon: <LockIcon /> },
                        { label: "Door Code", value: item.doorCode, icon: <LockIcon /> },
                        { label: "Dumpster Code", value: item.dumpsterCode, icon: <LockIcon /> },
                    ].map((info, i) => (
                        <div key={i} className="col-12 col-md-4">
                            <Box className="p-3 border rounded-4 bg-light h-100 d-flex align-items-center gap-2">
                                {React.cloneElement(info.icon, { sx: { color: "#6F2DA8" } })}
                                <Typography variant="body2">
                                    <strong>{info.label}:</strong> {info.value}
                                </Typography>
                            </Box>
                        </div>
                    ))}
                </div>
            </Paper>

            {/* 📱 Inventory Devices */}
            <Paper elevation={2} className="p-4 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    Device Inventory
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <div className="row g-3">
                    {[
                        { name: "iPhone 11", value: item.iphone11 },
                        { name: "iPhone SE", value: item.iphoneSE },
                        { name: "iPhone 12", value: item.iphone12 },
                        { name: "iPhone 13", value: item.iphone13 },
                        { name: "iPhone 15", value: item.iphone15 },
                        { name: "iPhone 16", value: item.iphone16 },
                        { name: "iPhone 16 PLUS", value: item.iPhone16PLUS },
                        { name: "iPhone 16 E", value: item.iPhone16E },
                        { name: "iPhone 14", value: item.iPhone14 },
                        { name: "iPhone 17", value: item.iPhone17 },
                    ].map((device, i) => (
                        <div key={i} className="col-6 col-md-3">
                            <Paper elevation={1} className="p-3 text-center rounded-4 h-100">
                                <SmartphoneIcon sx={{ color: "#6F2DA8", mb: 1 }} />
                                <Typography variant="body2">{device.name}</Typography>
                                <Typography variant="h6">{device.value}</Typography>
                            </Paper>
                        </div>
                    ))}
                </div>
            </Paper>

            {/* ⌚ Watch Inventory */}
            <Paper elevation={2} className="p-4 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    Watch Inventory
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <div className="row g-3">
                    {[
                        { name: "iWatch SE 2", value: item.iwatchSE2 },
                        { name: "iWatch SE 3", value: item.iwatchSE3 },
                        { name: "iWatch 11", value: item.iwatch11 },
                        { name: "iWatch 10", value: item.iwatch10 },
                    ].map((device, i) => (
                        <div key={i} className="col-6 col-md-3">
                            <Paper elevation={1} className="p-3 text-center rounded-4 h-100">
                                <WatchIcon sx={{ color: "#6F2DA8", mb: 1 }} />
                                <Typography variant="body2">{device.name}</Typography>
                                <Typography variant="h6">{device.value}</Typography>
                            </Paper>
                        </div>
                    ))}
                </div>
            </Paper>

            {/* 💼 Other Assets */}
            <Paper elevation={2} className="p-4 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    Other Assets & Operations
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <div className="row g-3">
                    {[
                        { icon: <CreditCardIcon />, label: "Credit Card", value: item.creditCard },
                        { icon: <CameraAltIcon />, label: "Cameras", value: item.camera },
                        { icon: <AssessmentIcon />, label: "Inventory Audit", value: item.inventoryAudit },
                        { icon: <LocalShippingIcon />, label: "Shipments", value: item.shipment },
                    ].map((asset, i) => (
                        <div key={i} className="col-12 col-md-6">
                            <Box className="p-3 border rounded-4 bg-light d-flex align-items-center gap-2">
                                {React.cloneElement(asset.icon, { sx: { color: "#6F2DA8" } })}
                                <Typography variant="body2">
                                    <strong>{asset.label}:</strong> {asset.value}
                                </Typography>
                            </Box>
                        </div>
                    ))}
                </div>
            </Paper>

            {/* 🖼️ Attached Images */}
            <Paper elevation={2} className="p-4 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    Attached Verification Images
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Grid container spacing={2}>
                    {item.images.map((img, i) => (
                        <Grid item xs={6} md={3} key={i}>
                            <Card sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
                                <CardMedia component="img" height="160" image={img.url} alt={img.label} />
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        py: 1,
                                        backgroundColor: "#f5f5f5",
                                        fontWeight: 500,
                                    }}
                                >
                                    {img.label}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </div>
    );
};

export default StoresTakeOverDetailed;
