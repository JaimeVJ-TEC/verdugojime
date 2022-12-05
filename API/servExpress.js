const express = require('express');
const cors = require('cors');
const route_persona = require('./route_persona')
const app = express();
const swaggerUI = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')
const path = require('path')

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Personas',
            desciption: 'API CRUD de informacion basica de personas',
            version: '1.0.0',
            },
        servers:[
            {url: "http://localhost:8082"}
        ], 
        components: {
            schemas: {
                Persona: {
                type: "object",
                properties: {
                    nombre: {
                    type: "string"
                    },
                    apellido: {
                    type: "string"
                    },
                    edad: {
                    type: "integer"
                    }
                },
                required: ["nombre", "apellido", "edad"]
                }
            }
        },
    },
    apis: [`${path.join(__dirname,"./route_persona.js")}`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

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
