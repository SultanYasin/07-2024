"use client";
import CustomPieChart from "@/app/(dashboard)/chart/piechart/page";
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

export default function Row2() {
  const theme = useTheme();

  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper sx={{ maxWidth: 900, flexGrow: 1 }}>
        <CustomPieChart />
      </Paper>
      <Stack direction={"row"} flexWrap={"wrap"}>
        <Box sx={{height:350, border:"1px solid white"}} >
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
            999
          </Typography>
        </Box>
      </Stack>
    </Stack>
  );
}
