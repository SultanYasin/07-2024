import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import DownloadForOfflineTwoToneIcon from "@mui/icons-material/DownloadForOfflineTwoTone";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import Row1 from "@/components/Dashboard/row1";
import CustomPieChart from "./(dashboard)/chart/piechart/page";
import LineChart from "./(dashboard)/chart/linechart/page";
import Row2 from "@/components/Dashboard/row2";
export default function Home() {
  return (
    <Box height={900} width={"100%"}>
      <Box sx={{ textAlign: "right", gap: 3 }}>
        <Button variant="contained">
          <DownloadTwoToneIcon /> DOWNLOAD
        </Button>
      </Box>

      <Row1 />
      <Row2 />

    </Box>
  );
}
