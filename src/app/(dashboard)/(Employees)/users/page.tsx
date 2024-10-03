"use client";
import React, { useState } from "react";
import { DataGrid, GridRowsProp } from "@mui/x-data-grid";
import { GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

import {
  AdminPanelSettingsTwoToneIcon,
  LockPersonTwoToneIcon,
} from "@/components/Icons";
import { EditIcon, SupervisorAccountTwoToneIcon } from "@/components/Icons";

import Fab from "@mui/material/Fab";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import { rows as initialRows } from "./MockingData"; // Import the initial list of users
import SearchAppBar from "@/components/SearchAppBar";

export default function Users() {
  const [userRows, setUserRows] = useState<GridRowsProp>(initialRows);
  const [open, setOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const router = useRouter();

  const openModal = (id: any) => {
    setItemToDelete(id);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setItemToDelete(null);
  };

  const handleEdit = (id: number) => {
    console.log(`Edit user with id: ${id}`);
    router.push(`/users/user/${id}`);
  };

  const handleDelete = () => {
    itemToDelete !== null
      ? setUserRows(userRows.filter((row) => row.id !== itemToDelete))
      : console.log("item not found");

    closeModal();
  };

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
              /*  backgroundColor:
                access === "admin"
                  ? "gray"
                  : access === "manager"
                  ? "darkgray"
                  : "silver", */
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography pl={2} style={{ fontSize: "18px" }}>
                {access}
              </Typography>
              {access === "admin" && <AdminPanelSettingsTwoToneIcon />}
              {access === "manager" && <SupervisorAccountTwoToneIcon />}
              {access === "user" && <LockPersonTwoToneIcon />}
            </Box>
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "ACTION",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => {
        const { id } = params.row;

        return (
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <Fab aria-label="add" size="small" onClick={() => openModal(id)}>
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
    <Box
      style={{ height: "87vh", width: "100%", mx: "auto", scrollX: "hidden" }}
    >
      <SearchAppBar id={1} />
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={userRows}
        columns={columns}
      />
      {open && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "30%",
            height: "20%",
            border: "1px solid blue",
            transform: "translate(-50%, -50%)",
            backgroundColor: "whitesmoke",
            color: "black",
            justifyContent: "center",
            alignItems: "center",
            opacity: "90%",
            borderRadius: "20px  ",
          }}
        >
          <div>are u sure nigga ?</div>
          <div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={() => setOpen(false)}>Regret</button>
          </div>
        </div>
      )}
    </Box>
  );
}
