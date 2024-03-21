"use client";

import { themecontext } from "@/context/ThemeContext";
import React, { useContext } from "react";

export default function ThemeProvider({ children }) {
  const { theme } = useContext(themecontext);
  return <div className={theme}>{children}</div>;
}
