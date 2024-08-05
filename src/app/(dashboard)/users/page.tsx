"use client";
import React, { useState } from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { rows } from "./MockingData";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import SupervisorAccountTwoToneIcon from "@mui/icons-material/SupervisorAccountTwoTone";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";

import { useRouter } from "next/navigation";
import { rows as initialRows } from "./MockingData"; // Import the initial list of users



export default function Users() {
    const [userRows, setUserRows] = useState<GridRowsProp>(initialRows);

    const router = useRouter();

    const handleEdit = (id: number) => {
      console.log(`Edit user with id: ${id}`);
    /* router.push(`/users/${id}/profile`) */
    };


  const handleDelete = (id: number) => {
    console.log(`Delete user with id: ${id}`);
    // Filter out the user with the given id
    const updatedRows = userRows.filter((row) => row.id !== id);
    setUserRows(updatedRows); 
  };




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
    {
      field: "action",
      headerName: "ACTION",
      headerAlign:"center",
    align:"center",
      flex: 1,
      renderCell: (params) => {
        const { id } = params.row;

        return (
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab aria-label="add" size="small" onClick={() => handleDelete(id)}>
              <DeleteIcon />
            </Fab>
            <Fab aria-label="edit" size="small" onClick={() => handleEdit(id)}>
              <EditIcon />
            </Fab>
          </Box>
        );
      },
    },
  ];

  return (
    <Box style={{ height: "85vh", width: "100%", mx: "auto" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={userRows}
        columns={columns}
      />
    </Box>
  );
}
