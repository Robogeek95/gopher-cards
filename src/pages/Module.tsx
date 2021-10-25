import React, { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Grid, GridItem, Stack, Text } from "@chakra-ui/layout";
import { useParams, Redirect, useHistory } from "react-router-dom";
import dummyCards from '../utils/cards.json'

import {
  FaBackward,
  FaChevronLeft,
  FaFlag,
  FaForward,
  FaShare,
} from "react-icons/fa";
import Flashcard from "../components/Flashcard";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Card } from "../types";

export default function Module() {
  const [currentCard, setCurrentCard] = useState<Card>({ front: "", back: "" })
  const [cardIndex, setCardIndex] = useState(0)

  useEffect(() => {
    setCurrentCard(dummyCards[cardIndex])
  }, [cardIndex])

  function handleIncrement() {
    if (cardIndex < dummyCards.length - 1) {
      setCardIndex(cardIndex + 1)
    }
  }

  function handleDecrement() {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1)
    } else {
      setCardIndex(0)
    }
  }

  const { module } = useParams();
  const history = useHistory();
  console.log();
  useEffect(() => {
    switch (module) {
      case "advanced":
      case "intermediate":
      case "beginner":
        break;

      default:
        history.push("/");
        break;
    }
  }, [history, module]);

  return (
    <Grid templateRows="auto 1fr auto" height="100vh">
      <NavBar />

      <Box bg={useColorModeValue("gray.50", "blue.800")}>
        <Grid justifyContent="center" py={20}>
          <GridItem>
            <Stack spacing="6">
              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row">
                  <IconButton
                    size="md"
                    fontSize="lg"
                    color="current"
                    marginLeft="2"
                    icon={<FaChevronLeft />}
                    _hover={{
                      bg: "blue.500",
                      color: "gray.300",
                    }}
                    as="a"
                    href="/#modules"
                    aria-label={`back`}
                  />

                  <Text
                    fontSize="2xl"
                    fontWeight="semibold"
                    textTransform="capitalize"
                  >
                    {module}
                  </Text>
                </Stack>

                <Stack direction="row">
                  <IconButton
                    size="md"
                    fontSize="lg"
                    // color="red"
                    marginLeft="2"
                    colorScheme="red"
                    icon={<FaFlag />}
                    _hover={{
                      bg: "blue.500",
                      color: "gray.300",
                    }}
                    aria-label={`report`}
                  />

                  <IconButton
                    colorScheme="blue"
                    size="md"
                    fontSize="lg"
                    color="current"
                    marginLeft="2"
                    bg="blue.400"
                    icon={<FaShare />}
                    _hover={{
                      bg: "blue.500",
                      color: "gray.300",
                    }}
                    aria-label={`Share`}
                  />
                </Stack>
              </Stack>

              <Flashcard card={currentCard} />

              <Stack direction="row" justifyContent="space-between">
                <Stack direction="row"></Stack>

                <Stack direction="row">
                  <IconButton
                    size="md"
                    fontSize="lg"
                    color="current"
                    marginLeft="2"
                    icon={<FaBackward />}
                    _hover={{
                      bg: "blue.500",
                      color: "gray.300",
                    }}
                    aria-label={`Prev`}
                    onClick={handleDecrement}
                  />

                  <IconButton
                    size="md"
                    fontSize="lg"
                    color="current"
                    marginLeft="2"
                    icon={<FaForward />}
                    _hover={{
                      bg: "blue.500",
                      color: "gray.300",
                    }}
                    aria-label={`Next`}
                    onClick={handleIncrement}
                  />
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Box>

      <Footer />
    </Grid>
  );
}
