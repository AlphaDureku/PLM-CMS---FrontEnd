import "@mantine/core/styles.css";
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
  return (
    <>
      <div className="MainContainer">
        <UserProfile />
        <br />
        <CheckBox item="Option 1" />
        <br />
        <RadioButton item="Option 1" />
        <br />
        <CustomButton />
        <br></br>
        <DropDownItem />
        <br></br>
        <ShortCard />
        <br></br>
        <TextBoxWithHint inputHint="Input Hint" />
        <br></br>
        <TextBox />
        <br></br>
        <ExitBtn topText="Top Label" bottomText="Bottom Label" />

        <LongCard />
      </div>
    </>
  );
}

export default App;
