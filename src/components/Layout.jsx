/* eslint-disable react/prop-types */
// Layout.js

import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="bg-blue-950">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
