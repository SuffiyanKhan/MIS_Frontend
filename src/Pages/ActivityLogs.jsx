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
import RefreshIcon from "@mui/icons-material/Refresh";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonIcon from "@mui/icons-material/Person";
import EventIcon from "@mui/icons-material/Event";
import ApartmentIcon from "@mui/icons-material/Apartment";

const ActivityLogs = () => {
  const [search, setSearch] = useState("");
  const [moduleFilter, setModuleFilter] = useState("All");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // 🧩 Dummy Logs Data
  const logs = [
    {
      id: 1,
      user: "John Doe",
      role: "Super Admin",
      module: "Leasing",
      action: "Updated Lease Details",
      details: "Modified rent for Store 1255 - Arizona Market",
      timestamp: "2025-10-28 15:22",
      status: "Success",
    },
    {
      id: 2,
      user: "Sarah Khan",
      role: "Market Manager",
      module: "Takeovers",
      action: "Added New Takeover Record",
      details: "Added Store 1301 takeover for Techno Comm LLC",
      timestamp: "2025-10-27 12:15",
      status: "Success",
    },
    {
      id: 3,
      user: "Admin User",
      role: "Super Admin",
      module: "Employees",
      action: "Deleted Employee Record",
      details: "Removed employee from Texas Market",
      timestamp: "2025-10-25 09:32",
      status: "Warning",
    },
    {
      id: 4,
      user: "System",
      role: "System Bot",
      module: "Security",
      action: "User Login Attempt Failed",
      details: "Invalid password entered for user manager@metro.com",
      timestamp: "2025-10-24 22:19",
      status: "Error",
    },
  ];

  const filteredLogs = logs.filter(
    (log) =>
      (moduleFilter === "All" || log.module === moduleFilter) &&
      (log.user.toLowerCase().includes(search.toLowerCase()) ||
        log.details.toLowerCase().includes(search.toLowerCase()) ||
        log.action.toLowerCase().includes(search.toLowerCase()))
  );

  const handleChangePage = (e, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
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
        <div className="row align-items-center">
          <div className="col-12 col-md-8 d-flex align-items-center gap-3">
            <TimelineIcon sx={{ fontSize: 42, color: "#fff" }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Activity Logs & Audit Trail
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Track all actions and system activities. Only visible to Super Admin & Owner.
              </Typography>
            </Box>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-start gap-2 mt-3 mt-md-0">
            <Button variant="contained" color="secondary" startIcon={<DownloadIcon />}>
              Export Logs
            </Button>
            <Button variant="outlined" color="inherit" startIcon={<RefreshIcon />}>
              Refresh
            </Button>
          </div>
        </div>
      </Paper>

      {/* 💡 Summary Cards */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-3">
          <Paper className="p-4 rounded-4 text-center" elevation={2}>
            <PersonIcon sx={{ color: "#6F2DA8", fontSize: 36, mb: 1 }} />
            <Typography variant="h6">Total Actions</Typography>
            <Typography variant="h4" fontWeight={700}>
              124
            </Typography>
          </Paper>
        </div>
        <div className="col-12 col-md-3">
          <Paper className="p-4 rounded-4 text-center" elevation={2}>
            <ApartmentIcon sx={{ color: "#6F2DA8", fontSize: 36, mb: 1 }} />
            <Typography variant="h6">Modules Involved</Typography>
            <Typography variant="h4" fontWeight={700}>
              6
            </Typography>
          </Paper>
        </div>
        <div className="col-12 col-md-3">
          <Paper className="p-4 rounded-4 text-center" elevation={2}>
            <EventIcon sx={{ color: "#6F2DA8", fontSize: 36, mb: 1 }} />
            <Typography variant="h6">Last Activity</Typography>
            <Typography variant="h5">Oct 28, 2025</Typography>
          </Paper>
        </div>
        <div className="col-12 col-md-3">
          <Paper className="p-4 rounded-4 text-center" elevation={2}>
            <DeleteSweepIcon sx={{ color: "#E01B24", fontSize: 36, mb: 1 }} />
            <Typography variant="h6">Errors / Warnings</Typography>
            <Typography variant="h4" color="error.main" fontWeight={700}>
              5
            </Typography>
          </Paper>
        </div>
      </div>

      {/* 🔍 Filters */}
      <Box className="mb-3 d-flex flex-wrap align-items-center gap-2">
        <TextField
          placeholder="Search by user or action..."
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
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            displayEmpty
          >
            <MenuItem value="All">All Modules</MenuItem>
            <MenuItem value="Leasing">Leasing</MenuItem>
            <MenuItem value="Takeovers">Takeovers</MenuItem>
            <MenuItem value="Employees">Employees</MenuItem>
            <MenuItem value="Security">Security</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* 📋 Logs Table */}
      <Paper elevation={2} className="p-3 rounded-4">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "primary.main", mb: 2 }}
        >
          Recent Activity Logs
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <TableContainer className="table-responsive">
          <Table>
            <TableHead sx={{ backgroundColor: "#f2edf7" }}>
              <TableRow>
                <TableCell><strong>User</strong></TableCell>
                <TableCell><strong>Role</strong></TableCell>
                <TableCell><strong>Module</strong></TableCell>
                <TableCell><strong>Action</strong></TableCell>
                <TableCell><strong>Details</strong></TableCell>
                <TableCell><strong>Timestamp</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredLogs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((log) => (
                <TableRow key={log.id} hover>
                  <TableCell>{log.user}</TableCell>
                  <TableCell>{log.role}</TableCell>
                  <TableCell>{log.module}</TableCell>
                  <TableCell>{log.action}</TableCell>
                  <TableCell>{log.details}</TableCell>
                  <TableCell>{log.timestamp}</TableCell>
                  <TableCell>
                    <Chip
                      label={log.status}
                      color={
                        log.status === "Success"
                          ? "success"
                          : log.status === "Warning"
                          ? "warning"
                          : "error"
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
          count={filteredLogs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ActivityLogs;
