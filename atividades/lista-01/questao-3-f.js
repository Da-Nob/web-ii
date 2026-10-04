let res = document.querySelector("#res");

const contaBancaria = {
    numero: '12345-6',
    saldo:  0,

    depositar(valor) {
        if (valor <= 0) {
            return "impossivel deositar valor invalido";
        } 

        this.saldo += valor;
        return `deposito de ${valor} feito`;
    },

    sacar(valor) {
        if (valor > this.saldo || this.saldo == 0) {
            return "saldo menor que o valor que deseja sacar";
        }

        this.saldo -= valor;
        return `saque de ${valor} bem sucedido`;
        this.inforSaldo();
    },

    inforSaldo() {
        return `Sua conta é: <strong>${this.numero}</strong> <br> seu saldo atual é: ${this.saldo}`
    },
}

res.innerHTML = contaBancaria.inforSaldo() + "<br>";
res.innerHTML += contaBancaria.depositar(100) + "<br>";
res.innerHTML += contaBancaria.inforSaldo() + "<br>";
res.innerHTML += contaBancaria.sacar(50) + "<br>";
res.innerHTML += contaBancaria.inforSaldo()