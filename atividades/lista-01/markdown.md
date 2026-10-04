1) Sobre tipagem de dados em linguagens de programação e, especificamente em JavaScript, responda o que se pede:

a) O que caracteriza uma linguagem de tipagem estática? Como a verificação de tipos ocorre em linguagens com tipagem estática?

    Uma tipagem estática é aquela que o tipo da váriavel é definido em tempo de compilação, antes do programar rodar, a verificação ocorre durante o processo de compilaçao onde o compilador varre o programa e verifica incopatibilidade de tipos.

b) Quais são os principais benefícios da tipagem estática em termos de
performance e segurança?

    - maior segurança: os erros de tipo são detectados antes da execução, impedindo do program quebrar na "mao" do dev.
    - Melhor manutenção: o código fica mais fácil de entender e modificar.
    - Segurança: A maior vantagem é a detecção precoce de erros. A tipagem estática atua como uma barreira de segurança, capturando bugs lógicos e incompatibilidades de dados na fase de compilação.

c) Como funciona a tipagem dinâmica em relação à verificação de tipos em tempo de execução? Quais são os principais desafios de performance enfrentados por linguagens de tipagem dinâmica?

    - a tipagem dinamica é mais inteligente, os tipos são definitos em runtime, uma var pode ser um texto agora e depois ser um número. Em relação a performance o motor sempre vai precisar ficar perguntando o tipo da variável.

d) Quais são as diferenças entre linguagens com tipagem forte e fraca?

    a tipagem forte é rigorosa, se voce tentar somar um 1 + "1" ela dá um erro em nivel atômico, já a fraca se permite adivinhar que esta somando 1 + "1" ela converte e soma.

e) Como linguagens híbridas conseguem combinar características de tipagemestática e dinâmica? Qual o papel da inferência de tipos em linguagens de tipagem estática?

    Linguagens híbridas combinam recursos de tipagem estática e dinâmica. Um exemplo é o TypeScript, que adiciona tipagem estática ao JavaScript, mas continua permitindo recursos dinâmicos.
    A inferência de tipos é o mecanismo pelo qual o compilador identifica automaticamente o tipo de uma variável sem necessidade de declaração explícita.

f) Como a linguagem JavaScript lida com a tipagem de dados?

    o JS é de tipagem dinanmica e fraca, nao precissa declarar o tipo, ele a partir do tipo do valor decide qual sera o tipo da variavel.
    Ele faz conversões automáticas por exemplo: "1" + 1 dá "11" e 1 + "1" da 2
    