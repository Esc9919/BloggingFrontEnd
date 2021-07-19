const express = require('express');
const app = express();

import { default as http } from 'http-home.js';

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + 'test.html'));

app.get('/', (req, res) => {
    http.get()
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/public/post.html');
})


app.get('/cadastroEmail', (req, res) => {
    res.sendFile(__dirname + '/public/cadastroEmail.html');
})

app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/public/cadastro.html');
})

app.listen(3000, () => {
    console.log()
    console.log('listening on port 3000')
})
