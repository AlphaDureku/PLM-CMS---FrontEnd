import { Image } from "@mantine/core";
import useIntersectionObserver from "../CustomHooks/observerClass";
import HomePageFooter from "../Home Page Components/Footer";
import HomePageNavbar from "../Home Page Components/NavBar";
import HeroSection from "../Home Page Components/Sections/HeroSection";
import MissonVision from "../Home Page Components/Sections/MissionVission";
import NewsNAnnouncement from "../Home Page Components/Sections/NewsNAnnouncement";
import QuickAccess from "../Home Page Components/Sections/QuickAccess";

export default function Home() {
  document.title = "PLM";

  useIntersectionObserver([
    { selector: ".hidden" },
    { selector: ".left", additionalClass: "slideFromLeft" },
    { selector: ".top", additionalClass: "slideFromTop" },
    { selector: ".bottom", additionalClass: "slideFromBottom" },
    { selector: ".right", additionalClass: "slideFromRight" },
  ]);

  return (
    <>
      <HomePageNavbar />
      <Image
        src="/images/HomePage/RedBlob.png"
        className="HomeBlobImage hidden slideFromLeft"
        height={1000}
        w="auto"
      />{" "}
      <Image
        src="/images/HomePage/BuildingBlob.png"
        className="HomeBlobImage hidden"
        height={1000}
        w="auto"
      />
      <Image
        src="/images/HomePage/PLM_LogoBG.png"
        className="HomeLogoBG hidden slideFromRight"
        height={900}
        w="auto"
      />
      <div className="Main_Container">
        <HeroSection />
        <QuickAccess
          items={[
            {
              GotoLink: "youtube.com",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "youtube.com",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "youtube.com",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "youtube.com",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "youtube.com",
              ImageLink:
                "https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif",
              Title: "Bocchi the Rock",
              Description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt.",
            },
            {
              GotoLink: "youtube.com",
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
                BtnLink: "Youtube.com",
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
                BtnLink: "Youtube.com",
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
                BtnLink: "Youtube.com",
              },
            },
          ]}
        />
      </div>
      <HomePageFooter />
    </>
  );
}
