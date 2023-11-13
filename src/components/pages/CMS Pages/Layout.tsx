import { Flex } from "@mantine/core";
import { useState } from "react";
import { mockdata } from "../../../assets/CMS_Static_Data/CMS_MenuData";
import CmsNavBar from "../../CMS Components/NavBar";
import { CMSSideBar } from "../../CMS Components/SideNavBar";
export default function Content() {
  const [menuOpened, setMenuOpened] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState(mockdata[0].label);

  console.log(selectedMenu);
  return (
    <>
      <CmsNavBar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <Flex justify={"center"}>
        {menuOpened ? (
          <CMSSideBar selected={selectedMenu} setSelected={setSelectedMenu} />
        ) : null}
        <div className="cmsPlayGroundContainer">
          {/* dito mo ilagay content na gusto mo depende anong naselect sa sidebar */}
        </div>
      </Flex>
    </>
  );
}
