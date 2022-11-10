import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import MainDashboard from '../layouts/dashboard/main/MainDashboard';


const BankingBenefits = () => {
    return (
        <>
        <MainDashboard>
        <Box as="section" mt='50px' position='relative'>
          <Box bgColor='hsl(187,52%,97%)' position='absolute' z-index='-10' right='30vw' h='16vw' w='24vw' mt='16%' borderRadius='8px'></Box>
          <Flex position='relative' z-index='10' marginTop='10%' flexDirection='row' justifyContent='space-between'>
            <Box w='45%'>
              <Image src='SmartInvoicing.jpg' alt="autobill your employer" borderRadius='2%' h='48%' w='92%'/>
              <Image src='Invoice.png' alt="Invoice" position='relative' top='-41%' left='55%' h='48%' w='50%'/>
            </Box>
            <Box w='40%' m='-2% 0 0 0'>
              <Image src='Bill.png' alt="paymenet invoice" h='8%' w='12%'/>
              <Text color='#8a95ad'  padding='5% 0 3% 0' fontSize='50%' letterSpacing='0.4em' fontWeight='bold'>SMART INVOICING</Text>
              <Heading color='#152c5b'>Auto-Bill your Employer</Heading>
              <Text lineHeight='1.6em' fontSize='70%' color='#8a95ad' margin='5% 0 6% 0'>Let Geegpay generate your monthly or weekly invoice so that you can focus on what matters. Our system can auto-bill your employers using your settings. Keep track of your invoice for future evidence</Text>
              <Text color='#185cff' fontSize='50%' letterSpacing='0.3em' as='a' href=''>LEARN MORE <ArrowForwardIcon /></Text>
            </Box>
          </Flex>
        </Box>
      </MainDashboard>
      <MainDashboard>
        <Box textAlign='center' margin='-15% 15% 0 15%'>
        <Text color='#8a95ad'  padding='7% 0 1% 0' fontSize='50%' letterSpacing='0.4em' fontWeight='bold'>DO MORE WITH GEEGPAY</Text>
        <Heading fontSize='200%' color='#152c5b' lineHeight='1.2em'>Hustle  smartly  with a full-stack online bank account that suits your needs.</Heading>
      </Box>
      </MainDashboard>
      <MainDashboard>
        <Flex marginTop='9%' flexDirection='row' justifyContent='space-around'>
          <Box textAlign='center' width='29%'>
            <Image src='FreeTransfer.png' alt="free transfer" />
            <Heading color='#152c5b' fontSize='100%' marginTop='12%'>Free Transfer</Heading>
            <Text lineHeight='1.6em' fontSize='70%' color='#8a95ad' marginTop='4%' margin='4% 0 10% 0'>Easily send and recieve money from friends and families at zero cost using Geeg tag or email</Text>
            <Text color='#185cff' fontSize='50%' fontWeight='bold' letterSpacing='0.3em' marginTop='15%' as='a' href=''>GET STARTED NOW <ArrowForwardIcon /></Text>
          </Box>
          <Box textAlign='center' width='29%'>
            <Image src='MultiWithdrawal.png' alt="multi-withdrawal Channels" />
            <Heading color='#152c5b' fontSize='100%' marginTop='12%'>Multi-withdrawal Channels</Heading>
            <Text lineHeight='1.6em' fontSize='70%' color='#8a95ad' marginTop='4%' margin='4% 0 10% 0'>Withdraw your funds to banks and mobile money in over 100 countries, Paypal, Wise and Revolut</Text>
            <Text color='#185cff' fontSize='50%' fontWeight='bold' letterSpacing='0.3em' marginTop='15%' as='a' href=''>GET STARTED NOW <ArrowForwardIcon /></Text>
          </Box>
          <Box textAlign='center' width='29%'>
            <Image src='InstantExchange.png' alt="instant exchange" />
            <Heading color='#152c5b' fontSize='100%' marginTop='12%'>Instant Exchange</Heading>
            <Text lineHeight='1.6em' fontSize='70%' color='#8a95ad' margin='4% 0 10% 0'>Exchange foreign currenct to NGN, KES, GHS and other competitive exchange rate in seconds</Text>
            <Text color='#185cff' fontSize='50%' fontWeight='bold' letterSpacing='0.3em' as='a' href=''>GET STARTED NOW <ArrowForwardIcon /></Text>
          </Box>
        </Flex>
      </MainDashboard>
      </>
    )
}


export default BankingBenefits;