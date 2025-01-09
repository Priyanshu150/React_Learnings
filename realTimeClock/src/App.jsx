import { useState } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())

  function setTime(){
    setCurrentTime(new Date());
  }
  
  setInterval(setTime, 1000)

  return (
    <>
      <h1>Current Time stamp</h1>
      <h1> {currentTime.getHours()} : {currentTime.getMinutes()} : {currentTime.getSeconds()} </h1>
    </>
  )
}

export default App
