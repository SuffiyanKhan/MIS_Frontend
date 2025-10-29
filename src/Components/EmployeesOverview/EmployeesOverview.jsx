import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Divider,
    Avatar,
    Box,
    Chip,
    Tooltip,
    IconButton,
    LinearProgress,
    TextField,
    InputAdornment,
} from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";

// ===== ICONS =====
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import VerifiedIcon from "@mui/icons-material/Verified";
import BadgeIcon from "@mui/icons-material/Badge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const EmployeesOverview = ({ employeesData }) => {
    const [search, setSearch] = useState("");

    // Dummy Data
    const data =
        employeesData || {
            manager: {
                name: "Sarah Johnson",
                phone: "+1 (480) 555-1122",
                email: "sarah.johnson@metrobyt.com",
                role: "Store Manager",
                location: "Mesa, Arizona",
                status: "Active",
                performance: 92,
            },
            employees: [
                {
                    id: "EMP001",
                    name: "John Doe",
                    role: "Sales Representative",
                    email: "john.doe@metrobyt.com",
                    phone: "+1 (480) 555-0001",
                    status: "Active",
                    sales: 85,
                    attendance: 96,
                    lastActive: "2 hours ago",
                },
                {
                    id: "EMP002",
                    name: "Jane Smith",
                    role: "Assistant Manager",
                    email: "jane.smith@metrobyt.com",
                    phone: "+1 (480) 555-0002",
                    status: "On Leave",
                    sales: 78,
                    attendance: 80,
                    lastActive: "3 days ago",
                },
                {
                    id: "EMP003",
                    name: "Mike Brown",
                    role: "CSR",
                    email: "mike.brown@metrobyt.com",
                    phone: "+1 (480) 555-0003",
                    status: "Active",
                    sales: 88,
                    attendance: 98,
                    lastActive: "1 hour ago",
                },
                {
                    id: "EMP004",
                    name: "Olivia Garcia",
                    role: "Inventory Specialist",
                    email: "olivia.garcia@metrobyt.com",
                    phone: "+1 (480) 555-0004",
                    status: "Inactive",
                    sales: 62,
                    attendance: 70,
                    lastActive: "10 days ago",
                },
            ],
        };

    const totalEmployees = data.employees?.length || 0;
    const filteredEmployees = data.employees.filter((emp) =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container-fluid py-4">
            {/* ===== HEADER ===== */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                {/* LEFT SIDE — HEADING + SUBHEADING */}
                <div>
                    <Typography
                        variant="h5"
                        sx={{ fontWeight: "bold", color: "#1e1e2d" }}
                    >
                        Employees Overview
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        Manage and track all store team members roles, contacts, and status.
                    </Typography>
                </div>

                {/* RIGHT SIDE — SEARCH, FILTER, EMPLOYEE COUNT */}
                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <TextField
                        size="small"
                        placeholder="Search employee..."
                        variant="outlined"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            backgroundColor: "white",
                            borderRadius: 2,
                            width: { xs: "100%", sm: "220px" },
                        }}
                    />

                    <Tooltip title="Filter employees">
                        <IconButton
                            color="primary"
                            sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}
                        >
                            <FilterAltIcon />
                        </IconButton>
                    </Tooltip>

                    <Chip
                        icon={<GroupsIcon />}
                        label={`${totalEmployees} Employees`}
                        color="primary"
                        sx={{ fontWeight: 500 }}
                    />
                </div>
            </div>

            {/* ===== MANAGER INFO ===== */}
            <div className="row mb-4">
                <div className="col-12">
                    <Card className="shadow-sm border-0 rounded-4">
                        <CardContent>
                            <Box display="flex" justifyContent="space-between" alignItems="center">
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    Store Manager
                                </Typography>
                                <Tooltip title="More Options">
                                    <IconButton size="small">
                                        <MoreVertIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                            <Divider sx={{ my: 2 }} />

                            <Box className="d-flex align-items-center flex-wrap gap-3">
                                <Avatar
                                    sx={{
                                        bgcolor: "#6d28d9",
                                        width: 80,
                                        height: 80,
                                        fontSize: 30,
                                    }}
                                >
                                    <PersonIcon fontSize="large" />
                                </Avatar>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                        {data.manager.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <WorkIcon fontSize="small" className="me-1" />
                                        {data.manager.role}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <LocationOnIcon fontSize="small" className="me-1" />
                                        {data.manager.location}
                                    </Typography>
                                    <Box className="mt-2 d-flex align-items-center gap-2">
                                        <Chip
                                            label={data.manager.status}
                                            color="success"
                                            size="small"
                                            icon={<VerifiedIcon />}
                                        />
                                    </Box>
                                </Box>

                                <Box className="ms-auto text-end">
                                    <Typography variant="body2">
                                        <LocalPhoneIcon
                                            fontSize="small"
                                            color="success"
                                            className="me-1"
                                        />
                                        {data.manager.phone}
                                    </Typography>
                                    <Typography variant="body2">
                                        <EmailIcon
                                            fontSize="small"
                                            color="info"
                                            className="me-1"
                                        />
                                        {data.manager.email}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Performance Bar */}
                            {/* <Box sx={{ mt: 3 }}>
                                <Typography variant="body2" gutterBottom>
                                    Performance: {data.manager.performance}%
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={data.manager.performance}
                                    sx={{ height: 8, borderRadius: 4 }}
                                    color="secondary"
                                />
                            </Box> */}
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ===== EMPLOYEE GRID ===== */}
            <div className="row g-4">
                {filteredEmployees.map((emp, index) => (
                    <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <Card
                            className="shadow-sm border-0 rounded-4 h-100"
                            sx={{
                                transition: "0.3s",
                                "&:hover": {
                                    boxShadow: 6,
                                    transform: "translateY(-4px)",
                                },
                            }}
                        >
                            <CardContent>
                                <Box className="d-flex justify-content-between align-items-start">
                                    <Avatar
                                        sx={{
                                            bgcolor:
                                                emp.status === "Active"
                                                    ? "#16a34a"
                                                    : emp.status === "On Leave"
                                                        ? "#facc15"
                                                        : "#9ca3af",
                                            width: 60,
                                            height: 60,
                                        }}
                                    >
                                        <BadgeIcon />
                                    </Avatar>

                                    <Chip
                                        label={emp.status}
                                        color={
                                            emp.status === "Active"
                                                ? "success"
                                                : emp.status === "On Leave"
                                                    ? "warning"
                                                    : "default"
                                        }
                                        size="small"
                                    />
                                </Box>

                                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600 }}>
                                    {emp.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {emp.role}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Typography variant="body2" sx={{ mb: 1 }}>
                                    <EmailIcon
                                        fontSize="small"
                                        color="primary"
                                        className="me-1"
                                    />
                                    {emp.email}
                                </Typography>

                                <Typography variant="body2" sx={{ mb: 2 }}>
                                    <LocalPhoneIcon
                                        fontSize="small"
                                        color="success"
                                        className="me-1"
                                    />
                                    {emp.phone}
                                </Typography>

                                {/* ===== Performance Stats ===== */}
                                <Box>
                                    {/* <Typography variant="body2" gutterBottom>
                                        <TrendingUpIcon
                                            fontSize="small"
                                            color="secondary"
                                            className="me-1"
                                        />
                                        Sales Performance: {emp.sales}%
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={emp.sales}
                                        sx={{ height: 6, borderRadius: 4, mb: 2 }}
                                    />

                                    <Typography variant="body2" gutterBottom>
                                        Attendance: {emp.attendance}%
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={emp.attendance}
                                        color="success"
                                        sx={{ height: 6, borderRadius: 4 }}
                                    /> */}

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        sx={{ display: "block", mt: 2 }}
                                    >
                                        <AccessTimeIcon
                                            fontSize="small"
                                            color="action"
                                            className="me-1"
                                        />
                                        Last Active: {emp.lastActive}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmployeesOverview;
