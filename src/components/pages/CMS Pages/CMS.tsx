import { useMediaQuery } from '@mantine/hooks';
import { Route, Routes } from "react-router-dom";
import "../../../assets/CMSLayoutStyling.css";
import "../../../assets/HamburgerButton.css";
import Content from "./Layout";
import Login from "./LogIn";

export default function CMS() {
  const isWideScreen = useMediaQuery("(min-width: 1250px)");

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isWideScreen ? (
            <Login />
          ) : (
            <div className='mobileresCMS'>Please Resize Window to see the full display</div>
          )
        }
      />
      <Route
        path="/playground"
        element={
          isWideScreen ? (
            <Content />
          ) : (
            <div className='mobileresCMS'>Please Resize Window to see the full display</div>
          )
        }
      />
    </Routes>
  );
}
