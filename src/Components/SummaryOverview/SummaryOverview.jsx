// import React from "react";
// import { Paper, Typography, Box } from "@mui/material";
// import StoreIcon from "@mui/icons-material/Store";
// import LocationCityIcon from "@mui/icons-material/LocationCity";
// import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
// import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

// const SummaryOverview = ({ totalMarkets, totalStores, totalEmployees, totalSales }) => {
//   const summaryData = [
//     {
//       title: "Total Markets",
//       value: totalMarkets ?? 0,
//       icon: <LocationCityIcon fontSize="large" sx={{ color: "#fff" }} />,
//       bg: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
//     },
//     {
//       title: "Total Stores",
//       value: totalStores ?? 0,
//       icon: <StoreIcon fontSize="large" sx={{ color: "#fff" }} />,
//       bg: "linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)",
//     },
//     {
//       title: "Total Employees",
//       value: totalEmployees ?? 0,
//       icon: <PeopleAltIcon fontSize="large" sx={{ color: "#fff" }} />,
//       bg: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
//     },
//     {
//       title: "Total Sales",
//       value: `$${totalSales?.toLocaleString() ?? "0"}`,
//       icon: <MonetizationOnIcon fontSize="large" sx={{ color: "#fff" }} />,
//       bg: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
//     },
//   ];

//   return (
//     <Paper elevation={3} className="p-4 rounded-4 mb-4">
//       <Typography
//         variant="h6"
//         sx={{
//           mb: 3,
//           fontWeight: 600,
//           color: "primary.main",
//           fontSize: "1.5rem",
//         }}
//       >
//         Summary Overview
//       </Typography>

//       <div className="row g-3">
//         {summaryData.map((item, index) => (
//           <div className="col-12 col-sm-6 col-lg-3" key={index}>
//             <Paper
//               elevation={4}
//               sx={{
//                 borderRadius: 4,
//                 background: item.bg,
//                 color: "#fff",
//                 p: 2.5,
//                 height: "100%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: "translateY(-6px)",
//                   boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
//                 },
//               }}
//             >
//               <Box>{item.icon}</Box>
//               <Box textAlign="right">
//                 <Typography
//                   variant="h5"
//                   sx={{
//                     fontWeight: "bold",
//                     fontSize: "1.75rem",
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   {item.value}
//                 </Typography>
//                 <Typography
//                   variant="body2"
//                   sx={{ fontSize: "1rem", opacity: 0.9 }}
//                 >
//                   {item.title}
//                 </Typography>
//               </Box>
//             </Paper>
//           </div>
//         ))}
//       </div>
//     </Paper>
//   );
// };

// export default SummaryOverview;

import React from "react";
import {
    Paper,
    Typography,
    Box,
    Divider,
    Tooltip,
    Fade,
} from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const SummaryOverview = ({
    totalMarkets = 0,
    totalStores = 0,
    totalEmployees = 0,
    totalSales = 0,
}) => {
    const summaryData = [
        {
            title: "Total Markets",
            value: totalMarkets,
            icon: <LocationCityIcon fontSize="large" />,
            gradient: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
            tooltip: "Total number of operating Metro by T-Mobile markets",
        },
        {
            title: "Total Stores",
            value: totalStores,
            icon: <StoreIcon fontSize="large" />,
            gradient: "linear-gradient(135deg, #0072ff 0%, #00c6ff 100%)",
            tooltip: "Number of active store locations across all markets",
        },
        {
            title: "Total Employees",
            value: totalEmployees,
            icon: <PeopleAltIcon fontSize="large" />,
            gradient: "linear-gradient(135deg, #00b09b 0%, #96c93d 100%)",
            tooltip: "Employees working across all store locations",
        },
        {
            title: "Total Sales",
            value: `$${totalSales.toLocaleString()}`,
            icon: <MonetizationOnIcon fontSize="large" />,
            gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
            tooltip: "Cumulative sales performance across all markets",
        },
    ];

    return (
        <Paper
            elevation={4}
            className="p-4 rounded-4 mb-4"
            sx={{
                background: "linear-gradient(180deg, #ffffff 0%, #faf7ff 100%)",
            }}
        >
            {/* Header */}
            <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 600,
                        color: "primary.main",
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <TrendingUpIcon color="primary" />
                    Summary Overview
                </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            {/* Cards Grid */}
            <div className="row g-3">
                {summaryData.map((item, i) => (
                    <div className="col-12 col-sm-6 col-lg-3" key={i}>
                        <Tooltip
                            title={item.tooltip}
                            TransitionComponent={Fade}
                            TransitionProps={{ timeout: 400 }}
                            arrow
                        >
                            <Paper
                                elevation={5}
                                sx={{
                                    borderRadius: 4,
                                    background: item.gradient,
                                    color: "#fff",
                                    p: 3,
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    transition: "all 0.35s ease",
                                    boxShadow:
                                        "0 4px 12px rgba(0,0,0,0.15), inset 0 0 12px rgba(255,255,255,0.15)",
                                    "&:hover": {
                                        transform: "translateY(-6px) scale(1.02)",
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: "rgba(255,255,255,0.15)",
                                        borderRadius: "50%",
                                        padding: "10px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    {React.cloneElement(item.icon, { sx: { color: "#fff" } })}
                                </Box>

                                <Box textAlign="right">
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            fontWeight: 700,
                                            fontSize: "2rem",
                                            lineHeight: 1.1,
                                            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                                        }}
                                    >
                                        {item.value}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontSize: "1rem",
                                            fontWeight: 500,
                                            opacity: 0.95,
                                            letterSpacing: 0.3,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                </Box>
                            </Paper>
                        </Tooltip>
                    </div>
                ))}
            </div>
        </Paper>
    );
};

export default SummaryOverview;
