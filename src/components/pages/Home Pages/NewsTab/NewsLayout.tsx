import { Route, Routes } from "react-router-dom";
import Announcements from "./Annoucements";
import News from "./News";



export default function NewsLayout() {

    return <>
        <Routes>
            <Route path="/" element={<News />} />
            <Route path="/Announcements" element={<Announcements />} />
        </Routes>

    </>
}