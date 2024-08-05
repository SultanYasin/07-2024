"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Divider } from "@mui/material";
import { AlignHorizontalCenter, AlignVerticalCenter } from "@mui/icons-material";

export function BasicDatePicker() {
  return (
    <Box sx={{
      "& .MuiTextField-root": { mt: -1, width: "47ch" },
    }} >

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker label="Date of birth" />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
  );
}

export default function Profile() {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "100%",
      }}
    >
      <h1>Personal Information</h1>
      <Box sx={{ gap: 2, width: "70%", mb: 2 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
        />
      </Box>
      <Box sx={{ gap: 2, width: "70%", mb: 2 }} style={{ display: "flex",alignItems:"center", justifyContent:"center" }}>
        <TextField
          sx={{ flex: 1 }}
          id="outlined-basic"
          label="Address"
          variant="outlined"
        />
        <BasicDatePicker />
      </Box>
      <Box sx={{ gap: 2, width: "70%", mb: 2 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          
        />
      </Box>

      <Box sx={{ gap: 2, width: "70%", mb: 2 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
        />
      </Box>
    </Box>
  );
}
