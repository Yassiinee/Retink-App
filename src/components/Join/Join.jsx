import React from "react";
import {
  CssBaseline,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";

import Employees from "./Employees";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#f4f5fd",
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

function Join() {
  return (
      <>
    <ThemeProvider theme={theme}>
      <div>
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
      </>
  );
}

export default Join;
