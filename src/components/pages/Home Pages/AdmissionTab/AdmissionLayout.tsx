import { Route, Routes } from "react-router-dom";
import SubAdmission from "./SubAdmission";



export default function AdmissionLayout() {

    return <>
        <Routes>
            <Route path="/*" element={<SubAdmission />} />
        </Routes>

    </>
}