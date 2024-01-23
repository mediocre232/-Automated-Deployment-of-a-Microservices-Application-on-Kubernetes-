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



:

Index.html 

<!DOCTYPE html>

<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>My Frontend App</title>

<style>

     body {

         font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

         margin: 0;

         padding: 0;

         display: flex;

         justify-content: center;

         align-items: center;

         height: 100vh;

         background-color: #e0e0e0; /* Cool grey background */

     }

     .container {

         text-align: center;

         padding: 40px;

         border-radius: 8px;

         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

         background-color: #ffffff; /* White background for the content */

     }

     h1 {

         color: #d32f2f; /* Cool red color */

         margin-bottom: 20px;

     }

     p {

         color: #388e3c; /* Cool green color */

         font-size: 1.1em;

     }

     .button {

         padding: 10px 20px;

         border: none;

         border-radius: 5px;

         background-color: #1976d2; /* Cool blue color */

         color: white;

         font-size: 1em;

         cursor: pointer;

         transition: background-color 0.3s ease;

     }

     .button:hover {

         background-color: #1565c0; /* A darker shade of blue on hover */

     }

</style>

</head>

<body>

<div class="container">

     <h1>Welcome to My Frontend App</h1>

     <p>This is a simple Node.js and Express app serving static content.</p>

     <button class="button">Click Me!</button>

</div>

</body>

</html>
