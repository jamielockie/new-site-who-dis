import PropTypes from "prop-types";
import React from "react";
import { Footer } from "./footer";
// import Header from "./header";

function Layout({ children }) {
  return (
    <React.Fragment>
      <main className="wrapper bg-gray-100 text-gray-900">{children}</main>
      <Footer />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
