import { Input } from "@mantine/core";

export default function TextBoxWithHint() {
  //To add functionality

  return (
    <>
      <div
        className="textBoxWithHint_Container"
        style={{ border: "1px solid #d1d1d1" }}
      >
        <div>
          {" "}
          <img src="/images/compass.png" alt="img not found" />
        </div>
        <div>
          <span style={{ color: "#686868" }}>Input Hint</span>
          <Input placeholder="Text Input" variant="unstyled" />
        </div>
        <div>
          {" "}
          <img src="/images/profile.png" alt="img not found" />
        </div>
      </div>
    </>
  );
}
