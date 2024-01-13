import { Route, Routes } from "react-router-dom";
import SubAdmission from "./SubAdmission";
import SubCampus from "./SubCampus";



export default function CampusLayout() {

    return <>
        <Routes>
            <Route path="/*" element={<SubCampus />} />
        </Routes>

    </>
}