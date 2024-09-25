"use client";
import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import MenuItem from "@mui/material/MenuItem";
import { Button, Icon } from "@mui/material";
import AdminPanelSettingsTwoToneIcon from "@mui/icons-material/AdminPanelSettingsTwoTone";
import SupervisorAccountTwoToneIcon from "@mui/icons-material/SupervisorAccountTwoTone";
import LockPersonTwoToneIcon from "@mui/icons-material/LockPersonTwoTone";

export function FormControlLabelPlacement() {
  return (
    <FormControl>
      <FormLabel id="demo-form-control-label-placement">
        Label placement
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-form-control-label-placement"
        name="position"
        defaultValue="top"
      >
        <FormControlLabel
          value="top"
          control={<Radio />}
          label="Top"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio />}
          label="Bottom"
          labelPlacement="bottom"
        />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
  );
}

export function BasicDatePicker() {
  return (
    <Box
      sx={{
        "& .MuiTextField-root": { width: "100%" },
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Date of birth" />
        </DemoContainer>
      </LocalizationProvider>
    </Box>
  );
}

export default function Profile() {
  ///add each field title & type
  type Inputs = {
    Full_Name: string;
    phoneNumber: number;
    exampleRequired: string;
  };

  const {register,handleSubmit,watch,formState: { errors },  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    console.log("DATA ::::" + data);

  // watch input value by passing the name of it
  console.log(watch("Full_Name")); 

  const Role = [
    {
      value: "Admin",
      label: "Admin",
      icon: <AdminPanelSettingsTwoToneIcon />,
    },
    {
      value: "Manager",
      label: "Manager",
      icon: <SupervisorAccountTwoToneIcon />,
    },
    {
      value: "User",
      label: "User",
      icon: <LockPersonTwoToneIcon />,
    },
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        width: "90%",
        maxWidth: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* //TODO */}
      {/*       <Box width={"30%"}>

      <Image
        src="/register.png"
        width={1000}
        height={1000}
        alt="user"
        className=""
        />
        </Box> */}
      <h1>Personal Information</h1>
      <Box sx={{ gap: 2, width: "70%", mb: 3 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          type="string"
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          {...register("Full_Name", {
            required: true,
            maxLength: 40,
            minLength: 4,
            pattern: /^[A-Za-z]+$/i,
          })}
          error={Boolean(errors.Full_Name)}
          helperText={Boolean(errors.Full_Name) ? "Required" : null}
        />
      </Box>

      <Box sx={{ gap: 2, width: "70%", mb: 3 }} style={{ display: "flex" }}>
        <Box sx={{ flex: 1 }}>
          <BasicDatePicker format="DD-MM-YYYY" />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <FormControl>
            <FormLabel id="demo-form-control-label-placement">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="Male"
                control={<Radio />}
                label="Male"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Female"
                control={<Radio />}
                label="Female"
                labelPlacement="start"
              />
              <FormControlLabel
                value="Animal"
                control={<Radio />}
                label="Animal"
                labelPlacement="start"
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          gap: 2,
          width: "70%",
          height: "60px",
          mb: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* First TextField with flex: 1 */}
        <TextField
          type="number"
          sx={{ flex: 1 }}
          id="outlined-basic"
          label="Social Security Number"
          variant="outlined"
          error={false}
        />

        {/* Second TextField wrapped in a Box, with flex: 1 */}
        <Box sx={{ flex: 1 }} autoComplete="off">
          <div>
            <TextField
              id="outlined-select-currency"
              select
              label="ROLE"
              defaultValue="EUR"
              fullWidth
              error={false}
            >
              {Role.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {option.icon} {option.label}
                  </Box>
                </MenuItem>
              ))}
            </TextField>
          </div>
        </Box>
      </Box>

      <Box sx={{ gap: 2, width: "70%", mb: 2 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          error={false}
          helperText=""
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          error={false}
          helperText=""
        />
      </Box>

      <Box sx={{ gap: 2, width: "70%", mb: 6 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Address1"
          variant="outlined"
          error={false}
          helperText=""
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Address2"
          variant="outlined"
        />
      </Box>
      <h2>Medical Information</h2>
      <Box sx={{ gap: 2, width: "70%", mb: 3 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Insurance Provider"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Insurance number"
          variant="outlined"
        />
      </Box>
      <h4>Emergency contact number</h4>
      <Box sx={{ gap: 2, width: "70%", mb: 2 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Emergency Person"
          variant="outlined"
          error={false}
          helperText=""
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Phone number"
          variant="outlined"
          error={false}
          helperText=""
        />
      </Box>
      <Box sx={{ gap: 2, width: "70%", mb: 2 }} style={{ display: "flex" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Current medication"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Insurance number"
          variant="outlined"
        />
      </Box>
      <Box sx={{ gap: 2, width: "70%", mb: 3 }} style={{ display: "flex" }}>
        <Button type="submit" variant="contained" fullWidth sx={{fontSize:"1.2em"}} onClick={()=>console.log("submitted")} >
          SUBMIT
        </Button>
      </Box>
    </Box>
  );
}
