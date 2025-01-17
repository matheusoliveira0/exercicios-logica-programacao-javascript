//Criar referencias do formulario

const frm = document.querySelector("form");
const resp = document.querySelector("h3");


// criar um ouvinte
frm.addEventListener("submit", (e) => {
const quilo = Number(frm.inQuilo.value);//obtem os valores do form
const consumo = Number(frm.inConsumo.value);


const valor = (quilo/1000)*consumo
resp.innerText = `Valor a pagar R$: ${valor}`

e.preventDefault()
})


