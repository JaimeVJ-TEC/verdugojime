export function cadenaMayusculas(cadena) {
    return cadena.toUpperCase();
}

export function cadenaSinEspacios(cadena) {
    return cadena.replace(/\s+/g,'');
}

export function cadenaLongitud(cadena) {
    return cadena.length;
}