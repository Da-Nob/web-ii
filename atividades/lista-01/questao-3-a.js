let n1 = Number(prompt("Num1: "));
let n2 = Number(prompt("Num2: "));
let caractere = prompt("qual operacao? ");


let res = document.querySelector("#res");


function calcular(num1, num2, op) {
    let resposta;

    if (op ===  '+' || op === '-' || op === '*' || op === '/') {
        if (op === "+") resposta = num1 + num2;
        if (op === "-") resposta = num1 - num2;
        if (op === "*") resposta = num1 * num2;
        if (op === "/") resposta = num1 / num2;

        return resposta;
    }
}

let a = calcular(n1, n2, caractere);

res.textContent = `${n1} ${caractere} ${n2} = ${a}`