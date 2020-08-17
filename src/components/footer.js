import React, { useState } from "react";

export const Footer = () => {
  const [isEmailCopied, setEmailCopied] = useState(false);
  console.log("jjj isEmailCopied", isEmailCopied);
  return (
    <footer className="bg-teal-700">
      <nav className="flex justify-between items-center max-w-4xl p-4 mx-auto text-sm md:p-8">
        <address className="text-white not-italic flex flex-row items-center">
          <span className="pl-2 pr-4">jamielockie@gmail.com</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText("jamielockie@gmail.com");
              setEmailCopied(true);
            }}
            className="p-1 rounded-md bg-teal-700 hover:bg-teal-600 transition-colors duration-300"
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
                  isEmailCopied
                    ? "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    : "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                }
              />
            </svg>
          </button>
          {
            <p
              className={`transition duration-300 italic ${
                isEmailCopied ? "opacity-100" : "opacity-0"
              }`}
            >
              Copied!
            </p>
          }
        </address>

        <p>
          <a
            className="font-bold text-white no-underline"
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
