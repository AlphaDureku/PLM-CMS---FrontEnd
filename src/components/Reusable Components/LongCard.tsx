import { Image } from "@mantine/core";
import { LongCardObject } from "../../Types/HomePageTypes";
import CustomButton from "./CustomButton";

export default function LongCard(props: LongCardObject) {
  //To add functionality

  return (
    <div className="LongCard_Container hidden">
      <div>
        {" "}
        <Image
          src={props.ImageLink}
          alt="No way!"
          radius="md"
          h={200}
          w="auto"
          fit="contain"
        />
      </div>
      <div>
        <div>
          <h2>{props.Title}</h2>
          <p>{props.Description}</p>
        </div>
        <hr></hr>
        <div>
          <div className="LongCard_BottomRow">
            <div>
              <img src="/images/CalendarLogo.png" alt="img not found" />
              <span>{props.BottomRow.Date}</span>
              <img src="/images/ClockLogo.png" alt="img not found" />
              <span>{props.BottomRow.Time}</span>
            </div>
            <div>
              <CustomButton
                color="#032968"
                ImageLink="/images/ButtonArrowLogo.png"
                text="Read More"
                size="md"
                gotoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
