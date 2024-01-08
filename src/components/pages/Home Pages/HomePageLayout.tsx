import { Route, Routes } from "react-router-dom";
import useIntersectionObserver from "../../CustomHooks/observerClass";
import HomePageFooter from "../../Home Page Components/Footer";
import HomePageNavbar from "../../Home Page Components/NavBar";
import AboutLayout from "./AboutTab/AboutLayout";
import AdmissionLayout from "./AdmissionTab/AdmissionLayout";
import Home from "./Home";
import { default as NewsLayout } from "./NewsTab/NewsLayout";

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
      <Route path="/News/*" element={<NewsLayout />} />
      <Route path="/About/*" element={<AboutLayout />} />
      <Route path="/Admission/*" element={<AdmissionLayout />} />

    </Routes>
    <HomePageFooter />
  </>)
}