const express = require('express');
const cors = require('cors');
const mysqlcon = require('./mysqlcon')
const app = express();

app.use(express.text());
app.use(express.json());
app.use(cors({origin:"http://localhost"}))

app.listen(8082, () => {
    console.log('Servidor express escuchando en puerto 8082');
});

app.get('/personas', (req, res) => {
    var con = mysqlcon.getCon();
    mysqlcon.selectQ(con).then(function(results){
        res.send(results)
    })
});

app.get('/personas/:id', (req, res) => {
    var con = mysqlcon.getCon();
    mysqlcon.selectWhereQ(con,req.params.id).then(function(results){
        res.send(results)
    })
});

app.post('/personas',(req,res)=> {
    let persona = {
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    edad : req.body.edad
    };

    var con = mysqlcon.getCon();
    mysqlcon.createQ(con,persona).then(function(results){
        res.send(results)
    })
});

app.patch('/personas',(req,res)=> {
    let persona = {
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    edad : req.body.edad
    };

    let id = req.body.id;

    var con = mysqlcon.getCon();
    mysqlcon.modifyQ(con,persona,id).then(function(results){
        res.send(results)
    })
});

app.delete('/personas/:id',(req,res)=> {
    let id = req.params.id;

    var con = mysqlcon.getCon();
    mysqlcon.deleteQ(con,id).then(function(results){
        res.send(results)
    })
});

app.use('/', (req,res) => {
    res.status(404).sendFile('./static/404.html',{root:__dirname})
 });