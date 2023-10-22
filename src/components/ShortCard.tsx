import { Card, Image } from "@mantine/core";

export default function Cards() {
  return (
    <div className="ShortCardContainer">
      <Card
        padding="md"
        style={{
          maxWidth: "300px",
          boxShadow: "0px 4px 24px 8px #00000040",
        }}
      >
        <Card.Section>
          <Image
            src="https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif"
            alt="No way!"
          />
        </Card.Section>

        <div style={{ textAlign: "left" }}>
          <h2>Bocchi the rock!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
        </div>
      </Card>
    </div>
  );
}
