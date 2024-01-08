import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBarDataBottom } from "../../../../assets/Home_Static_Data/HomePage_MenuData";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import GrandChildTabLayout from "../ReusableContentLayout/GrandChildTabLayout";


export default function SubAdmission() {

  NavBarDataBottom[0].Child[1].Child?.map(item => item.text)
  console.log(NavBarDataBottom[0].Parent)
  const { pathname } = useLocation();
  const [data, setData] = useState < any > ("");
  const [splitPathName, setSplitPathName] = useState(pathname.split("/"));
  const childs = NavBarDataBottom[2]?.Child.map((obj) => obj.text) as string[];
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
        setActiveChild("Undergraduate Programs")
        window.open('https://www.plm.edu.ph/admissions/plmat', '_blank');
        break;
      case childs[2]:
        setActiveChild("Undergraduate Programs")
        window.open('https://www.plm.edu.ph/admissions/medical-college-admission-test-mca', '_blank');
        break;
      case childs[3]:
        setActiveChild("Undergraduate Programs")
        window.open('https://www.plm.edu.ph/admissions/scholarships', '_blank');
        break;
      case childs[4]:
        setActiveChild("Undergraduate Programs")
        window.open('https://plm.edu.ph/community/immigration-and-visa', '_blank');
        break;
      default:
        setData(changePropertyName(Child[0].Child));
        break;
    }
  }

  return (
    <>
      <GrandChildTabLayout
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
