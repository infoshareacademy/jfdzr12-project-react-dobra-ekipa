import React, { useState } from "react";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useContext } from 'react';
import { Login} from "./auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Register } from "./auth/Register";
// import {Basket} from "./auth/Basket"

function App() {
  const [count, setCount] = useState(0)
  
  const [theme, setTheme] = useState("light")
  
  const handleClick = () => {
    
  }
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login />}> </Route>
        <Route path='register' element={<Register />}> </Route>
        {/* <Route path='basket' element={<Basket/>}></Route> */}
      </Routes>
    </BrowserRouter>

 {/*     <ThemeContext.Provider value={theme}>*/}
        {/* <button onClick={handleClick}>Sign in</button>
        <Slogan></Slogan>
        <Price></Price> 
        <PriceList></PriceList>
        <Gallery></Gallery> */}
 {/*     </ThemeContext.Provider>  */}
</>
  )
}

export default App;


