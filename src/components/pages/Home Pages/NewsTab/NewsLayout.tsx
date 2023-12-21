import { Route, Routes } from "react-router-dom";
import News from "./News";
import SubNews from "./SubNews";



export default function NewsLayout() {

    return <>
        <Routes>
            <Route path="/" element={<News />} />
            <Route path="/*" element={<SubNews />} />
        </Routes>

    </>
}