import { Affix, Flex, Image, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import useIntersectionObserver from "../../CustomHooks/observerClass";

import HeroSection from "../../Home Page Components/Sections/HeroSection";
import MissonVision from "../../Home Page Components/Sections/MissionVission";
import NewsNAnnouncement from "../../Home Page Components/Sections/NewsNAnnouncement";
import QuickAccess from "../../Home Page Components/Sections/QuickAccess";
export default function Home() {
  document.title = "PLM";
  const [scroll] = useWindowScroll();
  useIntersectionObserver([
    { selector: ".hidden", additionalClass: "show" },
    { selector: ".left", additionalClass: "slideFromLeft" },
    { selector: ".top", additionalClass: "slideFromTop" },
    { selector: ".bottom", additionalClass: "slideFromBottom" },
    { selector: ".right", additionalClass: "slideFromRight" },
  ]);
  const scrollToTarget = () => {
    const targetDiv = document.getElementById("Explore");
    const navbarElement = document.getElementById("HomeNav");

    if (targetDiv && navbarElement) {
      const navbarHeight = navbarElement.offsetHeight;
      const targetPosition = targetDiv.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Affix className="exploreAffix">
        <Transition transition="slide-up" mounted={scroll.y == 0}>
          {(transitionStyles) => (
            <Flex
              align={"center"}
              style={transitionStyles}
              onClick={scrollToTarget}
              className="makeHoverable"
            >
              <h2>Explore</h2>
              <KeyboardArrowDownRounded fontSize={"large"} />
            </Flex>
          )}
        </Transition>
      </Affix>
      <Image
        src="/images/HomePage/RedBlob.png"
        className="HomeBlobImage  left"
        height={1000}
        w="auto"
      />{" "}
      <Image
        src="/images/HomePage/BuildingBlob.png"
        className="HomeBlobImage "
        height={1000}
        w="auto"
      />
      <Image
        src="/images/HomePage/PLM_LogoBG.png"
        className="HomeLogoBG  right"
        height={900}
        w="auto"
      />
      <div className="Main_Container">
        <HeroSection />
        <QuickAccess
          items={[
            {
              GotoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
          ]}
        />
        <MissonVision />
        <NewsNAnnouncement
          items={[
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
          ]}
        />
      </div>
      {/* <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 2000}>
          {(transitionStyles) => (
            <Flex
              align={"center"}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              className="makeHoverable"
            >
              <h2>Back to Top</h2>
              <KeyboardArrowUpRounded fontSize={"large"} />
            </Flex>
          )}
        </Transition>
      </Affix> */}
    </>
  );
}
