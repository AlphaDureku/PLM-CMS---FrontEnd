import { Flex } from "@mantine/core";
import { LongCardObject } from "../../../Types/HomePageTypes";
import LongCard from "../../Reusable Components/LongCard";

type Props = {
  items: LongCardObject[];
};

export default function UserProfile(props: Props) {
  //Render Short Card Contents
  const contents = props.items.map((item, index) => {
    return (
      <LongCard
        key={index}
        ImageLink={item.ImageLink}
        Description={item.Description}
        Title={item.Title}
        BottomRow={{
          Date: item.BottomRow.Date,
          Time: item.BottomRow.Time,
          BtnLink: item.BottomRow.BtnLink
        }}
      />
    );
  });

  return (
    <>
      <section className="NewsNAnnouncement_Section">
        <div className="NewsNAnnouncement_Header">
          <h2 className="responsive_H1">News & Announcement</h2>
        </div>
        <Flex
          gap="xl"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
          className="ContentMaxWidth"
        >
          {contents}
        </Flex>
      </section>
    </>
  );
}
