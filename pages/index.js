import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/header";

export default () => {
  const [isChinese, setIsChinese] = useState(false);
  const toggleLanguage = () => {
    setIsChinese((prev) => !prev);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <div className="page-container">
      <Header />
      <div className="limiter">
        <div className="home-header">
          <div className="left-content">
            <a onClick={toggleLanguage} className="language-button">
              <span
                aria-label="English Toggle"
                style={{ color: isChinese ? "gray" : "black" }}
                className="mr1"
              >
                En
              </span>
              <span
                aria-label="Chinese Toggle"
                style={{ color: isChinese ? "black" : "gray" }}
              >
                中
              </span>
            </a>
            <span className="seperator-dot ph1"> . </span>
            <a
              className="toggle-button mr1"
              onClick={() => setIsDarkMode(false)}
            >
              <img
                src="../static/icons/moon.svg"
                alt="Light Mode"
                className={`toggle-icon  ${!isDarkMode ? "active" : ""}`}
              />
            </a>
            <a className="toggle-button" onClick={toggleDarkMode}>
              <img
                src="../static/icons/sun.svg"
                alt="Dark Mode"
                className={`toggle-icon ${isDarkMode ? "active" : ""}`}
              />
            </a>
          </div>
          <div className="middle-content">
            Maya Gao <span className="seperator-dot">.</span> Oakland CA
          </div>
          <div className="right-content">
            <a className="mr2">Work</a>
            <a className="mr2">Ideas</a>
            <a className="mr2">Places</a>
            <a>About</a>
          </div>
        </div>

        <div className="description home-intro">
          <p>
            <b>Maya Gao</b> is a product designer passionate about bringing
            clarity to technical complexities and building foundations for early
            stage products.
          </p>
          <p>
            Previously she worked on software that connect learnability and
            flexibility in the realms of map design, internal operations, and
            creative programming.
          </p>
        </div>
      </div>
    </div>
  );
};
