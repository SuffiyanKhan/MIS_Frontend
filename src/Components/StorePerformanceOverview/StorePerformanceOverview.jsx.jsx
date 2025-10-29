import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Rating,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const StorePerformanceOverview = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: "revenue", direction: "desc" });

  const stores = [
    {
      name: "Downtown Metro",
      market: "Phoenix",
      manager: "Sarah Johnson",
      revenue: 265000,
      employees: 14,
      status: "Active",
      rating: 4.8,
    },
    {
      name: "Sunset Plaza",
      market: "Tucson",
      manager: "Michael Brown",
      revenue: 240000,
      employees: 12,
      status: "Active",
      rating: 4.5,
    },
    {
      name: "Riverside",
      market: "Mesa",
      manager: "David Lee",
      revenue: 185000,
      employees: 10,
      status: "Inactive",
      rating: 3.9,
    },
    {
      name: "Greenwood Mall",
      market: "Tempe",
      manager: "Emily Clark",
      revenue: 210000,
      employees: 11,
      status: "Active",
      rating: 4.2,
    },
    {
      name: "Uptown Central",
      market: "Scottsdale",
      manager: "Robert Davis",
      revenue: 195000,
      employees: 9,
      status: "Active",
      rating: 4.0,
    },
  ];

  const handleMenuOpen = (event, store) => {
    setSelectedStore(store);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedStore(null);
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const sortedStores = [...stores].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
    if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="row g-4 mb-4">
      <div className="col-12">
        <Card className="shadow-sm rounded-4 border-0">
          <CardContent>
            {/* Header */}
            <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
              <div className="d-flex align-items-center mb-2 mb-md-0">
                <StoreMallDirectoryIcon color="info" sx={{ mr: 1 }} />
                <div>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Store Performance Overview
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Summary of store performance, revenue, and operational status
                  </Typography>
                </div>
              </div>
            </div>

            {/* Table */}
            <Box sx={{ overflowX: "auto" }}>
              <Table sx={{ minWidth: 800 }}>
                <TableHead>
                  <TableRow>
                    <TableCell onClick={() => handleSort("name")} sx={{ cursor: "pointer", fontWeight: 600 }}>
                      Store Name{" "}
                      {sortConfig.key === "name" &&
                        (sortConfig.direction === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </TableCell>
                    <TableCell onClick={() => handleSort("market")} sx={{ cursor: "pointer", fontWeight: 600 }}>
                      Market
                      {sortConfig.key === "market" &&
                        (sortConfig.direction === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </TableCell>
                    <TableCell onClick={() => handleSort("manager")} sx={{ cursor: "pointer", fontWeight: 600 }}>
                      Manager
                    </TableCell>
                    <TableCell onClick={() => handleSort("employees")} sx={{ cursor: "pointer", fontWeight: 600 }}>
                      Employees
                    </TableCell>
                    <TableCell onClick={() => handleSort("revenue")} sx={{ cursor: "pointer", fontWeight: 600 }}>
                      Revenue
                      {sortConfig.key === "revenue" &&
                        (sortConfig.direction === "asc" ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Rating</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
                    <TableCell sx={{ fontWeight: 600, textAlign: "center" }}>Actions</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {sortedStores.map((store, index) => (
                    <TableRow
                      key={index}
                      hover
                      sx={{
                        "&:hover": { backgroundColor: "#f9f9fb" },
                        transition: "0.3s",
                      }}
                    >
                      <TableCell>{store.name}</TableCell>
                      <TableCell>{store.market}</TableCell>
                      <TableCell>{store.manager}</TableCell>
                      <TableCell>{store.employees}</TableCell>
                      <TableCell>${store.revenue.toLocaleString()}</TableCell>
                      <TableCell>
                        <Rating
                          name={`rating-${index}`}
                          value={store.rating}
                          precision={0.1}
                          size="small"
                          readOnly
                        />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={store.status}
                          color={store.status === "Active" ? "success" : "default"}
                          size="small"
                          variant="filled"
                        />
                      </TableCell>
                      <TableCell align="center">
                        <IconButton onClick={(e) => handleMenuOpen(e, store)}>
                          <MoreVertIcon color="action" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>

            {/* Actions Menu */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                sx: {
                  borderRadius: 2,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}>View Details</MenuItem>
              <MenuItem onClick={handleMenuClose}>Edit Store</MenuItem>
              <MenuItem onClick={handleMenuClose}>View Reports</MenuItem>
            </Menu>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StorePerformanceOverview;
