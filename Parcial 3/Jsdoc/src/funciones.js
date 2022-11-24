/**
 * Devuelve una cadena en mayusculas.
 * @function cadenaMayusculas
 * @param {string} cadena - Cadena a convertir a mayusculas.
 */
export function cadenaMayusculas(cadena) {
    return cadena.toUpperCase();
}

/**
 * Devuelve una cadena sin espacios.
 * @function cadenaSinEspacios
 * @param {string} cadena - Cadena a quitar los espacios.
 */
export function cadenaSinEspacios(cadena) {
    return cadena.replace(/\s+/g,'');
}

/**
 * Devuelve la longitud de la cadena.
 * @function cadenaLongitud
 * @param {string} cadena - Cadena de la cual obtener la longitud.
 */
export function cadenaLongitud(cadena) {
    return cadena.length;
}