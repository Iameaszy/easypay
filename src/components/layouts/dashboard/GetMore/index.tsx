import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
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
import { IconNames } from '../../../../utils/getIcons/types';
import TextWithIcon from '../../../common/TextWithIcon/index';

const GetMore = () => {
  const theme = useTheme();
  return (
    <>
      <Box>
        <Box as="section">
          <Flex
            position="relative"
            z-index="10"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box width="327px">
              <Text
                color={theme.fontColors.light}
                padding="7% 0 2% 0"
                fontSize="70%"
                letterSpacing="0.4em"
                lineHeight="2em"
                fontWeight="bold"
              >
                GET MORE FROM OUR <br />
                PATNERS
              </Text>
              <Heading
                color={theme.fontColors.darkBlue}
                margin="6% 0 15% 0"
                lineHeight="1.3em"
              >
                We&apos;re there during rainy days.
              </Heading>
              <Button size="lg" variant="solid">
                Start now
              </Button>
            </Box>
            <Box width="27%">
              <Image
                src="DollarSign.svg"
                alt="$"
                width="20%"
                height="20%"
                margin="0 0 0 -5%"
              />
              <Heading
                color={theme.fontColors.darkBlue}
                fontSize="120%"
                margin="8% 0 0 -3%"
                position="relative"
                top="-22%"
                left="25%"
              >
                Salary Advance
              </Heading>
              <TextWithIcon
                text="Low interest salary advance"
                IconName={IconNames.CheckOutline}
                iconProps={{ color: 'green', fontSize: '20px' }}
              />
              <TextWithIcon
                text="We provide your pay evidence to lending platforms"
                IconName={IconNames.CheckOutline}
                iconProps={{ color: 'green', fontSize: '20px' }}
              />
            </Box>
            <Box width="27%">
              <Image
                src="Folder.svg"
                alt="book"
                width="20%"
                height="20%"
                margin="0 0 0 -5%"
              />
              <Heading
                color={theme.fontColors.darkBlue}
                fontSize="120%"
                margin="8% 0 0 -3%"
                position="relative"
                top="-22%"
                left="25%"
              >
                BNPL
              </Heading>
              <TextWithIcon
                text="Get your home-office equipments"
                IconName={IconNames.CheckOutline}
                iconProps={{ color: 'green', fontSize: '20px' }}
              />
              <TextWithIcon
                text="Alternative pewer source to boost your productivity"
                IconName={IconNames.CheckOutline}
                iconProps={{ color: 'green', fontSize: '20px' }}
              />
            </Box>
          </Flex>
        </Box>
        <Box as="section" position="relative" m="18vw 0 0 0">
          <Box
            bgColor={theme.colors.bgBlue}
            position="absolute"
            z-index="-10"
            left="1.8vw"
            h="19vw"
            w="18vw"
            m="10vw 0 0 -1vw"
            borderRadius="5px"
          ></Box>
          <Text
            color={theme.fontColors.light}
            padding="7% 0 2% 0"
            fontSize="70%"
            letterSpacing="0.4em"
            fontWeight="bold"
            margin="5vw 0 2vw 30vw"
          >
            OUR USERS ARE HAPPY WITH US !
          </Text>
          <Image src="FiveStars.svg" alt="5 stars" m="-1vw 0 -0.2vw 30vw" />
          <Tabs variant="unstyled">
            <TabPanels lineHeight="1.6em" color="#8a95ad" margin="0% 0 7% -3%">
              <TabPanel>
                <Flex
                  position="relative"
                  m="0vw 0 0 0"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  <Box width="40%">
                    <Image
                      src="Satisfied.jpg"
                      alt="Convinient Rates"
                      borderRadius="2%"
                      m="-8vw 0 -0.2vw 5vw"
                    />
                  </Box>
                  <Box w="58%" m="0 0 0 12vw">
                    <Heading
                      color={theme.fontColors.darkBlue}
                      lineHeight="1.3em"
                      m="-0.5vw 0 1vw 0vw"
                    >
                      Converting at transparent rates!
                    </Heading>
                    <Text
                      color={theme.fontColors.light}
                      as="q"
                      fontStyle="italic"
                      fontSize="90%"
                      fontWeight="bold"
                    >
                      The fact I can get salary in USD and also sell at a good
                      exchange rate on the same platform and still have a USD
                      salary account makes Geegpay the best. Salary advance also
                      makes my life easier. Thanks Geegpay &#10084;
                    </Text>
                    <Image
                      src="GreenUser.svg"
                      alt="User"
                      w="15%"
                      h="15%"
                      position="absolute"
                      m="3vw 0 0 -3vw"
                    />
                    <Heading
                      color={theme.fontColors.darkBlue}
                      position="relative"
                      m="13% 0 0 17%"
                      fontSize="80%"
                    >
                      Wale
                    </Heading>
                    <Text
                      fontSize="80%"
                      position="relative"
                      m="0% 0 0 17%"
                      left=""
                    >
                      Product Designer
                    </Text>
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex
                  position="relative"
                  m="0vw 0 0 0"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  <Box width="40%">
                    <Image
                      src="Satisfied.jpg"
                      alt="Convinient Rates"
                      borderRadius="2%"
                      m="-8vw 0 -0.2vw 5vw"
                    />
                  </Box>
                  <Box width="58%" m="0 0 0 12vw">
                    <Heading
                      color={theme.fontColors.darkBlue}
                      lineHeight="1.3em"
                      m="-0.5vw 0 1vw 0vw"
                    >
                      Invoice automation is seamless!
                    </Heading>
                    <Text
                      color={theme.fontColors.light}
                      as="q"
                      fontStyle="italic"
                      fontSize="90%"
                      fontWeight="bold"
                    >
                      I recently started using Geegpay and the experience has
                      been wow as I don&apos;t have to keep track of when to
                      send invoice to my employer .
                    </Text>
                    <Image
                      src="GreenUser.svg"
                      alt="User"
                      w="17%"
                      h="17%"
                      position="absolute"
                      m="3vw 0 0 -3vw"
                    />
                    <Heading
                      color={theme.fontColors.darkBlue}
                      position="relative"
                      m="13% 0 0 17%"
                      fontSize="80%"
                    >
                      Sola A
                    </Heading>
                    <Text
                      color={theme.fontColors.light}
                      fontSize="80%"
                      position="relative"
                      m="0% 0 0 17%"
                      left=""
                    >
                      Sotfware Engineer
                    </Text>
                  </Box>
                </Flex>
              </TabPanel>
            </TabPanels>
            <TabList>
              <Tab>
                <ArrowLeftIcon
                  position="relative"
                  top="-190%"
                  left="170%"
                  color={theme.fontColors.darkBlue}
                  _hover={{ color: `${theme.fontColors.blue}` }}
                  w="25%"
                  h="25%"
                />
              </Tab>
              <Tab>
                <ArrowRightIcon
                  position="relative"
                  top="-190%"
                  left="80%"
                  color={theme.fontColors.darkBlue}
                  _hover={{ color: `${theme.fontColors.blue}` }}
                  w="25%"
                  h="25%"
                />
              </Tab>
            </TabList>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default GetMore;
