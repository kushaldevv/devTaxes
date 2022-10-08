import { Center, Wrap, WrapItem, Text, Box, chakra } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";

function Services() {
  return (
    <Box
      pt="10"
      bgImage="/pictures/blob1.png"
      bgSize="cover"
      backgroundRepeat="no-repeat"
      bgPosition="center center"
      minH="100vh"
      h="100%"
      w="100vw"
    >
      <Center>
        <Text
          color="gray.700"
          fontSize={["30px", "40px", "50px", "4.25vw"]}
          fontFamily="'Fira Code', monospace"
          fontWeight="800"
        >
          {" "}
          OUR SERVICES
        </Text>
      </Center>
      <Center>
        <Wrap
          pos="relative"
          pt="5%"
          px="90px"
          pb="36px"
          justify="center"
          textAlign="center"
          lineHeight={["25px", "25px", "25px", "25px", "1.5vw"]}
        >
          <WrapItem>
            <Card
              cardTitle="Personal & Buisness Filing"
              cardImg="/pictures/tax.jpg"
              cardText={
                <chakra.p
                  my="1vh"
                  color="gray.800"
                  fontSize={["16px", "16px", "16px", "16px", "1vw"]}
                >
                  Form 1040 Series
                  <br />
                  Any State Return
                  <br />
                  Corporate 1120 /1120S
                  <br />
                  Partnership 1065
                  <br />
                  Nonprofit 990
                  <br />
                  Any state Sales tax
                  <br />
                  Health Insurance Enrollment
                </chakra.p>
              }
            />
          </WrapItem>
          <WrapItem>
            <Card
              cardTitle="Bookkeeping"
              cardImg="/pictures/book.jpg"
              cardText={
                <chakra.p
                  my="1vh"
                  color="gray.800"
                  fontSize={["16px", "16px", "16px", "16px", "1vw"]}
                >
                  Manage Your Bills
                  <br />
                  Invoice Your Customers
                  <br />
                  Bank Account Reconciliation
                  <br />
                  Balance Sheet, Profit and Loss, Cash Flow
                  <br />
                  Sales Tax Preparation
                </chakra.p>
              }
            />
          </WrapItem>
          <WrapItem>
            <Card
              cardTitle="Payroll Services"
              cardImg="/pictures/payroll.jpg"
              cardText={
                <chakra.p
                  my="1vh"
                  color="gray.800"
                  fontSize={["16px", "16px", "16px", "16px", "1vw"]}
                >
                  Full Payroll Services
                  <br />
                  Employer Taxes 940, 941, 944
                  <br />
                  Year end W2/1099 Filing
                </chakra.p>
              }
            />
          </WrapItem>
        </Wrap>
      </Center>
    </Box>
  );
}
export default Services;
