import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Waves } from "../components/waves";

import { differenceInDays } from "date-fns";

function IndexPage() {
  const countdownTimer = () => {
    return differenceInDays(new Date(), new Date(2017, 8, 27));
  };

  return (
    <Layout>
      <SEO
        keywords={[`jamielockie`, `jamie lockie`, `web developer`]}
        title="Home"
      />

      <section className=" z-0 pt-64 pb-32 sticky top-0 max-w-6xl hero-height mx-auto px-6 md:px-12">
        <h1 className=" font-bold leading-snug mb-4 p-3 pl-0 sm:text-4xl text-3xl text-gray-900 tracking-tight ">
          {<span className="text-primary pr-2 ">Hey,</span>} {`I'm Jamie`}
        </h1>

        <h2 className="text-2xl font-semibold tracking-normal leading-snug text-gray-900 pb-4">
          I've been a{" "}
          <strong className="text-primary font-semibold">
            full-time professional web developer{" "}
          </strong>{" "}
          for a few years, now.
        </h2>
        <small className="text-lg block font-semibold tracking-normal leading-snug text-gray-900">
          ({` `}
          {countdownTimer()} days, seems to me 🤔 {` `})
        </small>
      </section>
      <Waves className="full-bleed z-10" />
      <div className="bg-primary full-bleed z-10">
        <div className="wrapper">
          <section className=" text-md text-lg font-normal leading-relaxed tracking-wide text-white pb-4">
            <p className="pb-10 font-semibold text-3xl tracking-wider">
              On <em className="italic">most</em> days, I create JavaScript
              applications for the web.
            </p>
            <p className="pb-10 copy">
              First and foremost, I am a frontend dev. But I have also worked
              enough on the backend to know how things fit together. I used to
              have a portfolio page that showed off things like{" "}
              <a href="https://friendshrimp-a4c11.firebaseapp.com">
                {" "}
                my very first React App.
              </a>{" "}
              Don't get me wrong, it's pretty sweet! But it isn't very
              reflective of my skills now.
            </p>
            <p className="pb-10"></p>

            <p>
              {" "}
              I created it using Gatsby and Tailwind CSS, so it will be fast and
              easy on the eyes
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
