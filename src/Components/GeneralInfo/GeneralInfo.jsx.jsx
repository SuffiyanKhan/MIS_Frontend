// import React from "react";
// import {
//     Card,
//     CardContent,
//     Typography,
//     Divider,
//     Box,
//     Avatar,
//     Chip,
//     Grid,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Tooltip,
// } from "@mui/material";

// // ===== ICONS =====
// import StoreIcon from "@mui/icons-material/Store";
// import EmailIcon from "@mui/icons-material/Email";
// import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PersonIcon from "@mui/icons-material/Person";
// import GroupsIcon from "@mui/icons-material/Groups";
// import MapIcon from "@mui/icons-material/Map";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import TodayIcon from "@mui/icons-material/Today";
// import DomainIcon from "@mui/icons-material/Domain";
// import StarIcon from "@mui/icons-material/Star";
// import HouseIcon from "@mui/icons-material/House";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import WifiIcon from "@mui/icons-material/Wifi";
// import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
// import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
// import BusinessIcon from "@mui/icons-material/Business";

// const GeneralInfo = ({ store }) => {
//     // Dummy data (if no store prop)
//     const data = store || {
//         id: "TECH204",
//         store_name: "Metro by T-Mobile - Mesa Blvd",
//         market: "Arizona East",
//         door_code: "A102",
//         status: "Active",
//         store_email: "mesa.metro@t-mobile.com",
//         store_phone: "+1 (480) 222-4455",
//         store_address: "1245 E Main St, Mesa, AZ 85203",
//         manager: "Sarah Johnson",
//         employees: [
//             { name: "John Doe", role: "Sales Rep", phone: "480-222-0001" },
//             { name: "Jane Smith", role: "Assistant Manager", phone: "480-222-0002" },
//             { name: "Mike Brown", role: "CSR", phone: "480-222-0003" },
//         ],
//         open_hours: "Mon–Sat: 9 AM – 8 PM, Sun: 10 AM – 6 PM",
//         performance: { rating: 4.7 },
//         created_at: "2023-04-18",
//         updated_at: "2025-02-11",
//         lease: {
//             landlord: "Metro Property Holdings",
//             start_date: "2021-05-01",
//             end_date: "2026-05-01",
//         },
//         utilities: {
//             provider: "SRP Electric Co.",
//             internet: "Comcast Business Fiber",
//         },
//     };

//     const totalEmployees = data.employees?.length || 0;

//     return (
//         <Box sx={{ p: 4, backgroundColor: "#f9fafb", borderRadius: 3 }}>
//             {/* ===== HEADER ===== */}
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 gap={3}
//                 flexWrap="wrap"
//                 mb={4}
//                 sx={{
//                     backgroundColor: "white",
//                     p: 2,
//                     borderRadius: 3,
//                     boxShadow: 1,
//                 }}
//             >
//                 <Avatar sx={{ bgcolor: "#6d28d9", width: 70, height: 70 }}>
//                     <StoreIcon fontSize="large" />
//                 </Avatar>
//                 <Box>
//                     <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                         {data.store_name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         TECH ID: {data.id} • {data.market}
//                     </Typography>
//                 </Box>
//             </Box>

//             <Grid container spacing={3}>
//                 {/* ===== STORE INFO ===== */}
//                 <Grid item xs={12} md={6}>
//                     <Card sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Store Information
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List dense>
//                                 <ListItem>
//                                     <ListItemIcon><StoreIcon color="primary" /></ListItemIcon>
//                                     <ListItemText primary="Store Name" secondary={data.store_name} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><DomainIcon color="secondary" /></ListItemIcon>
//                                     <ListItemText primary="Market" secondary={data.market} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><HouseIcon color="action" /></ListItemIcon>
//                                     <ListItemText primary="Door Code" secondary={data.door_code} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><AccessTimeIcon color="info" /></ListItemIcon>
//                                     <ListItemText primary="Store Hours" secondary={data.open_hours} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><StarIcon sx={{ color: "#f59e0b" }} /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Performance Rating"
//                                         secondary={`${data.performance.rating}/5`}
//                                     />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><TodayIcon color="success" /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Created / Updated"
//                                         secondary={`${data.created_at} | ${data.updated_at}`}
//                                     />
//                                 </ListItem>
//                             </List>

//                             <Box mt={2}>
//                                 <Chip label={data.status} color="success" variant="filled" />
//                             </Box>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* ===== CONTACT INFO ===== */}
//                 <Grid item xs={12} md={6}>
//                     <Card sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Contact Information
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List dense>
//                                 <ListItem>
//                                     <ListItemIcon><EmailIcon color="primary" /></ListItemIcon>
//                                     <ListItemText primary="Email" secondary={data.store_email} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><LocalPhoneIcon color="success" /></ListItemIcon>
//                                     <ListItemText primary="Phone" secondary={data.store_phone} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><LocationOnIcon color="error" /></ListItemIcon>
//                                     <ListItemText primary="Address" secondary={data.store_address} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><ContactPhoneIcon color="action" /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Emergency Contact"
//                                         secondary="+1 (480) 555-1234"
//                                     />
//                                 </ListItem>
//                             </List>

//                             <Tooltip title="Open Google Maps">
//                                 <a
//                                     href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                                         data.store_address
//                                     )}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="btn btn-sm btn-outline-primary mt-2"
//                                 >
//                                     View on Google Maps
//                                 </a>
//                             </Tooltip>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* ===== STAFF OVERVIEW ===== */}
//                 <Grid item xs={12} md={6}>
//                     <Card sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Staff Overview
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List dense>
//                                 <ListItem>
//                                     <ListItemIcon><PersonIcon color="primary" /></ListItemIcon>
//                                     <ListItemText primary="Manager" secondary={data.manager} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><GroupsIcon color="secondary" /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Total Employees"
//                                         secondary={`${totalEmployees}`}
//                                     />
//                                 </ListItem>
//                             </List>

//                             <Divider sx={{ my: 2 }} />
//                             <Typography variant="subtitle2" gutterBottom>
//                                 Employee List
//                             </Typography>
//                             {data.employees.map((emp, index) => (
//                                 <Box
//                                     key={index}
//                                     sx={{
//                                         display: "flex",
//                                         justifyContent: "space-between",
//                                         p: 1,
//                                         borderRadius: 2,
//                                         backgroundColor: "#f3f4f6",
//                                         mb: 1,
//                                     }}
//                                 >
//                                     <Typography variant="body2"><b>{emp.name}</b> — {emp.role}</Typography>
//                                     <Typography variant="body2" color="text.secondary">
//                                         {emp.phone}
//                                     </Typography>
//                                 </Box>
//                             ))}
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* ===== LOCATION DETAILS ===== */}
//                 <Grid item xs={12} md={6}>
//                     <Card sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Location Details
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List dense>
//                                 <ListItem>
//                                     <ListItemIcon><MapIcon color="primary" /></ListItemIcon>
//                                     <ListItemText primary="Address" secondary={data.store_address} />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><BusinessIcon color="secondary" /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Landlord"
//                                         secondary={data.lease.landlord}
//                                     />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><TodayIcon color="success" /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Lease Period"
//                                         secondary={`${data.lease.start_date} → ${data.lease.end_date}`}
//                                     />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><ElectricBoltIcon sx={{ color: "#f59e0b" }} /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Electricity Provider"
//                                         secondary={data.utilities.provider}
//                                     />
//                                 </ListItem>
//                                 <ListItem>
//                                     <ListItemIcon><WifiIcon color="info" /></ListItemIcon>
//                                     <ListItemText
//                                         primary="Internet Provider"
//                                         secondary={data.utilities.internet}
//                                     />
//                                 </ListItem>
//                             </List>

//                             <Tooltip title="Open in Google Maps">
//                                 <a
//                                     href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//                                         data.store_address
//                                     )}`}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="btn btn-sm btn-outline-success mt-2"
//                                 >
//                                     View on Google Maps
//                                 </a>
//                             </Tooltip>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default GeneralInfo;


import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Divider,
    Box,
    Avatar,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Tooltip,
} from "@mui/material";

// ===== ICONS =====
import StoreIcon from "@mui/icons-material/Store";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import GroupsIcon from "@mui/icons-material/Groups";
import MapIcon from "@mui/icons-material/Map";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TodayIcon from "@mui/icons-material/Today";
import DomainIcon from "@mui/icons-material/Domain";
import StarIcon from "@mui/icons-material/Star";
import HouseIcon from "@mui/icons-material/House";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import BusinessIcon from "@mui/icons-material/Business";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WifiIcon from "@mui/icons-material/Wifi";

const GeneralInfo = ({ store }) => {
    const data =
        store || {
            id: "TECH204",
            store_name: "Metro by T-Mobile - Mesa Blvd",
            market: "Arizona East",
            door_code: "A102",
            status: "Active",
            store_email: "mesa.metro@t-mobile.com",
            store_phone: "+1 (480) 222-4455",
            store_address: "1245 E Main St, Mesa, AZ 85203",
            manager: "Sarah Johnson",
            employees: [
                { name: "John Doe", role: "Sales Rep", phone: "480-222-0001" },
                { name: "Jane Smith", role: "Assistant Manager", phone: "480-222-0002" },
                { name: "Mike Brown", role: "CSR", phone: "480-222-0003" },
            ],
            open_hours: "Mon–Sat: 9 AM – 8 PM, Sun: 10 AM – 6 PM",
            performance: { rating: 4.7 },
            created_at: "2023-04-18",
            updated_at: "2025-02-11",
            lease: {
                landlord: "Metro Property Holdings",
                start_date: "2021-05-01",
                end_date: "2026-05-01",
            },
            utilities: {
                provider: "SRP Electric Co.",
                internet: "Comcast Business Fiber",
            },
        };

    const totalEmployees = data.employees?.length || 0;

    return (
        <Box className="container-fluid py-4">
            {/* ===== HEADER ===== */}
            <div className="d-flex align-items-center gap-3 flex-wrap mb-4 bg-white p-3 rounded-4 shadow-sm">
                <Avatar sx={{ bgcolor: "#6d28d9", width: 70, height: 70 }}>
                    <StoreIcon fontSize="large" />
                </Avatar>
                <div>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        {data.store_name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        TECH ID: {data.id} • {data.market}
                    </Typography>
                </div>
            </div>

            {/* ===== ROW 1 ===== */}
            <div className="row g-4">
                {/* ===== STORE INFO ===== */}
                <div className="col-12 col-md-6">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Store Information
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <StoreIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Store Name"
                                        secondary={data.store_name}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <DomainIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Market" secondary={data.market} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <HouseIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText primary="Door Code" secondary={data.door_code} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccessTimeIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Store Hours"
                                        secondary={data.open_hours}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon sx={{ color: "#f59e0b" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Performance Rating"
                                        secondary={`${data.performance.rating}/5`}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <TodayIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Created / Updated"
                                        secondary={`${data.created_at} | ${data.updated_at}`}
                                    />
                                </ListItem>
                            </List>

                            <Box mt={2}>
                                <Chip
                                    label={data.status}
                                    color="success"
                                    variant="filled"
                                    sx={{ fontWeight: 600 }}
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </div>

                {/* ===== CONTACT INFO ===== */}
                <div className="col-12 col-md-6">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Contact Information
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <EmailIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Email" secondary={data.store_email} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalPhoneIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText primary="Phone" secondary={data.store_phone} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocationOnIcon color="error" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Address"
                                        secondary={data.store_address}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ContactPhoneIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Emergency Contact"
                                        secondary="+1 (480) 555-1234"
                                    />
                                </ListItem>
                            </List>
                            <Tooltip title="Open Google Maps">
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        data.store_address
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline-primary mt-2"
                                >
                                    View on Google Maps
                                </a>
                            </Tooltip>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ===== ROW 2 ===== */}
            <div className="row g-4 mt-1">
                {/* ===== STAFF OVERVIEW ===== */}
                <div className="col-12 col-md-6">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Staff Overview
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <PersonIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Manager" secondary={data.manager} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <GroupsIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Total Employees"
                                        secondary={`${totalEmployees}`}
                                    />
                                </ListItem>
                            </List>

                            <Divider sx={{ my: 2 }} />
                            <Typography variant="subtitle2" gutterBottom>
                                Employee List
                            </Typography>
                            {data.employees.map((emp, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        p: 1,
                                        borderRadius: 2,
                                        backgroundColor: "#f3f4f6",
                                        mb: 1,
                                    }}
                                >
                                    <Typography variant="body2">
                                        <b>{emp.name}</b> — {emp.role}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {emp.phone}
                                    </Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* ===== LOCATION DETAILS ===== */}
                <div className="col-12 col-md-6">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Location Details
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <MapIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Address"
                                        secondary={data.store_address}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <BusinessIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Landlord"
                                        secondary={data.lease.landlord}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <TodayIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Lease Period"
                                        secondary={`${data.lease.start_date} → ${data.lease.end_date}`}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ElectricBoltIcon sx={{ color: "#f59e0b" }} />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Electricity Provider"
                                        secondary={data.utilities.provider}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <WifiIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Internet Provider"
                                        secondary={data.utilities.internet}
                                    />
                                </ListItem>
                            </List>
                            <Tooltip title="Open in Google Maps">
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        data.store_address
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-sm btn-outline-success mt-2"
                                >
                                    View on Google Maps
                                </a>
                            </Tooltip>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Box>
    );
};

export default GeneralInfo;
