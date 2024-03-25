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
                <a className="">About</a>
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
                and programming.
              </p>
            </div>

            <div id="experience-section">
              <h5 className="highlight mb3">Selected projects</h5>
              <ul>
                <li>
                  <h4 className="mb1">Replit AI</h4>
                  <p className="mini-copy">
                    <span>An early foundation for AI integration</span>
                  </p>
                  <div className="rectangle-container" id="replit">
                    <div className="video-wrapper">
                      <img src="/static/img/replit.png"></img>
                    </div>
                  </div>

                  <p className="mini-copy mt2">Replit, 2023</p>
                </li>
                <li>
                  <h4 className="mb1">The Retool IDE</h4>
                  <p className="mini-copy">
                    <span>Improve learnability and ergonomics</span>
                  </p>
                  <div className="rectangle-container" id="retool-1">
                    <div className="video-wrapper">
                      <video
                        loop
                        autoPlay
                        playsInline
                        muted
                        src="/static/videos/retool-2.mp4"
                      ></video>
                    </div>
                  </div>
                  <p className="mini-copy mt2">Retool, 2021</p>
                </li>
                <li>
                  <h4 className="mb1">Components & Layouts APIs</h4>
                  <p className="mini-copy">
                    Flexible primitives for internal software.
                  </p>
                  <div className="rectangle-container" id="retool-2">
                    <div className="video-wrapper">
                      <img src="/static/img/retool-2.png"></img>
                    </div>
                  </div>
                  <p className="mini-copy mt2">Retool, 2020</p>
                </li>

                <li>
                  <h4 className="mb1">Mapbox Studio</h4>
                  <p className="mini-copy">
                    Tools for cartography and spatial data
                  </p>
                  <div className="rectangle-container" id="mapbox">
                    <div className="video-wrapper">
                      <video
                        loop
                        autoPlay
                        playsInline
                        muted
                        src="/static/videos/mapbox.mp4"
                      ></video>
                    </div>
                  </div>
                  <p className="mini-copy mt2">Mapbox, 2018</p>
                </li>
              </ul>
            </div>

            <div id="writings-section" className="mt4 pb4">
              <h5 className="highlight mb3">Blog posts</h5>
              <ul>
                <li>
                  <h4 className="mb1">Reimagining the Retool IDE</h4>
                  <p className="mini-copy">
                    <span className="">August 17, 2023</span>
                    <span className="separator-dot">.</span>
                    <span>
                      Simplifying Cartography and Spatial Data Editing
                    </span>
                  </p>
                </li>
                <li>
                  <h4 className="mb1">
                    Create intuitive interfaces for complex apps
                  </h4>
                  <p className="mini-copy">
                    <span className="">December 6, 2022</span>
                    <span className="separator-dot">.</span>
                    <span>Core Products & IDE</span>
                  </p>
                </li>
                <li>
                  <h4 className="mb1">Introducing Mapbox Dataset Editor</h4>
                  <p className="mini-copy">
                    <span className="">August 23, 2016</span>
                    <span className="separator-dot">.</span>
                    <span>
                      A new tool for creating and editing geospatial data in
                      your browser.
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
