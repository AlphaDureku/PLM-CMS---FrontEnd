import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import { newsData } from "../../../../assets/Home_Static_Data/NewsData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import BodyHistory from "../AboutTab/BodyHistory";
import BodyUniversity_Code from "../AboutTab/BodyUniversity_Code";
import BodyUniversityHymn from "../AboutTab/BodyUniversity_Hymn";
import BodyVisionMission from "../AboutTab/BodyVisionMission";
import SealNSymbols from "../AboutTab/SealNSymbols";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
export default function SubNews() {
  const childs: string[] = NavBarDataBottom[4].Child.map(
    (obj) => obj.text
  ) as string[];

  const { pathname } = useLocation();
  const [data, setData] = useState < any > ("");
  const [splitPathName, setSplitPathName] = useState(pathname.split("/"));
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

  console.log(NavBarDataBottom[4].Child[0].text)
  useEffect(() => {
    switch (activeChild) {
      case NavBarDataBottom[4].Child[0].text:
        setData(newsData);
        break;
      case NavBarDataBottom[4].Child[1].text:
        setData(newsData);
        break;
      case NavBarDataBottom[4].Child[2].text:
        setData(newsData);
        break;
      case NavBarDataBottom[4].Child[3].text:
        setData(newsData);
        break;
      default:
        console.log(activeChild)
        setData("");
        break;
    }
  }, [activeChild]);


  const components = [<BodyVisionMission />, <SealNSymbols />, <BodyHistory />, <BodyUniversityHymn />, <BodyUniversity_Code />]

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

  return (
    <>
      <GrandChildTabLayout
        tabHeader={"News and Updates"}
        childs={childs}
        setSplitPathName={setSplitPathName}
        directory={directory}
        data={data}
        components={conditionallyRenderNotCardContent}
        activeChild={activeChild}
        setActiveChild={setActiveChild}
      />
    </>
  );
}
