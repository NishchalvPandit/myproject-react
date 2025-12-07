import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Counter App</h1>
        <p className="count-display">{count}</p>
        <button className="btn" onClick={increment}>Increment</button>
      </div>
    </div>
  )
}


export default App
