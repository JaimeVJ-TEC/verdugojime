const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

app.use(express.text());
app.use(express.json());

app.listen(8082, () => {
    console.log('Servidor express escuchando en puerto 8082');
});

app.get('/', (req, res) => {
    
    var con = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        database : 'test',
    });

    con.connect();
    con.query('SELECT * FROM persona', function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
    con.end();
    //res.sendFile(results,(err)=>{console.log("Archivo Enviado")})
});

app.get('/:id', (req, res) => {
    
    var con = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        database : 'test',
    });

    con.connect();
    con.query('SELECT * FROM persona where ID='+req.params.id, function(error, results, fields) {
        if(error) throw error;
        console.log(results);
        res.send(results);
    });
    con.end();
});

app.post('/', (req,res) => {
    res.send('Servidor Express Recibio POST');
});

app.use('/', (req,res) => {
    res.status(404).sendFile('./static/404.html',{root:__dirname})
 });