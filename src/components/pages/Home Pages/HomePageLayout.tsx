import { Route, Routes } from "react-router-dom";
import HomePageFooter from "../../Home Page Components/Footer";
import HomePageNavbar from "../../Home Page Components/NavBar";
import Home from "./Home";
import News from "./News";

export default function HomePageLayout() {
  const [directory, setDirectory] = useState<string[]>([])

  return (<>
     <HomePageNavbar />  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/News" element={<News />} />
    </Routes>
    <HomePageFooter />
  </>)
}