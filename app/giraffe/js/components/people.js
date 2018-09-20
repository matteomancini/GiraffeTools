import React from "react";

const People = () => (
  <div className="container-fluid" id="people">
    <h1>The People</h1>
    <div className="col text-center">Tim van Mourik</div>
    <img src="/static/img/tim_artsy_portrait.png" width="20%" />
    Dr. Tim van Mourik And I automatically create the code for your analysis
    pipeline. Get started immediately by checking out the example files! It''s
    so super duper easy.
    <br />
    <a href="https://github.com/TimVanMourik" target="_blank">
      <img src="/static/img/github_icon.svg" />
    </a>
    <a
      href="https://nl.linkedin.com/in/tim-van-mourik-616249a1"
      target="_blank"
    >
      <img src="/static/img/linkedin_icon.svg" />
    </a>
    <a href="mailto:timvanmourik@gmail.com" target="_blank">
      <img src="/static/img/mail_icon.svg" />
    </a>
    <a href="https://www.timvanmourik.com" target="_blank">
      <img src="/static/img/web_icon.svg" />
    </a>
  </div>
);

export default People;