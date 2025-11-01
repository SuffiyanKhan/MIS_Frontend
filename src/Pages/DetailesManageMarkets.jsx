import React, { useState } from "react";
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  Grid,
  Divider,
  Card,
  CardContent,
} from "@mui/material";

// Icons
import DashboardIcon from "@mui/icons-material/Dashboard";
import BoltIcon from "@mui/icons-material/Bolt";
import BuildIcon from "@mui/icons-material/Build";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import MarketSummaryHeader from "../Components/MarketSummaryHeader/MarketSummaryHeader";
import GeneralInfoTab from "../Components/GeneralInfoTab/GeneralInfoTab";
import MarketUtilitiesOverview from "../Components/MarketUtilitiesOverview/MarketUtilitiesOverview";
import MaintenanceTab from "../Components/MaintenanceTab/MaintenanceTab.jsx";
import EmployeesTab from "../Components/EmployeesTab/EmployeesTab.jsx";
import LeasingInfoTab from "../Components/LeasingInfoTab/LeasingInfoTab.jsx";
import FinancialsTab from "../Components/FinancialsTab/FinancialsTab.jsx";
import DocumentsTab from "../Components/DocumentsTab/DocumentsTab.jsx";

// Tab Panel Helper
function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

export default function DetailesManageMarkets() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box className="container-fluid my-4 py-3">
      <MarketSummaryHeader />
      <Paper
        elevation={-3}
        className="rounded-4 mb-4"
        sx={{
          overflow: "hidden",
          backgroundColor: "#fff",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          className="py-3 g-4"
          allowScrollButtonsMobile
          textColor="primary"
          indicatorColor="primary"
          sx={{
            "& .MuiTab-root": {
              minHeight: 58,
              fontWeight: 600,
              textTransform: "none",
              fontSize: "1rem",
              px: 3,
              transition: "all 0.2s ease-in-out",
            },
            "& .MuiTab-root:hover": {
              backgroundColor: "rgba(111, 45, 168, 0.08)",
              borderRadius: "10px",
            },
            "& .Mui-selected": {
              color: "#6F2DA8 !important",
            },
            "& .MuiTabs-indicator": {
              height: "4px",
              borderRadius: "2px",
              background: "linear-gradient(90deg, #6F2DA8, #9C27B0)",
            },
          }}
        >
          <Tab icon={<DashboardIcon />} label="General Info" />
          <Tab icon={<BoltIcon />} label="Utilities" />
          <Tab icon={<BuildIcon />} label="Maintenance" />
          <Tab icon={<PeopleAltIcon />} label="Employees" />
          <Tab icon={<HomeWorkIcon />} label="Leasing Info" />
          <Tab icon={<MonetizationOnIcon />} label="Financials" />
          <Tab icon={<DescriptionIcon />} label="Documents" />
        </Tabs>
      </Paper>

      <TabPanel value={value} index={0}>
        <GeneralInfoTab />
      </TabPanel>

      <TabPanel value={value} index={1}>
        <MarketUtilitiesOverview />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <MaintenanceTab />
      </TabPanel>

      <TabPanel value={value} index={3}>
        {/* Employees */}
        <EmployeesTab />
      </TabPanel>

      <TabPanel value={value} index={4}>
        {/* Leasing Info */}
        <LeasingInfoTab />
      </TabPanel>

      <TabPanel value={value} index={5}>
        {/* Financials */}
        <FinancialsTab />
        {/* <Paper elevation={3} className="p-4 rounded-4 mb-4">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Market Financial Performance
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box>📈 Monthly Sales Trend (Line Chart)</Box>
          <Box className="mt-4">📊 Store-wise Comparison (Bar Chart)</Box>
        </Paper> */}
      </TabPanel>

      <TabPanel value={value} index={6}>
        {/* Documents */}
        <DocumentsTab />
        {/* <Paper elevation={3} className="p-4 rounded-4 mb-4">
          <Typography variant="h6" sx={{ mb: 2 }}>
            Market Documents & Notes
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box>📁 Upload Area Placeholder</Box>
          <Box className="mt-4">🧾 Uploaded Files Table Placeholder</Box>
        </Paper> */}
      </TabPanel>
    </Box>
  );
}
