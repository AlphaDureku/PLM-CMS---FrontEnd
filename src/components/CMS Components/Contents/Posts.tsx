import { Flex, ScrollArea } from "@mantine/core";
import CreatePost from "./Posts Components/CreatePost";

export default function Posts({ selectedGrandChild }) {

  let content;
  switch (selectedGrandChild) {
    case "View Posts":
      content = <h3>View Posts</h3> ;
      break;
    case "Create Posts":
      content = <CreatePost/>;
    break;
    case "Manage Posts":
      content = <h3>Manage Posts</h3>;
      break;
    default:
      content = null;
  }

  return (
    <Flex direction="column" align="center" gap="lg">
      <Flex
        align="center"
        className="ContentMaxWidth"
        justify="space-around"
      >
      </Flex>
      {content}
    </Flex>
  );
}
