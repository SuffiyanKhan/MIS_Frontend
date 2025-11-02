import React, { useState } from "react";
import {
    Paper,
    Typography,
    Box,
    Button,
    Divider,
    TextField,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Chip,
    Tooltip,
    MenuItem,
    Select,
    FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import DomainIcon from "@mui/icons-material/Domain";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import { BarChart, Bar, XAxis, YAxis, Tooltip as RechartTooltip, ResponsiveContainer, Legend } from "recharts";
import { useNavigate } from "react-router-dom";

const ManageLeasing = () => {
    const [search, setSearch] = useState("");
    const [marketFilter, setMarketFilter] = useState("All");
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate();
    // 🧩 Dummy Lease Data
    const leases = [
        {
            storeId: "TECH1255",
            storeName: "1255 W Main Street",
            landlord: "ABC Properties LLC",
            rent: "$3,500",
            market: "Arizona",
            start: "Jan 2021",
            end: "Dec 2026",
            status: "Active",
        },
        {
            storeId: "TECH1310",
            storeName: "1310 E Bell Rd",
            landlord: "Skyline Holdings Inc.",
            rent: "$4,200",
            market: "Texas",
            start: "Mar 2020",
            end: "Mar 2025",
            status: "Expiring Soon",
        },
        {
            storeId: "TECH1420",
            storeName: "1420 N 3rd Ave",
            landlord: "Desert Land Co.",
            rent: "$3,900",
            market: "California",
            start: "Jun 2022",
            end: "Jun 2027",
            status: "Active",
        },
    ];

    const filteredLeases = leases.filter(
        (l) =>
            (marketFilter === "All" || l.market === marketFilter) &&
            (l.storeName.toLowerCase().includes(search.toLowerCase()) ||
                l.landlord.toLowerCase().includes(search.toLowerCase()) ||
                l.market.toLowerCase().includes(search.toLowerCase()))
    );

    const handleChangePage = (e, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    const chartData = [
        { year: "2025", count: 5 },
        { year: "2026", count: 9 },
        { year: "2027", count: 12 },
        { year: "2028", count: 4 },
    ];

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
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 d-flex align-items-center gap-3">
                        <DomainIcon sx={{ fontSize: 42, color: "#fff" }} />
                        <Box>
                            <Typography variant="h5" sx={{ fontWeight: 700 }}>
                                Manage Leasing
                            </Typography>
                            <Typography variant="body2" sx={{ opacity: 0.9 }}>
                                Track lease agreements, expirations, and rent obligations across all stores.
                            </Typography>
                        </Box>
                    </div>
                    <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-start gap-2 mt-3 mt-md-0">
                        <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
                            Add Lease
                        </Button>
                        <Button variant="outlined" color="inherit" startIcon={<RefreshIcon />}>
                            Refresh
                        </Button>
                    </div>
                </div>
            </Paper>

            {/* 💰 Summary Cards */}
            <div className="row g-4 mb-4">
                <div className="col-12 col-md-3">
                    <Paper className="p-4 rounded-4 text-center" elevation={2}>
                        <DomainIcon sx={{ color: "#6F2DA8", fontSize: 40, mb: 1 }} />
                        <Typography variant="h6" fontWeight={600}>
                            Total Active Leases
                        </Typography>
                        <Typography variant="h4" color="primary.main">
                            92
                        </Typography>
                    </Paper>
                </div>
                <div className="col-12 col-md-3">
                    <Paper className="p-4 rounded-4 text-center" elevation={2}>
                        <WarningAmberIcon sx={{ color: "#E01B24", fontSize: 40, mb: 1 }} />
                        <Typography variant="h6" fontWeight={600}>
                            Expiring Soon
                        </Typography>
                        <Typography variant="h4" color="error.main">
                            6
                        </Typography>
                    </Paper>
                </div>
                <div className="col-12 col-md-3">
                    <Paper className="p-4 rounded-4 text-center" elevation={2}>
                        <MonetizationOnIcon sx={{ color: "#6F2DA8", fontSize: 40, mb: 1 }} />
                        <Typography variant="h6" fontWeight={600}>
                            Avg. Monthly Rent
                        </Typography>
                        <Typography variant="h4" color="success.main">
                            $3,800
                        </Typography>
                    </Paper>
                </div>
                <div className="col-12 col-md-3">
                    <Paper className="p-4 rounded-4 text-center" elevation={2}>
                        <CalendarMonthIcon sx={{ color: "#6F2DA8", fontSize: 40, mb: 1 }} />
                        <Typography variant="h6" fontWeight={600}>
                            Annual Obligation
                        </Typography>
                        <Typography variant="h4" color="primary.main">
                            $4.1M
                        </Typography>
                    </Paper>
                </div>
            </div>

            {/* 🔍 Search + Filter Bar */}
            <Box className="mb-3 d-flex flex-wrap align-items-center gap-2">
                <TextField
                    placeholder="Search by store or landlord..."
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    sx={{ width: 300 }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon color="action" />
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControl size="small" sx={{ minWidth: 180 }}>
                    <Select
                        value={marketFilter}
                        onChange={(e) => setMarketFilter(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value="All">All Markets</MenuItem>
                        <MenuItem value="Arizona">Arizona</MenuItem>
                        <MenuItem value="Texas">Texas</MenuItem>
                        <MenuItem value="California">California</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {/* 📋 Lease Table */}
            <Paper elevation={2} className="p-3 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600, mb: 2 }}>
                    Lease Records
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <TableContainer className="table-responsive">
                    <Table>
                        <TableHead sx={{ backgroundColor: "#f3ecf9" }}>
                            <TableRow>
                                <TableCell><strong>Store ID</strong></TableCell>
                                <TableCell><strong>Store Name</strong></TableCell>
                                <TableCell><strong>Landlord</strong></TableCell>
                                <TableCell><strong>Market</strong></TableCell>
                                <TableCell><strong>Rent</strong></TableCell>
                                <TableCell><strong>Start Date</strong></TableCell>
                                <TableCell><strong>End Date</strong></TableCell>
                                <TableCell><strong>Status</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredLeases.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => (
                                <TableRow key={i} hover onClick={() => { navigate("/detailed-leasing") }}>
                                    <TableCell>{row.storeId}</TableCell>
                                    <TableCell>{row.storeName}</TableCell>
                                    <TableCell>{row.landlord}</TableCell>
                                    <TableCell>{row.market}</TableCell>
                                    <TableCell>{row.rent}</TableCell>
                                    <TableCell>{row.start}</TableCell>
                                    <TableCell>{row.end}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={row.status}
                                            color={
                                                row.status === "Active"
                                                    ? "success"
                                                    : row.status === "Expiring Soon"
                                                        ? "warning"
                                                        : "default"
                                            }
                                            size="small"
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={filteredLeases.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

            {/* 📊 Lease Expiration Chart */}
            <Paper elevation={2} className="p-4 rounded-4 mb-4">
                <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
                    Lease Expiration Overview
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box sx={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <BarChart data={chartData}>
                            <XAxis dataKey="year" />
                            <YAxis />
                            <RechartTooltip />
                            <Legend />
                            <Bar dataKey="count" fill="#6F2DA8" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </Box>
            </Paper>

            {/* 📁 Documents Section */}
            {/* <Paper elevation={2} className="p-4 rounded-4 mb-4">
        <Typography variant="h6" sx={{ color: "primary.main", fontWeight: 600 }}>
          Lease Documents
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Box className="p-3 border rounded-4 bg-light d-flex align-items-center justify-content-between">
          <Box className="d-flex align-items-center gap-2">
            <FilePresentIcon sx={{ color: "#6F2DA8" }} />
            <Typography variant="body2">
              <strong>Lease Agreement:</strong> ABC Properties (PDF)
            </Typography>
          </Box>
          <Button variant="outlined" color="primary" size="small">
            Download
          </Button>
        </Box>
      </Paper> */}

            {/* ⚠️ Alerts Section */}
            <Paper elevation={2} className="p-4 rounded-4">
                <Typography variant="h6" sx={{ color: "#E01B24", fontWeight: 600 }}>
                    Expiration Alerts
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box className="p-3 border rounded-4 bg-light">
                    ⚠️ <strong>Leases Expiring in 90 Days:</strong> Texas (3), Arizona (2)
                    <br />
                    📅 <strong>Upcoming Renewals:</strong> ABC Properties LLC, Skyline Holdings
                </Box>
            </Paper>
        </div>
    );
};

export default ManageLeasing;
