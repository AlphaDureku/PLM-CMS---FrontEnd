import { Flex, Text } from "@mantine/core";
import { useLocation } from "react-router-dom";
import useDirectoryRenderer from "../../../CustomHooks/TrackNavigate";
import LongCardWithoutBottomRow from "../../../Reusable Components/LongCardWithoutBottomRow";

const newsData = [
    {
        Title: "Announcements",
        ImageLink:
            "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
        Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",
        BtnLink: "/News/Announcements",

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



export default function News() {
    const { pathname } = useLocation()
    const directory = useDirectoryRenderer(pathname.split("/"))




    const renderData = newsData.map((item, index) => {
        return (
            <LongCardWithoutBottomRow
                key={index}
                {...item}
            />
        );
    });



    return <>
        <Flex direction={"column"} align={"center"}>
            <Flex className="Grey fontSize_SubHead" align={"center"} style={{ width: "80%" }} mt={"2%"}><h3><a href="/">Home</a></h3> {directory}</Flex>
            <Flex style={{ height: "100%", width: "100%" }} align={"center"} direction={"column"} gap={"lg"}>
                <h1>News</h1>
                <Text size="1.2rem">Browse through our latest news and updates about our university.</Text>

                <Flex direction={"column"} align={"center"} gap={"md"} className="ContentMaxWidth">
                    {renderData}

                </Flex>
            </Flex>
        </Flex>

    </>
}