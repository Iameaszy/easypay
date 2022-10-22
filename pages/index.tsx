import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import DashboardHeader from '../components/layouts/dashboard/headers/DashboardHeader';
import MainDashboard from '../components/layouts/dashboard/main/MainDashboard';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DashboardHeader />
      <MainDashboard>
        <Flex as="section">
          <Box>
            <Text>Get paid in minutes</Text>
            <Heading>
              Digital Financial <br /> Platform for the Gig Econonomy
            </Heading>
            <ul>
              <li>
                Create a USD, GBP, EUR accounts to receive payments for your
                gigs.
              </li>
              <li>Automate employer billing.</li>
              <li>Debit cards for easy spending.</li>
              <li>Build your credit score.</li>
            </ul>
            <Button variant="solid">Open an account</Button>
          </Box>
          <p>hhhhhhhhhh</p>
          <Box>image</Box>
        </Flex>
      </MainDashboard>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
