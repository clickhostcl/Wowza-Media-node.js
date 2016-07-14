var http = require('http');
var express = require('express');
var app = express();


//Creando el Puerto
app.get('/WowzaCreate/:port', function (req, res) {

    res.send('creando RTMP para el puerto ' + req.params.port);

    console.log('==================== ');
    console.log('Creando el Puerto ' + req.params.port);
    console.log('==================== ');

});

//Eliminado el Puerto
app.get('/WowzaDelete', function (req, res) {
    res.send('Relay Eliminado');
});

//Actualizando el Puerto
app.get('/WowzaUpdate', function (req, res) {
    res.send('Wowza Actualizaod');
});

//Estado del Puerto
app.get('/WowzaStatus', function (req, res) {
    res.send('Wowza Status: ');
});

app.listen(8080, function () {
    console.log('==================== ');
    console.log('Wowza Media API: Iniciado');
    console.log('==================== ');
    console.log('Puerto: 8080');
});
