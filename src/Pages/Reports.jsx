import React from "react";
import { Box, Grid, Paper, Typography, Divider } from "@mui/material";
import SummaryOverview from "../Components/SummaryOverview/SummaryOverview";
import FinancialPerformance from "../Components/FinancialPerformance/FinancialPerformance";
import SalesPerformance from "../Components/SalesPerformance/SalesPerformance";
import WorkforceInsights from "../Components/WorkforceInsights/WorkforceInsights";
import StoreOperationsHealth from "../Components/StoreOperationsHealth/StoreOperationsHealth";
import ReportsAndActions from "../Components/ReportsAndActions/ReportsAndActions";

function Reports() {
    return (
        <Box className="container-fluid my-4 py-3">
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                Reports & Insights
            </Typography>

            {/* 1️⃣ Summary Overview */}
            <SummaryOverview />
            {/* 2️⃣ Financial Performance */}
            {/* <FinancialPerformance /> */}
            <SalesPerformance />

            {/* 3️⃣ Workforce Insights */}
            <WorkforceInsights />

            {/* 4️⃣ Store Operations Health */}
            <StoreOperationsHealth />
            {/* 5️⃣ Reports & Actions */}
            {/* <ReportsAndActions /> */}
        </Box>
    );
}

export default Reports;
