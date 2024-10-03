"use client";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";
import { Box } from "@mui/material";
import EventsAccordions from "./Accordion";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Paper from "@mui/material/Paper";


const EventCalendar = () => {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "93vh", }}>
      <Paper
        elevation={5}
        style={{
          height: "22vh",
          borderRadius: "8px",
          boxShadow:
            "0 4px 20px rgba(255, 255, 255, 0.1), 0 5px 30px rgba(255, 255, 255, 0.2)",
        }}
      >
        <div style={{ width: "100%", height: "100%" }}>
          <Calendar onChange={onChange} value={value} />
        </div>
      </Paper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "70vh",
          paddingBottom: "1vh",
        }}
      >
        {/* ____________BOX 1 _______________ */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "33vh",

            borderRadius: "8px",
            boxShadow: "0 10px 15px rgba(255, 255, 255, 0.2)",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", }}>
            <h2  >Events</h2>
            <Button>
              <AddCircleIcon
                fontSize="large"
                sx={{ width: 40, height: 40 }}
                onClick={() => console.log("add event")}
              />
            </Button>
          </Box>
          <div style={{ overflowY: "auto", paddingBottom: "15px" }}>
            <EventsAccordions />
          </div>
        </Box>
  

        {/* ____________BOX 2 _______________ */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "33vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <h2>TODO LIST</h2>
            <Button>
              <AddCircleIcon
                fontSize="large"
                sx={{ width: 40, height: 40 }}
                onClick={() => console.log("add event")}
              />
            </Button>
          </Box>
          <div style={{ overflowY: "auto" }}>
            <EventsAccordions />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default EventCalendar;
