import React, { useState } from "react";
import { ThemeProvider } from "../components/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import ArrowSVG from "../static/icons/arrow.js";
import { Html, Main, NextScript } from "next/document";

export default () => {
  const [isChinese, setIsChinese] = useState(false);
  const toggleLanguage = () => {
    setIsChinese((prev) => !prev);
  };

  return (
    <>
      <ThemeProvider defaultDarkMode={true}>
        <div className="gradient-header mb2"></div>
        <div className="page-container">
          <div className="limiter">
            <div className="home-header">
              <div className="left-content">
                Maya Gao <span className="separator-dot highlight">.</span>{" "}
                <></>Oakland CA
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
                designer passionate about bringing{" "}
                <span className="underline-highlight">
                  clarity to technical complexities
                </span>{" "}
                and building{" "}
                <span className="underline-highlight">
                  foundations for early stage products
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
                <ul className="experience-section-list">
                  <li>
                    <h4 className="mb1">Replit</h4>
                    <p className="mini-copy">
                      <span className="">2023-now</span>
                      <span className="separator-dot">.</span>
                      <span>AI & upselling strategy</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1">Retool</h4>
                    <p className="mini-copy">
                      <span className="">2019-2023</span>
                      <span className="separator-dot">.</span>
                      <span>App building experience</span>
                    </p>
                  </li>
                  <li>
                    <h4 className="mb1">Stripe</h4>
                    <p className="mini-copy">
                      <span className="">2017-2019</span>
                      <span className="separator-dot">.</span>
                      <span>Internal developer tooling</span>
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
                  <ul className="projects-section-list">
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

                <div className="mt5 pb4 writings-section">
                  <h5 className="highlight mb3">Writings</h5>
                  <ul>
                    <li className="blog-list">
                      <a
                        href="https://retool.com/blog/reimagining-the-retool-ide"
                        className="mb1 blog-link"
                        target="_blank"
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
                    <li className="blog-list">
                      <a
                        href="https://retool.com/blog/introducing-the-sidebar-frame-create-intuitive-interfaces-for-complex-apps"
                        className="mb1 blog-link"
                        target="_blank"
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
                    <li className="blog-list">
                      <a
                        href="https://blog.mapbox.com/announcing-the-mapbox-studio-dataset-editor-1df7de4b780a"
                        target="_blank"
                        className="mb1 blog-link"
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

            <div className="home-footer mt5 ">
              <div className="left-content mini-copy">© 2024 Maya Gao</div>
              <div className="right-content ">
                <a
                  href="https://twitter.com/mayaqgao"
                  target="_blank"
                  className="social-link mr3"
                >
                  Twitter
                </a>

                <a
                  href="https://www.linkedin.com/in/mayaqgao/"
                  target="_blank"
                  className="social-link mr3"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto: mayaqgao@gmail.com"
                  target="_blank"
                  className="social-link"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};
