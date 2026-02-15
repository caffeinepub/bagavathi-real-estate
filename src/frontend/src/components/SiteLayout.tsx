import { Outlet } from '@tanstack/react-router';
import HeaderNav from './HeaderNav';
import Footer from './Footer';
import FloatingContactButtons from './FloatingContactButtons';
import PageTransition from './PageTransition';

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderNav />
      <PageTransition>
        <Outlet />
      </PageTransition>
      <Footer />
      <FloatingContactButtons />
    </div>
  );
}
