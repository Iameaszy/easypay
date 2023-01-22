import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useTheme,
} from '@chakra-ui/react';

const VirtualAccount = () => {
  const theme = useTheme();
  return (
    <Flex mt="4rem">
      <Box flex="0 0 55%" mt="3rem">
        <Image
          alt=""
          src="/images/united_bank.png"
          height="3rem"
          width="3rem"
        />
        <Box mt="16px">
          <Stack>
            <Text
              fontSize="13px"
              fontWeight={theme.fontWeights.bold}
              color={theme.fontColors.darkGrey}
              letterSpacing={5}
            >
              FOREIGN BANK ACCOUNTS
            </Text>
            <Heading
              fontWeight="800"
              lineHeight="50px"
              color={theme.fontColors.darkGrey}
              fontSize="36px"
              mt="3rem"
            >
              Get free instant USD, EUR, GBP Accounts.
            </Heading>
          </Stack>
        </Box>

        <Box mt="18px">
          <Stack>
            <Text
              lineHeight="27px"
              fontSize="15px"
              fontWeight={700}
              color={theme.fontColors.darkGrey}
            >
              Reduce cost and avoid delay in getting paid from your employer by
              creating a personalized foreign bank accounts to start receiving
              money like a pro you are!
            </Text>
          </Stack>
        </Box>

        <Box mt="25px">
          <Box display="flex" alignItems="center" gap="12px" fontWeight={600}>
            <Box
              backgroundColor={theme.colors.green}
              as="span"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              height={25}
              width={25}
              borderRadius="100%"
            >
              <CheckIcon fontSize={12} />
            </Box>{' '}
            <Box color="#73819d">Save money on international inflow.</Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            mt="15px"
            gap="12px"
            fontWeight={600}
          >
            <Box
              backgroundColor={theme.colors.green}
              as="span"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              height={25}
              width={25}
              borderRadius="100%"
            >
              <CheckIcon fontSize={12} />
            </Box>{' '}
            <Box color="#73819d">
              {' '}
              No maintenance cost . No minimum balance.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={2} flex="0 0 85%">
        <Image alt="" src="/images/virtual.png" height="40rem" width="30rem" />
      </Box>
    </Flex>
  );
};

export default VirtualAccount;
