import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { introScroll } from '../../../../global/motionStyle';

const MobileApp = () => {
  return (
    <Flex position="relative">
      <Box
        backgroundColor="#f5faff"
        borderRadius="14px"
        width="55%"
        height="40rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingLeft="110px"
      >
        <Box
          variants={introScroll}
          as={motion.div}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image alt="mobile" src="/images/mobile.png" height={50} width={50} />
        </Box>

        <Stack marginTop="20px">
          <Text
            color="#8a95ad"
            fontWeight={500}
            letterSpacing="5px"
            variants={introScroll}
            as={motion.p}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            lineHeight="20px"
          >
            MOBILE APP
          </Text>
        </Stack>
        <Heading
          color="#152c5b"
          fontSize="39px"
          lineHeight="48px"
          fontWeight={500}
          variants={introScroll}
          as={motion.h1}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          marginTop="18px"
        >
          Do more on the go.
        </Heading>
        <Stack marginTop="20px">
          <Text
            color="#8a95ad"
            fontSize="16px"
            lineHeight="24px"
            variants={introScroll}
            as={motion.p}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            Geegpay is coming soon to Google and Apple store!
          </Text>
        </Stack>
        <Box display="flex" gap="20px" marginTop="25px">
          <Box
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src="/images/apple.png"
              alt="apple"
              height="41.7px"
              width="140px"
              cursor="pointer"
            />
          </Box>
          <Box
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src="/images/playstore.png"
              alt="playstore"
              height="41.7px"
              width="140px"
              cursor="pointer"
            />
          </Box>
        </Box>
      </Box>
      <Box
        position="absolute"
        right="0"
        top="45px"
        variants={introScroll}
        as={motion.div}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image
          src="/images/africa_lady.jpeg"
          alt="Africa Lady"
          borderRadius="10px"
          height="40rem"
        />
      </Box>
    </Flex>
  );
};

export default MobileApp;
