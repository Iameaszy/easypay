import { CheckIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';

const VirtualAccount = () => {
  return (
    <Flex gap={32} mt={10}>
      <Box mt={20} ml={28}>
        <Image alt="" src="/images/united_bank.png" height={12} width={12} />
        <Stack mt={4}>
          <Text
            fontSize={12}
            fontWeight={500}
            color="#8a95ad"
            letterSpacing={5}
          >
            FOREIGN BANK ACCOUNTS
          </Text>
        </Stack>

        <Box maxW="sm" mt={6}>
          <Heading
            fontWeight={500}
            lineHeight="44px"
            color="#152c5b"
            fontSize="35"
          >
            Get free instant USD, EUR, GBP Accounts.
          </Heading>
        </Box>
        <Box maxW="md" mt={15}>
          <Stack>
            <Text lineHeight={2} fontSize={16} fontWeight={600} color="#8a95ad">
              Reduce cost and avoid delay in getting paid from your employer by
              creating a personalized foreign bank accounts to start receiving
              money like a pro you are!
            </Text>
          </Stack>
        </Box>

        <Box mt={10}>
          <Box display="flex" alignItems="center" gap={4} fontWeight={600}>
            <Box
              backgroundColor="green"
              as="span"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              height={5}
              width={5}
              borderRadius="full"
            >
              <CheckIcon fontSize={12} />
            </Box>{' '}
            <Box color="#152c5b">Save money on international inflow.</Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap={4}
            mt={3}
            fontWeight={600}
          >
            <Box
              backgroundColor="green"
              as="span"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="white"
              height={5}
              width={5}
              borderRadius="full"
            >
              <CheckIcon fontSize={12} />
            </Box>{' '}
            <Box color="#152c5b">
              {' '}
              No maintenance cost . No minimum balance.
            </Box>
          </Box>
        </Box>
      </Box>

      <Box mt={2}>
        <Image alt="" src="/images/virtual.png" height={600} width={600} />
      </Box>
    </Flex>
  );
};

export default VirtualAccount;
