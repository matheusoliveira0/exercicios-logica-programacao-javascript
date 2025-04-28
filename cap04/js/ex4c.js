const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  let troco;

  if (valor >= 3) {
    troco = valor - 3;
    resp1.innerText = `Tempo: 120 min`;
    resp2.innerText = troco > 0 ? `Troco R$: ${troco.toFixed(2)}` : "";
  } else if (valor >= 1.75) {
    troco = valor - 1.75;
    resp1.innerText = `Tempo: 60 min`;
    resp2.innerText = troco > 0 ? `Troco R$: ${troco.toFixed(2)}` : "";
  } else if (valor >= 1) {
    troco = valor - 1.0;
    resp1.innerText = `Tempo: 30 min`;
    resp2.innerText = troco > 0 ? `Troco R$: ${troco.toFixed(2)}` : "";
  } else {
    resp1.innerText = `Valor insuficiente`;
  }
});
