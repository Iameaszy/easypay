import { Box, Flex, Heading, Stack, Text, useTheme } from '@chakra-ui/react';
import FaqAccordion from '../../../../components/common/accordion/faq';
import { faq } from './data';

const FAQ = () => {
  const theme = useTheme();
  return (
    <Flex direction="column" marginTop="150px">
      <Box textAlign="center">
        <Heading
          color={theme.fontColors.darkGrey}
          fontSize="11px"
          letterSpacing="5px"
          lineHeight="20px"
          fontWeight={600}
        >
          QUESTIONS
        </Heading>
        <Heading
          color={theme.fontColors.darkGrey}
          fontSize="35px"
          lineHeight="44px"
          fontWeight="700"
          marginTop="10px"
        >
          Frequently asked questions
        </Heading>
      </Box>
      <Box>
        <Stack>
          <Text
            color={theme.fontColors.darkGrey}
            fontSize="15px"
            textAlign="center"
            lineHeight="21px"
            fontWeight="600"
            marginTop="24px"
          >
            Get answers to all questions you have <br /> and boost your
            knowledge about Geegpay.
          </Text>
        </Stack>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        marginTop="60px"
        paddingBottom="15px"
      >
        <FaqAccordion faq={faq} />
      </Box>
    </Flex>
  );
};

export default FAQ;
