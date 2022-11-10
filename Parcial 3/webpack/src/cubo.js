export function exponente(x,y){
    for (let index = 1; index < y; index++) {
        x = x*x;
    }
    return x;
}