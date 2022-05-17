const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://dbUser:tYCLh8SzkBIDZGSs@cluster0.l32lx.mongodb.net/booksDB', {});

app.use('/', require('./routes/bookRoute'));

app.listen(3001, function () {
    console.log('server running on port 3001');
})