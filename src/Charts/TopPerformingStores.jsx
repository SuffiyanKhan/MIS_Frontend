import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Chart from "react-apexcharts";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const TopPerformingStores = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [seriesData, setSeriesData] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      toolbar: { show: false },
      animations: {
        enabled: true,
        easing: "easeout",
        speed: 800,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 8,
        barHeight: "60%",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: (val) => `$${val.toLocaleString()}`,
      style: { fontSize: "12px", colors: ["#fff"] },
    },
    xaxis: {
      categories: [],
      title: { text: "Revenue ($)" },
      labels: {
        formatter: (val) => `$${val / 1000}k`,
        style: { fontSize: "12px" },
      },
    },
    yaxis: {
      labels: {
        style: { fontSize: "13px", fontWeight: 500 },
      },
    },
    colors: ["#6F2DA8"],
    tooltip: {
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    grid: {
      borderColor: "#eee",
      strokeDashArray: 4,
    },
  });

  // Dummy store data
  useEffect(() => {
    const stores = [
      { name: "Downtown Metro", revenue: 265000 },
      { name: "Sunset Plaza", revenue: 240000 },
      { name: "Greenwood Mall", revenue: 210000 },
      { name: "Uptown Central", revenue: 195000 },
      { name: "Riverside", revenue: 185000 },
    ];

    const names = stores.map((s) => s.name);
    const revenues = stores.map((s) => s.revenue);

    setSeriesData([{ name: "Revenue", data: revenues }]);
    setOptions((prev) => ({
      ...prev,
      xaxis: { ...prev.xaxis, categories: names },
    }));
  }, []);

  // Export functions
  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleExport = (type) => {
    const exportData = options.xaxis.categories.map((store, i) => ({
      Store: store,
      Revenue: seriesData[0].data[i],
    }));

    if (type === "excel") {
      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Top Stores");
      XLSX.writeFile(wb, "Top_Stores.xlsx");
    } else if (type === "csv") {
      const ws = XLSX.utils.json_to_sheet(exportData);
      const csv = XLSX.utils.sheet_to_csv(ws);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Top_Stores.csv";
      link.click();
    } else if (type === "pdf") {
      const doc = new jsPDF();
      doc.text("Top Performing Stores", 14, 16);
      const table = exportData.map((r) => [r.Store, `$${r.Revenue.toLocaleString()}`]);
      autoTable(doc, {
        head: [["Store", "Revenue ($)"]],
        body: table,
        startY: 22,
      });
      doc.save("Top_Stores.pdf");
    }

    handleMenuClose();
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#2e7d32" }}>
          Top Performing Stores
        </Typography>

        {/* ⋮ Export Menu */}
        <div>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon sx={{ color: "#2e7d32" }} />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                borderRadius: 2,
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              },
            }}
          >
            <MenuItem onClick={() => handleExport("excel")}>Export as Excel</MenuItem>
            <MenuItem onClick={() => handleExport("csv")}>Export as CSV</MenuItem>
            <MenuItem onClick={() => handleExport("pdf")}>Export as PDF</MenuItem>
          </Menu>
        </div>
      </Box>

      {/* Chart */}
      <Chart options={options} series={seriesData} type="bar" height={350} />
    </Box>
  );
};

export default TopPerformingStores;
