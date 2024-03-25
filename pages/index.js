import React, { useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "../components/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import Header from "../components/header";
import ArrowSVG from "../static/icons/arrow.js";

export default () => {
  const [isChinese, setIsChinese] = useState(false);
  const toggleLanguage = () => {
    setIsChinese((prev) => !prev);
  };

  return (
    <>
      <Header />
      <ThemeProvider defaultDarkMode={true}>
        <div className="gradient-header mb2"></div>
        <div className="page-container">
          <div className="limiter">
            <div className="home-header">
              <div className="left-content">
                {/* <a onClick={toggleLanguage} className="language-button">
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
                </a>   <span className="separator-dot highlight"> . </span> */}
                Maya Gao <span className="separator-dot highlight">.</span>{" "}
                Oakland CA
              </div>
              <div className="middle-content"></div>
              <div className="right-content">
                <ThemeToggle />
                {/* <a className="mr3">Work</a>
                <a className="">About</a> */}
              </div>
            </div>

            <div className="description home-intro">
              <p className="mb3">
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

            <div id="home-content">
              <div id="experience-section">
                <h5 className="highlight mb3">Experience</h5>
                <ul>
                  <li>
                    <h4 className="mb1">Replit</h4>
                    <p className="mini-copy">
                      <span className="">2023-now</span>
                      <span className="separator-dot">.</span>
                      <span>AI & Enterprise</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1">Retool</h4>
                    <p className="mini-copy">
                      <span className="">2019-2023</span>
                      <span className="separator-dot">.</span>
                      <span>Core Products & IDE</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1">Stripe</h4>
                    <p className="mini-copy">
                      <span className="">2017-2019</span>
                      <span className="separator-dot">.</span>
                      <span>Developer tools</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1">Mapbox</h4>
                    <p className="mini-copy">
                      <span className="">2015-2017</span>
                      <span className="separator-dot">.</span>
                      <span>Mapbox Studio</span>
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <div id="projects-section">
                  <h5 className="highlight mb3">Projects</h5>
                  <ul>
                    <li>
                      <h4 className="mb1">
                        Foundational UI for AI integration
                      </h4>
                      <div className="mini-copy mb2">
                        An early design system for AI integration throughout the
                        Replit IDE.
                      </div>
                      <div className="rectangle-container" id="replit">
                        <div className="video-wrapper">
                          <img src="/static/img/replit.png"></img>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h4 className="mb1">The Retool IDE</h4>
                      <div className="mini-copy mb2">
                        <span>
                          Balance learnability & ergonomics for the core Retool
                          editor.
                        </span>
                      </div>
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
                    </li>
                    <li>
                      <h4 className="mb1">Retool Components API</h4>
                      <div className="mini-copy mb2">
                        Define components & layout primitives for internal
                        software.
                      </div>
                      <div className="rectangle-container" id="retool-2">
                        <div className="video-wrapper">
                          <img src="/static/img/retool-2.png"></img>
                        </div>
                      </div>
                    </li>

                    <li>
                      <h4 className="mb1">Mapbox Studio</h4>
                      <div className="mini-copy mb2">
                        Tools for designing custom maps & creating spatial data.
                      </div>
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
                    </li>
                  </ul>
                </div>

                <div id="writings-section" className="mt5 pb4">
                  <h5 className="highlight mb3">Writings</h5>
                  <ul>
                    <li>
                      <a
                        href="https://retool.com/blog/reimagining-the-retool-ide"
                        className="mb1"
                      >
                        <h4>Reimagining the Retool IDE</h4>
                        <ArrowSVG />
                      </a>
                      <p className="mini-copy">
                        <span className="">August 17, 2023</span>
                        <span className="separator-dot">.</span>
                        <span>A journey to bring big changes to life.</span>
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://retool.com/blog/introducing-the-sidebar-frame-create-intuitive-interfaces-for-complex-apps"
                        className="mb1"
                      >
                        <h4>Create intuitive interfaces for complex apps</h4>
                        <ArrowSVG />
                      </a>
                      <p className="mini-copy">
                        <span className="">December 6, 2022</span>
                        <span className="separator-dot">.</span>
                        <span>Introducing the Sidebar Frame.</span>
                      </p>
                    </li>
                    <li>
                      <a
                        href="https://blog.mapbox.com/announcing-the-mapbox-studio-dataset-editor-1df7de4b780a"
                        className="mb1"
                      >
                        <h4>Introducing Mapbox Dataset Editor</h4>
                        <ArrowSVG />
                      </a>
                      <p className="mini-copy">
                        <span className="">August 23, 2016</span>
                        <span className="separator-dot">.</span>
                        <span>
                          Creating & editing geospatial data in the browser.
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
