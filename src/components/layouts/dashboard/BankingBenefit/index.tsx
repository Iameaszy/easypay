import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Text, useTheme } from '@chakra-ui/react';
import Card from '../../../common/Card/index';
import { IconNames } from '../../../common/Icon/types';
const BankingBenefits = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box as="section" position="relative">
        <Box
          bgColor={theme.colors.bgBlue}
          position="absolute"
          z-index="-10"
          right="30vw"
          h="16vw"
          w="24vw"
          mt="6%"
          borderRadius="8px"
        ></Box>
        <Flex
          position="relative"
          z-index="10"
          marginTop="10%"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box w="45%">
            <Image
              src="SmartInvoicing.jpg"
              alt="autobill your employer"
              borderRadius="2%"
              h="48%"
              w="92%"
            />
            <Image
              src="Invoice.png"
              alt="Invoice"
              position="relative"
              top="-41%"
              left="55%"
              h="48%"
              w="50%"
            />
          </Box>
          <Box w="40%" m="-2% 0 0 0">
            <Image src="Bill.png" alt="paymenet invoice" h="8%" w="12%" />
            <Text
              color={theme.fontColors.light}
              padding="5% 0 3% 0"
              fontSize="70%"
              letterSpacing="0.4em"
              fontWeight="bold"
            >
              SMART INVOICING
            </Text>
            <Heading color={theme.fontColors.darkBlue} fontSize="180%">
              Auto-Bill your Employer
            </Heading>
            <Text
              lineHeight="1.6em"
              fontSize="90%"
              color={theme.fontColors.light}
              margin="5% 0 6% 0"
            >
              Let Geegpay generate your monthly or weekly invoice so that you
              can focus on what matters. Our system can auto-bill your employers
              using your settings. Keep track of your invoice for future
              evidence
            </Text>
            <Text
              color={theme.fontColors.lightBlue}
              fontSize="60%"
              letterSpacing="0.3em"
              as="a"
              href=""
            >
              LEARN MORE <ArrowForwardIcon />
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box textAlign="center" margin="-15% 15% 0 15%">
        <Text
          color={theme.fontColors.light}
          padding="7% 0 1% 0"
          fontSize="70%"
          letterSpacing="0.4em"
          fontWeight="bold"
        >
          DO MORE WITH GEEGPAY
        </Text>
        <Heading
          fontSize="200%"
          color={theme.fontColors.darkBlue}
          lineHeight="1.2em"
        >
          Hustle smartly with a full-stack online bank account that suits your
          needs.
        </Heading>
      </Box>
      <Flex marginTop="9%" flexDirection="row" justifyContent="space-around">
        <Card
          heading="Free Transfer"
          body="Easily send and recieve money from friends and families at zero
              cost using Geeg tag or email"
          imgSrc="FreeTransfer.png"
          footer="GET STARTED NOW"
          iconName={IconNames.MinusIcon}
        />

        <Card
          heading="Multi-withdrawal Channels"
          body="Withdraw your funds to banks and mobile money in over 100
            countries, Paypal, Wise and Revolut"
          imgSrc="MultiWithdrawal.png"
          footer="GET STARTED NOW"
          iconName={IconNames.MinusIcon}
        />

        <Card
          heading="Instant Exchange"
          body="Exchange foreign currenct to NGN, KES, GHS and other competitive
            exchange rate in seconds"
          imgSrc="InstantExchange.png"
          footer="GET STARTED NOW"
          iconName={IconNames.MinusIcon}
        />
      </Flex>
    </Box>
  );
};

export default BankingBenefits;
