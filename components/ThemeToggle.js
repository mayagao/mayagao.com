// ThemeToggle.js

import React from "react";
import { useTheme } from "./ThemeContext";
import MoonSVG from "../static/icons/moon.js"; // Import the MoonSVG component
import SunSVG from "../static/icons/sun.js"; // Import the MoonSVG component

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}>
      <a
        className="toggle-button mr1"
        onClick={toggleTheme}
        style={{ color: "var(--text-color)" }}
      >
        <MoonSVG
          style={{
            stroke: "currentColor",
            opacity: isDarkMode ? "100%" : "50%",
          }}
        />
      </a>
      <a className="toggle-button" onClick={toggleTheme}>
        <SunSVG
          style={{
            stroke: "currentColor",
            opacity: isDarkMode ? "50%" : "100%",
          }}
        />
      </a>
    </div>
  );
};

export default ThemeToggle;
