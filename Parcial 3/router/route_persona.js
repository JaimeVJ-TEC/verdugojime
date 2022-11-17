const mysqlcon = require('./mysqlcon')
const express = require('express');
const { json } = require('express');
const app = express();
const router = express.Router();


router.get('', (req, res) => {
    var con = mysqlcon.getCon();
    mysqlcon.selectQ(con).then(function(results){
        res.send(results)
    })
});

router.get('/index',(req,res)=> {
    res.send('CRUD usando router')
});

router.get('/:id', (req, res) => {
    var con = mysqlcon.getCon();
    mysqlcon.selectWhereQ(con,req.params.id).then(function(results){
        res.send(results)
    })
});

router.post('/',(req,res)=> {
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

router.patch('/',(req,res)=> {
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

router.delete('/:id',(req,res)=> {
    let id = req.params.id;

    var con = mysqlcon.getCon();
    mysqlcon.deleteQ(con,id).then(function(results){
        res.send(results)
    })
});

module.exports.router = router;