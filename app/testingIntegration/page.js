// pages/optimize.js
'use client';
import React, { useState } from 'react';

const OptimizePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleOptimize = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          distances: {
            Employee1: { Office1: 10, Office2: 20 },
            Employee2: { Office1: 20, Office2: 10 },
          },
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error from server:', errorData);
        setError(errorData.error);
      } else {
        const result = await response.json();
        setData(result);
        setError(null);
      }
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while optimizing.');
    }
  };

  return (
    <div>
      <h1>Optimize Employee Office Assignment</h1>
      <button onClick={handleOptimize}>Optimize</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <table border="1">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Office</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((employee) =>
            Object.keys(data[employee]).map((office) => (
              <tr key={`${employee}-${office}`}>
                <td>{employee}</td>
                <td>{office}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OptimizePage;
