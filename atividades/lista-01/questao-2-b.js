PI = 3.14
raio = Number(prompt("qual o raio da circunferencia? "));

let res = document.querySelector("#res");

res.textContent = `Perimetro: ${2 * PI * raio}`;