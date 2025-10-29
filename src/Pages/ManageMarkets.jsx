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
    TextField,
    InputAdornment,
    IconButton,
    CircularProgress,
    TablePagination,
    Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import BasicBreadcrumbs from "../Components/BasicBreadcrumbs/BasicBreadcrumbs";
import { getAllMarketsDataServices } from "../Services/market.services";
import { getAllStoresDataServices } from "../Services/stores.services";

function ManageMarkets() {
    const [markets, setMarkets] = useState([]);
    const [filteredMarkets, setFilteredMarkets] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const navigate = useNavigate();

    const dummyMarkets = [
        {
            id: 1,
            name: "Arizona",
            marketManager: "John Doe",
            stores: 14,
            districtManagers: 3,
            totalEmployees: 120,
            storeManagers: 14,
        },
        {
            id: 2,
            name: "Dallas",
            marketManager: "Jane Smith",
            stores: 10,
            districtManagers: 2,
            totalEmployees: 90,
            storeManagers: 10,
        },
        {
            id: 3,
            name: "Florida",
            marketManager: "Michael Brown",
            stores: 8,
            districtManagers: 2,
            totalEmployees: 75,
            storeManagers: 8,
        },
        {
            id: 4,
            name: "Texas",
            marketManager: "Emily Johnson",
            stores: 12,
            districtManagers: 3,
            totalEmployees: 110,
            storeManagers: 12,
        },
    ];
    // const fetchMarkets = useCallback(async () => {
    //     setLoading(true);
    //     try {
    //         await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API delay
    //         const response = await getAllMarketsDataServices();
    //         if (response?.status === 200) {
    //             console.log(response.data);
    //             setMarkets(response.data);
    //             setFilteredMarkets(response.data);
    //         } else {
    //             setMarkets(dummyStores);
    //             setFilteredMarkets(dummyStores);
    //         }
    //     } catch (error) {
    //         console.error("Error fetching stores:", error);
    //         setMarkets(dummyStores);
    //         setFilteredMarkets(dummyStores);
    //     } finally {
    //         setLoading(false);
    //     }
    // }, []);
    //     const fetchMarkets = useCallback(async () => {
    //         setLoading(true);
    //         try {
    //             await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API delay

    //             // 🔹 Fetch all stores data (each store should have a market name in it)
    //             const response = await getAllStoresDataServices();
    //  const storesData = await getAllMarketsDataServices();
    //             if (response?.status === 200 && Array.isArray(response.data)) {
    //                 const allStores = response.data;

    //                 // 🔹 Aggregate: count stores per market
    //                 const marketMap = {};
    //                 allStores.forEach((store) => {
    //                     const marketName = store.market?.trim() || "Unknown";
    //                     if (!marketMap[marketName]) {
    //                         marketMap[marketName] = {
    //                             id: Object.keys(marketMap).length + 1,
    //                             name: marketName,
    //                             stores: 0,
    //                             marketManager: "—", // placeholder (can be updated later)
    //                             districtManagers: 0,
    //                             totalEmployees: 0,
    //                             storeManagers: 0,
    //                         };
    //                     }
    //                     marketMap[marketName].stores += 1;
    //                 });

    //                 // 🔹 Convert map to array
    //                 const aggregatedMarkets = Object.values(marketMap);

    //                 setMarkets(aggregatedMarkets);
    //                 setFilteredMarkets(aggregatedMarkets);
    //             } else {
    //                 console.warn("Fallback to dummy data");
    //                 setMarkets(dummyMarkets);
    //                 setFilteredMarkets(dummyMarkets);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching stores:", error);
    //             setMarkets(dummyMarkets);
    //             setFilteredMarkets(dummyMarkets);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }, []);
    const fetchMarkets = useCallback(async () => {
        setLoading(true);
        try {
            await new Promise((resolve) => setTimeout(resolve, 800)); // simulate API delay

            // 🔹 Step 1: Fetch all markets
            const marketsRes = await getAllMarketsDataServices();
            // 🔹 Step 2: Fetch all stores
            const storesRes = await getAllStoresDataServices();

            if (marketsRes?.status === 200 && storesRes?.status === 200) {
                const marketsData = marketsRes.data || [];
                const storesData = storesRes.data || [];

                // 🔹 Step 3: Count stores per market name
                const storeCountByMarket = {};
                storesData.forEach((store) => {
                    const marketName =
                        store.market?.trim().toLowerCase() || "unknown";
                    storeCountByMarket[marketName] =
                        (storeCountByMarket[marketName] || 0) + 1;
                });

                // 🔹 Step 4: Merge count into markets list
                const mergedMarkets = marketsData.map((market, index) => {
                    const marketKey = market.name?.trim().toLowerCase();
                    return {
                        id: market.id || index + 1,
                        name: market.name,
                        marketManager: market.marketManager || "—",
                        stores: storeCountByMarket[marketKey] || 0, // 👈 Default 0 if none
                        districtManagers: market.districtManagers || 0,
                        totalEmployees: market.totalEmployees || 0,
                        storeManagers: market.storeManagers || 0,
                    };
                });

                setMarkets(mergedMarkets);
                setFilteredMarkets(mergedMarkets);
            } else {
                console.warn("Using fallback dummy data");
                setMarkets(dummyMarkets);
                setFilteredMarkets(dummyMarkets);
            }
        } catch (error) {
            console.error("Error fetching markets or stores:", error);
            setMarkets(dummyMarkets);
            setFilteredMarkets(dummyMarkets);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchMarkets();
    }, []);

    // Search
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchTerm(query);

        if (!query.trim()) {
            setFilteredMarkets(markets);
            return;
        }

        const filtered = markets.filter((market) =>
            Object.values(market).some(
                (val) =>
                    typeof val === "string" &&
                    val.toLowerCase().includes(query)
            )
        );
        setFilteredMarkets(filtered);
        setPage(0);
    };

    // Pagination
    const handleChangePage = (event, newPage) => setPage(newPage);
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedMarkets = filteredMarkets.slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
    );

    return (
        <div className="container-fluid my-4 py-3">
            <BasicBreadcrumbs name="Manage Markets" />

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="h6">Manage Markets</Typography>
                <Box display="flex" gap={1}>
                    <Button
                        variant="outlined"
                        startIcon={<AddIcon />}
                        onClick={() => console.log("Add Market")}
                    >
                        Add Market
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<RefreshIcon />}
                        onClick={fetchMarkets}
                    >
                        Refresh
                    </Button>
                </Box>
            </Box>

            <Box mb={2} display="flex" justifyContent="flex-start">
                <TextField
                    size="small"
                    placeholder="Search markets..."
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
            <TableContainer component={Paper}>
                <Table>
                    <TableHead sx={{ backgroundColor: "#6f2da8" }}>
                        <TableRow>
                            <TableCell sx={{ color: "#fff" }}>Market</TableCell>
                            <TableCell sx={{ color: "#fff" }}>Market Manager</TableCell>
                            <TableCell sx={{ color: "#fff" }}>Stores</TableCell>
                            <TableCell sx={{ color: "#fff" }}>District Managers</TableCell>
                            <TableCell sx={{ color: "#fff" }}>Total Employees</TableCell>
                            <TableCell sx={{ color: "#fff" }}>Store Managers</TableCell>
                            <TableCell sx={{ color: "#fff" }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={7} align="center" height={300}>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        justifyContent="center"
                                        alignItems="center"
                                        sx={{ py: 5 }}
                                    >
                                        <CircularProgress size={50} thickness={5} sx={{ color: "#6f2da8", mb: 2 }} />
                                        <Typography variant="subtitle1" sx={{ color: "#6f2da8", fontWeight: 500 }}>
                                            Loading markets data, please wait...
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>

                        ) : (
                            <>
                                {paginatedMarkets.length > 0 ? (
                                    paginatedMarkets.map((market) => (
                                        <TableRow
                                            key={market.id}
                                            hover
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                navigate(`/detailed-markets/${market.name.toLowerCase()}`)
                                            }
                                        >
                                            <TableCell>{market.name}</TableCell>
                                            <TableCell>{market.marketManager}</TableCell>
                                            <TableCell>{market.stores}</TableCell>
                                            <TableCell>{market.districtManagers}</TableCell>
                                            <TableCell>{market.totalEmployees}</TableCell>
                                            <TableCell>{market.storeManagers}</TableCell>
                                            <TableCell
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => console.log("Edit Market ID:", market.id)}
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton
                                                    color="error"
                                                    onClick={() => console.log("Delete Market ID:", market.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={6} align="center">
                                            No markets found.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </>
                        )}

                    </TableBody>
                </Table>
            </TableContainer>


            <TablePagination
                rowsPerPageOptions={[5, 10, 20]}
                component="div"
                count={filteredMarkets.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </div>
    );
}

export default ManageMarkets;
