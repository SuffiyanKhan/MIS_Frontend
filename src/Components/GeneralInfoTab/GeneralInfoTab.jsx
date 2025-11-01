// import React from "react";
// import {
//   Paper,
//   Typography,
//   Divider,
//   Grid,
//   Box,
//   IconButton,
//   Tooltip,
// } from "@mui/material";
// import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import StoreIcon from "@mui/icons-material/Store";
// import PersonIcon from "@mui/icons-material/Person";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// const GeneralInfoTab = () => {
//   return (
//     <Paper
//       elevation={3}
//       className="p-4 rounded-4 mb-4"
//       sx={{
//         backgroundColor: "#fff",
//         border: "1px solid #eee",
//       }}
//     >
//       {/* 🔹 Header */}
//       <Box
//         className="d-flex justify-content-between align-items-center mb-2"
//       >
//         <Typography
//           variant="h6"
//           sx={{ fontWeight: 600, color: "primary.main" }}
//         >
//           Market Summary
//         </Typography>
//         <Tooltip title="Overview of market-level data">
//           <IconButton size="small" color="primary">
//             <InfoOutlinedIcon />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       <Divider sx={{ mb: 3 }} />

//       {/* 🔸 Market Info Section */}
//       <div className="row g-3">
//         <div className="col-12 col-md-6">
//           <Box
//             className="p-3 rounded-4 h-100"
//             sx={{
//               border: "1px solid #e0e0e0",
//               backgroundColor: "#f9f9fb",
//             }}
//           >
//             <Typography variant="body1" sx={{ mb: 1 }}>
//               <strong>📍 Market Region:</strong> Southwest
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 1 }}>
//               <StoreIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
//               <strong>Total Stores:</strong> 45
//             </Typography>
//             <Typography variant="body1" sx={{ mb: 1 }}>
//               <PersonIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
//               <strong>Manager:</strong> John Doe
//             </Typography>
//             <Typography variant="body1">
//               <CalendarMonthIcon
//                 fontSize="small"
//                 sx={{ mr: 1, color: "#6F2DA8" }}
//               />
//               <strong>Established:</strong> March 2018
//             </Typography>
//           </Box>
//         </div>

//         <div className="col-12 col-md-6">
//           <Box
//             className="p-3 rounded-4 h-100 d-flex flex-column justify-content-center align-items-center text-center"
//             sx={{
//               border: "1px solid #e0e0e0",
//               backgroundColor: "#f9f9fb",
//             }}
//           >
//             <TrendingUpIcon
//               sx={{
//                 fontSize: 50,
//                 color: "#6F2DA8",
//                 mb: 1,
//               }}
//             />
//             <Typography variant="body1" sx={{ fontWeight: 600 }}>
//               Monthly Sales Trend
//             </Typography>
//             <Typography variant="body2" sx={{ opacity: 0.7 }}>
//               (Chart Placeholder)
//             </Typography>
//           </Box>
//         </div>
//       </div>

//       {/* 🔹 Top Performing Stores Section */}
//       <Box className="mt-4">
//         <Box
//           className="d-flex justify-content-between align-items-center mb-2"
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               fontWeight: 600,
//               color: "primary.main",
//             }}
//           >
//             Top Performing Stores
//           </Typography>
//           <Tooltip title="View performance details">
//             <IconButton size="small" color="primary">
//               <InfoOutlinedIcon />
//             </IconButton>
//           </Tooltip>
//         </Box>
//         <Box
//           className="p-3 rounded-4 text-center"
//           sx={{
//             border: "1px solid #e0e0e0",
//             backgroundColor: "#f9f9fb",
//             fontSize: "0.95rem",
//             color: "#555",
//           }}
//         >
//           🏆 <strong>Table Placeholder:</strong> Store Name | Manager | Sales |
//           Rank
//         </Box>
//       </Box>
//     </Paper>
//   );
// };

// export default GeneralInfoTab;

import React from "react";
import {
    Paper,
    Typography,
    Divider,
    Box,
    IconButton,
    Tooltip,
    Avatar,
    Chip,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import StoreIcon from "@mui/icons-material/Store";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import StarIcon from "@mui/icons-material/Star";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MonthlySalesTrend from "../MonthlySalesTrend/MonthlySalesTrend";
import MarketInformation from "../MarketInformation/MarketInformation";

const GeneralInfoTab = () => {
    return (
        <Paper
            elevation={3}
            className="p-4 rounded-4 mb-4"
            sx={{
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
            }}
        >
            {/* 🟣 Header */}
            <Box className="d-flex justify-content-between align-items-center mb-3">
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 700,
                        color: "primary.main",
                        fontSize: "1.5rem",
                    }}
                >
                    Market Summary — Arizona Region
                </Typography>

                <Tooltip title="Overview of this market’s key performance indicators">
                    <IconButton size="small" color="primary">
                        <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* 🔹 Market Info Grid */}
            <div className="row g-3">
                {/* Left: Market Information */}
                <div className="col-12 col-md-6">
                    <MarketInformation />
                    {/* <Box
                        className="p-4 rounded-4 h-100"
                        sx={{
                            border: "1px solid #e0e0e0",
                            backgroundColor: "#faf8fc",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                            },
                        }}
                    >
                        <Typography
                            variant="subtitle2"
                            sx={{ color: "text.secondary", mb: 2, textTransform: "uppercase" }}
                        >
                            General Details
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <LocationCityIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
                            <strong>Region:</strong> Southwest
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <StoreIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
                            <strong>Total Stores:</strong> 45
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <PersonIcon fontSize="small" sx={{ mr: 1, color: "#6F2DA8" }} />
                            <strong>Regional Manager:</strong> John Doe
                        </Typography>

                        <Typography variant="body1" sx={{ mb: 1 }}>
                            <BusinessCenterIcon
                                fontSize="small"
                                sx={{ mr: 1, color: "#6F2DA8" }}
                            />
                            <strong>Director:</strong> Sarah Williams
                        </Typography>

                        <Typography variant="body1">
                            <CalendarMonthIcon
                                fontSize="small"
                                sx={{ mr: 1, color: "#6F2DA8" }}
                            />
                            <strong>Established:</strong> March 2018
                        </Typography>

                        <Box className="mt-3">
                            <Chip
                                label="Status: Active"
                                color="success"
                                sx={{ fontWeight: 600 }}
                            />
                        </Box>
                    </Box> */}
                </div>

                {/* Right: Monthly Sales Trend */}
                <div className="col-12 col-md-6">
                    <MonthlySalesTrend />
                    {/* <Box
                        className="p-4 rounded-4 h-100 d-flex flex-column justify-content-center align-items-center text-center"
                        sx={{
                            border: "1px solid #e0e0e0",
                            backgroundColor: "#faf8fc",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "translateY(-5px)",
                                boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                            },
                        }}
                    >
                        <TrendingUpIcon sx={{ fontSize: 60, color: "#6F2DA8", mb: 1 }} />
                        <Typography
                            variant="h6"
                            sx={{ fontWeight: 600, color: "primary.main", mb: 0.5 }}
                        >
                            Monthly Sales Trend
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ opacity: 0.75, color: "#666", mb: 2 }}
                        >
                            (Interactive Chart Placeholder)
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                color: "#6F2DA8",
                            }}
                        >
                            $1.2M
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Current Month Revenue
                        </Typography>
                    </Box> */}
                </div>
            </div>

            {/* 🔸 Top Performing Stores */}
            <Box className="mt-5">
                <Box className="d-flex justify-content-between align-items-center mb-2">
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 700,
                            color: "primary.main",
                            fontSize: "1.3rem",
                        }}
                    >
                        Top Performing Stores
                    </Typography>
                    <Tooltip title="Performance ranking of top stores based on sales KPIs">
                        <IconButton size="small" color="primary">
                            <InfoOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>

                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>Rank</th>
                                <th>Store Name</th>
                                <th>Manager</th>
                                <th>Sales (Monthly)</th>
                                <th>Performance</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { rank: 1, name: "Metro AZ #23", manager: "David Lee", sales: "$120,000", perf: "Excellent" },
                                { rank: 2, name: "Metro AZ #12", manager: "Maria Jones", sales: "$110,500", perf: "Strong" },
                                { rank: 3, name: "Metro AZ #08", manager: "Robert Hill", sales: "$102,300", perf: "Good" },
                            ].map((store, index) => (
                                <tr key={index}>
                                    <td>
                                        <Chip
                                            icon={<StarIcon sx={{ color: "gold" }} />}
                                            label={store.rank}
                                            variant="outlined"
                                            color="warning"
                                            sx={{ fontWeight: "bold" }}
                                        />
                                    </td>
                                    <td>{store.name}</td>
                                    <td>{store.manager}</td>
                                    <td>{store.sales}</td>
                                    <td>
                                        <Chip
                                            label={store.perf}
                                            color={
                                                store.perf === "Excellent"
                                                    ? "success"
                                                    : store.perf === "Strong"
                                                        ? "primary"
                                                        : "warning"
                                            }
                                            size="small"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Box>

            {/* 🔹 Footer Summary */}
            <Divider sx={{ mt: 4, mb: 2 }} />
            <Box className="d-flex justify-content-between align-items-center">
                <Typography variant="caption" color="text.secondary">
                    Last updated: Oct 2025
                </Typography>
                <Typography variant="caption" color="primary">
                    Prepared by: MIS Analytics Team
                </Typography>
            </Box>
        </Paper>
    );
};

export default GeneralInfoTab;
