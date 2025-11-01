import React, { useState } from "react";
import {
    Box,
    Paper,
    Typography,
    Divider,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    IconButton,
    Chip,
    Tooltip,
} from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadIcon from "@mui/icons-material/Download";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

const DocumentsTab = () => {
    const [files, setFiles] = useState([
        {
            name: "Lease_Agreement.pdf",
            type: "PDF",
            uploadedBy: "Admin",
            date: "2025-03-12",
            status: "Verified",
        },
        {
            name: "Maintenance_Log.xlsx",
            type: "Excel",
            uploadedBy: "John Doe",
            date: "2025-06-21",
            status: "Pending",
        },
        {
            name: "Employee_List.csv",
            type: "CSV",
            uploadedBy: "Sarah Williams",
            date: "2025-05-18",
            status: "Verified",
        },
    ]);

    const handleUpload = (e) => {
        const uploaded = Array.from(e.target.files);
        const newFiles = uploaded.map((file) => ({
            name: file.name,
            type: file.type.split("/")[1]?.toUpperCase() || "File",
            uploadedBy: "Current User",
            date: new Date().toISOString().split("T")[0],
            status: "Pending",
        }));
        setFiles((prev) => [...newFiles, ...prev]);
    };

    const handleDelete = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    return (
        <Paper
            elevation={3}
            className="p-4 rounded-4 mb-4"
            sx={{
                backgroundColor: "#fff",
                border: "1px solid #eee",
            }}
        >
            {/* 🟣 Header */}
            <Box className="d-flex justify-content-between align-items-center mb-3">
                <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: "#6F2DA8", mb: 0 }}
                >
                    <DescriptionIcon sx={{ mr: 1, color: "#6F2DA8", fontSize: 26 }} />
                    Market Documents & Notes
                </Typography>
                <Tooltip title="Manage and store market-level documents">
                    <IconButton color="primary">
                        <InfoOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Box>

            <Divider sx={{ mb: 4 }} />

            {/* 📁 Upload Area */}
            <Box
                className="text-center p-5 rounded-4 mb-5"
                sx={{
                    border: "2px dashed #d0c4e3",
                    backgroundColor: "#faf8fc",
                    transition: "0.3s ease",
                }}
            >
                <UploadFileIcon sx={{ fontSize: 60, color: "#6F2DA8", mb: 2 }} />
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#6F2DA8" }}>
                    Upload New Document
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ mb: 3, color: "text.secondary", opacity: 0.8 }}
                >
                    Drag & Drop your files here, or click to browse.
                </Typography>
                <label htmlFor="upload-file" >
                    <input
                        disabled
                        type="file"
                        id="upload-file"
                        multiple
                        hidden
                        onChange={handleUpload}
                    />
                    <Button
                        disabled
                        variant="contained"
                        component="span"
                        sx={{
                            backgroundColor: "#6F2DA8",
                            "&:hover": { backgroundColor: "#5a2291" },
                            borderRadius: "8px",
                        }}
                        startIcon={<NoteAddIcon />}
                    >
                        Browse Files
                    </Button>
                </label>
            </Box>

            {/* 🧾 Uploaded Files Table */}
            <Typography
                variant="subtitle1"
                sx={{
                    fontWeight: 600,
                    color: "#6F2DA8",
                    mb: 2,
                }}
            >
                Uploaded Documents
            </Typography>

            <Box className="table-responsive rounded-4 border" sx={{ background: "#faf8fc" }}>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ backgroundColor: "#f2edf7" }}>
                            <TableRow>
                                <TableCell><strong>File Name</strong></TableCell>
                                <TableCell><strong>Type</strong></TableCell>
                                <TableCell><strong>Uploaded By</strong></TableCell>
                                <TableCell><strong>Date</strong></TableCell>
                                <TableCell><strong>Status</strong></TableCell>
                                <TableCell align="center"><strong>Actions</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {files.map((file, index) => (
                                <TableRow key={index}>
                                    <TableCell>{file.name}</TableCell>
                                    <TableCell>{file.type}</TableCell>
                                    <TableCell>{file.uploadedBy}</TableCell>
                                    <TableCell>{file.date}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={file.status}
                                            color={
                                                file.status === "Verified"
                                                    ? "success"
                                                    : file.status === "Pending"
                                                        ? "warning"
                                                        : "default"
                                            }
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Tooltip title="Download">
                                            <IconButton color="primary">
                                                <DownloadIcon />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton
                                                color="error"
                                                onClick={() => handleDelete(index)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Paper>
    );
};

export default DocumentsTab;
