import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Text, useTheme } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { introScroll } from '../../../../global/motionStyle';

const VirtualAccount = () => {
  const theme = useTheme();
  return (
    <Flex>
      <Box flex="0 0 55%" mt="3rem">
        <Box
          variants={introScroll}
          as={motion.div}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Image
            alt=""
            src="/images/united_bank.png"
            height="3rem"
            width="3rem"
          />
        </Box>
        <Box mt="16px" color={theme.fontColors.light}>
          <Text
            fontSize="13px"
            fontWeight={theme.fontWeights.bold}
            letterSpacing={5}
            variants={introScroll}
            as={motion.p}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            FOREIGN BANK ACCOUNTS
          </Text>
          <Heading
            fontWeight="800"
            lineHeight="50px"
            fontSize="36px"
            mt="3rem"
            variants={introScroll}
            as={motion.h1}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            Get free instant USD, EUR, GBP Accounts.
          </Heading>
        </Box>

        <Box
          mt="18px"
          variants={introScroll}
          as={motion.div}
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Text
            lineHeight="27px"
            fontSize="15px"
            fontWeight={700}
            color={theme.fontColors.light}
          >
            Reduce cost and avoid delay in getting paid from your employer by
            creating a personalized foreign bank accounts to start receiving
            money like a pro you are!
          </Text>
        </Box>

        <Box mt="25px">
          <Box
            display="flex"
            alignItems="center"
            gap="12px"
            fontWeight={600}
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <CheckCircleIcon fontSize={25} color={theme.colors.green} />
            <Box color={theme.fontColors.darkestGrey}>
              Save money on international inflow.
            </Box>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            mt="15px"
            gap="12px"
            fontWeight={600}
            variants={introScroll}
            as={motion.div}
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
          >
            <CheckCircleIcon fontSize={25} color={theme.colors.green} />
            <Box color={theme.fontColors.darkestGrey}>
              No maintenance cost . No minimum balance.
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        mt={2}
        flex="0 0 85%"
        variants={introScroll}
        as={motion.div}
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Image alt="" src="/images/virtual.png" height="40rem" width="30rem" />
      </Box>
    </Flex>
  );
};

export default VirtualAccount;
