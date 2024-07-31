"use client";
import * as React from "react";

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "@/app/theme";
import { PaletteMode } from "@mui/material";

export default function Home() {
  React.useEffect(() => {
    /*  check if the code is running in a browser environment before accessing localStorage.
    Only access localStorage on the client, as window is also only available in the browser.*/
    const storedMode =
      typeof window !== "undefined"
        ? localStorage.getItem("currentTheme")
        : null;
    if (storedMode) {
      setMode(storedMode as PaletteMode);
    }
  }, []);

  // Update the theme only if the mode changes
  const [mode, setMode] = React.useState<PaletteMode>("dark");
  const [open, setOpen] = React.useState(false);
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <main className={styles.main}>
        <Navbar setMode={setMode} open={open} setOpen={setOpen} />
        <Sidebar open={open} setOpen={setOpen} />
      </main>
    </ThemeProvider>
  );
}
