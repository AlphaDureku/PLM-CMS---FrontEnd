import { Route, Routes } from "react-router-dom";
import useIntersectionObserver from "../../CustomHooks/observerClass";
import HomePageFooter from "../../Home Page Components/Footer";
import HomePageNavbar from "../../Home Page Components/NavBar";
import Home from "./Home";
import News from "./News";

export default function HomePageLayout() {
  useIntersectionObserver([
    { selector: ".hidden", additionalClass: "show" },
    { selector: ".left", additionalClass: "slideFromLeft" },
    { selector: ".top", additionalClass: "slideFromTop" },
    { selector: ".bottom", additionalClass: "slideFromBottom" },
    { selector: ".right", additionalClass: "slideFromRight" },
  ]);

  return (<>
    <HomePageNavbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/News" element={<News />} />
    </Routes>
    <HomePageFooter />
  </>)
}