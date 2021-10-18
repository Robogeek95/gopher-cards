import React from "react";
import {
  Box,
  chakra,
  Container,
  Flex,
  Text,
  SimpleGrid,
  useColorModeValue,
  Stack,
  IconButton,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router-dom";

const modules = [
  {
    module: "Beginner",
    label: "Chief Marketing Officer",
    summary:
      "It really saves me time and effort. It is exactly what our business has been lacking. is the most valuable business resource we have EVER purchased. After using my business skyrocketed!",
    avatar: "/images/gopher3.png",
  },
  {
    module: "Intermediate",
    label: "Entrepreneur",
    summary:
      "I didn't even need training. We've used  for the last five years. I have gotten at least 50 times the value from . I made back the purchase price in just 48 hours!",
    avatar: "/images/gopher2.png",
  },
  {
    module: "Advanced",
    label: "Movie star",
    summary:
      "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go,  is the coolest, most happening thing around! I love !",
    avatar: "images/gopher4.png",
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

interface TestimonialCardProps {
  module: string;
  label: string;
  summary: string;
  avatar: string;
  index: number;
}

function TestmonialCard(props: TestimonialCardProps) {
  const { module, summary, label, avatar, index } = props;
  return (
    <Stack
      boxShadow={"lg"}
      maxW={"640px"}
      direction={{ base: "column-reverse", md: "row" }}
      width={"full"}
      rounded={"xl"}
      p={10}
      spacing={6}
      alignItems="center"
      position={"relative"}
      bg={useColorModeValue("white", "gray.800")}
      _before={{
        content: '""',
        position: "absolute",
        zIndex: "-1",
        height: "full",
        maxW: "640px",
        width: "full",
        filter: "blur(40px)",
        transform: "scale(0.98)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Box
        rounded={"xl"}
        bg={`url(${avatar})`}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        height={"120px"}
        width={"360px"}
        alignSelf={"center"}
      />

      <Flex
        direction={"column"}
        textAlign={"left"}
        justifyContent={"space-between"}
      >
        <Text fontSize="xl" fontWeight={"bold"} pb={4}>
          {module}
        </Text>
        <chakra.p fontSize={14}>
          {summary}
          <chakra.span fontWeight={"medium"} color={"gray.500"}>
            {" "}
            - {label}
          </chakra.span>
        </chakra.p>
      </Flex>

      <IconButton
        icon={<ArrowRightIcon />}
        aria-label="continue"
        color="blue.800"
        _hover={{
          color: "white",
          bg: "blue.800",
        }}
        as="a"
        href={`/${module.toLowerCase()}`}
      />
    </Stack>
  );
}

export default function Modules() {
  // const history = useHistory();

  return (
    <Box py="20" id="modules">
      <Container maxW="container.lg">
        <Flex
          flexDirection="column"
          justifyContent="center"
          width={{ base: "full", sm: "lg", lg: "xl" }}
          margin={"auto"}
          textAlign="center"
        >
          <chakra.h3
            fontWeight={"bold"}
            fontSize={20}
            textTransform={"uppercase"}
            color={"purple.400"}
          >
            Learn in modules
          </chakra.h3>
          <chakra.h1
            py={5}
            fontSize={48}
            fontWeight={"bold"}
            color={useColorModeValue("gray.700", "gray.50")}
          >
            Choose where you start
          </chakra.h1>
          <chakra.h2
            margin={"auto"}
            width={"70%"}
            fontWeight={"medium"}
            color={useColorModeValue("gray.500", "gray.400")}
          >
            Modules are well grouped by aasasasdhsdjda jhasjhash sasjhsjhasjh
            ahshgashg
          </chakra.h2>
        </Flex>
        <SimpleGrid
          spacing={"20"}
          justifyContent="center"
          mt={"28"}
          mx={"auto"}
          // w="container.lg"
        >
          {modules.map((cardInfo, index) => (
            <TestmonialCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
