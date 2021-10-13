// Código del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado) {
    return ladoCuadrado * 4;
} 

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El Área del cuadrado es: "+ area + "cm^2")
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es: "+ perimetro + "cm")
}

console.groupEnd();

// Código del Triángulo
console.group("Triangulos");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
}

function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2
}   

function validarTriangulo(value1,value2){
    if(value1 === value2){
        return true;
    }else {
        return false;
    }

}

function calcularAltura(value1,baseValue){
    const base = baseValue/2
    return (Math.sqrt(Math.abs((value1*value1)-(base*base))))
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const base = document.getElementById("InputTrianguloBase");
    const baseValue = base.value;
    if(validarTriangulo(value1,value2)){
        const altura = calcularAltura(value1,baseValue)
        const area = areaTriangulo(baseValue, altura);
        alert("El Triangulo es isoceles, su Altura es "+ altura + "cm y su Área es: "+ area + "cm^2")
    }else{
        alert("El Triangulo no es isoceles")
    }
   
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTrianguloBase");
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perímetro del Triángulo es: "+ perimetro + "cm")
}

console.groupEnd();

// Código del Círculo 
console.group("Círculos");

// Diámetro 
function diametroCirculo(radioCirculo) {
    return radioCirculo * 2;
}

//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;
}

//Área
function areaCirculo(radioCirculo) {
    return (radioCirculo * radioCirculo) * PI;
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert("El Área del Círculo es: "+ area + "cm^2")
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert("El perímetro del Círculo es: "+ perimetro + "cm")
}

console.groupEnd();

