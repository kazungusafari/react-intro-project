import React, { createContext, useState } from "react";

const ThemeContext = createContext(["green", () => {}]);

export const Provider = ({ children }) => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
