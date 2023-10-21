import { Card, Image, Text } from "@mantine/core";

export default function Cards() {
  return (
    <Card
      padding="md"
      //   component="a"
      //   href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
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

      <Text fw={600} size="xl" mt="md" style={{ textAlign: "left" }}>
        Bocchi the rock!
      </Text>

      <Text mt="xs" c="dimmed" size="sm" style={{ textAlign: "left" }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illum
        dolorum omnis cum tenetur magnam voluptas sequi soluta quis, aperiam,
        quam quia cumque magni natus deleniti eveniet ratione. Consequatur,
        omnis.
      </Text>
    </Card>
  );
}
