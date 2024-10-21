import EventCalendar from "@/components/Dashboard/EventCalendar";
import { Box } from "@mui/material";

const ManagerPage = () => {
  return (
    <Box height={"60vh"} width={"100%"} style={{ display: "flex" }}>
      <Box width={"70%"}>
        <p>here I can render things related to the MANAGER </p>
      </Box>
      <Box flexGrow={1} />
      <Box width={"30%"} style={{ display: "flex", paddingLeft: "2%" }}>
        <EventCalendar />
      </Box>
    </Box>
  )
}

export default ManagerPage




