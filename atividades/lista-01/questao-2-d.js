
let res = document.querySelector("#res");

let n = Number(prompt("informe a quantidade de numeros: "));
contador = 1;
lista = [];
while (contador <= n) {
    let numeros = Number(prompt(`informe o : ${contador}° numero: `));

    lista.push(numeros);

    contador++;
}



for (let i = 0; i < lista.length; i++) {

    divisores = 0;

    for (let j = 1; j <= lista[i]; j++) {
        if (lista[i] % j === 0) {
            divisores++;
        }
    }

    let sit = divisores === 2 ? "é primo" : "não é primo";

    if (res) {
        res.innerHTML += `O número ${lista[i]} ${sit} <br>`;
    }
    
}