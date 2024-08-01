"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { PaletteMode } from "@mui/material";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import {MenuIcon,  MailIcon, SearchIcon, NotificationsIcon, Person2TwoToneIcon, DarkModeIcon, LightModeIcon,} from "./Icons";
import { Search, SearchIconWrapper, AppBar, StyledInputBase,} from "./components_styling/navbar_styles";



interface NavbarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  setMode: (mode: PaletteMode) => void;
}
function Navbar({ open, setOpen, setMode }: NavbarProps) {

  const theme = useTheme();
  const changeTheme = () => {
    const newMode = theme.palette.mode === "dark" ? "light" : "dark";
    localStorage.setItem("currentTheme", newMode);
    setMode(newMode as PaletteMode);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Management
          </Typography>
          {/* make empty space */}
          <Box flexGrow={1} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box flexGrow={1} />

          <Stack direction="row">
            <MenuItem>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <Person2TwoToneIcon />
                </Badge>
              </IconButton>

              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={0} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>
            <MenuItem>
              {theme.palette.mode === "light" ? (
                <IconButton
                  onClick={changeTheme}
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="error">
                    <LightModeIcon />
                  </Badge>
                </IconButton>
              ) : (
                <IconButton
                  onClick={changeTheme}
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={0} color="error">
                    <DarkModeIcon />
                  </Badge>
                </IconButton>
              )}
            </MenuItem>
          </Stack>
        </Toolbar>
      </AppBar>
     
    </Box>
  );
}

export default Navbar;
