import { Flex } from "@mantine/core";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import LongCardWithoutBottomRow from "../../../Reusable Components/LongCardWithoutBottomRow";
export default function GrandChildTabLayout() {
    const { pathname } = useLocation()
    const directory = useDirectoryRenderer(pathname.split("/"))

    const newsData = [
        {
            Title: "Title",
            ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

            BottomRow: {
                Date: "11/01/23",
                Time: "9:00PM",
            },
        },
        {
            Title: "Title",
            ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

            BottomRow: {
                Date: "11/01/23",
                Time: "9:00PM",
            },
        },
        {
            Title: "Title",
            ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

            BottomRow: {
                Date: "11/01/23",
                Time: "9:00PM",
            },
        },
        {
            Title: "Title",
            ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

            BottomRow: {
                Date: "11/01/23",
                Time: "9:00PM",
            },
        },
        {
            Title: "Title",
            ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

            BottomRow: {
                Date: "11/01/23",
                Time: "9:00PM",
            },
        },
        {
            Title: "Title",
            ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

            BottomRow: {
                Date: "11/01/23",
                Time: "9:00PM",
            },
        },
        {
            Title: "Title",
            ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
            Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",

            BottomRow: {
                Date: "11/01/23",
                Time: "9:00PM",
            },
        },


    ]


    const renderData = newsData.map((item, index) => {
        return (
            <LongCardWithoutBottomRow
                key={index}
                {...item}
            />
        );
    });

    // Should be reusable especially when we pass sub childs

    const [activeChild, setActiveChild] = useState("Announcements")
    const childs: string[] = [
        "Announcements",
        "NewsLetter",
        "Message From the  University President",
        "Careers / Job Openings"
    ]

    const renderChilds = childs.map((child, index) => {
        return (<div key={index} className={"mousePointer " + (child === activeChild ? "Yellow" : "")} onClick={() => setActiveChild(child)}>{child}
        </div>)
    })

    const renderContent = () => {
        switch (activeChild) {
            case "Announcements":
                return renderData;
            case "NewsLetter":
            case "Message From the University President":
                return renderData;
            case "Careers / Job Openings":
                return renderData;
            default:

                break;
        }
    };




    return <>
        <Flex direction={"column"} align={"center"}>
            <Flex className="Grey fontSize_SubHead ContentMaxWidth" align={"center"} mt={"2%"}><h3><a href="/">Home</a></h3>{directory}</Flex>
            <Flex style={{ height: "100%" }} className="ContentMaxWidth" mt={"xl"} gap={"xl"}>
                <Flex style={{ height: "100%", width: "20%" }} direction={"column"} gap={"lg"}>
                    <h3 style={{ borderBottom: "3px solid var(--Red)" }}>News and Updates</h3>
                    {renderChilds}

                </Flex>
                <Flex style={{ height: "100%" }} className="ContentMaxWidth" direction={"column"} gap={"lg"}>
                    <h3>Announcements</h3>
                    <Flex direction={"column"} gap={"md"} >
                        {renderContent()}
                    </Flex>
                </Flex>
            </Flex>

        </Flex>

    </>
}