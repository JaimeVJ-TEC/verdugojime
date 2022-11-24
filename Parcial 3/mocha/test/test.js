let chai        = require('chai');
let chaiHttp    = require('chai-http');
const expect    = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:8082';

// Encapsular en test dentro de la funcion describe() Y describirmos el test
describe('Inserta una persona: ',()=>{ 

    it('deberia insertar una persona', (done) => {       // En la funcion it() lo que deberia hacer
        chai.request(url)
        .post('/personas')
        .send({
            "nombre":"Jose",
            "apellido":" Pepe",
            "edad":30
          })
        .end( function(err,res){
            expect(res).to.have.status(200); 
            expect(res.text).to.be.a('string');                               
            done();
        });
    });
    
});

describe('Obtiene personas: ',()=>{  
    it('Deberia obtener todas las personas', (done) => {
        chai.request(url)
        .get('/personas')                      
        .send()                      
        .end( function(err,res){
            expect(res).to.have.status(200);                               
            expect(res).to.be.json;                               
            done();
        });
    });
});