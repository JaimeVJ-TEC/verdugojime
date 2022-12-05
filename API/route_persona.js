const mysqlcon = require('./mysqlcon')
const express = require('express');
const { json } = require('express');
const app = express();
const router = express.Router();

/**
 * @swagger
 * /personas:
 *  get:
 *      description: Devuelve personas
 *      responses:
 *          200:
 *              description: Listado de personas
 */
router.get('', (req, res) => {
    var con = mysqlcon.getCon();
    mysqlcon.selectQ(con).then(function(results){
        res.send(results)
    })
});

/**
 * @swagger
 * /personas/index:
 *  get:
 *      description: Index
 *      responses:
 *          200:
 *              description: Informacion
 */
router.get('/index',(req,res)=> {
    res.send('CRUD usando router')
});


/**
 * @swagger
 * /personas/{id}:
 *   get:
 *     summary: Obtener una persona por ID
 *     description: Usa este metodo para obtener una persona en especifico por su ID
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID de la persona a obtener
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: El objeto persona
 *         schema:
 *           $ref: '#/components/schemas/Persona'
 *       404:
 *         description: La persona no fue encontrada
 */
router.get('/:id', (req, res) => {
    var con = mysqlcon.getCon();
    mysqlcon.selectWhereQ(con,req.params.id).then(function(results){
        if (results.length === 0) {
            // Send a 404 response if the array is empty
            res.sendStatus(404);
          } else {
            // Otherwise, send the results as the response
            res.json(results);
          }
    })
});

  /**
   * @swagger
   * /personas:
   *   post:
   *     tags:
   *       - Persona
   *     summary: Agrega una nueva persona
   *     requestBody:
   *       required:
   *         - nombre
   *         - apellido
   *         - edad
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Persona'
   *     responses:
   *       200:
   *         description: El objeto de la persona que se acaba de agregar
   */
router.post('/',(req,res)=> {
    let persona = {
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    edad : req.body.edad
    };

    var con = mysqlcon.getCon();
    mysqlcon.createQ(con,persona).then(function(results){
        res.json(results)
    })
});

  /**
   * @swagger
   * /personas/{id}:
   *   patch:
   *     tags:
   *       - Persona
   *     summary: Actualiza una persona
   *     description: Actualiza la informacion una personacon los atributos especificados
   *     parameters:
   *       - in: path
   *         name: id
   *         description: ID de la persona a modificar
   *         required: true
   *         schema:
   *           type: integer
   *           format: int
   *     requestBody:
   *       required:
   *         - nombre
   *         - apellido
   *         - edad
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Persona'
   *     responses:
   *       200:
   *         description: Success
   */
router.patch('/:id',(req,res)=> {
    let persona = {
    nombre : req.body.nombre,
    apellido : req.body.apellido,
    edad : req.body.edad
    };

    let id = req.params.id
    var con = mysqlcon.getCon();
    mysqlcon.modifyQ(con,persona,id).then(function(results){
        res.send(results)
    })
});

/**
 * @swagger
 * /personas/{id}:
 *   delete:
 *     tags:
 *       - Persona
 *     summary: Elimina a una persona existente
 *     description: Elimina a una persona con el ID especificado
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la persona a eliminar
 *         required:
   *         - nombre
   *         - apellido
   *         - edad
 *         schema:
 *           type: integer
 *           format: int32
 *     responses:
 *       200:
 *         description: Success
 */
router.delete('/:id',(req,res)=> {
    let id = req.params.id;

    var con = mysqlcon.getCon();
    mysqlcon.deleteQ(con,id).then(function(results,fields){
        if (results.affectedRows === 0) {
            // Send a 404 response if no rows were affected
            res.sendStatus(404);
          } else {
            res.send(results)
          }
    })
});

module.exports.router = router;