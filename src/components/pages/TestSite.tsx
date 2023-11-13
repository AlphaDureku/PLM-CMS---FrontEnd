import { useDisclosure } from "@mantine/hooks";
// import { CMSSideBar } from "../CMS Components/SideNavBar";
import { ThemeIcon } from "@mantine/core";
import { Check, Delete } from "@mui/icons-material";
import { IconEdit } from "@tabler/icons-react";
import CustomButton from "../Reusable Components/CustomButton";
import ModalWithChoices from "../Reusable Components/ModalWithChoices";
import TextBox from "../Reusable Components/TextBox";
export default function TestSite() {
  //To add functionality
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <ModalWithChoices
        modalHandler={{ opened, close }}
        body="Are you sure you want to deactivate account?"
        buttonChoices={{
          Yes: () => console.log("Yes"),
        }}
      />
      <CustomButton
        text="Do Something"
        color="green"
        size="lg"
        onClick={open}
      />
      <TextBox type="password" placeholder="Enter Password" />
      {/* <CMSSideBar /> */}

      <ThemeIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from: "blue", to: "cyan", deg: 90 }}
        className="makeHoverable"
      >
        <IconEdit style={{ width: "70%", height: "70%" }} />
      </ThemeIcon>
      <ThemeIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from: "red", to: "pink", deg: 90 }}
        className="makeHoverable"
      >
        <Delete style={{ width: "70%", height: "70%" }} />
      </ThemeIcon>
      <ThemeIcon
        variant="gradient"
        size="xl"
        aria-label="Gradient action icon"
        gradient={{ from: "var(--Yellow)", to: "yellow", deg: 90 }}
        className="makeHoverable"
      >
        <Check style={{ width: "70%", height: "70%" }} />
      </ThemeIcon>
    </>
  );
}
