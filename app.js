const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like CSS, images) from a 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// Route to handle form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Mock check for username and password
  if (username === 'admin' && password === 'password123') {
    res.send('<h1>Login Successful!</h1>');
  } else {
    res.send('<h1>Invalid Credentials. Please try again.</h1>');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
