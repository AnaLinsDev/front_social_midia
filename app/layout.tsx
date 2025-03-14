"use client";

import "./globals.scss";
import { NavBar } from "./components/common/navbar";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <NavBar />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
