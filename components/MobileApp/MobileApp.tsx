import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

const MobileApp = () => {
  return (
    <Flex>
      <Box backgroundColor="#f5faff">
        <Image alt="mobile" src="/images/mobile.png" height={30} width={30} />

        <Stack>
          <Text color="#8a95ad">MOBILE APP</Text>
        </Stack>
        <Heading>Do more on the go.</Heading>
        <Stack>
          <Text>Geegpay is coming soon to Google and Apple store!</Text>
        </Stack>
        <Box>
          <Image src="/images/apple.png" alt="apple" />
          <Image src="/images/playstore.png" alt="playstore" />
        </Box>
      </Box>
      <Box>
        <Image src="/images/africa_lady.jpeg" alt="Africa Lady" />
      </Box>
    </Flex>
  );
};

export default MobileApp;
