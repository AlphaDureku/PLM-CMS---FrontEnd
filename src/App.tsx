import "@mantine/core/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import LogIn from "./components/Pages/LogIn";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
