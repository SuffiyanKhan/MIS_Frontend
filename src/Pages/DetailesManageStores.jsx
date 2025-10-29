import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Divider,
    Avatar,
    CircularProgress,
    IconButton,
} from "@mui/material";
import { useParams } from "react-router-dom";

// 🧩 Icons
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import BoltIcon from "@mui/icons-material/Bolt";
import DescriptionIcon from "@mui/icons-material/Description";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupIcon from "@mui/icons-material/Group";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import GeneralInfo from "../Components/GeneralInfo/GeneralInfo.jsx";
import UtilitiesOverview from "../Components/UtilitiesOverview/UtilitiesOverview.jsx";
import LeasingOverview from "../Components/LeasingOverview/LeasingOverview.jsx";
import EmployeesOverview from "../Components/EmployeesOverview/EmployeesOverview.jsx";
import MaintenanceOverview from "../Components/MaintenanceOverview/MaintenanceOverview.jsx";

// 🧾 Dummy data (your existing one)
export const DUMMY_STORES = [
    {
        id: "TECH1006",
        market: "ARIZONA",
        door_code: "70849455",
        store_name: "1255 W MAIN STREET",
        store_email: "1255wmain@texasmobilepcs.com",
        store_phone: "480-597-4120",
        store_address: "1255 W MAIN STREET - MESA, AZ 85201",
        manager: "John Doe",
        status: "Active",
        open_hours: "Mon–Sat 9AM–8PM, Sun 10AM–6PM",
        created_at: "2021-06-10",
        updated_at: "2025-10-15",
        lease: {
            start_date: "2021-01-01",
            end_date: "2026-12-31",
            rent: "$2,500 / month",
            landlord: "Mesa Retail Group LLC",
            lease_status: "Active",
        },
        utilities: {
            electricity: "Active",
            provider: "SRP Electric",
            account_number: "ELEC-1255-9987",
            internet: "Comcast Fiber 200 Mbps",
            rent: "$2,500 / month",
        },
        sales: {
            daily: "$4,200",
            weekly: "$29,000",
            monthly: "$126,000",
            yearly: "$1.45M",
        },
        inventory: {
            phones_in_stock: 320,
            accessories: 780,
            sim_cards: 420,
            last_inventory_check: "2025-10-10",
        },
        employees: [
            { name: "Alice Johnson", role: "Sales Rep", phone: "480-600-1245" },
            { name: "Bob Smith", role: "Technician", phone: "480-610-9875" },
        ],
        performance: {
            rating: 4.6,
            customer_satisfaction: "91%",
            avg_wait_time: "4 mins",
        },
    },
    {
        id: "TECH101",
        market: "ARIZONA",
        door_code: "70848851",
        store_name: "W BELL RD",
        store_email: "12801wbell@texasmobilepcs.com",
        store_phone: "623-777-1447",
        store_address: "12801 W Bell Rd, Ste 133, Surprise, AZ 85378",
        manager: "Sarah Lee",
        status: "Active",
        open_hours: "Mon–Sat 9AM–8PM, Sun 10AM–6PM",
        created_at: "2020-11-05",
        updated_at: "2025-09-29",
        lease: {
            start_date: "2020-06-01",
            end_date: "2026-05-31",
            rent: "$2,700 / month",
            landlord: "Surprise Retail Partners LLC",
            lease_status: "Active",
        },
        utilities: {
            electricity: "Active",
            provider: "APS Electric",
            account_number: "ELEC-12801-7622",
            internet: "CenturyLink Fiber 150 Mbps",
            rent: "$2,700 / month",
        },
        sales: {
            daily: "$3,900",
            weekly: "$27,000",
            monthly: "$120,000",
            yearly: "$1.38M",
        },
        inventory: {
            phones_in_stock: 275,
            accessories: 690,
            sim_cards: 350,
            last_inventory_check: "2025-10-20",
        },
        employees: [
            { name: "David Smith", role: "Store Lead", phone: "623-785-2214" },
            { name: "Emma Watson", role: "Sales Rep", phone: "623-778-4523" },
        ],
        performance: {
            rating: 4.5,
            customer_satisfaction: "89%",
            avg_wait_time: "5 mins",
        },
    },
    {
        id: "TECH1010S",
        market: "ARIZONA",
        door_code: "70848853",
        store_name: "E FLORENCE BLVD",
        store_email: "1326eflorence@texasmobilepcs.com",
        store_phone: "520-836-2495",
        store_address: "1326 E Florence Blvd, Casa Grande, AZ 85122",
        manager: "Michael Green",
        status: "Active",
        open_hours: "Mon–Sat 9AM–8PM, Sun 10AM–6PM",
        created_at: "2021-03-18",
        updated_at: "2025-09-21",
        lease: {
            start_date: "2021-03-01",
            end_date: "2026-02-28",
            rent: "$2,300 / month",
            landlord: "Casa Retail Holdings",
            lease_status: "Active",
        },
        utilities: {
            electricity: "Active",
            provider: "Casa Electric Co.",
            account_number: "ELEC-1326-3114",
            internet: "Cox Fiber 300 Mbps",
            rent: "$2,300 / month",
        },
        sales: {
            daily: "$4,500",
            weekly: "$31,000",
            monthly: "$133,000",
            yearly: "$1.58M",
        },
        inventory: {
            phones_in_stock: 310,
            accessories: 710,
            sim_cards: 410,
            last_inventory_check: "2025-10-17",
        },
        employees: [
            { name: "Olivia Brown", role: "Technician", phone: "520-864-2214" },
            { name: "Chris Evans", role: "Sales Rep", phone: "520-844-9977" },
        ],
        performance: {
            rating: 4.7,
            customer_satisfaction: "92%",
            avg_wait_time: "3 mins",
        },
    },
    {
        id: "TECH1021",
        market: "ARIZONA",
        door_code: "70848850",
        store_name: "N DYSART RD",
        store_email: "13915ndysart@texasmobilepcs.com",
        store_phone: "623-374-3037",
        store_address: "13915 N Dysart El Mirage, AZ 85335",
        manager: "Anna Taylor",
        status: "Active",
        open_hours: "Mon–Sat 9AM–8PM, Sun 10AM–6PM",
        created_at: "2022-01-15",
        updated_at: "2025-10-01",
        lease: {
            start_date: "2022-01-01",
            end_date: "2027-12-31",
            rent: "$2,850 / month",
            landlord: "El Mirage Realty LLC",
            lease_status: "Active",
        },
        utilities: {
            electricity: "Active",
            provider: "APS Electric",
            account_number: "ELEC-13915-4890",
            internet: "Comcast Fiber 250 Mbps",
            rent: "$2,850 / month",
        },
        sales: {
            daily: "$4,000",
            weekly: "$28,000",
            monthly: "$124,000",
            yearly: "$1.44M",
        },
        inventory: {
            phones_in_stock: 280,
            accessories: 650,
            sim_cards: 380,
            last_inventory_check: "2025-10-18",
        },
        employees: [
            { name: "Daniel White", role: "Store Lead", phone: "623-373-1231" },
            { name: "Sophia Martinez", role: "CSR", phone: "623-382-5412" },
        ],
        performance: {
            rating: 4.4,
            customer_satisfaction: "87%",
            avg_wait_time: "6 mins",
        },
    },
    {
        id: "TECH1029",
        market: "ARIZONA",
        door_code: "70850955",
        store_name: "1954 W BROADWAY RD",
        store_email: "1954BROADWAY@techno-communications.com",
        store_phone: "480-964-0615",
        store_address: "1954 W BROADWAY RD STE 108 - MESA, AZ 85202",
        manager: "Jacob Johnson",
        status: "Active",
        open_hours: "Mon–Sat 9AM–8PM, Sun 10AM–6PM",
        created_at: "2021-04-10",
        updated_at: "2025-09-19",
        lease: {
            start_date: "2021-01-01",
            end_date: "2026-12-31",
            rent: "$2,900 / month",
            landlord: "Mesa Plaza LLC",
            lease_status: "Active",
        },
        utilities: {
            electricity: "Active",
            provider: "SRP Electric",
            account_number: "ELEC-1954-4411",
            internet: "Cox Business Fiber 200 Mbps",
            rent: "$2,900 / month",
        },
        sales: {
            daily: "$4,350",
            weekly: "$30,000",
            monthly: "$128,000",
            yearly: "$1.52M",
        },
        inventory: {
            phones_in_stock: 295,
            accessories: 700,
            sim_cards: 395,
            last_inventory_check: "2025-10-22",
        },
        employees: [
            { name: "Ethan Brown", role: "Sales Rep", phone: "480-333-4521" },
            { name: "Mia Davis", role: "Technician", phone: "480-356-8882" },
        ],
        performance: {
            rating: 4.5,
            customer_satisfaction: "90%",
            avg_wait_time: "4 mins",
        },
    },
];

function DetailesManageStores() {
    const { id } = useParams();
    const [tab, setTab] = useState(0);
    const [store, setStore] = useState(null);

    useEffect(() => {
        const found = DUMMY_STORES.find((s) => s.id === id);
        setTimeout(() => {
            setStore(found);
        }, 600);
    }, [id]);

    const handleChange = (e, newValue) => setTab(newValue);

    if (!store)
        return (
            <Box sx={{ textAlign: "center", mt: 10 }}>
                <CircularProgress />
                <Typography mt={2}>Loading store details...</Typography>
            </Box>
        );

    return (
        <Box sx={{ p: 3 }}>
            {/* 🏬 Header */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box display="flex" alignItems="center" mb={2}>
                    <IconButton onClick={() => window.history.back()} sx={{ mr: 1 }}>
                        <ArrowBackIcon />
                    </IconButton>
                    <Avatar
                        sx={{ width: 64, height: 64, mr: 2, bgcolor: "#6f2da8", fontSize: 26 }}
                    >
                        {store.store_name?.charAt(0)}
                    </Avatar>
                </Box>
                <Box>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        {store.store_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {store.store_address}
                    </Typography>
                </Box>
            </Box>

            {/* 🧭 Tabs */}
            <Tabs
                value={tab}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
                sx={{
                    mb: 3,
                    "& .MuiTab-root": {
                        fontWeight: 500,
                        textTransform: "none",
                        fontSize: 15,
                    },
                }}
            >
                <Tab icon={<StoreMallDirectoryIcon />} iconPosition="start" label="Store Overview" />
                <Tab icon={<BoltIcon />} iconPosition="start" label="Utilities" />
                <Tab icon={<DescriptionIcon />} iconPosition="start" label="Lease Info" />
                <Tab icon={<GroupIcon />} iconPosition="start" label="Employees" />
                <Tab icon={<BuildCircleIcon />} iconPosition="start" label="Maintenance" />
            </Tabs>

            {/* 🗂️ Tab Content */}

            {/* Store Overview */}
            {tab === 0 && (
                <Box>
                    <Divider sx={{ mb: 3 }} />
                    <GeneralInfo store={store} />
                </Box>
            )}

            {/* Utilities */}
            {tab === 1 && (
                <Box>
                    <Divider sx={{ mb: 3 }} />
                    <UtilitiesOverview store={store} />
                </Box>
            )}

            {/* Lease Info */}
            {tab === 2 && (
                <Box>
                    <Divider sx={{ mb: 3 }} />
                    <LeasingOverview store={store} />
                </Box>
            )}

            {/* Employees */}
            {tab === 3 && (
                <Box>
                    <Divider sx={{ mb: 3 }} />
                    <EmployeesOverview store={store} />
                </Box>
            )}

            {/* Maintenance */}
            {tab === 4 && (
                <Box>
                    <Divider sx={{ mb: 3 }} />
                    <MaintenanceOverview store={store} />
                </Box>
            )}
        </Box>
    );
}

export default DetailesManageStores;
