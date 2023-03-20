import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaRegUser } from 'react-icons/fa';
import { introScroll } from '../../../../global/motionStyle';
import { IconNames } from '../../../../utils/getIcons/types/index';
import TextWithIcon from '../../../common/TextWithIcon/index';
const DebitSection = () => {
  return (
    <Flex gap="25%">
      <Flex position={'relative'}>
        <Box
          variants={introScroll}
          as={motion.div}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            alt="africa_lady"
            src="/images/africa_lady2.jpeg"
            borderRadius="20px"
            height="490px"
            width="395px"
          />
        </Box>
        <Image
          alt="atm_card"
          src="/images/atm.png"
          height="170px"
          width="310px"
          borderRadius="10px"
          bottom="76px"
          left="204px"
          position={'absolute'}
        />

        <Box
          backgroundColor="rgb(236, 245, 255)"
          height="330px"
          width="430px"
          marginTop="130px"
          marginLeft="90px"
          borderRadius="15px"
          zIndex="-1999"
          position={'absolute'}
        ></Box>
      </Flex>
      <Flex>
        <Box>
          <Heading
            color="rgb(138, 149, 173)"
            fontSize="11px"
            fontWeight="500"
            letterSpacing="5px"
            lineHeight="20px"
            variants={introScroll}
            as={motion.h1}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            DEBIT CARD
          </Heading>
          <Heading
            color="rgb(21, 44, 91)"
            fontSize="35px"
            lineHeight="40px"
            fontWeight="500"
            marginTop="25px"
            variants={introScroll}
            as={motion.h1}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            Spend with no barrier
          </Heading>
          <Text
            color="rgb(138, 149, 173)"
            fontSize="16px"
            lineHeight="24px"
            fontWeight="400"
            variants={introScroll}
            as={motion.p}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            Easily spend across millions of websites with our <br />
            customized virtual and physical debit cards.
          </Text>
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
                      variants={introScroll}
                      as={motion.h1}
                      initial="hide"
                      whileInView="show"
                      viewport={{ once: true }}
                    >
                      Lifestyle Benefits :
                    </Heading>
                    <TextWithIcon
                      text="Spend across the globe with Geegpay card"
                      IconName={IconNames.CheckOutline}
                      iconProps={{ color: 'green', fontSize: '20px' }}
                    />
                    <TextWithIcon
                      text="Manage expenses by setting spending limit"
                      IconName={IconNames.CheckOutline}
                      iconProps={{ color: 'green', fontSize: '20px' }}
                    />
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
                      variants={introScroll}
                      as={motion.h1}
                      initial="hide"
                      whileInView="show"
                      viewport={{ once: true }}
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
                        variants={introScroll}
                        as={motion.div}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true }}
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
                        variants={introScroll}
                        as={motion.div}
                        initial="hide"
                        whileInView="show"
                        viewport={{ once: true }}
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
          <Box
            marginTop="25px"
            as={motion.div}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 1 }}
            transition={{ ease: 'easeInOut' }}
            viewport={{ once: true }}
          >
            <Button variant="solid">Get started now</Button>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default DebitSection;
