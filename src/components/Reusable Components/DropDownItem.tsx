import React from "react";
import CheckBox from "./CheckBox";

export default function DropDownItem() {
  // To add functionality
  const list: string[] = [
    "Dropdown Item 1",
    "Dropdown Item 2",
    "Dropdown Item 3",
  ];
  const renderedList: JSX.Element[] = list.map((item: string) => {
    return (
      <div key={item}>
        <CheckBox item={item} />
        <hr style={{ border: "1px solid #D1D1D1", margin: "15px 0" }} />
      </div>
    );
  });

  return <>{renderedList}</>;
}
