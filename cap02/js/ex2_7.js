const frm = document.querySelector("form");
const anuncio = document.querySelector("#anuncio");
const promocao = document.querySelector("#promocao")

frm.addEventListener("submit", (e) => {


const produto = frm.inProduto.value;
const preco = Number(frm.inPreco.value);
const desc = preco - (preco * 0.50);

anuncio.innerText =`${produto} - Promoção: leve 3 por R$:${(preco*3-desc).toFixed(2)}`;
promocao.innerText = `O 3° produto custa apenas R$: ${desc.toFixed(2)}`

e.preventDefault()
})