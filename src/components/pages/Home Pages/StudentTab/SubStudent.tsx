import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom, NavBarDataTop } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
import BodyStudent_Manual from "./BodyStudent_Manual";
import Body_TuitionFees from "./Body_TuitionFees";


export default function SubStudent() {

    NavBarDataTop[0].Child.map(item => item.text)
    console.log(NavBarDataBottom[0].Parent)
    const { pathname } = useLocation();
    const [data, setData] = useState < any > ("");
    const [splitPathName, setSplitPathName] = useState(pathname.split("/"));
    const childs = NavBarDataTop[0].Child.map((obj) => obj.text) as string[];
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

    const components = [<BodyStudent_Manual />, <Body_TuitionFees />]


    const conditionallyRenderNotCardContent = () => {
        switch (activeChild) {
            case 'Student Manual':
                return components[0]
            case 'Tuition and Fees':
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
