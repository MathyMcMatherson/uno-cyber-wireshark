const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static('public'));

// POST route for handling login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'supersecret') {
        res.send('<h2>Login successful!</h2>');
    } else {
        res.send('<h2>Login failed. Invalid username or password.</h2>');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
