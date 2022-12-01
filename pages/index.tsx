import BankingBenefits from '../components/banking/BankingBenefits';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <BankingBenefits />
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <div>{page}</div>;
};
