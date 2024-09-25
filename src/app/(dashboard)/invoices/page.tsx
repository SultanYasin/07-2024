"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography, Drawer, IconButton, Button } from "@mui/material";
import { ResizableBox } from "react-resizable";
import CloseIcon from "@mui/icons-material/Close";
import "react-resizable/css/styles.css"; 

import { rows } from "./MockingData";
import Invoice from "@/components/invoice_layout/invoiceLayout";
import SearchAppBar from "@/components/SearchAppBar";

export default function Users() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerWidth, setDrawerWidth] = useState(350); // State to track drawer width
  const [selectedInvoice, setSelectedInvoice] = useState<any>(null);

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "NAME", flex: 1 },
    { field: "vendor", headerName: "VENDOR", flex: 1 },
    { field: "cost", headerName: "COST", flex: 1 },
    { field: "end_date", headerName: "END DATE", flex: 1 },
    { field: "end_date", headerName: "skicakt via", flex: 1 },
    {
      field: "status",
      headerName: "STATUS",
      width: 190,
      headerAlign: "center",
      renderCell: ({ row: { status } }) => (
        <Box
          sx={{
            pt: "1px",
            mt: "10px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              status === "paid"
                ? "gray"
                : status === "unpaid"
                ? "darkOrange"
                : "red",
          }}
        >
          <Typography pl={2} style={{ fontSize: "18px" }}>
            {status}
          </Typography>
        </Box>
      ),
    },
  ];

  const handleRowClick = (params: any) => {
    setSelectedInvoice(params.row);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedInvoice(null);
  };

  const handleResize = (event: any, { size }: any) => {
    setDrawerWidth(size.width);
  };

  return (
    <Box style={{ height: "85vh", width: "100%", mx: "auto" }}>
      <SearchAppBar />
      <DataGrid
        checkboxSelection
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        onRowClick={handleRowClick}
      />

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        variant="persistent" // Use persistent variant to prevent overlay
        PaperProps={{
          style: { width: drawerWidth }, // Bind the width to drawerWidth state
        }}
      >
        <ResizableBox
          width={drawerWidth}
          height={Infinity}
          axis="x"
          minConstraints={[400, Infinity]} // Minimum drawer width
          maxConstraints={[1200, Infinity]} // Maximum drawer width
          onResize={handleResize}
          resizeHandles={["w"]} // Resize handle on the left side of the drawer
        >

          <Box sx={{ width: "100%",height:"100%", p: 1,mt:10,  }}>
            <IconButton onClick={handleDrawerClose} >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6">Invoice Details</Typography>
            {selectedInvoice && <Invoice />}
            {/* {selectedInvoice && <InvoiceLayout invoice={selectedInvoice} />} */}
          </Box>
        </ResizableBox>
      </Drawer>
    </Box>
  );
}
