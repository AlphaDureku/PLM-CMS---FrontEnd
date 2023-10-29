// RadioButton.js
type Props = {
  item: string;
};

export default function RadioButton(props: Props) {
  return (
    <div className="Radio_Container">
      <input type="radio" id={props.item} name="options" value={props.item} />
      <label htmlFor={props.item}>{props.item}</label>
    </div>
  );
}
