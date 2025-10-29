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
    Tooltip,
} from "@mui/material";

// ===== ICONS =====
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WifiIcon from "@mui/icons-material/Wifi";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PaymentsIcon from "@mui/icons-material/Payments";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import EventIcon from "@mui/icons-material/Event";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedIcon from "@mui/icons-material/Verified";
import BusinessIcon from "@mui/icons-material/Business";

const UtilitiesOverview = ({ utilities }) => {
    // Dummy data (if no prop is passed)
    const data =
        utilities || {
            electricity: {
                provider: "SRP Electric Co.",
                account_number: "SRP-8821-459",
                billing_cycle: "Monthly",
                last_bill_date: "2025-09-10",
                average_cost: "$380/month",
                last_payment_status: "Paid",
                support_contact: "+1 (800) 777-4444",
            },
            internet: {
                provider: "Comcast Business Fiber",
                account_number: "CMB-3345-1102",
                plan: "1Gbps Fiber Business Plan",
                average_cost: "$220/month",
                status: "Active",
                last_payment_status: "Paid",
                last_bill_date: "2025-09-11",
                support_contact: "+1 (888) 936-4968",
            },
            water: {
                provider: "Mesa City Water Dept.",
                account_number: "WTR-1024-3002",
                billing_cycle: "Quarterly",
                average_cost: "$95/quarter",
                last_payment_status: "Pending",
                last_bill_date: "2025-09-20",
                support_contact: "+1 (480) 644-2221",
            },
            gas: {
                provider: "Southwest Gas Co.",
                account_number: "SWG-8834-5567",
                billing_cycle: "Monthly",
                average_cost: "$120/month",
                last_bill_date: "2025-09-15",
                last_payment_status: "Paid",
                support_contact: "+1 (877) 860-6020",
            },
            landlord_billing: {
                rent_amount: "$2,850/month",
                due_date: "2025-10-01",
                payment_status: "Paid",
                landlord_name: "Metro Property Holdings",
                lease_period: "May 2021 – May 2026",
            },
        };

    return (
        <Box className="container-fluid py-4">
            {/* ===== HEADER ===== */}
            <div className="d-flex align-items-center gap-3 flex-wrap mb-4 bg-white p-3 rounded-4 shadow-sm">
                <ElectricBoltIcon
                    fontSize="large"
                    style={{ color: "#6d28d9" }}
                />
                <div>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Utilities Overview
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Store Utility, Billing & Provider Details
                    </Typography>
                </div>
            </div>

            {/* ===== ROW 1: ELECTRICITY & INTERNET ===== */}
            <div className="row g-4">
                {/* ELECTRICITY */}
                <div className="col-12 col-md-6">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Electricity Details
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <ElectricBoltIcon color="warning" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Provider"
                                        secondary={data.electricity.provider}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccountBalanceIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Account Number"
                                        secondary={data.electricity.account_number}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EventIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Billing Cycle"
                                        secondary={data.electricity.billing_cycle}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ReceiptLongIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Last Bill Date"
                                        secondary={data.electricity.last_bill_date}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PaymentsIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Average Monthly Cost"
                                        secondary={data.electricity.average_cost}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <VerifiedIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Last Payment Status"
                                        secondary={data.electricity.last_payment_status}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <SupportAgentIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Support Contact"
                                        secondary={data.electricity.support_contact}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>

                {/* INTERNET */}
                <div className="col-12 col-md-6">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Internet Connection
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <WifiIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Provider"
                                        secondary={data.internet.provider}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <AccountBalanceIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Account Number"
                                        secondary={data.internet.account_number}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FileCopyIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary="Plan" secondary={data.internet.plan} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <ReceiptLongIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Last Bill Date"
                                        secondary={data.internet.last_bill_date}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PaymentsIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Average Monthly Cost"
                                        secondary={data.internet.average_cost}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <VerifiedIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Connection Status"
                                        secondary={data.internet.status}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <SupportAgentIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Support Contact"
                                        secondary={data.internet.support_contact}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* ===== ROW 2: WATER, GAS, LANDLORD ===== */}
            <div className="row g-4 mt-1">
                {/* WATER */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Water Supply
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <WaterDropIcon color="primary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Provider"
                                        secondary={data.water.provider}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EventIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Billing Cycle"
                                        secondary={data.water.billing_cycle}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PaymentsIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Average Cost"
                                        secondary={data.water.average_cost}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <VerifiedIcon color="error" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Payment Status"
                                        secondary={data.water.last_payment_status}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>

                {/* GAS */}
                <div className="col-12 col-md-6 col-lg-4">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Gas Service
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <LocalGasStationIcon color="warning" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Provider"
                                        secondary={data.gas.provider}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EventIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Billing Cycle"
                                        secondary={data.gas.billing_cycle}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PaymentsIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Average Monthly Cost"
                                        secondary={data.gas.average_cost}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <VerifiedIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Last Payment Status"
                                        secondary={data.gas.last_payment_status}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>

                {/* LANDLORD BILLING */}
                <div className="col-12 col-lg-4">
                    <Card className="shadow-sm rounded-4 h-100">
                        <CardContent>
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Landlord Billing
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <List dense>
                                <ListItem>
                                    <ListItemIcon>
                                        <BusinessIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Landlord Name"
                                        secondary={data.landlord_billing.landlord_name}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <PaymentsIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Rent Amount"
                                        secondary={data.landlord_billing.rent_amount}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <EventIcon color="info" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Due Date"
                                        secondary={data.landlord_billing.due_date}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <VerifiedIcon color="success" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Payment Status"
                                        secondary={data.landlord_billing.payment_status}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <FileCopyIcon color="action" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Lease Period"
                                        secondary={data.landlord_billing.lease_period}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Box>
    );
};

export default UtilitiesOverview;
