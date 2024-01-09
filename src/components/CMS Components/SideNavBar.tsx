import { ScrollArea } from "@mantine/core";
import { selectedProp } from "../../Types/CmsPage";
import { mockdata } from "../../assets/CMS_Static_Data/CMS_MenuData";
import { LinksGroup } from "../../mantine assets/NavbarLinksGroup";
import classes from "../../mantine assets/NavbarNested.module.css";

export function CMSSideBar(props: selectedProp) {
  const links = mockdata.map((item) => (
    <LinksGroup
      {...item}
      key={item.label}
      selected={props.selected}
      keys={item.label}
      setSelected={props.setSelected}
      setSelectedGrandChild={props.setSelectedGrandChild}
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
