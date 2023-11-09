import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import LogIn from "./components/Pages/LogIn";
import TestSite from "./components/Pages/TestSite";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/TestSite" element={<TestSite />} />
          <Route path="/Login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
