// // // import React from 'react'
// // // import ManageStoresBanner1 from '../Components/ManageStoresBanner1/ManageStoresBanner1'

// // // function ManageStores() {
// // //   return (
// // //     <div>
// // //       <ManageStoresBanner1 />
// // //     </div>
// // //   )
// // // }

// // // export default ManageStores

// // import React, { useCallback, useEffect, useState } from "react";
// // import {
// //   Box,
// //   Button,
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   Paper,
// //   Checkbox,
// //   TextField,
// //   InputAdornment,
// //   IconButton,
// //   CircularProgress,
// //   TablePagination,
// //   Typography,
// //   Dialog,
// //   DialogTitle,
// //   DialogContent,
// //   DialogActions,
// // } from "@mui/material";
// // import SearchIcon from "@mui/icons-material/Search";
// // import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// // import DeleteIcon from "@mui/icons-material/Delete";
// // import BasicBreadcrumbs from "../Components/BasicBreadcrumbs/BasicBreadcrumbs";

// // function ManageStores() {
// //   const [stores, setStores] = useState([]);
// //   const [filteredStores, setFilteredStores] = useState([]);
// //   const [selectedRows, setSelectedRows] = useState([]);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [deleteId, setDeleteId] = useState(null);
// //   const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
// //   const [deleteLoader, setDeleteLoader] = useState(false);

// //   // Pagination states
// //   const [page, setPage] = useState(0);
// //   const [rowsPerPage, setRowsPerPage] = useState(100);

// //   // Fetch all stores
// //   const fetchAllStores = useCallback(async () => {
// //     setLoading(true);
// //     try {
// //       // const response = await getAllStores();
// //       setStores([]);
// //       setFilteredStores(response);
// //     } catch (error) {
// //       console.error("Error fetching stores:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     fetchAllStores();
// //   }, [fetchAllStores]);

// //   // Handle search
// //   const handleSearchChange = (e) => {
// //     const query = e.target.value.toLowerCase();
// //     setSearchTerm(query);

// //     if (!query.trim()) {
// //       setFilteredStores(stores);
// //       return;
// //     }

// //     const filtered = stores.filter((store) =>
// //       Object.values(store).some(
// //         (val) => typeof val === "string" && val.toLowerCase().includes(query)
// //       )
// //     );
// //     setFilteredStores(filtered);
// //     setPage(0);
// //   };

// //   // Handle checkbox select
// //   const handleRowSelect = (id) => {
// //     setSelectedRows((prev) =>
// //       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
// //     );
// //   };

// //   const handleSelectAll = () => {
// //     if (selectedRows.length === filteredStores.length) {
// //       setSelectedRows([]);
// //     } else {
// //       setSelectedRows(filteredStores.map((store) => store.id));
// //     }
// //   };

// //   // Delete functions
// //   const handleDelete = (id) => {
// //     setDeleteId(id);
// //     setConfirmDeleteOpen(true);
// //   };

// //   const confirmDelete = async () => {
// //     setDeleteLoader(true);
// //     try {
// //       await deleteStoreServices(deleteId);
// //       setConfirmDeleteOpen(false);
// //       setDeleteLoader(false);
// //       setSelectedRows([]);
// //       fetchAllStores();
// //     } catch (err) {
// //       console.error("Error deleting:", err);
// //       setDeleteLoader(false);
// //     }
// //   };

// //   const handleDeleteMultiple = async () => {
// //     console.log("Deleting multiple:", selectedRows);
// //     // TODO: Implement bulk delete if API supports
// //     setSelectedRows([]);
// //   };

// //   // Pagination handlers
// //   const handleChangePage = (event, newPage) => setPage(newPage);
// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };

// //   const paginatedStores = filteredStores.slice(
// //     page * rowsPerPage,
// //     page * rowsPerPage + rowsPerPage
// //   );

// //   return (
// //     <div className="container-fluid my-4 py-3">
// //       <BasicBreadcrumbs name={"Manage Stores"} />
// //       <Typography variant="h6" className="mb-3">
// //         Manage Stores
// //       </Typography>

// //       {/* 🔍 Search + Add Button */}
// //       <div className="d-flex justify-content-between align-items-center mb-3">
// //         <TextField
// //           size="small"
// //           placeholder="Search stores..."
// //           value={searchTerm}
// //           onChange={handleSearchChange}
// //           sx={{ width: 300 }}
// //           InputProps={{
// //             endAdornment: (
// //               <InputAdornment position="end">
// //                 <IconButton>
// //                   <SearchIcon />
// //                 </IconButton>
// //               </InputAdornment>
// //             ),
// //           }}
// //         />
// //         {/* <SuperAdminAddStores fetchAllStores={fetchAllStores} /> */}
// //       </div>

// //       {/* 🧾 Selection Actions */}
// //       {selectedRows.length > 0 && (
// //         <Box
// //           sx={{
// //             background: "#f9f9f9",
// //             border: "1px solid #ddd",
// //             borderRadius: "8px",
// //             p: 2,
// //             mb: 2,
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           <Typography>
// //             {selectedRows.length === 1
// //               ? "1 store selected"
// //               : `${selectedRows.length} stores selected`}
// //           </Typography>
// //           {selectedRows.length === 1 ? (
// //             <IconButton onClick={() => handleDelete(selectedRows[0])}>
// //               <DeleteIcon color="error" />
// //             </IconButton>
// //           ) : (
// //             <Button
// //               variant="contained"
// //               color="error"
// //               onClick={handleDeleteMultiple}
// //             >
// //               Delete All
// //             </Button>
// //           )}
// //         </Box>
// //       )}

// //       {/* 🧮 Table */}
// //       <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
// //         <Table >
// //           <TableHead sx={{ backgroundColor: "#6f2da8" }} className="sticky-top">
// //             <TableRow >
// //               <TableCell sx={{ color: "white" }} padding="checkbox">
// //                 <Checkbox
// //                   sx={{
// //                     color: "#fff",
// //                     "&.Mui-checked": { color: "#fff" },
// //                   }}
// //                   checked={
// //                     selectedRows.length === filteredStores.length &&
// //                     filteredStores.length > 0
// //                   }
// //                   indeterminate={
// //                     selectedRows.length > 0 &&
// //                     selectedRows.length < filteredStores.length
// //                   }
// //                   onChange={handleSelectAll}
// //                 />
// //               </TableCell>
// //               <TableCell className='p-0' sx={{ color: 'white', width: "200px", fontSize: "14px" }}>TECH ID</TableCell>
// //               <TableCell sx={{ color: 'white', width: "200px", fontSize: "14px" }} className='p-0'>Market</TableCell>
// //               <TableCell sx={{ color: 'white', width: "200px", fontSize: "14px" }} className='p-0'>Door Code</TableCell>
// //               <TableCell sx={{ color: 'white', width: "200px", fontSize: "14px" }}>Store Name</TableCell>
// //               <TableCell sx={{ color: 'white', width: "200px", fontSize: "14px" }}>Store Email</TableCell>
// //               <TableCell sx={{ color: 'white', width: "200px", fontSize: "14px" }}>Store Phone</TableCell>
// //               <TableCell className='p-0' sx={{ color: 'white', fontSize: "14px", width: "200px" }}>Store Address</TableCell>
// //             </TableRow>
// //           </TableHead>

// //           <TableBody>
// //             {loading ? (
// //               <TableRow>
// //                 <TableCell colSpan={8} align="center" height={300}>
// //                   <CircularProgress />
// //                 </TableCell>
// //               </TableRow>
// //             ) : paginatedStores.length > 0 ? (
// //               paginatedStores.map((store) => (
// //                 <TableRow key={store.id} hover>
// //                   <TableCell padding="checkbox">
// //                     <Checkbox
// //                       checked={selectedRows.includes(store.id)}
// //                       onChange={() => handleRowSelect(store.id)}
// //                     />
// //                   </TableCell>
// //                   <TableCell className='p-0' sx={{ fontSize: "14px" }}>{store.bdi_id}</TableCell>
// //                   <TableCell className='p-0' sx={{ fontSize: "14px" }}>{store.market}</TableCell>
// //                   <TableCell className='p-0' sx={{ fontSize: "14px" }}>{store.door_code}</TableCell>
// //                   <TableCell sx={{ fontSize: "14px" }}>{store.store_name}</TableCell>
// //                   <TableCell className='p-0' sx={{ fontSize: "14px" }}>{store.stroe_email}</TableCell>
// //                   <TableCell sx={{ fontSize: "14px" }}>{store.store_phone}</TableCell>
// //                   <TableCell sx={{ fontSize: "14px" }}>{store.store_addres}</TableCell>
// //                 </TableRow>
// //               ))
// //             ) : (
// //               <TableRow>
// //                 <TableCell colSpan={8} align="center">
// //                   No stores found.
// //                 </TableCell>
// //               </TableRow>
// //             )}
// //           </TableBody>
// //         </Table>
// //       </TableContainer>

// //       {/* 📄 Pagination */}
// //       <TablePagination
// //         rowsPerPageOptions={[100, 200, 400, 500]}
// //         component="div"
// //         count={filteredStores.length}
// //         rowsPerPage={rowsPerPage}
// //         page={page}
// //         onPageChange={handleChangePage}
// //         onRowsPerPageChange={handleChangeRowsPerPage}
// //       />

// //       {/* ⚠️ Confirm Delete Dialog */}
// //       <Dialog
// //         open={confirmDeleteOpen}
// //         onClose={() => setConfirmDeleteOpen(false)}
// //       >
// //         <DialogTitle
// //           sx={{ display: "flex", alignItems: "center", gap: 1, color: "#d32f2f" }}
// //         >
// //           <WarningAmberIcon color="error" />
// //           Confirm Deletion
// //         </DialogTitle>
// //         <DialogContent dividers>
// //           Are you sure you want to delete this store? This action cannot be undone.
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={() => setConfirmDeleteOpen(false)}>Cancel</Button>
// //           <Button
// //             variant="contained"
// //             color="error"
// //             onClick={confirmDelete}
// //             disabled={deleteLoader}
// //           >
// //             {deleteLoader ? <CircularProgress size={25} /> : "Delete"}
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }

// // export default ManageStores
// import React, { useCallback, useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Checkbox,
//   TextField,
//   InputAdornment,
//   IconButton,
//   CircularProgress,
//   TablePagination,
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// import DeleteIcon from "@mui/icons-material/Delete";
// import BasicBreadcrumbs from "../Components/BasicBreadcrumbs/BasicBreadcrumbs";

// function ManageStores() {
//   const [stores, setStores] = useState([]);
//   const [filteredStores, setFilteredStores] = useState([]);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
//   const [deleteLoader, setDeleteLoader] = useState(false);

//   // Pagination states
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   // 🔹 Dummy Data
//   const dummyStores = [
//     {
//       id: 1,
//       bdi_id: "TECH1255",
//       market: "	ARIZONA",
//       door_code: "70849455",
//       store_name: "1255 W MAIN STREET",
//       stroe_email: "1255wmain@texasmobilepcs.com",
//       store_phone: "0300-1234567",
//       store_addres: "Main Saddar, Karachi",
//     },
//     {
//       id: 2,
//       bdi_id: "ST002",
//       market: "Lahore Downtown",
//       door_code: "L-456",
//       store_name: "Bravo Mart",
//       stroe_email: "bravo@store.com",
//       store_phone: "0311-9876543",
//       store_addres: "Gulberg III, Lahore",
//     },
//     {
//       id: 3,
//       bdi_id: "ST003",
//       market: "Islamabad City",
//       door_code: "I-789",
//       store_name: "Charlie Store",
//       stroe_email: "charlie@store.com",
//       store_phone: "0333-5556667",
//       store_addres: "Blue Area, Islamabad",
//     },
//     {
//       id: 4,
//       bdi_id: "ST004",
//       market: "Hyderabad",
//       door_code: "H-321",
//       store_name: "Delta Grocers",
//       stroe_email: "delta@store.com",
//       store_phone: "0322-4445566",
//       store_addres: "Auto Bahn Road, Hyderabad",
//     },
//     {
//       id: 5,
//       bdi_id: "ST005",
//       market: "Faisalabad",
//       door_code: "F-654",
//       store_name: "Echo Stores",
//       stroe_email: "echo@store.com",
//       store_phone: "0344-1112223",
//       store_addres: "Clock Tower, Faisalabad",
//     },
//   ];

//   // 🔹 Simulated Fetch
//   const fetchAllStores = useCallback(async () => {
//     setLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API delay
//       setStores(dummyStores);
//       setFilteredStores(dummyStores);
//     } catch (error) {
//       console.error("Error fetching stores:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchAllStores();
//   }, [fetchAllStores]);

//   // 🔹 Search Filter
//   const handleSearchChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchTerm(query);

//     if (!query.trim()) {
//       setFilteredStores(stores);
//       return;
//     }

//     const filtered = stores.filter((store) =>
//       Object.values(store).some(
//         (val) => typeof val === "string" && val.toLowerCase().includes(query)
//       )
//     );
//     setFilteredStores(filtered);
//     setPage(0);
//   };

//   // 🔹 Checkbox Selection
//   const handleRowSelect = (id) => {
//     setSelectedRows((prev) =>
//       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
//     );
//   };

//   const handleSelectAll = () => {
//     if (selectedRows.length === filteredStores.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(filteredStores.map((store) => store.id));
//     }
//   };

//   // 🔹 Delete Logic (dummy)
//   const handleDelete = (id) => {
//     setDeleteId(id);
//     setConfirmDeleteOpen(true);
//   };

//   const confirmDelete = async () => {
//     setDeleteLoader(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delete
//       const updated = filteredStores.filter((s) => s.id !== deleteId);
//       setStores(updated);
//       setFilteredStores(updated);
//       setConfirmDeleteOpen(false);
//       setSelectedRows([]);
//     } catch (err) {
//       console.error("Error deleting:", err);
//     } finally {
//       setDeleteLoader(false);
//     }
//   };

//   // 🔹 Pagination
//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedStores = filteredStores.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <div className="container-fluid my-4 py-3">
//       <BasicBreadcrumbs name={"Manage Stores"} />
//       <Typography variant="h6" className="mb-3">
//         Manage Stores
//       </Typography>

//       {/* 🔍 Search + Add Button */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <TextField
//           size="small"
//           placeholder="Search stores..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           sx={{ width: 300 }}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>

//       {/* 🧾 Selection Actions */}
//       {selectedRows.length > 0 && (
//         <Box
//           sx={{
//             background: "#f9f9f9",
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             p: 2,
//             mb: 2,
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           <Typography>
//             {selectedRows.length === 1
//               ? "1 store selected"
//               : `${selectedRows.length} stores selected`}
//           </Typography>
//           {selectedRows.length === 1 ? (
//             <IconButton onClick={() => handleDelete(selectedRows[0])}>
//               <DeleteIcon color="error" />
//             </IconButton>
//           ) : (
//             <Button
//               variant="contained"
//               color="error"
//               onClick={() => alert("Bulk delete not implemented yet!")}
//             >
//               Delete All
//             </Button>
//           )}
//         </Box>
//       )}

//       {/* 🧮 Table */}
//       <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
//         <Table>
//           <TableHead sx={{ backgroundColor: "#6f2da8" }}>
//             <TableRow>
//               <TableCell sx={{ color: "white" }} padding="checkbox">
//                 <Checkbox
//                   sx={{
//                     color: "#fff",
//                     "&.Mui-checked": { color: "#fff" },
//                   }}
//                   checked={
//                     selectedRows.length === filteredStores.length &&
//                     filteredStores.length > 0
//                   }
//                   indeterminate={
//                     selectedRows.length > 0 &&
//                     selectedRows.length < filteredStores.length
//                   }
//                   onChange={handleSelectAll}
//                 />
//               </TableCell>
//               <TableCell sx={{ color: "white" }}>TECH ID</TableCell>
//               <TableCell sx={{ color: "white" }}>Market</TableCell>
//               <TableCell sx={{ color: "white" }}>Door Code</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Name</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Email</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Phone</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Address</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {loading ? (
//               <TableRow>
//                 <TableCell colSpan={8} align="center" height={300}>
//                   <CircularProgress />
//                 </TableCell>
//               </TableRow>
//             ) : paginatedStores.length > 0 ? (
//               paginatedStores.map((store) => (
//                 <TableRow key={store.id} hover>
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={selectedRows.includes(store.id)}
//                       onChange={() => handleRowSelect(store.id)}
//                     />
//                   </TableCell>
//                   <TableCell>{store.bdi_id}</TableCell>
//                   <TableCell>{store.market}</TableCell>
//                   <TableCell>{store.door_code}</TableCell>
//                   <TableCell>{store.store_name}</TableCell>
//                   <TableCell>{store.stroe_email}</TableCell>
//                   <TableCell>{store.store_phone}</TableCell>
//                   <TableCell>{store.store_addres}</TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={8} align="center">
//                   No stores found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* 📄 Pagination */}
//       <TablePagination
//         rowsPerPageOptions={[5, 10, 20]}
//         component="div"
//         count={filteredStores.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />

//       {/* ⚠️ Confirm Delete Dialog */}
//       <Dialog
//         open={confirmDeleteOpen}
//         onClose={() => setConfirmDeleteOpen(false)}
//       >
//         <DialogTitle
//           sx={{ display: "flex", alignItems: "center", gap: 1, color: "#d32f2f" }}
//         >
//           <WarningAmberIcon color="error" />
//           Confirm Deletion
//         </DialogTitle>
//         <DialogContent dividers>
//           Are you sure you want to delete this store? This action cannot be undone.
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setConfirmDeleteOpen(false)}>Cancel</Button>
//           <Button
//             variant="contained"
//             color="error"
//             onClick={confirmDelete}
//             disabled={deleteLoader}
//           >
//             {deleteLoader ? <CircularProgress size={25} /> : "Delete"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default ManageStores;


// import React, { useCallback, useEffect, useState } from "react";
// import {
//   Box,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Checkbox,
//   TextField,
//   InputAdornment,
//   IconButton,
//   CircularProgress,
//   TablePagination,
//   Typography,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
// } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import WarningAmberIcon from "@mui/icons-material/WarningAmber";
// import DeleteIcon from "@mui/icons-material/Delete";
// import BasicBreadcrumbs from "../Components/BasicBreadcrumbs/BasicBreadcrumbs";
// import { useNavigate } from "react-router-dom";

// function ManageStores() {
//   const [stores, setStores] = useState([]);
//   const [filteredStores, setFilteredStores] = useState([]);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [deleteId, setDeleteId] = useState(null);
//   const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
//   const [deleteLoader, setDeleteLoader] = useState(false);
//   const navigate = useNavigate();
//   // Pagination states
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   // 🔹 Dummy Arizona Stores Data
//   const dummyStores = [
//     {
//       id: 1,
//       bdi_id: "TECH1255",
//       market: "ARIZONA",
//       door_code: "70849455",
//       store_name: "1255 W MAIN STREET",
//       stroe_email: "1255wmain@texasmobilepcs.com",
//       store_phone: "480-597-4120",
//       store_addres: "1255 W MAIN STREET - MESA, AZ 85201",
//     },
//     {
//       id: 2,
//       bdi_id: "TECH12801",
//       market: "ARIZONA",
//       door_code: "70848851",
//       store_name: "W BELL RD",
//       stroe_email: "12801wbell@texasmobilepcs.com",
//       store_phone: "623-777-1447",
//       store_addres: "12801 W Bell Rd, Ste 133, Surprise, AZ 85378",
//     },
//     {
//       id: 3,
//       bdi_id: "TECH1326",
//       market: "ARIZONA",
//       door_code: "70848853",
//       store_name: "E FLORENCE BLVD",
//       stroe_email: "1326eflorence@texasmobilepcs.com",
//       store_phone: "520-836-2495",
//       store_addres: "1326 E Florence Blvd , Casa Grande, AZ 85122",
//     },
//     {
//       id: 4,
//       bdi_id: "TECH13915",
//       market: "ARIZONA",
//       door_code: "70848850",
//       store_name: "N DYSART RD",
//       stroe_email: "13915ndysart@texasmobilepcs.com",
//       store_phone: "623-374-3037",
//       store_addres: "13915 N Dysart El Mirage, AZ 85335",
//     },
//     {
//       id: 5,
//       bdi_id: "TECH1954",
//       market: "ARIZONA",
//       door_code: "70850955",
//       store_name: "1954 W BROADWAY RD",
//       stroe_email: "1954BROADWAY@techno-communications.com",
//       store_phone: "480-964-0615",
//       store_addres: "1954 W BROADWAY RD STE 108 - MESA, AZ 85202",
//     },
//     {
//       id: 6,
//       bdi_id: "TECH2601AZ",
//       market: "ARIZONA",
//       door_code: "70850958",
//       store_name: "2601 E BELL RD",
//       stroe_email: "2601Bell@techno-communications.com",
//       store_phone: "602-466-3077",
//       store_addres: "2601 E BELL RD STE 15 - PHOENIX, AZ 85032",
//     },
//     {
//       id: 7,
//       bdi_id: "TECH2837",
//       market: "ARIZONA",
//       door_code: "70848849",
//       store_name: "N 75TH AVE",
//       stroe_email: "2837n75th@texasmobilepcs.com",
//       store_phone: "623-846-8363",
//       store_addres: "2837 N 75th Ave, #F3 , Phoenix, AZ 85033",
//     },
//     {
//       id: 8,
//       bdi_id: "TECH301",
//       market: "ARIZONA",
//       door_code: "70850956",
//       store_name: "3501 W DUNLAP AVE",
//       stroe_email: "3501DUNLAP@techno-communications.com",
//       store_phone: "602-325-9902",
//       store_addres: "3501 W DUNLAP AVE STE 9 - PHOENIX, AZ 85051",
//     },
//     {
//       id: 9,
//       bdi_id: "TECH3305",
//       market: "ARIZONA",
//       door_code: "70850957",
//       store_name: "3305 E GREENWAY RD",
//       stroe_email: "3305GREENWAY@techno-communications.com",
//       store_phone: "602-714-5657",
//       store_addres: "3305 E GREENWAY RD STE 10 - PHOENIX, AZ 85032",
//     },
//     {
//       id: 10,
//       bdi_id: "TECH3458",
//       market: "ARIZONA",
//       door_code: "70848854",
//       store_name: "W VAN BUREN ST",
//       stroe_email: "3458wvanburen@texasmobilepcs.com",
//       store_phone: "602-278-8123",
//       store_addres: "3458 W Van Buren St STE 103, Phoenix, AZ 85009",
//     },
//     {
//       id: 11,
//       bdi_id: "TECH3544",
//       market: "ARIZONA",
//       door_code: "70848855",
//       store_name: "8129 NORTH 35TH AVENUE",
//       stroe_email: "3544wglendale@texasmobilepcs.com",
//       store_phone: "480-956-4456",
//       store_addres: "8129 North 35th Avenue Ste A2, Phoenix, AZ 85051",
//     },
//     {
//       id: 12,
//       bdi_id: "TECH4010",
//       market: "ARIZONA",
//       door_code: "70848858",
//       store_name: "N 83RD AVE",
//       stroe_email: "4010n83rd@texasmobilepcs.com",
//       store_phone: "623-218-6304",
//       store_addres: "4010 N83 rd Ave, STE 103, Phoenix, AZ 85033",
//     },
//     {
//       id: 13,
//       bdi_id: "TECH4105",
//       market: "ARIZONA",
//       door_code: "70848857",
//       store_name: "N 51ST AVE",
//       stroe_email: "4105n51stave@texasmobilepcs.com",
//       store_phone: "623-374-4666",
//       store_addres: "4105 N 51st Ave STE 105, Phoenix, AZ 85031",
//     },
//     {
//       id: 14,
//       bdi_id: "TECH4224",
//       market: "ARIZONA",
//       door_code: "70849387",
//       store_name: "4224 S CENTRAL AVE",
//       stroe_email: "4224Central@texasmobilepcs.com",
//       store_phone: "602-243-4230",
//       store_addres: "4224 S Central Ave, Phoenix, AZ 85040",
//     },
//   ];

//   // 🔹 Simulated Fetch
//   const fetchAllStores = useCallback(async () => {
//     setLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API delay
//       setStores(dummyStores);
//       setFilteredStores(dummyStores);
//     } catch (error) {
//       console.error("Error fetching stores:", error);
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchAllStores();
//   }, [fetchAllStores]);

//   // 🔹 Search Filter
//   const handleSearchChange = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchTerm(query);

//     if (!query.trim()) {
//       setFilteredStores(stores);
//       return;
//     }

//     const filtered = stores.filter((store) =>
//       Object.values(store).some(
//         (val) => typeof val === "string" && val.toLowerCase().includes(query)
//       )
//     );
//     setFilteredStores(filtered);
//     setPage(0);
//   };

//   // 🔹 Checkbox Selection
//   const handleRowSelect = (id) => {
//     setSelectedRows((prev) =>
//       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
//     );
//   };

//   const handleSelectAll = () => {
//     if (selectedRows.length === filteredStores.length) {
//       setSelectedRows([]);
//     } else {
//       setSelectedRows(filteredStores.map((store) => store.id));
//     }
//   };

//   // 🔹 Delete Logic (dummy)
//   const handleDelete = (id) => {
//     setDeleteId(id);
//     setConfirmDeleteOpen(true);
//   };

//   const confirmDelete = async () => {
//     setDeleteLoader(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delete
//       const updated = filteredStores.filter((s) => s.id !== deleteId);
//       setStores(updated);
//       setFilteredStores(updated);
//       setConfirmDeleteOpen(false);
//       setSelectedRows([]);
//     } catch (err) {
//       console.error("Error deleting:", err);
//     } finally {
//       setDeleteLoader(false);
//     }
//   };

//   // 🔹 Pagination
//   const handleChangePage = (event, newPage) => setPage(newPage);
//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const paginatedStores = filteredStores.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <div className="container-fluid my-4 py-3">
//       <BasicBreadcrumbs name={"Manage Stores"} />
//       <Typography variant="h6" className="mb-3">
//         Manage Stores
//       </Typography>

//       {/* 🔍 Search */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <TextField
//           size="small"
//           placeholder="Search stores..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//           sx={{ width: 300 }}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton>
//                   <SearchIcon />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </div>

//       {/* 🧮 Table */}
//       <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
//         <Table >
//           <TableHead stickyHeader sx={{ backgroundColor: "#6f2da8" }}>
//             <TableRow>
//               <TableCell sx={{ color: "white" }} padding="checkbox">
//                 <Checkbox
//                   sx={{
//                     color: "#fff",
//                     "&.Mui-checked": { color: "#fff" },
//                   }}
//                   checked={
//                     selectedRows.length === filteredStores.length &&
//                     filteredStores.length > 0
//                   }
//                   indeterminate={
//                     selectedRows.length > 0 &&
//                     selectedRows.length < filteredStores.length
//                   }
//                   onChange={handleSelectAll}
//                 />
//               </TableCell>
//               <TableCell sx={{ color: "white" }}>TECH ID</TableCell>
//               <TableCell sx={{ color: "white" }}>Market</TableCell>
//               <TableCell sx={{ color: "white" }}>Door Code</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Name</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Email</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Phone</TableCell>
//               <TableCell sx={{ color: "white" }}>Store Address</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {loading ? (
//               <TableRow>
//                 <TableCell colSpan={8} align="center" height={300}>
//                   <CircularProgress />
//                 </TableCell>
//               </TableRow>
//             ) : paginatedStores.length > 0 ? (
//               paginatedStores.map((store) => (
//                 <TableRow key={store.id} hover onClick={() => navigate(`/detailed-store/${store.bdi_id}`)}>
//                   <TableCell padding="checkbox">
//                     <Checkbox
//                       checked={selectedRows.includes(store.id)}
//                       onChange={() => handleRowSelect(store.id)}
//                     />
//                   </TableCell>
//                   <TableCell>{store.bdi_id}</TableCell>
//                   <TableCell>{store.market}</TableCell>
//                   <TableCell>{store.door_code}</TableCell>
//                   <TableCell>{store.store_name}</TableCell>
//                   <TableCell>{store.stroe_email}</TableCell>
//                   <TableCell>{store.store_phone}</TableCell>
//                   <TableCell>{store.store_addres}</TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={8} align="center">
//                   No stores found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       <TablePagination
//         rowsPerPageOptions={[5, 10, 20]}
//         component="div"
//         count={filteredStores.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />

//       <Dialog
//         open={confirmDeleteOpen}
//         onClose={() => setConfirmDeleteOpen(false)}
//       >
//         <DialogTitle
//           sx={{ display: "flex", alignItems: "center", gap: 1, color: "#d32f2f" }}
//         >
//           <WarningAmberIcon color="error" />
//           Confirm Deletion
//         </DialogTitle>
//         <DialogContent dividers>
//           Are you sure you want to delete this store? This action cannot be undone.
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={() => setConfirmDeleteOpen(false)}>Cancel</Button>
//           <Button
//             variant="contained"
//             color="error"
//             onClick={confirmDelete}
//             disabled={deleteLoader}
//           >
//             {deleteLoader ? <CircularProgress size={25} /> : "Delete"}
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default ManageStores;

import React, { useCallback, useEffect, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TextField,
  InputAdornment,
  IconButton,
  CircularProgress,
  TablePagination,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useNavigate } from "react-router-dom";
import BasicBreadcrumbs from "../Components/BasicBreadcrumbs/BasicBreadcrumbs";

function ManageStores() {
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);

  const navigate = useNavigate();

  // Pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Dummy Data
  const dummyStores = [
    {
      id: 1,
      bdi_id: "TECH1255",
      market: "ARIZONA",
      door_code: "70849455",
      store_name: "1255 W MAIN STREET",
      store_email: "1255wmain@texasmobilepcs.com",
      store_phone: "480-597-4120",
      store_address: "1255 W MAIN STREET - MESA, AZ 85201",
    },
    {
      id: 2,
      bdi_id: "TECH12801",
      market: "ARIZONA",
      door_code: "70848851",
      store_name: "W BELL RD",
      store_email: "12801wbell@texasmobilepcs.com",
      store_phone: "623-777-1447",
      store_address: "12801 W Bell Rd, Ste 133, Surprise, AZ 85378",
    },
    {
      id: 3,
      bdi_id: "TECH1326",
      market: "ARIZONA",
      door_code: "70848853",
      store_name: "E FLORENCE BLVD",
      store_email: "1326eflorence@texasmobilepcs.com",
      store_phone: "520-836-2495",
      store_address: "1326 E Florence Blvd , Casa Grande, AZ 85122",
    },
    // Add more stores here...
  ];

  // Fetch Stores (simulated)
  const fetchAllStores = useCallback(async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API
      setStores(dummyStores);
      setFilteredStores(dummyStores);
    } catch (error) {
      console.error("Error fetching stores:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAllStores();
  }, [fetchAllStores]);

  // Search Filter
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    if (!query.trim()) {
      setFilteredStores(stores);
      return;
    }

    const filtered = stores.filter((store) =>
      Object.values(store).some(
        (val) =>
          typeof val === "string" && val.toLowerCase().includes(query)
      )
    );
    setFilteredStores(filtered);
    setPage(0);
  };

  // Row Selection
  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedRows.length === filteredStores.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(filteredStores.map((store) => store.id));
    }
  };

  // Delete Logic
  const handleDelete = (id) => {
    setDeleteId(id);
    setConfirmDeleteOpen(true);
  };

  const confirmDelete = async () => {
    setDeleteLoader(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delete
      const updated = filteredStores.filter((s) => s.id !== deleteId);
      setStores(updated);
      setFilteredStores(updated);
      setSelectedRows([]);
      setConfirmDeleteOpen(false);
    } catch (err) {
      console.error("Error deleting:", err);
    } finally {
      setDeleteLoader(false);
    }
  };

  // Pagination
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedStores = filteredStores.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div className="container-fluid my-4 py-3">
      <BasicBreadcrumbs name={"Manage Stores"} />
      <Typography variant="h6" className="mb-3">
        Manage Stores
      </Typography>

      {/* Search */}
      <Box display="flex" justifyContent="flex-start" mb={2}>
        <TextField
          size="small"
          placeholder="Search stores..."
          value={searchTerm}
          onChange={handleSearchChange}
          sx={{ width: 300 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
        <Table >
          <TableHead stickyHeader sx={{ backgroundColor: "#6f2da8" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }} padding="checkbox">
                <Checkbox
                  sx={{
                    color: "#fff",
                    "&.Mui-checked": { color: "#fff" },
                  }}
                  checked={
                    selectedRows.length === filteredStores.length &&
                    filteredStores.length > 0
                  }
                  indeterminate={
                    selectedRows.length > 0 &&
                    selectedRows.length < filteredStores.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell>
              <TableCell sx={{ color: "#fff" }}>TECH ID</TableCell>
              <TableCell sx={{ color: "#fff" }}>Market</TableCell>
              <TableCell sx={{ color: "#fff" }}>Door Code</TableCell>
              <TableCell sx={{ color: "#fff" }}>Store Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Store Email</TableCell>
              <TableCell sx={{ color: "#fff" }}>Store Phone</TableCell>
              <TableCell sx={{ color: "#fff" }}>Store Address</TableCell>
              <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9} align="center" height={300}>
                  <CircularProgress />
                </TableCell>
              </TableRow>
            ) : paginatedStores.length > 0 ? (
              paginatedStores.map((store) => (
                <TableRow
                  key={store.id}
                  hover
                  onClick={() =>
                    navigate(`/detailed-store/${store.bdi_id}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <TableCell padding="checkbox" onClick={(e) => e.stopPropagation()}>
                    <Checkbox
                      checked={selectedRows.includes(store.id)}
                      onChange={() => handleRowSelect(store.id)}
                    />
                  </TableCell>
                  <TableCell>{store.bdi_id}</TableCell>
                  <TableCell>{store.market}</TableCell>
                  <TableCell>{store.door_code}</TableCell>
                  <TableCell>{store.store_name}</TableCell>
                  <TableCell>{store.store_email}</TableCell>
                  <TableCell>{store.store_phone}</TableCell>
                  <TableCell>{store.store_address}</TableCell>
                  <TableCell onClick={(e) => e.stopPropagation()}>
                    <Button
                      variant="contained"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(store.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  No stores found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={filteredStores.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Confirm Delete Dialog */}
      <Dialog
        open={confirmDeleteOpen}
        onClose={() => setConfirmDeleteOpen(false)}
      >
        <DialogTitle
          sx={{ display: "flex", alignItems: "center", gap: 1, color: "#d32f2f" }}
        >
          <WarningAmberIcon color="error" />
          Confirm Deletion
        </DialogTitle>
        <DialogContent dividers>
          Are you sure you want to delete this store? This action cannot be undone.
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDeleteOpen(false)}>Cancel</Button>
          <Button
            variant="contained"
            color="error"
            onClick={confirmDelete}
            disabled={deleteLoader}
          >
            {deleteLoader ? <CircularProgress size={25} /> : "Delete"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ManageStores;
