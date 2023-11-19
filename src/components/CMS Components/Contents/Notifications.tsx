import { Avatar, Flex, Group, ScrollArea, Text } from "@mantine/core";
import { CheckRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";

export default function Notification() {
  const [isUnread, setIsUnread] = useState(true);
  type notificationsData = {
    title: string;
    description: string;
    timestamp: string;
    isRead: boolean;
  };

  const [notificationsList, setNotificationsList] = useState<
    notificationsData[]
  >([]);

  const notificationsL: notificationsData[] = [
    {
      title: "Notif1",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "7:00AM",
      isRead: false,
    },
    {
      title: "Notif2",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "7:00AM",
      isRead: true,
    },
    {
      title: "Notif3",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "10:00AM",
      isRead: false,
    },
    {
      title: "Notif3",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "9:00AM",
      isRead: true,
    },
    {
      title: "Notif3",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "9:00AM",
      isRead: false,
    },
    {
      title: "Notif3",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "9:00AM",
      isRead: true,
    },
    {
      title: "Notif3",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "9:00AM",
      isRead: false,
    },
    {
      title: "Notif3",
      description:
        "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tempore eum eos recusandae explicabo facilis consequuntur sunt veniam numquam molestias dolor, earum rerum, vel possimus. Maxime quos architecto earum harum!",
      timestamp: "9:00AM",
      isRead: false,
    },
  ];

  useEffect(() => {
    setNotificationsList(notificationsL);
  }, []);

  const renderNotificationsAll = notificationsList.map(
    (item: notificationsData) => {
      return (
        <Flex justify={"space-between"} className="notificationsFlexBox">
          <Flex gap={"md"}>
            <Avatar
              src={
                "https://media.tenor.com/A18Em1XffR4AAAAd/bocchi-the-rock-anime.gif"
              }
              size={"xl"}
            ></Avatar>
            <Flex direction={"column"}>
              <Text fw={"bold"} size="xl">
                {item.title}
              </Text>
              <Text fw={item.isRead ? "" : "bolder"}>{item.description}</Text>
            </Flex>
          </Flex>

          <Flex align={"center"} style={{ color: "var(--Grey)" }}>
            <h5>{item.timestamp}</h5>
          </Flex>
        </Flex>
      );
    }
  );

  const markAllAsReadInPlace = () => {
    const updatedNotifications = notificationsList.map((notification) => {
      return { ...notification, isRead: true };
    });

    setNotificationsList(updatedNotifications);
  };

  const renderNotificationsUnread = notificationsList.map(
    (item: notificationsData) => {
      if (!item.isRead) {
        return (
          <Flex justify={"space-between"} className="notificationsFlexBox">
            <Flex gap={"md"}>
              <Avatar
                src={
                  "https://media.tenor.com/A18Em1XffR4AAAAd/bocchi-the-rock-anime.gif"
                }
                size={"xl"}
              ></Avatar>
              <Flex direction={"column"}>
                <Text fw={"bold"} size="xl">
                  {item.title}
                </Text>
                <Text fw={item.isRead ? "" : "bolder"}>{item.description}</Text>
              </Flex>
            </Flex>

            <Flex align={"center"} style={{ color: "var(--Grey)" }}>
              <h5>{item.timestamp}</h5>
            </Flex>
          </Flex>
        );
      }
    }
  );

  return (
    <>
      <Flex direction={"column"} className="NotificationContainer" gap={"md"}>
        <h3>Notifications</h3>
        <Flex justify={"space-between"}>
          <Group gap={"md"}>
            <Text
              size="lg"
              fw={isUnread ? "" : "bolder"}
              td={isUnread ? "" : "underline"}
              onClick={() => setIsUnread(false)}
            >
              All
            </Text>
            <Text
              size="lg"
              fw={!isUnread ? "" : "bolder"}
              td={!isUnread ? "" : "underline"}
              onClick={() => setIsUnread(true)}
            >
              Unread
            </Text>
          </Group>
          <Flex align={"center"} gap={"sm"} onClick={markAllAsReadInPlace}>
            <CheckRounded className="check" />
            <Text size="lg">Mark all as read</Text>
          </Flex>
        </Flex>
        <ScrollArea className="notificationFlexBoxContainer">
          <Flex direction={"column"}>
            {!isUnread ? (
              renderNotificationsAll
            ) : !renderNotificationsUnread[0] ? (
              <h4 className="centerText">No unread notifications</h4>
            ) : (
              renderNotificationsUnread
            )}
          </Flex>
        </ScrollArea>
      </Flex>
    </>
  );
}
