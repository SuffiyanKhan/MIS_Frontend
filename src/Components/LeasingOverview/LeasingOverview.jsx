// // // import React from "react";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   Typography,
// // //   Divider,
// // //   Box,
// // //   List,
// // //   ListItem,
// // //   ListItemIcon,
// // //   ListItemText,
// // //   Chip,
// // //   Tooltip,
// // //   Grid,
// // // } from "@mui/material";

// // // // ===== ICONS =====
// // // import BusinessIcon from "@mui/icons-material/Business";
// // // import TodayIcon from "@mui/icons-material/Today";
// // // import PaymentsIcon from "@mui/icons-material/Payments";
// // // import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// // // import VerifiedIcon from "@mui/icons-material/Verified";
// // // import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// // // import DescriptionIcon from "@mui/icons-material/Description";
// // // import LocationCityIcon from "@mui/icons-material/LocationCity";
// // // import EventAvailableIcon from "@mui/icons-material/EventAvailable";
// // // import EventBusyIcon from "@mui/icons-material/EventBusy";
// // // import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// // // import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// // // const LeasingOverview = ({ lease }) => {
// // //   // Dummy lease data (if no prop passed)
// // //   const data =
// // //     lease || {
// // //       landlord: "Metro Property Holdings LLC",
// // //       landlord_contact: "Michael Stevens (480-555-1122)",
// // //       property_manager: "Bright Realty Mgmt",
// // //       lease_start: "2021-05-01",
// // //       lease_end: "2026-05-01",
// // //       monthly_rent: "$3,200",
// // //       security_deposit: "$6,000",
// // //       payment_status: "Paid Up-to-date",
// // //       renewal_option: "Yes (6 months notice required)",
// // //       documents: [
// // //         { name: "Lease Agreement.pdf", size: "2.1 MB" },
// // //         { name: "Deposit Receipt.pdf", size: "0.8 MB" },
// // //       ],
// // //       last_inspection: "2024-11-10",
// // //       next_inspection: "2025-11-12",
// // //     };

// // //   return (
// // //     <Box sx={{ p: 4, backgroundColor: "#f9fafb", borderRadius: 3 }}>
// // //       {/* ===== HEADER ===== */}
// // //       <Box
// // //         display="flex"
// // //         alignItems="center"
// // //         justifyContent="space-between"
// // //         flexWrap="wrap"
// // //         mb={3}
// // //       >
// // //         <Typography variant="h5" sx={{ fontWeight: "bold" }}>
// // //           Leasing Overview
// // //         </Typography>
// // //         <Chip label={data.payment_status} color="success" variant="filled" />
// // //       </Box>

// // //       <Grid container spacing={3}>
// // //         {/* ===== Lease Details ===== */}
// // //         <Grid item xs={12} md={6}>
// // //           <Card sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
// // //             <CardContent>
// // //               <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
// // //                 Lease Details
// // //               </Typography>
// // //               <Divider sx={{ mb: 2 }} />

// // //               <List dense>
// // //                 <ListItem>
// // //                   <ListItemIcon><BusinessIcon color="primary" /></ListItemIcon>
// // //                   <ListItemText primary="Landlord" secondary={data.landlord} />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><SupportAgentIcon color="secondary" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Landlord Contact"
// // //                     secondary={data.landlord_contact}
// // //                   />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><LocationCityIcon color="info" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Property Manager"
// // //                     secondary={data.property_manager}
// // //                   />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><TodayIcon color="success" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Lease Duration"
// // //                     secondary={`${data.lease_start} → ${data.lease_end}`}
// // //                   />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><CalendarMonthIcon color="action" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Renewal Option"
// // //                     secondary={data.renewal_option}
// // //                   />
// // //                 </ListItem>
// // //               </List>
// // //             </CardContent>
// // //           </Card>
// // //         </Grid>

// // //         {/* ===== Payment & Financial Info ===== */}
// // //         <Grid item xs={12} md={6}>
// // //           <Card sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
// // //             <CardContent>
// // //               <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
// // //                 Payment & Financials
// // //               </Typography>
// // //               <Divider sx={{ mb: 2 }} />

// // //               <List dense>
// // //                 <ListItem>
// // //                   <ListItemIcon><AttachMoneyIcon color="success" /></ListItemIcon>
// // //                   <ListItemText primary="Monthly Rent" secondary={data.monthly_rent} />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><AccountBalanceWalletIcon color="secondary" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Security Deposit"
// // //                     secondary={data.security_deposit}
// // //                   />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><PaymentsIcon color="primary" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Payment Status"
// // //                     secondary={data.payment_status}
// // //                   />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><VerifiedIcon color="success" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Last Inspection"
// // //                     secondary={data.last_inspection}
// // //                   />
// // //                 </ListItem>

// // //                 <ListItem>
// // //                   <ListItemIcon><EventAvailableIcon color="info" /></ListItemIcon>
// // //                   <ListItemText
// // //                     primary="Next Inspection"
// // //                     secondary={data.next_inspection}
// // //                   />
// // //                 </ListItem>
// // //               </List>
// // //             </CardContent>
// // //           </Card>
// // //         </Grid>

// // //         {/* ===== Documents Section ===== */}
// // //         <Grid item xs={12}>
// // //           <Card sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}>
// // //             <CardContent>
// // //               <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
// // //                 Lease Documents
// // //               </Typography>
// // //               <Divider sx={{ mb: 2 }} />

// // //               {data.documents.map((doc, index) => (
// // //                 <Box
// // //                   key={index}
// // //                   sx={{
// // //                     display: "flex",
// // //                     justifyContent: "space-between",
// // //                     alignItems: "center",
// // //                     backgroundColor: "#f3f4f6",
// // //                     p: 1.5,
// // //                     borderRadius: 2,
// // //                     mb: 1,
// // //                   }}
// // //                 >
// // //                   <Box display="flex" alignItems="center" gap={1.5}>
// // //                     <DescriptionIcon color="action" />
// // //                     <Typography variant="body2" sx={{ fontWeight: 500 }}>
// // //                       {doc.name}
// // //                     </Typography>
// // //                   </Box>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     {doc.size}
// // //                   </Typography>
// // //                 </Box>
// // //               ))}
// // //             </CardContent>
// // //           </Card>
// // //         </Grid>
// // //       </Grid>
// // //     </Box>
// // //   );
// // // };

// // // export default LeasingOverview;

// // import React from "react";
// // import {
// //     Card,
// //     CardContent,
// //     Typography,
// //     Divider,
// //     Box,
// //     List,
// //     ListItem,
// //     ListItemIcon,
// //     ListItemText,
// //     Chip,
// //     Tooltip,
// //     Grid,
// //     Checkbox,
// //     FormControlLabel,
// // } from "@mui/material";

// // // ===== ICONS =====
// // import BusinessIcon from "@mui/icons-material/Business";
// // import TodayIcon from "@mui/icons-material/Today";
// // import PaymentsIcon from "@mui/icons-material/Payments";
// // import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// // import DescriptionIcon from "@mui/icons-material/Description";
// // import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// // import DomainIcon from "@mui/icons-material/Domain";
// // import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// // import EventBusyIcon from "@mui/icons-material/EventBusy";
// // import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// // import PersonIcon from "@mui/icons-material/Person";
// // import VerifiedIcon from "@mui/icons-material/Verified";
// // import GavelIcon from "@mui/icons-material/Gavel";
// // import LocationCityIcon from "@mui/icons-material/LocationCity";

// // const LeasingOverview = ({ lease }) => {
// //     // Dummy Data
// //     const data =
// //         lease || {
// //             BaseRent: "$3,000 / month",
// //             CamCharges: "$350 / month",
// //             LeaseIncrementPercentage: "5% annually",
// //             LandlordName: "Michael Stevens",
// //             ContactNumber: "+1 (480) 555-1122",
// //             LandlordCoi: "Uploaded",
// //             MetroCoi: "Pending",
// //             BankInformation: "Wells Fargo Bank, Account: ****1234",
// //             EntityName: "Metro Property Holdings LLC",
// //             Guarantor: "Bright Capital Group",
// //             Lease_Term: "2021-05-01 → 2026-05-01",
// //             Expiry_Due: "2026-05-01",
// //             HVAC: true,
// //             Exclusivity: true,
// //             Termination: false,
// //             Relocation: false,
// //             Images: ["lease_front.jpg", "lease_contract_page1.jpg"],
// //             Documents: [
// //                 { name: "Lease Agreement.pdf", size: "2.1 MB" },
// //                 { name: "COI - Landlord.pdf", size: "1.2 MB" },
// //                 { name: "COI - Metro.pdf", size: "1.0 MB" },
// //             ],
// //         };

// //     return (
// //         <Box sx={{ p: 4, backgroundColor: "#f9fafb", borderRadius: 3 }}>
// //             {/* ===== HEADER ===== */}
// //             <Box
// //                 display="flex"
// //                 alignItems="center"
// //                 justifyContent="space-between"
// //                 flexWrap="wrap"
// //                 mb={3}
// //             >
// //                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
// //                     Leasing Overview
// //                 </Typography>
// //                 <Chip label="Active Lease" color="success" variant="filled" />
// //             </Box>

// //             <Grid container spacing={3}>
// //                 {/* ===== FINANCIAL DETAILS ===== */}
// //                 <Grid item xs={12} md={6}>
// //                     <Card
// //                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
// //                     >
// //                         <CardContent>
// //                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
// //                                 Financial Details
// //                             </Typography>
// //                             <Divider sx={{ mb: 2 }} />
// //                             <List dense>
// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <PaymentsIcon color="primary" />
// //                                     </ListItemIcon>
// //                                     <ListItemText primary="Base Rent" secondary={data.BaseRent} />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <AccountBalanceWalletIcon color="secondary" />
// //                                     </ListItemIcon>
// //                                     <ListItemText primary="CAM Charges" secondary={data.CamCharges} />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <VerifiedIcon color="success" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Lease Increment"
// //                                         secondary={data.LeaseIncrementPercentage}
// //                                     />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <AccountBalanceIcon color="info" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Bank Information"
// //                                         secondary={data.BankInformation}
// //                                     />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <DomainIcon color="action" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Entity Name"
// //                                         secondary={data.EntityName}
// //                                     />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <PersonIcon color="warning" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Guarantor"
// //                                         secondary={data.Guarantor}
// //                                     />
// //                                 </ListItem>
// //                             </List>
// //                         </CardContent>
// //                     </Card>
// //                 </Grid>

// //                 {/* ===== LANDLORD DETAILS ===== */}
// //                 <Grid item xs={12} md={6}>
// //                     <Card
// //                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
// //                     >
// //                         <CardContent>
// //                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
// //                                 Landlord & Contact
// //                             </Typography>
// //                             <Divider sx={{ mb: 2 }} />
// //                             <List dense>
// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <BusinessIcon color="primary" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Landlord Name"
// //                                         secondary={data.LandlordName}
// //                                     />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <SupportAgentIcon color="secondary" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Contact Number"
// //                                         secondary={data.ContactNumber}
// //                                     />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <DescriptionOutlinedIcon color="success" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Landlord COI"
// //                                         secondary={data.LandlordCoi}
// //                                     />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <DescriptionIcon color="info" />
// //                                     </ListItemIcon>
// //                                     <ListItemText primary="Metro COI" secondary={data.MetroCoi} />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <TodayIcon color="action" />
// //                                     </ListItemIcon>
// //                                     <ListItemText
// //                                         primary="Lease Term"
// //                                         secondary={data.Lease_Term}
// //                                     />
// //                                 </ListItem>

// //                                 <ListItem>
// //                                     <ListItemIcon>
// //                                         <EventBusyIcon color="error" />
// //                                     </ListItemIcon>
// //                                     <ListItemText primary="Expiry Due" secondary={data.Expiry_Due} />
// //                                 </ListItem>
// //                             </List>
// //                         </CardContent>
// //                     </Card>
// //                 </Grid>

// //                 {/* ===== CLAUSES ===== */}
// //                 <Grid item xs={12}>
// //                     <Card
// //                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
// //                     >
// //                         <CardContent>
// //                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
// //                                 Lease Clauses
// //                             </Typography>
// //                             <Divider sx={{ mb: 2 }} />

// //                             <Box
// //                                 display="flex"
// //                                 flexWrap="wrap"
// //                                 gap={2}
// //                                 justifyContent="flex-start"
// //                             >
// //                                 <FormControlLabel
// //                                     control={<Checkbox checked={data.HVAC} color="primary" />}
// //                                     label="HVAC"
// //                                 />
// //                                 <FormControlLabel
// //                                     control={<Checkbox checked={data.Exclusivity} color="primary" />}
// //                                     label="Exclusivity"
// //                                 />
// //                                 <FormControlLabel
// //                                     control={<Checkbox checked={data.Termination} color="primary" />}
// //                                     label="Termination"
// //                                 />
// //                                 <FormControlLabel
// //                                     control={<Checkbox checked={data.Relocation} color="primary" />}
// //                                     label="Relocation"
// //                                 />
// //                             </Box>
// //                         </CardContent>
// //                     </Card>
// //                 </Grid>

// //                 {/* ===== DOCUMENTS SECTION ===== */}
// //                 <Grid item xs={12}>
// //                     <Card
// //                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
// //                     >
// //                         <CardContent>
// //                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
// //                                 Documents & Attachments
// //                             </Typography>
// //                             <Divider sx={{ mb: 2 }} />
// //                             {data.Documents.length > 0 ? (
// //                                 data.Documents.map((doc, i) => (
// //                                     <Box
// //                                         key={i}
// //                                         sx={{
// //                                             display: "flex",
// //                                             justifyContent: "space-between",
// //                                             alignItems: "center",
// //                                             p: 1.5,
// //                                             borderRadius: 2,
// //                                             backgroundColor: "#f3f4f6",
// //                                             mb: 1,
// //                                         }}
// //                                     >
// //                                         <Box display="flex" alignItems="center" gap={1.5}>
// //                                             <DescriptionIcon color="action" />
// //                                             <Typography variant="body2" sx={{ fontWeight: 500 }}>
// //                                                 {doc.name}
// //                                             </Typography>
// //                                         </Box>
// //                                         <Typography variant="body2" color="text.secondary">
// //                                             {doc.size}
// //                                         </Typography>
// //                                     </Box>
// //                                 ))
// //                             ) : (
// //                                 <Typography variant="body2" color="text.secondary">
// //                                     No documents uploaded.
// //                                 </Typography>
// //                             )}
// //                         </CardContent>
// //                     </Card>
// //                 </Grid>
// //             </Grid>
// //         </Box>
// //     );
// // };

// // export default LeasingOverview;
// import React from "react";
// import {
//     Card,
//     CardContent,
//     Typography,
//     Divider,
//     Box,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     Chip,
//     Grid,
//     Checkbox,
//     FormControlLabel,
// } from "@mui/material";

// // ===== ICONS =====
// import BusinessIcon from "@mui/icons-material/Business";
// import TodayIcon from "@mui/icons-material/Today";
// import PaymentsIcon from "@mui/icons-material/Payments";
// import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
// import DescriptionIcon from "@mui/icons-material/Description";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
// import DomainIcon from "@mui/icons-material/Domain";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import EventBusyIcon from "@mui/icons-material/EventBusy";
// import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
// import PersonIcon from "@mui/icons-material/Person";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import GavelIcon from "@mui/icons-material/Gavel";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import LocationCityIcon from "@mui/icons-material/LocationCity";
// import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";

// const LeasingOverview = ({ lease }) => {
//     const data =
//         lease || {
//             BaseRent: "$3,000 / month",
//             CamCharges: "$350 / month",
//             LeaseIncrementPercentage: "5% annually",
//             LandlordName: "Michael Stevens",
//             ContactNumber: "+1 (480) 555-1122",
//             LandlordCoi: "Uploaded",
//             MetroCoi: "Pending",
//             EntityName: "Metro Property Holdings LLC",
//             Guarantor: "Bright Capital Group",
//             Lease_Term: "2021-05-01 → 2026-05-01",
//             Expiry_Due: "2026-05-01",
//             HVAC: true,
//             Exclusivity: true,
//             Termination: false,
//             Relocation: false,
//             BankInformation: {
//                 BankName: "Wells Fargo Bank",
//                 AccountHolder: "Metro Property Holdings LLC",
//                 AccountNumber: "987654321234",
//                 RoutingNumber: "122000247",
//                 Branch: "Mesa, AZ",
//             },
//             Documents: [
//                 { name: "Lease Agreement.pdf", size: "2.1 MB" },
//                 { name: "COI - Landlord.pdf", size: "1.2 MB" },
//                 { name: "COI - Metro.pdf", size: "1.0 MB" },
//             ],
//         };

//     // Masked account number
//     const maskAccount = (accNum) =>
//         accNum ? `**** **** **** ${accNum.slice(-4)}` : "Not available";

//     return (
//         <Box sx={{ p: 4, backgroundColor: "#f9fafb", borderRadius: 3 }}>
//             {/* ===== HEADER ===== */}
//             <Box
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="space-between"
//                 flexWrap="wrap"
//                 mb={3}
//             >
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                     Leasing Overview
//                 </Typography>
//                 <Chip label="Active Lease" color="success" variant="filled" />
//             </Box>

//             <Grid container spacing={3}>
//                 {/* ===== FINANCIAL DETAILS ===== */}
//                 <Grid item xs={12} md={6}>
//                     <Card
//                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Financial Details
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List dense>
//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <PaymentsIcon color="primary" />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Base Rent" secondary={data.BaseRent} />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <AccountBalanceWalletIcon color="secondary" />
//                                     </ListItemIcon>
//                                     <ListItemText primary="CAM Charges" secondary={data.CamCharges} />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <VerifiedIcon color="success" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Lease Increment"
//                                         secondary={data.LeaseIncrementPercentage}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <DomainIcon color="info" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Entity Name"
//                                         secondary={data.EntityName}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <PersonIcon color="warning" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Guarantor"
//                                         secondary={data.Guarantor}
//                                     />
//                                 </ListItem>
//                             </List>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* ===== LANDLORD DETAILS ===== */}
//                 <Grid item xs={12} md={6}>
//                     <Card
//                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Landlord & Contact
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List dense>
//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <BusinessIcon color="primary" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Landlord Name"
//                                         secondary={data.LandlordName}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <SupportAgentIcon color="secondary" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Contact Number"
//                                         secondary={data.ContactNumber}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <DescriptionOutlinedIcon color="success" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Landlord COI"
//                                         secondary={data.LandlordCoi}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <DescriptionIcon color="info" />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Metro COI" secondary={data.MetroCoi} />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <TodayIcon color="action" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Lease Term"
//                                         secondary={data.Lease_Term}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <EventBusyIcon color="error" />
//                                     </ListItemIcon>
//                                     <ListItemText primary="Expiry Due" secondary={data.Expiry_Due} />
//                                 </ListItem>
//                             </List>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* ===== BANK INFORMATION ===== */}
//                 <Grid item xs={12}>
//                     <Card
//                         sx={{
//                             borderRadius: 3,
//                             boxShadow: 2,
//                             "&:hover": { boxShadow: 4 },
//                         }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Bank Information
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List dense>
//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <AccountBalanceOutlinedIcon color="primary" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Bank Name"
//                                         secondary={data.BankInformation.BankName}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <CreditCardIcon color="secondary" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Account Number"
//                                         secondary={maskAccount(data.BankInformation.AccountNumber)}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <PersonIcon color="info" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Account Holder"
//                                         secondary={data.BankInformation.AccountHolder}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <GavelIcon color="success" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Routing Number"
//                                         secondary={data.BankInformation.RoutingNumber}
//                                     />
//                                 </ListItem>

//                                 <ListItem>
//                                     <ListItemIcon>
//                                         <LocationCityIcon color="warning" />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary="Branch Location"
//                                         secondary={data.BankInformation.Branch}
//                                     />
//                                 </ListItem>
//                             </List>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* ===== CLAUSES ===== */}
//                 <Grid item xs={12}>
//                     <Card
//                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Lease Clauses
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />

//                             <Box display="flex" flexWrap="wrap" gap={2}>
//                                 <FormControlLabel
//                                     control={<Checkbox checked={data.HVAC} color="primary" />}
//                                     label="HVAC"
//                                 />
//                                 <FormControlLabel
//                                     control={<Checkbox checked={data.Exclusivity} color="primary" />}
//                                     label="Exclusivity"
//                                 />
//                                 <FormControlLabel
//                                     control={<Checkbox checked={data.Termination} color="primary" />}
//                                     label="Termination"
//                                 />
//                                 <FormControlLabel
//                                     control={<Checkbox checked={data.Relocation} color="primary" />}
//                                     label="Relocation"
//                                 />
//                             </Box>
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* ===== DOCUMENTS ===== */}
//                 <Grid item xs={12}>
//                     <Card
//                         sx={{ borderRadius: 3, boxShadow: 2, "&:hover": { boxShadow: 4 } }}
//                     >
//                         <CardContent>
//                             <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
//                                 Documents & Attachments
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             {data.Documents.length > 0 ? (
//                                 data.Documents.map((doc, i) => (
//                                     <Box
//                                         key={i}
//                                         sx={{
//                                             display: "flex",
//                                             justifyContent: "space-between",
//                                             alignItems: "center",
//                                             p: 1.5,
//                                             borderRadius: 2,
//                                             backgroundColor: "#f3f4f6",
//                                             mb: 1,
//                                         }}
//                                     >
//                                         <Box display="flex" alignItems="center" gap={1.5}>
//                                             <DescriptionIcon color="action" />
//                                             <Typography variant="body2" sx={{ fontWeight: 500 }}>
//                                                 {doc.name}
//                                             </Typography>
//                                         </Box>
//                                         <Typography variant="body2" color="text.secondary">
//                                             {doc.size}
//                                         </Typography>
//                                     </Box>
//                                 ))
//                             ) : (
//                                 <Typography variant="body2" color="text.secondary">
//                                     No documents uploaded.
//                                 </Typography>
//                             )}
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default LeasingOverview;
import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Divider,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Chip,
    Checkbox,
    FormControlLabel,
    Button,
} from "@mui/material";

// ===== ICONS =====
import BusinessIcon from "@mui/icons-material/Business";
import TodayIcon from "@mui/icons-material/Today";
import PaymentsIcon from "@mui/icons-material/Payments";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import DescriptionIcon from "@mui/icons-material/Description";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import DomainIcon from "@mui/icons-material/Domain";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import PersonIcon from "@mui/icons-material/Person";
import VerifiedIcon from "@mui/icons-material/Verified";
import GavelIcon from "@mui/icons-material/Gavel";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";


// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

const LeasingOverview = ({ lease }) => {
    const data =
        lease || {
            BaseRent: "$3,000 / month",
            CamCharges: "$350 / month",
            LeaseIncrementPercentage: "5% annually",
            LandlordName: "Michael Stevens",
            ContactNumber: "+1 (480) 555-1122",
            LandlordCoi: "Uploaded",
            MetroCoi: "Pending",
            EntityName: "Metro Property Holdings LLC",
            Guarantor: "Bright Capital Group",
            Lease_Term: "2021-05-01 → 2026-05-01",
            Expiry_Due: "2026-05-01",
            HVAC: true,
            Exclusivity: true,
            Termination: false,
            Relocation: false,
            BankInformation: {
                BankName: "Wells Fargo Bank",
                AccountHolder: "Metro Property Holdings LLC",
                AccountNumber: "987654321234",
                RoutingNumber: "122000247",
                Branch: "Mesa, AZ",
            },
            Documents: [
                { name: "Lease Agreement.pdf", size: "2.1 MB" },
                { name: "COI - Landlord.pdf", size: "1.2 MB" },
                { name: "COI - Metro.pdf", size: "1.0 MB" },
            ],
        };

    const maskAccount = (accNum) =>
        accNum ? `**** **** **** ${accNum.slice(-4)}` : "Not available";

    return (
        <div className="container-fluid py-4">
            {/* ===== HEADER ===== */}
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                <Box>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 700,
                            color: "#1e1e2f",
                        }}
                    >
                        Leasing Overview
                    </Typography>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 0.5 }}
                    >
                        Current store lease details, landlord info & associated documents
                    </Typography>

                    <Box
                        sx={{
                            mt: 1.5,
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                            flexWrap: "wrap",
                        }}
                    >
                        <Chip
                            label="Active Lease"
                            color="success"
                            variant="filled"
                            size="small"
                        />
                        <Typography variant="body2" color="text.secondary">
                            Lease Term: <strong>Jan 01, 2023 – Dec 31, 2025</strong>
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "#6d28d9", fontWeight: 500 }}
                        >
                            Expiry in 2 months
                        </Typography>
                    </Box>
                </Box>

                {/* Optionally add a right-aligned quick action */}
                <Button
                    variant="contained"
                    startIcon={<BusinessCenterIcon />}
                    sx={{
                        backgroundColor: "#6d28d9",
                        textTransform: "none",
                        borderRadius: 2,
                        px: 2.5,
                        py: 1,
                        "&:hover": { backgroundColor: "#5b21b6" },
                    }}
                >
                    Manage Lease
                </Button>
            </div>


            {/* ROW 1 */}
            <div className="row g-4">
                <div className="col-12 col-md-6">
                    <Card className="shadow-sm border-0 rounded-4">
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Financial Details
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <PaymentsIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Base Rent" secondary={data.BaseRent} />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <AccountBalanceWalletIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="CAM Charges" secondary={data.CamCharges} />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <VerifiedIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Lease Increment"
                                        secondary={data.LeaseIncrementPercentage}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <DomainIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText primary="Entity Name" secondary={data.EntityName} />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <PersonIcon color="warning" />
                                    </ListItemIcon>
                                    <ListItemText primary="Guarantor" secondary={data.Guarantor} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>

                <div className="col-12 col-md-6">
                    <Card className="shadow-sm border-0 rounded-4">
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Landlord & Contact
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <BusinessIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Landlord Name"
                                        secondary={data.LandlordName}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <SupportAgentIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Contact Number"
                                        secondary={data.ContactNumber}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <DescriptionOutlinedIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Landlord COI"
                                        secondary={data.LandlordCoi}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <DescriptionIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText primary="Metro COI" secondary={data.MetroCoi} />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <TodayIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Lease Term"
                                        secondary={data.Lease_Term}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <EventBusyIcon color="error" />
                                    </ListItemIcon>
                                    <ListItemText primary="Expiry Due" secondary={data.Expiry_Due} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ROW 2 — BANK INFORMATION */}
            <div className="row g-4 mt-1">
                <div className="col-12">
                    <Card className="shadow-sm border-0 rounded-4">
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Bank Information
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccountBalanceOutlinedIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Bank Name"
                                        secondary={data.BankInformation.BankName}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <CreditCardIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Account Number"
                                        secondary={maskAccount(data.BankInformation.AccountNumber)}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <PersonIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Account Holder"
                                        secondary={data.BankInformation.AccountHolder}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <GavelIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Routing Number"
                                        secondary={data.BankInformation.RoutingNumber}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon>
                                        <LocationCityIcon color="warning" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Branch Location"
                                        secondary={data.BankInformation.Branch}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ROW 3 — CLAUSES */}
            <div className="row g-4 mt-1">
                <div className="col-12">
                    <Card className="shadow-sm border-0 rounded-4">
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Lease Clauses
                            </Typography>
                            <Divider sx={{ mb: 2 }} />

                            <Box display="flex" flexWrap="wrap" gap={2}>
                                <FormControlLabel
                                    control={<Checkbox checked={data.HVAC} color="primary" />}
                                    label="HVAC"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={data.Exclusivity} color="primary" />}
                                    label="Exclusivity"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={data.Termination} color="primary" />}
                                    label="Termination"
                                />
                                <FormControlLabel
                                    control={<Checkbox checked={data.Relocation} color="primary" />}
                                    label="Relocation"
                                />
                            </Box>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ROW 4 — DOCUMENTS */}
            <div className="row g-4 mt-1">
                <div className="col-12">
                    <Card className="shadow-sm border-0 rounded-4">
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Documents & Attachments
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            {data.Documents.length > 0 ? (
                                data.Documents.map((doc, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            p: 1.5,
                                            borderRadius: 2,
                                            backgroundColor: "#f3f4f6",
                                            mb: 1,
                                        }}
                                    >
                                        <Box display="flex" alignItems="center" gap={1.5}>
                                            <DescriptionIcon color="action" />
                                            <Typography variant="body2" sx={{ fontWeight: 500 }}>
                                                {doc.name}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary">
                                            {doc.size}
                                        </Typography>
                                    </Box>
                                ))
                            ) : (
                                <Typography variant="body2" color="text.secondary">
                                    No documents uploaded.
                                </Typography>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default LeasingOverview;
