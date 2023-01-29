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
            <Heading color={theme.colors.white} lineHeight="1.3em">
              Meet Geegpay, the platform for smart and ambitious people.
            </Heading>
          </Box>
          <Box width="20%" margin="4% 04% 0 0">
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
            <Text color={theme.colors.grey} fontSize="90%">
              Made for smart productive people
            </Text>
            <Text color={theme.colors.grey} fontSize="90%">
              support@geegpay.africa
            </Text>
          </Box>
          <Box color={theme.colors.white} width="13%" margin="-1% -10% 0 0">
            <Text fontSize="90%" letterSpacing="0.1em" m="5% 0 10% 0">
              PAGES
            </Text>
            <Text
              as="a"
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              About us
            </Text>
            <br />
            <Text
              as="a"
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              Contact us
            </Text>
            <br />
            <Text
              as="a"
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              Business
            </Text>
            <br />
          </Box>
          <Box color={theme.colors.white} width="13%" margin="-1% -10% 0 0">
            <Text fontSize="90%" letterSpacing="0.1em" m="5% 0 10% 0">
              ACCOUNT
            </Text>
            <Text
              as="a"
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              Log in
            </Text>
            <br />
            <Text
              as="a"
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              Sign up
            </Text>
            <br />
          </Box>
          <Box color={theme.colors.white} width="18%" margin="-1% -10% 0 0">
            <Text fontSize="90%" letterSpacing="0.1em" m="5% 0 10% 0">
              COMPANY
            </Text>
            <Text
              as="a"
              href=""
              _hover={{ color: `${theme.colors.gainsboro}` }}
              fontWeight="bold"
              fontSize="90%"
            >
              Terms of service
            </Text>
            <br />
            <Text
              as="a"
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
            <Text color={theme.colors.grey} fontSize="70%">
              &copy; All rights reserved. Geegpay
            </Text>
          </Box>
          <Box width="13%">
            <button>
              <Image
                src="TwitterLogo.svg"
                alt="twitter logo"
                m="0 0 0 1550%"
                _hover={{ color: 'skyblue' }}
              />
            </button>
          </Box>
          <Box width="13%">
            <button>
              <Image
                src="FacebookLogo.svg"
                alt="facebook logo"
                m="0 0 0 2000%"
              />
            </button>
          </Box>
          <Box width="13%">
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
