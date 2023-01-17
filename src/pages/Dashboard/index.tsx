import Hero from '../../components/Hero/Hero';
import FAQ from '../../components/layouts/dashboard/faq';
import DashboardHeader from '../../components/layouts/dashboard/headers/DashboardHeader';
import MainDashboard from '../../components/layouts/dashboard/main/MainDashboard';
import VirtualAccount from '../../components/layouts/dashboard/virtualAccount/VirtualAccount';

export default function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <MainDashboard>
        <Hero />
        <VirtualAccount />
        <FAQ />
      </MainDashboard>
    </>
  );
}
