import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import {  SearchIcon } from "@/components/Icons";
import { Button } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { userRole } from "@/lib/Sessions";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({id}: {id:number}) {
  const router = useRouter();
  const pathname = usePathname(); 

    const handleButtonClick = () => {
      if (pathname.includes("invoice")) {
        router.push(`/invoices/newInvoice`);
      } else if (pathname.includes("users")) {
        router.push(`/profile`);
      }
    };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {(userRole === "ADMIN" || userRole === "MANAGER") && (
            <Button onClick={() => handleButtonClick()} variant="contained">
              Add New
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
