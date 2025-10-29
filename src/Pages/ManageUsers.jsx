import React, { useState } from "react";
import {
    Box,
    Typography,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    Chip,
    IconButton,
    TextField,
    InputAdornment,
    Tooltip,
    Paper,
    Menu,
    MenuItem,
    TablePagination,
    Divider,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenIcon from "@mui/icons-material/LockOpen"; // ✅ For Permissions icon

import "bootstrap/dist/css/bootstrap.min.css";

function ManageUsers() {
    const [search, setSearch] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    // ===== Dummy User Data =====
    const users = [
        {
            id: 1,
            name: "Sarah Johnson",
            email: "sarah.j@metro.com",
            role: "Store Manager",
            store: "Mesa Blvd",
            status: "Active",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            id: 2,
            name: "John Doe",
            email: "john.doe@metro.com",
            role: "Sales Rep",
            store: "Gilbert Square",
            status: "Active",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
            id: 3,
            name: "Jane Smith",
            email: "jane.smith@metro.com",
            role: "Assistant Manager",
            store: "Scottsdale Mall",
            status: "Inactive",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        },
        {
            id: 4,
            name: "Michael Brown",
            email: "michael.b@metro.com",
            role: "CSR",
            store: "Chandler Heights",
            status: "Active",
            avatar: "https://randomuser.me/api/portraits/men/52.jpg",
        },
        {
            id: 5,
            name: "Kevin Lee",
            email: "kevin.lee@metro.com",
            role: "Inventory Lead",
            store: "Tempe Plaza",
            status: "Active",
            avatar: "https://randomuser.me/api/portraits/men/41.jpg",
        },
        {
            id: 6,
            name: "Amy Rogers",
            email: "amy.r@metro.com",
            role: "Cashier",
            store: "Downtown Phoenix",
            status: "Inactive",
            avatar: "https://randomuser.me/api/portraits/women/77.jpg",
        },
    ];

    // ===== Filtering Logic =====
    const filteredUsers = users.filter(
        (u) =>
            u.name.toLowerCase().includes(search.toLowerCase()) ||
            u.email.toLowerCase().includes(search.toLowerCase()) ||
            u.store.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination slice
    const paginatedUsers = filteredUsers.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    // ===== Menu Handlers =====
    const handleMenuOpen = (event, user) => {
        setAnchorEl(event.currentTarget);
        setSelectedUser(user);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedUser(null);
    };

    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Box className="container-fluid py-4">
            {/* ===== HEADER ===== */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <div>
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#1e1e2d" }}>
                        Manage Users
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                        Manage system users, roles, and access permissions.
                    </Typography>
                </div>

                <div className="d-flex align-items-center gap-3 flex-wrap">
                    <TextField
                        size="small"
                        placeholder="Search user..."
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

                    <Tooltip title="Add New User">
                        <IconButton color="primary" sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
                            <PersonAddAltIcon />
                        </IconButton>
                    </Tooltip>

                    <Chip label={`${filteredUsers.length} Users`} color="primary" />
                </div>
            </div>

            {/* ===== USERS TABLE ===== */}
            <Paper sx={{ borderRadius: 3, overflow: "hidden", boxShadow: 3 }}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: "#6d28d9" }}>
                        <TableRow>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>User</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Role</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Store</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold" }}>Status</TableCell>
                            <TableCell sx={{ color: "white", fontWeight: "bold", textAlign: "right" }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {paginatedUsers.map((user) => (
                            <TableRow
                                key={user.id}
                                hover
                                sx={{
                                    transition: "0.2s",
                                    "&:hover": { backgroundColor: "#f9fafb" },
                                }}
                            >
                                <TableCell>
                                    <div className="d-flex align-items-center gap-2">
                                        <Avatar src={user.avatar} alt={user.name} />
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {user.name}
                                        </Typography>
                                    </div>
                                </TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.store}</TableCell>
                                <TableCell>
                                    <Chip
                                        label={user.status}
                                        color={user.status === "Active" ? "success" : "default"}
                                        size="small"
                                    />
                                </TableCell>
                                <TableCell align="right">
                                    <IconButton>
                                        <VisibilityIcon fontSize="small" color="info" />
                                    </IconButton>
                                    <IconButton onClick={(e) => handleMenuOpen(e, user)}>
                                        <MoreVertIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                {/* ===== PAGINATION ===== */}
                <TablePagination
                    component="div"
                    count={filteredUsers.length}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    rowsPerPageOptions={[5, 10, 25]}
                />
            </Paper>

            {/* ===== ACTION MENU ===== */}
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {/* <MenuItem onClick={handleMenuClose} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <VisibilityIcon fontSize="small" color="info" /> View Details
                </MenuItem> */}

                <MenuItem onClick={handleMenuClose} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <EditIcon fontSize="small" color="warning" /> Edit User
                </MenuItem>

                <MenuItem onClick={handleMenuClose} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LockOpenIcon fontSize="small" color="primary" /> Manage Permissions
                </MenuItem>

                <Divider />

                <MenuItem onClick={handleMenuClose} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <DeleteIcon fontSize="small" color="error" /> Delete User
                </MenuItem>
            </Menu>
        </Box>
    );
}

export default ManageUsers;
