import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import { newsData } from "../../../../assets/Home_Static_Data/NewsData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";
export default function SubAbout() {
  const childs: string[] = NavBarDataBottom[0].Child.map(
    (obj) => obj.Parent
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
  const { Child } = NavBarDataBottom[0]


  useEffect(() => {
    conditionallyRenderBodyContent()
  }, [activeChild]);

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


  return (
    <>
      <GrandChildTabLayout
        tabHeader="About"
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
