import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Slogan from './Slogan.jsx';
import Price from './Price.jsx';
import PriceList from './Price-list.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slogan></Slogan>
      <Price></Price> 
      <PriceList></PriceList>
    </>

  )
}

export default App


