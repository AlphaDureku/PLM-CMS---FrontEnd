import { Card, Image } from "@mantine/core";

type Props = {
  ImageLink: string;
  Title: string;
  Description: string;
};

export default function Cards(props: Props) {
  return (
    <div className="ShortCard_Container">
      <Card
        padding="md"
        style={{
          maxWidth: "300px",
          boxShadow: "0px 4px 24px 8px #00000040",
        }}
      >
        <Card.Section>
          <Image
            src={props.ImageLink}
            alt="No way!"
            style={{ padding: "5px" }}
          />
        </Card.Section>

        <div style={{ textAlign: "left" }}>
          <h2>{props.Title}</h2>
          <p>{props.Description}</p>
        </div>
      </Card>
    </div>
  );
}
