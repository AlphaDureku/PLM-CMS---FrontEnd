import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import TestSite from "./components/pages/TestSite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LogIn />} />
          <Route path="/TestSite" element={<TestSite />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
