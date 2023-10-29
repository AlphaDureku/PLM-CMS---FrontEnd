import { Checkbox } from "@mantine/core";

type Props = {
  item: string;
};

export default function CheckBox(props: Props) {
  //To add functionality

  return <Checkbox label={<>{props.item}</>} color="#cca000" size="md" />;
}
