import { useState } from "react";
import { useLocation } from "react-router-dom";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
export default function SubAbout() {
    const childs: string[] = [
        "University",
        "Administration",
        "Pride Hall",
    ]

    const { pathname } = useLocation()
    const [splitPathName, setSplitPathName] = useState(pathname.split('/'))
    const directory = useDirectoryRenderer(splitPathName)
    console.log(splitPathName)
    return (<>
        <GrandChildTabLayout childs={childs} setSplitPathName={setSplitPathName} directory={directory} />
    </>)
}