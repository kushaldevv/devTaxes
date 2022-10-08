import React from "react";
import { Box, Flex, Image, chakra } from "@chakra-ui/react";
import Tilt from 'react-parallax-tilt'

export const Card = ({ cardTitle, cardText, cardImg }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      mx='20px'
      my='70px'
      zIndex='1'
    >
      <Tilt
        perspective={1000}
      >
        <Box
          py={4}
          px={8}
          bg="rgba(255,255,255,0.1)"
          _dark={{ bg: "gray.800" }}
          shadow="lg"
          borderRadius='5%'
          // rounded="lg"
          w={["320px", "320px", "320px", "320px", "20vw"]}
          h={["400px", "400px", "400px", "400px", "25vw"]}
          boxShadow='15px 15px 30px rgba(0,0,0,0.5)'
          borderTop='1px solid rgba(255,255,255,0.5)'
          borderLeft='1px solid rgba(255,255,255,0.5)'
        >
          <Flex justifyContent='center' mt={-16}>
            <Image
              w={['150px', '150px', '150px', '150px', '7.5vw']}
              h={['150px', '150px', '150px', '150px', '7.5vw']}
              fit="cover"
              rounded="full"
              boxShadow={'0 0 0 0, 0 18px 15px -5px rgb(0 0 0 / 60%)'}
              alt=""
              src={cardImg}
              filter='grayscale(100%)'
            />
            <Box bgGradient='linear(to-r, #ef99bc, #4b53db)' pos='absolute'
              w={['150px', '150px', '150px', '150px', '7.5vw']}
              h={['150px', '150px', '150px', '150px', '7.5vw']}
              rounded="full"
              opacity='0.6'
            ></Box>
          </Flex>

          <chakra.h2
            pt='3vh'
            color="gray.600"
            fontSize={['18px', '18px', '18px', '18px', '1.3vw']}
            fontWeight='800'
          >
            {cardTitle}
          </chakra.h2>
          {cardText}
        </Box>
      </Tilt>
    </Flex>
  );
};

