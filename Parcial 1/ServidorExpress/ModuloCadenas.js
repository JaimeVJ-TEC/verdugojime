function cadenaMayusculas(cadena) {
    return cadena.toUpperCase();
}

function cadenaSinEspacios(cadena) {
    return cadena.replace(/\s+/g,'');
}

function cadenaLongitud(cadena) {
    return cadena.length;
}

exports.cadenaMayusculas = cadenaMayusculas;
exports.cadenaSinEspacios = cadenaSinEspacios;
exports.cadenaLongitud = cadenaLongitud;