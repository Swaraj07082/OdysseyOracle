"use client"

import { createContext, useEffect, useState } from "react";


export const themecontext = createContext("default");

const getFromLocalStorage = () => {
  if (typeof window !== undefined) {
    // Client-side-only code

    // next js is by default server side rendering so to use browser local storage we need to give the if condition above , we have to do this even though we have said "use client"

    const value = localStorage.getItem("theme");
    return value || "light";
  }

  // if value has a value it will be returned or else light will be returned

  // The getItem() method of the Storage interface, when passed a key name, will return that key's value, or null if the key does not exist, in the given Storage object.
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, settheme] = useState(() => {
    return getFromLocalStorage();
  });

  
 const toggle =()=>{

settheme(theme ==='light'? 'dark' : 'light') 

}


// as we are using local storage , we need to change the key value in local storage when dark mode toggles

useEffect(()=>{

localStorage.setItem("theme" , theme)

}, [theme])

  // problem with this is on refreshing the page everytime our theme will be back to light . suppose we turned on the dark mode and then we refreshed the page , it will turn to light on refreshing , to prevent this from happening , we need to store it in local storage

  // all children wrapped inside this will be inside the provider
  return <themecontext.Provider value={{theme , toggle}}> {children} </themecontext.Provider>
};
