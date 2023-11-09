import { Input } from "@mantine/core";

type Props = {
  type?: "text" | "password";
  placeholder: string;
};
export default function TextBox(props: Props) {
  //To add functionality

  return (
    <>
      <div
        className="textBoxWithHint_Container"
        style={{ border: "1px solid var(--Yellow)" }}
      >
        <div>
          {" "}
          <img
            src="/images/compass.png"
            alt="img not found"
            className="makeHoverable"
          />
        </div>
        <div>
          <Input
            placeholder={props.placeholder}
            variant="unstyled"
            type={props.type}
          />
        </div>
        <div>
          {" "}
          <img
            src="/images/profile.png"
            alt="img not found"
            className="makeHoverable"
          />
        </div>
      </div>
    </>
  );
}
