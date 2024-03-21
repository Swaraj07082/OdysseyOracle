"use client";

import { createContext, useEffect, useState } from "react";

export const themecontext = createContext("default");

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, settheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    settheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <themecontext.Provider value={{ theme, toggle }}>
      {" "}
      {children}{" "}
    </themecontext.Provider>
  );
};
