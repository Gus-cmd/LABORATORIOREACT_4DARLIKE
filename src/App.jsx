import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[like, setLike] = useState(0)
  
  return (
    <>
    <h1>Like{like}</h1>
    <button onClick={()=>setLike(like+1)}>Dar Like</button>
    </>
  )
}

export default App
