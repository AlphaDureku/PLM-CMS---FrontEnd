import { Avatar, Flex, Group, ScrollArea, Spoiler, Text } from "@mantine/core";
import { CheckRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { notificationsData } from "../../../Types/CmsPage";

export default function Notification() {
  const [isUnread, setIsUnread] = useState(true);


  const [notificationsList, setNotificationsList] = useState <
    notificationsData[]
    > ([]);

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


  const NotificationList = () => {
    const filteredNotifications = isUnread
      ? notificationsList.filter((item) => !item.isRead)
      : notificationsList;

    const styles = {

    }
    return (
      <>
        {filteredNotifications.map((item, index) => (
          <Flex justify={'space-between'} className="notificationsFlexBox" key={index} >
            <Flex gap={'md'} align={'center'}>
              <Avatar
                src={
                  'https://media.tenor.com/A18Em1XffR4AAAAd/bocchi-the-rock-anime.gif'
                }
                size={'xl'}
              ></Avatar>
              <Flex direction={'column'}>
                <h3 className="responsive_H4">
                  {item.title}
                </h3>
                <Spoiler maxHeight={50} showLabel="..." hideLabel="Hide" transitionDuration={0}>
                  <p className={`responsive_P ${item.isRead ? "" : "bold"}`}>{item.description}</p>
                </Spoiler>
              </Flex>
            </Flex>

            <Flex align={'center'} style={{ color: 'var(--Grey)' }}>
              <h5>{item.timestamp}</h5>
            </Flex>
          </Flex >
        ))
        }
      </>
    );
  };

  const markAllAsReadInPlace = () => {
    const updatedNotifications = notificationsList.map((notification) => {
      return { ...notification, isRead: true };
    });

    setNotificationsList(updatedNotifications);
  };


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
        <div className="notificationFlexBoxContainer">
          {NotificationList()}
        </div>
      </Flex>
    </>
  );
}
