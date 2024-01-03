import { Flex } from "@mantine/core";
import { LongCardObject, LongCardWithoutBottomRowObject } from "../../../../Types/HomePageTypes";
import LongCard from "../../../Reusable Components/LongCard";
import LongCardWithoutBottomRow from "../../../Reusable Components/LongCardWithoutBottomRow";

type Props = {
  tabHeader: string;
  childs: string[];
  setSplitPathName: React.Dispatch<React.SetStateAction<string[]>>;
  directory: React.ReactElement;
  data: any;
  activeChild: string;
  setActiveChild: React.Dispatch<React.SetStateAction<string>>;
};

const GrandChildTabLayout: React.FC<Props> = ({
  childs,
  setSplitPathName,
  directory,
  data,
  activeChild,
  setActiveChild,
  tabHeader,
}) => {
  const handleChildClick = (child: string) => {
    setActiveChild(child);
    handleChangeURL(child);
    setSplitPathName((prevArray: string[]) => {
      const lastIndex = prevArray.length - 1;
      return [...prevArray.slice(0, lastIndex), child] as string[];
    });
  };

  const handleChangeURL = (newDirectory: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(
      /\/[^/]+$/,
      "/" + newDirectory.replace(/\s+/g, "")
    );
    window.history.pushState({}, "", newPath);
  };

  const renderChilds = childs.map((child: string, index: number) => {
    return (
      <div
        key={index}
        className={"mousePointer " + (child === activeChild ? "Yellow" : "")}
        onClick={() => handleChildClick(child)}
      >
        {child}
      </div>
    );
  });


  console.log(data)
  const renderData = data
    ? data.map((item: any, index: number) =>
      isLongCardObjectArray(data) ? (
        <LongCard key={index} {...item} />

      ) : (
        <LongCardWithoutBottomRow key={index} {...item} />

      )
    )
    : null;

  function isLongCardObjectArray(
    obj: any
  ): obj is LongCardObject[] {
    return (
      Array.isArray(obj) &&
      obj.every(
        (item) =>
          typeof item === "object" &&
          item !== null &&
          "ImageLink" in item &&
          typeof item.ImageLink === "string" &&
          "Title" in item &&
          typeof item.Title === "string" &&
          "Description" in item &&
          typeof item.Description === "string" &&
          "BtnLink" in item &&
          typeof item.BtnLink === "string" &&
          "BottomRow" in item &&
          typeof item.BottomRow === "object" &&
          item.BottomRow !== null &&
          "Time" in item.BottomRow &&
          typeof item.BottomRow.Time === "string" &&
          "Date" in item.BottomRow &&
          typeof item.BottomRow.Date === "string"

      )
    );
  }

  return (
    <>
      <Flex direction={"column"} align={"center"}>
        <Flex
          className="Grey fontSize_SubHead ContentMaxWidth"
          align={"center"}
          mt={"2%"}
        >
          <h3>
            <a href="/">Home</a>
          </h3>
          {directory}
        </Flex>
        <Flex
          style={{ height: "100%" }}
          className="ContentMaxWidth"
          mt={"xl"}
          gap={"xl"}
        >
          <Flex
            style={{ height: "100%", width: "20%" }}
            direction={"column"}
            gap={"lg"}
          >
            <h3 style={{ borderBottom: "3px solid var(--Red)" }}>
              {tabHeader}
            </h3>
            {renderChilds}
          </Flex>
          <Flex
            style={{ height: "100%" }}
            className="ContentMaxWidth"
            direction={"column"}
            gap={"lg"}
          >
            <h3>{activeChild}</h3>
            <Flex direction={"column"} gap={"md"}>
              {renderData}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default GrandChildTabLayout;
