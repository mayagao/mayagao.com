// ThemeContext.js

import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, defaultDarkMode }) => {
  const [isDarkMode, setIsDarkMode] = useState(defaultDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div
        className={`theme-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
      >
        {console.log("Current theme:", isDarkMode ? "dark" : "light")}
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
