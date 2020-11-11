import React from "react";
import { Link } from "gatsby";
import { Email } from "../components/email";

export const Footer = ({ isHomePage }) => {
  return (
    <footer className="bg-primaryDark wrapper pt-3 pb-6">
      <nav className="flex flex-col items-start justify-between sm:flex-row sm:items-center text-sm ">
        {isHomePage ? (
          <p className=" text-md pb-4 sm:pb-0 sm:text-lg font-normal leading-loose tracking-wide text-white">
            Hey! Before you go, want to{" "}
            <span className="whitespace-no-wrap">
              play a quick <Link to="/games">Game</Link>?
            </span>
          </p>
        ) : (
          <Email />
        )}
        <p>
          <a
            className="font-bold text-white no-underline py-3"
            href="https://github.com/jamielockie"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
};
