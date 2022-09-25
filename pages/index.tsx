import { Box, Flex } from '@chakra-ui/react';
import HomeHeader from '../components/layouts/headers/home/HomeHeader';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <Box bg="black">
      <HomeHeader />
      <Flex id="hero"></Flex>
    </Box>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
