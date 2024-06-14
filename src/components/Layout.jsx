/* eslint-disable react/prop-types */

import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
    <div className="bg-blue-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
