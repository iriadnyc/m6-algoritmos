// Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - Puedes usar un operador de módulo para este ejercicio. 

function pares(max) {
    var sumatoria = 0;
    // contador 
    for(var i=1; i<=max; i++) {
        // condionar a que el modulo sea 0
        if(i%2 == 0) {
            sumatoria = sumatoria +i;
        }
    }
    return sumatoria;
}

console.log(pares(1000));