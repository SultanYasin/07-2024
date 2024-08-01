"use client";
import React from "react";
import { useRouter } from "next/navigation";

import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

import {DrawerHeader, Drawer, closedMixin, openedMixin } from './components_styling/sidebar_styles'


import {ChevronLeftIcon,ChevronRightIcon,HomeIcon,PeopleAltTwoToneIcon,ContactsTwoToneIcon,ReceiptTwoToneIcon,
PersonOutlineTwoToneIcon,CalendarMonthTwoToneIcon,HelpTwoToneIcon,BarChartTwoToneIcon,PieChartTwoToneIcon,
TimelineTwoToneIcon,} from "./Icons";





interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
function Sidebar({ open, setOpen }: SidebarProps) {
  const router = useRouter();
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const arr1 = [
    { text: "Dashboard", icon: <HomeIcon />, path: "/" },
    { text: "Team Management", icon: <PeopleAltTwoToneIcon />, path: "/users" },
    { text: "Invoices", icon: <ReceiptTwoToneIcon />, path: "/invoices" },
  ];
  const arr2 = [
    { text: "Profile", icon: <PersonOutlineTwoToneIcon />, path: "/profile" },
    { text: "Calendar", icon: <CalendarMonthTwoToneIcon />, path: "/calendar" },
    { text: "FAQ", icon: <HelpTwoToneIcon />, path: "/faq" },
  ];

  const arr3 = [
    { text: "Bar Chart", icon: <BarChartTwoToneIcon />, path: "/chart" },
    { text: "Pie Chart", icon: <PieChartTwoToneIcon />, path: "/chart" },
    { text: "Line Chart", icon: <TimelineTwoToneIcon />, path: "/chart" },

  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Avatar
        sx={{
          mx: "auto",
          height: open ? 80 : 45,
          width: open ? 80 : 45,
          my: 2,
          border: "2px solid silver",
          transition: "0.25s",
        }}
        alt="Remy Sharp"
        src="https://th.bing.com/th/id/OIP.XpEhDSbIbTzkvCGO6fHI3gHaFj?w=249&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7"
      />
      <Typography
        align="center"
        sx={{
          fontSize: open ? 18 : 0,
          transition: "0.50s",
          color: theme.palette.info.main,
        }}
      >
        user
      </Typography>
      <Typography
        align="center"
        sx={{ fontSize: open ? 18 : 0, transition: "0.50s" }}
      >
        test
      </Typography>

      <Divider />
      <Divider />

      <List>
        {arr1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                router.push(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <Divider />
      <List>
        {arr2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                router.push(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <Divider />
      <List>
        {arr3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                router.push(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <Divider />
    </Drawer>
  );
}

export default Sidebar;
