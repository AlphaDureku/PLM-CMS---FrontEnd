// import { Image } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import "../../../assets/CMSLayoutStyling.css";
import "../../../assets/HamburgerButton.css";

import Content from "./Layout";
import Login from "./LogIn";

export default function CMS() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/playground" element={<Content />} />
    </Routes>
  );
}
