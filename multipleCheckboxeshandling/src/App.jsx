import { useState } from 'react'
import './App.css'

function App() {

  const [checked, setChecked] = useState([]);

  function handleChange(e) {
    const { value, checked } = e.target;
    if (checked) {
      setChecked((prev) => [...prev, value]);
    } else {
      setChecked((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <div className="container">
      <h1 className="title">Choose Your Hobbies</h1>

      <div className="checkbox-group">
        <div className={`checkbox-item ${checked.includes('reading') ? 'checked' : ''}`}>
          <input
            type="checkbox"
            onChange={handleChange}
            id="reading"
            value="reading"
          />
          <label htmlFor="reading">📚 Reading</label>
        </div>

        <div className={`checkbox-item ${checked.includes('writing') ? 'checked' : ''}`}>
          <input
            type="checkbox"
            onChange={handleChange}
            id="writing"
            value="writing"
          />
          <label htmlFor="writing">✍️ Writing</label>
        </div>

        <div className={`checkbox-item ${checked.includes('coding') ? 'checked' : ''}`}>
          <input
            type="checkbox"
            onChange={handleChange}
            id="coding"
            value="coding"
          />
          <label htmlFor="coding">💻 Coding</label>
        </div>
      </div>

      <div className="result-section">
        <div className="result-title">Selected Hobbies</div>
        <div className={`result-content ${checked.length === 0 ? 'empty' : ''}`}>
          {checked.length === 0 ? (
            'No hobbies selected yet'
          ) : (
            checked.map((hobby) => (
              <span key={hobby} className="hobby-tag">
                {hobby}
              </span>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App
