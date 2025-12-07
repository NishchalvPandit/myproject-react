import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")
  const [showPicker, setShowPicker] = useState(false)

  function togglePicker() {
    setShowPicker(!showPicker)
  }

  return (
    <div className="container">
      <h1 style={{ color: color }}>Color Picker</h1>

      {showPicker && (
        <div className="color-input-wrapper">
          <input type="color" value={color} onChange={(e) => setcolor(e.target.value)} />
        </div>
      )}

      <p style={{ color: '#070707ff', marginTop: '-1rem' }}>Selected: {color}</p>
      <button onClick={togglePicker}>
        {showPicker ? "Close Picker" : "Change Color"}
      </button>
    </div>
  )
}

export default App
