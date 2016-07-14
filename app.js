var http = require('http');
var express = require('express');
var app = express();

app.get('/WowzaCreate', function (req, res) {
    res.send('Wowza Creando');
});

app.get('/WowzaDelete', function (req, res) {
    res.send('Relay Eliminado');
});

app.get('/WowzaUpdate', function (req, res) {
    res.send('Wowza Actualizaod');
});

app.get('/WowzaStatus', function (req, res) {
    res.send('Wowza Status: ');
});

app.listen(8080, function () {
    console.log('Wowza Media API: Iniciado');
    console.log('Puerto: 8080');
});
