// // import React, { useState } from "react";
// // import {
// //   Box,
// //   Button,
// //   TextField,
// //   Typography,
// //   Paper,
// //   InputAdornment,
// //   IconButton,
// // } from "@mui/material";
// // import { Visibility, VisibilityOff, LockOutlined, EmailOutlined } from "@mui/icons-material";

// // function Login() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Login with:", { email, password });
// //   };

// //   return (
// //     <div className="container-fluid vh-100">
// //       <div className="row h-100">
// //         {/* ✅ Left Side - Logo / Branding */}
// //         <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center bg-light">
// //           <Box textAlign="center" px={5}>
// //             <img
// //               src="/assets/logo.png" // 👈 Replace with your logo path
// //               alt="Company Logo"
// //               style={{ width: "180px", marginBottom: "20px" }}
// //             />
// //             <Typography variant="h4" sx={{ fontWeight: 600, color: "#6f2da8" }}>
// //               Welcome to MIS Dashboard
// //             </Typography>
// //             <Typography variant="body1" sx={{ color: "gray", mt: 1 }}>
// //               Manage your stores, markets, and employees efficiently.
// //             </Typography>
// //           </Box>
// //         </div>

// //         {/* ✅ Right Side - Login Form */}
// //         <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center bg-white">
// //           <Paper elevation={4} sx={{ p: 5, width: "90%", maxWidth: 420, borderRadius: "20px" }}>
// //             <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}>
// //               Login to your Account
// //             </Typography>

// //             <form onSubmit={handleSubmit}>
// //               {/* Email Field */}
// //               <TextField
// //                 fullWidth
// //                 label="Email Address"
// //                 type="email"
// //                 required
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 margin="normal"
// //                 InputProps={{
// //                   startAdornment: (
// //                     <InputAdornment position="start">
// //                       <EmailOutlined color="action" />
// //                     </InputAdornment>
// //                   ),
// //                 }}
// //               />

// //               {/* Password Field */}
// //               <TextField
// //                 fullWidth
// //                 label="Password"
// //                 type={showPassword ? "text" : "password"}
// //                 required
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 margin="normal"
// //                 InputProps={{
// //                   startAdornment: (
// //                     <InputAdornment position="start">
// //                       <LockOutlined color="action" />
// //                     </InputAdornment>
// //                   ),
// //                   endAdornment: (
// //                     <InputAdornment position="end">
// //                       <IconButton onClick={() => setShowPassword(!showPassword)}>
// //                         {showPassword ? <VisibilityOff /> : <Visibility />}
// //                       </IconButton>
// //                     </InputAdornment>
// //                   ),
// //                 }}
// //               />

// //               {/* Login Button */}
// //               <Button
// //                 fullWidth
// //                 variant="contained"
// //                 type="submit"
// //                 sx={{
// //                   mt: 3,
// //                   py: 1.5,
// //                   backgroundColor: "#6f2da8",
// //                   "&:hover": { backgroundColor: "#5b2290" },
// //                   borderRadius: "10px",
// //                   fontWeight: 600,
// //                 }}
// //               >
// //                 Sign In
// //               </Button>

// //               <Typography
// //                 variant="body2"
// //                 sx={{ textAlign: "center", mt: 2, color: "gray" }}
// //               >
// //                 Forgot your password? <span style={{ color: "#6f2da8", cursor: "pointer" }}>Reset</span>
// //               </Typography>
// //             </form>
// //           </Paper>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from "react";
// import {
//     Box,
//     Button,
//     TextField,
//     Typography,
//     Paper,
//     InputAdornment,
//     IconButton,
//     Checkbox,
//     FormControlLabel,
// } from "@mui/material";
// import {
//     Visibility,
//     VisibilityOff,
//     LockOutlined,
//     EmailOutlined,
//     Google,
// } from "@mui/icons-material";
// import { motion } from "framer-motion";

// function Login() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Login with:", { email, password });
//     };

//     return (
//         <Box
//             className="vh-100"
//             sx={{
//                 display: "flex",
//                 background: "linear-gradient(135deg, #6f2da8 0%, #8b5cf6 100%)",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 overflow: "hidden",
//             }}
//         >
//             <div className="row w-100 h-100">
//                 {/* Left Side */}
//                 <div className="col-lg-6 d-none d-lg-flex align-items-center justify-content-center text-white">
//                     <motion.div
//                         initial={{ opacity: 0, x: -40 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <img
//                             src="/assets/logo.png" // 👈 Replace with your logo path
//                             alt="Company Logo"
//                             style={{ width: "200px", marginBottom: "25px", filter: "drop-shadow(0px 4px 8px rgba(0,0,0,0.3))" }}
//                         />
//                         <Typography
//                             variant="h3"
//                             sx={{ fontWeight: 700, mb: 1, textShadow: "0 2px 5px rgba(0,0,0,0.3)" }}
//                         >
//                             MIS Dashboard
//                         </Typography>
//                         <Typography variant="h6" sx={{ opacity: 0.9 }}>
//                             Manage, Monitor & Simplify your operations
//                         </Typography>
//                     </motion.div>
//                 </div>

//                 {/* Right Side (Login Card) */}
//                 <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
//                     <motion.div
//                         initial={{ opacity: 0, y: 40 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <Paper
//                             elevation={10}
//                             sx={{
//                                 p: 5,
//                                 borderRadius: "20px",
//                                 width: "90%",
//                                 maxWidth: 420,
//                                 backdropFilter: "blur(10px)",
//                                 background: "rgba(255,255,255,0.85)",
//                                 boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
//                             }}
//                         >
//                             <Typography
//                                 variant="h5"
//                                 sx={{
//                                     fontWeight: 700,
//                                     mb: 3,
//                                     textAlign: "center",
//                                     color: "#4a148c",
//                                 }}
//                             >
//                                 Welcome Back 👋
//                             </Typography>

//                             <form onSubmit={handleSubmit}>
//                                 {/* Email */}
//                                 <TextField
//                                     fullWidth
//                                     label="Email Address"
//                                     type="email"
//                                     required
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     margin="normal"
//                                     InputProps={{
//                                         startAdornment: (
//                                             <InputAdornment position="start">
//                                                 <EmailOutlined color="action" />
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                 />

//                                 {/* Password */}
//                                 <TextField
//                                     fullWidth
//                                     label="Password"
//                                     type={showPassword ? "text" : "password"}
//                                     required
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     margin="normal"
//                                     InputProps={{
//                                         startAdornment: (
//                                             <InputAdornment position="start">
//                                                 <LockOutlined color="action" />
//                                             </InputAdornment>
//                                         ),
//                                         endAdornment: (
//                                             <InputAdornment position="end">
//                                                 <IconButton onClick={() => setShowPassword(!showPassword)}>
//                                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                                 </IconButton>
//                                             </InputAdornment>
//                                         ),
//                                     }}
//                                 />

//                                 {/* Remember Me */}
//                                 <FormControlLabel control={<Checkbox />} label="Remember me" />

//                                 {/* Login Button */}
//                                 <Button
//                                     fullWidth
//                                     variant="contained"
//                                     type="submit"
//                                     sx={{
//                                         mt: 2,
//                                         py: 1.4,
//                                         fontWeight: 600,
//                                         fontSize: "1rem",
//                                         background:
//                                             "linear-gradient(90deg, #6f2da8 0%, #8b5cf6 100%)",
//                                         borderRadius: "12px",
//                                         textTransform: "none",
//                                         "&:hover": {
//                                             background:
//                                                 "linear-gradient(90deg, #5b2290 0%, #7c3aed 100%)",
//                                         },
//                                     }}
//                                 >
//                                     Sign In
//                                 </Button>

//                                 {/* Google Login */}
//                                 <Button
//                                     fullWidth
//                                     variant="outlined"
//                                     sx={{
//                                         mt: 2,
//                                         py: 1.3,
//                                         borderRadius: "12px",
//                                         textTransform: "none",
//                                         borderColor: "#b39ddb",
//                                         "&:hover": { borderColor: "#8b5cf6" },
//                                     }}
//                                     startIcon={<Google />}
//                                     onClick={() => console.log("Google login")}
//                                 >
//                                     Sign in with Google
//                                 </Button>

//                                 {/* Forgot Password */}
//                                 <Typography
//                                     variant="body2"
//                                     sx={{
//                                         textAlign: "center",
//                                         mt: 3,
//                                         color: "gray",
//                                     }}
//                                 >
//                                     Forgot your password?{" "}
//                                     <span
//                                         style={{
//                                             color: "#6f2da8",
//                                             cursor: "pointer",
//                                             fontWeight: 600,
//                                         }}
//                                     >
//                                         Reset
//                                     </span>
//                                 </Typography>
//                             </form>
//                         </Paper>
//                     </motion.div>
//                 </div>
//             </div>
//         </Box>
//     );
// }

// export default Login;
import React from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    InputAdornment,
    IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { motion } from "framer-motion";
import logo from "/logo.webp"; // 👈 apna logo path yahan lagao

export default function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <Box
            sx={{
                display: "flex",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #1a1a2e, #4b006e)",
            }}
        >
            {/* Left Side with Logo */}
            <Box
                sx={{
                    flex: 1,
                    background: "linear-gradient(135deg, #000000cc, #d5006d)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    color: "#fff",
                    textAlign: "center",
                }}
            >
                <motion.img
                    src={logo}
                    alt="Techno Communications Logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ width: "200px", marginBottom: "1rem" }}
                />
                <Typography variant="h5" sx={{ fontWeight: 600, letterSpacing: 1 }}>
                    Techno Communications LLC
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Smart Solutions for a Connected World
                </Typography>
            </Box>

            {/* Right Side Login Form */}
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 3,
                }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Paper
                        elevation={6}
                        sx={{
                            p: 4,
                            width: 380,
                            borderRadius: 4,
                            backdropFilter: "blur(10px)",
                            background: "rgba(255,255,255,0.15)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            color: "#fff",
                        }}
                    >
                        <Typography
                            variant="h5"
                            align="center"
                            gutterBottom
                            sx={{ fontWeight: 600 }}
                        >
                            Welcome Back 👋
                        </Typography>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{ mb: 3, opacity: 0.8 }}
                        >
                            Please sign in to continue
                        </Typography>

                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Email"
                            margin="normal"
                            InputProps={{
                                style: { color: "#fff" },
                            }}
                            InputLabelProps={{
                                style: { color: "#ccc" },
                            }}
                        />

                        <TextField
                            fullWidth
                            variant="outlined"
                            label="Password"
                            margin="normal"
                            type={showPassword ? "text" : "password"}
                            InputProps={{
                                style: { color: "#fff" },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() => setShowPassword(!showPassword)}
                                            edge="end"
                                            sx={{ color: "#fff" }}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            InputLabelProps={{
                                style: { color: "#ccc" },
                            }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3,
                                background:
                                    "linear-gradient(135deg, #ff007f, #8000ff)",
                                fontWeight: 600,
                                textTransform: "none",
                                "&:hover": { background: "linear-gradient(135deg, #ff3399, #9b33ff)" },
                            }}
                        >
                            Login
                        </Button>

                        <Typography
                            variant="body2"
                            align="center"
                            sx={{ mt: 2, opacity: 0.8 }}
                        >
                            Forgot your password?
                        </Typography>
                    </Paper>
                </motion.div>
            </Box>
        </Box>
    );
}
