import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect( () => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000)

    return () => clearInterval(intervalId);
  }, [])

  return (
    <>
      <h1>Current Timestamp</h1>
      <h1> {currentTime.getHours()} : {currentTime.getMinutes()} : {currentTime.getSeconds()} </h1>
    </>
  )
}

export default App
