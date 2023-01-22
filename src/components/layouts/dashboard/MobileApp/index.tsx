import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

const MobileApp = () => {
  return (
    <Flex position="relative" marginTop="80px">
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
        <Image alt="mobile" src="/images/mobile.png" height={50} width={50} />

        <Stack marginTop="20px">
          <Text
            color="#8a95ad"
            fontWeight={500}
            letterSpacing="5px"
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
          marginTop="18px"
        >
          Do more on the go.
        </Heading>
        <Stack marginTop="20px">
          <Text color="#8a95ad" fontSize="16px" lineHeight="24px">
            Geegpay is coming soon to Google and Apple store!
          </Text>
        </Stack>
        <Box display="flex" gap="20px" marginTop="25px">
          <Image
            src="/images/apple.png"
            alt="apple"
            height="41.7px"
            width="140px"
            cursor="pointer"
          />
          <Image
            src="/images/playstore.png"
            alt="playstore"
            height="41.7px"
            width="140px"
            cursor="pointer"
          />
        </Box>
      </Box>
      <Box position="absolute" right="0" top="45px">
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
