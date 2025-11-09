import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  Divider,
  Button,
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import RefreshIcon from "@mui/icons-material/Refresh";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import WatchIcon from "@mui/icons-material/Watch";
import { useNavigate } from "react-router-dom";
import AddDevicesForStoreTakeOverForm from "../Components/AddDevicesForStoreTakeOverForm/AddDevicesForStoreTakeOverForm";

const StoresTakeOver = () => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();

  // 🧩 Dummy Takeover Data
  const takeovers = [
    {
      storeId: "TECH1255",
      storeName: "1255 W Main Street",
      oldOwner: "Alpha Wireless LLC",
      newOwner: "Techno Communications LLC",
      takeoverDate: "2025-09-12",
      market: "Arizona",
      cashInStore: "$3,500",
      alarmCode: "4421",
      safeBoxCode: "8812",
      iPhones: 12,
      iWatches: 3,
      status: "Completed",
    },
    {
      storeId: "TECH1301",
      storeName: "1301 E Bell Rd",
      oldOwner: "Mobile World Inc.",
      newOwner: "Techno Communications LLC",
      takeoverDate: "2025-08-03",
      market: "Texas",
      cashInStore: "$2,850",
      alarmCode: "5531",
      safeBoxCode: "7770",
      iPhones: 8,
      iWatches: 2,
      status: "In Progress",
    },
  ];

  const filteredTakeovers = takeovers.filter(
    (t) =>
      t.storeName.toLowerCase().includes(search.toLowerCase()) ||
      t.market.toLowerCase().includes(search.toLowerCase()) ||
      t.newOwner.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangePage = (e, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const handleViewDetails = (id) => {
    navigate(`/detailed-store-take-over/${id}`); // Navigate to takeover details page
  };

  return (
    <div className="container-fluid py-4">
      {/* 🟣 Header Section */}
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
            <CompareArrowsIcon sx={{ fontSize: 42, color: "#fff" }} />
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                Store Takeovers Overview
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Monitor store ownership transitions and asset handovers.
              </Typography>
            </Box>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-md-end justify-content-start gap-2 mt-3 mt-md-0">
            <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
              Add Takeover
            </Button>
            <AddDevicesForStoreTakeOverForm />
            {/* <Button variant="contained" startIcon={<AddIcon />}>
              Add Devices
            </Button> */}
            <Button variant="outlined" color="inherit" startIcon={<RefreshIcon />}>
              Refresh
            </Button>
          </div>
        </div>
      </Paper>

      {/* 🔍 Search Bar */}
      <Box className="mb-3 d-flex flex-wrap align-items-center gap-2">
        <TextField
          placeholder="Search by store, market, or owner..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ width: 320 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* 📋 Table Section */}
      <Paper elevation={3} className="p-3 rounded-4">
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "primary.main",
            mb: 2,
          }}
        >
          Takeover Records
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <TableContainer className="table-responsive">
          <Table>
            <TableHead sx={{ backgroundColor: "#f3ecf9" }}>
              <TableRow>
                <TableCell><strong>Store Name</strong></TableCell>
                <TableCell><strong>Old Owner</strong></TableCell>
                <TableCell><strong>New Owner</strong></TableCell>
                <TableCell><strong>Cash in Store</strong></TableCell>
                <TableCell><strong>Alarm Code</strong></TableCell>
                <TableCell><strong>Safe Box Code</strong></TableCell>
                <TableCell><strong><SmartphoneIcon sx={{ fontSize: 18, mr: 1, color: "#6F2DA8" }} />iPhones</strong></TableCell>
                <TableCell><strong><WatchIcon sx={{ fontSize: 18, mr: 1, color: "#6F2DA8" }} />iWatches</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
                <TableCell align="center"><strong>Action</strong></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredTakeovers.length ? (
                filteredTakeovers
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => (
                    <TableRow
                      key={i}
                      hover
                      sx={{
                        transition: "0.3s",
                        "&:hover": { backgroundColor: "#faf8fc" },
                      }}
                    >
                      <TableCell>{row.storeName}</TableCell>
                      <TableCell>{row.oldOwner}</TableCell>
                      <TableCell>{row.newOwner}</TableCell>
                      <TableCell>
                        <AttachMoneyIcon sx={{ color: "#6F2DA8", fontSize: 18, mr: 0.5, verticalAlign: "middle" }} />
                        {row.cashInStore}
                      </TableCell>
                      <TableCell>
                        <LockIcon sx={{ color: "#6F2DA8", fontSize: 18, mr: 0.5, verticalAlign: "middle" }} />
                        {row.alarmCode}
                      </TableCell>
                      <TableCell>
                        <LockIcon sx={{ color: "#6F2DA8", fontSize: 18, mr: 0.5, verticalAlign: "middle" }} />
                        {row.safeBoxCode}
                      </TableCell>
                      <TableCell>{row.iPhones}</TableCell>
                      <TableCell>{row.iWatches}</TableCell>
                      <TableCell>
                        <Chip
                          label={row.status}
                          color={
                            row.status === "Completed"
                              ? "success"
                              : row.status === "In Progress"
                                ? "warning"
                                : "default"
                          }
                          size="small"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="View Details">
                          <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            startIcon={<VisibilityIcon />}
                            onClick={() => handleViewDetails(row.storeId)}
                          >
                            View
                          </Button>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={10} align="center" sx={{ py: 4 }}>
                    No takeover records found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredTakeovers.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default StoresTakeOver;
