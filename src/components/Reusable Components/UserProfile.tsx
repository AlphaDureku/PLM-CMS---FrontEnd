import { Avatar, Flex } from "@mantine/core";

type Props = {
  name: string;
  role: string;
};

export default function UserProfile(props: Props) {
  return (
    <>
      <Flex className="UserProfile_Container" gap={"sm"}>
        <div>
          <Avatar src={null} alt="no image here" color="var(--Yellow)" size={"lg"} variant="filled" />

        </div>
        <div>
          <span>{props.name}</span>
          <br />
          <span>{props.role}</span>
        </div>
      </Flex>
    </>
  );
}
