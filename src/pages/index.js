import React from "react";

import SEO from "../components/seo";
import { Waves } from "../components/waves";
import { Email } from "../components/email";
import { generateCountdownString } from "../utils";

function IndexPage(props) {
  return (
    <React.Fragment>
      <SEO
        keywords={[`jamielockie`, `jamie lockie`, `web developer`]}
        title="Jamie Lockie — Web Developer"
      />
      <section className="z-0 pt-40 sm:pt-64 pb-32 sticky top-0 max-w-6xl hero-height mx-auto px-6 md:px-12">
        <h1 className="font-bold mb-1 p-3 pl-0 sm:text-4xl text-3xl text-gray-900  ">
          Hey, I'm Jamie.
        </h1>

        <h2 className="text-2xl font-semibold  tracking-normal leading-snug text-gray-900 pb-4">
          I've been a{" "}
          <strong className="text-primaryText font-semibold">
            full-time professional web developer{" "}
          </strong>{" "}
          for a few years, now.
        </h2>
        <small className="first-letter text-lg block font-semibold tracking-normal leading-snug text-gray-900">
          {generateCountdownString(new Date(2017, 10, 21))}, in fact!
        </small>
      </section>
      <Waves fill="hsl(204deg 100% 50%)" className="full-bleed z-10" />

      <section className="bg-blue-gradient pt-32 pb-16 full-bleed z-10">
        <div className="wrapper">
          <div className="text-lg font-normal leading-loose tracking-wide text-white pb-4">
            <p className="pb-10 font-semibold text-3xl leading-normal tracking-wider">
              On most days, I build modern JavaScript applications for the web.
            </p>
            <p className="pb-10 copy">
              First and foremost, I am a Front End Dev. That being said, I've
              worked enough on the backend to know how things fit together. I am
              a Lead Instructor at
              <a
                href="https://junocollege.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Juno College
              </a>{" "}
              and a Mentor at{" "}
              <a
                href="https://www.canadalearningcode.ca/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Canada Learning Code
              </a>
              .
            </p>

            <p>
              I used to have a portfolio page that showed off things like{" "}
              <a
                href="https://friendshrimp-a4c11.firebaseapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                my very first React App.
              </a>{" "}
              Don't get me wrong, it's pretty sweet! But it isn't very
              reflective of my skills now. So I created{" "}
              <em className="italic">this</em> *gestures vaguely around the
              webpage*. It's a simple, fast, beautiful website for me to enjoy
              building — and for you to enjoy visiting. Sounds nice, right?
            </p>
            <p className="pb-10"></p>

            <p className="pb-10">
              {" "}
              I created it using Gatsby ( 💨 ) and Tailwind CSS ( 💅 ).
            </p>

            <p className="pb-10">
              If you'd like to get in touch, all you have to do is{" "}
              <s className="italic">smash that like button</s> grab my email
              below, and give me a shout (just don't copy it more than once 😏).
            </p>

            <Email />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default IndexPage;
