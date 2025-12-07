import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')



  return (
    <div className="form-container">
      <h1 className="form-title">Contact Form</h1>
      <p className="form-subtitle">Fill in your details below</p>

      <div className="input-group">
        <label className="input-label">Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Enter your name'
          className="form-input"
        />
        <div className="input-value">{name}</div>
      </div>

      <div className="input-group">
        <label className="input-label">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder='Enter your age'
          className="form-input"
        />
        <div className="input-value">{age}</div>
      </div>

      <div className="input-group">
        <label className="input-label">Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Enter your email'
          className="form-input"
        />
        <div className="input-value">{email}</div>
      </div>

      <div className="button-group">
        <button className="btn btn-submit">Submit</button>
        <button className="btn btn-clear" onClick={() => { setName(''); setAge(''); setEmail(''); }}>Clear</button>
      </div>
    </div>
  );
}

export default App
