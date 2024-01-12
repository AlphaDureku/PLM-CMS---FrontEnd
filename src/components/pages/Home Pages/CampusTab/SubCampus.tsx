import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
import BodyCampus_Events from "./BodyCampusEvents";
import BodyMap from "./BodyMap";


export default function SubCampus() {

    console.log(NavBarDataBottom)
    const { pathname } = useLocation();
    const [data, setData] = useState < any > ("");
    const [splitPathName, setSplitPathName] = useState(pathname.split("/"));
    const childs = NavBarDataBottom[3]?.Child.map((obj) => obj.text) as string[];
    let tabHeader: string | undefined = "Admission";




    const directory = useDirectoryRenderer(splitPathName);
    const indexOfLastPathSegment = childs
        .map((child: string) => child)
        .indexOf(
            decodeURIComponent(window.location.pathname)
                .split("/")
                .filter((part) => part.trim() !== "")
                .pop() ?? ""
        );
    const [activeChild, setActiveChild] = useState(
        childs[indexOfLastPathSegment]
    );
    const { Child } = NavBarDataBottom[3]

    useEffect(() => {
        conditionallyRenderBodyContent()
    }, [activeChild]);



    //BUG
    // useEffect(() => {
    //   if (splitPathName[splitPathName.length - 1] === 'About') {
    //     // Redirect to a different URL
    //     window.history.pushState({}, "", "/about/University%20Profile");
    //   }
    // }, []);






    const conditionallyRenderBodyContent = () => {
        switch (activeChild) {
            case NavBarDataBottom[3].Child:
                setData(NavBarDataBottom[3].Child);
                break;

            default:
                setData(NavBarDataBottom[3].Child);
                break;
        }
    }

    const components = [<BodyMap />, <BodyCampus_Events />]


    const conditionallyRenderNotCardContent = () => {
        switch (activeChild) {
            case 'Campus Map':
                return components[0]
            case 'Campus Events':
                return components[1]
            default:
                return false
        }
    }




    return (
        <>
            <GrandChildTabLayout
                components={conditionallyRenderNotCardContent}
                tabHeader={tabHeader}
                childs={childs}
                setSplitPathName={setSplitPathName}
                directory={directory}
                data={data}
                setActiveChild={setActiveChild}
                activeChild={activeChild}
            />
        </>
    );
}
