import { Route, Routes } from "react-router-dom";
import SubStudent from "./SubStudent";



export default function StudentLayout() {
    console.log('hi')
    return <>
        <Routes>
            <Route path="/*" element={<SubStudent />} />
        </Routes>

    </>
}