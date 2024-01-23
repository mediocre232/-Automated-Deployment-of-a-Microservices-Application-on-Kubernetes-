const express = require('express');

const app = express();

const port = 3001; // Use a different port than the frontend

app.use(express.json()); // For parsing application/json

// A simple API endpoint

app.get('/api', (req, res) => {

res.json({ message: 'Hello from the backend!' });

});

// Handle 404 - Endpoint not found

app.use((req, res, next) => {

res.status(404).send('Endpoint not found');

});

// Error handling middleware

app.use((err, req, res, next) => {

console.error(err.stack);

res.status(500).send('Something broke!');

});

// Start the server

app.listen(port, () => {

console.log(`Backend server is running on http://localhost:${port}`);

});
