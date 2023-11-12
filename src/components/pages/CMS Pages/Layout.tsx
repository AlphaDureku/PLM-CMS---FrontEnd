import { useState } from "react";
import CmsNavBar from "../../CMS Components/NavBar";
import { CMSSideBar } from "../../CMS Components/SideNavBar";
export default function Layout() {
  const [menuOpened, setMenuOpened] = useState(true);

  return (
    <>
      <CmsNavBar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      {menuOpened ? <CMSSideBar /> : null}
    </>
  );
}
