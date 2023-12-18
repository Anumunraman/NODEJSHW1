"use strict";

const http = require('http');

const server = http.createServer((req, res) => {
    switch(req.url) {
        case "/":
            let count = 0;
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.end(`
            <h1>Главная страница</h1>
            <a href ="/about">About page</a>
            <p>${count++}</p>
            '`);
            break;

        case "/about":
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.end(`
            <h1>Страница about</h1>
            <a href="/">Main page</a>
            <p>${count++}</p>
            `);
            break;
        
        default:
            res.writeHead(200, {"Content-Type": "text/html; charset=UTF-8"});
            res.end(`
            <h1>Страница не найдена</h1>
            <a href="/">Back to main page</a>
            `);
            break;
    }
})