import { useState } from 'react'
import './App.css'

function App() {
  const [gender, setGender] = useState('');
  const [selectedDress, setSelectedDress] = useState('');

  const femaleDresses = [
    'Floral Maxi Dress',
    'Little Black Dress',
    'Cocktail Dress',
    'Summer Sundress',
    'Evening Gown',
    'A-Line Dress',
    'Wrap Dress',
    'Bodycon Dress'
  ];

  const maleDresses = [
    'Classic Suit',
    'Tuxedo',
    'Casual Blazer',
    'Dress Shirt & Trousers',
    'Three-Piece Suit',
    'Linen Suit',
    'Sports Coat',
    'Business Casual'
  ];

  const handleGenderChange = (e) => {
    setGender(e.target.value);
    setSelectedDress('');
  };
  const handleDressChange = (e) => {
    setSelectedDress(e.target.value);
  };

  const getDressList = () => {
    return gender === 'female' ? femaleDresses : maleDresses;
  };

  return (
    <div className="container">
      <h1 className="title">Dress Selector</h1>
      <p className="subtitle">Choose your gender and pick your perfect outfit</p>

      <div className="section">
        <div className="section-title">Select Gender</div>
        <div className="radio-group">
          <div className="radio-item">
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === 'female'}
              onChange={handleGenderChange}
            />
            <label htmlFor="female" className="radio-label">
              <div className="radio-icon"></div>
              <span className="gender-emoji">👩</span>
              <span>Female</span>
            </label>
          </div>

          <div className="radio-item">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === 'male'}
              onChange={handleGenderChange}
            />
            <label htmlFor="male" className="radio-label">
              <div className="radio-icon"></div>
              <span className="gender-emoji">👨</span>
              <span>Male</span>
            </label>
          </div>
        </div>
      </div>

      {/* Conditional Dropdown Menu */}
      {gender && (
        <div className="section dropdown-container">
          <div className="section-title">
            Choose Your {gender === 'female' ? 'Dress' : 'Outfit'}
          </div>
          <div className="dropdown-wrapper">
            <select
              className="dropdown"
              value={selectedDress}
              onChange={handleDressChange}
            >
              <option value="">Select an option...</option>
              {getDressList().map((dress, index) => (
                <option key={index} value={dress}>
                  {dress}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Results Display */}
      {(gender || selectedDress) && (
        <div className="result-section">
          <div className="result-title">Your Selection</div>
          <div className="result-content">
            {gender && (
              <div className="result-item">
                <span className="result-label">Gender:</span>
                <span className="result-value">
                  {gender === 'female' ? '👩 Female' : '👨 Male'}
                </span>
              </div>
            )}
            {selectedDress && (
              <div className="result-item">
                <span className="result-label">Outfit:</span>
                <span className="result-value">{selectedDress}</span>
              </div>
            )}
            {gender && !selectedDress && (
              <div className="empty-state">Please select an outfit from the dropdown above</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App

