import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import DashboardHeader from '../components/layouts/dashboard/headers/DashboardHeader';
import MainDashboard from '../components/layouts/dashboard/main/MainDashboard';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DashboardHeader />
      <MainDashboard>
        <Flex as="section" direction='row' justify='space-between' m='5% 0 0 0'>
          <Box position='absolute' color='#8a95ad;' width='100%' h='100%'></Box>
          <Box w='100%'>
            <Text backgroundColor='royalblue' borderRadius='20px' padding='2% 10% 2% 2%' fontSize='70%' m='0 50% 8% 3%'><CheckCircleIcon margin='-2% 5% 0 0' />Get paid in minutes</Text>
            <Heading margin='0 0 6% 0'>Digital Financial <br /> Platform for the Gig <br /> Econonomy.</Heading>
            <UnorderedList margin='0 0 10% 10%' fontSize='70%'>
              <ListItem padding='0 0 3% 0'>Create a USD, GBP, EUR accounts to receive <br /> payments for your gigs.</ListItem>
              <ListItem padding='0 0 3% 0'>Automate employer billing.</ListItem>
              <ListItem padding='0 0 3% 0'>Debit cards for easy spending.</ListItem>
              <ListItem>Build your credit score.</ListItem>
            </UnorderedList>
            <Button variant="solid">Open an account</Button>
          </Box>
          <Box w='100%'>
            <Image src='GoDigital.jpg' alt='Freelancer' borderRadius='5px' />
          </Box>
        </Flex>
      </MainDashboard>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
