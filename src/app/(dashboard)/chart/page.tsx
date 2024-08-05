"use client"

import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
function Chart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      {" "}
      <div style={{ width: "100%" }}>
        <h4>A demo of synchronized AreaCharts</h4>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Brush />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Chart


/* 

import React from 'react'

import { PieChart } from "@mui/x-charts/PieChart";
import { Box } from '@mui/material';
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarChart } from "@mui/x-charts/BarChart";
import { BarPlot } from "@mui/x-charts/BarChart";
import Stack from "@mui/material/Stack";
import { Gauge } from "@mui/x-charts/Gauge";


export default function BasicPie() {
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  "Page A",
  "Page B",
  "Page C",
  "Page D",
  "Page E",
  "Page F",
  "Page G",
];

  return (
    <Box>
      <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, md: 3 }}>
        <Gauge width={100} height={100} value={50} />
        <Gauge
          width={100}
          height={100}
          value={50}
          valueMin={10}
          valueMax={60}
        />

        <Gauge
          value={75}
          startAngle={0}
          endAngle={360}
          innerRadius="80%"
          outerRadius="100%"
          valueMin={10}
          valueMax={60}
          // ...
        />
        <Gauge
          value={75}
          startAngle={0}
          endAngle={360}
          innerRadius="80%"
          outerRadius="100%"
          valueMin={10}
          valueMax={60}
          // ...
        />
        <Gauge
          value={75}
          startAngle={0}
          endAngle={360}
          innerRadius="80%"
          outerRadius="100%"
          valueMin={10}
          valueMax={60}
          // ...
        />
      </Stack>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />

      <ChartContainer
        width={500}
        height={300}
        series={[{ data: uData, label: "uv", type: "bar" }]}
        xAxis={[{ scaleType: "band", data: xLabels }]}
      >
        <BarPlot />
      </ChartContainer>
      <BarChart
        width={500}
        height={300}
        series={[
          { data: pData, label: "pv", id: "pvId" },
          { data: uData, label: "uv", id: "uvId" },
        ]}
        xAxis={[{ data: xLabels, scaleType: "band" }]}
      />
    </Box>
  );
}
 */