import "@mantine/core/styles.css";
import HomePageNavbar from "./components/Home Page Components/NavBar";
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
          ImageLink="https://media.tenor.com/e046riJYwWwAAAAC/bocchi-bocchi-the-rock.gif"
          Title="Bocchi the Rock"
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt, rem recusandae mollitia alias a! Eos laborum cupiditate consectetur quam."
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
          Description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quaerat perspiciatis non eligendi blanditiis delectus hic! Est in ab incidunt, rem recusandae mollitia alias a! Eos laborum cupiditate consectetur quam."
          BottomRow={{
            Date: "10/29/23",
            Time: "9:00PM",
            BtnLink: "youtube.com",
          }}
        />
      </div>
    </>
  );
}

export default App;
