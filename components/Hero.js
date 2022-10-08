import React from "react";
import { Center, Button, Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
import NextLink from "next/link";
import Timer from "./Timer";
import Tilt from "react-parallax-tilt";
import iPadMockup from '../public/pictures/iPadMockup.png'
export default function Hero() {
  return (
    <Box
      pt={["75px", "0", "0", "0"]}
      color="rgb(11, 35, 75)"
      textAlign="center"
      fontFamily=".SF NS"
      fontWeight="800"
    >
      <Text display="inline" fontSize={["30px", "50px", "72px", "72px", "5vw"]}>
        DEV TAX & ACCOUNTING<br></br>
      </Text>
      <Text
        display="inline"
        fontSize={["22.5px", "40px", "62px", "62px", "4vw"]}
      >
        TAXES{" "}
      </Text>
      <Text
        display="inline"
        bgGradient="linear(to-r, cyan.300, blue.400, purple.600)"
        bgClip="text"
        fontSize={["22.5px", "40px", "62px", "62px", "4vw"]}
      >
        DONE RIGHT
      </Text>
      <Text
        display="inline"
        fontSize={["22.5px", "40px", "62px", "62px", "4vw"]}
      >
        {" "}
        ✔
      </Text>
      <Text
        color="gray.600"
        fontSize={["14px", "16px", "21px", "21px", "1.25vw"]}
        fontWeight="400"
      >
        We specialize in personal & business tax along with <br></br> accounting
        services.
      </Text>
      <Center mt="5">
        <NextLink href="#Services" passHref>
          <Button
            height={["40px", "40px", "40px", "40px", "2.75vw"]}
            width={["125px", "125px", "125px", "125px", "10vw"]}
            bg="transparent"
            fontSize={["16px", "16px", "16px", "16px", "1.15vw"]}
            px="6"
            mr="5"
            color="#3d53db"
            rounded="full"
            border="solid 1px #3d53db"
            boxShadow={
              "0px 2px 25px -5px rgb(61 83 220 / 48%), 0 10px 10px -5px rgb(61 83 220 / 43%)"
            }
            _active={{ boxShadow: "none" }}
            _hover={{
              bg: "transparent",
            }}
          >
            Services
          </Button>
        </NextLink>
        <NextLink href="contact" passHref>
          <Button
            height={["40px", "40px", "40px", "40px", "2.75vw"]}
            width={["125px", "125px", "125px", "125px", "10vw"]}
            px={["8", "8", "8", "8"]}
            py={["0", "0", "0", "0"]}
            bg="#3d53db"
            color="white"
            fontSize={["16px", "16px", "16px", "16px", "1.15vw"]}
            rounded="full"
            boxShadow={
              "0px 1px 25px -5px rgb(61 83 220 / 48%), 0 10px 10px -5px rgb(61 83 220 / 43%)"
            }
            _hover={{ bg: "#3d53db" }}
            _active={{ boxShadow: "none" }}
          >
            Book Today
          </Button>
        </NextLink>
      </Center>
      <Center py="20" position="relative">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.75}
          glarePosition="all"
          glareBorderRadius="5%"
        >
          <Box borderRadius="5%" boxShadow="20px 20px 50px rgba(0,0,0,0.75)"
          width={["75vw", "75vw", "45vw", "35vw"]}>
            <Image
              src={iPadMockup}
              alt="ipad"
            />
          </Box>
          <Timer />
        </Tilt>
      </Center>
    </Box>
  );
}
