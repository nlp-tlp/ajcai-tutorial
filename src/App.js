import React, { Component } from "react";

import uwa_logo from "./images/uwacrest-blue.png";
import center_logo from "./images/center-logo.png";
import nlp_tlp_logo from "./images/nlp-tlp-logo.png";
import nlp_tlp_logo_white from "./images/nlp-tlp-logo-white.png";
import "./App.scss";

import HomePage from "./pages/home";
import HomepageLogosSection from "./pages/subpages/homepageLogosSection";
import Sidenav from "./components/sidenav";
import Hero from "./components/hero";

import ScrollToTop from "./components/scrollToTop";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container flex-container flex-align-center justify-space-between">
          <div class="header-left flex-container flex-align-center">
            <ul className="header-nav">
              <li>
                <a href="#abstract">Abstract </a>
              </li>
              <li>
                <a href="#outline">Tutorial Outline</a>
              </li>
              <li>
                <a href="#speaker">Speaker</a>
              </li>
              <li>
                <a href="#materials">Materials</a>
              </li>
            </ul>
          </div>
          <div className="header-right flex-container flex-align-center">
            <div className="logo-group">
              <a href="https://uwa.edu.au" target="_blank">
                <div class="logo">
                  <img src={uwa_logo} className="App-logo" alt="UWA logo" />
                </div>
              </a>
              <a href="https://maintenance.org.au">
                <div class="logo center-logo">
                  <img src={center_logo} alt="NLP-TLP Logo" />
                </div>
              </a>
              <a href="https://nlp-tlp.org">
                <div class="logo nlp-tlp-logo">
                  <img src={nlp_tlp_logo} alt="NLP-TLP Logo" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
/* 
<div className="logo-text">
  <h2>
    UWA Natural & Technical<br/>
    Language Processing
  </h2>
</div>
*/

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="logo-group logo-group-large">
            <div class="logo nlp-tlp-logo">
              <img src={nlp_tlp_logo_white} alt="NLP-TLP Logo" />
            </div>

            <div className="logo-text">
              <h3>The University of Western Australia</h3>
              <h2>Natural & Technical Language Processing Group</h2>
            </div>
          </div>
          <hr />

          <p>
            &copy; UWA NLP-TLP Group 2021.
            <br />
            Website by Michael Stewart.
          </p>
        </div>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Hero />
        <main id="main" className="container">
          <HomePage />
        </main>

        <HomepageLogosSection />
        <Footer />
      </>
    );
  }
}

export default App;
