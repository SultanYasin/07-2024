"use client";
import React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { rows } from "./MockingData";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import SupervisorAccountTwoToneIcon from '@mui/icons-material/SupervisorAccountTwoTone';
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";

export default function Users() {
  const theme = useTheme();

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 80 },
    { field: "name", headerName: "NAME", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },
    { field: "department", headerName: "DEPARTMENT", flex: 1 },
    { field: "job_title", headerName: "TITLE", flex: 1 },
    {
      field: "col6",
      headerName: "ACCESS LEVEL",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "1px",
              textAlign: "center",
              display: "flex",
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

            <Typography pl={2}> {access} </Typography>
          </Box>
        );
      },
    },
  ];


  return (
<div style={{ height: 750, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
  
  );
}
