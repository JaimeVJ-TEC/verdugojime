function cadenaMayusculas(cadena) {
    return cadena.toUpperCase();
}

function cadenaSinEspacios(cadena) {
    return cadena.replace(/\s+/g,'');
}

function cadenaLongitud(cadena) {
    return cadena.length;
}

function cadenaCantidadCaracter(cadena,caracter) {
    return cadena.split(caracter).length -1;
}

exports.cadenaMayusculas = cadenaMayusculas;
exports.cadenaSinEspacios = cadenaSinEspacios;
exports.cadenaLongitud = cadenaLongitud;
exports.cadenaCantidadCaracter = cadenaCantidadCaracter;