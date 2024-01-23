const express = require('express');

const path = require('path');

const app = express();

const port = 3000;

// Serve static files from the 'public' directory (if needed)

app.use(express.static('public'));

// Serve the HTML file on the root path

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'index.html'));

});

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);

});
