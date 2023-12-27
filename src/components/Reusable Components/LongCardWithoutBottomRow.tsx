import { Flex, Image } from "@mantine/core";
import { LongCardWithoutBottomRowObject } from "../../Types/HomePageTypes";
import useResponsiveBreakpoints from "../CustomHooks/mediaQueryies";
import CustomButton from "./CustomButton";

export default function LongCardWithoutBottomRow(props: LongCardWithoutBottomRowObject) {
    const { thirdBreakpoint } = useResponsiveBreakpoints()
    //To add functionality

    return (
        <Flex className="LongCard_Container" direction={thirdBreakpoint ? "row" : "column"} gap={"md"}>
            <div>
                <Image
                    src={props.ImageLink}
                    height={150}
                    w="auto"
                    radius={"4px"}
                />
            </div>
            <div>
                <h3>
                    {props.Title}
                </h3>
                <div>
                    <p>{props.Description}</p>
                </div>
            </div>
            <Flex align={"end"} ><CustomButton color="var(--Red)" gotoLink={props.BtnLink} text="See More" withArrowRightIcon={true} size="md" /></Flex>
        </Flex>
    );
}
