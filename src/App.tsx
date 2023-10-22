import "@mantine/core/styles.css";
import CheckBox from "./components/CheckBox";
import CustomButton from "./components/CustomButton";
import DropDownItem from "./components/DropDownItem";
import LongCard from "./components/LongCard";
import RadioButton from "./components/RadioButton";
import ShortCard from "./components/ShortCard";
import UserProfile from "./components/UserProfile";
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

        <LongCard />
      </div>
    </>
  );
}

export default App;
