import { Button } from "@mantine/core";

type Props = {
  text: string;
  color: string;
};
export default function CustomButton(props: Props) {
  //To add functionality

  return (
    <Button variant="filled" color={props.color} radius="sm">
      {props.text}
    </Button>
  );
}
