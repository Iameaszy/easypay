import { Box, Flex, Text, useTheme } from '@chakra-ui/react';

const Borderless = () => {
  const theme = useTheme();
  return (
    <Box margin="45px 0 20px 0">
      <Flex flexDirection="row" gap="5rem">
        <Box
          color={theme.colors.blue}
          display="flex"
          gap="2.3rem"
          marginTop="2rem"
          marginLeft="25px"
        >
          <Text fontSize="20px" fontWeight="600">
            Go borderless with us
          </Text>
          <Box
            height="2px"
            width="85px"
            marginTop="12px"
            fontWeight="900"
            backgroundColor={theme.colors.blue}
          ></Box>
        </Box>
        <Box marginLeft="3rem" width="45%">
          <Text fontSize="25px" fontWeight="600" color={theme.colors.blue}>
            Endless possibilities with Geegpay.
          </Text>
          <Text
            fontSize="16px"
            fontWeight="400"
            color={theme.fontColors.light}
            pt="25px"
          >
            With Geegpay, it`s easy to convert to your local currency at
            competitive exchange rates in minutes. Send money and receive money
            from overseas, and spend globally with Geegpay virtual and physical
            cards.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Borderless;
