import { Flex, Text } from "@mantine/core";
import { ChevronLeftRounded } from "@mui/icons-material";
import useIntersectionObserver from "../../CustomHooks/observerClass";
import LongCard from "../../Reusable Components/LongCard";



const newsData = [
    {
        Title: "Title",
        ImageLink:
            "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
        Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",

        BottomRow: {
            Date: "11/01/23",
            Time: "9:00PM",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
    },
    {
        Title: "Title",
        ImageLink:
            "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
        Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",

        BottomRow: {
            Date: "11/01/23",
            Time: "9:00PM",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
    },
    {
        Title: "Title",
        ImageLink:
            "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
        Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iusto sapiente quos iste dicta voluptate maxime eligendi repellendus dolore ab beatae nisi, quisquam, nam suscipit vero et facere, obcaecati amet.",

        BottomRow: {
            Date: "11/01/23",
            Time: "9:00PM",
            BtnLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
    },


]



export default function News() {
    const renderData = newsData.map((item, index) => {
        return (
            <LongCard
                key={index}
                {...item}
            />
        );
    });


    useIntersectionObserver(
        [
            { selector: ".hidden", additionalClass: "show" },

        ]
    )
    return <>

        <Flex direction={"column"} align={"center"}>
            <Flex align={"center"} style={{ width: "80%" }} mt={"2%"}><h3><a href="/">Home</a></h3> <ChevronLeftRounded /> <h3>News</h3></Flex>
            <Flex style={{ height: "100%", width: "100%" }} align={"center"} direction={"column"} gap={"lg"}>
                <h1>News</h1>
                <Text size="1.2rem">Browse through our latest news and updates about our university.</Text>

                <Flex direction={"column"} align={"center"} gap={"md"} >
                    {renderData}

                </Flex>
            </Flex>
        </Flex>

    </>
}