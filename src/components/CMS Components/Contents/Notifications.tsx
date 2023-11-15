import { Flex, Group } from "@mantine/core";
import { CheckRounded } from "@mui/icons-material";

export default function Notification() {
  return (
    <>
      <Flex direction={"column"} className="NotificationContainer" gap={"md"}>
        <h3>Notifications</h3>
        <Flex justify={"space-between"}>
          <Group gap={"md"}>
            <h4>All</h4>
            <h4>Unread</h4>
          </Group>
          <Group gap={"md"}>
            <CheckRounded className="check" />
            <h4>Mark all as read</h4>
          </Group>
        </Flex>
      </Flex>
    </>
  );
}
