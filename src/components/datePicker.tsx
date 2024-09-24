import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState, useEffect } from 'react';

export default function BasicDatePicker() {

  const [selectedDate, setSelectedDate] = useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          selected={selectedDate}
          onChange={(date)=>setSelectedDate(date)}
          dateFormat="Pp"
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
