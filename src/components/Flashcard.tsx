import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, Text } from "@chakra-ui/layout";
import React from "react";

export default function Flashcard() {
  return (
    <>
      <Flex
        shadow="lg"
        justifyContent="center"
        alignItems="center"
        w={"540px"}
        h={"340px"}
        px="12"
        borderRadius="25"
        bg={useColorModeValue("white", "gray.600")}
      >
        <Text textAlign="center">
          A programming language for which most of its implementations execute
          instructions directly, without previously compiling a program into
          machine-language instructions.
        </Text>
      </Flex>
    </>
  );
}
