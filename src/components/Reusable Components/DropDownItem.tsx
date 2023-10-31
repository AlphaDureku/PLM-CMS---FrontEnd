import CheckBox from "./CheckBox";

type Props = {
  list: string[];
};

export default function DropDownItem(props: Props) {
  // To add functionality

  const renderedList: JSX.Element[] = props.list.map((item: string) => {
    return (
      <div key={item}>
        <CheckBox item={item} />
        <hr style={{ border: "1px solid #D1D1D1", margin: "15px 0" }} />
      </div>
    );
  });

  return <>{renderedList}</>;
}
