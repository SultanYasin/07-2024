import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button } from "@mui/material";
import DownloadForOfflineTwoToneIcon from "@mui/icons-material/DownloadForOfflineTwoTone";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import Row1 from "@/components/Dashboard/row1";
export default function Home() {
  return (
    <div>
      <Box sx={{ textAlign: "right", gap: 3 }}>
        <Button variant="contained">
          <DownloadTwoToneIcon /> DOWNLOAD
        </Button>
      </Box>

      <Row1/>

    </div>
  );
}
