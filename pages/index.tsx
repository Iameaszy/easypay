import GetMore from '../components/more/GetMore';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <GetMore />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
