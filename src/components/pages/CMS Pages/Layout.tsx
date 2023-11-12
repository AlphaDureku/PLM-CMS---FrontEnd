import { Flex } from "@mantine/core";
import { useState } from "react";
import CmsNavBar from "../../CMS Components/NavBar";
import { CMSSideBar } from "../../CMS Components/SideNavBar";
export default function Content() {
  const [menuOpened, setMenuOpened] = useState(true);

  return (
    <>
      <CmsNavBar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <Flex justify={"center"}>
        {menuOpened ? <CMSSideBar /> : null}
        <div className="cmsPlayGroundContainer"></div>
      </Flex>
    </>
  );
}
