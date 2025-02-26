import { useState } from 'react'

function App() {
  const [counter, setCount] = useState(10);

  const incrementCounter = () => {
    if(counter == 20)   return;
    setCount(counter + 1);
  }

  function decrementCounter(){
    if(counter == 0)   return;
    setCount(counter - 1);
  }

  return (
    <div>
       <h1>Counter Project</h1>
       <h2> {counter} </h2>
       <button onClick={incrementCounter}> Increase Counter  </button>
       <br></br>
       <br />
       <button onClick={decrementCounter}> Decrease Counter </button>
    </div>
  )
}

export default App
