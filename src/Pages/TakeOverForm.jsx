// // // import React, { useState } from "react";
// // // import {
// // //     Box,
// // //     Grid,
// // //     Paper,
// // //     TextField,
// // //     Typography,
// // //     Button,
// // // } from "@mui/material";

// // // export default function TakeOverForm() {
// // //     const [formData, setFormData] = useState({
// // //         name: "",
// // //         storeName: "",
// // //         cashinstore: "",
// // //         takeOverDate: "",
// // //         alarmCode: "",
// // //         wifiName: "",
// // //         wifiCode: "",
// // //         safeBoxCode: "",
// // //         lunchBoxCode: "",
// // //         doorCode: "",
// // //         dumpsterCode: "",
// // //         citrixCount: "",
// // //         yuniKeys: "",
// // //     });

// // //     const handleChange = (field, value) => {
// // //         setFormData((prev) => ({ ...prev, [field]: value }));
// // //     };

// // //     const handleSubmit = (e) => {
// // //         e.preventDefault();
// // //         console.log("Form Data:", formData);
// // //     };

// // //     return (
// // //         <Paper
// // //             sx={{
// // //                 p: 4,
// // //                 borderRadius: 3,
// // //                 boxShadow: 3,
// // //                 backgroundColor: "#fff",
// // //                 maxWidth: 900,
// // //                 margin: "auto",
// // //             }}
// // //         >
// // //             <Typography
// // //                 variant="h6"
// // //                 sx={{ mb: 3, fontWeight: 700, color: "#6f2da8", textAlign: "center" }}
// // //             >
// // //                 🏪 Store Takeover Form
// // //             </Typography>

// // //             <form onSubmit={handleSubmit}>
// // //                 <Grid container spacing={3}>
// // //                     {/* Name */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Name"
// // //                             fullWidth
// // //                             value={formData.name}
// // //                             onChange={(e) => handleChange("name", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Store Name */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Store Name"
// // //                             fullWidth
// // //                             value={formData.storeName}
// // //                             onChange={(e) => handleChange("storeName", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Cash in Store */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Cash in Store"
// // //                             type="number"
// // //                             fullWidth
// // //                             value={formData.cashinstore}
// // //                             onChange={(e) => handleChange("cashinstore", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Take Over Date */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Take Over Date"
// // //                             type="date"
// // //                             fullWidth
// // //                             InputLabelProps={{ shrink: true }}
// // //                             value={formData.takeOverDate}
// // //                             onChange={(e) => handleChange("takeOverDate", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Alarm Code */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Alarm Code"
// // //                             fullWidth
// // //                             value={formData.alarmCode}
// // //                             onChange={(e) => handleChange("alarmCode", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* WiFi Name */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="WiFi Name"
// // //                             fullWidth
// // //                             value={formData.wifiName}
// // //                             onChange={(e) => handleChange("wifiName", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* WiFi Code */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="WiFi Code"
// // //                             fullWidth
// // //                             value={formData.wifiCode}
// // //                             onChange={(e) => handleChange("wifiCode", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Safe Box Code */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Safe Box Code"
// // //                             fullWidth
// // //                             value={formData.safeBoxCode}
// // //                             onChange={(e) => handleChange("safeBoxCode", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Lunch Box Code */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Lunch Box Code"
// // //                             fullWidth
// // //                             value={formData.lunchBoxCode}
// // //                             onChange={(e) => handleChange("lunchBoxCode", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Grill/Main Door Code */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Grill/Main Door Code"
// // //                             fullWidth
// // //                             value={formData.doorCode}
// // //                             onChange={(e) => handleChange("doorCode", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Dumpster Lock Code/Key */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Dumpster Lock Code/Key"
// // //                             fullWidth
// // //                             value={formData.dumpsterCode}
// // //                             onChange={(e) => handleChange("dumpsterCode", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Number of Citrix Computers */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Number of Citrix Computers"
// // //                             type="number"
// // //                             fullWidth
// // //                             value={formData.citrixCount}
// // //                             onChange={(e) => handleChange("citrixCount", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Number of YubiKeys */}
// // //                     <Grid item xs={12} sm={6}>
// // //                         <TextField
// // //                             label="Number of YubiKeys"
// // //                             type="number"
// // //                             fullWidth
// // //                             value={formData.yuniKeys}
// // //                             onChange={(e) => handleChange("yuniKeys", e.target.value)}
// // //                         />
// // //                     </Grid>

// // //                     {/* Submit */}
// // //                     <Grid item xs={12} sx={{ textAlign: "center", mt: 2 }}>
// // //                         <Button
// // //                             variant="contained"
// // //                             color="primary"
// // //                             size="large"
// // //                             sx={{ px: 4, borderRadius: 2 }}
// // //                             type="submit"
// // //                         >
// // //                             Submit
// // //                         </Button>
// // //                     </Grid>
// // //                 </Grid>
// // //             </form>
// // //         </Paper>
// // //     );
// // // }


// // import React, { useCallback, useEffect, useState } from 'react';
// // import { Box, TextField, MenuItem, Button, CircularProgress } from '@mui/material';
// // import { Formik, Form } from 'formik';
// // import * as Yup from 'yup';
// // import imageCompression from 'browser-image-compression';
// // import { getAllStoresDataServices } from '../Services/stores.services';

// // const yesNoOptions = [
// //     { value: 'yes', label: 'Yes' },
// //     { value: 'no', label: 'No' },
// // ];

// // const validationSchema = Yup.object().shape({
// //     name: Yup.string().required('Required'),
// //     storeName: Yup.string().required('Required'),
// //     takeOverDate: Yup.string().required('Required'),
// //     alarmCode: Yup.string().required('Required'),
// //     wifiName: Yup.string().required('Required'),
// //     wifiCode: Yup.string().required('Required'),
// //     safeBoxCode: Yup.string().required('Required'),
// //     lunchBoxCode: Yup.string().required('Required'),
// //     doorCode: Yup.string().required('Required'),
// //     dumpsterCode: Yup.string().required('Required'),
// //     citrixCount: Yup.number().typeError('Only numbers allowed').required('Required'),
// //     yuniKeys: Yup.number().typeError('Only numbers allowed').required('Required'),
// //     gsp: Yup.string().required('Required'),
// //     creditCard: Yup.string().required('Required'),
// //     camera: Yup.string().required('Required'),
// //     inventoryAudit: Yup.string().required('Required'),
// //     shipment: Yup.string().required('Required'),
// // });


// // function TakeOverForm() {
// //     const [isUploading, setIsUploading] = useState(false);
// //     const [loading, setLoading] = useState(false);
// //     const [allStoresData, setAllStoresData] = useState([]);
// //     const initialValues = {
// //         name: '',
// //         storeName: '',
// //         cashinstore: '',
// //         takeOverDate: '',
// //         alarmCode: '',
// //         wifiName: '',
// //         wifiCode: '',
// //         safeBoxCode: '',
// //         lunchBoxCode: '',
// //         doorCode: '',
// //         dumpsterCode: '',
// //         citrixCount: '',
// //         yuniKeys: '',
// //         iphone11: '',
// //         iphoneSE: '',
// //         iphone12: '',
// //         iphone13: '',
// //         iphone15: '',
// //         iphone16: '',
// //         gsp: '',
// //         creditCard: '',
// //         camera: '',
// //         inventoryAudit: '',
// //         shipment: '',
// //         storeImages: [],
// //     };

// //     const fetchAllStoreData = useCallback(async () => {
// //         try {
// //             const response = await getAllStoresDataServices();
// //             console.log(response.data);
// //             setAllStoresData(response.data);
// //         } catch (error) {
// //             console.log("ERROR", error.message);
// //         }
// //     }, []);
// //     useEffect(() => {
// //         fetchAllStoreData();
// //     }, [fetchAllStoreData])
// //     const uploadImagesToCloudinary = async (files) => {
// //         const uploadedUrls = [];
// //         setIsUploading(true);

// //         for (let file of files) {
// //             // Compress the image before uploading
// //             const compressedFile = await imageCompression(file, {
// //                 maxSizeMB: 1,        // Maximum size in MB
// //                 maxWidthOrHeight: 1920,  // Optional: limit dimensions
// //                 useWebWorker: true,
// //             });
// //             const formData = new FormData();
// //             formData.append('file', compressedFile);
// //             formData.append('upload_preset', 'ml_default');
// //             formData.append('cloud_name', 'deywkct4u');

// //             try {
// //                 const res = await fetch('https://api.cloudinary.com/v1_1/deywkct4u/image/upload', {
// //                     method: 'POST',
// //                     body: formData,
// //                 });
// //                 const data = await res.json();
// //                 uploadedUrls.push(data.secure_url);
// //             } catch (error) {
// //                 console.error('Cloudinary upload error:', error);
// //             }
// //         }

// //         setIsUploading(false);
// //         return uploadedUrls;
// //     };

// //     const handleSubmit = async (values, { resetForm }) => {
// //         setLoading(true);
// //         try {
// //             const response = await addTakeoverEntryServices(values);
// //             if (response.data.status === 200) {
// //                 toast.success('Form submitted successfully!');
// //             }
// //         } catch (error) {
// //             console.error('Submission Error:', error.message);
// //             alert('Error submitting form.');
// //         } finally {
// //             resetForm();
// //             setLoading(false);
// //         }
// //     };

// //     return (
// //         <div>
// //             <div className="container mt-4">
// //                 <h3 className="mb-4">Take Over Form</h3>
// //                 <Formik
// //                     initialValues={initialValues}
// //                     validationSchema={validationSchema}
// //                     onSubmit={handleSubmit}
// //                 >
// //                     {({ values, handleChange, setFieldValue, errors, touched }) => (
// //                         <Form>
// //                             <div className="row">
// //                                 {[
// //                                     { label: 'Name', name: 'name' },
// //                                     { label: 'Store Name', name: 'storeName' },
// //                                     { label: 'Cash in Store', name: 'cashinstore' },
// //                                     { label: 'Take Over Date', name: 'takeOverDate', type: 'date' },
// //                                     { label: 'Alarm Code', name: 'alarmCode' },
// //                                     { label: 'WiFi Name', name: 'wifiName' },
// //                                     { label: 'WiFi Code', name: 'wifiCode' },
// //                                     { label: 'Safe Box Code', name: 'safeBoxCode' },
// //                                     { label: 'Lunch Box Code', name: 'lunchBoxCode' },
// //                                     { label: 'Grill/Main Door Code', name: 'doorCode' },
// //                                     { label: 'Dumpster Lock Code/Key', name: 'dumpsterCode' },
// //                                     { label: 'Number of Citrix Computers', name: 'citrixCount', type: 'number' },
// //                                     { label: 'Number of YubiKey', name: 'yuniKeys', type: 'number' },
// //                                 ].map((field, i) => (
// //                                     <div className="col-md-6 mb-3" key={i}>
// //                                         <TextField
// //                                             fullWidth
// //                                             label={field.type !== 'date' ? field.label : ''}
// //                                             name={field.name}
// //                                             type={field.type || 'text'}
// //                                             value={values[field.name]}
// //                                             onChange={(e) => {
// //                                                 const value = e.target.value;
// //                                                 if (field.type === 'number') {
// //                                                     if (/^\d*$/.test(value)) {
// //                                                         setFieldValue(field.name, value);
// //                                                     }
// //                                                 } else {
// //                                                     handleChange(e);
// //                                                 }
// //                                             }}
// //                                             variant="outlined"
// //                                             error={touched[field.name] && Boolean(errors[field.name])}
// //                                             helperText={touched[field.name] && errors[field.name]}
// //                                             InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
// //                                         />
// //                                     </div>
// //                                 ))}

// //                                 {[
// //                                     { label: 'GPS/Ensurity Tracker', name: 'gsp' },
// //                                     { label: 'Credit Card Setup', name: 'creditCard' },
// //                                     { label: 'Next Camera Setup & Linked', name: 'camera' },
// //                                     { label: 'Inventory Audit Done?', name: 'inventoryAudit' },
// //                                     { label: 'Shipment Delivered?', name: 'shipment' },
// //                                 ].map((dropdown) => (
// //                                     <div className="col-md-6 mb-3" key={dropdown.name}>
// //                                         <TextField
// //                                             select
// //                                             fullWidth
// //                                             label={dropdown.label}
// //                                             name={dropdown.name}
// //                                             value={values[dropdown.name]}
// //                                             onChange={handleChange}
// //                                             variant="outlined"
// //                                             error={touched[dropdown.name] && Boolean(errors[dropdown.name])}
// //                                             helperText={touched[dropdown.name] && errors[dropdown.name]}
// //                                         >
// //                                             {yesNoOptions.map((option) => (
// //                                                 <MenuItem key={option.value} value={option.value}>
// //                                                     {option.label}
// //                                                 </MenuItem>
// //                                             ))}
// //                                         </TextField>
// //                                     </div>
// //                                 ))}


// //                                 <div className="col-12 text-end">
// //                                     <Button
// //                                         variant="contained"
// //                                         color="primary"
// //                                         type="submit"
// //                                         disabled={loading}
// //                                     >
// //                                         {loading ? 'Uploading...' : 'Submit Form'}
// //                                     </Button>
// //                                 </div>
// //                             </div>
// //                         </Form>
// //                     )}
// //                 </Formik>
// //             </div>
// //         </div>
// //     );
// // }

// // export default TakeOverForm

// import React, { useCallback, useEffect, useState } from "react";
// import { Box, TextField, MenuItem, Button, CircularProgress } from "@mui/material";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import imageCompression from "browser-image-compression";
// import { getAllStoresDataServices } from "../Services/stores.services";
// // import { addTakeoverEntryServices } from "../Services/takeover.services"; // assuming you have this service
// // import { toast } from "react-toastify";

// // Yes/No dropdown options
// const yesNoOptions = [
//     { value: "yes", label: "Yes" },
//     { value: "no", label: "No" },
// ];

// // Validation Schema
// const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Required"),
//     storeId: Yup.string().required("Please select a store"),
//     takeOverDate: Yup.string().required("Required"),
//     alarmCode: Yup.string().required("Required"),
//     wifiName: Yup.string().required("Required"),
//     wifiCode: Yup.string().required("Required"),
//     safeBoxCode: Yup.string().required("Required"),
//     lunchBoxCode: Yup.string().required("Required"),
//     doorCode: Yup.string().required("Required"),
//     dumpsterCode: Yup.string().required("Required"),
//     citrixCount: Yup.number().typeError("Only numbers allowed").required("Required"),
//     yuniKeys: Yup.number().typeError("Only numbers allowed").required("Required"),
//     gsp: Yup.string().required("Required"),
//     creditCard: Yup.string().required("Required"),
//     camera: Yup.string().required("Required"),
//     inventoryAudit: Yup.string().required("Required"),
//     shipment: Yup.string().required("Required"),
// });

// function TakeOverForm() {
//     const [loading, setLoading] = useState(false);
//     const [allStoresData, setAllStoresData] = useState([]);
//     const [isUploading, setIsUploading] = useState(false);

//     // Initial Values
//     const initialValues = {
//         name: "",
//         storeId: "",
//         cashinstore: "",
//         takeOverDate: "",
//         alarmCode: "",
//         wifiName: "",
//         wifiCode: "",
//         safeBoxCode: "",
//         lunchBoxCode: "",
//         doorCode: "",
//         dumpsterCode: "",
//         citrixCount: "",
//         yuniKeys: "",
//         gsp: "",
//         creditCard: "",
//         camera: "",
//         inventoryAudit: "",
//         shipment: "",
//         storeImages: [],
//     };

//     // Fetch all stores
//     const fetchAllStoreData = useCallback(async () => {
//         try {
//             const response = await getAllStoresDataServices();
//             if (response?.data) {
//                 setAllStoresData(response.data);
//             }
//         } catch (error) {
//             console.log("ERROR", error.message);
//         }
//     }, []);

//     useEffect(() => {
//         fetchAllStoreData();
//     }, [fetchAllStoreData]);

//     // Image upload (Cloudinary)
//     const uploadImagesToCloudinary = async (files) => {
//         const uploadedUrls = [];
//         setIsUploading(true);

//         for (let file of files) {
//             const compressedFile = await imageCompression(file, {
//                 maxSizeMB: 1,
//                 maxWidthOrHeight: 1920,
//                 useWebWorker: true,
//             });

//             const formData = new FormData();
//             formData.append("file", compressedFile);
//             formData.append("upload_preset", "ml_default");
//             formData.append("cloud_name", "deywkct4u");

//             try {
//                 const res = await fetch("https://api.cloudinary.com/v1_1/deywkct4u/image/upload", {
//                     method: "POST",
//                     body: formData,
//                 });
//                 const data = await res.json();
//                 uploadedUrls.push(data.secure_url);
//             } catch (error) {
//                 console.error("Cloudinary upload error:", error);
//             }
//         }

//         setIsUploading(false);
//         return uploadedUrls;
//     };

//     // Handle Submit
//     const handleSubmit = async (values, { resetForm }) => {
//         // setLoading(true);
//         console.log("Submitting data:", values); // ✅ This will now show storeId instead of storeName
//         try {
//             // const response = await addTakeoverEntryServices(values);
//             // if (response?.data?.status === 200) {
//             //     toast.success("Form submitted successfully!");
//             // }
//         } catch (error) {
//             console.error("Submission Error:", error.message);
//             // toast.error("Error submitting form.");
//         } finally {
//             // resetForm();
//             // setLoading(false);
//         }
//     };

//     return (
//         <div className="container mt-4">
//             <h3 className="mb-4 text-primary fw-bold">Take Over Form</h3>

//             <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
//                 {({ values, handleChange, setFieldValue, errors, touched }) => (
//                     <Form>
//                         <div className="row">
//                             {/* Text Fields */}
//                             {[
//                                 { label: "Name", name: "name" },
//                                 { label: "Cash in Store", name: "cashinstore" },
//                                 { label: "Take Over Date", name: "takeOverDate", type: "date" },
//                                 { label: "Alarm Code", name: "alarmCode" },
//                                 { label: "WiFi Name", name: "wifiName" },
//                                 { label: "WiFi Code", name: "wifiCode" },
//                                 { label: "Safe Box Code", name: "safeBoxCode" },
//                                 { label: "Lunch Box Code", name: "lunchBoxCode" },
//                                 { label: "Grill/Main Door Code", name: "doorCode" },
//                                 { label: "Dumpster Lock Code/Key", name: "dumpsterCode" },
//                                 { label: "Number of Citrix Computers", name: "citrixCount", type: "number" },
//                                 { label: "Number of YubiKey", name: "yuniKeys", type: "number" },
//                             ].map((field, i) => (
//                                 <div className="col-md-6 mb-3" key={i}>
//                                     <TextField
//                                         fullWidth
//                                         label={field.type !== "date" ? field.label : ""}
//                                         name={field.name}
//                                         type={field.type || "text"}
//                                         value={values[field.name]}
//                                         onChange={(e) => {
//                                             const value = e.target.value;
//                                             if (field.type === "number") {
//                                                 if (/^\d*$/.test(value)) setFieldValue(field.name, value);
//                                             } else {
//                                                 handleChange(e);
//                                             }
//                                         }}
//                                         variant="outlined"
//                                         error={touched[field.name] && Boolean(errors[field.name])}
//                                         helperText={touched[field.name] && errors[field.name]}
//                                         InputLabelProps={field.type === "date" ? { shrink: true } : {}}
//                                     />
//                                 </div>
//                             ))}

//                             {/* ✅ Store Dropdown */}
//                             <div className="col-md-6 mb-3">
//                                 <TextField
//                                     select
//                                     fullWidth
//                                     label="Select Store (Tech ID)"
//                                     name="storeId"
//                                     value={values.storeId}
//                                     onChange={handleChange}
//                                     variant="outlined"
//                                     error={touched.storeId && Boolean(errors.storeId)}
//                                     helperText={touched.storeId && errors.storeId}
//                                 >
//                                     {allStoresData.length > 0 ? (
//                                         allStoresData.map((store) => (
//                                             <MenuItem key={store.techId} value={store.techId}>
//                                                 {store.techId} — {store.storeName}
//                                             </MenuItem>
//                                         ))
//                                     ) : (
//                                         <MenuItem disabled>Loading stores...</MenuItem>
//                                     )}
//                                 </TextField>
//                             </div>

//                             {/* Yes/No Dropdowns */}
//                             {[
//                                 { label: "GPS/Ensurity Tracker", name: "gsp" },
//                                 { label: "Credit Card Setup", name: "creditCard" },
//                                 { label: "Next Camera Setup & Linked", name: "camera" },
//                                 { label: "Inventory Audit Done?", name: "inventoryAudit" },
//                                 { label: "Shipment Delivered?", name: "shipment" },
//                             ].map((dropdown) => (
//                                 <div className="col-md-6 mb-3" key={dropdown.name}>
//                                     <TextField
//                                         select
//                                         fullWidth
//                                         label={dropdown.label}
//                                         name={dropdown.name}
//                                         value={values[dropdown.name]}
//                                         onChange={handleChange}
//                                         variant="outlined"
//                                         error={touched[dropdown.name] && Boolean(errors[dropdown.name])}
//                                         helperText={touched[dropdown.name] && errors[dropdown.name]}
//                                     >
//                                         {yesNoOptions.map((option) => (
//                                             <MenuItem key={option.value} value={option.value}>
//                                                 {option.label}
//                                             </MenuItem>
//                                         ))}
//                                     </TextField>
//                                 </div>
//                             ))}

//                             {/* Submit Button */}
//                             <div className="col-12 text-end mt-3">
//                                 <Button variant="contained" color="primary" type="submit" disabled={loading}>
//                                     {loading ? <CircularProgress size={22} color="inherit" /> : "Submit Form"}
//                                 </Button>
//                             </div>
//                         </div>
//                     </Form>
//                 )}
//             </Formik>
//         </div>
//     );
// }

// export default TakeOverForm;


import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Box,
    TextField,
    MenuItem,
    Button,
    CircularProgress,
    Autocomplete,
    Paper,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import imageCompression from "browser-image-compression";
import { getAllStoresDataServices } from "../Services/stores.services";
import { addNewTakeoverStoreDataServices } from "../Services/takeoverstores.services";
// ✅ Yup Schema for validation
const validationSchema = Yup.object().shape({
    // name: Yup.string().required("Required"),
    storeId: Yup.string().required("Please select a store"),
    storeTechId: Yup.string().required("Required"),
    takeOverDate: Yup.string().required("Required"),
    alarmCode: Yup.string().required("Required"),
    wifiName: Yup.string().required("Required"),
    wifiCode: Yup.string().required("Required"),
    safeBoxCode: Yup.string().required("Required"),
    lunchBoxCode: Yup.string().required("Required"),
    doorCode: Yup.string().required("Required"),
    dumpsterCode: Yup.string().required("Required"),
    citrixCount: Yup.number().typeError("Only numbers allowed").required("Required"),
    yuniKeys: Yup.number().typeError("Only numbers allowed").required("Required"),
    gsp: Yup.string().required("Required"),
    creditCard: Yup.string().required("Required"),
    camera: Yup.string().required("Required"),
    inventoryAudit: Yup.string().required("Required"),
    shipment: Yup.string().required("Required"),
});

function TakeOverForm() {
    const [loading, setLoading] = useState(false);
    const [allStores, setAllStores] = useState([]);
    const [isUploading, setIsUploading] = useState(false);

    const initialValues = useMemo(
        () => ({
            // name: "",
            storeId: 0,
            storeTechId: "",
            cashinstore: "",
            takeOverDate: "",
            takeoverData:"",
            alarmCode: "",
            wifiName: "",
            wifiCode: "",
            safeBoxCode: "",
            lunchBoxCode: "",
            doorCode: "",
            dumpsterCode: "",
            citrixCount: "",
            yuniKeys: "",
            gsp: "",
            creditCard: "",
            camera: "",
            inventoryAudit: "",
            shipment: "",
        }),
        []
    );

    // ✅ Optimized store fetching
    const fetchStores = useCallback(async () => {
        try {
            const response = await getAllStoresDataServices();
            if (response?.data) setAllStores(response.data);
        } catch (error) {
            console.error("Error fetching stores:", error.message);
        }
    }, []);

    useEffect(() => {
        fetchStores();
    }, [fetchStores]);

    // ✅ Image upload (optimized async/await)
    const uploadImagesToCloudinary = async (files) => {
        const uploadedUrls = [];
        setIsUploading(true);

        for (let file of files) {
            const compressedFile = await imageCompression(file, {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            });

            const formData = new FormData();
            formData.append("file", compressedFile);
            formData.append("upload_preset", "ml_default");
            formData.append("cloud_name", "deywkct4u");

            try {
                const res = await fetch("https://api.cloudinary.com/v1_1/deywkct4u/image/upload", {
                    method: "POST",
                    body: formData,
                });
                const data = await res.json();
                uploadedUrls.push(data.secure_url);
            } catch (err) {
                console.error("Cloudinary Upload Error:", err);
            }
        }

        setIsUploading(false);
        return uploadedUrls;
    };

    // ✅ Handle Submit
    const handleSubmit = async (values, { resetForm }) => {
        // setLoading(true);
        console.log("🚀 Submitting Takeover Form:", values);
        try {
            const response = await addNewTakeoverStoreDataServices(values);
            console.log("RESPONSE:", response.data);
        } catch (error) {
            console.log("ERROR", error)
        }
    };

    return (
        <Paper className="container py-4 px-3 my-4" elevation={3}>
            <h3 className="mb-4 text-center fw-bold text-primary">🏪 Store Takeover Form</h3>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                {({ values, handleChange, setFieldValue, errors, touched }) => (
                    <Form>
                        <div className="row gy-3 gx-4">
                            {/* Name */}
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    error={touched.name && Boolean(errors.name)}
                                    helperText={touched.name && errors.name}
                                />
                            </div>

                            {/* ✅ Store Name (Autocomplete Dropdown) */}
                            <div className="col-md-6">
                                <Autocomplete
                                    options={allStores}
                                    getOptionLabel={(option) => `${option.storeName} (${option.techId})`}
                                    onChange={(_, selected) => {
                                        if (selected) {
                                            setFieldValue("storeId", selected.techId);
                                            setFieldValue("storeTechId", selected.techId);
                                        } else {
                                            setFieldValue("storeId", "");
                                            setFieldValue("storeTechId", "");
                                        }
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Select Store"
                                            fullWidth
                                            error={touched.storeId && Boolean(errors.storeId)}
                                            helperText={touched.storeId && errors.storeId}
                                        />
                                    )}
                                />
                            </div>

                            {/* ✅ Store Tech ID (auto-filled) */}
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Store Tech ID"
                                    name="storeTechId"
                                    value={values.storeTechId}
                                    onChange={handleChange}
                                    disabled
                                    InputProps={{
                                        readOnly: true,
                                        style: { backgroundColor: "#f8f9fa" },
                                    }}
                                    error={touched.storeTechId && Boolean(errors.storeTechId)}
                                    helperText={touched.storeTechId && errors.storeTechId}
                                />
                            </div>

                            {/* Financial + Date */}
                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    label="Cash in Store"
                                    name="cashinstore"
                                    type="number"
                                    value={values.cashinstore}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="col-md-6">
                                <TextField
                                    fullWidth
                                    type="date"
                                    name="takeOverDate"
                                    label="Take Over Date"
                                    InputLabelProps={{ shrink: true }}
                                    value={values.takeOverDate}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Access Fields */}
                            {[
                                { label: "Alarm Code", name: "alarmCode" },
                                { label: "WiFi Name", name: "wifiName" },
                                { label: "WiFi Code", name: "wifiCode" },
                                { label: "Safe Box Code", name: "safeBoxCode" },
                                { label: "Lunch Box Code", name: "lunchBoxCode" },
                                { label: "Grill/Main Door Code", name: "doorCode" },
                                { label: "Dumpster Lock Code/Key", name: "dumpsterCode" },
                                { label: "Number of Citrix Computers", name: "citrixCount", type: "number" },
                                { label: "Number of YubiKeys", name: "yuniKeys", type: "number" },
                            ].map((field, i) => (
                                <div className="col-md-6" key={i}>
                                    <TextField
                                        fullWidth
                                        label={field.label}
                                        name={field.name}
                                        type={field.type || "text"}
                                        value={values[field.name]}
                                        onChange={handleChange}
                                        error={touched[field.name] && Boolean(errors[field.name])}
                                        helperText={touched[field.name] && errors[field.name]}
                                    />
                                </div>
                            ))}

                            {[
                                { label: "GPS/Ensurity Tracker", name: "gsp" },
                                { label: "Credit Card Setup", name: "creditCard" },
                                { label: "Next Camera Setup & Linked", name: "camera" },
                                { label: "Inventory Audit Done?", name: "inventoryAudit" },
                                { label: "Shipment Delivered?", name: "shipment" },
                            ].map((dropdown, i) => (
                                <div className="col-md-6 mb-3" key={i}>
                                    <TextField
                                        select
                                        fullWidth
                                        label={dropdown.label}
                                        name={dropdown.name}
                                        value={values[dropdown.name] === true ? "yes" : values[dropdown.name] === false ? "no" : ""}
                                        onChange={(e) => {
                                            const val = e.target.value === "yes";
                                            setFieldValue(dropdown.name, val);
                                        }}
                                        variant="outlined"
                                        error={touched[dropdown.name] && Boolean(errors[dropdown.name])}
                                        helperText={touched[dropdown.name] && errors[dropdown.name]}
                                    >
                                        <MenuItem value="yes">Yes</MenuItem>
                                        <MenuItem value="no">No</MenuItem>
                                    </TextField>
                                </div>
                            ))}


                            {/* Submit */}
                            <div className="col-12 text-end mt-4">
                                <Button variant="contained" color="primary" type="submit" disabled={loading}>
                                    {loading ? <CircularProgress size={22} color="inherit" /> : "Submit Form"}
                                </Button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </Paper>
    );
}

export default React.memo(TakeOverForm);
