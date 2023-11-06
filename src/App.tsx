import "@mantine/core/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/Login" element = {<LogIn/>}/>
       </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
