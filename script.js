function verificarParOuImpar() {
    var numero = document.getElementById("numero").value;

    if (numero % 2 === 0) {
        document.getElementById("resultado").innerText = "O número " + numero + " é par.";
    } else {
        document.getElementById("resultado").innerText = "O número " + numero + " é ímpar.";
    }
}
function ordenarDecrescente(a, b) {
    return b - a;
}
function ordenarDecrescente(a, b) {
    return b - a;
}

function lerEOrdenar() {
    var numeros = [];

    for (var i = 0; i < 5; i++) {
        var numero = parseInt(prompt("Digite o " + (i + 1) + "º número:"));
        numeros.push(numero);
    }

    numeros.sort(ordenarDecrescente);

    var resultado = "Números em ordem decrescente:<br>";

    for (var i = 0; i < numeros.length; i++) {
        resultado += numeros[i] + "<br>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}













function calcularIMC() {
    var altura = parseFloat(prompt("Digite sua altura em metros (por exemplo, 1.75):"));
    var peso = parseFloat(prompt("Digite seu peso em quilogramas:"));

    var imc = peso / (altura * altura);
    imc = imc.toFixed(2); // Arredonda para 2 casas decimais

    var mensagem = "";

    if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        mensagem = "Sobrepeso";
    } else {
        mensagem = "Obesidade";
    }

    alert("Seu IMC é: " + imc + "\nClassificação: " + mensagem);
}

function classificarTriangulo() {
    var lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
    var lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
    var lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

    if (lado1 === lado2 && lado2 === lado3) {
        alert("É um triângulo equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("É um triângulo isósceles.");
    } else {
        alert("É um triângulo escaleno.");
    }
}



    



    

