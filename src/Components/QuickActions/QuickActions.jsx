import React from "react";
import {
    Card,
    CardContent,
    Typography,
    Button,
    Grid,
    Tooltip,
    Box,
    Divider,
} from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AssessmentIcon from "@mui/icons-material/Assessment";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import PrintIcon from "@mui/icons-material/Print";
import DescriptionIcon from "@mui/icons-material/Description";

const QuickActions = () => {
    const actions = [
        {
            label: "Add Store",
            icon: <AddBusinessIcon />,
            color: "primary",
            onClick: () => alert("Add new store action triggered!"),
        },
        {
            label: "Upload Lease",
            icon: <CloudUploadIcon />,
            color: "success",
            onClick: () => alert("Upload lease document action triggered!"),
        },
        {
            label: "Assign Employee",
            icon: <PersonAddAlt1Icon />,
            color: "secondary",
            onClick: () => alert("Assign employee to store action triggered!"),
        },
        {
            label: "Generate Report",
            icon: <AssessmentIcon />,
            color: "info",
            onClick: () => alert("Generate report action triggered!"),
        },
        {
            label: "Print Summary",
            icon: <PrintIcon />,
            color: "warning",
            onClick: () => alert("Print summary action triggered!"),
        },
        {
            label: "Upload Document",
            icon: <DescriptionIcon />,
            color: "error",
            onClick: () => alert("Upload document action triggered!"),
        },
    ];

    return (
        <Card className="shadow-sm rounded-4 border-0 h-100">
            <CardContent>
                {/* ===== Header ===== */}
                <Box className="d-flex justify-content-between align-items-center mb-2">
                    <Box className="d-flex align-items-center">
                        <BoltIcon color="primary" sx={{ mr: 1 }} />
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Quick Actions
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Add store, upload lease, assign employee, generate report.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* ===== Quick Action Buttons ===== */}
                <Grid container spacing={2}>
                    {actions.map((action, index) => (
                        <Grid item xs={6} md={4} key={index}>
                            <Tooltip title={action.label}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color={action.color}
                                    startIcon={action.icon}
                                    onClick={action.onClick}
                                    sx={{
                                        textTransform: "none",
                                        fontWeight: 500,
                                        borderRadius: 3,
                                        py: 1.2,
                                        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                                        "&:hover": {
                                            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                                        },
                                    }}
                                >
                                    {action.label}
                                </Button>
                            </Tooltip>
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default QuickActions;
