import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { FaBriefcase, FaRegUser } from 'react-icons/fa';
const DebitSection = () => {
  return (
    <Flex marginTop="160px" gap="8rem" width="full">
      <Box marginLeft="110px" position="relative" marginTop="30px">
        <Box
          backgroundColor="rgb(236, 245, 255)"
          height="330px"
          width="430px"
          marginTop="130px"
          marginLeft="90px"
          borderRadius="15px"
          zIndex="-1999"
        ></Box>
        <Image
          alt="africa_lady"
          src="/images/africa_lady2.jpeg"
          height="490px"
          width="395px"
          borderRadius="10px"
          position="absolute"
          top="0"
        />
        <Image
          alt="atm_card"
          src="/images/atm.png"
          height="170px"
          width="310px"
          borderRadius="10px"
          position="absolute"
          bottom="42px"
          left="193px"
        />
      </Box>
      <Box>
        <Heading
          color="rgb(138, 149, 173)"
          fontSize="11px"
          fontWeight="500"
          letterSpacing="5px"
          lineHeight="20px"
        >
          DEBIT CARD
        </Heading>
        <Heading
          color="rgb(21, 44, 91)"
          fontSize="35px"
          lineHeight="40px"
          fontWeight="500"
          marginTop="25px"
        >
          Spend with no barrier
        </Heading>
        <Stack marginTop="30px">
          <Text
            color="rgb(138, 149, 173)"
            fontSize="16px"
            lineHeight="24px"
            fontWeight="400"
          >
            Easily spend across millions of websites with our <br />
            customized virtual and physical debit cards.
          </Text>
        </Stack>
        <Box marginTop="25px">
          <Tabs variant="unstyled">
            <TabList
              backgroundColor="rgb(236, 245, 255)"
              fontSize="14px"
              display="flex"
              paddingTop="8px"
              paddingBottom="8px"
              borderRadius="8px"
              justifyContent="center"
              alignItems="center"
            >
              <Tab
                display="flex"
                gap="8px"
                alignItems="center"
                justifyContent="center"
                _selected={{ bg: 'white', color: '#185cff' }}
              >
                <Box>
                  <Icon as={FaRegUser} />
                </Box>
                <Box
                  color="rgb(138, 149, 173)"
                  fontSize="17px"
                  fontWeight="400"
                  lineHeight="21px"
                >
                  Virtual Card
                </Box>
              </Tab>
              <Tab
                display="flex"
                gap="8px"
                alignItems="center"
                justifyContent="center"
                _selected={{ bg: 'white', color: '#185cff' }}
              >
                <Box>
                  <Icon as={FaBriefcase} />
                </Box>
                <Box
                  color="rgb(138, 149, 173)"
                  fontSize="17px"
                  fontWeight="400"
                  lineHeight="21px"
                >
                  Physical Card
                </Box>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box marginTop="20px">
                  <Heading
                    color="rgb(21, 44, 91)"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="30px"
                  >
                    Lifestyle Benefits :
                  </Heading>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    marginTop="25px"
                  >
                    <Box
                      height="20px"
                      width="20px"
                      borderRadius="full"
                      border="2px"
                      borderColor="green"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="green"
                    >
                      <CheckIcon color="green" fontSize="12px" />
                    </Box>
                    <Text
                      color="rgb(138, 149, 173)"
                      fontSize="15px"
                      fontWeight="400"
                      lineHeight="21px"
                    >
                      Spend across the globe with Geegpay card
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    marginTop="15px"
                  >
                    <Box
                      height="20px"
                      width="20px"
                      borderRadius="full"
                      border="2px"
                      borderColor="green"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="green"
                    >
                      <CheckIcon color="green" fontSize="12px" />
                    </Box>
                    <Text
                      color="rgb(138, 149, 173)"
                      fontSize="15px"
                      fontWeight="400"
                      lineHeight="21px"
                    >
                      Manage expenses by setting spending limit
                    </Text>
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box>
                  <Heading
                    color="rgb(21, 44, 91)"
                    fontSize="20px"
                    fontWeight="500"
                    lineHeight="30px"
                    marginTop="25px"
                  >
                    Lifestyle Benefits :
                  </Heading>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    marginTop="20px"
                  >
                    <Box
                      height="20px"
                      width="20px"
                      borderRadius="full"
                      border="2px"
                      borderColor="green"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="green"
                    >
                      <CheckIcon color="green" fontSize="12px" />
                    </Box>
                    <Text
                      color="rgb(138, 149, 173)"
                      fontSize="15px"
                      fontWeight="400"
                      lineHeight="21px"
                    >
                      Physical MasterCard
                    </Text>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    marginTop="15px"
                  >
                    <Box
                      height="20px"
                      width="20px"
                      borderRadius="full"
                      border="2px"
                      borderColor="green"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="green"
                    >
                      <CheckIcon color="green" fontSize="12px" />
                    </Box>
                    <Text
                      color="rgb(138, 149, 173)"
                      fontSize="15px"
                      fontWeight="400"
                      lineHeight="21px"
                    >
                      Travel round the world with Geegpay card
                    </Text>
                  </Box>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box marginTop="25px">
          <Button variant="solid">Get started now</Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default DebitSection;
