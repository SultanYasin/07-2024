import { Box, Button } from "@mui/material";

import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import Row1 from "@/components/Dashboard/row1";

import Chart from "./(dashboard)/chart/page";
export default function Home() {
  return (
    <Box height={900} width={"100%"}>
      <Box sx={{ textAlign: "right", gap: 3 }}>
        <Button variant="contained">
          <DownloadTwoToneIcon /> DOWNLOAD
        </Button>
      </Box>
      <Row1 />
      <Chart />
    </Box>
  );
}
