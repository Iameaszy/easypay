import { Box, Flex, Text, useTheme } from '@chakra-ui/react';

const Borderless = () => {
  const theme = useTheme();
  return (
    <Box paddingLeft="8%">
      <Flex
        direction={{ lg: 'row', base: 'column' }}
        gap={{ lg: '5rem', base: '1.5rem' }}
      >
        <Box
          color={theme.colors.blue}
          display="flex"
          gap={{ lg: '2.3rem', base: '1.3rem' }}
          marginTop="2rem"
          marginLeft={{ lg: '25px', base: '3px' }}
        >
          <Text fontSize={{ lg: '20px', base: '17px' }} fontWeight="600">
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
        <Box
          marginLeft={{ lg: '3rem', base: '3px' }}
          width={{ lg: '45%', base: '100%' }}
        >
          <Text
            fontSize={{ lg: '25px', base: '23px' }}
            fontWeight="600"
            color={theme.colors.blue}
          >
            Endless possibilities with Geegpay.
          </Text>
          <Text
            fontSize={{ lg: '16px', base: '15px' }}
            fontWeight="400"
            lineHeight={{ base: '21px' }}
            color={theme.fontColors.light}
            pt={{ lg: '25px', base: '16px' }}
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
