import { useState } from "react";
import { useLocation } from "react-router-dom";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
export default function SubNews() {
    const childs: string[] = [
        "Announcements",
        "Newsletters",
        "Message from the University President",
        "Careers and Job Openings"
    ]

    const { pathname } = useLocation()
    const [splitPathName, setSplitPathName] = useState(pathname.split('/'))
    const directory = useDirectoryRenderer(splitPathName)
    return (<>
        <GrandChildTabLayout childs={childs} setSplitPathName={setSplitPathName} directory={directory} />
    </>)
}