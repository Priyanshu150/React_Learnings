import { useState } from 'react'
import Test from './components/Test.jsx'
import LoggerComp from './components/LoggerComp.jsx'
import TimerComp from './components/TimerComp.jsx'
import ResizeComp from './components/resizeComp.jsx'
import MultiEventComp from './components/MultiEventComp.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Test /> */}
      {/* <LoggerComp /> */}
      {/* <TimerComp /> */}
      {/* < ResizeComp />  */}
      {/* < MultiEventComp />  */}
      <DataFetcher />
    </>
  )
}

export default App
