import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { introScroll } from '../../../../global/motionStyle';

const Footer = () => {
  const theme = useTheme();
  return (
    <>
      <Box as="section" position="relative">
        <Box
          bgColor={theme.colors.blue}
          position="absolute"
          z-index="-10"
          left="-20vw"
          h="45vw"
          w="119vw"
          mt="-5%"
        ></Box>
        <Flex
          position="relative"
          z-index="10"
          flexDirection="row"
          justifyContent="space-between"
          margin="5% 0 0 0"
        >
          <Box width="50%">
            <Heading
              color={theme.colors.white}
              lineHeight="1.3em"
              variants={introScroll}
              as={motion.h1}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              Meet Geegpay, the platform for smart and ambitious people.
            </Heading>
          </Box>
          <Box
            width="20%"
            margin="4% 04% 0 0"
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Button size="lg" variant="solid">
              Open an account
            </Button>
          </Box>
        </Flex>
        <Divider orientation="horizontal" margin="5% 0 5% 0" />
        <Flex
          position="relative"
          z-index="10"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box width="32%" m="0 -5% 0 0">
            <button>
              <Image
                src="WhiteGeegpayLogo.png"
                alt="White Geegpay logo"
                bg={theme.colors.blue}
                width="55%"
                height="25%"
                margin="0 0 5% 0"
              />
            </button>
            <Text
              color={theme.colors.grey}
              fontSize="90%"
              variants={introScroll}
              as={motion.p}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              Made for smart productive people
            </Text>
            <Text
              color={theme.colors.grey}
              fontSize="90%"
              variants={introScroll}
              as={motion.p}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              support@geegpay.africa
            </Text>
          </Box>
          <Box color={theme.colors.white} width="13%" margin="-1% -10% 0 0">
            <Text
              fontSize="90%"
              letterSpacing="0.1em"
              m="5% 0 10% 0"
              variants={introScroll}
              as={motion.p}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              PAGES
            </Text>
            <Text
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              href=""
            >
              About us
            </Text>
            <br />
            <Text
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              Contact us
            </Text>
            <br />
            <Text
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              Business
            </Text>
            <br />
          </Box>
          <Box color={theme.colors.white} width="13%" margin="-1% -10% 0 0">
            <Text
              fontSize="90%"
              letterSpacing="0.1em"
              m="5% 0 10% 0"
              variants={introScroll}
              as={motion.p}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              ACCOUNT
            </Text>
            <Text
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              Log in
            </Text>
            <br />
            <Text
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              Sign up
            </Text>
            <br />
          </Box>
          <Box color={theme.colors.white} width="18%" margin="-1% -10% 0 0">
            <Text
              fontSize="90%"
              letterSpacing="0.1em"
              m="5% 0 10% 0"
              variants={introScroll}
              as={motion.p}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              COMPANY
            </Text>
            <Text
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              Terms of service
            </Text>
            <br />
            <Text
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              Privacy Policy
            </Text>
            <br />
          </Box>
        </Flex>
        <Flex
          position="relative"
          z-index="10"
          flexDirection="row"
          justifyContent="space-between"
          m="15% 0 3% 0"
        >
          <Box>
            <Text
              color={theme.colors.grey}
              fontSize="70%"
              variants={introScroll}
              as={motion.a}
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
            >
              &copy; All rights reserved. Geegpay
            </Text>
          </Box>
          <Box
            width="13%"
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <button>
              <Image
                src="TwitterLogo.svg"
                alt="twitter logo"
                m="0 0 0 1550%"
                _hover={{ color: 'skyblue' }}
              />
            </button>
          </Box>
          <Box
            width="13%"
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <button>
              <Image
                src="FacebookLogo.svg"
                alt="facebook logo"
                m="0 0 0 2000%"
              />
            </button>
          </Box>
          <Box
            width="13%"
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <button>
              <Image
                src="InstagramLogo.svg"
                alt="instagram logo"
                m="0 0 0 500%"
              />
            </button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
