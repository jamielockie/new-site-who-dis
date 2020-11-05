import React, { useState } from "react";

export const Footer = () => {
  const [isEmailCopied, setEmailCopied] = useState(false);
  const [timesCopied, setTimesCopied] = useState(0);

  const getSassyText = () => {
    switch (timesCopied) {
      case 2:
        return "Copied (again)";
      case 3:
        return "Copied (again, and again)";
      case 4:
        return "That's quite enough...";
      case 5:
        return "Un-copied! (JK, it's copied)";
      case 6:
        return "";
      default:
        return "Copied!";
    }
  };

  return (
    <footer className="bg-primaryDark wrapper pb-6">
      <nav className="flex justify-between items-center  text-sm ">
        <address className="text-white not-italic flex flex-row items-center">
          <span className="pl-2 pr-1 py-6">jamielockie@gmail.com</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText("jamielockie@gmail.com");
              setEmailCopied(true);
              setTimesCopied(timesCopied > 5 ? 2 : timesCopied + 1);
            }}
            className="p-1 rounded-md bg-primaryDark hover:bg-primary transition-colors duration-300"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="clipboard w-6 h-6  transition duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isEmailCopied && timesCopied !== 6
                    ? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    : "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                }
              />
            </svg>
            <span className="sr-only">Copy Email</span>
          </button>
          <p
            className={`transition duration-300 px-2 italic ${
              isEmailCopied ? "opacity-100" : "opacity-0"
            }`}
          >
            {getSassyText()}
          </p>
        </address>

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
