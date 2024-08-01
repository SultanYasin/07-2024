"use client";

import * as React from "react";
import { useState, useEffect, useMemo } from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getDesignTokens } from "@/app/theme";
import { PaletteMode } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
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
  const [mode, setMode] = useState<PaletteMode>("dark");
  const [open, setOpen] = useState(false);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <Navbar setMode={setMode} open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
        </ThemeProvider>

        {children}
      </body>
    </html>
  );
}
