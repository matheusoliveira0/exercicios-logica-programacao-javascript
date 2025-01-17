// cria referencia ao form e aos elementos

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

// cria um ouvinte, add qndo o submit for clicado
frm.addEventListener('submit', (e) => {
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value) // obtém os conteudos dos campos

    const entrada = preco * 0.50 // calcula o valor da entrada
    const parcela = (preco * 0.50)/12 //... e das parcelas

    resp1.innerText = `Promoção: ${veiculo}`; //exibe as respostas
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`;
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`
    e.preventDefault()
})