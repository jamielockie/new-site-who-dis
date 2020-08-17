import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import { Helmet } from "react-helmet";
// import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`jamielockie`, `jamie lockie`, `web developer`]}
        title="Home"
      />
      {/* <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}

      <section className="pt-10 lg:pt-32 pb-32 lg:pb-40 max-w-6xl mx-auto px-6 md:px-12">
        {/* <img
          alt="Cat and human sitting on a couch"
          className="block w-1/2 mx-auto mb-8"
          src={catAndHumanIllustration}
        /> */}
        <div className="">
          <h1
            className="
              font-bold
              leading-snug
              mb-4
              p-3
              pl-0
              sm:text-4xl
              text-3xl
              text-3xl
              text-gray-900
              tracking-tight
            "
          >
            {<span className="text-teal-700">Hey, </span>} I&#39;m Jamie
          </h1>
        </div>

        <p className="text-2xl font-semibold tracking-tight leading-snug text-gray-900">
          {`I've been a professional web developer for `}
          <span className="underline-wavy">a few years, now.</span>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
