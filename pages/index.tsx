import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

import DebitSection from '../components/debitSection/DebitSection';
import FaqSections from '../components/faqSection/FaqSections';
import DashboardHeader from '../components/layouts/dashboard/headers/DashboardHeader';
import MainDashboard from '../components/layouts/dashboard/main/MainDashboard';
import MobileApp from '../components/MobileApp/MobileApp';
import VirtualAccount from '../components/virtualAccount/VirtualAccount';

import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DashboardHeader />
      <MainDashboard>
        <Box as="section" mt="50px" position="relative">
          <Box
            bgColor="hsl(187,52%,97%)"
            position="absolute"
            z-index="-10"
            right="-20vw"
            h="32vw"
            w="66vw"
            mt="-7%"
          ></Box>
          <Flex
            position="relative"
            z-index="10"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box w="100%">
              <Text
                bg="white"
                color="dodgerblue"
                boxShadow="-0px 5px 0px 0.01px hsl(0.00,0.00%,98.5%)"
                borderRadius="20px"
                p="2% 10% 2% 2%"
                fontSize="70%"
                m="0 49% 3% 3%"
              >
                <CheckCircleIcon margin="-2% 6% 0 0" />
                Get paid in minutes
              </Text>
              <Heading m="0 0 6% 0" color="#152c5b">
                Digital Financial <br /> Platform for the Gig <br /> Econonomy.
              </Heading>
              <UnorderedList
                margin="6% 0 10% 7%"
                fontSize="80%"
                color="#152c5b"
              >
                <ListItem padding="0 0 4% 0">
                  Create a USD, GBP, EUR accounts to receive <br /> payments for
                  your gigs.
                </ListItem>
                <ListItem padding="0 0 4% 0">
                  Automate employer billing.
                </ListItem>
                <ListItem padding="0 0 4% 0">
                  Debit cards for easy spending.
                </ListItem>
                <ListItem>Build your credit score.</ListItem>
              </UnorderedList>
              <Button size="lg" variant="solid">
                Open an account
              </Button>
            </Box>
            <Box w="100%">
              <Image src="GoDigital.jpg" alt="Freelancer" borderRadius="5px" />
            </Box>
          </Flex>
        </Box>
      </MainDashboard>
      <VirtualAccount />
      <MobileApp />
      <DebitSection />
      <FaqSections />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
