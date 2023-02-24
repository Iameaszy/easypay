import {
  Box,
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { CiCircleChevLeft, CiCircleChevRight } from 'react-icons/ci';

const GetMore = () => {
  const theme = useTheme();
  return (
    <>
      <Box as="section" mt="80px">
        <Tabs variant="unstyled">
          <TabPanels lineHeight="1.6em" color="#8a95ad">
            <TabPanel>
              <Flex flexDirection="row" justifyContent="center">
                <Box w="450px" borderRadius="10px">
                  <Image
                    w="370px"
                    h="450px"
                    src="Satisfied.jpg"
                    alt="Convinient Rates"
                    borderRadius="2%"
                    boxShadow="-50px 50px hsl(187,52%,98%)"
                  />
                </Box>
                <Box w="450px">
                  <Text
                    color={theme.fontColors.light}
                    fontSize="11px"
                    letterSpacing="0.4em"
                    fontWeight="bold"
                    m="50px 0 10px  0"
                  >
                    OUR USERS ARE HAPPY WITH US !
                  </Text>
                  <Image src="FiveStars.svg" alt="5 stars" w="180px" h="80px" />
                  <Heading
                    color={theme.fontColors.darkBlue}
                    lineHeight="1.3em"
                    m="-18px 0 40px 0"
                  >
                    Converting at transparent rates!
                  </Heading>
                  <Text
                    color={theme.fontColors.darkBlue}
                    as="q"
                    fontStyle="italic"
                    fontSize="16px"
                    fontWeight="bold"
                    lineHeight="2em"
                  >
                    The fact that I can get salary in USD and also sell at a
                    good exchange rate on the same platform and still have a USD
                    salary account makes Geegpay the best. Salary advance also
                    makes my life easier. Thanks Geegpay &#10084;&#65039;
                  </Text>
                  <Flex
                    flexDirection="row"
                    justifyContent="flex-start"
                    mt="15px"
                  >
                    <Box>
                      <Image src="GreenUser.svg" alt="User" />
                    </Box>
                    <Box m="10px 0 0 10px">
                      <Heading
                        color={theme.fontColors.darkBlue}
                        fontSize="14px"
                        mb="5px"
                      >
                        Wale
                      </Heading>
                      <Text fontSize="13px">Product Designer</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex flexDirection="row" justifyContent="center">
                <Box
                  w="450px"
                  borderRadius="10px"
                  boxShadow="-50px 50px hsl(187,52%,98%)"
                >
                  <Image
                    w="370px"
                    h="450px"
                    src="Satisfied.jpg"
                    alt="Convinient Rates"
                    borderRadius="2%"
                    boxShadow="-50px 50px hsl(187,52%,98%)"
                  />
                </Box>
                <Box w="450px">
                  <Text
                    color={theme.fontColors.light}
                    fontSize="11px"
                    letterSpacing="0.4em"
                    fontWeight="bold"
                    m="50px 0 10px  0"
                  >
                    OUR USERS ARE HAPPY WITH US !
                  </Text>
                  <Image src="FiveStars.svg" alt="5 stars" w="180px" h="80px" />
                  <Heading
                    color={theme.fontColors.darkBlue}
                    lineHeight="1.3em"
                    m="-18px 0 40px 0"
                  >
                    Invoice automation is seamless!
                  </Heading>
                  <Text
                    color={theme.fontColors.darkBlue}
                    as="q"
                    fontStyle="italic"
                    fontSize="16px"
                    fontWeight="bold"
                    lineHeight="2em"
                  >
                    I recently started using Geegpay and the experience has been
                    wow as I don't have to keep track of when to send invoice to
                    my employer .
                  </Text>
                  <Flex
                    flexDirection="row"
                    justifyContent="flex-start"
                    mt="15px"
                  >
                    <Box>
                      <Image src="GreenUser.svg" alt="User" />
                    </Box>
                    <Box m="10px 0 0 10px">
                      <Heading
                        color={theme.fontColors.darkBlue}
                        fontSize="14px"
                        mb="5px"
                      >
                        Sola A
                      </Heading>
                      <Text fontSize="13px">Software Engineer</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </TabPanel>
          </TabPanels>
          <TabList justifyContent="right">
            <Tab>
              <CiCircleChevLeft
                color={theme.fontColors.darkBlue}
                fontSize="40px"
              />
            </Tab>
            <Tab>
              <CiCircleChevRight
                color={theme.fontColors.darkBlue}
                fontSize="40px"
              />
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </>
  );
};

export default GetMore;
