import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Box,
  Grid,
  Button,
  MenuItem,
  TextField,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AssessmentIcon from "@mui/icons-material/Assessment";
import DateRangeIcon from "@mui/icons-material/DateRange";

const ReportsAndActions = () => {
  const [market, setMarket] = React.useState("");
  const [reportType, setReportType] = React.useState("");
  const [dateRange, setDateRange] = React.useState("");

  return (
    <Paper
      elevation={3}
      className="p-4 rounded-4 mb-4"
      sx={{ backgroundColor: "background.paper" }}
    >
      {/* Header */}
      <Typography
        variant="h6"
        sx={{
          mb: 1,
          fontWeight: 600,
          color: "primary.main",
          fontSize: "1.5rem",
        }}
      >
        Reports & Actions
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={3}>
        {/* 📅 Date Range */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" gap={1}>
            <DateRangeIcon color="primary" />
            <FormControl fullWidth>
              <TextField
                label="Select Date Range"
                type="month"
                variant="outlined"
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                size="small"
              />
            </FormControl>
          </Box>
        </Grid>

        {/* 🌐 Market Filter */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" gap={1}>
            <FilterAltIcon color="primary" />
            <FormControl fullWidth size="small">
              <InputLabel id="market-select-label">Select Market</InputLabel>
              <Select
                labelId="market-select-label"
                id="market-select"
                value={market}
                label="Select Market"
                onChange={(e) => setMarket(e.target.value)}
              >
                <MenuItem value="Arizona">Arizona</MenuItem>
                <MenuItem value="Texas">Texas</MenuItem>
                <MenuItem value="California">California</MenuItem>
                <MenuItem value="Nevada">Nevada</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* 📊 Report Type */}
        <Grid item xs={12} sm={6} md={4}>
          <Box display="flex" alignItems="center" gap={1}>
            <AssessmentIcon color="primary" />
            <FormControl fullWidth size="small">
              <InputLabel id="report-type-label">Report Type</InputLabel>
              <Select
                labelId="report-type-label"
                id="report-type"
                value={reportType}
                label="Report Type"
                onChange={(e) => setReportType(e.target.value)}
              >
                <MenuItem value="sales">Sales Summary</MenuItem>
                <MenuItem value="market">Market Performance</MenuItem>
                <MenuItem value="employees">Employee Overview</MenuItem>
                <MenuItem value="operations">Operational Alerts</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        {/* 🎯 Action Buttons */}
        <Grid item xs={12}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap={2}
            mt={1}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<DownloadIcon />}
              sx={{
                textTransform: "none",
                borderRadius: 3,
                px: 3,
                py: 1.2,
                fontWeight: 600,
              }}
            >
              Download Report
            </Button>

            <Button
              variant="outlined"
              color="primary"
              startIcon={<AssessmentIcon />}
              sx={{
                textTransform: "none",
                borderRadius: 3,
                px: 3,
                py: 1.2,
                fontWeight: 600,
              }}
            >
              Generate Custom Report
            </Button>

            <Button
              variant="outlined"
              color="secondary"
              startIcon={<FilterAltIcon />}
              sx={{
                textTransform: "none",
                borderRadius: 3,
                px: 3,
                py: 1.2,
                fontWeight: 600,
              }}
            >
              Apply Filters
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReportsAndActions;
