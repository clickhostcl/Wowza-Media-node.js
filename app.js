var http = require('http');
var express = require('express');
var SSH = require('simple-ssh');
var app = express();

app.get('/WowzaCreate/:port', function (req, res) {
    res.send('Creando RTMP para el puerto ' + req.params.port);
    console.log('Creando el Puerto' + req.params.port);
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
