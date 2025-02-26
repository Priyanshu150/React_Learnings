import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  let intervalId = useRef(null);
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [hours, setHours] = useState(0)
  const [isRunning, setRunningStatus] = useState(false)

  useEffect( () => {
    if(seconds === 60){
      setSeconds(0);
      setMinutes(prevMinutes => prevMinutes + 1);
    }
    
    if(minutes === 60){
      setMi(0);
      setHours(prevHour => prevHour + 1);
    }

  }, [hours, minutes, seconds])

  function startTimer() {
    setRunningStatus(true);
    intervalId.current = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000);
  }

  function stopTimer(){
    clearInterval(intervalId.current);
    intervalId.current = null;
    setRunningStatus(false);
  }

  function resetTimer(){
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }

  return (
    <div>
      <h1> {hours} : {minutes} : {seconds}</h1>
      <button onClick={startTimer} disabled={isRunning}> 
      START 
      </button>
      <span> </span>
      <button onClick={stopTimer} disabled={!isRunning}> 
      STOP 
      </button>
      <p> </p>
      <button onClick={resetTimer}> RESET </button>
    </div>
  )
}

export default App
