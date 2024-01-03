import { Flex, Image, Spoiler } from "@mantine/core";
import { AccessTime, CalendarMonth } from "@mui/icons-material";
import { LongCardObject } from "../../Types/HomePageTypes";
import useResponsiveBreakpoints from "../CustomHooks/mediaQueryies";
import CustomButton from "./CustomButton";

export default function LongCard(props: LongCardObject) {
  //To add functionality
  const { thirdBreakpoint, secondBreakpoint, firstBreakpoint } = useResponsiveBreakpoints()

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
          <h2 className="responsive_H2">{props.Title}</h2>
          <p className="responsive_P">
            <Spoiler maxHeight={875} showLabel="..." hideLabel="Hide">
              {props.Description}
            </Spoiler>
          </p>
        </div>
        <hr></hr>
        <div>
          <div className="LongCard_BottomRow">
            <div>
              <CalendarMonth />
              <p className="responsive_P">{props.BottomRow.Date}</p>
              <AccessTime />
              <p className="responsive_P">{props.BottomRow.Time}</p>
            </div>
            <div>
              <CustomButton
                color="#032968"
                ImageLink="/images/ButtonArrowLogo.png"
                text="Read More"
                size={firstBreakpoint ? "lg" : (secondBreakpoint ? "md" : "xs")}
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
