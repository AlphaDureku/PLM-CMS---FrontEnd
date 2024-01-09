import { Flex, Transition } from "@mantine/core";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { mockdata } from "../../../assets/CMS_Static_Data/CMS_MenuData";
import ManageAccounts from "../../CMS Components/Contents/ManageAccounts";
import Notification from "../../CMS Components/Contents/Notifications";
import Posts from "../../CMS Components/Contents/Posts";
import Tags from "../../CMS Components/Contents/Tags";
import { CMSSideBar } from "../../CMS Components/SideNavBar";
import CmsNavBar from "../../CMS Components/TopNavBar";
export default function Content() {
  const [menuOpened, setMenuOpened] = useState(true);
  const [selectedTab, setSelectedTab] = useSearchParams({
    Tab: mockdata[0].label,
  });
  const [selectedGrandChild, setSelectedGrandChild] = useState("")

  const getSelectedMenu = () => {
    switch (selectedTab.get("Tab")) {
      case "Dashboard":
        //
        break;
      case "Posts":
        return <Posts selectedGrandChild={selectedGrandChild} />;
      case "Manage Accounts":
        return <ManageAccounts />;
      case "Tags":
        return <Tags />;
      case "Notifications":
        return <Notification />;
      default:
        break;
    }
  };

  return (
    <>
      <CmsNavBar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <Flex justify={"center"}>
        <Transition
          mounted={menuOpened}
          transition="slide-right"
          duration={400}
          timingFunction="ease"
        >
          {(styles) => (
            <div style={styles}>
              <CMSSideBar
                selected={selectedTab.get("Tab")}
                setSelected={setSelectedTab}
                setSelectedGrandChild={setSelectedGrandChild}
              />
            </div>
          )}
        </Transition>
        <div className="cmsPlayGroundContainer">
          {/* dito mo ilagay content na gusto mo depende anong naselect sa sidebar */}
          {getSelectedMenu()}
        </div>
      </Flex>
    </>
  );
}
