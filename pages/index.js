import React, { useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "../components/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/header";

export default () => {
  const [isChinese, setIsChinese] = useState(false);
  const toggleLanguage = () => {
    setIsChinese((prev) => !prev);
  };

  return (
    <>
      <Header />
      <ThemeProvider defaultDarkMode={true}>
        <div className="page-container">
          <div className="limiter">
            <div className="home-header">
              <div className="left-content">
                <a onClick={toggleLanguage} className="language-button">
                  <span
                    aria-label="English Toggle"
                    color="var(--text-color)"
                    style={{ opacity: isChinese ? "50%" : "100%" }}
                    className="mr1"
                  >
                    En
                  </span>
                  <span
                    aria-label="Chinese Toggle"
                    color="var(--text-color)"
                    style={{ opacity: isChinese ? "100%" : "50%" }}
                  >
                    中
                  </span>
                </a>
                <span className="separator-dot highlight"> . </span>
                <ThemeToggle />
              </div>
              <div className="middle-content">
                Maya Gao <span className="separator-dot highlight">.</span>{" "}
                Oakland CA
              </div>
              <div className="right-content">
                <a className="mr3">Work</a>
                <a className="mr3">Ideas</a>
                <a className="">Places</a>
              </div>
            </div>

            <div className="description home-intro">
              <p>
                <span className="text-bold">Maya Gao</span> is a product
                designer passionate about{" "}
                <span className="underline-highlight">
                  bringing clarity to technical complexities
                </span>{" "}
                and{" "}
                <span className="underline-highlight">
                  building foundations for early stage products
                </span>
                .
              </p>
              <p>
                Previously she worked on software that connect learnability and
                flexibility in the realms of map design, internal operations,
                and creative programming.
              </p>
            </div>

            <div className="home-content">
              <div id="experience-column">
                <h5 className="highlight">Experience</h5>
                <ul>
                  <li>
                    <h4 className="mb1 mt4">Replit</h4>
                    <p className="mini-copy">
                      <span className="">2023 - Now</span>
                      <span className="separator-dot">.</span>
                      <span>AI & Monetization</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1 mt4">Retool</h4>
                    <p className="mini-copy">
                      <span className="">2019 -2023</span>
                      <span className="separator-dot">.</span>
                      <span>Core Products & IDE</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1 mt4">Stripe</h4>
                    <p className="mini-copy">
                      <span className="">2017 -2019</span>
                      <span className="separator-dot">.</span>
                      <span>Developer Tools</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1 mt4">Mapbox</h4>
                    <p className="mini-copy">
                      <span className="">2016 - 2017</span>
                      <span className="separator-dot">.</span>
                      <span>Mapbox Studio</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div id="work-column">
                <h5 className="highlight">Work</h5>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
