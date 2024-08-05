"use client";
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import { Gauge } from "@mui/x-charts/Gauge";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function Row1() {
  function Card() {
   
  }

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={2}
      justifyContent={{ xs: "center", sm: "space-between" }}
    >

      <Paper
        sx={{
          minWidth: "350px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack gap={1}>
          <MarkEmailReadIcon />
          <Typography variant="body2" sx={{ color: "white" }}>
            10
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            SENT
          </Typography>
        </Stack>

        <Stack
          alignItems={"center"}
          gap={1}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <Gauge width={80} height={80} value={10} />
          <Typography variant="body2" sx={{ color: "white" }}>
            +13%
          </Typography>
        </Stack>
      </Paper>

      <Paper
        sx={{
          minWidth: "350px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack gap={1}>
          <MarkEmailReadIcon />
          <Typography variant="body2" sx={{ color: "white" }}>
            10
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            SENT
          </Typography>
        </Stack>

        <Stack
          alignItems={"center"}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <Gauge width={80} height={80} value={20} />
          <Typography variant="body2" sx={{ color: "white" }}>
            +9%
          </Typography>
        </Stack>
      </Paper>

      <Paper
        sx={{
          minWidth: "350px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack gap={1}>
          <MarkEmailUnreadIcon />
          <Typography variant="body2" sx={{ color: "white" }}>
            13
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            13
          </Typography>
        </Stack>

        <Stack
          alignItems={"center"}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <Gauge width={80} height={80} value={70} />
          <Typography variant="body2" sx={{ color: "white" }}>
            +2%
          </Typography>
        </Stack>
      </Paper>

      <Paper
        sx={{
          minWidth: "350px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack gap={1}>
          <MarkEmailUnreadIcon />
          <Typography variant="body2" sx={{ color: "white" }}>
            13
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            13
          </Typography>
        </Stack>

        <Stack
          alignItems={"center"}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <Gauge width={70} height={70} value={80} />
          <Typography variant="body2" sx={{ color: "white" }}>
            +7%
          </Typography>
        </Stack>
      </Paper>
    </Stack>
  );
}

export default Row1;
