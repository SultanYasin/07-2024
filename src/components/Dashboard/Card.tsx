
import React from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

// Define the interface for the component props
interface CardProps {
  icon: SvgIconComponent;
  primaryText: string;
  secondaryText: string;
  chart: React.ElementType;
  chartValue: number | string;
  chartProps?: Record<string, unknown>; // Optional additional props for the chart
  value: number | string;
  percentageChange: string;
}

const Card: React.FC<CardProps> = ({
  icon: Icon, // Renaming to Icon to use it as a component
  primaryText,
  chart: Chart, // Renaming to Chart to use it as a component
  chartValue,
  chartProps,
  value,
  percentageChange,
}) => {
  return (
    <Box>
      <Paper
        sx={{
          minWidth: "350px",
          p: 1.5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack gap={1}>
          <Icon />
          <Typography variant="body2" sx={{ color: "white" }}>
            {value}
          </Typography>
          <Typography variant="body2" sx={{ color: "white" }}>
            {primaryText}
          </Typography>
        </Stack>

        <Stack
          alignItems={"center"}
          gap={1}
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <Chart width={80} height={80} value={chartValue} {...chartProps} />
          <Typography variant="body2" sx={{ color: "white" }}>
            {percentageChange}
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Card;
