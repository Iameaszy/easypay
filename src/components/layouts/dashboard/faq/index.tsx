import { Box, Flex, Heading, Stack, Text, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import FaqAccordion from '../../../../components/common/accordion/faq';
import { introScroll } from '../../../../global/motionStyle';
import { faq } from './data';

const FAQ = () => {
  const theme = useTheme();
  return (
    <Flex direction="column" color={theme.colors.grey}>
      <Box textAlign="center">
        <Heading
          fontSize="11px"
          letterSpacing="5px"
          lineHeight="20px"
          fontWeight={600}
          variants={introScroll}
          as={motion.h1}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          QUESTIONS
        </Heading>
        <Heading
          fontSize="35px"
          lineHeight="44px"
          fontWeight="700"
          marginTop="10px"
          variants={introScroll}
          as={motion.h1}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          Frequently asked questions
        </Heading>
      </Box>
      <Box>
        <Stack>
          <Text
            fontSize="15px"
            textAlign="center"
            lineHeight="21px"
            fontWeight="600"
            marginTop="24px"
            variants={introScroll}
            as={motion.p}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            Get answers to all questions you have <br /> and boost your
            knowledge about Geegpay.
          </Text>
        </Stack>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        marginTop="60px"
        paddingBottom="15px"
        width="100%"
      >
        <FaqAccordion faq={faq} />
      </Box>
    </Flex>
  );
};

export default FAQ;
