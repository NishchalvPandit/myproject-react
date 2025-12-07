import { useState } from 'react'
import './App.css'

function App() {
  const [text, setext] = useState("type anything");

  function handleChange(event) {
    setext(event.target.value);
  }

  return (
    <div className="main-container">


      <input type="text" onChange={handleChange} />
      <p>{text}</p>

    </div>
  )
}

export default App
