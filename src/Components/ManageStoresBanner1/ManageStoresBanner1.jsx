import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";

function ManageStoresBanner1() {
  // 🔹 Dummy Data (replace later with API data)
  const stores = [
    {
      id: 1,
      name: "Main City Store",
      manager: "Ali Khan",
      location: "Karachi, Pakistan",
      status: "Active",
    },
    {
      id: 2,
      name: "Mall Branch",
      manager: "Sara Ahmed",
      location: "Lahore, Pakistan",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Downtown Outlet",
      manager: "Hamza Ali",
      location: "Islamabad, Pakistan",
      status: "Active",
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
        Manage Stores
      </Typography>

      {/* Table */}
      <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Store Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Manager</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Location</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold", textAlign: "center" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {stores.map((store, index) => (
              <TableRow
                key={store.id}
                sx={{
                  "&:hover": { backgroundColor: "#fafafa" },
                }}
              >
                <TableCell>{index + 1}</TableCell>
                <TableCell>{store.name}</TableCell>
                <TableCell>{store.manager}</TableCell>
                <TableCell>{store.location}</TableCell>
                <TableCell>
                  <Typography
                    sx={{
                      color: store.status === "Active" ? "green" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {store.status}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ManageStoresBanner1;
