import React, { Component } from "react";


import "../styles/dashboard-header.css";
import "../styles/dashboard-style.css";
import "../styles/style.css";

import "../styles/global.css";
import "../styles/new-style.css";
import "../styles/signup-signin-style.css";
import "../styles/responsive.css";
import "../styles/dash.css";



class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }







  render() {
    const { Component, pageProps } = this.props;


    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
