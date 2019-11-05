import React from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby"

// import Header from "./header"
import "scss/index.scss";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div id="layout">
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="layout-side"></div>
      <main>
        {children}
        <footer> © Cleverit XR </footer>
      </main>
      <div className="layout-side"></div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
