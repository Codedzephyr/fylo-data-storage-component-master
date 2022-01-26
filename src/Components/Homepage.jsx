import React from "react";
import BackgroundImage from "../images/bg-desktop.png";
import BackgroundImageMobile from "../images/bg-mobile.png";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Box, Flex } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    xsml: "280px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
  },
});

const Homepage = () => {
  return (
    <ChakraProvider theme={theme}>
      <Center
        w="100%"
        bgImage={{
          xsml: `${BackgroundImageMobile}`,
          sm: `${BackgroundImageMobile}`,
          md: `${BackgroundImageMobile}`,
          lg: `${BackgroundImage}`,
          xl: `${BackgroundImage}`,
        }}
        bgPos={{
          xsml: "center",
          sm: "center",
          md: "center",
          lg: "15% 120%",
          xl: "15% 120%",
        }}
        bgRepeat="no-repeat"
        bgColor="hsl(229, 57%, 11%)"
        bgSize={{
          xsml: "cover",
          sm: "cover",
          md: "cover",
          lg: "1600px",
          xl: "1600px",
        }}
        h="100vh"
      >
        <Flex
          w={{
            xsml: "80%",
            sm: "80%",
            md: "50%",
            lg: "95%",
            xl: "95%",
          }}
          maxW="900px"
          gap="8"
          direction={{
            xsml: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          }}
        >
          <Box
            flex="1"
            bgColor="hsl(228, 56%, 26%)"
            borderTopLeftRadius="10px"
            borderBottomLeftRadius="5px"
            borderBottomRightRadius="5px"
            borderTopRightRadius="110px"
          >
            <Box
              px={{
                xsml: "1em",
                sm: "3em",
                md: "3em",
                lg: "3em",
                xl: "3em",
              }}
              pt="2.5em"
              pb="1em"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="135" height="40">
                <path
                  fill="#FFF"
                  fill-rule="evenodd"
                  d="M0 12.593v.1L22.823 23.28l22.903-10.624v-.027L22.823 2.006 0 12.593zm8.228.05l14.595-6.77 14.597 6.77-14.597 6.77-14.595-6.77zm14.595 14.75L0 16.962v3.857l22.823 10.453 22.903-10.488v-3.858L22.823 27.392zm0 7.822L0 24.785v3.858l22.823 10.454 22.903-10.49V24.75L22.823 35.215zM129.796 20.17a6.604 6.604 0 00-1.752-4.533 5.888 5.888 0 00-1.897-1.36 5.554 5.554 0 00-2.313-.49c-.819 0-1.59.164-2.313.49a5.886 5.886 0 00-1.897 1.36 6.605 6.605 0 00-1.753 4.533 6.604 6.604 0 001.753 4.533 5.886 5.886 0 001.897 1.36c.723.326 1.494.49 2.313.49.82 0 1.59-.164 2.313-.49a5.888 5.888 0 001.897-1.36 6.603 6.603 0 001.753-4.533zm5.204 0c0 1.571-.29 3.028-.867 4.37a10.654 10.654 0 01-2.385 3.48 11.348 11.348 0 01-3.56 2.322 11.19 11.19 0 01-4.354.852c-1.542 0-2.987-.284-4.336-.852a11.241 11.241 0 01-3.541-2.34 10.86 10.86 0 01-2.385-3.499c-.578-1.341-.868-2.786-.868-4.333 0-1.523.296-2.956.886-4.297a11.322 11.322 0 012.403-3.518 11.087 11.087 0 013.541-2.357 10.966 10.966 0 014.3-.852c1.542 0 2.993.284 4.354.852a11.347 11.347 0 013.56 2.321 10.605 10.605 0 012.385 3.5c.578 1.353.867 2.804.867 4.35zM110.898 30.54c-.41.193-.874.35-1.392.471a7.05 7.05 0 01-1.608.182c-.77 0-1.511-.103-2.222-.308a4.864 4.864 0 01-1.86-.998c-.53-.459-.952-1.057-1.266-1.795-.313-.737-.47-1.625-.47-2.665V.552h5.313v23.97c0 .87.174 1.468.523 1.794.35.327.765.49 1.247.49.602 0 1.18-.181 1.735-.544v4.28zM99.732 9.654l-9.395 24.912c-.699 1.862-1.614 3.203-2.747 4.025-1.132.822-2.481 1.233-4.047 1.233a6.426 6.426 0 01-1.626-.217l-1.734-4.86c.409.194.83.345 1.264.454.434.109.843.163 1.229.163.819 0 1.566-.187 2.24-.562.675-.375 1.193-1.07 1.554-2.085l.723-2.103-8.058-20.96h5.673l4.806 13.49 4.517-13.49h5.6zM77.87 6.499H64.283v6.745h13.406v4.569H64.283V30.65H58.79V1.676h19.08v4.823z"
                />
              </svg>
              <Flex mt="2.5em" mb="2em">
                <Box
                  mr="1.3em"
                  p="0.9em"
                  bgColor="hsl(229, 57%, 11%)"
                  borderRadius="5px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                  >
                    <path
                      fill="#697ED4"
                      d="M12.028 0H2.436A2.387 2.387 0 00.049 2.398L.037 21.583a2.387 2.387 0 002.387 2.398h14.4a2.397 2.397 0 002.398-2.398V7.194L12.028 0zM10.83 8.393V1.8l6.595 6.594h-6.595z"
                    />
                  </svg>
                </Box>
                <Box
                  mr="1.3em"
                  p="0.9em"
                  bgColor="hsl(229, 57%, 11%)"
                  borderRadius="5px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="20"
                  >
                    <path
                      mx="0.6em"
                      fill="#697ED4"
                      d="M21.6 2.4H12L9.6 0H2.4A2.39 2.39 0 00.012 2.4L0 16.8a2.4 2.4 0 002.4 2.4h19.2a2.4 2.4 0 002.4-2.4v-12a2.4 2.4 0 00-2.4-2.4z"
                    />
                  </svg>
                </Box>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  mr="1.3em"
                  p="0.9em"
                  bgColor="hsl(229, 57%, 11%)"
                  borderRadius="5px"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="16"
                  >
                    <path
                      mx="0.6em"
                      fill="#697ED4"
                      d="M19.4 6c-.7-3.4-3.7-6-7.4-6-2.9 0-5.4 1.6-6.6 4C2.3 4.4 0 6.9 0 10c0 3.3 2.7 6 6 6h13c2.8 0 5-2.2 5-5 0-2.6-2.1-4.8-4.6-5zM14 9v4h-4V9H7l5-5 5 5h-3z"
                    />
                  </svg>
                </Flex>
              </Flex>
            </Box>
          </Box>
          <Flex flex="2" direction="column">
            <Flex flex="1"></Flex>
            <Flex flex="4">
              <Center w="100%" bgColor="hsl(228, 56%, 26%)" borderRadius="10px">
                <Box
                  w={{
                    xsml: "80%",
                    sm: "80%",
                    md: "80%",
                    lg: "95%",
                    xl: "95%",
                  }}
                  maxW="480px"
                >
                  <Text
                    mt={{
                      xsml: "2.5rem",
                      sm: "2.5rem",
                      md: "1.5rem",
                      lg: "0.5rem",
                      xl: "0.5rem",
                    }}
                    color="hsl(243, 100%, 93%)"
                    fontFamily="'Raleway',sans-seriff"
                    fontSize="clamp(1.0rem , 3vw, 1.1rem)"
                    textAlign={{
                      xsml: "center",
                      sm: "center",
                      md: "initial",
                      lg: "initial",
                      xl: "initial",
                    }}
                  >
                    You’ve used
                    <chakra.span fontWeight="700"> 815 GB </chakra.span> of your
                    storage
                  </Text>

                  <Box
                    position="relative"
                    right="-254px"
                    top="-162px"
                    borderBottom="1px dotted black"
                    display={{
                      xsml: "none",
                      sm: "none",
                      md: "none",
                      lg: "inline-block",
                      xl: "inline-block",
                    }}
                  >
                    <Flex
                      w="250px"
                      bgColor="hsl(243, 100%, 93%)"
                      color="hsl(229, 57%, 11%)"
                      textAlign="center"
                      borderRadius="6px"
                      px="1em"
                      py="0.8em"
                      position="absolute"
                      zIndex="1"
                      _after={{
                        content: `""`,
                        position: "absolute",
                        top: "96%",
                        left: "49%",
                        ml: "62px",
                        borderStyle: "solid",
                        borderWidth: "20px",
                        borderColor:
                          "hsl(243, 100%, 93%) hsl(243, 100%, 93%) transparent transparent",
                      }}
                    >
                      <Box flex="1">
                        <Text
                          fontSize="3rem"
                          fontFamily="'Raleway',sans-seriff"
                          fontWeight="600"
                        >
                          18
                          <chakra.span
                            position="relative"
                            top="-1px"
                            fontSize="3rem"
                            as="sub"
                            mb="0.9rem"
                          >
                            5
                          </chakra.span>
                        </Text>
                      </Box>
                      <Flex
                        flex="1"
                        justifyContent="flex-start"
                        alignItems="center"
                      >
                        <Text
                          fontSize="1.5rem"
                          fontWeight="600"
                          color="hsl(229, 7%, 55%)"
                        >
                          GB Left
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>

                  <Box
                    mt={{
                      xsml: "0.9rem",
                      sm: "0.9rem",
                      md: "0.9rem",
                      lg: "-0.4rem",
                      xl: "-0.4rem",
                    }}
                    mb="0.8rem"
                    h="2vh"
                    borderRadius="10px"
                    w="100%"
                    bgColor="hsl(229, 57%, 11%)"
                  >
                    <Box
                      h="2vh"
                      w="80%"
                      borderRadius="10px"
                      bgGradient="linear(to-r, hsl(6, 100%, 80%) ,hsl(335, 100%, 65%))"
                      position="relative"
                    >
                      <Box
                        h={{
                          xsml: "16px",
                          sm: "16px",
                          md: "25px",
                          lg: "25px",
                          xl: "16px",
                        }}
                        w={{
                          xsml: "16px",
                          sm: "16px",
                          md: "25px",
                          lg: "25px",
                          xl: "16px",
                        }}
                        position="absolute"
                        right="0px"
                        bgColor="hsl(243, 100%, 93%)"
                        borderRadius="50%"
                      ></Box>
                    </Box>
                  </Box>
                  {/* for gb title */}
                  <Flex
                    mb={{
                      xsml: "2.5rem",
                      sm: "2.5rem",
                      md: "2.5rem",
                      lg: "2.5rem",
                      xl: "0rem",
                    }}
                  >
                    {/* for left side */}
                    <Box flex="1">
                      <Text
                        color="hsl(243, 100%, 93%)"
                        fontFamily="'Raleway',sans-seriff"
                        fontWeight="700"
                      >
                        0 GB
                      </Text>
                    </Box>
                    <Flex flex="1" justifyContent="flex-end">
                      <Text
                        color="hsl(243, 100%, 93%)"
                        fontFamily="'Raleway',sans-seriff"
                        fontWeight="700"
                      >
                        1000 GB
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Center>
            </Flex>
            <Center>
              <Box
                position="relative"
                top="-24px"
                w="60%"
                borderBottom="1px dotted black"
                display={{
                  xsml: "block",
                  sm: "block",
                  md: "block",
                  lg: "none",
                  xl: "none",
                }}
              >
                <Flex
                  bgColor="hsl(243, 100%, 93%)"
                  color="hsl(229, 57%, 11%)"
                  textAlign="center"
                  borderRadius="6px"
                  px="1em"
                  py="0.8em"
                >
                  <Box flex="1">
                    <Text
                      fontSize="clamp(2.5rem,5vw,3rem)"
                      fontFamily="'Raleway',sans-seriff"
                      fontWeight="700"
                    >
                      18
                      <chakra.span
                        position="relative"
                        top="-1px"
                        fontSize="3rem"
                        as="sub"
                        fontWeight="700"
                        mb="0.9rem"
                      >
                        5
                      </chakra.span>
                    </Text>
                  </Box>
                  <Flex
                    flex="1"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Text
                      ml={{
                        xsml: "0.5rem",
                        sm: "0.5rem",
                        md: "0rem",
                        lg: "0rem",
                      }}
                      fontSize="1.0rem"
                      fontWeight="600"
                      color="hsl(229, 7%, 55%)"
                    >
                      GB LEFT
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Center>
          </Flex>
          {/* end of second container */}
        </Flex>
      </Center>
      <Box>
        <Text fontSize="11px" textAlign="center">
          <Link
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            color="hsl(228, 45%, 44%)"
          >
            Frontend Mentor
          </Link>
          . Coded by
          <Link color="hsl(228, 45%, 44%)" href="#">
            Salihu Abdulhamid
          </Link>
          .
        </Text>
      </Box>
    </ChakraProvider>
  );
};

export default Homepage;
