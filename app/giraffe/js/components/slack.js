import React, { Fragment } from "react";

import Banner from "./banner";
import Footer from "./footer";
import SlackBanner from "./slackBanner";

class Slack extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <Banner />
        <div>Slack form</div>
        <SlackBanner />
        <Footer />
      </Fragment>
    );
  }
}

export default Slack;
