import { Flex, Transition } from "@mantine/core";
import { useState } from "react";
import { mockdata } from "../../../assets/CMS_Static_Data/CMS_MenuData";
import ManageAccounts from "../../CMS Components/Menu/ManageAccounts";
import { CMSSideBar } from "../../CMS Components/SideNavBar";
import CmsNavBar from "../../CMS Components/TopNavBar";
export default function Content() {
  const [menuOpened, setMenuOpened] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(mockdata[0].label);

  console.log(selectedMenu);
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
                selected={selectedMenu}
                setSelected={setSelectedMenu}
              />
            </div>
          )}
        </Transition>
        <div className="cmsPlayGroundContainer">
          {/* dito mo ilagay content na gusto mo depende anong naselect sa sidebar */}
          {selectedMenu === "Manage Accounts" ? <ManageAccounts /> : null}
        </div>
      </Flex>
    </>
  );
}
