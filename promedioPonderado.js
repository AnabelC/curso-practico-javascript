const notas = [
    {
        materia: "Quimica",
        nota: 10,
        creditos: 2,
    },
    {
        materia: "Programación",
        nota: 8,
        creditos: 5,
    },
    {
        materia: "Calculo",
        nota: 7,
        creditos: 5,
    },
];

const notasConCreditos = notas.map(function (notasObject) {
    return notasObject.nota * notasObject.creditos;
});

const sumaDeNotasConCreditos = notasConCreditos.reduce(
    function (suma = 0, nuevoValor) {
        return suma + nuevoValor;
    }
);

const creditos = notas.map(function (notasObject) {
    return notasObject.creditos;
});

const sumaDeCreditos = creditos.reduce(
    function (suma = 0, nuevoValor) {
        return suma + nuevoValor;
    }
);

const promedioPonderadoNotasConCreditos = sumaDeNotasConCreditos / sumaDeCreditos;