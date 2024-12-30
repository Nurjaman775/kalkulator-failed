import React, { useState } from 'react';

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
      setFailedPercent('Invalid input');
      setRating(0);
    }
  };

  return (
    <div
      style={{
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#121212',
        color: '#FF0000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'url(https://ninjaexpress.co.id/images/bg_ninja.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textShadow: '3px 3px 10px #000', color: '#FFFFFF' }}>
        Failed Calculator
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#FFF', marginBottom: '20px', textShadow: '1px 1px 5px #000' }}>
        Kalkulator Persentase Gagal
      </p>
      <div style={{ marginBottom: '20px', width: '90%' }}>
        <label style={{ fontSize: '1.2rem', color: '#FFF' }}>Total Barang:</label>
        <input
          type="number"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '2px solid #FF3333',
            backgroundColor: '#1E1E1E',
            color: '#FFF',
            marginTop: '5px',
            outline: 'none',
          }}
          onChange={(e) => setTotal(Number(e.target.value))}
        />
      </div>
      <div style={{ marginBottom: '20px', width: '90%' }}>
        <label style={{ fontSize: '1.2rem', color: '#FFF' }}>Failed:</label>
        <input
          type="number"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1rem',
            borderRadius: '8px',
            border: '2px solid #FF3333',
            backgroundColor: '#1E1E1E',
            color: '#FFF',
            marginTop: '5px',
            outline: 'none',
          }}
          onChange={(e) => setSuccess(Number(e.target.value))}
        />
      </div>
      <button
        onClick={calculateFailedPercent}
        style={{
          padding: '12px 24px',
          fontSize: '1.2rem',
          color: '#FFF',
          backgroundColor: '#FF3333',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          textTransform: 'uppercase',
          boxShadow: '0 5px 15px rgba(255, 0, 0, 0.5)',
        }}
      >
        Hitung
      </button>
      <div style={{ marginTop: '30px', textAlign: 'center', width: '90%' }}>
        {failedPercent !== null && (
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textShadow: '2px 2px 10px #000',
              color: '#FFF',
            }}
          >
            {failedPercent === 'Invalid input'
              ? 'Input Tidak Valid!'
              : `Persentase: ${failedPercent}%`}
          </h2>
        )}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              fontSize: '2rem',
              color: star <= rating ? '#FFD700' : '#FFF',
            }}
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;
