"use client";
import React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { rows } from "./MockingData";
import DangerousTwoToneIcon from "@mui/icons-material/DangerousTwoTone";
import ReportTwoToneIcon from "@mui/icons-material/ReportTwoTone";
import RunningWithErrorsTwoToneIcon from "@mui/icons-material/RunningWithErrorsTwoTone";
import GradingTwoToneIcon from "@mui/icons-material/GradingTwoTone";



export default function Users() {
  const theme = useTheme();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 120 },
    { field: "name", headerName: "NAME", flex: 1 },
    { field: "vendor", headerName: "VENDOR", flex: 1 },
    { field: "cost", headerName: "COST", flex: 1 },
    { field: "end_date", headerName: "END DATE", flex: 1 },
    {
      field: "status",
      headerName: "STATUS",
      width: 190,
      headerAlign:"center",
      renderCell: ({ row: { status } }) => {
        return (
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
            {status === "paid" && <GradingTwoToneIcon />}
            {status === "unpaid" && <ReportTwoToneIcon />}
            {status === "overdue" && <DangerousTwoToneIcon />}

            <Typography pl={2} style={{ fontSize: "18px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ height: "85vh", width: "100%", mx: "auto" }}>
      <DataGrid
      checkboxSelection
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}
