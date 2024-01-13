import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom, NavBarDataTop } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
import BodyAssoc from "./BodyAssoc";
import BodyScholars from "./BodyScholars";


export default function SubAlumni() {

    NavBarDataTop[2].Child.map(item => item.text)
    console.log(NavBarDataBottom[0].Parent)
    const { pathname } = useLocation();
    const [data, setData] = useState < any > ("");
    const [splitPathName, setSplitPathName] = useState(pathname.split("/"));
    const childs = NavBarDataTop[2].Child.map((obj) => obj.text) as string[];
    let tabHeader: string | undefined = "Students";




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
    const { Child } = NavBarDataTop[0]


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
            case Child[2].text:
                setActiveChild('Student Manual')
                window.open('https://web2.plm.edu.ph/sfe/', '_blank');
            case Child[3].text:
                setActiveChild('Student Manual')
                window.open('https://web1.plm.edu.ph/crs/', '_blank');
            case Child[4].text:
                setActiveChild('Student Manual')
                window.open('https://web2.plm.edu.ph/sfe/', '_blank');
            default:
                setData(Child[0].Child);
                break;
        }
    }

    const components = [<BodyAssoc />, <BodyScholars />]





    const conditionallyRenderNotCardContent = () => {
        switch (activeChild) {
            case 'The Alumni Association':
                return components[0]
            case 'PLM Scholars Foundation, Inc':
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
