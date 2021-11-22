import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2020 Gopher Cards. All rights reserved</Text>
        
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={4}
        >
          <IconButton
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color="current"
            href={"#"}
            _hover={{
              bg: "blue.500",
              color: "gray.300",
            }}
            isRound
            aria-label="github-icon"
            icon={<FaGithub />}
          />

          <IconButton
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color="current"
            href={"#"}
            _hover={{
              bg: "blue.500",
              color: "gray.300",
            }}
            isRound
            aria-label="twitter-icon"
            icon={<FaTwitter />}
          />

          <IconButton
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color="current"
            href={"#"}
            _hover={{
              bg: "blue.500",
              color: "gray.300",
            }}
            isRound
            aria-label="linkedin-icon"
            icon={<FaLinkedin />}
          />
        </Stack>
      </Container>
    </Box>
  );
}
