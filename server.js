const express = require('express');
const app = express();

const http = require('./http/http-home.js');

app.use(express.static(__dirname + '/public'));

var bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/* HOME */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

/* DEVOLVE A PÁGINA DETALHADA DO POST */
app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/public/post.html');
})

/* DEVOLVE A PÁGINA DE LOGIN */
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
})


/* DEVOLVE A PÁGINA DE CADASTRO DE EMAIL */ 
app.get('/cadastroEmail', (req, res) => {
    res.sendFile(__dirname + '/public/cadastroEmail.html');
})

/* DEVOLVE A PÁGINA DE CADASTRO */ 
app.get('/cadastro', (req, res) => {
    res.sendFile(__dirname + '/public/cadastro.html');
})

/* API */
/* DEVOLVE TODOS OS USUÁRIOS */ 
app.get('/data/user', (req, res) => {
    
    let user;
    http.get().then ( u => {
        user = u;
        
        res.send(user);
    })
})

/* VERIFICA JUNTO AO BACKEND SE O EMAIL FORNECIDO É VÁLIDO PARA CADASTRO */ 
app.get('/cadastroEmail/isemailvalid', (req, res) => {

    let email = req.url.split('=')[1];
    http.isEmailValid(email).then( isValid => {

        if(isValid) {
             
            // CRIAR SESSÃO
    
    
            res.send(true);
    
        } else {
            res.send(false);
        }
    });
})
/* atentica usuario */
app.post('/login', (req, res) => {
    console.log(req.body)
    http.autenticacao(JSON.parse(JSON.stringify({username: req.body.username, password: req.body.password}))).then(retorno => {
        console.log(retorno)
        res.send(retorno)
    })
});

/* LIGANDO O SERVIDOR... */
app.listen(3000, () => {
    console.log('listening on port 3000')
})
