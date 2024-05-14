'use client';
import React, { useState } from 'react';
import { useOptimization } from '../hooks/useOptimization';


const OptimizePage = () => {
  const [inputData, setInputData] = useState({});
  const { optimize, loading, error, results } = useOptimization();

  const handleSubmit = async (event) => {
    event.preventDefault();
    optimize(inputData);
  };

  return (
    <div>

      <main>
        <h1>Run Optimization</h1>
        <form onSubmit={handleSubmit}>
          {/* Form fields for inputData */}
          <button type="submit">Optimize</button>
        </form>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {results && <div>{/* Render results */}</div>}
      </main>

    </div>
  );
};

export default OptimizePage;
