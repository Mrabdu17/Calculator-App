// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Use CORS to allow requests from the frontend
app.use(cors());
app.use(express.json());

// Calculator logic route
app.post('/calculate', (req, res) => {
  const { expression } = req.body;

  try {
    const result = eval(expression);  // Using eval to evaluate the math expression
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
