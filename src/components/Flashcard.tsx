import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useRef } from "react";
import { Card } from '../types'

type FlashCardProps = {
  card: Card
}

export default function Flashcard({ card }: FlashCardProps) {
  const flipRef = useRef<HTMLDivElement>(null);
  function handleFlip() {
    let element = flipRef?.current;
    if (element) {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

  return (
    <>
      <Box
        shadow="lg"
        w={"540px"}
        h={"340px"}
        px="12"
        borderRadius="25"
        bg={useColorModeValue("white", "gray.600")}
        sx={{
          perspective: '1000px',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          cursor: 'pointer',
        }}
        onClick={() => handleFlip()}
        ref={flipRef}
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          sx={{
            transition: "transform 0.8s",
            transformStyle: "preserve-3d",
            width: "100%",
            height: "100%"
          }}>
          {/* front */}
          <Box sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            backfaceVisibility: 'hidden',
          }}
          >
            <Text textAlign="center">
              {card.front}
            </Text>
          </Box>

          {/* back */}
          <Box sx={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
            onClick={(e) => handleFlip(e)}
          >
            <Text textAlign="center">
              {card.back}
            </Text>
          </Box>
        </Flex>


      </Box>

    </>
  );
}
