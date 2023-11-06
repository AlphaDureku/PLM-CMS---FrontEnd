import "@mantine/core/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";


function App() {

  return (
    <>
      <HomePageNavbar />
      <Image
        src="/images/HomePage/RedBlob.png"
        className="HomeBlobImage"
        height={1000}
        w="auto"
      />{" "}
      <Image
        src="/images/HomePage/BuildingBlob.png"
        className="HomeBlobImage"
        height={1000}
        w="auto"
      />
      <Image
        src="/images/HomePage/PLM_LogoBG.png"
        className="HomeLogoBG"
        height={1000}
        w="auto"
      />
      <div className="Main_Container">
        {/* <UserProfile name="Mark Angelo Templanza" role="Administrator" />
        <br />
        <CheckBox item="Option 1" />
        <br />
        <RadioButton item="Option 1" />
        <br />
        <CustomButton text="Sample Text" color="var(--Yellow)" size="lg" />
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
        /> */}
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

export default App;
