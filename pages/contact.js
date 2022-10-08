import { ColorModeScript } from "@chakra-ui/react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { React, useState } from "react";
import emailjs from "emailjs-com";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  Center,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
} from "react-icons/md";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send Message");
  const [loading, setLoading] = useState("");

  function sendEmail(e) {
    console.log(e);
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_ocpfnfe",
        "template_x5uodw5",
        {
          from_name: e.target[0].value,
          message: e.target[3].value,
          phone_num: e.target[2].value,
          reply_to: e.target[1].value,
        },
        EMAILJSAPIKEY
      )
      .then(
        () => {
          setLoading("");
          setButtonText("Sent!");
          e.target.reset();
        },
        () => {
          setLoading("");
          setButtonText("Error!");
          e.target.reset();
        }
      );
  }
  return (
    <>
      <ColorModeScript initialColorMode={"light"} />
      <Nav />
      <Box
        bgImage="/pictures/gradient1.jpg"
        bgSize="cover"
        backgroundRepeat="no-repeat"
        bgPosition="center center"
        h="100%"
        minH="100vh"
        w="100vw"
      >
        <Container
          py={["5vh", "0vh", "0vh", "0vh"]}
          maxW="3840px"
          mt={0}
          centerContent
          overflow="hidden"
        >
          <Flex>
            <Box
              bg="#2e1070"
              color="white"
              borderRadius="lg"
              m={{ sm: 4, md: 16, lg: 10 }}
              p={[5, 5, 16, 16, "3vw"]}
            >
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Heading fontSize={["36px", "36px", "36px", "2vw"]}>
                        Contact
                      </Heading>
                      <Text
                        mt={{ sm: 3, md: 3, lg: 5 }}
                        color="gray.500"
                        fontSize={["16px", "16px", "16px", "1vw"]}
                      >
                        Fill up the form to contact
                      </Text>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}
                          >
                            +1 301-433-2337
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}
                          >
                            info@devtaxes.com
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: "2px solid #1C6FEB" }}
                            leftIcon={
                              <MdLocationOn color="#1970F1" size="20px" />
                            }
                          >
                            Maryland
                          </Button>
                        </VStack>
                        <Center mt="5vh">
                          <IconButton
                            aria-label="facebook"
                            variant="ghost"
                            size="lg"
                            isRound={true}
                            _hover={{ bg: "#0D74FF" }}
                            icon={<MdFacebook size="50px" />}
                          />
                        </Center>
                      </Box>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <form onSubmit={sendEmail}>
                          <VStack spacing={5}>
                            <FormControl id="name">
                              <FormLabel>Your Name</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <Input
                                  type="text"
                                  size="md"
                                  isRequired
                                  name="from_name"
                                />
                              </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                              <FormLabel>Mail</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <Input
                                  isRequired
                                  type="email"
                                  name="reply_to"
                                  size="md"
                                />
                              </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                              <FormLabel>Phone</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <Input type="text" name="phone_num" size="md" />
                              </InputGroup>
                            </FormControl>
                            <FormControl id="name">
                              <FormLabel>Message</FormLabel>
                              <Textarea
                                w="35vh"
                                h="20vh"
                                borderColor="gray.300"
                                _hover={{
                                  borderRadius: "gray.300",
                                }}
                                placeholder="message"
                                isRequired
                                name="message"
                              />
                            </FormControl>
                            <FormControl id="name" float="right">
                              <Button
                                type="submit"
                                variant="solid"
                                bg="#0D74FF"
                                color="white"
                                isLoading={loading}
                                loadingText="Sending"
                                _hover={{}}
                              >
                                {buttonText}
                              </Button>
                            </FormControl>
                          </VStack>
                        </form>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Contact;
