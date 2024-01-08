import React, { useState } from "react";
import { Flex, ScrollArea } from "@mantine/core";

export default function Posts() {

  return (
    <Flex direction="column" align="center" gap="lg">
      <Flex
        align="center"
        className="ContentMaxWidth"
        justify="space-around"
      >
      </Flex>

      <ScrollArea
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "2%",
          height: "70vh",
        }}
      >
        <h3>Posts</h3>

      </ScrollArea>
    </Flex>
  );
}
