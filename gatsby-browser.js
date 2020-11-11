import "./src/css/style.css";

import React from "react";
import Layout from "./src/components/layout";

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
