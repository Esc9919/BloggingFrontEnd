const express = require('express');
const app = express();

const http = require('./http/http-home.js');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + 'test.html'));

/* HOME */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/data/user', (req, res) => {
    let user;
    http.get().then ( u => {
        user = u;
        
        console.log(user);
        res.send(user);
    })
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
    console.log('listening on port 3000')
})
