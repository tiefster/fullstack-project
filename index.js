// Loads express, instantiates app, and defines a constant for port use

import { routeHello, routeAPINames } from "./routes.js";
import express from "express";

const server = express();
const port = 3000;

//Creates routine to respond to GET requests

server.get('/hello', function (req,res) {
    const response = routeHello(req, res);
    res.send('Hello World!');
});

server.get("/api/names", async function (req, res) {
    let response;
    try {
        response = await routeAPINames(req, res);
    } catch (err) {
        console.log(err);
    }
    res.send(response);
});

//Spins up server and tells it to listen on specified port defined above

server.listen(port, function() {
    console.log('Listening on ' + port);
});