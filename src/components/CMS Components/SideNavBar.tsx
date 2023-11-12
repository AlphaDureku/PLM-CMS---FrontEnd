import { ScrollArea } from "@mantine/core";
import {
  AddToQueue,
  EmailRounded,
  HomeRounded,
  NewspaperRounded,
  PeopleAltRounded,
} from "@mui/icons-material/";
import { LinksGroup } from "../../mantine assets/NavbarLinksGroup";
// import { UserButton } from "../UserButton/UserButton";
// import { Logo } from "./Logo";
import { useState } from "react";
import classes from "../../mantine assets/NavbarNested.module.css";

const mockdata = [
  { label: "Dashboard", icon: HomeRounded },

  {
    label: "Posts",
    icon: NewspaperRounded,
    links: [
      { label: "View Posts", link: "/" },
      { label: "Create Posts ", link: "/" },
      { label: "Manage Posts", link: "/" },
    ],
  },
  {
    label: "Manage Accounts",
    icon: PeopleAltRounded,
    initiallyOpened: true,
  },
  {
    label: "Tags",
    icon: AddToQueue,
    links: [
      { label: "Upcoming releases", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Notifications", icon: EmailRounded },
];

export function CMSSideBar() {
  const [selectedMenu, setSelectedMenu] = useState(mockdata[0].label);

  const links = mockdata.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      selected={selectedMenu}
      keys={item.label}
      setSelected={setSelectedMenu}
    />
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}></div>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>{/* <UserButton /> */}</div>
    </nav>
  );
}
