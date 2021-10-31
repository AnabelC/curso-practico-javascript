const lista1 = [
    1,2,3,1,2,3,4,2,2,2,1
]

//Contar cuantas veces aparece cada numero en nuestra lista
const lista1Count = {};
lista1.map(
    function(elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1;
        }
});

//Debemos convertir el objeto en un array, le podemos enviar como argumento el objeto que queremos convertir en array
// Usamos el metodo sort para ordenar el Array
const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB) {
        return elementoA[1] - elementoB[1]
});

const moda = lista1Array[lista1Array.length - 1];