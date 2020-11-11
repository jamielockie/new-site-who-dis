import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Footer } from "./footer";
import { Waves } from "./waves";

// import Header from "./header";

function Layout({ children, location }) {
  const isHomePage = location.pathname === "/";
  return (
    <React.Fragment>
      {isHomePage ? undefined : (
        <nav>
          <Link
            to="/"
            className="flex flex-col no-underline justify-center items-center text-gray-700 hover:bg-gray-300 hover:text-gray-800 transition-colors duration-300 rounded-lg py-1 px-1 m-4 absolute top-0 right-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span>Home</span>
          </Link>
        </nav>
      )}
      <main className="wrapper hero-height bg-gray-100 text-gray-900">
        {children}
      </main>
      {isHomePage ? undefined : <Waves className="full-bleed bg-gray-100" />}
      <Footer isHomePage={isHomePage} />
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
