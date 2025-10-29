import React, { useState } from "react";
import {
    Card,
    CardContent,
    Typography,
    Chip,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    IconButton,
    TablePagination,
    Box,
    Tooltip,
    Divider,
} from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import StoreIcon from "@mui/icons-material/Store";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EngineeringIcon from "@mui/icons-material/Engineering";

const MaintenanceRequestsDashboard = () => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // Dummy maintenance tickets
    const requests = [
        {
            id: "MT-101",
            store: "Metro by T-Mobile - Chandler",
            category: "HVAC Repair",
            status: "Open",
            assigned_to: "John Doe",
            date: "2025-10-12",
        },
        {
            id: "MT-102",
            store: "Metro by T-Mobile - Mesa Blvd",
            category: "Plumbing",
            status: "Resolved",
            assigned_to: "Sarah Lee",
            date: "2025-09-28",
        },
        {
            id: "MT-103",
            store: "Metro by T-Mobile - Phoenix Central",
            category: "Electrical",
            status: "Open",
            assigned_to: "Mike Brown",
            date: "2025-10-20",
        },
        {
            id: "MT-104",
            store: "Metro by T-Mobile - Tempe Plaza",
            category: "Roof Leak",
            status: "Resolved",
            assigned_to: "David Smith",
            date: "2025-08-18",
        },
        {
            id: "MT-105",
            store: "Metro by T-Mobile - Gilbert Ave",
            category: "Signage Replacement",
            status: "Open",
            assigned_to: "Anna Johnson",
            date: "2025-10-25",
        },
    ];

    const handleChangePage = (e, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    };

    return (
        <Card className="shadow-sm rounded-4 border-0 h-100">
            <CardContent>
                {/* ===== Header ===== */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <BuildIcon color="warning" sx={{ mr: 1 }} />
                        <div>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Maintenance Requests
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Track open and resolved maintenance issues per store.
                            </Typography>
                        </div>
                    </div>
                    <IconButton size="small">
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <Divider sx={{ mb: 2 }} />

                {/* ===== Maintenance Table ===== */}
                <Box sx={{ overflowX: "auto" }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 600 }}>Ticket ID</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>
                                    <StoreIcon sx={{ fontSize: 18, mr: 0.5 }} /> Store
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Category</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>Assigned To</TableCell>
                                <TableCell sx={{ fontWeight: 600 }}>
                                    <CalendarMonthIcon sx={{ fontSize: 18, mr: 0.5 }} /> Date
                                </TableCell>
                                <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>
                                    Status
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {requests
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((req) => (
                                    <TableRow key={req.id} hover>
                                        <TableCell>{req.id}</TableCell>
                                        <TableCell>{req.store}</TableCell>
                                        <TableCell>{req.category}</TableCell>
                                        <TableCell>
                                            <EngineeringIcon
                                                sx={{ fontSize: 18, mr: 0.5, color: "#6b7280" }}
                                            />
                                            {req.assigned_to}
                                        </TableCell>
                                        <TableCell>{req.date}</TableCell>
                                        <TableCell align="center">
                                            {req.status === "Resolved" ? (
                                                <Chip
                                                    icon={<CheckCircleIcon />}
                                                    label="Resolved"
                                                    color="success"
                                                    size="small"
                                                />
                                            ) : (
                                                <Chip
                                                    icon={<PendingActionsIcon />}
                                                    label="Open"
                                                    color="warning"
                                                    size="small"
                                                />
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </Box>

                {/* ===== Pagination ===== */}
                <TablePagination
                    component="div"
                    count={requests.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                    sx={{ borderTop: "1px solid #eee" }}
                />
            </CardContent>
        </Card>
    );
};

export default MaintenanceRequestsDashboard;
