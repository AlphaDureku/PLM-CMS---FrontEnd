import "@mantine/core/styles.css";
import Cards from "./components/Card";
import CheckBox from "./components/CheckBox";
import CustomButton from "./components/CustomButton";
import DropDownItem from "./components/DropDownItem";
import RadioButton from "./components/RadioButton";
import UserProfile from "./components/UserProfile";
function App() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block" }}>
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
          <Cards />
        </div>
      </div>
    </>
  );
}

export default App;
