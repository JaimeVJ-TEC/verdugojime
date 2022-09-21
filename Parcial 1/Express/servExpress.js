const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({origin: 'http://localhost:8081'}))

app.get('/', (req, res) => {
    res.send(JSON.stringify("Servidor Express Contestando"));
});

app.post('/', (req,res) => {
    res.send('Servidor Express Recibio POST');
});

app.listen(8082, () => {
    console.log('Servidor express escuchando en puerto 8082');
});

app.get('/', (res, req) => {
    res.sendFile('./static/index.html',{root:__dirname},(err)=>{console.log("Archivo Enviado")})
})