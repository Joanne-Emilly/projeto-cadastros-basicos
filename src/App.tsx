import { Outlet } from "react-router-dom";
import { LightTheme } from "./shared/themes";
import { ThemeProvider } from "@emotion/react";
import { Button } from "@mui/material";

const App = () => {
  return (
    <>
      <ThemeProvider theme={LightTheme} children={undefined}>
        {}
      </ThemeProvider>
      <Button variant="contained">TEST</Button>

      <Outlet />
    </>
  );
};

export default App;
