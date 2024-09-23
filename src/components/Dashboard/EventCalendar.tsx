"use client";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";
import { Box } from "@mui/material";
import EventsAccordions from "./Accordion";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const EventCalendar = () => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "85vh" }}>
      <div style={{ height: "38vh", width: "100%" }}>
        <Calendar onChange={onChange} value={value}  />
      </div>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Events</h1>
        <Button>
          <AddCircleIcon
            fontSize="large"
            sx={{ width: 50, height: 50 }}
            onClick={() => console.log("add event")}
          />
        </Button>
      </Box>
      <div style={{ overflowY: "auto", height: "50vh",}}>
        <EventsAccordions />
      </div>
    </div>
  );
};

export default EventCalendar;
