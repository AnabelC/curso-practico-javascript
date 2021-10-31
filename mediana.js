const lista1 = [
    500,800,100,200,400000000,
];

const listaOrdenada = lista1.sort(function(a, b) {
    return a - b;
    });

let mitadListaOrdenada = parseInt(listaOrdenada.length/2);

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }  
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento) {
                return valorAcumulado + nuevoElemento;
            }
        );
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

let mediana;

if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadListaOrdenada - 1];
    const elemento2 =  listaOrdenada[mitadListaOrdenada];
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = listaOrdenada[mitadListaOrdenada];
}