import { Box, Button } from "@mui/material";

import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import Row1 from "@/components/Dashboard/row1";

import Chart from "./(dashboard)/chart/page";
import EventCalendar from "@/components/Dashboard/EventCalendar";
export default function Home() {
  return (
    <Box height={"60vh"} width={"100%"} style={{ display: "flex" }}>
      <Box width={"70%"}>
        <Row1 />
        <Chart />
      </Box>
      <Box flexGrow={1} />
      <Box width={"30%"} style={{ display: "flex", paddingLeft: "2%" }}>
        <EventCalendar />
      </Box>
    </Box>
  );
}


