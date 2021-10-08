import React, { ReactNode } from "react";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  Box,
  Grid,
  useBreakpointValue,
  Container,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import { FaBuysellads, FaSdCard, FaUsers } from "react-icons/fa";

type Stats = {
  label: string;
  value: number;
  icon: ReactNode;
};

// TODO: Change icons
const stats: Array<Stats> = [
  {
    label: "modules",
    value: 3,
    icon: <FaBuysellads fontSize="30" color="blue.800" />,
  },
  {
    label: "FlashCards",
    value: 59,
    icon: <FaSdCard fontSize="30" color="blue.800" />,
  },
  {
    label: "Learners",
    value: 100,
    icon: <FaUsers fontSize="30" color="blue.800" />,
  },
];

export default function Hero() {
  return (
    <Box bg="gray.100" minH={"100vh"} py={20}>
      <Container maxW="container.lg">
        <Grid templateColumns="repeat(2, 1fr)">
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    // content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  Master Go with
                </Text>
                <br />{" "}
                <Text color={"blue.400"} as={"span"}>
                  flashcards
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                Monetize your content by charging your most loyal readers and
                reward them loyalty points. Give back to your loyal readers by
                granting them access to your
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  rounded={"full"}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Get Started
                </Button>
                <Button rounded={"full"}>How It Works</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} justifyContent="center" alignItems="center">
            <Flex
              justifyContent="center"
              alignItems="center"
              w={"540px"}
              h={"340px"}
              px="12"
              bg="white"
              borderRadius="25"
            >
              <Text textAlign="center">
                a programming language for which most of its implementations
                execute instructions directly, without previously compiling a
                program into machine-language instructions.
              </Text>
            </Flex>
          </Flex>
        </Grid>

        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={20}
          p={8}
          justifyContent="space-around"
          justifyItems="center"
          alignItems="center"
          rounded="xl"
          bg="blue.800"
          minH="180"
          mt="32"
          mx="16"
        >
          {stats.map((stat) => (
            <Flex
              justifyContent="center"
              flexDir="column"
              alignItems="center"
              alignContent="center"
              bg="gray.100"
              rounded="xl"
              h="100%"
              w="170px"
            >
              <Box>{stat.icon}</Box>
              <Box mt="3">
                <Text>
                  {stat.value} {stat.label}
                </Text>
              </Box>
            </Flex>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
