let res = document.querySelector("#res");

let n = Number(prompt("informe a quantidade de numeros: "));
contador = 1;
lista = [];
while (contador <= n) {
    let numeros = Number(prompt(`informe o : ${contador}° numero: `));

    lista.push(numeros);

    contador++;
}


function produto(...numeros) {
    let p = 1;
    if (numeros.length == 0) return 0;

    for (let num of numeros){
        p *= num;
    }

    return p;
}

let total = produto(...lista);
res.textContent = `${total}`;