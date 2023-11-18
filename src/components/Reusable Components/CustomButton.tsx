import { Button } from "@mantine/core";

type Props = {
  text: string;
  color: string;
  size: string;
  ImageLink?: string;
  gotoLink?: string;
  onClick?: () => void;
};

export default function CustomButton(props: Props) {
  // To add functionality

  return (
    <a href={props.gotoLink}>
      <div>
        <Button
          variant="filled"
          color={props.color}
          radius="sm"
          size={props.size}
          onClick={props.onClick}
        >
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
      </div>
    </a>
  );
}
