import { Input } from "@mantine/core";

export default function TextBox() {
  //To add functionality

  return (
    <>
      <div
        className="textBoxWithHint_Container"
        style={{ border: "1px solid var(--Yellow)" }}
      >
        <div>
          {" "}
          <img src="/images/compass.png" alt="img not found" />
        </div>
        <div>
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
