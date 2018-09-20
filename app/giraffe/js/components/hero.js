import React from "react";
import Typing from "react-typing-animation";

import Navbar from "./navbar";

const Hero = () => (
  <div id="hero">
    <Navbar />
    <img src="/static/img/giraffetools_logo.png" id="hero-logo" />
    <div>
      <div id="typewriter-text">
        <Typing loop={true}>
          Open Science
          <Typing.Delay ms={4000} />
          <Typing.Backspace count={7} />
          Software
          <Typing.Delay ms={4000} />
          <Typing.Backspace count={8} />
          Code
          <Typing.Delay ms={4000} />
          <Typing.Backspace count={4} />
          Analysis
          <Typing.Delay ms={4000} />
          <Typing.Backspace count={8} />
        </Typing>
      </div>
      <img src="/static/img/headline_dot.svg" />
    </div>
    <br />
    <br />
    <br />
    <br />
    <div>
      <h3>
        Giraffe Tools are applications that make it easier to analyse all kinds
        of data
      </h3>
      <a
        type="button btn-primary btn-lg "
        className="btn giraffe-button"
        href="/auth"
      >
        <img src="/static/img/gh-icon.png" width="20px" />
        Login with GitHub
      </a>
    </div>
  </div>
);

export default Hero;