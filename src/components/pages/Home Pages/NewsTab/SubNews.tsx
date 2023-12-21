import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import { newsData } from "../../../../assets/Home_Static_Data/NewsData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
export default function SubNews() {
  const childs: string[] = NavBarDataBottom[3].Child.map(
    (obj) => obj.text
  ) as string[];

  const { pathname } = useLocation();
  const [data, setData] = useState < any > ("");
  const [splitPathName, setSplitPathName] = useState(pathname.split("/"));
  const directory = useDirectoryRenderer(splitPathName);
  const indexOfLastPathSegment = childs
    .map((child: string) => child.replace(/\s/g, ""))
    .indexOf(
      window.location.pathname
        .split("/")
        .filter((part) => part.trim() !== "")
        .pop() ?? ""
    );
  const [activeChild, setActiveChild] = useState(
    childs[indexOfLastPathSegment]
  );

  useEffect(() => {
    switch (activeChild) {
      case NavBarDataBottom[3].Child[0].text:
        setData(newsData);
        break;
      case NavBarDataBottom[3].Child[1].text:
        setData(newsData);
        break;
      case NavBarDataBottom[3].Child[2].text:
        setData(newsData);
        break;
      case NavBarDataBottom[3].Child[3].text:
        setData(newsData);
        break;
      default:
        console.log(activeChild)
        setData("");
        break;
    }
  }, [activeChild]);

  return (
    <>

      <GrandChildTabLayout
        tabHeader={"News and Updates"}
        childs={childs}
        setSplitPathName={setSplitPathName}
        directory={directory}
        data={data}
        activeChild={activeChild}
        setActiveChild={setActiveChild}
      />
    </>
  );
}
