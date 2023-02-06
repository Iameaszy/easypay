import Borderless from '../../components/layouts/dashboard/borderless';
import DebitSection from '../../components/layouts/dashboard/debitSection/DebitSection';
import FAQ from '../../components/layouts/dashboard/faq';
import Footer from '../../components/layouts/dashboard/footer/Footer';
import GetMore from '../../components/layouts/dashboard/GetMore/index';
import DashboardHeader from '../../components/layouts/dashboard/headers/DashboardHeader';
import Hero from '../../components/layouts/dashboard/hero';
import MainDashboard from '../../components/layouts/dashboard/main/MainDashboard';
import MobileApp from '../../components/layouts/dashboard/MobileApp';
import VirtualAccount from '../../components/layouts/dashboard/virtualAccount';

export default function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <MainDashboard>
        <Hero />
        <Borderless />
        <VirtualAccount />
        <MobileApp />
        <DebitSection />
        <GetMore />
        <FAQ />
        <Footer />
      </MainDashboard>
    </>
  );
}
