import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { ThemeContext } from "styled-components";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                {/* pura view port is your container */}
                <div className="wrapper">
                  <Navbar />
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
          {/* now context and state  can be accessed by everywhere cause we have wrapped everything with context provider in layout.js */}
        </AuthProvider>
      </body>
    </html>
  );
}
