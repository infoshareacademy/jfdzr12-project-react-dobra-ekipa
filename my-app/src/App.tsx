import React, { useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Slogan from './Slogan_';
import Price from './Price';
import PriceList from './Price-list';
import Gallery from './Gallery';
import { useContext } from 'react';
import { ThemeContextType } from "./context";


function App() {
  const [count, setCount] = useState<number>(0)
  
  const [theme, setTheme] = useState<ThemeContextType>("light")

  return (
    <>
 {/*     <ThemeContext.Provider value={theme}>*/}
        <Slogan></Slogan>
        <Price></Price> 
        <PriceList></PriceList>
        <Gallery></Gallery>
 {/*     </ThemeContext.Provider>  */}
    </>

  )
}

export default App;


