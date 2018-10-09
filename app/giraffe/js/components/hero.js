import React from "react";
import Typing from "react-typing-animation";

import NavigationContainer from "../containers/navigationContainer";
import LoginButton from "./loginButton";

const Hero = () => (
  <div id="hero">
    <NavigationContainer />
    <div className="hero-text position-relative">
      <img src="/static/img/giraffetools_logo.png" id="hero-logo" />
      <div>
        <div id="typewriter-text">
          <Typing loop={true} className="float-left">
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
        <img id="headline-dot" src="/static/img/headline_dot.svg" />
      </div>
      <div id="hero-subtitle">
        Giraffe Tools are applications that make it easier to analyse all kinds
        of data!
      </div>
      <LoginButton id="hero-login-button" />
    </div>
  </div>
);

export default Hero;
