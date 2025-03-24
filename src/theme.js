import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = () => ({
 primary: {
    100: "#d0d1d5",
    200: "#a1a4ab",
    300: "#727681",
    400: "#0d1414",
    500: "#0d1414",
    600: "#101624",
    700: "#cf1430",
    800: "#7f8383",
    900: "#ffffff",
  },
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {

            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.primary[500],
            },
            neutral: {
              dark: colors.primary[700],
              main: colors.primary[500],
              light: colors.primary[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.primary[500],
            },
            neutral: {
              dark: colors.primary[700],
              main: colors.primary[500],
              light: colors.primary[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },

      span: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 18,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode] = useState("dark");

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme];
};
