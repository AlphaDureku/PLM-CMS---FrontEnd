import { Flex, Image } from "@mantine/core";
import { AccessTime, CalendarMonth } from "@mui/icons-material";
import { LongCardObject } from "../../Types/HomePageTypes";
import useResponsiveBreakpoints from "../CustomHooks/mediaQueryies";
import CustomButton from "./CustomButton";

export default function LongCard(props: LongCardObject) {
  //To add functionality
  const { thirdBreakpoint } = useResponsiveBreakpoints()

  return (
    <Flex className="LongCard_Container" direction={thirdBreakpoint ? "row" : "column"} gap={"md"}>
      <Flex align={"center"} justify={"center"}>
        <Image
          src={props.ImageLink}
          alt="No way!"
          radius="md"
          h={165}
          w="auto"
          fit="contain"
        />
      </Flex>
      <div>
        <div>
          <h2>{props.Title}</h2>
          <p>{props.Description}</p>
        </div>
        <hr></hr>
        <div>
          <div className="LongCard_BottomRow">
            <div>
              <CalendarMonth />
              <span>{props.BottomRow.Date}</span>
              <AccessTime />
              <span>{props.BottomRow.Time}</span>
            </div>
            <div>
              <CustomButton
                color="#032968"
                ImageLink="/images/ButtonArrowLogo.png"
                text="Read More"
                size="sm"
                gotoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </Flex>
  );
}
