// RadioButton.js
type Props = {
  item: string;
};

export default function RadioButton(props: Props) {
  return (
    <div className="RadioContainer">
      <input type="radio" id={props.item} name="options" value={props.item} />
      <label htmlFor={props.item}>{props.item}</label>
    </div>
  );
}
