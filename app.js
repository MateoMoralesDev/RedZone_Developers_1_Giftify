const express = require('express');
const path = require('path')
const app = express(); 

app.use(express.static('public'));

app.listen(3030, () =>
    console.log('Servidor corriendo.')
);

app.get('/', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlPath);
});

app.get('/productDetail', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/productDetail.html');
    res.sendFile(htmlPath);
});

app.get('/productCart', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/productCart.html');
    res.sendFile(htmlPath);
});

app.get('/register', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlPath);
});

app.get('/login', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlPath);
});

app.get('*', (req, res) => {
    let htmlPath = path.resolve(__dirname, './views/404.html');
    res.sendFile(htmlPath);
});