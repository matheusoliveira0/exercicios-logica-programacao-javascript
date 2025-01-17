//criar relação

const frm = document.querySelector("form");
const resp = document.querySelector("h3");

//ouvinte

frm.addEventListener('submit', (e)=>{
const valor = Number(frm.inValor.value);
const uso = Number(frm.inTempo.value)

const totalUso = Math.ceil(uso/15)
const aPagar = valor * totalUso
resp.innerText = `Valor a Pagar R$: ${aPagar.toFixed(2)}`
e.preventDefault()
})