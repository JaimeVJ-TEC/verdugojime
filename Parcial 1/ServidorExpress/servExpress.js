const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const cadenas = require('./ModuloCadenas')
const accessLogStream = fs.createWriteStream(path.join(__dirname,'/logs/logging.log'), {flags:'a'});

//app.use(cors({origin: 'http://localhost:8081'}));

app.use(express.text());
app.use(express.json());

app.use(morgan('common', {stream:accessLogStream}));

app.post('/json', (req,res) => {
    console.log(req.body.nombre);
    let cadena = "Hola: "+req.body.nombre+" "+ req.body.apellido+ " como estas";
    res.json({saludo:cadena});
});

app.get('/suma', (req,res) => {
    console.log(req.query);
    let suma = parseInt(req.query.x) + parseInt(req.query.y);
    res.send(`La suma es ${suma}`);
});

app.get('/mayusculas/:cadena', (req,res) => {
    console.log(req.params);
    cad = req.params.cadena.toUpperCase()
    res.send(cad);
});

app.post('/texto', (req,res) => {
    console.log(req.body);
    let may = cadenas.cadenaMayusculas(req.body);
    let sinesp = cadenas.cadenaSinEspacios(req.body);
    let longi = cadenas.cadenaLongitud(req.body);
    res.json({ mayusculas: may,
                sinespacios: sinesp,
                longitud: longi});
})

app.listen(8082, () => {
    console.log('Servidor express escuchando en puerto 8082');
});

app.get('/', (req, res) => {
    //res.send(JSON.stringify("Servidor Express Contestando"));
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log("Archivo Enviado")})
});

app.post('/', (req,res) => {
    res.send('Servidor Express Recibio POST');
});

app.use('/', (req,res) => {
    res.status(404).sendFile('./static/404.html',{root:__dirname})
 });