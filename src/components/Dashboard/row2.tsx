"use client";
import LineChart from "@/app/(dashboard)/chart/linechart/page";
import CustomPieChart from "@/app/(dashboard)/chart/piechart/page";

import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Row2() {
  const theme = useTheme();

  return (

  /*   <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ height: 350, maxWidth: 700, flexGrow: 1 }}>
        <Box
          sx={{
            minHeight: 650,
            minWidth: 800,
            flexGrow: 1,
          }}
        >

          <CustomPieChart />
        </Box>
      </Paper>
      <Stack direction={"row"} flexWrap={"wrap"} flex={1}>
        <Box
          sx={{
            minHeight: 650,
            minWidth: 800,
            flexGrow: 1,
          }}
        >
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            mb={1}
            mt={2}
            ml={4}
          >
            Text123
          </Typography>

          <Typography variant="body2" ml={4}>
            Text text 2024
          </Typography>

          <LineChart />
        </Box>
        <Box
          sx={{
            minHeight: 650,
            minWidth: 800,
            flexGrow: 1,
          }}
        ></Box>
      </Stack>
    </Stack> */
  );
}
