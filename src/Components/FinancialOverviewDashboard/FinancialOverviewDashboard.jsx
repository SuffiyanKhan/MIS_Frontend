import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SavingsIcon from "@mui/icons-material/Savings";
import PieChartIcon from "@mui/icons-material/PieChart";
import Chart from "react-apexcharts";

const FinancialOverviewDashboard = () => {
  // Dummy market data
  const markets = [
    { market: "Phoenix", revenue: 95000, profit: 42000, expenses: 53000 },
    { market: "Tempe", revenue: 72000, profit: 31000, expenses: 41000 },
    { market: "Mesa", revenue: 85000, profit: 36000, expenses: 49000 },
    { market: "Chandler", revenue: 64000, profit: 25000, expenses: 39000 },
    { market: "Gilbert", revenue: 78000, profit: 33000, expenses: 45000 },
  ];

  // Calculations
  const totalRevenue = markets.reduce((sum, m) => sum + m.revenue, 0);
  const totalProfit = markets.reduce((sum, m) => sum + m.profit, 0);
  const totalExpenses = markets.reduce((sum, m) => sum + m.expenses, 0);
  const roi = ((totalProfit / totalExpenses) * 100).toFixed(1);

  // Chart setup
  const chartOptions = {
    chart: { type: "bar", toolbar: { show: false } },
    plotOptions: { bar: { borderRadius: 6, columnWidth: "45%" } },
    dataLabels: { enabled: false },
    xaxis: { categories: markets.map((m) => m.market) },
    colors: ["#4CAF50", "#E53935", "#1976D2"],
    legend: { position: "bottom" },
    stroke: { show: true, width: 2, colors: ["transparent"] },
    tooltip: { y: { formatter: (val) => `$${val.toLocaleString()}` } },
  };

  const chartSeries = [
    { name: "Revenue", data: markets.map((m) => m.revenue) },
    { name: "Profit", data: markets.map((m) => m.profit) },
    { name: "Expenses", data: markets.map((m) => m.expenses) },
  ];

  return (
    <div className="col-12">
      <Card className="shadow-sm rounded-4 border-0">
        <CardContent>
          {/* ===== Header ===== */}
          <div className="d-flex align-items-center mb-2">
            <AttachMoneyIcon color="success" sx={{ mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Financial Overview
            </Typography>
          </div>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Overview of total revenue, profit, ROI, and expenses by market.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* ===== Summary Cards ===== */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className="bg-light rounded-4 p-3 text-center">
                <ShowChartIcon color="primary" fontSize="medium" />
                <Typography variant="subtitle2" color="text.secondary">
                  Total Revenue
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  ${totalRevenue.toLocaleString()}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="bg-light rounded-4 p-3 text-center">
                <TrendingUpIcon color="success" fontSize="medium" />
                <Typography variant="subtitle2" color="text.secondary">
                  Total Profit
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  ${totalProfit.toLocaleString()}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="bg-light rounded-4 p-3 text-center">
                <SavingsIcon color="warning" fontSize="medium" />
                <Typography variant="subtitle2" color="text.secondary">
                  Total Expenses
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  ${totalExpenses.toLocaleString()}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box className="bg-light rounded-4 p-3 text-center">
                <PieChartIcon color="secondary" fontSize="medium" />
                <Typography variant="subtitle2" color="text.secondary">
                  ROI
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 700, color: roi >= 100 ? "green" : "orange" }}
                >
                  {roi}%
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* ===== Chart ===== */}
          <Box sx={{ mt: 4 }}>
            <Chart options={chartOptions} series={chartSeries} type="bar" height={350} />
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialOverviewDashboard;
