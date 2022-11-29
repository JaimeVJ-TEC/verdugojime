let chai = require('chai');
let should = chai.should();
let expect = chai.expect;
let assert = chai.assert;
let cadena = require('../src/funciones');

describe('Pruebas de la funcion cadena mayusculas',function(){
    it("Deberia devolver una cadena y deberia ser TEST",function(){
        let cadenam = cadena.cadenaMayusculas('test');
        expect(cadenam).to.be.a("string");
        expect(cadenam).to.equal("TEST");    
    })
});

describe('Pruebas de la funcion cadena mayusculas',function(){
    it("Deberia devolver una cadena y deberia ser TEST",function(){
        let cadenam = cadena.cadenaMayusculas('test');
        cadenam.should.be.a("string");
        cadenam.should.equal("TEST");    
    })
})


describe('Pruebas de la funcion cadena mayusculas',function(){
    it("Deberia devolver una cadena y deberia ser TEST",function(){
        let cadenam = cadena.cadenaMayusculas('test');
        assert.typeOf(cadenam,"string");
        assert.equal(cadenam,"TEST");
    })
})

