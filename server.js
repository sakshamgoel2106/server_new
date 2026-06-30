const express = require('express');
const app = express();
const bookroutes = require('./bookRoutes');
require("dotenv").config();
const errorHandler = require("./errorHandler");


app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the Book API. Use /books to access the resources.');
});
app.use('/books',bookroutes);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});