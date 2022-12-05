const chai = require('chai');
const chaiHttp = require('chai-http');
const router = require('../route_persona');
const expect = require('chai').expect;
chai.use(chaiHttp);

const address = 'http://localhost:8082';

describe('GET /personas/', () => {
    it('Deberia regresar una lista de todas las personas', (done) => {
      chai.request(address)
        .get('/personas/')
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.be.an('array');
          chai.expect(res.body[0]).to.have.property('ID');
          chai.expect(res.body[0]).to.have.property('Nombre');
          chai.expect(res.body[0]).to.have.property('Apellido');
          chai.expect(res.body[0]).to.have.property('Edad');
          done();
        });
    });
});
  
describe('POST /personas', () => {
    let id;
    it('should add a new Persona to the database and return the object with ID', (done) => {
      chai
        .request(address)
        .post('/personas')
        .send({
          nombre: 'John',
          apellido: 'Doe',
          edad: 30
        })
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.have.property('ID');
          expect(res.body).to.deep.include({
            Nombre: 'John',
            Apellido: 'Doe',
            Edad: 30,
          });
          id = res.body.ID;
          done();
    });
});

describe('GET /personas/:id', () => {
    it('should get a specific persona', (done) => {
      chai.request(address)
        .get(`/personas/${id}`)
        .end((err, res) => {
          chai.expect(res).to.have.status(200);
          chai.expect(res.body).to.be.an('array');
          chai.expect(res.body[0]).to.have.property('ID');
          chai.expect(res.body[0]).to.have.property('Nombre');
          chai.expect(res.body[0]).to.have.property('Apellido');
          chai.expect(res.body[0]).to.have.property('Edad');
          done();
        });
    });
});
  
describe('PATCH /personas/:id', () => {
    it('should update a Persona in the database and return the updated object with ID', (done) => {
    chai
        .request(address)
        .patch(`/personas/${id}`)
        .send({
        nombre: 'Jane',
        })
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        done();
        });
    });
});
  
describe('DELETE /personas/:id', () => {
    it('should delete a Persona from the database and return the deleted object with ID', (done) => {
    chai
        .request(address)
        .delete(`/personas/${id}`)
        .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('id');
        done();
        });
    });
});
});