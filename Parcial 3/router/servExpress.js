const express = require('express');
const cors = require('cors');
const route_persona = require('./route_persona')
const app = express();

app.use(express.text());
app.use(express.json());
app.use(cors({origin:"http://localhost"}))
app.use('/personas',route_persona.router)

app.listen(8082, () => {
    console.log('Servidor express escuchando en puerto 8082');
});

app.use('/', (req,res) => {
    res.status(404).sendFile('./static/404.html',{root:__dirname})
 });
