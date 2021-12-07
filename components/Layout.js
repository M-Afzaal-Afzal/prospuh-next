import React from "react";
import Footer from "./Footer";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Layout = ({children}) => {
  return (
    <div>
      <div className="mobileMenu">
        <MobileMenu />
      </div>
      <div className="desktopMenu">
        <Navbar />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
