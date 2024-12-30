import React, { useState } from 'react';
import './App.css'; // Import custom CSS for animations and styles

function App() {
  const [total, setTotal] = useState(0);
  const [success, setSuccess] = useState(0);
  const [failedPercent, setFailedPercent] = useState(null);
  const [rating, setRating] = useState(0);

  const calculateFailedPercent = () => {
    const failed = total - success;
    if (total > 0 && success >= 0 && failed >= 0) {
      const percent = ((failed / total) * 100).toFixed(2);
      setFailedPercent(percent);

      // Determine star rating based on percentage
      if (percent <= 79) setRating(1);
      else if (percent >= 80 && percent <= 89) setRating(2);
      else if (percent >= 90 && percent <= 94) setRating(3);
      else if (percent >= 95 && percent <= 97) setRating(4);
      else if (percent >= 98 && percent <= 100) setRating(5);
    } else {
      setFailedPercent('Input tidak valid');
      setRating(0);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Failed Calculator</h1>

      <div className="input-container">
        <label>Total Barang:</label>
        <input
          type="number"
          onChange={(e) => setTotal(Number(e.target.value))}
        />
      </div>

      <div className="input-container">
        <label>Failed:</label>
        <input
          type="number"
          onChange={(e) => setSuccess(Number(e.target.value))}
        />
      </div>

      <button className="calculate-btn" onClick={calculateFailedPercent}>
        Hitung
      </button>

      <div className="result">
        {failedPercent !== null && (
          <h2>
            {failedPercent === 'Input tidak valid'
              ? 'Input Tidak Valid!'
              : `Persentase: ${failedPercent}%`}
          </h2>
        )}
      </div>

      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={`star ${star <= rating ? 'filled' : ''}`}>
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
