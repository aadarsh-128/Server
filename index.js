const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 443; // You can change this port number to your desired value

// Middleware to parse JSON data in the request body
app.use(bodyParser.json());

// POST API endpoint for /discordToken
app.post('/discordToken', (req, res) => {
  // Log the request and headers
  console.log('Received POST request:');
  console.log('Request Body:', req.body);
  console.log('Headers:', req.headers);

  // Send a 200 status code in the response
  res.sendStatus(200);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
