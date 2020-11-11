import React from "react";
import { Link } from "gatsby";
import { Email } from "../components/email";

export const Footer = ({ isHomePage }) => {
  return (
    <footer className="bg-primaryDark wrapper py-3">
      {isHomePage ? (
        <p className="pt-10 text-lg font-normal leading-loose tracking-wide text-white pb-4">
          Hey! Before you go, want to play a quick <Link to="/games">Game</Link>
          ?
        </p>
      ) : undefined}
      <nav className="flex flex-col items-start justify-between sm:flex-row sm:items-center text-sm ">
        <Email />
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
