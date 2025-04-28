const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const numero = Number(frm.inNumero.value);
  const resultado = numero % 2;

  if (resultado == 0) {
    resp.innerText = `${numero} é par`;
  } else {
    resp.innerText = `${numero} é ímpar`;
  }
});
