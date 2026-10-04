let res = document.querySelector("#res");

let valor_unitario = Number(prompt('valor unitario: '));
let quantidade = Number(prompt('quantidade: '));
let taxa = Number(prompt('taxa de desconto'));

let subtotal = 0;
function carrinho(unit, qtd, desc) {

    desc = desc <= 0 ? 0 : desc/100

    subtotal = unit * qtd

    total = subtotal - (subtotal  * desc);

    return total
}

resposta = carrinho(valor_unitario, quantidade, taxa);
res.textContent = `${resposta}`;