let res = document.querySelector("#res");

let n = Number(prompt("infore o  numero: "));

function fatorial(numero) {
    if (numero <= 1) return 1;

    return numero * fatorial(numero - 1);
}


let responsta = fatorial(n);
res.textContent = responsta;
