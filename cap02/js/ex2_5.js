//criar referencias do form

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outPromo");
const resp2 = document.querySelector("#outDesc");

// criar ouvinte

frm.addEventListener("submit", (e) => {
    const medic = frm.inMedic.value
    const preco = Number(frm.inPreco.value);
    const descon = Math.floor(preco*2);
    resp1.innerText = `Promoção de ${medic}`
    resp2.innerText = `Leve 2 por R$: ${descon.toFixed(2)}`

    e.preventDefault()
})