import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/HomePageStyling.css";
import "./assets/ReusableComponentsStyling.css";
import "./assets/LogInPageStyling.css";


import "./index.css";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
