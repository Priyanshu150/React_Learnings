import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="bgChange" style={{backgroundColor: color}}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <button id="blackBtn" onClick={() => setColor("black")}>Black</button>
        <button id="whiteBtn" onClick={() => setColor("white")}>White</button>
        <button id="redBtn" onClick={() => setColor("red")}>Red</button>
        <button id="yellowBtn" onClick={() => setColor("yellow")}>Yellow</button>
        <button id="blueBtn" onClick={() => setColor("blue")}>Blue</button>
      </div>
    </div>
  )
}

export default App
