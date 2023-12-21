import { Route, Routes } from "react-router-dom";
import SubAbout from "./SubAbout";




export default function AboutLayout() {

    return <>
        <Routes>
            <Route path="/University" element={<SubAbout />} />
        </Routes>

    </>
}