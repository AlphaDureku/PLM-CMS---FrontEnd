import { Card, Image } from "@mantine/core";
import { ShortCardObject } from "../../Types/HomePageTypes";

export default function Cards(props: ShortCardObject) {
  return (
    <div className="ShortCard_Container hidden">
      <Card
        padding="md"
        style={{
          maxWidth: "300px",
          boxShadow: "0px 4px 24px 8px #00000040",
        }}
      >
        <Card.Section>
          <a href={props.GotoLink}>
            <Image
              src={props.ImageLink}
              alt="No way!"
              style={{ padding: "5px" }}
              className="makeHoverable"
            />
          </a>
        </Card.Section>

        <div style={{ textAlign: "left" }}>
          <h2>{props.Title}</h2>
          <p className="responsive_P">{props.Description}</p>
        </div>
      </Card>
    </div>
  );
}
