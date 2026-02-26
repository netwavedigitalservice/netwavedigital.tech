import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Layout = () => (
  <>
    <Header />
    <main className="pt-16 md:pt-20">
      <Outlet />
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Layout;
