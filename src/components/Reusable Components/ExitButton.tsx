type Props = {
  topText: string;
  bottomText: string;
};

export default function ExitBtn(props: Props) {
  //To add functionality

  return (
    <div className="exitBtn_Container">
      <p>{props.topText}</p>
      <img
        className="makeHoverable"
        src="/images/exit.png"
        alt="img not found"
      />
      <p>{props.bottomText}</p>
    </div>
  );
}
