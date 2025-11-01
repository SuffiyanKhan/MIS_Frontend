import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Chip,
} from "@mui/material";
import DomainIcon from "@mui/icons-material/Domain";

const LeaseSummaryTable = () => {
  // 📄 Dummy Lease Data
  const leases = [
    {
      location: "Store #214 - Phoenix, AZ",
      landlord: "Metro Estates LLC",
      rent: "$3,200",
      start: "Jan 2023",
      end: "Dec 2025",
      status: "Active",
    },
    {
      location: "Store #118 - Tucson, AZ",
      landlord: "Civic Real Holdings",
      rent: "$2,950",
      start: "Jul 2021",
      end: "Jun 2024",
      status: "Expiring Soon",
    },
    {
      location: "Store #342 - El Paso, TX",
      landlord: "Prime Retail Group",
      rent: "$3,750",
      start: "Mar 2022",
      end: "Mar 2027",
      status: "Active",
    },
    {
      location: "Store #401 - Dallas, TX",
      landlord: "Lone Star Realty",
      rent: "$4,100",
      start: "Oct 2020",
      end: "Oct 2026",
      status: "Active",
    },
    {
      location: "Store #507 - Austin, TX",
      landlord: "Civic Realty Group",
      rent: "$3,600",
      start: "Apr 2022",
      end: "Apr 2025",
      status: "Expiring Soon",
    },
    {
      location: "Store #612 - Albuquerque, NM",
      landlord: "Desert Holdings",
      rent: "$3,450",
      start: "Jan 2021",
      end: "Jan 2026",
      status: "Active",
    },
  ];

  // 🔹 Pagination State
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Slice data for current page
  const paginatedLeases = leases.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box className="mb-5">
      <Typography
        variant="subtitle1"
        sx={{ mb: 2, fontWeight: 600, color: "#6F2DA8" }}
      >
        <DomainIcon sx={{ mr: 1, color: "#6F2DA8" }} />
        Active Lease Summary
      </Typography>

      {/* 📋 Table */}
      <Box
        className="table-responsive rounded-4 border"
        sx={{
          backgroundColor: "#faf8fc",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#f2edf7" }}>
            <TableRow>
              <TableCell><strong>Store Location</strong></TableCell>
              <TableCell><strong>Landlord</strong></TableCell>
              <TableCell><strong>Rent</strong></TableCell>
              <TableCell><strong>Start Date</strong></TableCell>
              <TableCell><strong>End Date</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedLeases.map((lease, index) => (
              <TableRow key={index}>
                <TableCell>{lease.location}</TableCell>
                <TableCell>{lease.landlord}</TableCell>
                <TableCell>{lease.rent}</TableCell>
                <TableCell>{lease.start}</TableCell>
                <TableCell>{lease.end}</TableCell>
                <TableCell>
                  <Chip
                    label={lease.status}
                    color={
                      lease.status === "Active"
                        ? "success"
                        : lease.status === "Expiring Soon"
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

        {/* 📄 Pagination Controls */}
        <TablePagination
          component="div"
          count={leases.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[3, 5, 10]}
          sx={{
            backgroundColor: "#f2edf7",
            borderTop: "1px solid #e0e0e0",
            color: "#6F2DA8",
            ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows": {
              fontWeight: 500,
              color: "#6F2DA8",
            },
            ".MuiTablePagination-select": {
              color: "#6F2DA8",
            },
            ".MuiTablePagination-actions button": {
              color: "#6F2DA8",
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default LeaseSummaryTable;
