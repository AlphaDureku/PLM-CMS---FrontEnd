import { Input } from "@mantine/core";

type Props = {
  inputHint: string;
};

export default function TextBoxWithHint(props: Props) {
  //To add functionality

  return (
    <>
      <div
        className="textBoxWithHint_Container"
        style={{ border: "1px solid #d1d1d1" }}
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
          <span style={{ color: "#686868", fontWeight: "600" }}>
            {props.inputHint}
          </span>
          <Input placeholder="Text Input" variant="unstyled" />
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
