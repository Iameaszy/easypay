import Dashboard from './Dashboard';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
