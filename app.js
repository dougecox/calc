const express = require('express')
const app = express();

var calc = require('./calcFunc');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html');
})

app.listen('8585');
