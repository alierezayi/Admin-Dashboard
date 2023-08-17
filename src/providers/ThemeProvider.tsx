// app/ThemeRegistry.tsx
"use client";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { Box, IconButton } from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";

interface Props {
  options: {
    key: string;
  };
  children: React.ReactNode;
}

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const ThemeRegistry = ({ options, children }: Props) => {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  
  const darkThemeChosen = React.useMemo(
    () =>
        createTheme({
            ...darkTheme
        }),
    [mode],
)
const lightThemeChosen = React.useMemo(
    () =>
        createTheme({
            ...lightTheme,
        }),
    [mode],
)
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === 'dark' ? darkThemeChosen : lightThemeChosen}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeRegistry;
