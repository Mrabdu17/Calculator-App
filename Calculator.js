// frontend/src/Calculator.js
import React, { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setExpression(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        expression,
      });
      setResult(response.data.result);
      setError(null);
    } catch (err) {
      setError('Invalid expression');
      setResult(null);
    }
  };

  return (
    <div className="calculator">
      <h1>Basic Calculator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={expression}
          onChange={handleChange}
          placeholder="Enter expression"
        />
        <button type="submit">Calculate</button>
      </form>

      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Calculator;
