// import { Image } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import "../../../assets/CMSLayoutStyling.css";
import "../../../assets/HamburgerButton.css";

import Layout from "./Layout";
import Login from "./LogIn";

export default function CMS() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Layout />} />
    </Routes>
  );
}