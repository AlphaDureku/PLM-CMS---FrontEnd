import { Button, Image } from "@mantine/core";
import { LongCardObject } from "../../Types/HomePageTypes";

export default function LongCard(props: LongCardObject) {
  //To add functionality

  return (
    <div className="LongCard_Container">
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
              <a href={props.BottomRow.BtnLink}>
                <Button variant="filled" color="#032968" size="lg">
                  <span style={{ marginRight: "8px" }}>Read More</span>
                  <img src="/images/ButtonArrowLogo.png" alt="img not found" />
                </Button>
              </a>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
