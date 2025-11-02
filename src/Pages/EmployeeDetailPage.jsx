// // // import React from "react";
// // // import {
// // //     Box,
// // //     Typography,
// // //     Avatar,
// // //     Paper,
// // //     Divider,
// // //     Button,
// // //     Chip,
// // //     Grid,
// // //     List,
// // //     ListItem,
// // //     ListItemIcon,
// // //     ListItemText,
// // //     Tooltip,
// // //     Card,
// // //     CardContent,
// // //     LinearProgress,
// // // } from "@mui/material";

// // // import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// // // import EditIcon from "@mui/icons-material/Edit";
// // // import BlockIcon from "@mui/icons-material/Block";
// // // import EmailIcon from "@mui/icons-material/Email";
// // // import PhoneIcon from "@mui/icons-material/Phone";
// // // import StorefrontIcon from "@mui/icons-material/Storefront";
// // // import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// // // import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// // // import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// // // import TimelineIcon from "@mui/icons-material/Timeline";
// // // import FolderCopyIcon from "@mui/icons-material/FolderCopy";
// // // import InsightsIcon from "@mui/icons-material/Insights";
// // // import SecurityIcon from "@mui/icons-material/Security";

// // // const EmployeeDetailPage = () => {
// // //     const user = {
// // //         name: "Sarah Johnson",
// // //         email: "sarah.j@metro.com",
// // //         phone: "+1 480-333-7820",
// // //         role: "Store Manager",
// // //         department: "Retail Operations",
// // //         store: "Mesa Blvd",
// // //         joined: "March 12, 2021",
// // //         manager: "John Smith",
// // //         empType: "Full-Time",
// // //         shift: "Morning (9AM - 6PM)",
// // //         salary: "$58,000 / year",
// // //         status: "Active",
// // //         avatar: "https://randomuser.me/api/portraits/women/45.jpg",
// // //         rating: 4.7,
// // //         tenure: "3 Years, 7 Months",
// // //     };

// // //     const docs = [
// // //         { name: "Offer Letter", type: "PDF" },
// // //         { name: "NDA Agreement", type: "PDF" },
// // //         { name: "Employee ID", type: "JPG" },
// // //     ];

// // //     const activity = [
// // //         { action: "Approved store audit", time: "2 hours ago" },
// // //         { action: "Logged into MIS Portal", time: "Yesterday" },
// // //         { action: "Updated maintenance request", time: "3 days ago" },
// // //     ];

// // //     return (
// // //         <Box className="container-fluid py-4">
// // //             {/* 🔙 Back Button */}
// // //             <Button
// // //                 startIcon={<ArrowBackIcon />}
// // //                 variant="text"
// // //                 color="secondary"
// // //                 sx={{ mb: 3 }}
// // //                 onClick={() => window.history.back()}
// // //             >
// // //                 Back
// // //             </Button>

// // //             {/* 🟣 Header */}
// // //             <Paper
// // //                 elevation={4}
// // //                 sx={{
// // //                     background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
// // //                     color: "white",
// // //                     p: 4,
// // //                     borderRadius: 4,
// // //                     mb: 4,
// // //                     position: "relative",
// // //                     overflow: "hidden",
// // //                 }}
// // //             >
// // //                 <Box
// // //                     sx={{
// // //                         position: "absolute",
// // //                         top: -30,
// // //                         right: -30,
// // //                         width: 200,
// // //                         height: 200,
// // //                         borderRadius: "50%",
// // //                         background:
// // //                             "radial-gradient(circle at center, rgba(255,255,255,0.25), transparent 70%)",
// // //                     }}
// // //                 />
// // //                 <Grid container alignItems="center">
// // //                     <Grid item xs={12} md={8} className="d-flex align-items-center gap-3">
// // //                         <Avatar
// // //                             src={user.avatar}
// // //                             sx={{
// // //                                 width: 100,
// // //                                 height: 100,
// // //                                 border: "3px solid #fff",
// // //                                 boxShadow: "0 0 10px rgba(255,255,255,0.4)",
// // //                             }}
// // //                         />
// // //                         <Box>
// // //                             <Typography variant="h5" fontWeight={700}>
// // //                                 {user.name}
// // //                             </Typography>
// // //                             <Typography variant="body1" sx={{ opacity: 0.9 }}>
// // //                                 {user.role} • {user.department}
// // //                             </Typography>
// // //                             <Typography variant="body2" sx={{ opacity: 0.8 }}>
// // //                                 {user.store}
// // //                             </Typography>
// // //                             <Chip
// // //                                 label={user.status}
// // //                                 color={user.status === "Active" ? "success" : "default"}
// // //                                 sx={{ mt: 1, fontWeight: 600 }}
// // //                             />
// // //                         </Box>
// // //                     </Grid>

// // //                     <Grid item xs={12} md={4} className="text-md-end mt-3 mt-md-0">
// // //                         <Button
// // //                             variant="contained"
// // //                             color="secondary"
// // //                             startIcon={<EditIcon />}
// // //                             sx={{ mr: 1 }}
// // //                         >
// // //                             Edit
// // //                         </Button>
// // //                         <Button variant="outlined" color="inherit" startIcon={<BlockIcon />}>
// // //                             Block
// // //                         </Button>
// // //                     </Grid>
// // //                 </Grid>
// // //             </Paper>

// // //             {/* 🔹 Info Cards */}
// // //             <Grid container spacing={3} className="mb-4">
// // //                 <Grid item xs={12} md={8}>
// // //                     {/* Basic Info */}
// // //                     <Card sx={{ borderRadius: 4, mb: 3 }}>
// // //                         <CardContent>
// // //                             <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
// // //                                 Basic Information
// // //                             </Typography>
// // //                             <Grid container spacing={2}>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <EmailIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     {user.email}
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <PhoneIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     {user.phone}
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     {user.empType}
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <StorefrontIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     {user.store}
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <BusinessCenterIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     Manager: {user.manager}
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <CalendarMonthIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     Joined: {user.joined}
// // //                                 </Grid>
// // //                             </Grid>
// // //                         </CardContent>
// // //                     </Card>

// // //                     {/* Employment Details */}
// // //                     <Card sx={{ borderRadius: 4, mb: 3 }}>
// // //                         <CardContent>
// // //                             <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
// // //                                 Employment Details
// // //                             </Typography>
// // //                             <Grid container spacing={2}>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <TimelineIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     Tenure: {user.tenure}
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <InsightsIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     Performance Rating: {user.rating}/5
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     Shift: {user.shift}
// // //                                 </Grid>
// // //                                 <Grid item xs={12} sm={6}>
// // //                                     <BusinessCenterIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// // //                                     Salary: {user.salary}
// // //                                 </Grid>
// // //                             </Grid>
// // //                             <Box sx={{ mt: 3 }}>
// // //                                 <Typography variant="body2" color="text.secondary">
// // //                                     Performance Progress
// // //                                 </Typography>
// // //                                 <LinearProgress
// // //                                     variant="determinate"
// // //                                     value={94}
// // //                                     sx={{
// // //                                         mt: 1,
// // //                                         height: 8,
// // //                                         borderRadius: 4,
// // //                                         "& .MuiLinearProgress-bar": { backgroundColor: "#6F2DA8" },
// // //                                     }}
// // //                                 />
// // //                             </Box>
// // //                         </CardContent>
// // //                     </Card>

// // //                     {/* Documents */}
// // //                     <Card sx={{ borderRadius: 4 }}>
// // //                         <CardContent>
// // //                             <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
// // //                                 Uploaded Documents
// // //                             </Typography>
// // //                             <List>
// // //                                 {docs.map((d, i) => (
// // //                                     <ListItem key={i}>
// // //                                         <ListItemIcon>
// // //                                             <FolderCopyIcon sx={{ color: "#6F2DA8" }} />
// // //                                         </ListItemIcon>
// // //                                         <ListItemText primary={d.name} secondary={d.type} />
// // //                                     </ListItem>
// // //                                 ))}
// // //                             </List>
// // //                         </CardContent>
// // //                     </Card>
// // //                 </Grid>

// // //                 {/* Sidebar Summary */}
// // //                 <Grid item xs={12} md={4}>
// // //                     {/* Quick Access */}
// // //                     <Paper elevation={3} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
// // //                         <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#6F2DA8", mb: 2 }}>
// // //                             Access Summary
// // //                         </Typography>
// // //                         <Box className="d-flex flex-column gap-2">
// // //                             <Chip label="View: Markets" color="success" />
// // //                             <Chip label="Edit: Leasing" color="warning" />
// // //                             <Chip label="Restricted: Financials" color="error" />
// // //                         </Box>
// // //                         <Box className="text-center mt-3">
// // //                             <Button
// // //                                 variant="outlined"
// // //                                 size="small"
// // //                                 startIcon={<SecurityIcon />}
// // //                                 sx={{ color: "#6F2DA8", borderColor: "#6F2DA8" }}
// // //                             >
// // //                                 Manage Permissions
// // //                             </Button>
// // //                         </Box>
// // //                     </Paper>

// // //                     {/* Recent Activity */}
// // //                     <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
// // //                         <Typography variant="subtitle1" fontWeight={600} sx={{ color: "#6F2DA8", mb: 2 }}>
// // //                             Recent Activity
// // //                         </Typography>
// // //                         <List>
// // //                             {activity.map((a, i) => (
// // //                                 <ListItem key={i} sx={{ py: 0.5 }}>
// // //                                     <ListItemIcon>
// // //                                         <TimelineIcon sx={{ color: "#6F2DA8" }} />
// // //                                     </ListItemIcon>
// // //                                     <ListItemText primary={a.action} secondary={a.time} />
// // //                                 </ListItem>
// // //                             ))}
// // //                         </List>
// // //                     </Paper>
// // //                 </Grid>
// // //             </Grid>
// // //         </Box>
// // //     );
// // // };

// // // export default EmployeeDetailPage;


// // import React from "react";
// // import {
// //     Box,
// //     Typography,
// //     Paper,
// //     Grid,
// //     Avatar,
// //     Divider,
// //     Button,
// //     Chip,
// //     LinearProgress,
// //     List,
// //     ListItem,
// //     ListItemText,
// //     ListItemIcon,
// //     TextField,
// //     Card,
// //     CardContent,
// // } from "@mui/material";

// // import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// // import EditIcon from "@mui/icons-material/Edit";
// // import EmailIcon from "@mui/icons-material/Email";
// // import PhoneIcon from "@mui/icons-material/Phone";
// // import BadgeIcon from "@mui/icons-material/Badge";
// // import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// // import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// // import StorefrontIcon from "@mui/icons-material/Storefront";
// // import SecurityIcon from "@mui/icons-material/Security";
// // import FolderCopyIcon from "@mui/icons-material/FolderCopy";
// // import TimelineIcon from "@mui/icons-material/Timeline";
// // import AccessTimeIcon from "@mui/icons-material/AccessTime";
// // import FeedbackIcon from "@mui/icons-material/Feedback";
// // import CakeIcon from "@mui/icons-material/Cake";
// // import CreditCardIcon from "@mui/icons-material/CreditCard";

// // const EmployeeDetailedPage = () => {
// //     const user = {
// //         name: "Sarah Johnson",
// //         email: "sarah.j@metro.com",
// //         phone: "+1 480-333-7820",
// //         companyEmail: "s.johnson@tcomm.com",
// //         dob: "Feb 18, 1995",
// //         cnic: "42101-5827392-6",
// //         role: "Store Manager",
// //         department: "Retail Operations",
// //         store: "Mesa Blvd",
// //         shift: "Morning (9AM - 6PM)",
// //         salary: "$58,000 / year",
// //         manager: "John Smith",
// //         joined: "March 12, 2021",
// //         empType: "Full-Time",
// //         status: "Active",
// //         attendance: "Present",
// //         checkIn: "09:03 AM",
// //         checkOut: "06:10 PM",
// //         avatar: "https://randomuser.me/api/portraits/women/45.jpg",
// //         performance: 92,
// //     };

// //     const docs = [
// //         "Offer Letter.pdf",
// //         "National ID.jpg",
// //         "Resume.pdf",
// //         "NDA Document.pdf",
// //         "Bank Account Form.pdf",
// //     ];

// //     const access = [
// //         "View: Dashboard",
// //         "Edit: Employee Records",
// //         "Manage: Store Operations",
// //         "Restricted: Financial Reports",
// //     ];

// //     const activity = [
// //         { action: "Approved Store Maintenance Request", time: "2 hours ago" },
// //         { action: "Checked in at Mesa Blvd", time: "9:03 AM" },
// //         { action: "Updated Sales Performance Report", time: "Yesterday" },
// //     ];

// //     return (
// //         <Box className="container-fluid py-4">
// //             {/* 🔙 Back Button */}
// //             <Button
// //                 startIcon={<ArrowBackIcon />}
// //                 variant="text"
// //                 color="secondary"
// //                 sx={{ mb: 3 }}
// //                 onClick={() => window.history.back()}
// //             >
// //                 Back
// //             </Button>

// //             {/* Header Card */}
// //             <Paper
// //                 elevation={4}
// //                 sx={{
// //                     background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
// //                     color: "white",
// //                     p: 4,
// //                     borderRadius: 4,
// //                     mb: 4,
// //                 }}
// //             >
// //                 <Grid container alignItems="center" spacing={2}>
// //                     <Grid item xs={12} md={8} className="d-flex align-items-center gap-3">
// //                         <Avatar
// //                             src={user.avatar}
// //                             sx={{
// //                                 width: 100,
// //                                 height: 100,
// //                                 border: "3px solid #fff",
// //                                 boxShadow: "0 0 10px rgba(255,255,255,0.3)",
// //                             }}
// //                         />
// //                         <Box>
// //                             <Typography variant="h5" fontWeight={700}>
// //                                 {user.name}
// //                             </Typography>
// //                             <Typography variant="body1">{user.role}</Typography>
// //                             <Typography variant="body2">{user.department}</Typography>
// //                             <Chip
// //                                 label={user.status}
// //                                 color={user.status === "Active" ? "success" : "default"}
// //                                 sx={{ mt: 1 }}
// //                             />
// //                         </Box>
// //                     </Grid>
// //                     <Grid item xs={12} md={4} className="text-md-end mt-3 mt-md-0">
// //                         <Button variant="contained" startIcon={<EditIcon />}>
// //                             Edit Profile
// //                         </Button>
// //                     </Grid>
// //                 </Grid>
// //             </Paper>

// //             {/* --- Personal Information --- */}
// //             <Paper elevation={3} className="p-4 rounded-4 mb-4">
// //                 <Typography
// //                     variant="h6"
// //                     sx={{ mb: 2, color: "#6F2DA8", fontWeight: 700 }}
// //                 >
// //                     Personal Information
// //                 </Typography>
// //                 <Divider sx={{ mb: 3 }} />

// //                 <Grid container spacing={2}>
// //                     <Grid item xs={12} md={6}>
// //                         <EmailIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         {user.email}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <PhoneIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         {user.phone}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <EmailIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Company Email: {user.companyEmail}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <CakeIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Date of Birth: {user.dob}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <CreditCardIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         CNIC: {user.cnic}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <BadgeIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Employee Type: {user.empType}
// //                     </Grid>
// //                 </Grid>
// //             </Paper>

// //             {/* --- Employment Details --- */}
// //             <Paper elevation={3} className="p-4 rounded-4 mb-4">
// //                 <Typography
// //                     variant="h6"
// //                     sx={{ mb: 2, color: "#6F2DA8", fontWeight: 700 }}
// //                 >
// //                     Employment Details
// //                 </Typography>
// //                 <Divider sx={{ mb: 3 }} />

// //                 <Grid container spacing={2}>
// //                     <Grid item xs={12} md={6}>
// //                         <StorefrontIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Store: {user.store}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Role: {user.role}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Shift: {user.shift}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Manager: {user.manager}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <CalendarMonthIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Date Joined: {user.joined}
// //                     </Grid>
// //                     <Grid item xs={12} md={6}>
// //                         <BadgeIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Salary: {user.salary}
// //                     </Grid>
// //                 </Grid>

// //                 <Box sx={{ mt: 3 }}>
// //                     <Typography variant="body2" color="text.secondary">
// //                         Performance Progress
// //                     </Typography>
// //                     <LinearProgress
// //                         variant="determinate"
// //                         value={user.performance}
// //                         sx={{
// //                             mt: 1,
// //                             height: 8,
// //                             borderRadius: 4,
// //                             "& .MuiLinearProgress-bar": { backgroundColor: "#6F2DA8" },
// //                         }}
// //                     />
// //                 </Box>
// //             </Paper>

// //             {/* --- Uploaded Documents --- */}
// //             <Paper elevation={3} className="p-4 rounded-4 mb-4">
// //                 <Typography
// //                     variant="h6"
// //                     sx={{ mb: 2, color: "#6F2DA8", fontWeight: 700 }}
// //                 >
// //                     Uploaded Documents
// //                 </Typography>
// //                 <Divider sx={{ mb: 3 }} />

// //                 <Grid container spacing={2}>
// //                     {docs.map((doc, index) => (
// //                         <Grid item xs={12} sm={6} md={4} key={index}>
// //                             <Paper
// //                                 elevation={2}
// //                                 className="p-3 text-center rounded-4"
// //                                 sx={{ background: "#faf8fc" }}
// //                             >
// //                                 <FolderCopyIcon sx={{ color: "#6F2DA8", fontSize: 40, mb: 1 }} />
// //                                 <Typography variant="body1" sx={{ fontWeight: 500 }}>
// //                                     {doc}
// //                                 </Typography>
// //                             </Paper>
// //                         </Grid>
// //                     ))}
// //                 </Grid>
// //             </Paper>

// //             {/* --- Access Summary --- */}
// //             <Paper elevation={3} className="p-4 rounded-4 mb-4">
// //                 <Typography
// //                     variant="h6"
// //                     sx={{ mb: 2, color: "#6F2DA8", fontWeight: 700 }}
// //                 >
// //                     Access Summary
// //                 </Typography>
// //                 <Divider sx={{ mb: 3 }} />
// //                 <Box className="d-flex flex-wrap gap-2">
// //                     {access.map((a, i) => (
// //                         <Chip key={i} label={a} color="primary" variant="outlined" />
// //                     ))}
// //                 </Box>
// //             </Paper>

// //             {/* --- Attendance --- */}
// //             <Paper elevation={3} className="p-4 rounded-4 mb-4">
// //                 <Typography
// //                     variant="h6"
// //                     sx={{ mb: 2, color: "#6F2DA8", fontWeight: 700 }}
// //                 >
// //                     Attendance & Check-in / Check-out
// //                 </Typography>
// //                 <Divider sx={{ mb: 3 }} />

// //                 <Grid container spacing={2}>
// //                     <Grid item xs={12} md={4}>
// //                         <Chip
// //                             label={`Status: ${user.attendance}`}
// //                             color="success"
// //                             sx={{ fontWeight: 600 }}
// //                         />
// //                     </Grid>
// //                     <Grid item xs={12} md={4}>
// //                         <AccessTimeIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Check-in: {user.checkIn}
// //                     </Grid>
// //                     <Grid item xs={12} md={4}>
// //                         <AccessTimeIcon sx={{ color: "#6F2DA8", mr: 1 }} />
// //                         Check-out: {user.checkOut}
// //                     </Grid>
// //                 </Grid>
// //             </Paper>

// //             {/* --- Recent Activity --- */}
// //             <Paper elevation={3} className="p-4 rounded-4 mb-4">
// //                 <Typography
// //                     variant="h6"
// //                     sx={{ mb: 2, color: "#6F2DA8", fontWeight: 700 }}
// //                 >
// //                     Recent Activity
// //                 </Typography>
// //                 <Divider sx={{ mb: 3 }} />
// //                 <List>
// //                     {activity.map((a, i) => (
// //                         <ListItem key={i}>
// //                             <ListItemIcon>
// //                                 <TimelineIcon sx={{ color: "#6F2DA8" }} />
// //                             </ListItemIcon>
// //                             <ListItemText primary={a.action} secondary={a.time} />
// //                         </ListItem>
// //                     ))}
// //                 </List>
// //             </Paper>

// //             {/* --- Employee Feedback --- */}
// //             <Paper elevation={3} className="p-4 rounded-4 mb-5">
// //                 <Typography
// //                     variant="h6"
// //                     sx={{ mb: 2, color: "#6F2DA8", fontWeight: 700 }}
// //                 >
// //                     Employee Feedback
// //                 </Typography>
// //                 <Divider sx={{ mb: 3 }} />
// //                 <TextField
// //                     multiline
// //                     rows={4}
// //                     fullWidth
// //                     placeholder="Write internal feedback or HR notes about this employee..."
// //                     variant="outlined"
// //                 />
// //                 <Box className="text-end mt-3">
// //                     <Button
// //                         variant="contained"
// //                         color="secondary"
// //                         startIcon={<FeedbackIcon />}
// //                     >
// //                         Submit Feedback
// //                     </Button>
// //                 </Box>
// //             </Paper>
// //         </Box>
// //     );
// // };

// // export default EmployeeDetailedPage;
// import React from "react";
// import {
//     Box,
//     Typography,
//     Avatar,
//     Paper,
//     Divider,
//     Button,
//     Chip,
//     Grid,
//     List,
//     ListItem,
//     ListItemIcon,
//     ListItemText,
//     LinearProgress,
//     Rating,
//     Tooltip,
//     Card,
//     CardContent,
// } from "@mui/material";

// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import EditIcon from "@mui/icons-material/Edit";
// import BlockIcon from "@mui/icons-material/Block";
// import EmailIcon from "@mui/icons-material/Email";
// import PhoneIcon from "@mui/icons-material/Phone";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
// import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import FolderCopyIcon from "@mui/icons-material/FolderCopy";
// import SecurityIcon from "@mui/icons-material/Security";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import BadgeIcon from "@mui/icons-material/Badge";
// import HomeIcon from "@mui/icons-material/Home";
// import CakeIcon from "@mui/icons-material/Cake";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import FeedbackIcon from "@mui/icons-material/Feedback";
// import DescriptionIcon from "@mui/icons-material/Description";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// const EmployeeDetailPage = () => {
//     const user = {
//         name: "Sarah Johnson",
//         email: "sarah.j@metro.com",
//         phone: "+1 480-333-7820",
//         companyEmail: "sarah.j@company.com",
//         dob: "1993-07-12",
//         cnic: "42101-7654321-2",
//         address: "123 Main Street, Mesa, Arizona",
//         role: "Store Manager",
//         department: "Retail Operations",
//         store: "Mesa Blvd",
//         joined: "March 12, 2021",
//         manager: "John Smith",
//         empType: "Full-Time",
//         shift: "Morning (9AM - 6PM)",
//         salary: "$58,000 / year",
//         status: "Active",
//         avatar: "https://randomuser.me/api/portraits/women/45.jpg",
//         rating: 4.7,
//         tenure: "3 Years, 7 Months",
//         attendance: { checkIn: "09:05 AM", checkOut: "06:03 PM", daysPresent: 22 },
//     };

//     const documents = [
//         { name: "Offer Letter", type: "PDF" },
//         { name: "CNIC Front", type: "Image" },
//         { name: "CNIC Back", type: "Image" },
//         { name: "NDA Agreement", type: "PDF" },
//     ];

//     const accessModules = [
//         { module: "Markets", access: "View" },
//         { module: "Employees", access: "Edit" },
//         { module: "Leasing", access: "View" },
//         { module: "Financials", access: "Restricted" },
//     ];

//     const activities = [
//         { action: "Approved store audit", time: "2 hours ago" },
//         { action: "Updated lease record", time: "Yesterday" },
//         { action: "Checked in at 09:04 AM", time: "Today" },
//     ];

//     const feedback = [
//         { date: "Oct 2025", feedback: "Excellent leadership in managing Mesa Blvd team." },
//         { date: "Sep 2025", feedback: "Needs improvement in employee scheduling efficiency." },
//     ];

//     return (
//         <Box className="container-fluid py-4">
//             {/* 🔙 Back Button */}
//             <Button
//                 startIcon={<ArrowBackIcon />}
//                 variant="text"
//                 color="secondary"
//                 sx={{ mb: 3 }}
//                 onClick={() => window.history.back()}
//             >
//                 Back
//             </Button>

//             {/* 🟣 Header */}
//             <Paper
//                 elevation={4}
//                 sx={{
//                     background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
//                     color: "#fff",
//                     p: 4,
//                     borderRadius: 4,
//                     mb: 4,
//                 }}
//             >
//                 <Grid container alignItems="center">
//                     <Grid item xs={12} md={8} className="d-flex align-items-center gap-3">
//                         <Avatar
//                             src={user.avatar}
//                             sx={{
//                                 width: 100,
//                                 height: 100,
//                                 border: "3px solid #fff",
//                             }}
//                         />
//                         <Box>
//                             <Typography variant="h5" fontWeight={700}>
//                                 {user.name}
//                             </Typography>
//                             <Typography variant="body1">
//                                 {user.role} • {user.department}
//                             </Typography>
//                             <Typography variant="body2">{user.store}</Typography>
//                             <Chip
//                                 label={user.status}
//                                 color={user.status === "Active" ? "success" : "default"}
//                                 sx={{ mt: 1, fontWeight: 600 }}
//                             />
//                         </Box>
//                     </Grid>

//                     <Grid item xs={12} md={4} className="text-md-end mt-3 mt-md-0">
//                         <Button variant="contained" color="secondary" startIcon={<EditIcon />} sx={{ mr: 1 }}>
//                             Edit
//                         </Button>
//                         <Button variant="outlined" color="inherit" startIcon={<BlockIcon />}>
//                             Block
//                         </Button>
//                     </Grid>
//                 </Grid>
//             </Paper>

//             {/* 🧩 Details Sections */}
//             <Grid container spacing={3}>
//                 {/* Left Side */}
//                 <Grid item xs={12} md={8}>
//                     {/* Basic Information */}
//                     <Card sx={{ mb: 3, borderRadius: 4 }}>
//                         <CardContent>
//                             <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
//                                 Basic Information
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={6}>
//                                     <EmailIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.email}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <EmailIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.companyEmail}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <PhoneIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.phone}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <CreditCardIcon sx={{ color: "#6F2DA8", mr: 1 }} /> CNIC: {user.cnic}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <CakeIcon sx={{ color: "#6F2DA8", mr: 1 }} /> DOB: {user.dob}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <HomeIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.address}
//                                 </Grid>
//                             </Grid>
//                         </CardContent>
//                     </Card>

//                     {/* Employment Details */}
//                     <Card sx={{ mb: 3, borderRadius: 4 }}>
//                         <CardContent>
//                             <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
//                                 Employment Details
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <Grid container spacing={2}>
//                                 <Grid item xs={12} sm={6}>
//                                     <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Type: {user.empType}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <StorefrontIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Store: {user.store}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <BusinessCenterIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Manager: {user.manager}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <CalendarMonthIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Joined: {user.joined}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <AccessTimeIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Shift: {user.shift}
//                                 </Grid>
//                                 <Grid item xs={12} sm={6}>
//                                     <TimelineIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Tenure: {user.tenure}
//                                 </Grid>
//                             </Grid>
//                             <Box sx={{ mt: 3 }}>
//                                 <Typography variant="body2" color="text.secondary">
//                                     Performance Rating
//                                 </Typography>
//                                 <Rating name="rating" value={4.7} precision={0.1} readOnly />
//                                 <LinearProgress
//                                     variant="determinate"
//                                     value={95}
//                                     sx={{
//                                         mt: 1,
//                                         height: 8,
//                                         borderRadius: 4,
//                                         "& .MuiLinearProgress-bar": { backgroundColor: "#6F2DA8" },
//                                     }}
//                                 />
//                             </Box>
//                         </CardContent>
//                     </Card>

//                     {/* Uploaded Documents */}
//                     <Card sx={{ mb: 3, borderRadius: 4 }}>
//                         <CardContent>
//                             <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
//                                 Uploaded Documents
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             <List>
//                                 {documents.map((d, i) => (
//                                     <ListItem key={i}>
//                                         <ListItemIcon>
//                                             <DescriptionIcon sx={{ color: "#6F2DA8" }} />
//                                         </ListItemIcon>
//                                         <ListItemText primary={d.name} secondary={d.type} />
//                                     </ListItem>
//                                 ))}
//                             </List>
//                         </CardContent>
//                     </Card>

//                     {/* Employee Feedback */}
//                     <Card sx={{ borderRadius: 4 }}>
//                         <CardContent>
//                             <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
//                                 Employee Feedback
//                             </Typography>
//                             <Divider sx={{ mb: 2 }} />
//                             {feedback.map((f, i) => (
//                                 <Box key={i} sx={{ mb: 2 }}>
//                                     <Typography variant="subtitle2" color="text.secondary">
//                                         {f.date}
//                                     </Typography>
//                                     <Typography variant="body1">{f.feedback}</Typography>
//                                 </Box>
//                             ))}
//                         </CardContent>
//                     </Card>
//                 </Grid>

//                 {/* Right Side Summary */}
//                 <Grid item xs={12} md={4}>
//                     {/* Access Summary */}
//                     <Paper elevation={3} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
//                         <Typography variant="subtitle1" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
//                             Access Summary
//                         </Typography>
//                         {accessModules.map((a, i) => (
//                             <Chip
//                                 key={i}
//                                 label={`${a.access}: ${a.module}`}
//                                 color={
//                                     a.access === "View"
//                                         ? "success"
//                                         : a.access === "Edit"
//                                             ? "warning"
//                                             : "error"
//                                 }
//                                 sx={{ m: 0.5 }}
//                             />
//                         ))}
//                         <Box className="text-center mt-3">
//                             <Button variant="outlined" size="small" startIcon={<SecurityIcon />}>
//                                 Manage Permissions
//                             </Button>
//                         </Box>
//                     </Paper>

//                     {/* Attendance */}
//                     <Paper elevation={3} sx={{ p: 3, borderRadius: 4, mb: 3 }}>
//                         <Typography variant="subtitle1" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
//                             Attendance Summary
//                         </Typography>
//                         <Typography variant="body2">
//                             Check-In: <strong>{user.attendance.checkIn}</strong>
//                         </Typography>
//                         <Typography variant="body2">
//                             Check-Out: <strong>{user.attendance.checkOut}</strong>
//                         </Typography>
//                         <Typography variant="body2">
//                             Days Present: <strong>{user.attendance.daysPresent}</strong>
//                         </Typography>
//                     </Paper>

//                     {/* Recent Activity */}
//                     <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
//                         <Typography variant="subtitle1" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
//                             Recent Activity
//                         </Typography>
//                         {activities.map((a, i) => (
//                             <Box key={i} sx={{ mb: 1 }}>
//                                 <TimelineIcon sx={{ color: "#6F2DA8", mr: 1, fontSize: 18 }} />
//                                 <Typography variant="body2" display="inline">
//                                     {a.action} — <em>{a.time}</em>
//                                 </Typography>
//                             </Box>
//                         ))}
//                     </Paper>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

// export default EmployeeDetailPage;


import React from "react";
import {
    Box,
    Typography,
    Avatar,
    Paper,
    Divider,
    Button,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    LinearProgress,
    Rating,
    Card,
    CardContent,
} from "@mui/material";

import {
    ArrowBack as ArrowBackIcon,
    Edit as EditIcon,
    Block as BlockIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    WorkOutline as WorkOutlineIcon,
    BusinessCenter as BusinessCenterIcon,
    CalendarMonth as CalendarMonthIcon,
    FolderCopy as FolderCopyIcon,
    Security as SecurityIcon,
    Timeline as TimelineIcon,
    Home as HomeIcon,
    Cake as CakeIcon,
    CreditCard as CreditCardIcon,
    AccessTime as AccessTimeIcon,
    Description as DescriptionIcon,
} from "@mui/icons-material";

import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeDetailPage = () => {
    const user = {
        name: "Sarah Johnson",
        email: "sarah.j@metro.com",
        phone: "+1 480-333-7820",
        companyEmail: "sarah.j@company.com",
        dob: "1993-07-12",
        cnic: "42101-7654321-2",
        address: "123 Main Street, Mesa, Arizona",
        role: "Store Manager",
        department: "Retail Operations",
        store: "Mesa Blvd",
        joined: "March 12, 2021",
        manager: "John Smith",
        empType: "Full-Time",
        shift: "Morning (9AM - 6PM)",
        salary: "$58,000 / year",
        status: "Active",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4.7,
        tenure: "3 Years, 7 Months",
        attendance: { checkIn: "09:05 AM", checkOut: "06:03 PM", daysPresent: 22 },
    };

    const documents = [
        { name: "Offer Letter", type: "PDF" },
        { name: "CNIC Front", type: "Image" },
        { name: "CNIC Back", type: "Image" },
        { name: "NDA Agreement", type: "PDF" },
    ];

    const accessModules = [
        { module: "Markets", access: "View" },
        { module: "Employees", access: "Edit" },
        { module: "Leasing", access: "View" },
        { module: "Financials", access: "Restricted" },
    ];

    const activities = [
        { action: "Approved store audit", time: "2 hours ago" },
        { action: "Updated lease record", time: "Yesterday" },
        { action: "Checked in at 09:04 AM", time: "Today" },
    ];

    const feedback = [
        { date: "Oct 2025", feedback: "Excellent leadership in managing Mesa Blvd team." },
        { date: "Sep 2025", feedback: "Needs improvement in employee scheduling efficiency." },
    ];

    return (
        <Box className="container-fluid py-4">
            {/* 🔙 Back Button */}
            <Button
                startIcon={<ArrowBackIcon />}
                variant="text"
                color="secondary"
                sx={{ mb: 3 }}
                onClick={() => window.history.back()}
            >
                Back
            </Button>

            {/* 🟣 Header */}
            <Paper
                elevation={4}
                className="p-4 rounded-4 mb-4"
                sx={{
                    background: "linear-gradient(135deg, #6F2DA8 0%, #9C27B0 100%)",
                    color: "#fff",
                }}
            >
                <div className="row align-items-center">
                    <div className="col-12 col-md-8 d-flex align-items-center gap-3">
                        <Avatar
                            src={user.avatar}
                            sx={{
                                width: 100,
                                height: 100,
                                border: "3px solid #fff",
                            }}
                        />
                        <Box>
                            <Typography variant="h5" fontWeight={700}>
                                {user.name}
                            </Typography>
                            <Typography variant="body1">
                                {user.role} • {user.department}
                            </Typography>
                            <Typography variant="body2">{user.store}</Typography>
                            <Chip
                                label={user.status}
                                color={user.status === "Active" ? "success" : "default"}
                                sx={{ mt: 1, fontWeight: 600 }}
                            />
                        </Box>
                    </div>

                    <div className="col-12 col-md-4 text-md-end mt-3 mt-md-0">
                        <Button variant="contained" color="secondary" startIcon={<EditIcon />} sx={{ mr: 1 }}>
                            Edit
                        </Button>
                        <Button variant="outlined" color="inherit" startIcon={<BlockIcon />}>
                            Block
                        </Button>
                    </div>
                </div>
            </Paper>

            {/* 🧩 Details Sections */}
            <div className="row g-4">
                {/* Left Side */}
                <div className="col-12 col-lg-8">
                    {/* Basic Info */}
                    <Card className="rounded-4 mb-3 shadow-sm">
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
                                Basic Information
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <div className="row gy-3">
                                <div className="col-12 col-sm-6">
                                    <EmailIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.email}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <EmailIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.companyEmail}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <PhoneIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.phone}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <CreditCardIcon sx={{ color: "#6F2DA8", mr: 1 }} /> CNIC: {user.cnic}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <CakeIcon sx={{ color: "#6F2DA8", mr: 1 }} /> DOB: {user.dob}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <HomeIcon sx={{ color: "#6F2DA8", mr: 1 }} /> {user.address}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Employment Details */}
                    <Card className="rounded-4 mb-3 shadow-sm">
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
                                Employment Details
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <div className="row gy-3">
                                <div className="col-12 col-sm-6">
                                    <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Type: {user.empType}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <BusinessCenterIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Manager: {user.manager}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <CalendarMonthIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Joined: {user.joined}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <AccessTimeIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Shift: {user.shift}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <TimelineIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Tenure: {user.tenure}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <WorkOutlineIcon sx={{ color: "#6F2DA8", mr: 1 }} /> Salary: {user.salary}
                                </div>
                            </div>
                            <Box sx={{ mt: 3 }}>
                                <Typography variant="body2" color="text.secondary">
                                    Performance Rating
                                </Typography>
                                <Rating name="rating" value={4.7} precision={0.1} readOnly />
                                <LinearProgress
                                    variant="determinate"
                                    value={95}
                                    sx={{
                                        mt: 1,
                                        height: 8,
                                        borderRadius: 4,
                                        "& .MuiLinearProgress-bar": { backgroundColor: "#6F2DA8" },
                                    }}
                                />
                            </Box>
                        </CardContent>
                    </Card>

                    {/* Uploaded Documents */}
                    <Card className="rounded-4 mb-3 shadow-sm">
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
                                Uploaded Documents
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List>
                                {documents.map((d, i) => (
                                    <ListItem key={i}>
                                        <ListItemIcon>
                                            <DescriptionIcon sx={{ color: "#6F2DA8" }} />
                                        </ListItemIcon>
                                        <ListItemText primary={d.name} secondary={d.type} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>

                    {/* Feedback */}
                    <Card className="rounded-4 shadow-sm">
                        <CardContent>
                            <Typography variant="h6" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
                                Employee Feedback
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            {feedback.map((f, i) => (
                                <Box key={i} sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        {f.date}
                                    </Typography>
                                    <Typography variant="body1">{f.feedback}</Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Right Side */}
                <div className="col-12 col-lg-4">
                    {/* Access Summary */}
                    <Paper elevation={3} className="p-3 rounded-4 mb-3">
                        <Typography variant="subtitle1" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
                            Access Summary
                        </Typography>
                        {accessModules.map((a, i) => (
                            <Chip
                                key={i}
                                label={`${a.access}: ${a.module}`}
                                color={
                                    a.access === "View"
                                        ? "success"
                                        : a.access === "Edit"
                                            ? "warning"
                                            : "error"
                                }
                                sx={{ m: 0.5 }}
                            />
                        ))}
                        <Box className="text-center mt-3">
                            <Button variant="outlined" size="small" startIcon={<SecurityIcon />}>
                                Manage Permissions
                            </Button>
                        </Box>
                    </Paper>

                    {/* Attendance */}
                    <Paper elevation={3} className="p-3 rounded-4 mb-3">
                        <Typography variant="subtitle1" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
                            Attendance Summary
                        </Typography>
                        <Typography variant="body2">
                            Check-In: <strong>{user.attendance.checkIn}</strong>
                        </Typography>
                        <Typography variant="body2">
                            Check-Out: <strong>{user.attendance.checkOut}</strong>
                        </Typography>
                        <Typography variant="body2">
                            Days Present: <strong>{user.attendance.daysPresent}</strong>
                        </Typography>
                    </Paper>

                    {/* Activity */}
                    <Paper elevation={3} className="p-3 rounded-4">
                        <Typography variant="subtitle1" sx={{ mb: 2, color: "#6F2DA8", fontWeight: 600 }}>
                            Recent Activity
                        </Typography>
                        {activities.map((a, i) => (
                            <Box key={i} sx={{ mb: 1 }}>
                                <TimelineIcon sx={{ color: "#6F2DA8", mr: 1, fontSize: 18 }} />
                                <Typography variant="body2" display="inline">
                                    {a.action} — <em>{a.time}</em>
                                </Typography>
                            </Box>
                        ))}
                    </Paper>
                </div>
            </div>
        </Box>
    );
};

export default EmployeeDetailPage;
