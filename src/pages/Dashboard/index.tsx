import Hero from '../../components/Hero/Hero';
import DebitSection from '../../components/layouts/dashboard/debitSection/DebitSection';
import FAQ from '../../components/layouts/dashboard/faq';
import Footer from '../../components/layouts/dashboard/footer/Footer';
import DashboardHeader from '../../components/layouts/dashboard/headers/DashboardHeader';
import MainDashboard from '../../components/layouts/dashboard/main/MainDashboard';
import MobileApp from '../../components/layouts/dashboard/MobileApp';
import VirtualAccount from '../../components/layouts/dashboard/virtualAccount';

export default function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <MainDashboard>
        <Hero />
        <VirtualAccount />
        <MobileApp />
        <DebitSection />
        <FAQ />
        <Footer />
      </MainDashboard>
    </>
  );
}
