// we could set the dark mode theme code in layout.js tooo but for dark mode we will need to use usecontext hook , that will make layout.js a client side component , thus making whole app a client side rendering component , lesser client side components is the better option for rendering and bettern SEO , so we writing dark mode code here in this file


"use client"

import { themecontext } from '@/context/ThemeContext'
import React, { useContext } from 'react'



export default function ThemeProvider({children}) {
    const {theme} = useContext(themecontext)
  return (
    <div className={theme}>{children}
    </div>
  )
}
