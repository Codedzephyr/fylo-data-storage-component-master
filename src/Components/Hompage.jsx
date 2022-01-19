import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text, useColorMode } from "@chakra-ui/react";


const { colorMode } = useColorMode();

const theme = extendTheme({
  Neutral: {
    Pale_Blue: "hsl(243, 100%, 93%)",
    Grayish_Blue: " hsl(229, 7%, 55%)",
    Very_Dark_Blue: "hsl(229, 57%, 11%)",
    Dark_Blue: "hsl(228, 56%, 26%)",
  },
});


const Hompage = () => {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Center w="100%"></Center>
        <Box w="95%" maxW="1190px" h="100vh" ></Box>
      </div>
    </ChakraProvider>
  );
};

export default Hompage;
