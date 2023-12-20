import { Flex, Image } from "@mantine/core";
import { LongCardWithoutBottomRowObject } from "../../Types/HomePageTypes";
import CustomButton from "./CustomButton";

export default function LongCardWithoutBottomRow(props: LongCardWithoutBottomRowObject) {
    //To add functionality

    return (
        <Flex className="LongCard_Container hidden">
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
            <Flex align={"end"} ><CustomButton color="var(--Red)" gotoLink="/" text="See More" withArrowRightIcon="true" /></Flex>
        </Flex>
    );
}
