import { Flex } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { LongCardWithoutBottomRowObject } from "../../../../Types/HomePageTypes";
import { newsData } from "../../../../assets/Home_Static_Data/NewsData";
import LongCard from "../../../Reusable Components/LongCard";
type Props = {
    childs: string[];
    setSplitPathName: React.Dispatch<React.SetStateAction<string[]>>;
    directory: React.ReactElement;
};


const GrandChildTabLayout: React.FC<Props> = ({ childs, setSplitPathName, directory }) => {
    const indexOfLastPathSegment = childs.map((child: string) => child.replace(/\s/g, '')).indexOf(window.location.pathname.split('/').filter(part => part.trim() !== '').pop());

    console.log(window.location.pathname)
    const [data, setData] = useState("")
    const [activeChild, setActiveChild] = useState(childs[indexOfLastPathSegment])
    const renderData = isLongCardWithoutBottomRowObject(data) ? data.map((item: LongCardWithoutBottomRowObject, index: number) => {
        return (
            <LongCard
                key={index}
                {...item}
            />
        );
    }) : "Hehe";

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
        const newPath = currentPath.replace(/\/[^/]+$/, '/' + newDirectory.replace(/\s+/g, ''));
        window.history.pushState({}, '', newPath);
    };



    const renderChilds = childs.map((child: string, index: number) => {
        return (<div key={index} className={"mousePointer " + (child === activeChild ? "Yellow" : "")} onClick={() => handleChildClick(child)}>{child}
        </div>)
    })

    function isLongCardWithoutBottomRowObject(obj): obj is LongCardWithoutBottomRowObject | LongCardWithoutBottomRowObject[] {
        if (Array.isArray(obj)) {
            return obj.every(item =>
                typeof item === 'object' &&
                item !== null &&
                'ImageLink' in item &&
                typeof item.ImageLink === 'string' &&
                'Title' in item &&
                typeof item.Title === 'string' &&
                'Description' in item &&
                typeof item.Description === 'string' &&
                'BtnLink' in item &&
                typeof item.BtnLink === 'string'
            );
        }

        return (
            typeof obj === 'object' &&
            obj !== null &&
            'ImageLink' in obj &&
            typeof obj.ImageLink === 'string' &&
            'Title' in obj &&
            typeof obj.Title === 'string' &&
            'Description' in obj &&
            typeof obj.Description === 'string' &&
            'BtnLink' in obj &&
            typeof obj.BtnLink === 'string'
        );
    }
    console.log(data)

    useEffect(() => {
        console.log("Fetch new Data from " + activeChild)
        switch (activeChild) {
            case "Newsletters":
                setData(newsData)
                break;
            case "Announcements":
                setData(newsData)
                break;
            default:
                setData("")
                break;
        }

    }, [activeChild])

    return <>
        <Flex direction={"column"} align={"center"}>
            <Flex className="Grey fontSize_SubHead ContentMaxWidth" align={"center"} mt={"2%"}><h3><a href="/">Home</a></h3>{directory}</Flex>
            <Flex style={{ height: "100%" }} className="ContentMaxWidth" mt={"xl"} gap={"xl"}>
                <Flex style={{ height: "100%", width: "20%" }} direction={"column"} gap={"lg"}>
                    <h3 style={{ borderBottom: "3px solid var(--Red)" }}>News and Updates</h3>
                    {renderChilds}

                </Flex>
                <Flex style={{ height: "100%" }} className="ContentMaxWidth" direction={"column"} gap={"lg"}>
                    <h3>{activeChild}</h3>
                    <Flex direction={"column"} gap={"md"} >
                        {renderData}
                    </Flex>
                </Flex>
            </Flex>

        </Flex>

    </>
}

export default GrandChildTabLayout;