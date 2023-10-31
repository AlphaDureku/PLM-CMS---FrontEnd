import { Button } from "@mantine/core";

type Props = {
  text: string;
  color: string;
  size: string;
  ImageLink?: string;
};
export default function CustomButton(props: Props) {
  //To add functionality

  return (
    <Button variant="filled" color={props.color} radius="sm" size={props.size}>
      {props.text}
      {props.ImageLink ? (
        <img
          src={`/images/MissionVision/${props.ImageLink}`}
          alt="img not found"
          style={{ marginLeft: "8%" }}
          width="75%"
        />
      ) : null}
    </Button>
  );
}
