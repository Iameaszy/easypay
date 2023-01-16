import Hero from '../components/Hero/Hero';
import DashboardHeader from '../components/layouts/dashboard/headers/DashboardHeader';
import MainDashboard from '../components/layouts/dashboard/main/MainDashboard';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <DashboardHeader />
      <MainDashboard>
        <Hero />
      </MainDashboard>
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
