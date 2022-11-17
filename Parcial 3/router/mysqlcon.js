const mysql = require('mysql');

function getCon(){
    var con = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        database : 'test',
    })
    return con;
}

function selectQ(con){
    con.connect();
    return new Promise(function(resolve,reject){
        con.query('SELECT * FROM persona', function(error, results) {
            if(results == undefined){
                reject(new Error("Undefined result"))
            } else {
                resolve(results)
            }
        })
    });
}

function selectWhereQ(con, id){
    con.connect();
    return new Promise(function(resolve,reject){
        con.query(`SELECT * FROM persona where ID = ${id}`, function(error, results) {
            if(results == undefined){
                reject(new Error("Undefined result"))
            } else {
                resolve(results)
            }
        })
    });
}

function createQ(con, persona){
    con.connect();
    return new Promise(function(resolve,reject){
        query = `INSERT INTO persona(Nombre, Apellido, Edad) VALUES (?,?,?)`
        con.query(query,[persona.nombre,persona.apellido,persona.edad], function(error, rows) {
            if(error){
                reject(new Error("Not inserted"))
            } else {
                resolve("Se agrego campo con ID: "+rows.insertId)
            }
        })
    });
}

function modifyQ(con, persona,id){
    con.connect();
    return new Promise(function(resolve,reject){
        query = `UPDATE persona SET Nombre=?,Apellido=?,Edad=? WHERE ID = ?`
        con.query(query,[persona.nombre,persona.apellido,persona.edad,id], function(error, results) {
            if(error){
                reject(new Error("Not modified"))
            } else {
                resolve("Se modifico: "+ results.affectedRows)
            }
        })
    });
}

function deleteQ(con, id){
    con.connect();
    return new Promise(function(resolve,reject){
    con.query(`DELETE FROM persona WHERE ID=?`,[id], function(error, results, fields) {
        if(error){
            reject(new Error("Not deleted"))
        } else {
            resolve("Se elimino: "+ results.affectedRows)
        }
    })
});
}

exports.getCon = getCon;
exports.selectQ = selectQ;
exports.selectWhereQ = selectWhereQ;
exports.createQ = createQ;
exports.deleteQ = deleteQ;
exports.modifyQ = modifyQ;