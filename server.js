const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + 'test.html'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})
app.get('/post', (req, res) => {
    res.sendFile(__dirname + '/post01.html');
})
app.listen(3000, () => {
    console.log()
    console.log('listening on port 3000')
})
