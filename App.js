// src/App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');

  // Handle button clicks
  const handleClick = (value) => {
    setInput(input + value);
  };

  // Handle calculation
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Using eval for simplicity
    } catch (error) {
      setInput('Error');
    }
  };

  // Clear the input
  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button className="operator" onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button className="operator" onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button className="operator" onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button className="clear" onClick={handleClear}>C</button>
          <button className="equals" onClick={handleCalculate}>=</button>
          <button className="operator" onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
};

export default App;
