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
      <span>{props.text}</span>
      {props.ImageLink ? (
        <img
          src={props.ImageLink}
          alt="img not found"
          style={{ marginLeft: "8px" }}
          width="65%"
        />
      ) : null}
    </Button>
  );
}
