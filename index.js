const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, this is your Express API!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
