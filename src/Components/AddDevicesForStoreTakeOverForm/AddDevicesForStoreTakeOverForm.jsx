// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   IconButton,
//   Box,
//   Typography,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import CloseIcon from "@mui/icons-material/Close";

// function AddDevicesForStoreTakeOverForm() {
//   const [open, setOpen] = useState(false);
//   const [device, setDevice] = useState({
//     deviceName: "",
//     deviceType: "",
//   });

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     setDevice({ deviceName: "", deviceType: "" });
//   };

//   const handleChange = (field, value) => {
//     setDevice((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = () => {
//     if (!device.deviceName || !device.deviceType) {
//       alert("⚠️ Please fill in all fields before saving.");
//       return;
//     }

//     console.log("✅ Device Added:", device);
//     alert("Device Added Successfully!");
//     handleClose();
//   };

//   return (
//     <div>
//       {/* Add Device Button */}
//       <Button
//         variant="contained"
//         color="primary"
//         startIcon={<AddIcon />}
//         onClick={handleOpen}
//         sx={{ borderRadius: 2 }}
//       >
//         Add Devices
//       </Button>

//       {/* Modal Dialog */}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{
//           sx: { borderRadius: 3, p: 1.5 },
//         }}
//       >
//         {/* Header */}
//         <DialogTitle
//           sx={{
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             pb: 1,
//           }}
//         >
//           <Typography variant="h6" fontWeight={600} color="#6F2DA8">
//             Add New Device
//           </Typography>
//           <IconButton onClick={handleClose}>
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>

//         {/* Content */}
//         <DialogContent dividers>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
//             <TextField
//               label="Device Name"
//               placeholder="e.g. iPhone 15 Pro"
//               fullWidth
//               value={device.deviceName}
//               onChange={(e) => handleChange("deviceName", e.target.value)}
//             />

//             <TextField
//               label="Device Type"
//               placeholder="e.g. Mobile, Laptop, Accessory"
//               fullWidth
//               value={device.deviceType}
//               onChange={(e) => handleChange("deviceType", e.target.value)}
//             />
//           </Box>
//         </DialogContent>

//         {/* Footer Actions */}
//         <DialogActions sx={{ px: 3, py: 2 }}>
//           <Button onClick={handleClose} color="inherit" variant="outlined">
//             Cancel
//           </Button>
//           <Button
//             onClick={handleSubmit}
//             variant="contained"
//             color="primary"
//             sx={{ borderRadius: 2 }}
//           >
//             Save Device
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }

// export default AddDevicesForStoreTakeOverForm;

import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    IconButton,
    Box,
    Typography,
    MenuItem,
    CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { addNewTakeoverStoreDevices } from "../../Services/takeoverstores.services";

function AddDevicesForStoreTakeOverForm() {
    const [open, setOpen] = useState(false);
    const [device, setDevice] = useState({
        deviceName: "",
        deviceType: "",
    });
    const [loader, setLoader] = useState(false);

    const DEVICE_TYPES = [
        { value: "Phone", label: "Phone" },
        { value: "Watch", label: "Watch" },
        { value: "Accessories", label: "Accessories" },
    ];

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setDevice({ deviceName: "", deviceType: "" });
    };

    const handleChange = (field, value) => {
        setDevice((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async () => {
        setLoader(true);
        if (!device.deviceName || !device.deviceType) {
            setLoader(false);
            alert("⚠️ Please fill in all fields before saving.");
            return;
        }
        try {
            const response = await addNewTakeoverStoreDevices(device);
            if (response.data.success === true) {
                setLoader(false);
                console.log(response.data)
            }
            // console.log(response.data.success===true);
        } catch (error) {
            setLoader(false);
            console.log("ERROR", error)
        }
        // console.log("✅ Device Added:", device);
        // alert(`Device Added Successfully!\n\nName: ${device.deviceName}\nType: ${device.deviceType}`);
        // handleClose();
    };

    return (
        <div>
            {/* Add Device Button */}
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleOpen}
                sx={{ borderRadius: 2 }}
            >
                Add Devices
            </Button>

            {/* Modal Dialog */}
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="sm"
                fullWidth
                PaperProps={{
                    sx: { borderRadius: 3, p: 1.5 },
                }}
            >
                {/* Header */}
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        pb: 1,
                    }}
                >
                    <Typography variant="h6" fontWeight={600} color="#6F2DA8">
                        Add New Device
                    </Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                {/* Content */}
                <DialogContent dividers>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
                        {/* Device Name Input */}
                        <TextField
                            label="Device Name"
                            placeholder="e.g. iPhone 15 Pro"
                            fullWidth
                            value={device.deviceName}
                            onChange={(e) => handleChange("deviceName", e.target.value)}
                        />

                        {/* Device Type Dropdown */}
                        <TextField
                            select
                            label="Device Type"
                            fullWidth
                            value={device.deviceType}
                            onChange={(e) => handleChange("deviceType", e.target.value)}
                        >
                            {DEVICE_TYPES.map((type) => (
                                <MenuItem key={type.value} value={type.value}>
                                    {type.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </DialogContent>

                {/* Footer Buttons */}
                <DialogActions sx={{ px: 3, py: 2 }}>
                    <Button onClick={handleClose} color="inherit" variant="outlined">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: 2 }}
                        disabled={loader}
                    >
                        {loader ? <CircularProgress size={25} /> : "Save Device"}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddDevicesForStoreTakeOverForm;
