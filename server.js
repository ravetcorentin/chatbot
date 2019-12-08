var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/hello', function (req, res) {
    if (req.query.nom) {
        res.send('Bonjour, ' + req.query.nom + ' !');
    } else {
        res.send('Quel est ton nom ?');
    }
});

app.listen(3000);