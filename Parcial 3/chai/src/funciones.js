/**
 * Devuelve una cadena en mayusculas.
 * @function cadenaMayusculas
 * @param {string} cadena - Cadena a convertir a mayusculas.
 */
function cadenaMayusculas(cadena) {
    return cadena.toUpperCase();
}

/**
 * Devuelve una cadena sin espacios.
 * @function cadenaSinEspacios
 * @param {string} cadena - Cadena a quitar los espacios.
 */
function cadenaSinEspacios(cadena) {
    return cadena.replace(/\s+/g,'');
}

/**
 * Devuelve la longitud de la cadena.
 * @function cadenaLongitud
 * @param {string} cadena - Cadena de la cual obtener la longitud.
 */
function cadenaLongitud(cadena) {
    return cadena.length;
}

exports.cadenaMayusculas = cadenaMayusculas;
exports.cadenaSinEspacios = cadenaSinEspacios;
exports.cadenaLongitud = cadenaLongitud;