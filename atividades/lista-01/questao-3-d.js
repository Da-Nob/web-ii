let res = document.querySelector("#res");

let n = Number(prompt("informe a quantidade de numeros: "));
contador = 1;
lista = [];
while (contador <= n) {
    let numeros = Number(prompt(`informe o : ${contador}° numero: `));

    lista.push(numeros);

    contador++;
}


function numerosImpar(arr) {
    let impares = [];
    for ( let num of arr) {
        if (num % 2 === 0) {
            impares.push(num);
        }
    } 

    return impares;
}

let resposta = numerosImpar(lista);
res.textContent = `Números ímpares: ${resposta.join(", ")}`;