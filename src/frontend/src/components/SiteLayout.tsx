import { Outlet } from "@tanstack/react-router";
import FloatingContactButtons from "./FloatingContactButtons";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import PageTransition from "./PageTransition";

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
