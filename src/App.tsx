import { Image } from "@mantine/core";
import "@mantine/core/styles.css";
import HomePageNavbar from "./components/Home Page Components/NavBar";
import MissonVision from "./components/Home Page Components/Sections/MissionVission";
import NewsNAnnouncement from "./components/Home Page Components/Sections/NewsNAnnouncement";
import QuickAccess from "./components/Home Page Components/Sections/QuickAccess";

import CheckBox from "./components/Reusable Components/CheckBox";
import CustomButton from "./components/Reusable Components/CustomButton";
import DropDownItem from "./components/Reusable Components/DropDownItem";
import ExitBtn from "./components/Reusable Components/ExitButton";
import LongCard from "./components/Reusable Components/LongCard";
import RadioButton from "./components/Reusable Components/RadioButton";
import ShortCard from "./components/Reusable Components/ShortCard";
import TextBox from "./components/Reusable Components/TextBox";
import TextBoxWithHint from "./components/Reusable Components/TextboxWithHint";
import UserProfile from "./components/Reusable Components/UserProfile";

function App() {
  document.title = "PLM";
  return (
    <>
      <HomePageNavbar />
      <Image
        src="/images/RedBlob.png"
        className="HomeBlobImage"
        height={1000}
        w="auto"
      />{" "}
      <Image
        src="/images/BuildingBlob.png"
        className="HomeBlobImage"
        height={1000}
        w="auto"
      />
      <Image
        src="/images/PLM_LogoBG.png"
        className="HomeLogoBG"
        height={1000}
        w="auto"
      />
      <div className="Main_Container">
        <UserProfile name="Mark Angelo Templanza" role="Administrator" />
        <br />
        <CheckBox item="Option 1" />
        <br />
        <RadioButton item="Option 1" />
        <br />
        <CustomButton text="Sample Text" color="var(--Yellow)" />
        <br></br>
        <DropDownItem list={["Option 1", "Option 2", "Option 3"]} />
        <br></br>
        <ShortCard
          GotoLink="youtube.com"
          ImageLink="https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif"
          Title="Bocchi the Rock"
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt."
        />
        <br></br>
        <TextBoxWithHint inputHint="Input Hint" />
        <br></br>
        <TextBox />
        <br></br>
        <ExitBtn topText="Top Label" bottomText="Bottom Label" />

        <LongCard
          ImageLink="https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif"
          Title="Bocchi the Rock"
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt"
          BottomRow={{
            Date: "10/29/23",
            Time: "9:00PM",
            BtnLink: "youtube.com",
          }}
        />
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
    </>
  );
}

export default App;
