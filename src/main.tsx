import { MantineProvider, createTheme } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/HomePageStyling.css";
import "./assets/LogInPageStyling.css";
import "./assets/ReusableComponentsStyling.css";
import "./index.css";

const theme = createTheme({});

const rootElement = document.getElementById("root");


ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
} 