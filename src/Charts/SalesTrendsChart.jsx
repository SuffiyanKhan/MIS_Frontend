import React, { useEffect, useState } from "react";
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
import dayjs from "dayjs";

const SalesTrendsChart = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [seriesData, setSeriesData] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      id: "sales-trends",
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
        horizontal: false,
        borderRadius: 6,
        columnWidth: "55%",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: [2, 2],
      colors: ["transparent", "#6f2da8"],
    },
    xaxis: {
      categories: [],
      title: { text: "Month" },
      labels: { style: { fontSize: "12px" } },
    },
    yaxis: [
      {
        title: { text: "Revenue ($)" },
        labels: { style: { fontSize: "12px" } },
      },
      {
        opposite: true,
        title: { text: "Transactions" },
      },
    ],
    colors: ["#6F2DA8", "#4CAF50"],
    legend: { position: "bottom" },
    tooltip: {
      shared: true,
      intersect: false,
      y: [
        {
          formatter: (val) => `$${val.toLocaleString()}`,
        },
        {
          formatter: (val) => `${val.toLocaleString()} Sales`,
        },
      ],
    },
  });

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // Dummy data simulation
  useEffect(() => {
    const months = Array.from({ length: 6 }, (_, i) =>
      dayjs().subtract(5 - i, "month").format("MMM")
    );

    const revenues = [120000, 150000, 180000, 210000, 240000, 265000];
    const transactions = [400, 460, 520, 600, 640, 710];

    setSeriesData([
      { name: "Total Revenue ($)", type: "column", data: revenues },
      { name: "Transactions", type: "line", data: transactions },
    ]);

    setOptions((prev) => ({
      ...prev,
      xaxis: { ...prev.xaxis, categories: months },
    }));
  }, []);

  // ===== EXPORT HANDLER =====
  const handleExport = (type) => {
    if (!seriesData.length) return;

    const months = options.xaxis.categories;
    const exportData = months.map((m, i) => ({
      Month: m,
      Revenue: seriesData[0].data[i],
      Transactions: seriesData[1].data[i],
    }));

    if (type === "excel") {
      const ws = XLSX.utils.json_to_sheet(exportData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Sales Trends");
      XLSX.writeFile(wb, "Sales_Trends.xlsx");
    } else if (type === "csv") {
      const ws = XLSX.utils.json_to_sheet(exportData);
      const csv = XLSX.utils.sheet_to_csv(ws);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "Sales_Trends.csv";
      link.click();
    } else if (type === "pdf") {
      const doc = new jsPDF();
      doc.text("Sales Trends Report", 14, 16);
      const table = exportData.map((row) => [
        row.Month,
        `$${row.Revenue.toLocaleString()}`,
        row.Transactions,
      ]);
      autoTable(doc, {
        head: [["Month", "Revenue ($)", "Transactions"]],
        body: table,
        startY: 22,
      });
      doc.save("Sales_Trends.pdf");
    }
    handleMenuClose();
  };

  return (
    <Box sx={{ p: 2, backgroundColor: "#fff", borderRadius: 3, boxShadow: 1 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#6F2DA8" }}>
          Monthly Sales Trends
        </Typography>

        {/* ⋮ Menu */}
        <div>
          <IconButton onClick={handleMenuOpen}>
            <MoreVertIcon sx={{ color: "#6F2DA8" }} />
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
            <MenuItem onClick={() => handleExport("excel")}>
              Export as Excel (.xlsx)
            </MenuItem>
            <MenuItem onClick={() => handleExport("csv")}>
              Export as CSV (.csv)
            </MenuItem>
            <MenuItem onClick={() => handleExport("pdf")}>
              Export as PDF (.pdf)
            </MenuItem>
          </Menu>
        </div>
      </Box>

      {/* Chart */}
      <Chart
        options={options}
        series={seriesData}
        type="line"
        height={400}
      />
    </Box>
  );
};

export default SalesTrendsChart;
