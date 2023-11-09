import { Flex, Modal } from "@mantine/core";
import CustomButton from "./CustomButton";

type Props = {
  title?: string;
  body: string;
  modalHandler: {
    opened: boolean;
    close: () => void;
  };
  buttonChoices: {
    Yes: () => void;
    No?: () => void;
  };
};

export default function ModalWithChoices({
  title,
  modalHandler,
  body,
  buttonChoices,
}: Props) {
  return (
    <Modal
      withCloseButton={false}
      opened={modalHandler.opened}
      onClose={modalHandler.close}
      title={title}
      centered
    >
      <div style={{ margin: "5%" }}>
        <h4 style={{ textAlign: "center" }}>{body}</h4>
        <Flex justify="center" gap={"md"} style={{ marginTop: "5%" }}>
          <CustomButton
            text="Yes"
            color="var(--Red)"
            size="md"
            onClick={buttonChoices.Yes}
          ></CustomButton>
          <CustomButton
            text="No"
            color="var(--Yellow)"
            size="md"
            onClick={buttonChoices.No ? buttonChoices.No : modalHandler.close}
          ></CustomButton>
        </Flex>
      </div>
    </Modal>
  );
}
