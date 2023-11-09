import { useDisclosure } from "@mantine/hooks";
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
    </>
  );
}
