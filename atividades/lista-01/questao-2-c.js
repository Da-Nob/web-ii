let res = document.querySelector("#res");

let n1 = Number(prompt("Nota da n1: "));
let n2 = Number(prompt("Nota da n2: "));

let nota = (n1 * 2 + n2 * 3) / 5 
let sit = nota >= 7 ? "Aprovado" : "Reprovado"; 
res.innerHTML = `nota: ${nota} <br> situação: ${sit}`
