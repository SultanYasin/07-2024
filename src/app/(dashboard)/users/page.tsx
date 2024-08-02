"use client";
import React from "react";
import { DataGrid, GridRowsProp, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { rows } from "./MockingData";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import SupervisorAccountTwoToneIcon from "@mui/icons-material/SupervisorAccountTwoTone";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";

export default function Users() {
  const theme = useTheme();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "NAME", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },
    { field: "department", headerName: "DEPARTMENT", flex: 1 },
    { field: "job_title", headerName: "TITLE", flex: 1 },
    {
      field: "access",
      headerName: "ACCESS LEVEL",
      width: 190,
      renderCell: ({ row: { access } }) => {
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
                access === "admin"
                  ? "gray"
                  : access === "manager"
                  ? "darkgray"
                  : "silver",
            }}
          >
            {access === "admin" && <AdminPanelSettingsTwoToneIcon />}
            {access === "manager" && <SupervisorAccountTwoToneIcon />}
            {access === "user" && <LockPersonTwoToneIcon />}

            <Typography pl={2} style={{ fontSize: "18px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ height: "85vh", width: "100%", mx: "auto" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar,}}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}
