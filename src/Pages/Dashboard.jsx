import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

// === Icons ===
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import BoltIcon from "@mui/icons-material/Bolt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SalesTrendsChart from "../Charts/SalesTrendsChart";
import TopPerformingStores from "../Charts/TopPerformingStores";
import StorePerformanceOverview from "../Components/StorePerformanceOverview/StorePerformanceOverview.jsx";
import LeasingOverviewDashboard from "../Components/LeasingOverviewDashboard/LeasingOverviewDashboard.jsx.jsx";
import StoreLocationsDashboard from "../Components/StoreLocationsDashboard/StoreLocationsDashboard.jsx";
import UtilitiesOverviewDashboard from "../Components/UtilitiesOverviewDashboard/UtilitiesOverviewDashboard.jsx";
import MaintenanceRequestsDashboard from "../Components/MaintenanceRequestsDashboard/MaintenanceRequestsDashboard.jsx";
import FinancialOverviewDashboard from "../Components/FinancialOverviewDashboard/FinancialOverviewDashboard.jsx";
import AlertsNotifications from "../Components/AlertsNotifications/AlertsNotifications.jsx";
import QuickActions from "../Components/QuickActions/QuickActions.jsx";

function Dashboard() {
  return (
    <Box sx={{ p: 4, backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      {/* ===== HEADER ===== */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
        <div>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            MIS Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Overview of Metro by T-Mobile Operations and Store Performance
          </Typography>
        </div>
        <Chip label="Admin View" color="primary" variant="filled" />
      </div>

      <Divider className="mb-4" />

      {/* ===== SECTION 1: TOP SUMMARY KPIs ===== */}
      <div className="row g-4 mb-4">
        <div className="col-12">
          <Card className="shadow-sm rounded-4 border-0">
            <CardContent>
              <div className="d-flex align-items-center mb-2">
                <LeaderboardIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Top Summary KPIs
                </Typography>
              </div>
              <Typography variant="body2" color="text.secondary" className="mb-3">
                Key metrics like total stores, total revenue, profit margins, active leases, etc.
              </Typography>

              <div className="row g-3">
                {[
                  { label: "Total Stores", value: "512", icon: <StoreMallDirectoryIcon color="primary" /> },
                  { label: "Monthly Revenue", value: "$1.8M", icon: <AttachMoneyIcon color="success" /> },
                  { label: "Active Leases", value: "486", icon: <ApartmentIcon color="info" /> },
                  { label: "Pending Maintenance", value: "23", icon: <BuildIcon color="warning" /> },
                  { label: "Total Employees", value: "3,200", icon: <SettingsIcon color="secondary" /> },
                ].map((kpi, i) => (
                  <div className="col-6 col-md-4 col-lg-2" key={i}>
                    <Card
                      className="text-center shadow-sm border-0 h-100"
                      sx={{ borderRadius: 3, p: 1 }}
                    >
                      <CardContent>
                        <div className="d-flex justify-content-center mb-2">{kpi.icon}</div>
                        <Typography variant="subtitle2" color="text.secondary">
                          {kpi.label}
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                          {kpi.value}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ===== SECTION 2: SALES & PERFORMANCE CHARTS ===== */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-lg-8">
          <SalesTrendsChart />
        </div>
        <div className="col-12 col-lg-4">
          <TopPerformingStores />
        </div>
      </div>

      {/* ===== SECTION 3: STORE PERFORMANCE TABLE ===== */}
      <div className="row g-4 mb-4">
        <div className="col-12">
          <StorePerformanceOverview />
        </div>
      </div>

      {/* ===== SECTION 4: LEASING & PROPERTY ===== */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <LeasingOverviewDashboard />
        </div>
        <div className="col-12 col-md-6">
          <StoreLocationsDashboard />
        </div>
      </div>

      {/* ===== SECTION 5: UTILITIES & MAINTENANCE ===== */}
      <div className="row g-4 mb-4">
        <div className="col-12 col-md-6">
          <UtilitiesOverviewDashboard />
        </div>
        <div className="col-12 col-md-6">
          <MaintenanceRequestsDashboard />
        </div>
      </div>

      {/* ===== SECTION 6: FINANCIAL OVERVIEW ===== */}
      <div className="row g-4 mb-4">
        <div className="col-12">
          <FinancialOverviewDashboard />
        </div>
      </div>

      {/* ===== SECTION 7: ALERTS & QUICK ACTIONS ===== */}
      <div className="row g-4">
        <div className="col-12 col-lg-12">
          <AlertsNotifications />
        </div>
        {/* <div className="col-12 col-lg-6">
          <QuickActions />
        </div> */}
      </div>
    </Box>
  );
}

export default Dashboard;
