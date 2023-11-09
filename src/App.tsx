import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CMS from "./components/pages/CMS Pages/CMS";
import Home from "./components/pages/Home Pages/Home";
import TestSite from "./components/pages/TestSite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cms/*" element={<CMS />} />
          <Route path="/TestSite" element={<TestSite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
