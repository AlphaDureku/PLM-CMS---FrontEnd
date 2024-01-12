import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
import BodyHistory from "./BodyHistory";
import BodyUniversity_Code from "./BodyUniversity_Code";
import BodyUniversity_Hymn from "./BodyUniversity_Hymn";
import BodyVisionMission from "./BodyVisionMission";
import SealNSymbols from "./SealNSymbols";
export default function SubAbout() {

  NavBarDataBottom[0].Child[1].Child?.map(item => item.text)
  console.log(NavBarDataBottom[0].Parent)
  const { pathname } = useLocation();
  const [data, setData] = useState < any > ("");
  const [splitPathName, setSplitPathName] = useState(pathname.split("/"));
  let childs: string[] = [];
  let tabHeader: string | undefined = "About";

  const aboutCondition = splitPathName.slice(-2).includes("About");
  const adminCondition =
    NavBarDataBottom[0]?.Child[1]?.Child !== undefined && splitPathName.slice(-2).includes("Administration");
  const profileCondition =
    NavBarDataBottom[0]?.Child[0]?.Child !== undefined && splitPathName.slice(-2).includes("UniversityProfile");

  if (aboutCondition) {
    childs = NavBarDataBottom[0]?.Child.map((obj) => obj.Parent) as string[];
  } else if (adminCondition) {
    childs = NavBarDataBottom[0]?.Child[1]?.Child?.map((obj) => obj.text) as string[];
    tabHeader = "Administration";
  } else if (profileCondition) {
    childs = NavBarDataBottom[0]?.Child[0]?.Child?.map((obj) => obj.text) as string[];
  } else if (NavBarDataBottom[0]?.Child[2]?.Child !== undefined && splitPathName.slice(-2).includes("UniversityProfile")) {
    childs = NavBarDataBottom[0]?.Child[2]?.Child?.map((obj) => obj.text) as string[];
    tabHeader = "Administration";
  }

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
  const { Child } = NavBarDataBottom[0]


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





  function changePropertyName(originalArray) {
    return originalArray.map(function (item) {
      const { text, href, ...rest } = item;
      return {
        'Title': text,
        'BtnLink': href,
        ...rest
      };
    });
  }

  const conditionallyRenderBodyContent = () => {
    switch (activeChild) {
      case Child[0].Parent:
        setData(changePropertyName(Child[0].Child));
        break;
      case childs[1]:
        setData(changePropertyName(Child[1].Child));
        break;
      case childs[2]:
        setData(changePropertyName(Child[2].Child));
        break;
      default:
        setData(changePropertyName(Child[0].Child));
        break;
    }
  }
  const components = [<BodyVisionMission />, <SealNSymbols />, <BodyHistory />, <BodyUniversity_Hymn />, <BodyUniversity_Code />]


  const conditionallyRenderNotCardContent = () => {
    switch (activeChild) {
      case 'Vision and Mission':
        return components[0]
      case 'Seal and Symbols':
        return components[1]
      case 'History':
        return components[2]
      case 'University Hymn':
        return components[3]
      case 'University Code':
        return components[4]
      default:
        return false
    }
  }

  console.log(activeChild)

  return (
    <>
      <GrandChildTabLayout
        tabHeader={tabHeader}
        childs={childs}
        setSplitPathName={setSplitPathName}
        directory={directory}
        data={data}
        components={conditionallyRenderNotCardContent}
        setActiveChild={setActiveChild}
        activeChild={activeChild}
      />
    </>
  );
}
