"use client";
import EventCalendar from "@/components/Dashboard/EventCalendar";
import UseAuth from "@/app/auth/useAuth";
import { Box } from "@mui/material";

const AdminPage = () => {
  const isLogin = UseAuth();

  return(
    <h2>this is the admin1 dashboard</h2>
  )
  
  
  
  /*  isLogin ? (
    <Box height={"60vh"} width={"100%"} style={{ display: "flex" }}>
      <Box width={"70%"}>
        <p>here I can render things related to the admin </p>
      </Box>
      <Box flexGrow={1} />
      <Box width={"30%"} style={{ display: "flex", paddingLeft: "2%" }}>
        <EventCalendar />
      </Box>
    </Box>
  ) : (
    <h2 style={{ transform: "translate(30%, 50%)" }}>
      you need to be admin to access this page
    </h2>
  ); */
};

export default AdminPage;
