import React from "react";

import SEO from "../components/seo";
import TicTacToe from "../components/TicTacToe";

function Games() {
  return (
    <React.Fragment>
      <SEO
        keywords={[`jamielockie`, `jamie lockie`, `web developer`, `Games`]}
        title="Games"
      />
      <TicTacToe />
    </React.Fragment>
  );
}

export default Games;
