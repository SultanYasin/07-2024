"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { userRole } from "@/lib/Sessions";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

import { DrawerHeader, Drawer } from "./components_styling/sidebar_styles";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  PeopleAltTwoToneIcon,
  ReceiptTwoToneIcon,
  PersonOutlineTwoToneIcon,
  CalendarMonthTwoToneIcon,
  HelpTwoToneIcon,
  BarChartTwoToneIcon,
  PieChartTwoToneIcon,
  TimelineTwoToneIcon,
} from "./Icons";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}
function Sidebar({ open, setOpen }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  const theme = useTheme();
  
  const handleDrawerClose = () => {
    setOpen(false);
  };


  var role = userRole;
  
 //TODO : add tasks 
  
  const arr1 = [
    {
      text: "Dashboard",
      icon: <HomeIcon />,
      path: "/",
      visible: ["MANAGER", "ADMIN"],
    },
    {
      text: "Team Management",
      icon: <PeopleAltTwoToneIcon />,
      path: "/users",
      visible: ["MANAGER", "ADMIN"],
    },
    {
      text: "Tasks",
      icon: <BarChartTwoToneIcon />,
      path: "/chart",
      visible: ["MANAGER", "ADMIN"],
    },
    {
      text: "Profile",
      icon: <PersonOutlineTwoToneIcon />,
      path: "/profile",
      visible: ["MANAGER", "ADMIN"],
    },
  ];
  const arr2 = [
    {
      text: "Invoices",
      icon: <ReceiptTwoToneIcon />,
      path: "/invoices",
      visible: ["EMPLOYEE", "MANAGER", "ADMIN"],
    },
    {
      text: "Calendar",
      icon: <CalendarMonthTwoToneIcon />,
      path: "/calendar",
      visible: ["EMPLOYEE", "MANAGER", "ADMIN"],
    },
  ];

  const arr3 = [
    {
      text: "ADMIN",
      icon: <HelpTwoToneIcon />,
      path: "/faq",
      visible: [  "ADMIN"],
    },
    {
      text: "MANAGER",
      icon: <PieChartTwoToneIcon />,
      path: "/chart/piechart",
      visible: [ "MANAGER", "ADMIN"],
    },
    {
      text: "EMPLOYEE",
      icon: <TimelineTwoToneIcon />,
      path: "/chart/linechart",
      visible: ["EMPLOYEE", "MANAGER", "ADMIN"],
    },
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
        {arr1.map(
          (item) =>
            item.visible.includes(role) && (
              <ListItem
                key={item.text}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  onClick={() => {
                    router.push(item.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      pathname === item.path
                        ? theme.palette.mode === "light"
                          ? grey[300]
                          : grey[800]
                        : null,
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
            )
        )}
      </List>

      <Divider />
      <Divider />
      <List>
        {arr2.map((item) =>  item.visible.includes(role) && ( 
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                router.push(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  pathname === item.path
                    ? theme.palette.mode === "light"
                      ? grey[300]
                      : grey[800]
                    : null,
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
        {arr3.map((item) => item.visible.includes(role) && (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              onClick={() => {
                router.push(item.path);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  pathname === item.path
                    ? theme.palette.mode === "light"
                      ? grey[300]
                      : grey[800]
                    : null,
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



