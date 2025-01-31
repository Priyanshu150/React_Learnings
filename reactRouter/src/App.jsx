import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 class="text-3xl font-bold underline bg-green-600 " >
      Hello world!
    </h1>
  )
}

export default App
