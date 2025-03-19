// Loads express, instantiates app, and defines a constant for port use

const express = require('express');
const server = express();
const port = 3000;

//Creates routine to respond to GET requests

server.get('/hello', function (req,res) {
    res.send('Hello World!');
});

//Spins up server and tells it to listen on specified port defined above

server.listen(port, function() {
    console.log('Listening on ' + port);
});