import { Route, Routes } from "react-router-dom";
import SubAlumni from "./SubAlumni";
import SubStudent from "./SubStudent";



export default function AlumniLayout() {
    return <>
        <Routes>
            <Route path="/*" element={<SubAlumni />} />
        </Routes>

    </>
}