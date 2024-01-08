import { footerLists, footerSocials, nav } from "@/assets/constants";
import Footer from "@/components/Footer";
import Navbar from "@/components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar rightMenu={true} navData={nav} />
      <div className="p-4">
        <Outlet />
      </div>
      <Footer
        footerSocials={footerSocials}
        copyrightName="AikosNotes"
        footerLists={footerLists}
      />
    </div>
  );
};

export default MainLayout;
